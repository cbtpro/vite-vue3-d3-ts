import { createApp } from 'vue';
import 'default-passive-events';
import '@/style.css';
import App from '@/App.vue';
import '@/main-common';

import '@/mock';

createApp(App).mount('#app');
