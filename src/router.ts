import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import PasswordsModule from "./views/PasswordsModule.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/passwords",
      name: "passwords",
      component: PasswordsModule
    }
  ]
});
