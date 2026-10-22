import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jacobi7788.github.io',
  base: '/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
