import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '@/router/routes.js';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {});

router.afterEach((to, from) => {
  document.title = to.meta.title;
  window.scrollTo(0, 0);
});
export default router;