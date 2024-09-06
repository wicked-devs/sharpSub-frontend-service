<template>
  <div class="auth-container">
    <div class="center mt-5">
      <h1 class="weight-6 mb-3">Create an account</h1>
      <form class="center" @submit.prevent="handleSignup">
        <!-- Fullname Field -->
        <div class="form-group">
          <label for="fullname">Fullname</label>
          <input
            type="text"
            placeholder="John Doe"
            v-model="fullname"
            id="fullname"
            required
          />
        </div>

        <!-- Username Field -->
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" placeholder="Johnny" v-model="username" id="username" required />
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="me@sharpsub.com"
            v-model="email"
            id="email"
            required
          />
        </div>

        <!-- Phone Field -->
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="tel"
            placeholder="+234********"
            v-model="phone"
            id="phone"
            required
          />
        </div>

        <!-- Password Field with Toggle -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input-container">
            <input
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="********"
              v-model="password"
              id="password"
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

        <!-- Sign Up Button -->
        <div class="form-group">
          <button class="btn-primary" type="submit">Sign Up</button>
        </div>

        <input type="hidden" v-model="role" />
        <p>
          Already have an account?
          <a href="/auth/login" class="nested-link">Sign In</a>
        </p>

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
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Import icons directly
import eyeOpenIcon from "@/assets/icons/eye-open.svg";
import eyeClosedIcon from "@/assets/icons/eye-closed.svg";

const { $confetti } = useNuxtApp();
import ToastNotification from "@/components/general/toastNotification.vue";

const toasts = ref([]);
const router = useRouter();

const showToast = (type, title, description) => {
  toasts.value.push({ type, title, description, timer: 2000 });
};

const removeToast = (index) => {
  toasts.value.splice(index, 1);
};

const launchConfetti = () => {
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

const fullname = ref("");
const username = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const role = ref("User");

// Password visibility toggle
const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const handleSignup = async () => {
  try {
    const response = await fetch("http://localhost:7000/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: fullname.value,
        username: username.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
        role: role.value,
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
    showToast("success", "Signup Successful", `${data.message}`);
    launchConfetti(); // Launch Confetti

    setTimeout(() => {
      router.push("/auth/verify-email"); // Delay redirection by 5 seconds
    }, 2000);
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};
</script>

<style scoped>
.password-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input-container input {
  width: 100%;
  padding-right: 40px; /* Adjust padding to make space for the icon */
}

.password-toggle-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
}
</style>
