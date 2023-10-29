<script setup lang="ts">
import { default as Comp } from './components/Comp.vue'
// @ts-ignore
import { Comp as LibComp } from 'comp-lib'
</script>

<template>
  <GlobalComp msg="this is global comp by comp-lib"></GlobalComp>
  <LibComp msg="this is comp by comp-lib" />
  <Comp />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
