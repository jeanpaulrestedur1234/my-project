// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import facial_scanner from '@/components/pages/facial_scanner.vue';
import HomeComponent from '@/components/pages/HomeComponent.vue';
import filtersComponent from '@/components/pages/filtersComponent.vue';
import AnimationsComponent from '@/components/pages/AnimationsComponent.vue';
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
  {
    path: '/animation',
    name: 'animation',
    component: AnimationsComponent
  },



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
