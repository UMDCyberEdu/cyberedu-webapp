<template>
<div class="box has-text-centered">
  <figure class="image is-4by3">
    <img :src="img" :alt="title + ' Image'">
  </figure>
  <br>
  <h3 class="title is-3">{{title}}</h3>
  <p><slot>The description goes here.</slot></p>
  <br>
  <router-link :to="pathToModule">
    <a href="#" class="button is-primary is-medium">Start</a>
  </router-link>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StartModuleCard',
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    pathToModule: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
a.button {
  width: 100%;
}
</style>
