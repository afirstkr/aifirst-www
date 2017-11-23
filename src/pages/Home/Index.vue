<template>
  <v-layout>
    <div class="main-banner">
      <b-carousel id="main-banner"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="5000"
                  img-width="1024"
                  img-height="480" >
        <!-- slides with image & text -->
        <b-carousel-slide img-src="/static/images/banner-01.jpg">
          <h1>Hello world!</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </b-carousel-slide>
        <b-carousel-slide img-src="/static/images/banner-02.jpg">
          <h1>Hello world!</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </b-carousel-slide>
        <b-carousel-slide img-src="/static/images/banner-03.jpg">
          <h1>Hello world!</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="container">
      <div slot="body">
      </div>
      <div slot="footer">
        <span>sponsor by KORAIA</span>
      </div>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Main';
  import VCard from '@/components/Card';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      Carousel,
      Slide,
    },
  };
</script>
