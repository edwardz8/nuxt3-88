// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxthq/ui'
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
      baseUrl: process.env.BASE_URL
    },
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm'
    }
  }
})
