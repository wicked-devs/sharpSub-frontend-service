<template>
  <div class="auth-container">
    <div class="center mt-5">
      <h1 class="weight-6 mb-1">Forgot Password?</h1>
      <form class="center" @submit.prevent="forgotPassword">
        <div class="form-group">
          <label for="">Email Address</label>
          <input type="email" placeholder="me@sharpsub.com" v-model="email" />
        </div>
        <div class="form-group">
          <button class="btn-primary" type="submit">Next</button>
        </div>
      </form>
    </div>
    <!-- Toast Notifications -->
    <ToastNotification
      v-for="(toast, index) in toasts"
      :key="index"
      :type="toast.type"
      :title="toast.title"
      :description="toast.description"
      :timer="toast.timer"
      @close="removeToast(index)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const toasts = ref([]);
const router = useRouter();

import ToastNotification from "@/components/general/toastNotification.vue";

const showToast = (type, title, description) => {
  toasts.value.push({ type, title, description, timer: 2000 });
};

const removeToast = (index) => {
  toasts.value.splice(index, 1);
};

const forgotPassword = async () => {
  try {
    const response = await fetch(
      "http://localhost:7000/api/v1/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      showToast("error", "Error", `${errorData.message}`);
      return;
    }

    const data = await response.json();
    console.log("Success:", data);
    showToast("success", "Check your email", `${data.message}`);
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
}
h3 {
  color: #8b8b8a;
}
</style>
