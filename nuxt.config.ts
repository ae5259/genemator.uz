export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'monokai',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    }
  }
})
