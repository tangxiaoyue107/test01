import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueI18n);
Vue.use(ElementUI);

import moment from 'moment'
Vue.prototype.$moment = moment;
moment.locale('zh-cn')  //设置为中文

import axios from "axios"
Vue.prototype.$axios = axios;





//有关i18n
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./lang/zh'), // 中文语言包
    'en': require('./lang/en'), // 英文语言包
  }
})
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
