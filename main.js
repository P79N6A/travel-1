import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
const jwx=require("./utils/jwx.js");
Vue.mixin({
  onShow() {
	console.log(process.env.NODE_ENV);
    jwx.configWeiXin(jweixin => {
      jweixin.hideOptionMenu();
    });
  }
});