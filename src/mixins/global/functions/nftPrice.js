export default {
  methods:{
    nftPrice(net,amount){
      let price = this.amountToPrice(net,amount)

      return price;
    },
  }
}
