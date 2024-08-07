<template>
  <div class="auth-container">
    <div class="center mt-5">
      <h1 class="weight-6 mb-3">Create an account</h1>
      <signupForm />
    </div>
  </div>
</template>

<script setup>
import signupForm from "@/components/auth/signup-form.vue";
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
