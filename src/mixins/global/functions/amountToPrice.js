import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('exchange', [
      'getPrice'
    ]),
  },
  methods:{
    amountToPrice(net,amount){
      if(net == undefined){
        net = ""
      }
      const mainnet = net.toLowerCase()
      if(this.getPrice == null || this.getPrice[mainnet] == undefined){
        return 0
      }

      let local, won

      if(this.langLocale == 'ko') {
        local = 'ko-KR'
        won = '₩'
      } else {
        local = 'en-us'
        won = '$'
      }

      let price = this.getPrice[mainnet] * amount

      const option = {
        maximumFractionDigits: 4
      }


      return won + ' ' + price.toLocaleString(local, option)
    },
  }
}
