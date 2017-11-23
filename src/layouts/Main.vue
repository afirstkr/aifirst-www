<template>
  <div class="container">

    <div class="main-header">
      <router-link :to="{ name: 'home.index' }">
        <img src="/static/images/logo.png" />
      </router-link>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark main-menu">
      <button
        class="navbar-toggler" type="button" @click="toggleMenu" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show : menuCollapsed}" >
        <ul class="navbar-nav mr-auto">
          <b-dropdown text="커뮤니티" class="m-md-2">
            <b-dropdown-item>자유게시판</b-dropdown-item>
            <b-dropdown-item>소모임</b-dropdown-item>
            <b-dropdown-item>이슈토론방</b-dropdown-item>
            <b-dropdown-item>논문자</b-dropdown-item>
          </b-dropdown>

          <!-- dropdown.vue -->

          <b-dropdown text="포럼" class="m-md-2">
            <b-dropdown-item>기업</b-dropdown-item>
            <b-dropdown-item>학교</b-dropdown-item>
            <b-dropdown-item>연구소</b-dropdown-item>
            <b-dropdown-item>온라인커뮤니티</b-dropdown-item>
          </b-dropdown>

          <!-- dropdown.vue -->

          <b-dropdown text="아카데미" class="m-md-2">
            <b-dropdown-item>강의자료</b-dropdown-item>
            <b-dropdown-item>협회강의</b-dropdown-item>
          </b-dropdown>

          <!-- dropdown.vue -->

          <b-dropdown text="마켓" class="m-md-2">
            <b-dropdown-item>팝니다</b-dropdown-item>
            <b-dropdown-item>삽니다</b-dropdown-item>
            <b-dropdown-item>구인구직</b-dropdown-item>
            <b-dropdown-item>프로젝트</b-dropdown-item>
          </b-dropdown>

          <!-- dropdown.vue -->

          <b-dropdown text="이벤트" class="m-md-2">
            <b-dropdown-item>공모전</b-dropdown-item>
            <b-dropdown-item>스터디모임</b-dropdown-item>
            <b-dropdown-item>세미나</b-dropdown-item>
            <b-dropdown-item>엑스포</b-dropdown-item>
          </b-dropdown>

          <!-- dropdown.vue -->

          <b-dropdown text="컨소시엄" class="m-md-2">
            <b-dropdown-item>정부사업공고</b-dropdown-item>
            <b-dropdown-item>R&D사업 제안</b-dropdown-item>
            <b-dropdown-item>참여사 목록</b-dropdown-item>
            <b-dropdown-item>전문가 목록</b-dropdown-item>
            <b-dropdown-item>Q&A</b-dropdown-item>
          </b-dropdown>

          <!-- dropdown.vue -->
        </ul>
        <span class="navbar-text">
          <a class="btn btn-secondary" href="#" @click.prevent="logout" >
            <i class="fa fa-sign-out"></i>
          </a>
        </span>
      </div>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  /* ============
   * Main Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    /**
     * The name of the layout.
     */
    name: 'main-layout',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        menuCollapsed: false,
      };
    },

    /**
     * The methods that the layout can use.
     */
    methods: {
      /**
       * Will log the user out.
       */
      logout() {
        this.$store.dispatch('auth/logout');
      },

      /**
       * Will toggle the menu.
       */
      toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
      },
    },
  };
</script>
