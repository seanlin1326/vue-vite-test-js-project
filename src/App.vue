<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav>
      <!-- router-link 標籤讓使用者點擊後切換到不同的頁面 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- 不同的頁面切換顯示的區域 -->
      <router-view />
    </nav>
  </div>
  <HelloWorld msg="Vite + Vue" />
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
