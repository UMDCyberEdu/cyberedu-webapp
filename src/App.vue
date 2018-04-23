<template>
  <div id="app">
    
    <NavigationBar/>

    <transition name="fade">
      <router-view/>
    </transition>

    <TheFooter/>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "./components/NavigationBar.vue";
import TheFooter from "./components/TheFooter.vue";

export default Vue.extend({
  components: {
    NavigationBar,
    TheFooter
  }
});
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ec644b;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  background-color: $white-ter;
}

.columns {
  padding: 32px;

  @include mobile {
    padding: 8px;
  }

  .column {
    padding: 32px;

    @include mobile {
      padding: 8px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
