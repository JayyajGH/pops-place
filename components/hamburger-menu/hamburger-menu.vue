<template>
  <button class="hamburger" @click="triggerMenu" :aria-expanded="menuOpen ? 'true' : 'false'" aria-label="Mobile menu trigger">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
  </button>
</template>

<script>
  export default {
    data() {
      return {
        menuOpen: false
      }
    },
    methods: {
        triggerMenu(event) {
          this.menuOpen = !this.menuOpen;

          // Make the hamburger menu visually open and close
          event.currentTarget.classList.toggle('hamburger--close');

          // Raise a general event that the menu has been triggered
          this.$emit('trigger-menu');

          // Raise a specific event that the menu has either been opened or closed
          this.menuOpen ? this.$emit('trigger-menu-opened') : this.$emit('trigger-menu-closed');
        }
      }
  }

</script>

<style scoped>
  .hamburger {
    border: none;
    background-color: var(--white);
  }

  .bar {
    width: 35px;
    height: 5px;
    background-color: var(--black);
    margin: 6px auto 6px auto;
    transition: 0.4s;
  }

  /* Rotate first bar */
  .hamburger--close .bar1 {
    transform: rotate(-45deg) translate(-9px, 7px) ;
  }

  /* Fade out the second bar */
  .hamburger--close .bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .hamburger--close .bar3 {
    transform: rotate(45deg) translate(-8px, -7px) ;
  }
</style>
