import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  pinia.use(piniaPersistedstate)
  nuxtApp.vueApp.use(pinia)
})
