import Vue from "vue";

// Bootstrap-vue https://bootstrap-vue.js.org/docs
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue Router
import VueRouter from "vue-router";

// Vue Plugin import
Vue.use(BootstrapVue);
Vue.use(VueRouter);

function loadViewComponent(filename: string) {
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.

  // PLEASE DO NOT DELETE these comment which is webpackChunkName !!!
  let directory: string = filename.replace( /([A-Z])/g, " $1" ).split(' ').join('_').toLowerCase().replace("view", "");
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/spa/${filenameToDirectrory(filename)}/${filename}.vue`
    );
}

function loadChildComponent(directory: string, filename: string) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/spa/${directory}/${filename}.vue`
    );
}

function filenameToDirectrory(filename: string){
  let result: string = filename.replace( /([A-Z])/g, " $1" ).split(' ').join('_').toLowerCase().replace("view", "");
  if (result[0] == "_") {
    return result.slice(1, -1);
  }
  return result.slice(1, -1);
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
    path: "/quiz",
    name: "quiz_view",
    component: loadViewComponent("QuizView"),
    children: [
      {
        path: "/",
        name: "list",
        component: loadChildComponent("quiz/components", "List")
      },
      {
        path: "random/:quizId/show",
        name: "random_show",
        component: loadChildComponent("quiz/random_quiz", "Show")
      },
      {
        path: "ideal/:quizId/show",
        name: "quiz_id_show",
        component: loadChildComponent("quiz/ideal_quiz", "Show")
      },
      {
        path: "similar/:quizId/show",
        name: "quiz_id_show",
        component: loadChildComponent("quiz/similar_quiz", "Show")
      },
    ]
  },
  
  {
    path: "/quiz_create",
    name: "quiz_create_view",
    component: loadViewComponent("QuizCreateView")
  },
  // redirect 가능 { path: '/', redirect: '/about', ... }
];

const router = new VueRouter({
  routes
});

export default router;
