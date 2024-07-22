import pinia from '@/stores';
import router from '@/router';

function appUse(app) {
  app.use(router);
  app.use(pinia);
}

export default appUse;