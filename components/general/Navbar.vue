<template>
  <nav>
    <main>
      <a href="/">
        <img
          src="@/assets/images/SharpSub.svg"
          alt="SharpSub Logo"
          class="logo"
        />
      </a>
      <section class="flexed-row">
        <a href="#" class="sign-in">Sign in</a>
        <a href="#"><button class="btn-primary">Create free account</button></a>
      </section>
    </main>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  padding: 30px 0 30px 0;
  background: var(--primary-color);
  position: sticky;
  width: 100% !important;
  top: 0;
  z-index:1000;
}
nav main {
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  flex-wrap: wrap;
}
section{
  gap:30px;
}

</style>
