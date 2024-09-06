<template>
  <div class="auth-container">
    <div class="center mt-5">
      <h1 class="weight-6 mb-1">Reset Password</h1>
      <form class="center">
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-visible">
            <input
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="********"
              v-model="password"
              required
            />
            <img
              :src="isPasswordVisible ? eyeOpenIcon : eyeClosedIcon"
              @click="togglePasswordVisibility"
              alt="Toggle Password Visibility"
              class="password-toggle-icon"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <div class="password-visible">
            <input
              :type="isConfirmPasswordVisible ? 'text' : 'password'"
              placeholder="********"
              v-model="confirmPassword"
              required
            />
            <img
              :src="isConfirmPasswordVisible ? eyeOpenIcon : eyeClosedIcon"
              @click="toggleConfirmPasswordVisibility"
              alt="Toggle Password Visibility"
              class="password-toggle-icon"
            />
          </div>
        </div>
        <div class="form-group">
          <button class="btn-primary" type="submit">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import eyeOpenIcon from "@/assets/icons/eye-open.svg";
import eyeClosedIcon from "@/assets/icons/eye-closed.svg";

// Password visibility toggle
const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const toggleConfirmPasswordVisibility = () => {
  isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value;
};

// Form data
const password = ref("");
const confirmPassword = ref("");
</script>

<style scoped></style>
