<template>
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/">
      <a class="navbar-item" href="#">
        <img src="../assets/logo.png" alt="CyberEdu logo" >
      </a>
    </router-link>

    <div class="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a href="//umdcyberedu.github.io" class="button is-primary is-outlined" target="_blank">About</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationBar"
});
</script>

<style scoped>
.navbar-item {
  padding: 0.7rem;
  padding-top: 0.85rem;
}
</style>
