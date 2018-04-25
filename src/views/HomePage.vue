<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-spaced">
          CyberEdu Modules
        </h1>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column is-4">
        
        <StartModuleCard :title="'Passwords'" :img="require('@/assets/passwords_module.jpeg')" 
        :pathToModule="'/modules/passwords'"> 
          Learn how to make good passwords and manage passwords with ease.
        </StartModuleCard>
      
      </div>
      <div class="column is-4">
        
        <StartModuleCard :title="'Phishing'" :img="require('@/assets/phishing_module.jpeg')" 
        :pathToModule="'/modules/phishing'"> 
          Learn how phishing occurs and how to avoid being phished.
        </StartModuleCard>
      
      </div>
      <div class="column is-4">
        
        <StartModuleCard :title="'Privacy'"
         :img="require('@/assets/socialmedia_module.png')" 
         :pathToModule="'/modules/privacy'"> 
          Learn how to keep your information private and where your data is being shared.
        </StartModuleCard>
      
      </div>
    </div>
  </section>

</div>
</template>

<script lang="ts">
import Vue from "vue";
import StartModuleCard from "../components/StartModuleCard.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    StartModuleCard
  }
});
</script>

<style scoped>
.section {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
