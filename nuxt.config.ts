// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/main.css", "lenis/dist/lenis.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['lenis/nuxt'],
})
