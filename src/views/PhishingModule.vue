<template>
<CyberEduModule :title="title" :sections="sections"/>
</template>

<script lang="ts">
import Vue from "vue";
import CyberEduModule from "../components/CyberEduModule.vue";

import sections from "../content/PhishingModule/_all";

export default Vue.extend({
  name: "PasswordsModule",
  components: {
    CyberEduModule
  },
  data() {
    return {
      title: "Phishing Module",
      sections
    };
  }
});
</script>
