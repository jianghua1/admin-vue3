import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import VueMacros from 'unplugin-vue-macros'

import { VueRouterAutoImports } from 'unplugin-vue-router'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'

import { VitePWA } from 'vite-plugin-pwa'

import { viteMockServe } from 'vite-plugin-mock'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

import Icons from 'unplugin-icons/vite'

import { visualizer } from 'rollup-plugin-visualizer'
import { cdn } from 'vite-plugin-cdn2'
import electron from 'vite-plugin-electron'
//开头需要配置：
// export default defineConfig(({ command, mode }) => {
//   const isProd = mode === 'production'
//   const base = isProd ? process.env.BASE_PATH || '/' : './'

//   const isAnalysis = process.env.ANALYSIS === 'true'
//   const isSourceMap = process.env.SOURCE_MAP === 'true'

//   const isElectron = process.env.ELECTRON === 'true'
//   const isBuild = command === 'build'
//   const isServe = command === 'serve'

//   const sourceMap = isServe || !!process.env.VSCODE_DEBUG

//   return {
//     base,
//     build: {
//       sourcemap: isSourceMap
//     }
//   }
// })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue({
      script: {
        defineModel: true
      }
    }),
    vueJsx(),
    // Vue3.3以后，不需要这些新的特性了
    // VueMacros.vite({
    //   plugins: {
    //     vue: vue(),
    //     vueJsx: vueJsx() // 如果需要
    //   }
    // }),
    UnoCSS(),
    electron({
      entry: 'electron/main.ts'
    }),
    Icons({
      // 配置选项
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    Components({
      directoryAsNamespace: false,
      collapseSamePrefixes: true,
      resolvers: [ElementPlusResolver()]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      manifest: {
        name: 'Vite App',
        short_name: 'Vite App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate'
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: false
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: {
        full: true,
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill'
            }
          }
        ]
      }
    }),
    visualizer({
      open: true
    }),
    cdn({
      modules: [
        { name: 'vue', relativeModule: './dist/vue.global.prod.js' },
        'vue-demi',
        { name: 'pinia', relativeModule: './dist/pinia.iife.prod.js' },
        // { name: 'vue-router', relativeModule: './dist/vue-router.global.prod.js' },
        { name: 'element-plus', aliases: ['es', 'lib'] },
        {
          name: 'echarts',
          aliases: ['core', 'renderers', 'components', 'features', 'charts']
        }
      ],
      transform: () => {
        return {
          script: (scriptNode) => {
            const { tag, name } = scriptNode
            if (tag === 'script') {
              if (name === 'echarts') {
                scrIptNode.defer = true
              }
            }
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    // TODO: 等环境变量都能使用后修改这里的逻辑
    include: false ? [] : ['element-plus', 'dayjs', 'element-plus/es/components/**/style/css']
  },
  logLevel: 'info'
})
