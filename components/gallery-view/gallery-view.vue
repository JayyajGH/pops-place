<template>
  <div>
<!--
      <ul class="grid">
        <li class="image__container">
          <div class="anchor image"></div>
        </li>
        <li class="image__container">
          <img src="http://lorempixel.com/200/200/nature" class="anchor">
        </li>
        <li class="image__container">
          <img src="http://lorempixel.com/200/200/nature" class="anchor">
        </li>

        <img src="http://lorempixel.com/200/200/nature" class="anchor">
        <img src="http://lorempixel.com/200/200/nature" class="anchor">
        <img src="http://lorempixel.com/200/200/nature" class="anchor">
      </ul>
-->

      <no-ssr>
        <LightGallery
          :images="images"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
          />
      </no-ssr>

      <ul class="grid">
        <li class="image__container"
            v-for="(thumb, thumbIndex) in [
              'https://loremflickr.com/250/150/nature',
              'https://loremflickr.com/250/150/abstract',
              'https://loremflickr.com/250/150/city',
              'https://loremflickr.com/250/150/people',
              'https://loremflickr.com/250/150/transport',
              'https://loremflickr.com/250/150/animals',
              'https://loremflickr.com/250/150/food',
              'https://loremflickr.com/250/150/technics',
              'https://loremflickr.com/250/150/nightlife',
              'https://loremflickr.com/250/150/fashion',
              'https://loremflickr.com/250/150/cats',
              'https://loremflickr.com/250/150/business',
            ]"
            :key="thumbIndex"
            @click="index = thumbIndex"
          >
            <img :src="thumb" class="anchor" alt="">
          </li>

      </ul>

  </div>
</template>

<script>
  import { LightGallery } from 'vue-light-gallery';

  export default {
    components: {
      LightGallery
    },
    data() {
      return {
        images: [
          { title:'img 1', url: 'image2.jpg' },
          { title:'img 2', url: 'image2.jpg' },
          { title:'img 3', url: 'image2.jpg' },
          { title:'img 4', url: 'image2.jpg' },
          { title:'img 5', url: 'image2.jpg' },
          { title:'img 6', url: 'image2.jpg' },
        ],
        index: null,
      };
    }
  };
</script>

<style>

  .grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 300px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }

  @media (min-width: 37.5em) {
    .grid {
      grid-template-columns: repeat(2, 250px);
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (min-width: 50em) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .image__container {
    overflow: hidden;
  }

  .image {
    background-image: url('https://loremflickr.com/250/150/nature');
    height: 100%;
  }

  .anchor {
    transition: all 0.3s ease-in-out;
    vertical-align: middle; /*Get rid of the extra 4px space on the image due to line-height*/
    border-radius: 4px;
    width: 100%;
  }

  .anchor:hover {
    transform: scale(1.05);
  }
</style>
