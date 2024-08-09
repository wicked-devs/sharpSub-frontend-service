<template>
  <form class="center" @submit.prevent="handleLogin">
    <div class="form-group">
      <label for="">Email</label>
      <input type="email" placeholder="me@sharpsub.com" v-model="email" />
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <input type="password" placeholder="********" v-model="password" />
    </div>
    <div class="form-group">
      <button class="btn-primary" type="submit">Sign In</button>
    </div>
    <p>Don't have an account? <a href="#" class="nested-link">Sign Up</a></p>
    <!-- <p>{{ userStore.accessToken }}</p> -->
    <ToastNotification
      v-for="(toast, index) in toasts"
      :key="index"
      :type="toast.type"
      :title="toast.title"
      :description="toast.description"
      :timer="toast.timer"
      @close="removeToast(index)"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore(); // Use the store
const email = ref("");
const password = ref("");
const toasts = ref([]);
const router = useRouter();

import ToastNotification from "../general/toastNotification.vue";

const showToast = (type, title, description) => {
  toasts.value.push({ type, title, description, timer: 5000 });
};

const removeToast = (index) => {
  toasts.value.splice(index, 1);
};

const launchConfetti = () => {
  const { $confetti } = useNuxtApp();
  $confetti({
    particleCount: 300,
    angle: 60,
    spread: 360,
    origin: { x: 0 },
    colors: ["#1ed760", "#1ed760"],
    shapes: ["square", "circle"],
    gravity: 1,
    scalar: 1.2,
  });

  $confetti({
    particleCount: 300,
    angle: 60,
    spread: 360,
    origin: { x: 1 },
    colors: ["#1ed760", "#1ed760"],
    shapes: ["square", "circle"],
    gravity: 1,
    scalar: 1.2,
  });
};

const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:7000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      showToast("error", "Error", `${errorData.message}`);
      return;
    }

    const data = await response.json();
    console.log("Success:", data);
    showToast("success", "Login Successful", `${data.message}`);
    launchConfetti();
    // console.log(data.data.accessToken)

    // Save the access token to the store
    userStore.setAccessToken(data.data.access_token);
    console.log("Access Token:", userStore.accessToken);

    // setTimeout(() => {
    //   router.push("/");
    // }, 5000);
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};
</script>

<style scoped></style>
