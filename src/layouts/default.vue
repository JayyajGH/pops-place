<template>
  <div>
    <site-header class="site-header"></site-header>
    <nuxt />
    <site-footer></site-footer>
  </div>
</template>

<script>
  import SiteHeader from '~/components/site-header/site-header';
  import SiteFooter from '~/components/site-footer/site-footer';

  export default {
    components: { SiteHeader, SiteFooter }
  }
</script>

<style>
  .site-header {
      margin-bottom: 1rem;
  }
</style>
