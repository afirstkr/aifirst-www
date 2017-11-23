<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Board
      </span>
      <div slot="body">
        <p>
          Board Body - {{  $route.params.type }}
        </p>
        <p>
          Board Content
        </p>
      </div>
      <div slot="footer">
        Board Footer
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Board Index Page
   * ============
   *
   * The board index page.
   */

  import VLayout from '@/layouts/Main';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'board-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
