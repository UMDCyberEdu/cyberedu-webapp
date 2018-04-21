<template>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-spaced">
        Passwords Module
      </h1>
      <h2 class="subtitle is-6">
        <router-link to="/">
          <div class="block block__back-to-home">
            <b-icon icon="chevron-left" size="is-small"></b-icon>
            <span>All Modules</span>
          </div>
        </router-link>
      </h2>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PasswordsModule"
});
</script>

<style lang="scss" scoped>
.block__back-to-home {
  margin-left: -8px;
}
</style>
