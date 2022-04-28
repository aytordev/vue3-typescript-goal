import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';

const application = createApp(App);

application.use(router);
application.use(store);
application.mount('#app');
