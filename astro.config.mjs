import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://refundex.es",
  vite: { plugins: [tailwindcss()] },
});
