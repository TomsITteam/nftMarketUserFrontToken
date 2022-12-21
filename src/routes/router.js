import Vue from 'vue';
import VueRouter from 'vue-router';

import store from "../store";
import wallet from "../wallet";
import wallets from "@/wallets";
import routes from './default.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode : 'history',
    routes,
    linkActiveClass: 'active',
    scrollBehavior: (to, from ,savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    },

});

router.beforeResolve((to,from,next) => {
  try {
    let storage = wallets.getStorage();

    if (storage.connection.conn == true && (window.ethereum !== undefined || window.klaytn != undefined)) {
      wallet.getWallet().checkConnect() // 로그인 시키기
    }
  } catch(e) {
    console.log(e)
  }

  next()
})

router.gotoCreated = () => {
  if(wallet.getWallet().isDownload() == false){
    return
  }

  if(wallet.getWallet().isConnect() == false || wallet.getWallet().getAccount() == undefined){
    wallet.getWallet().connectWallet()
    return
  }
  router.push({
    name : "Create",
    params : {
      address : wallet.getWallet().getAccount()
    }
  })
}

export default router;
