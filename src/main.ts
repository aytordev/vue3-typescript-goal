import App from '@/App.vue';
import '@/assets/styles/index.scss';
import store from '@/store';
import { createApp } from 'vue';

const application = createApp(App);

application.use(store);
application.mount('#app');
