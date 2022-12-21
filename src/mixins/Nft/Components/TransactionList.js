export default {
  props: {
    nftData : {
      type: Array,
    },
    net : {
      type: String,
    },
    interface: {
      type: String,
    }
  },
  methods: {
    getTransferPrice(method, price) {
      if (method == 'mint') {
        return this.$t('nft.price') + " " + price
      } else if (method == 'auctionMint') {
        return this.$t('nft.minimum_bid') + " " + price
      } else if (method == 'buy') {
        return price
      } else if (method == 'endAuction') {
        return this.$t('nft.successful_bid_price') + " " + price
      }

      return this.$t('nft.price') + price
    },
    timeToElapsed(time) {
      let parallax = parseInt((new Date()).getTime() / 1000) - time

      if (parallax > 86400) {
        return parseInt(parallax / 86400) + this.$t('nft.day_ago')
      } else if (parallax > 3600) {
        return parseInt(parallax / 3600) + this.$t('nft.hour_ago')
      } else if (parallax > 60) {
        return parseInt(parallax / 60) + this.$t('nft.minute_ago')
      } else {
        return parseInt(parallax) + this.$t('nft.second_ago')
      }
    },
    getTransferType(method) {
      if (method == 'mint') {
        return this.$t('nft.mint')
      } else if (method == 'auctionMint') {
        return this.$t('nft.auctionMint')
      } else if (method == 'buy') {
        return this.$t('nft.buy')
      } else if (method == 'endAuction') {
        return this.$t('nft.successful_bid')
      } else if (method == 'burn') {
        return this.$t('nft.incinerated')
      } else if (method == 'saleMint') {
        return this.$t('nft.quantity_issuance')
      }

      return this.$t('nft.sendRecived')
    },
  },
}
