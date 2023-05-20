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
    component: () => import("../views/auth/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/auth/signup.vue"),
  },
 
  {
    path: "/login1",
    name: "login1",
    component: () => import("../views/auth/login1.vue"),
  },
  {
    path: "/theproject",
    name: "theproject",
    component: () => import("../views/project/theproject.vue"),
  },
  {
    path: "/myproject",
    name: "myproject",
    component: () => import("../views/project/myproject.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/admin.vue"),
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("../views/admin/details.vue"),
  },
  {
    path: "/detailspro/:id",
    name: "detailspro",
    component: () => import("../views/project/detailspro.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test/test.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
