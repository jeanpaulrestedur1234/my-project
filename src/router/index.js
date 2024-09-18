// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import facial_scanner from '@/components/pages/facial_scanner.vue';
import QuotesComponent from '@/components/pages/QuotesComponent.vue';
import filtersComponent from '@/components/pages/filtersComponent.vue';
import AnimationsComponent from '@/components/pages/AnimationsComponent.vue';
import UserC from '@/components/pages/Users/UserC.vue';
import UserStart from '@/components/pages/Users/UserStart.vue';
import UserDetail from '@/components/pages/Users/UserDetail.vue';
import UserEdit from '@/components/pages/Users/UserEdit.vue';
import vuexComponent from '@/components/pages/vuexComponent.vue';
import FormComponent from '@/components/pages/formComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: QuotesComponent
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
  {
    path: '/form',
    name: 'form',
    component: FormComponent
  },

  {
    path: '/user',
    name: 'user',
    component: UserC,
    children:[
      {path:'', component: UserStart},
      {path:':id', component: UserDetail},
      {path:':id/edit', component: UserEdit, name: "userEdit"}
    ]
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: vuexComponent
  },

  {path: '/redirect.me', redirect:'/user'}


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
