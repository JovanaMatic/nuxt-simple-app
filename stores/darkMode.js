export const useDarkStore = defineStore('app', () => {
  const isdarkMode = ref(false)

  return {
    isdarkMode
  }
})