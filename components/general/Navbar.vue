<template>
  <nav class="pt-3 pb-3">
    <main>
      <img src="@/assets/images/SharpSub.svg" alt="" />

      <div class="menu" @click="toggleMenu">
        <div :class="{ bar1: isOpen, bar: !isOpen }"></div>
        <div :class="{ bar2: isOpen, bar: !isOpen }"></div>
        <div :class="{ bar3: isOpen, bar: !isOpen }"></div>
      </div>

      <div class="container" :class="{ open: isOpen }">
        <div class="cta center">
          <a href="/auth/login">Log In</a>
          <a href="/auth/signup">
            <button class="btn-primary">Create Account</button>
          </a>
        </div>
      </div>
    </main>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  background-color: var(--primary-color);

  @media (min-width: 2000px) {
    gap: 170px;
    justify-content: center;
  }
}
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
main .menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

main .menu .bar,
main .menu .bar1,
main .menu .bar2,
main .menu .bar3 {
  width: 30px;
  height: 3px;
  transition: 0.4s;
  background-color: #fff;
}

main .menu .bar1 {
  transform: rotate(-45deg) translate(-7px, 6px);
}

main .menu .bar2 {
  opacity: 0;
}

main .menu .bar3 {
  transform: rotate(45deg) translate(-7px, -6px);
}

main .container .cta {
  display: flex;
  gap: 12px;
}

@media (max-width: 1000px) {
  main .menu {
    display: flex;
  }

  main .container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    background: var(--primary-color);
    padding: 20px;
  }

  main .container.open {
    display: flex;
  }

  main .container .cta {
    flex-direction: column;
    width: 100%;
  }
}
</style>
