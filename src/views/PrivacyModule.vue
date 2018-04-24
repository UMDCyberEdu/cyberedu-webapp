<template>
<CyberEduModule :title="title" :sections="sections"/>
</template>

<script lang="ts">
import Vue from "vue";
import CyberEduModule from "../components/CyberEduModule.vue";

import sections from "../content/PrivacyModule/_all";

export default Vue.extend({
  name: "PrivacyModule",
  components: {
    CyberEduModule
  },
  data() {
    return {
      title: "Privacy Module",
      sections
    };
  }
});
</script>
