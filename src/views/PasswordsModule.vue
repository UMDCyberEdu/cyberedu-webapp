<template>
<CyberEduModule :title="title" :sectionsContents="sectionsContents" :sectionsTitlesIds="sectionsTitlesIds"/>
</template>

<script lang="ts">
import Vue from "vue";
import CyberEduModule from "../components/CyberEduModule.vue";

import {
  sectionsContents,
  sectionsTitlesIds
} from "../content/PasswordsModule/_all";

export default Vue.extend({
  name: "PasswordsModule",
  components: {
    CyberEduModule
  },
  data() {
    return {
      title: "Passwords Module",
      sectionsContents,
      sectionsTitlesIds
    };
  }
});
</script>
