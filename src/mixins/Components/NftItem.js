export default {
  props : {
    nft : {
      required : true,
      type : Object
    }
  },
  computed:{
    viewImage(){
      if(this.nft.image_url && (!this.nft.video_url &&  !this.nft.music_url)){
        return true
      }else if(this.nft.video_url && (this.nft.image_url || this.nft.thumbnail) && this.mouse==false){
        return true
      }else if(this.nft.music_url && (this.nft.image_url || this.nft.thumbnail)){
        return true
      }


      return false
    },
    isMobileWeb() {
      if(this.nft.video_url && !this.nft.image_url){
        return false
      }

      let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      if(isMobile == true){
        return true
      }

      return false
    },
    profile(){
      if(this.nft.interface == 'erc1155'){
        return this.nft.creator
      }

      return this.nft.owner
    },
    nftAmount(){
      if(this.nft.offer == undefined || this.nft.offer.isForSale != true){
        return this.nft.price
      }

      return this.nft.offer.minValue
    },
    priceTitle(){
      if(this.nft.offer != undefined && this.nft.offer.isForSale == true){
        return this.$t('nft.auction')
      }else if(parseFloat(this.nft.price) <= 0){
        return this.$t('nft.status_sale')
      }


      return this.$t('nft.buy_now')
    },
    isSale(){
      if(this.nft.offer == undefined){
        return false
      }

      return this.nft.offer.isForSale
    },
    locationHref(){
      return window.location.href
    },
    nftImageURL(){
      if(this.nftData == null)
        return ""

      if(this.nftData.image_url)
        return this.nftData.image_url

      if(this.nftData.thumbnail)
        return this.nftData.thumbnail

      return this.nftData.image_url
    },
  },
  watch:{
    time(val){
      if(this.nft == undefined || this.nft.offer == undefined || this.nft.offer.endTime == undefined){
        return ""
      }

      let remainingsScond = this.nft.offer.endTime - val
      if(remainingsScond < 0){
        this.remainingTime = '00:00'
        return
      }else if(remainingsScond > 86400){
        this.remainingTime =parseInt(remainingsScond / 86400) + this.$t('nft.day')
        return
      }

      let hours = parseInt(remainingsScond / 3600)

      remainingsScond -= hours * 3600
      if(hours < 10){
        hours = "0" + hours
      }

      let minutes = parseInt(remainingsScond  / 60)
      remainingsScond -= minutes * 60
      if(minutes < 10){
        minutes = "0" + minutes
      }

      let scond  = parseInt(remainingsScond )
      remainingsScond -= scond
      if(scond < 10){
        scond = "0" + scond
      }

      if(hours > 0){
        this.remainingTime = `${hours}:${minutes}`
        return
      }

      this.remainingTime = `${minutes}:${scond}`
    }
  },
  data(){
    return {
      nftData : null,
      timer : null,
      time : 0,
      remainingTime : '00:00',
      active : false,
      mouse:false,
    }
  },
  methods:{
    setTime(){
      this.time = parseInt((new Date()).getTime() / 1000)
    },
    startTimer() {
      this.timer = setInterval(() => this.setTime(), 1000);
    },

    mouseover(){
      if(this.isMobileWeb == true){
        this.mouse = false
        return
      }

      this.mouse = true
    },
    mouseleave(){
      this.mouse = false
    }
  },
  created() {
    this.nftData = this.nft

    if(this.nftData.interface == 'erc1155'){
      return
    }

    this.setTime()
    this.startTimer()
  }
}
