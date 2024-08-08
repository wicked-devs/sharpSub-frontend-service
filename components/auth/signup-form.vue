<template>
  <form class="center" @submit.prevent="handleSignup">
    <div class="form-group">
      <label for="">Fullname</label>
      <input type="text" placeholder="John Doe" v-model="fullname" required />
    </div>
    <div class="form-group">
      <label for="">Username</label>
      <input type="text" placeholder="Johnny" v-model="username" required />
    </div>
    <div class="form-group">
      <label for="">Email</label>
      <input
        type="email"
        placeholder="me@sharpsub.com"
        v-model="email"
        required
      />
    </div>
    <div class="form-group">
      <label for="">Phone</label>
      <input type="tel" placeholder="+234********" v-model="phone" required />
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <input
        type="password"
        placeholder="********"
        v-model="password"
        required
      />
    </div>
    <div class="form-group">
      <button class="btn-primary" type="submit">Sign Up</button>
    </div>
    <input type="hidden" v-model="role" />
    <p>Already have an account? <a href="#" class="nested-link">Sign In</a></p>

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
import ToastNotification from "../general/toastNotification.vue";
const toasts = ref([]);

const showToast = (type, title, description) => {
  toasts.value.push({ type, title, description, timer: 5000 });
};

const removeToast = (index) => {
  toasts.value.splice(index, 1);
};

function success() {
  showToast("success", "Success", "This is a success message!");
}

const fullname = ref("");
const username = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const role = ref("User");

//Options for the select tag
const options = [
  { value: "Merchant", label: "Merchant" },
  { value: "Transporter", label: "Transporter" },
];

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
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};
</script>

<style scoped></style>
