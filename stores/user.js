// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    accessToken: '',
  }),
  actions: {
    setAccessToken(newAccessToken) {
      this.accessToken = newAccessToken;
    },
  },
  persist: {
    // Use a function to conditionally return sessionStorage or another storage
    storage: typeof window !== 'undefined' ? sessionStorage : undefined,
    paths: ['accessToken'],
  },
})
