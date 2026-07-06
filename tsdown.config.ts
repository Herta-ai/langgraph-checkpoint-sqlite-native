import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    tsgo: true,
  },
  exports: true,
  entry: ['src/bun.ts', 'src/nodejs.ts'],
})
