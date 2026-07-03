import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    tsgo: true,
  },
  exports: true,
  entry: ['src/index.ts', 'src/bun.ts', 'src/nodejs.ts'],
  // ...config options
})
