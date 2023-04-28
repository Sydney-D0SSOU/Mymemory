import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/signup.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue"),
  },
  {
    path: "/login1",
    name: "login1",
    component: () => import("../views/login1.vue"),
  },
  {
    path: "/adproject",
    name: "adproject",
    component: () => import("../views/adproject.vue"),
  },
  {
    path: "/myproject",
    name: "myproject",
    component: () => import("../views/myproject.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
