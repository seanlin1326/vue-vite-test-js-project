<template>
  <div>
    <h1>Home Page</h1>
    {{ passwordIsValid }} {{ passwordInputValue }}
    <v-container>
      <v-text-field
        v-model="passwordInputValue"
        label="輸入密碼"
        type="password"
      ></v-text-field>

      <v-btn color="primary" :disabled="!passwordIsValid" @click="alertTest"
        >確認</v-btn
      >
    </v-container>
  </div>
</template>

<script setup lang="js">
import Swal from "sweetalert2";
import { ref, watch } from "vue";
const passwordIsValid = false;
const passwordInputValue = ref("");
const alertTest = () => {
  Swal.fire({
    title: "Hello 👋",
    text: "這是 SweetAlert2 彈窗",
    icon: "success",
    confirmButtonText: "確定",
    heightAuto: false,
  });
};
watch(passwordInputValue, (newValue, oldValue) => {
  console.log("new:", newValue, "old:", oldValue);
});
</script>
