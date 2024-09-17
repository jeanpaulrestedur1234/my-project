// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import facial_scanner from '@/components/facial_scanner.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import filtersComponent from '@/components/filtersComponent.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/facial_scanner',
    name: 'facial_scanner',
    component: facial_scanner
  },
  {
    path: '/filters',
    name: 'filters',
    component: filtersComponent
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
