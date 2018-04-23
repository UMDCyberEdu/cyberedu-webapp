<template>
<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>The CyberEdu webapp</strong> by the <a href="//umdcyberedu.github.io">UMD CyberEdu team</a>. The source code is <a href="//github.com/umdcyberedu/cyberedu-webapp">available on Github</a>. 
      </p>
    </div>
  </div>
</footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TheFooter"
});
</script>

<style lang="scss" scoped>
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

footer.footer {
  background-color: $black;
  color: $light;

  strong {
    color: $light;
  }

  a:hover {
    color: $light;
    text-decoration: underline;
  }
}
</style>
