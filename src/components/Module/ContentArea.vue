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


/*
Renders markdown file as html

Props: path to markdown file, onclick listener for prev/next button
*/
