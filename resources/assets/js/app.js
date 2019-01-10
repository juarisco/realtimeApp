/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import Vue from "vue";
import VueSimplemde from "vue-simplemde";
import Vuetify from "vuetify";
import User from "./Helpers/User";
import router from "./Router/router.js";

Vue.use(Vuetify);

Vue.use(VueSimplemde);

window.User = User;
// console.log(User.loggedIn());
// User.logout();
// console.log(User.loggedIn());
window.EventBus = new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component("AppHome", require("./components/AppHome.vue"));

const app = new Vue({
    el: "#app",
    router
});
