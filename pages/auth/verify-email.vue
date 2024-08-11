<template>
  <div class="auth-container">
    <div class="center mt-5">
      <h1 class="weight-6 mb-1">Verify Your Email</h1>
      <form class="center">
        <p class="weight-5 center">
          A link has been sent to your email, click on it to verify your email
        </p>
        <div class="form-group">
          <button class="btn-primary" @click="routeUSer" @click.prevent>
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const routeUSer = () => {
  router.push("/auth/login");
};
</script>

<style scoped>
p {
  color: #8b8b8a;
}
</style>
