// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://noel9907.github.io",
  base: "/console-text-front",
  vite: {
    plugins: [tailwindcss()],
  },
});
