<script setup lang="ts">
import { generateArray } from 'Utils/tools' // 使用Utils别名
console.log(generateArray(20))
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  padding: 1.5em;
  height: 6em;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
