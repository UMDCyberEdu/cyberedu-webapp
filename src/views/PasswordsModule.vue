<template>
<CyberEduModule :title="title" :sections="sections"/>
</template>

<script lang="ts">
import Vue from "vue";
import CyberEduModule from "../components/CyberEduModule.vue";

import sections from "../content/PasswordsModule/_all";

export default Vue.extend({
  name: "PasswordsModule",
  components: {
    CyberEduModule
  },
  data() {
    return {
      title: "Passwords Module",
      sections
    };
  }
});
</script>
