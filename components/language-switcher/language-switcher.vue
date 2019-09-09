<template>
  <div class="language-switcher">
    <img src="~/assets/images/language.svg" class="language" />
    <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        :lang="locale.code"
        class="language-option">
        {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  };
</script>

<style scoped>
  .language-switcher {
    display: flex;
    align-items: center;
    font-size: 12px;
    border: 1px solid black;
    border-radius: 3px;
    padding: 3px;
  }

  .language-switcher:hover .language-option {
    text-decoration: underline;
    text-decoration-color: var(--green-base);
    color: var(--black);
  }

  .language {
    width: 18px;
    padding-right: 3px;
  }

  .language-option {
    text-decoration: none;
    color: var(--grey-dark);
  }
</style>
