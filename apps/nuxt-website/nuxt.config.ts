export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  typescript: {
    shim: false,
    typeCheck: false,
  },
})
