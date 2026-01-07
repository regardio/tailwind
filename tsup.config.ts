import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: { 'utils/index': 'src/utils/index.ts' },
  format: ['esm'],
  minify: false,
  onSuccess: 'cp -r src/styles dist/styles',
  outDir: 'dist',
  platform: 'neutral',
  sourcemap: false,
  splitting: false,
  treeshake: true,
});
