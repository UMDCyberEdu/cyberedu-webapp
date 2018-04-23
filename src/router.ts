import Vue from "vue";
import Router from "vue-router";

import HomePage from "./views/HomePage.vue";
import PasswordsModule from "./views/PasswordsModule.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/passwords",
      name: "passwords",
      component: PasswordsModule
    }
  ]
});
