<template>
  <NuxtLayout name="new">
    <main>
      <div class="container mt-5">
        <div class="text flexed-column">
          <h1 class="weight-6 mb-2">
            Effortless Virtual Top-Up for All Networks
          </h1>
          <p class="mb-2 weight-4">
            Whether you need to pay bills, top up airtime, or purchase data, we
            make it easy for everyone.
          </p>
          <form ref="box">
            <input type="email" placeholder="Enter email address" />
            <button class="btn-primary" @click.prevent>Get Free Access</button>
          </form>
          <!-- <div class="stats">
            <div>
              <h2>2943</h2>
              <p>Accounts Activated</p>
            </div>
            <div>
              <h2>$1M+</h2>
              <p>Transactions Completed</p>
            </div>
          </div> -->
        </div>

        <img src="@/assets/images/hero.webp" alt="" />
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
// import { gsap } from "gsap";
// import { ref, onMounted } from "vue";
// const box = ref(null);

// const { $gsap } = useNuxtApp();

// onMounted(() => {
//   // Zoom in and out animation
//   gsap.to(box.value, {
//     scale: 1.1,      // Zoom in to 1.5x the original size
//     duration: 1.5,   // Duration of the zoom in
//     ease: 'power1.inOut', // Easing function for the zoom
//     yoyo: true,      // Reverse the animation (zoom out)
//     repeat: 0,      // Repeat infinitely
//   });
// });
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.text {
  justify-content: center;
}
.text p {
  color: #8a8a8a;
}
form {
  display: flex;
 justify-content: space-between;
  border: 1px solid #8a8b8b;
  padding: 5px !important;
  border-radius: 8px;
  width:fit-content !important;
  background: #111010;
}

form input {
  background: none !important;
}
form input:focus {
  outline: none;
}
.container img {
  grid-column: 4 !important;
}

@media (max-width: 1000px) {
  .container {
    grid-template-columns: 1fr !important;
  }
  .container img {
    grid-column: auto !important;
    width: 100%;
  }
}
@media (max-width: 1200px) {
}
@media(max-width:768px){
  form{
    width:100% !important;
  }
}

</style>
