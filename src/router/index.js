import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Students from "../pages/Students.vue";
import ApiStudents from "../pages/ApiStudents.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/students", component: Students },
  { path: "/api-students", component: ApiStudents } // new API page
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
