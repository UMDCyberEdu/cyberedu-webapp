<template>
<div>
<TopHero title="Passwords Module"/>
<div class="columns is-gapless">
  <div class="column is-one-quarter">
    <TableOfContents :sections="sectionsTitlesIds" :current_section_id="currentSectionId"/>
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
      
      {{currentSectionId + 1}} / {{totalNumberOfSections}} 
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

<script lang="ts">
import Vue from "vue";
import TopHero from "../components/Module/TopHero.vue";
import TableOfContents from "../components/Module/TableOfContents.vue";
import ContentArea from "../components/Module/ContentArea.vue";

import {
  allSectionsContents,
  sectionsTitlesIds
} from "../content/PasswordsModule/_all";

export default Vue.extend({
  name: "PasswordsModule",
  components: {
    TopHero,
    TableOfContents,
    ContentArea
  },
  data() {
    return {
      sectionsTitlesIds,
      currentSectionId: 0,
      totalNumberOfSections: sectionsTitlesIds.length
    };
  },
  computed: {
    currentContent(): String {
      // returns content as a multiline, markdown string to be rendered
      return allSectionsContents[this.currentSectionId];
    },
    disablePrevButton(): boolean {
      return this.currentSectionId <= 0;
    },
    disableNextButton(): boolean {
      return this.currentSectionId >= this.totalNumberOfSections - 1;
    }
  },
  methods: {
    prevSection() {
      this.currentSectionId--;
    },
    nextSection() {
      this.currentSectionId++;
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
