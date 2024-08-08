<template>
  <main class="hero-section">
    <div class="container">
      <Navbar />
      <div class="content">
        <div class="text-content">
          <h1>Effortless Virtual Top-Up for All</h1>
          <p>
            Whether you need to pay bills, top up airtime, or purchase data, we make it easy for everyone.
          </p>
          <form class="email-form">
            <input type="email" placeholder="Enter email address" />
            <button type="submit">Get Free Access</button>
          </form>
          <div class="stats">
            <div>
              <p>2943</p>
              <span>Accounts Activated</span>
            </div>
            <div>
              <p>$1M+</p>
              <span>Transactions Completed</span>
            </div>
          </div>
        </div>
        <div class="image-content">
          <img src="@/assets/images/girl.svg" alt="Hero Image" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "@/components/general/Navbar.vue"

// export default {
//   name: 'HeroSectionPage'
// }
</script>

<style>
.hero-section {
  background-color: #000;
  color: #fff;
  padding-right: 60px;
  padding-left: 60px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  width: 150px;
}

.nav a {
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
}

.create-account {
  background-color: #00c853;
  padding: 10px 20px;
  border-radius: 5px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
}

.text-content {
  max-width: 50%;
}

.text-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.email-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.email-form input {
  padding: 15px;
  border: none;
  border-radius: 5px 0 0 5px;
  width: 250px;
}

.email-form button {
  padding: 15px 25px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #00c853;
  color: #fff;
  cursor: pointer;
}

.stats {
  display: flex;
  margin-top: 30px;
}

.stats div {
  margin-right: 50px;
}

.stats p {
  font-size: 32px;
  margin: 0;
}

.stats span {
  font-size: 16px;
  color: #888;
}

.image-content img {
  max-width: 100%;
  border-radius: 10px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .text-content {
    max-width: 100%;
  }

  .email-form {
    flex-direction: column;
  }

  .email-form input {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
