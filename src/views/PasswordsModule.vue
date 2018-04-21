<template>
<TopHero title="Passwords Module"/>
</template>

<script lang="ts">
import Vue from "vue";
import TopHero from "../components/Module/TopHero.vue";

export default Vue.extend({
  name: "PasswordsModule",
  components: {
    TopHero
  }
});
</script>

<style lang="scss" scoped>
.block__back-to-home {
  margin-left: -8px;
}
</style>
