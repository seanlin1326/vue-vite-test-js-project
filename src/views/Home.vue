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
        <PasswordBaseAlert
          v-show="!rule2IsValid"
          :message="rule2Hint"
        ></PasswordBaseAlert>
        <PasswordBaseAlert
          v-show="!rule3IsValid"
          :message="rule3Hint"
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
const rule2IsValid = ref(false);
const rule3IsValid = ref(false);
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
  rule2IsValid.value = checkPasswordContainNumber(password);
  if (!rule2IsValid.value) {
    isPass = false;
  }
  rule3IsValid.value = checkPasswordContainUpperAlphabet(password);
  if (!rule3IsValid.value) {
    isPass = false;
  }
  return isPass;
};
//限制1:字數必須超過10
const checkPassWordLength = (password) => {
  return password.length >= 5;
};
const rule1Hint = ref(`規則1:密碼字數不可以低於5個,當前字數為0個`);
watch(passwordInputValue, (newValue) => {
  // console.log("new:", newValue);
  rule1Hint.value = `規則1:密碼字數不可以低於5個,當前字數為${newValue.length}`;
});

//限制2:必須包含一個字元
const rule2Hint = "規則2:必須包含一個阿拉伯數字";
const checkPasswordContainNumber = (password) => {
  return /\d/.test(password);
};
//限制2:必須包含一個大寫英文字母
const rule3Hint = "規則3:須包含一個大寫英文字母";
const checkPasswordContainUpperAlphabet = (password) => {
  return /[A-Z]/.test(password);
};
</script>

<style scoped>
.normal-width {
  max-width: 80%;
}
</style>
