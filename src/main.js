import { createApp } from 'vue';
import { router } from '@/router';
import { useAuth } from '@/composables';
import App from '@/App.vue';

import '@/assets/main.css';

const { authInit, getUser } = useAuth();

const app = createApp(App);

authInit();

app.use(router);

app.mount('#app');
