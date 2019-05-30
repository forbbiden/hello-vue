import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/todo",
      name: "TodoList",
      component: () => import("./views/TodoList.vue")
    },
    {
      path: "/haha",
      name: "Haha",
      component: () => import("./views/Haha.vue")
    },
    {
      path: "/directives",
      name: "Directives",
      component: () => import("./views/Directives.vue")
    },
    {
      path: "/computed-attr",
      name: "ComputedAttr",
      component: () => import("./views/ComputedAttr.vue")
    },
    {
      path: "/style",
      name: "Style",
      component: () => import("./views/Style.vue")
    },
    {
      path: "/event",
      name: "Event",
      component: () => import("./views/Event.vue")
    }
  ]
});
