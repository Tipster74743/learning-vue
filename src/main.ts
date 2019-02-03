import Vue         from 'vue';
import App         from './App.vue';
import router      from './router';
import VeeValidate from 'vee-validate';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMinusCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
