<template>
  <div>
    <site-header></site-header>
    <main class="container">
      <section class="wrapper--small">
        <h2 class="header2">Beer</h2>
        <div class="text">
          <p>
            A huge selection of both local and foreign beers from around the world
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut libero pharetra, sagittis dolor et, porttitor lacus.
            Nam dapibus vulputate turpis vel molestie. Praesent volutpat rutrum elit, ac consectetur lacus malesuada ut.
            Sed id placerat felis. Phasellus consequat odio et lorem luctus, vel interdum sem ullamcorper.
            Fusce ornare nisi nec ex maximus imperdiet. Sed sit amet est ac lacus convallis porttitor eu vitae velit.
          </p>
        </div>
      </section>
      <section class="wrapper--small">
        <h2 class="header2">Food</h2>
        <div class="text">
          <p>
            Locally sourced beef, aged in house, and custom blended.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut libero pharetra, sagittis dolor et, porttitor lacus.
            Nam dapibus vulputate turpis vel molestie. Praesent volutpat rutrum elit, ac consectetur lacus malesuada ut.
          </p>
        </div>
      </section>
      <section class="wrapper--small">
        <h2 class="header2">Gallery</h2>
        <gallery-view></gallery-view>
      </section>
      <section class="wrapper--small">
        <h2 class="header2">About</h2>
        <div class="text">
          <p>
            We are a burger and craft beer bar located in the heart of Ljubljana, Slovenia.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut libero pharetra, sagittis dolor et, porttitor lacus.
            Nam dapibus vulputate turpis vel molestie. Praesent volutpat rutrum elit, ac consectetur lacus malesuada ut.
          </p>
        </div>
      </section>

      <section class="wrapper--small">
        <info-panels></info-panels>
      </section>

    </main>
  </div>
</template>

<script>
  import GalleryView from '@/components/gallery-view/gallery-view';
  import InfoPanels from '@/components/info-panels/info-panels';
  import SiteHeader from '@/components/site-header/site-header';

  export default {
    components: {
      GalleryView,
      InfoPanels,
      SiteHeader
    }
  }
</script>

<style>
  /* Put this stuff in a reset file */
  body {
    margin: 0;
    font-family: 'PT Sans', sans-serif;
  }

  ul {
    list-style:none;
  }

  a {
    text-decoration: none;
  }
  /* Put this stuff in a reset file */

  .header2 {
    font-size: 36px;
    font-weight: 700;
  }

  .text {
    max-width: 100%;
    margin: 0 auto;
    color: #666;
  }

  @media (min-width: 37.5em) {
    .text {
      max-width: 50%;
    }
  }

  .is-overflowhidden {
    overflow: hidden;
  }

  .hero {
    text-align: center;
  }

  .logo__image {
    width: 200px;
    background-color: rgb(255,255,255,0.5);
    border-radius: 10px;
  }

  @media (min-width: 800px) {
    .logo__image {
      width: 275px;
    }
  }

  .hero__wrapper {
    background-image: url('~assets/images/background3.jpg');
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(30%) brightness(0.9);
  }

  .tag {
    color: white;
    text-align: center;
  }

  .tag__text {
    display: block;
  }

  .tag__text--alt {
    color: wheat;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .wrapper--small {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
</style>
