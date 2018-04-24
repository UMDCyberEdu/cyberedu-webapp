<template>
<div>
<TopHero :title="title"/>
<div class="columns is-gapless">
  <div class="column is-one-quarter">
    <TableOfContents :sections="sections" :current_section_id="currentSectionId"/>
  </div>
  <div class="column is-content">
    <ContentArea :markdown="currentContent"/>

    <hr>

    <nav class="level is-mobile">
      <div class="level-left">
        <div class="level-item has-text-centered">
          <button class="button is-medium is-primary is-outlined" @click="prevSection" :disabled="disablePrevButton">Prev</button>
        </div>
      </div>
      
      <strong>{{currentSectionId + 1}} / {{totalNumberOfSections}}</strong>
      
      <div class="level-right">
        <div class="level-item has-text-centered">
          <button class="button is-medium is-primary is-outlined" @click="nextSection" :disabled="disableNextButton">Next</button>
        </div>
      </div>
    </nav>
  
  </div>
</div>
</div>
</template>

/**

This component does NOT use TypeScript because of a bug:
https://github.com/vuejs/vue/issues/6841
https://github.com/vuejs/vue/pull/6856

*/
<script>
import Vue from "vue";
import TopHero from "./CyberEduModule/TopHero.vue";
import TableOfContents from "./CyberEduModule/TableOfContents.vue";
import ContentArea from "./CyberEduModule/ContentArea.vue";

export default Vue.extend({
  name: "CyberEduModule",
  components: {
    TopHero,
    TableOfContents,
    ContentArea
  },
  props: {
    title: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const onLeftArrowPress = this.prevSection;
    const onRightArrowPress = this.nextSection;
    // for easy navigation among sections within the module
    window.addEventListener("keyup", event => {
      // left key
      if (event.keyCode == 37) {
        onLeftArrowPress();
      }
      // right key
      if (event.keyCode == 39) {
        onRightArrowPress();
      }
    });
  },
  data() {
    return {
      currentSectionId: 0,
      totalNumberOfSections: this.sections.length
    };
  },
  computed: {
    currentContent() {
      // returns content as a multiline, markdown string to be rendered
      return this.sections[this.currentSectionId].content;
    },
    disablePrevButton() {
      return this.currentSectionId <= 0;
    },
    disableNextButton() {
      return this.currentSectionId >= this.totalNumberOfSections - 1;
    }
  },
  methods: {
    prevSection() {
      if (this.currentSectionId > 0) {
        this.currentSectionId--;
      }
    },
    nextSection() {
      if (this.currentSectionId < this.totalNumberOfSections - 1) {
        this.currentSectionId++;
      }
    }
  }
});
</script>

<style scoped>
.columns {
  padding: 0px;
}

.columns > .column {
  padding: 32px !important;
}

.column.is-content {
  background-color: white;
}

.block__back-to-home {
  margin-left: -8px;
}
hr {
  border-top: 1px solid grey;
}
</style>
