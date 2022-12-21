

export default {
  name: "TopSellers",
  data(){
    return {
      loading : false,
      mainnetSymbol : "",
      sellers : []
    }
  },
  methods:{
    async loadData(){
      this.loading = true
      let result = await this.$api.topSeller({})
      this.loading = false

      if(result.data == undefined || result.data.length == 0){
        return
      }

      this.sellers = result.data
    },
    beforeCreated() {
      this.loadData()
    }
  },

}
