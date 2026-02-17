<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" justify="center" align="center">
        <p>{{ passwordIsValid }} {{ passwordInputValue }} {{ rule1IsValid }}</p>
        <h1>請輸入密碼</h1>
        <v-text-field
          class="normal-width"
          v-model="passwordInputValue"
          label="輸入密碼"
          type="text"
        ></v-text-field>

        <v-btn color="primary" :disabled="!passwordIsValid" @click="alertTest"
          >確認</v-btn
        >
        <PasswordBaseAlert
          v-show="!rule1IsValid"
          :message="rule1Hint"
        ></PasswordBaseAlert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="js">
import Swal from "sweetalert2";
import { ref, watch } from "vue";
import PasswordBaseAlert from "../components/passwordChangePage/PasswordBaseAlert.vue";
const passwordIsValid = ref(false);
const passwordInputValue = ref("");
const passwordLength = ref(0);
const rule1IsValid = ref(false);
const alertTest = () => {
  Swal.fire({
    title: "恭喜你成功註冊了 👋",
    text: "這是合格的密碼 恭喜",
    icon: "success",
    confirmButtonText: "確定",
    heightAuto: false,
  });
};
watch(passwordInputValue, (newValue) => {
  // console.log("new:", newValue);
  passwordIsValid.value = checkPassWordValidOrNot(newValue);
  passwordLength.value = newValue.length;
});
const checkPassWordValidOrNot = (password) => {
  let isPass = true;
  rule1IsValid.value = checkPassWordLength(password);
  if (!rule1IsValid.value) {
    isPass = false;
  }
  return isPass;
};
//限制1:字數必須超過10
const checkPassWordLength = (password) => {
  return password.length >= 10;
};
const rule1Hint = ref(`規則1:密碼字數不可以低於10個,當前字數為0個`);
watch(passwordInputValue, (newValue) => {
  // console.log("new:", newValue);
  rule1Hint.value = `規則1:密碼字數不可以低於10個,當前字數為${newValue.length}`;
});
</script>

<style scoped>
.normal-width {
  max-width: 80%;
}
</style>
