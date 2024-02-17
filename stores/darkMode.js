export const useDarkStore = defineStore('app', () => {
  const isdarkMode = ref(false)

  const toggledarMode = () => {
    isdarkMode.value = !isdarkMode.value
  }

  return {
    isdarkMode,
    toggledarMode
  }
})