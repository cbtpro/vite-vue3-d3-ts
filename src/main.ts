import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'default-passive-events';
import '@/style.css';
import App from '@/App.vue';
import '@/main-common';
import router from '@/router';

import '@/mock';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
