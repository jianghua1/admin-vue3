// packages/el-admin-components/vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/vitest@1.3.1_@types+node@20.11.24_@vitest+ui@1.3.1_jsdom@24.0.0_sass@1.71.1/node_modules/vitest/dist/config.js";

// packages/el-admin-components/vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/vite@5.1.5_@types+node@20.11.24_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.5_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.1.5_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// packages/el-admin-components/package.json
var package_default = {
  name: "el-admin-components",
  version: "1.0.4",
  private: false,
  main: "./dist/el-admin-components.es.js",
  module: "./dist/el-admin-components.es.js",
  types: "./dist/index.d.ts",
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/el-admin-components.es.js",
      require: "./dist/el-admin-components.umd.js"
    },
    "./dist/style.css": "./dist/style.css",
    "./style": "./dist/style.css",
    "./locales/*": "./dist/locales/*",
    "./vite": {
      types: "./dist/vite-plugin.d.ts",
      import: "./dist/vite-plugin.js",
      require: "./dist/vite-plugin.cjs"
    },
    "./*": "./"
  },
  files: [
    "dist"
  ],
  type: "module",
  scripts: {
    dev: "vite",
    generate: "node build/script.cjs",
    "generate:dev": "nodemon",
    build: 'run-p type-check "build-only {@}" --',
    "build:watch": "cross-env SOURCEMAP=true vite build --watch --emptyOutDir=false",
    "build:all": "run-s build plugin",
    "test:unit": "vitest",
    "build-only": "vite build",
    "type-check": "vue-tsc --build --force",
    lint: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    format: "prettier --write src/",
    analysis: "cross-env ANALYSIS=true npm run build-only",
    plugin: "tsup src/vite-plugin.ts --format cjs,esm --dts --tsconfig tsconfig.node.json",
    "plugin:dev": "tsup --watch src/vite-plugin.ts --format cjs,esm --dts --tsconfig tsconfig.node.json"
  },
  peerDependencies: {
    "@vueuse/core": "^10.7.0",
    echarts: "^5.4.3",
    "element-plus": "^2.4.4",
    howler: "^2.2.4",
    sortablejs: "^1.15.1",
    vditor: "^3.9.7",
    "video.js": "^8.6.1",
    vue: "^3.3.11",
    "vue-echarts": "^6.6.5",
    "vue-i18n": "^9.8.0",
    "vue-router": "^4.2.5"
  },
  dependencies: {
    "@unocss/reset": "^0.58.5",
    defu: "^6.1.4"
  },
  devDependencies: {
    "@iconify/json": "^2.2.188",
    "@iconify/vue": "^4.1.1",
    "@intlify/unplugin-vue-i18n": "^2.0.0",
    "@rushstack/eslint-patch": "^1.7.2",
    "@tsconfig/node18": "^18.2.2",
    "@types/howler": "^2.2.11",
    "@types/jsdom": "^21.1.6",
    "@types/node": "^20.11.22",
    "@types/sortablejs": "^1.15.8",
    "@unocss/transformer-directives": "^0.58.5",
    "@unocss/transformer-variant-group": "^0.58.5",
    "@vitejs/plugin-vue": "^5.0.4",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    "@vue/eslint-config-prettier": "^9.0.0",
    "@vue/eslint-config-typescript": "^12.0.0",
    "@vue/test-utils": "^2.4.4",
    "@vue/tsconfig": "^0.5.0",
    "cross-env": "^7.0.3",
    eslint: "^8.57.0",
    "eslint-plugin-vue": "^9.22.0",
    jiti: "^1.21.0",
    jsdom: "^24.0.0",
    nodemon: "^3.1.0",
    "npm-run-all2": "^6.1.2",
    prettier: "^3.2.5",
    "rollup-plugin-copy": "^3.5.0",
    "rollup-plugin-visualizer": "^5.11.0",
    sass: "^1.71.1",
    tsup: "^8.0.2",
    typescript: "~5.3.3",
    unocss: "^0.58.5",
    "unplugin-auto-import": "^0.17.5",
    "unplugin-vue-components": "^0.26.0",
    vite: "^5.1.4",
    "vite-plugin-dts": "^3.7.3",
    vitest: "^1.3.1",
    "vue-tsc": "^1.8.25"
  },
  description: "This template should help get you started developing with Vue 3 in Vite.",
  keywords: [],
  author: "Brian <admin@wayearn.com>",
  license: "MIT"
};

// packages/el-admin-components/vite.config.ts
import { resolve } from "path";
import dts from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.24_typescript@5.3.3_vite@5.1.5/node_modules/vite-plugin-dts/dist/index.mjs";
import UnoCSS from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.35_rollup@2.79.1_vite@5.1.5/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@2.79.1_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import copy from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/rollup-plugin-copy@3.5.0/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
import { visualizer } from "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { exec } from "child_process";
var __vite_injected_original_dirname = "/Users/toimc/Downloads/\u5927\u524D\u7AEF2.0/\u8BFE\u4EF6/\u7B2C19\u5468 Vue\u7EC4\u4EF6\u5E93\u5F00\u53D1\u77E5\u8BC6\u4ED8\u8D39\u9879\u76EE\u6838\u5FC3\u9875\u9762/pk-admin/packages/el-admin-components";
var __vite_injected_original_import_meta_url = "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/packages/el-admin-components/vite.config.ts";
var pkgName = package_default.name;
var runPluginCommand = () => {
  return {
    name: "run-plugin-command",
    // 插件名称
    buildEnd() {
      exec("npm run plugin", (error, stdout, stderr) => {
        if (error) {
          console.error(`\u6267\u884C\u547D\u4EE4\u51FA\u9519: ${error}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }
  };
};
var vite_config_default = defineConfig(() => {
  const isAnalysis = process.env.ANALYSIS === "true";
  const isSourcemap = process.env.SOURCEMAP === "true";
  return {
    plugins: [
      vue({
        script: {
          defineModel: true,
          propsDestructure: true
        }
      }),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/,
          // .vue
          /\.md$/
          // .md
        ],
        // global imports to register
        imports: [
          // presets
          "vue",
          // 'vue-router'
          // VueRouterAutoImports,
          "@vueuse/core"
        ],
        resolvers: [
          // ElementPlusResolver()
        ],
        vueTemplate: true
      }),
      Components({
        directoryAsNamespace: false,
        collapseSamePrefixes: true,
        resolvers: [
          // ElementPlusResolver()
        ]
      }),
      // I18n({
      //   include: [path.resolve(__dirname, './locales/**')],
      //   // 说明:由于配置了modules/i18n.ts中默认为legacy: false
      //   // 所以禁止修改
      //   compositionOnly: true,
      //   jitCompilation: true
      // }),
      dts({
        rollupTypes: true,
        include: ["src/*.ts"],
        compilerOptions: {
          skipDiagnostics: true
        }
      }),
      copy({
        targets: [
          {
            src: "./locales",
            dest: "dist/"
          }
        ],
        hook: "writeBundle"
      }),
      visualizer({
        open: isAnalysis
      }),
      runPluginCommand()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      minify: true,
      sourcemap: isSourcemap,
      // cssCodeSplit: true,
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
        name: pkgName,
        formats: ["es", "umd"],
        // the proper extensions will be added
        fileName: (format) => `${pkgName}.${format}.js`
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: [
          "vue",
          "element-plus",
          "video.js",
          "vditor",
          "howler",
          "vue-router",
          "vue-echarts",
          "echarts",
          "sortablejs",
          "vue-i18n",
          "@vueuse/core",
          // 'el-admin-components',
          "el-admin-components/locales/zh-cn.json",
          "el-admin-components/locales/en.json"
        ],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
            "element-plus": "ElementPlus",
            "video.js": "videojs",
            vditor: "Vditor",
            howler: "Howler",
            "vue-router": "VueRouter",
            "vue-echarts": "VueEcharts",
            echarts: "echarts",
            sortablejs: "Sortablejs",
            "vue-i18n": "VueI18n"
          },
          exports: "named"
        }
      }
    }
  };
});

// packages/el-admin-components/vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///Users/toimc/Downloads/%E5%A4%A7%E5%89%8D%E7%AB%AF2.0/%E8%AF%BE%E4%BB%B6/%E7%AC%AC19%E5%91%A8%20Vue%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E9%A1%B5%E9%9D%A2/pk-admin/packages/el-admin-components/vitest.config.ts";
var vitest_config_default = defineConfig2((config) => {
  return mergeConfig(
    vite_config_default(config),
    defineConfig2({
      test: {
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "e2e/*"],
        root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
      }
    })
  );
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvZWwtYWRtaW4tY29tcG9uZW50cy92aXRlc3QuY29uZmlnLnRzIiwgInBhY2thZ2VzL2VsLWFkbWluLWNvbXBvbmVudHMvdml0ZS5jb25maWcudHMiLCAicGFja2FnZXMvZWwtYWRtaW4tY29tcG9uZW50cy9wYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdG9pbWMvRG93bmxvYWRzL1x1NTkyN1x1NTI0RFx1N0FFRjIuMC9cdThCRkVcdTRFRjYvXHU3QjJDMTlcdTU0NjggVnVlXHU3RUM0XHU0RUY2XHU1RTkzXHU1RjAwXHU1M0QxXHU3N0U1XHU4QkM2XHU0RUQ4XHU4RDM5XHU5ODc5XHU3NkVFXHU2ODM4XHU1RkMzXHU5ODc1XHU5NzYyL3BrLWFkbWluL3BhY2thZ2VzL2VsLWFkbWluLWNvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy90b2ltYy9Eb3dubG9hZHMvXHU1OTI3XHU1MjREXHU3QUVGMi4wL1x1OEJGRVx1NEVGNi9cdTdCMkMxOVx1NTQ2OCBWdWVcdTdFQzRcdTRFRjZcdTVFOTNcdTVGMDBcdTUzRDFcdTc3RTVcdThCQzZcdTRFRDhcdThEMzlcdTk4NzlcdTc2RUVcdTY4MzhcdTVGQzNcdTk4NzVcdTk3NjIvcGstYWRtaW4vcGFja2FnZXMvZWwtYWRtaW4tY29tcG9uZW50cy92aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90b2ltYy9Eb3dubG9hZHMvJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGMi4wLyVFOCVBRiVCRSVFNCVCQiVCNi8lRTclQUMlQUMxOSVFNSU5MSVBOCUyMFZ1ZSVFNyVCQiU4NCVFNCVCQiVCNiVFNSVCQSU5MyVFNSVCQyU4MCVFNSU4RiU5MSVFNyU5RiVBNSVFOCVBRiU4NiVFNCVCQiU5OCVFOCVCNCVCOSVFOSVBMSVCOSVFNyU5QiVBRSVFNiVBMCVCOCVFNSVCRiU4MyVFOSVBMSVCNSVFOSU5RCVBMi9way1hZG1pbi9wYWNrYWdlcy9lbC1hZG1pbi1jb21wb25lbnRzL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBtZXJnZUNvbmZpZywgZGVmaW5lQ29uZmlnLCBjb25maWdEZWZhdWx0cyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXG5pbXBvcnQgdml0ZUNvbmZpZyBmcm9tICcuL3ZpdGUuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZykgPT4ge1xuICByZXR1cm4gbWVyZ2VDb25maWcoXG4gICAgdml0ZUNvbmZpZyhjb25maWcpLFxuICAgIGRlZmluZUNvbmZpZyh7XG4gICAgICB0ZXN0OiB7XG4gICAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qJ10sXG4gICAgICAgIHJvb3Q6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi8nLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgfVxuICAgIH0pXG4gIClcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90b2ltYy9Eb3dubG9hZHMvXHU1OTI3XHU1MjREXHU3QUVGMi4wL1x1OEJGRVx1NEVGNi9cdTdCMkMxOVx1NTQ2OCBWdWVcdTdFQzRcdTRFRjZcdTVFOTNcdTVGMDBcdTUzRDFcdTc3RTVcdThCQzZcdTRFRDhcdThEMzlcdTk4NzlcdTc2RUVcdTY4MzhcdTVGQzNcdTk4NzVcdTk3NjIvcGstYWRtaW4vcGFja2FnZXMvZWwtYWRtaW4tY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3RvaW1jL0Rvd25sb2Fkcy9cdTU5MjdcdTUyNERcdTdBRUYyLjAvXHU4QkZFXHU0RUY2L1x1N0IyQzE5XHU1NDY4IFZ1ZVx1N0VDNFx1NEVGNlx1NUU5M1x1NUYwMFx1NTNEMVx1NzdFNVx1OEJDNlx1NEVEOFx1OEQzOVx1OTg3OVx1NzZFRVx1NjgzOFx1NUZDM1x1OTg3NVx1OTc2Mi9way1hZG1pbi9wYWNrYWdlcy9lbC1hZG1pbi1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90b2ltYy9Eb3dubG9hZHMvJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGMi4wLyVFOCVBRiVCRSVFNCVCQiVCNi8lRTclQUMlQUMxOSVFNSU5MSVBOCUyMFZ1ZSVFNyVCQiU4NCVFNCVCQiVCNiVFNSVCQSU5MyVFNSVCQyU4MCVFNSU4RiU5MSVFNyU5RiVBNSVFOCVBRiU4NiVFNCVCQiU5OCVFOCVCNCVCOSVFOSVBMSVCOSVFNyU5QiVBRSVFNiVBMCVCOCVFNSVCRiU4MyVFOSVBMSVCNSVFOSU5RCVBMi9way1hZG1pbi9wYWNrYWdlcy9lbC1hZG1pbi1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG4vLyBpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcblxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG4vLyBpbXBvcnQgSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IGNvcHkgZnJvbSAncm9sbHVwLXBsdWdpbi1jb3B5J1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuXG4vLyBpbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG5jb25zdCBwa2dOYW1lID0gcGtnLm5hbWVcblxuLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2M0QyXHU0RUY2XG5jb25zdCBydW5QbHVnaW5Db21tYW5kID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdydW4tcGx1Z2luLWNvbW1hbmQnLCAvLyBcdTYzRDJcdTRFRjZcdTU0MERcdTc5RjBcbiAgICBidWlsZEVuZCgpIHtcbiAgICAgIC8vIFx1NTcyOFx1Njc4NFx1NUVGQVx1NUYwMFx1NTlDQlx1NjVGNlx1NjI2N1x1ODg0Q1xuICAgICAgZXhlYygnbnBtIHJ1biBwbHVnaW4nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFx1NjI2N1x1ODg0Q1x1NTQ3RFx1NEVFNFx1NTFGQVx1OTUxOTogJHtlcnJvcn1gKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYHN0ZG91dDogJHtzdGRvdXR9YClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICBjb25zdCBpc0FuYWx5c2lzID0gcHJvY2Vzcy5lbnYuQU5BTFlTSVMgPT09ICd0cnVlJ1xuICBjb25zdCBpc1NvdXJjZW1hcCA9IHByb2Nlc3MuZW52LlNPVVJDRU1BUCA9PT0gJ3RydWUnXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKHtcbiAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgZGVmaW5lTW9kZWw6IHRydWUsXG4gICAgICAgICAgcHJvcHNEZXN0cnVjdHVyZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHZ1ZUpzeCgpLFxuICAgICAgVW5vQ1NTKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAgICAgL1xcLnZ1ZSQvLFxuICAgICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICAgICAgL1xcLm1kJC8gLy8gLm1kXG4gICAgICAgIF0sXG5cbiAgICAgICAgLy8gZ2xvYmFsIGltcG9ydHMgdG8gcmVnaXN0ZXJcbiAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgIC8vIHByZXNldHNcbiAgICAgICAgICAndnVlJyxcbiAgICAgICAgICAvLyAndnVlLXJvdXRlcidcbiAgICAgICAgICAvLyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAgICAnQHZ1ZXVzZS9jb3JlJ1xuICAgICAgICBdLFxuICAgICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgICAvLyBFbGVtZW50UGx1c1Jlc29sdmVyKClcbiAgICAgICAgXSxcbiAgICAgICAgdnVlVGVtcGxhdGU6IHRydWVcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIGRpcmVjdG9yeUFzTmFtZXNwYWNlOiBmYWxzZSxcbiAgICAgICAgY29sbGFwc2VTYW1lUHJlZml4ZXM6IHRydWUsXG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIC8vIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKVxuICAgICAgICBdXG4gICAgICB9KSxcbiAgICAgIC8vIEkxOG4oe1xuICAgICAgLy8gICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vbG9jYWxlcy8qKicpXSxcbiAgICAgIC8vICAgLy8gXHU4QkY0XHU2NjBFOlx1NzUzMVx1NEU4RVx1OTE0RFx1N0Y2RVx1NEU4Nm1vZHVsZXMvaTE4bi50c1x1NEUyRFx1OUVEOFx1OEJBNFx1NEUzQWxlZ2FjeTogZmFsc2VcbiAgICAgIC8vICAgLy8gXHU2MjQwXHU0RUU1XHU3OTgxXHU2QjYyXHU0RkVFXHU2NTM5XG4gICAgICAvLyAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIC8vICAgaml0Q29tcGlsYXRpb246IHRydWVcbiAgICAgIC8vIH0pLFxuICAgICAgZHRzKHtcbiAgICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXG4gICAgICAgIGluY2x1ZGU6IFsnc3JjLyoudHMnXSxcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgc2tpcERpYWdub3N0aWNzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgY29weSh7XG4gICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcuL2xvY2FsZXMnLFxuICAgICAgICAgICAgZGVzdDogJ2Rpc3QvJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgaG9vazogJ3dyaXRlQnVuZGxlJ1xuICAgICAgfSksXG4gICAgICB2aXN1YWxpemVyKHtcbiAgICAgICAgb3BlbjogaXNBbmFseXNpc1xuICAgICAgfSksXG4gICAgICBydW5QbHVnaW5Db21tYW5kKClcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgc291cmNlbWFwOiBpc1NvdXJjZW1hcCxcbiAgICAgIC8vIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAgIGxpYjoge1xuICAgICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHMnKSxcbiAgICAgICAgbmFtZTogcGtnTmFtZSxcbiAgICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcbiAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGAke3BrZ05hbWV9LiR7Zm9ybWF0fS5qc2BcbiAgICAgIH0sXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuICAgICAgICBleHRlcm5hbDogW1xuICAgICAgICAgICd2dWUnLFxuICAgICAgICAgICdlbGVtZW50LXBsdXMnLFxuICAgICAgICAgICd2aWRlby5qcycsXG4gICAgICAgICAgJ3ZkaXRvcicsXG4gICAgICAgICAgJ2hvd2xlcicsXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAgICd2dWUtZWNoYXJ0cycsXG4gICAgICAgICAgJ2VjaGFydHMnLFxuICAgICAgICAgICdzb3J0YWJsZWpzJyxcbiAgICAgICAgICAndnVlLWkxOG4nLFxuICAgICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICAgIC8vICdlbC1hZG1pbi1jb21wb25lbnRzJyxcbiAgICAgICAgICAnZWwtYWRtaW4tY29tcG9uZW50cy9sb2NhbGVzL3poLWNuLmpzb24nLFxuICAgICAgICAgICdlbC1hZG1pbi1jb21wb25lbnRzL2xvY2FsZXMvZW4uanNvbidcbiAgICAgICAgXSxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgLy8gXHU1NzI4IFVNRCBcdTY3ODRcdTVFRkFcdTZBMjFcdTVGMEZcdTRFMEJcdTRFM0FcdThGRDlcdTRFOUJcdTU5MTZcdTkwRThcdTUzMTZcdTc2ODRcdTRGOURcdThENTZcdTYzRDBcdTRGOUJcdTRFMDBcdTRFMkFcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcbiAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICAgJ2VsZW1lbnQtcGx1cyc6ICdFbGVtZW50UGx1cycsXG4gICAgICAgICAgICAndmlkZW8uanMnOiAndmlkZW9qcycsXG4gICAgICAgICAgICB2ZGl0b3I6ICdWZGl0b3InLFxuICAgICAgICAgICAgaG93bGVyOiAnSG93bGVyJyxcbiAgICAgICAgICAgICd2dWUtcm91dGVyJzogJ1Z1ZVJvdXRlcicsXG4gICAgICAgICAgICAndnVlLWVjaGFydHMnOiAnVnVlRWNoYXJ0cycsXG4gICAgICAgICAgICBlY2hhcnRzOiAnZWNoYXJ0cycsXG4gICAgICAgICAgICBzb3J0YWJsZWpzOiAnU29ydGFibGVqcycsXG4gICAgICAgICAgICAndnVlLWkxOG4nOiAnVnVlSTE4bidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsICJ7XG4gIFwibmFtZVwiOiBcImVsLWFkbWluLWNvbXBvbmVudHNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjRcIixcbiAgXCJwcml2YXRlXCI6IGZhbHNlLFxuICBcIm1haW5cIjogXCIuL2Rpc3QvZWwtYWRtaW4tY29tcG9uZW50cy5lcy5qc1wiLFxuICBcIm1vZHVsZVwiOiBcIi4vZGlzdC9lbC1hZG1pbi1jb21wb25lbnRzLmVzLmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2VsLWFkbWluLWNvbXBvbmVudHMuZXMuanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9lbC1hZG1pbi1jb21wb25lbnRzLnVtZC5qc1wiXG4gICAgfSxcbiAgICBcIi4vZGlzdC9zdHlsZS5jc3NcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCIsXG4gICAgXCIuL3N0eWxlXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiLFxuICAgIFwiLi9sb2NhbGVzLypcIjogXCIuL2Rpc3QvbG9jYWxlcy8qXCIsXG4gICAgXCIuL3ZpdGVcIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC92aXRlLXBsdWdpbi5kLnRzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC92aXRlLXBsdWdpbi5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3ZpdGUtcGx1Z2luLmNqc1wiXG4gICAgfSxcbiAgICBcIi4vKlwiOiBcIi4vXCJcbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJnZW5lcmF0ZVwiOiBcIm5vZGUgYnVpbGQvc2NyaXB0LmNqc1wiLFxuICAgIFwiZ2VuZXJhdGU6ZGV2XCI6IFwibm9kZW1vblwiLFxuICAgIFwiYnVpbGRcIjogXCJydW4tcCB0eXBlLWNoZWNrIFxcXCJidWlsZC1vbmx5IHtAfVxcXCIgLS1cIixcbiAgICBcImJ1aWxkOndhdGNoXCI6IFwiY3Jvc3MtZW52IFNPVVJDRU1BUD10cnVlIHZpdGUgYnVpbGQgLS13YXRjaCAtLWVtcHR5T3V0RGlyPWZhbHNlXCIsXG4gICAgXCJidWlsZDphbGxcIjogXCJydW4tcyBidWlsZCBwbHVnaW5cIixcbiAgICBcInRlc3Q6dW5pdFwiOiBcInZpdGVzdFwiLFxuICAgIFwiYnVpbGQtb25seVwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcInR5cGUtY2hlY2tcIjogXCJ2dWUtdHNjIC0tYnVpbGQgLS1mb3JjZVwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuIC0tZXh0IC52dWUsLmpzLC5qc3gsLmNqcywubWpzLC50cywudHN4LC5jdHMsLm10cyAtLWZpeCAtLWlnbm9yZS1wYXRoIC5naXRpZ25vcmVcIixcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgc3JjL1wiLFxuICAgIFwiYW5hbHlzaXNcIjogXCJjcm9zcy1lbnYgQU5BTFlTSVM9dHJ1ZSBucG0gcnVuIGJ1aWxkLW9ubHlcIixcbiAgICBcInBsdWdpblwiOiBcInRzdXAgc3JjL3ZpdGUtcGx1Z2luLnRzIC0tZm9ybWF0IGNqcyxlc20gLS1kdHMgLS10c2NvbmZpZyB0c2NvbmZpZy5ub2RlLmpzb25cIixcbiAgICBcInBsdWdpbjpkZXZcIjogXCJ0c3VwIC0td2F0Y2ggc3JjL3ZpdGUtcGx1Z2luLnRzIC0tZm9ybWF0IGNqcyxlc20gLS1kdHMgLS10c2NvbmZpZyB0c2NvbmZpZy5ub2RlLmpzb25cIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjcuMFwiLFxuICAgIFwiZWNoYXJ0c1wiOiBcIl41LjQuM1wiLFxuICAgIFwiZWxlbWVudC1wbHVzXCI6IFwiXjIuNC40XCIsXG4gICAgXCJob3dsZXJcIjogXCJeMi4yLjRcIixcbiAgICBcInNvcnRhYmxlanNcIjogXCJeMS4xNS4xXCIsXG4gICAgXCJ2ZGl0b3JcIjogXCJeMy45LjdcIixcbiAgICBcInZpZGVvLmpzXCI6IFwiXjguNi4xXCIsXG4gICAgXCJ2dWVcIjogXCJeMy4zLjExXCIsXG4gICAgXCJ2dWUtZWNoYXJ0c1wiOiBcIl42LjYuNVwiLFxuICAgIFwidnVlLWkxOG5cIjogXCJeOS44LjBcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC4yLjVcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdW5vY3NzL3Jlc2V0XCI6IFwiXjAuNTguNVwiLFxuICAgIFwiZGVmdVwiOiBcIl42LjEuNFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBpY29uaWZ5L2pzb25cIjogXCJeMi4yLjE4OFwiLFxuICAgIFwiQGljb25pZnkvdnVlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4blwiOiBcIl4yLjAuMFwiLFxuICAgIFwiQHJ1c2hzdGFjay9lc2xpbnQtcGF0Y2hcIjogXCJeMS43LjJcIixcbiAgICBcIkB0c2NvbmZpZy9ub2RlMThcIjogXCJeMTguMi4yXCIsXG4gICAgXCJAdHlwZXMvaG93bGVyXCI6IFwiXjIuMi4xMVwiLFxuICAgIFwiQHR5cGVzL2pzZG9tXCI6IFwiXjIxLjEuNlwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTEuMjJcIixcbiAgICBcIkB0eXBlcy9zb3J0YWJsZWpzXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiQHVub2Nzcy90cmFuc2Zvcm1lci1kaXJlY3RpdmVzXCI6IFwiXjAuNTguNVwiLFxuICAgIFwiQHVub2Nzcy90cmFuc2Zvcm1lci12YXJpYW50LWdyb3VwXCI6IFwiXjAuNTguNVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMC40XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjMuMS4wXCIsXG4gICAgXCJAdnVlL2VzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4wLjBcIixcbiAgICBcIkB2dWUvZXNsaW50LWNvbmZpZy10eXBlc2NyaXB0XCI6IFwiXjEyLjAuMFwiLFxuICAgIFwiQHZ1ZS90ZXN0LXV0aWxzXCI6IFwiXjIuNC40XCIsXG4gICAgXCJAdnVlL3RzY29uZmlnXCI6IFwiXjAuNS4wXCIsXG4gICAgXCJjcm9zcy1lbnZcIjogXCJeNy4wLjNcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tdnVlXCI6IFwiXjkuMjIuMFwiLFxuICAgIFwiaml0aVwiOiBcIl4xLjIxLjBcIixcbiAgICBcImpzZG9tXCI6IFwiXjI0LjAuMFwiLFxuICAgIFwibm9kZW1vblwiOiBcIl4zLjEuMFwiLFxuICAgIFwibnBtLXJ1bi1hbGwyXCI6IFwiXjYuMS4yXCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjIuNVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1jb3B5XCI6IFwiXjMuNS4wXCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjogXCJeNS4xMS4wXCIsXG4gICAgXCJzYXNzXCI6IFwiXjEuNzEuMVwiLFxuICAgIFwidHN1cFwiOiBcIl44LjAuMlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIn41LjMuM1wiLFxuICAgIFwidW5vY3NzXCI6IFwiXjAuNTguNVwiLFxuICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMC4xNy41XCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI2LjBcIixcbiAgICBcInZpdGVcIjogXCJeNS4xLjRcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjcuM1wiLFxuICAgIFwidml0ZXN0XCI6IFwiXjEuMy4xXCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwiXjEuOC4yNVwiXG4gIH0sXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIHRlbXBsYXRlIHNob3VsZCBoZWxwIGdldCB5b3Ugc3RhcnRlZCBkZXZlbG9waW5nIHdpdGggVnVlIDMgaW4gVml0ZS5cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXSxcbiAgXCJhdXRob3JcIjogXCJCcmlhbiA8YWRtaW5Ad2F5ZWFybi5jb20+XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFrb0IsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ2hxQixTQUFTLGFBQWEsZ0JBQUFDLGVBQWMsc0JBQXNCOzs7QUNEb2tCLFNBQVMsZUFBZSxPQUFBQyxZQUFXO0FBR2pxQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZOzs7QUNMbkI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxFQUNSLFFBQVU7QUFBQSxFQUNWLE9BQVM7QUFBQSxFQUNULFNBQVc7QUFBQSxJQUNULEtBQUs7QUFBQSxNQUNILE9BQVM7QUFBQSxNQUNULFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxvQkFBb0I7QUFBQSxJQUNwQixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsSUFDZixVQUFVO0FBQUEsTUFDUixPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsVUFBWTtBQUFBLElBQ1osZ0JBQWdCO0FBQUEsSUFDaEIsT0FBUztBQUFBLElBQ1QsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLElBQ2QsY0FBYztB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QUs7QUFBQTtBQUFBLFFBRXJCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxJQUFJLE1BQU07QUFBQSxNQUM1QztBQUFBLE1BQ0EsZUFBZTtBQUFBO0FBQUEsUUFFYixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQTtBQUFBLFVBRUE7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBO0FBQUEsVUFFTixTQUFTO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxnQkFBZ0I7QUFBQSxZQUNoQixZQUFZO0FBQUEsWUFDWixRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxlQUFlO0FBQUEsWUFDZixTQUFTO0FBQUEsWUFDVCxZQUFZO0FBQUEsWUFDWixZQUFZO0FBQUEsVUFDZDtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUR4S3FTLElBQU1DLDRDQUEyQztBQUl2VixJQUFPLHdCQUFRQyxjQUFhLENBQUMsV0FBVztBQUN0QyxTQUFPO0FBQUEsSUFDTCxvQkFBVyxNQUFNO0FBQUEsSUFDakJBLGNBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxRQUNKLGFBQWE7QUFBQSxRQUNiLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUyxPQUFPO0FBQUEsUUFDNUMsTUFBTUMsZUFBYyxJQUFJLElBQUksTUFBTUYseUNBQWUsQ0FBQztBQUFBLE1BQ3BEO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImZpbGVVUkxUb1BhdGgiLCAiZGVmaW5lQ29uZmlnIiwgIlVSTCIsICJVUkwiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJkZWZpbmVDb25maWciLCAiZmlsZVVSTFRvUGF0aCJdCn0K
