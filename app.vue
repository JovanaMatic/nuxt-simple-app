<script setup>

const darkStore = useDarkStore()

console.log(darkStore.isdarkMode)
</script>

<template>
  <Nav />
  <Heading />
  <Cards />
</template>

<style>
  html {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
  }
</style>