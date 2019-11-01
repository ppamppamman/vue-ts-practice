import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadViewComponent( filename:string ) {
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // PLEASE DO NOT DELETE these comment which is webpackChunkName !!!
  let directory:string = filename.toLowerCase().replace("view", "");
  return () => import(/* webpackChunkName: "view-[request]" */ `@/spa/${directory}/${filename}.vue`)
}

const routes = [
  {
    path: "/",
    name: "home_view",
    component: loadViewComponent("HomeView")
  },
  {
    path: "/about",
    name: "about_view",
    component: loadViewComponent("AboutView")
  },
  {
    path: "/game/:id",
    name: "game_view",
    component: loadViewComponent("GameView")
  },
  // redirect 가능 { path: '/', redirect: '/about', ... }
  
];

const router = new VueRouter({
  routes
});

export default router;
