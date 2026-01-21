<template>
  <Header />
  <router-view />
</template>

<script setup>
  import Header from './components/Header.vue'
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth; 
  background-color: #f2e9d0;
}
</style>
