/* eslint-env node */
const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')
const pkg = require('../package.json')
const pkgName = pkg.name

const appendMarker = '// append-by-scripts'

const basePath = path.join(__dirname, '..')

const getPath = (name) => path.join(basePath, name)

const componentsDir = getPath('src/components')
const directivesDir = getPath('src/directives/modules')
const mainFilePath = getPath('src/main.ts')
const typesFilePath = getPath('src/components-types.ts')
const vitePluginFilePath = getPath('src/vite-plugin.ts')

const componentPrefix = 'Vp'
const needChangeNameArr = ['VForm', 'VFormItem', 'VFormLayout', 'VTable', 'VTableColumn']
let componentExports = ''
let pluginContentLines = []
let components = []
let hooksExports = ''
const hookArr = []
let hooksContent = ''

// types
let typesExports = ''
let importStatements = ''
let exportStatements = ''
const typesFiles = []

function renameTypes(filePath, index) {
  // 读取类型文件
  let content = fs.readFileSync(filePath, 'utf8')
  // 移除所有单行和多行注释
  content = content.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, '')

  const relativePath = './components/' + path.relative(componentsDir, filePath)

  const moduleName = `TypesModule${index}`

  importStatements += `import * as ${moduleName} from '${relativePath.replace('.ts', '')}';\n`
  // 使用正则匹配其中的export接口、类型、枚举
  const matches = content.match(/export (type|interface|enum) (\w+)(<.*>)?/g) || []
  // 加入类型私缀进行export导出
  matches.forEach((match) => {
    const typeName = match.split(' ')[2]
    exportStatements += `export type ${componentPrefix}${typeName} = ${moduleName}.${typeName};\n`
  })
}

function walkDir(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else {
      if (stat.isFile()) {
        // 读取components中所有.vue结尾的文件
        const extension = path.extname(file)
        const baseName = path.basename(file, extension)

        const importPath = `./components/${path
          .relative(componentsDir, filePath)
          .replace('/\\/g', '/')}`

        // 处理组件
        if (extension === '.vue') {
          componentExports += `import ${baseName} from '${importPath}';\n`

          // app.use('componentName', Component)
          let componentName = baseName
          // eslint会提示Menu与Header与HTML保留字段名冲突
          if (needChangeNameArr.includes(baseName)) {
            componentName = `${baseName.replace('V', '')}`
          }
          componentName = componentPrefix + componentName
          components.push(`${baseName} as ${componentName}`)
          // vp -> vue plus
          pluginContentLines.push(`  app.component('${componentName}', ${baseName})`)
        }

        // 处理use vue composition API方法
        if (extension === '.ts' && baseName.startsWith('use')) {
          hooksExports += `export {${baseName}} from '${importPath.replace('.ts', '')}';\n`
          hookArr.push(baseName)
        }

        // 处理types文件并导出
        if (extension === '.ts' && baseName.startsWith('type')) {
          // 读取types文件的内容
          // const typesFileContent = fs.readFileSync(filePath, 'utf8')
          // typesExports += `export * from '${importPath.replace('.ts', '')}'\n`
          typesFiles.push(filePath)
        }
      }
    }
  })
}
walkDir(componentsDir)

let directivesImport = ''
const directives = []

function walkDirectives(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else {
      if (stat.isFile()) {
        // 读取components中所有.vue结尾的文件
        const extension = path.extname(file)
        const baseName = path.basename(file, extension)

        const importPath = `./directives/modules/${path
          .relative(directivesDir, filePath)
          .replace('/\\/g', '/')}`

        if (extension === '.ts') {
          const directiveName =
            componentPrefix +
            'Directive' +
            baseName
              .replace(/-./g, (s) => s[1].toUpperCase())
              .replace(/^(.)/, (s) => s.toUpperCase())
          directivesImport += `import ${directiveName} from '${importPath.replace('.ts', '')}';\n`

          directives.push(directiveName)
        }
      }
    }
  })
}
walkDirectives(directivesDir)

// 写入types文件
typesFiles.forEach((filePath, index) => {
  renameTypes(filePath, index)
})

typesExports = importStatements + exportStatements

// 写入plugin文件
hooksContent += `
export const VpAutoImports = {
  '${pkgName}': [
    ${hookArr.map((o) => `'${o}'`).join(',')}
  ]
}
`

hooksContent += `
import type { ComponentResolver } from 'unplugin-vue-components/types'

export const VpComponentsResolver = [
  {
    type: 'component',
    resolve: (componentName) => {
      if (componentName.startsWith('Vp'))
        return { name: componentName, from: '${pkgName}' }
    }
  },
  {
    type: 'directive',
    resolve: (name: string) => {
      const directives = {
        ${directives
          .map((o) => `${o.replace('VpDirective', '')}: { importName: '${o}' }`)
          .join(',\n')}
      } as Record<string, any>
      if (!directives[name]) return
      return {
        name: directives[name].importName,
        from: '${pkgName}'
      }
    }
  }
] as ComponentResolver[]
`

fs.writeFileSync(vitePluginFilePath, hooksContent)
console.log('写vite-plugin.ts文件成功')

// 写类型文件
fs.writeFileSync(typesFilePath, typesExports)
console.log('写components-types.ts文件成功')

// 按照export句式写入到src/main.ts "// append-by-scripts" 之后
let mainFileContent = fs.readFileSync(mainFilePath, 'utf8')
const markerIndex = mainFileContent.indexOf(appendMarker)

if (markerIndex !== -1) {
  mainFileContent = mainFileContent.substring(0, markerIndex + appendMarker.length)
} else {
  mainFileContent += '\n' + appendMarker
}

const pluginContent = `
export const globalPlugin = {
  install(app:any) {
    ${pluginContentLines.join('\n')}
  }
}

export default globalPlugin
export { ${components.join(', ')},${directives.join(', ')} }
`

mainFileContent +=
  '\n' + `${componentExports}\n${directivesImport}\n${pluginContent}\n${hooksExports}`

mainFileContent += `export * from './components-types'`

fs.writeFileSync(mainFilePath, mainFileContent)
console.log('写main.ts文件成功')

exec('npm run format', (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }
  if (stdout) {
    console.log(stdout)
  }
  if (stderr) {
    console.error(stderr)
  }
})
