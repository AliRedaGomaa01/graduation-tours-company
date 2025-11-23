import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // use relative paths for JS/CSS
  build: {
    outDir: "dist", // output folder
    emptyOutDir: true, // clean dist before build
  },
});