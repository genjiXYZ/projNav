import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    name: "Home",
    component: Home,
    meta: {},
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/fridge",
    name: "Fridge",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fridge.vue"),
  },
  {
    path: "/risk",
    name: "Risk",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Risk.vue"),
  },
];

const router = new VueRouter({

  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to: ", to);
  if (to.name !== "Home") {
    let position = window.scrollY;
    store.commit("savePosition", position);
  }
  next();
  // ...
});

export default router;
