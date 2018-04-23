<template>
<article v-html="compiledMarkdown" class="content is-medium">
</article>  
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";

export default Vue.extend({
  name: "ContentArea",
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  computed: {
    compiledMarkdown(): string {
      return marked(this.markdown);
    }
  }
});
</script>

<style scoped>
article {
  height: 75vh;
  overflow-y: auto;
}
</style>
