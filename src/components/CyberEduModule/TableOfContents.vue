<template>
<div>
<h1 class="title is-5" v-for="section in sections" v-bind:key="section.id" :class="[ {'completed': section.id < current_section_id}]">
  <span class="circle" :class="[{'is-invisible': section.id != current_section_id}]"></span>
  {{section.title}}
</h1>
</div>
</template>

<script lang="ts">
import Vue from "vue";

interface Section {
  id: number;
  title: string;
}

export default Vue.extend({
  name: "TableOfContents",
  props: {
    sections: {
      type: Array,
      required: true,
      description:
        "Array of objects representing titles and indices of sections within current module",
      validator: (sections: Array<Section>) => {
        sections.forEach(section => {
          if (section.id == null || section.title == null) {
            return false;
          }
        });
        return true;
      }
    },
    current_section_id: {
      type: Number,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
$primary: #ec644b;

h1.completed {
  color: lightgray;
}

.circle:before {
  content: " \25CF";
  color: $primary;
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
</style>
