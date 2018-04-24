<template>
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/">
      <a class="navbar-item" href="#">
        <img src="../assets/logo.png" alt="CyberEdu logo" >
      </a>
    </router-link>

    <a role="button" :class="['navbar-burger', {'is-active': navMenuIsActive}]" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
  <div :class="['navbar-menu', {'is-active': navMenuIsActive}]">
    <div class="navbar-end">
      <div class="navbar-item">
        <a href="//github.com/umdcyberedu" target="_blank" class="button is-dark is-outlined">
          <b-icon icon="github-face"></b-icon>
          <span>Github</span>
        </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationBar",
  data() {
    return {
      navMenuIsActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.navMenuIsActive = !this.navMenuIsActive;
    }
  }
});
</script>

<style scoped>
.navbar-item {
  padding: 0.7rem;
  padding-top: 0.85rem;
}
</style>
