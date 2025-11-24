import { defineConfig } from "vite";
  import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: "./", // use relative paths for JS/CSS
  build: {
    outDir: "dist", // output folder
    emptyOutDir: true, // clean dist before build
  },
    plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
});