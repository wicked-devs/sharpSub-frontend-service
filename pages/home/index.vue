<template>
  <NuxtLayout name="new">
    <main>
      <section class="text">
        <h1 class="weight-7 mb-3">
          Effortless Virtual Top-Up for All Networks
        </h1>
        <p class="mb-3">
          Effortless Virtual Top-Up for All Networks Whether you need to pay
          bills, top up airtime, or purchase data, we make it easy for everyone.
        </p>

        <form class="email">
          <input type="email" placeholder="Enter Email Address" />
          <button class="btn-primary">Get Free Access</button>
        </form>
      </section>

      <img src="@/assets/images/hero.webp" alt="Hero" class="center" />
    </main>
  </NuxtLayout>
</template>

<script setup></script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  flex-wrap: wrap;
  gap: 50px;
  border: 1px solid #333;
}
main section {
  width: 50%;
  border: 1px solid #fff;
}

@media (max-width: 768px) {
  img {
    width: 100% !important;
  }
}

@media (max-width: 1300px) {
  main section {
    width: 100%;
  }
  img {
    height: 10% !important;
  }
}
</style>
