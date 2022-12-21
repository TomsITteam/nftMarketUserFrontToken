export default {
  props:{
    item : Object
  },
  computed:{
    rateOfChange(){
      if(this.item.prev_month_sales_amount == 0 && this.item.month_sales_amount == 0){
        return 0
      }else if(this.item.prev_month_sales_amount == 0){
        return 100
      }

      return (this.item.month_sales_amount - this.item.prev_month_sales_amount) / this.item.prev_month_sales_amount * 100
    }
  },
  data(){
    return {
      mainnetSymbol : ""
    }
  },
  methods:{

  },
  created() {
    if(this.$env.VUE_APP_BASE_MAINNET == "ETH"){
      this.mainnetSymbol = "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    }else if(this.$env.VUE_APP_BASE_MAINNET == "KLAY"){
      this.mainnetSymbol = "https://cryptologos.cc/logos/klaytn-klay-logo.png?v=022"
    }else if(this.$env.VUE_APP_BASE_MAINNET == "MATIC"){
      this.mainnetSymbol = "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
    }else if(this.$env.VUE_APP_BASE_MAINNET == "BSC"){
      this.mainnetSymbol = "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
    }
  }
}
