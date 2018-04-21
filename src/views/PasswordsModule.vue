<template>
<div>
<TopHero title="Passwords Module"/>
<div class="columns">
  <div class="column is-one-quarter">
    <TableOfContents :sections="sections" :current_section_id="currentSectionId"/>
  </div>
  <div class="column">

  </div>
</div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import TopHero from "../components/Module/TopHero.vue";
import TableOfContents from "../components/Module/TableOfContents.vue";

export default Vue.extend({
  name: "PasswordsModule",
  components: {
    TopHero,
    TableOfContents
  },
  data() {
    return {
      sections: [
        {
          id: 0,
          title: "Introduction"
        },
        {
          id: 1,
          title: "Strong Passwords"
        },
        {
          id: 2,
          title: "Password Management"
        },
        {
          id: 3,
          title: "Enabling 2FA"
        },
        {
          id: 4,
          title: "Resources"
        }
      ],
      currentSectionId: 0
    };
  }
});
</script>

<style scoped>
.block__back-to-home {
  margin-left: -8px;
}
</style>
