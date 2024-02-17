<script setup>
const darkStore = useDarkStore()

</script>

<template>
  <div :class="darkStore.isdarkMode ? 'darkMode' : null">
    <Nav :class="darkStore.isdarkMode ? 'darkMode' : null" />
    <Heading />
    <Cards />
  </div>
</template>

<style>
  html {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
  }

  .darkMode {
    background-color: rgba(53, 52, 52, 0.77);
  }
</style>