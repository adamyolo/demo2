import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(ViewUI);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
