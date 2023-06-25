import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

// vite动态导入路由方式
const modules = import.meta.glob("../view/**/*.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/home",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savePosition) {},
});

export default router;
