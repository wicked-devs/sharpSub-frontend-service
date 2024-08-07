<template>
    <div class="auth-container">
      <div class="center mt-5">
        <h1 class="weight-6 mb-3">Sign in to your account</h1>
        <loginForm />
      </div>
    </div>
  </template>
  
  <script setup>
  import loginForm from "@/components/auth/login-form.vue";
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
  }
  </style>
  