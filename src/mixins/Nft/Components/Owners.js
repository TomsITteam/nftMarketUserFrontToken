
export default {
  name: "Owners",
  props:{
    nftData : Object,
    items : Array,
    total : Number
  },
  data(){
    return {
      modal:{
        sellerData : {},
        multiNftRow : {},
      },
      loading : false,
      owners : [],
      offset : 12,
    }
  },
  methods:{
    openMultiNftSend(row) {
      if (this.$wallet.getWallet().checkChainID(this.nftData.net) == false) {
        return
      }

      this.modal.multiNftRow = row
      this.$bvModal.show('bv-modal-send')
    },
    async buyMultiNft(sellerData) {
      if (this.$wallet.getWallet().checkChainID(this.nftData.net) == false) {
        return
      }

      this.modal.sellerData = sellerData
      this.$bvModal.show("bv-modal-multinft-buy")
    },
    async updateSaleMultiNft(sellerData) {
      if (this.$wallet.getWallet().checkChainID(this.nftData.net) == false) {
        return
      }

      this.modal.sellerData = sellerData
      this.$bvModal.show("bv-modal-update-multinft")
    },
    pushOwners(items){
      if(items.length == 0){
        return
      }

      for (var item of items){
        this.owners.push(item)
      }

      this.offset = this.owners.length
    },
    load(){
      if(this.total <= this.owners.length){
        return
      }

      this.loading = true
      let result = this.$api.getMultiNftOwners({
        nft_id : this.nftData.id,
        offset : this.offset
      })
      this.loading = false

      this.pushOwners(result.data)
    },
    beforeCreated() {
      this.pushOwners(this.items)
    }
  },

}
