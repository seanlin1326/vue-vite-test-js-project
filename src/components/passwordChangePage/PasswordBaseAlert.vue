<template>
  <v-alert v-if="show" :type="type" class="my-2" role="alert">
    {{ message }}
  </v-alert>
</template>
<script setup>
import { defineProps } from "vue";

// 接收父元件傳入的 props
const props = defineProps({
  message: { type: String, required: true },
  type: { type: String, default: "error" }, // success, error, info, warning
  show: { type: Boolean, default: true },
});
</script>
