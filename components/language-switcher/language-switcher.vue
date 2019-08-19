<template>
  <div>
    <img src="~/assets/images/language.svg" class="language" />
    <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
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

<style>
  .language {
    width: 20px;
  }

  .language-option {
    border: 1px solid black;
    padding: 5px;
    text-decoration: none;
  }
</style>
