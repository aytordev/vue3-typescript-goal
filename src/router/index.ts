import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/active',
    name: 'active',
    component: () => import('@/pages/Default.vue'),
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('@/pages/Default.vue'),
  },
  {
    path: '/',
    name: 'default',
    component: () => import('@/pages/Default.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
