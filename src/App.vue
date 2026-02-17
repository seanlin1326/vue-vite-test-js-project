<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <v-main>
      <nav>
        <!-- router-link 標籤讓使用者點擊後切換到不同的頁面 -->
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <!-- 不同的頁面切換顯示的區域 -->
      </nav>
      <router-view />
    </v-main>
  </v-app>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
