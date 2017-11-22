<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        AIFIRST 커뮤니티
      </span>
      <div slot="body">
        <p>
          사단법인 한국인공지능협회
        </p>
        <p>
          contact us:
        </p>
        <p>
          <a class="btn btn-outline-primary" href="http://koraia.org" target="_blank" >
            <i
              class="fa fa-rocket fa-fw"
              aria-hidden="true"
            ></i>
            <span class="pl-2">
              한국인공지능협회
            </span>
          </a>
        </p>
      </div>
      <div slot="footer">
        sponsor by KORAIA
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

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
    },
  };
</script>
