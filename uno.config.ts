// uno.config.ts
import { defineConfig, transformerDirectives, presetWind, presetIcons } from 'unocss'
// import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  safelist: ['i-ep:full-screen', 'i-ri:fullscreen-exit-fill'],
  transformers: [transformerDirectives()]
})
