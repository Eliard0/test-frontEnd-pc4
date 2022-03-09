<script setup>
import HelloWorld from './views/List.vue'
import TheWelcome from './views/Register.vue'
</script>

<template>
  <header>
    <div>
      <router-view></router-view>
    </div>
  </header>
</template>

<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
