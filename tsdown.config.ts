import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/utils/index.ts'],
  format: 'esm',
  onSuccess: 'cp -r src/styles dist/styles',
  outDir: 'dist',
  sourcemap: false,
  treeshake: true,
});
