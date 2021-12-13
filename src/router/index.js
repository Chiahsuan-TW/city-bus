import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:city",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/stop-sequence",
    name: "Sequence",
    component: () => import("../views/Sequence.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
