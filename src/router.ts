import Vue from "vue";
import Router from "vue-router";

import HomePage from "./views/HomePage.vue";

import PasswordsModule from "./views/PasswordsModule.vue";
import PhishingModule from "./views/PhishingModule.vue";
import PrivacyModule from "./views/PrivacyModule.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/modules",
      name: "modules",
      component: HomePage
    },
    {
      path: "/modules/passwords",
      name: "passwords",
      component: PasswordsModule
    },
    {
      path: "/modules/phishing",
      name: "phishing",
      component: PhishingModule
    },
    {
      path: "/modules/privacy",
      name: "privacy",
      component: PrivacyModule
    }
  ]
});
