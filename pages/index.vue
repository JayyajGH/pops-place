<template>
  <div>
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

  export default {
    components: {
      GalleryView,
      InfoPanels
    }
  }
</script>

<style>
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

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .wrapper--small {
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 2rem;
    text-align: center;
  }
</style>
