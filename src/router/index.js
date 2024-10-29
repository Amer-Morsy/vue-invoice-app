import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Invoice from "../views/InvoicePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: Invoice,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
