import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars-layouts";

export default defineConfig({
  base: "./", // use relative paths for JS/CSS
  build: {
    outDir: "dist", // output folder
    emptyOutDir: true, // clean dist before build
  },
});