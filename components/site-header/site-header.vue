<template>
  <header>
    <nav class="site-nav">
      <div class="header__wrapper">
        <a href="/">
          <img src="~/assets/images/logo-small.png" class="logo__image--small" alt="Pop's Place">
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
      </div>

      <div class="language-switch">
        <language-switcher></language-switcher>
      </div>
    </nav>

    <div class="hero__wrapper">
      <div class="hero">
        <h1 class="u-hidden-visually">Pop's Place</h1>
        <img src="~/assets/images/logo-large.png" class="logo__image" alt="">
        <h2 class="tag">
          <span class="tag__text">GOURMET BURGERS</span>
          <span class="tag__text">CRAFT BEER</span>
          <span class="tag__text tag__text--alt">LJUBLJANA</span>
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
  import HamburgerMenu from '@/components/hamburger-menu/hamburger-menu';
  import LanguageSwitcher from '@/components/language-switcher/language-switcher';

  export default {
    components: {
      HamburgerMenu,
      LanguageSwitcher
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

<style scoped>
  /* NB: This will be hidden from view but still be available to screenreaders
   http://webaim.org/techniques/css/invisiblecontent/ */
  .u-hidden-visually {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px !important;
    height: 1px !important;
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

  .site-nav__link {
    font-size: 2rem;
    color: var(--grey-base);
  }

  @media (min-width: 800px) {
    .site-nav__link {
      font-size: 1.5rem;
      margin-left: 20px;
    }
  }

  .site-nav__link:hover {
    color: var(--black);
    text-decoration: underline;
    text-decoration-color: var(--green-base);
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    background-color: var(--white);
    z-index: 2;
  }

  .language-switch {
    display: none;
  }

  .site-nav.is-mobile-active .language-switch {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 800px) {
    .language-switch {
      display: block;
    }
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

  .logo__image {
      margin-bottom: 1rem;
  }

  .logo__image--small {
    width: 60px;
  }

  .menu--hamburger {
    display: inline-block;
  }

  @media (min-width: 800px) {
    .menu--hamburger {
      display: none;
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

  .hero {
    text-align: center;
  }

  .tag {
    color: var(--white);
    font-size: 1.3rem;
    text-align: center;
  }

  .tag__text {
    display: block;
  }

  .tag__text--alt {
    color: wheat;
  }
</style>
