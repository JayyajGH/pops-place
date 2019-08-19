<template>
  <div>
    <header>
      <nav class="site-nav">
        <div class="header__wrapper">
          <a href="/">
            <img src="~/assets/images/logo2.png" class="logo__image--small">
          </a>
          <hamburger-menu class="menu--hamburger" @trigger-menu="triggerMenu"></hamburger-menu>
        </div>

        <ul class="site-nav__menu site-nav__menu--normal">
            <li class="site-nav__item"><a href="#" class="site-nav__link">{{$t('beer')}}</a></li>
            <li class="site-nav__item"><a href="#" class="site-nav__link">{{$t('food')}}</a></li>
            <li class="site-nav__item"><a href="#" class="site-nav__link">{{$t('gallery')}}</a></li>
            <li class="site-nav__item"><a href="#" class="site-nav__link">{{$t('about')}}</a></li>
            <li class="site-nav__item"><a href="#" class="site-nav__link">{{$t('contact')}}</a></li>
        </ul>
        <!--
        <div class="language-switcher">
          <language-switcher></language-switcher>
        </div>
        -->
      </nav>
      <div class="hero__wrapper">
        <div class="hero">
          <img src="~/assets/images/logo4.png" class="logo__image">
          <h2 class="tag">
            <span class="tag__text">GOURMET BURGERS</span>
            <span class="tag__text">CRAFT BEER</span>
            <span class="tag__text--alt">LJUBLJANA</span>
          </h2>
        </div>
      </div>
    </header>
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

    <footer class="footer">
      Footer here
    </footer>
  </div>
</template>

<script>
  import LanguageSwitcher from '@/components/language-switcher/language-switcher';
  import GalleryView from '@/components/gallery-view/gallery-view';
  import InfoPanels from '@/components/info-panels/info-panels';
  import HamburgerMenu from '@/components/hamburger-menu/hamburger-menu';

  export default {
    components: {
      LanguageSwitcher,
      GalleryView,
      InfoPanels,
      HamburgerMenu
    },
    methods: {
      triggerMenu: function (event) {
        var mainSiteNav = document.getElementsByClassName('site-nav')[0];
        mainSiteNav.classList.toggle('is-mobile-active');

        var pageBody = document.getElementsByTagName('body')[0];
        pageBody.classList.toggle('is-overflowhidden');
      }
    }
  }
</script>

<style>
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

  .header2 {
    font-size: 36px;
    font-weight: 700;
  }

  .footer {
      background-color: lightgray;
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

  .language-switcher {
    display: flex;
    font-size: 14px;
  }

  .is-overflowhidden {
    overflow: hidden;
  }

  @media (min-width: 800px) {
    .site-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0.5rem 1rem 0.5rem 1rem;
      max-width: 1300px;
      margin: 0 auto;
    }
  }

  .language {
    width: 14px;
    padding-right: 5px;
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

  .logo__image--small {
    width: 60px;
    padding-left: 10px;
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

  .site-nav__link {
    padding-right: 20px;
    font-size: 2rem;
    color: grey;
  }

  @media (min-width: 800px) {
    .site-nav__link {
      font-size: 1.1rem;
    }
  }

  .site-nav__link:hover {
    color: black;
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

  .menu--hamburger {
    display: inline-block;
  }

  @media (min-width: 800px) {
    .menu--hamburger {
      display: none;
    }
  }

  .site-nav__menu--normal {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .site-nav__menu {
    display: none;
    flex-direction: column;
  }

  .site-nav.is-mobile-active .site-nav__menu {
    display: flex;
    align-items: center;
  }

  /* The menu should always be displayed on larger screens */
  @media (min-width: 800px) {
    .site-nav__menu {
      display: flex;
      flex-direction: row;
    }
  }

  .site-nav.is-mobile-active {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 2;
  }

  /* If the mobile menu is left open and the screen expanded then the mobile menu would stay open */
  /* For that reason we need to override any mobile classes on larger screens */
  @media (min-width: 800px) {
    .site-nav {
      position: static !important;
      width: auto !important;
    }
  }

  .site-nav__item {
    padding-bottom: 1.5rem;
  }

  @media (min-width: 800px) {
    .site-nav__item {
      padding-bottom: 0;
    }
  }

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (min-width: 800px) {
    .header__wrapper {
      margin-bottom: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
