import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://refundex.es",
  redirects: { "/": "/entrevistas" },
  vite: { plugins: [tailwindcss()] },
});
