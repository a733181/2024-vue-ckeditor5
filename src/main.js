import { createApp } from 'vue';

import App from './App.vue';
import '@/assets/base.css';
import appUse from '@/use/index.js';
import components from '@/components/index.js';

const app = createApp(App);

appUse(app);
components(app);

app.mount('#app');