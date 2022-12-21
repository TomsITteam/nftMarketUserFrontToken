export default {
  computed:{
    allowedLayerUploadWallet(){
      let addresses = this.$env.VUE_APP_UPLOAD_FILTER_LAYER.toLowerCase().split(",")
      for (var address of addresses){
        if(address == this.$wallet.getWallet().getAccount()){
          return true
        }
      }
      return false
    },
    selectCategory(){
      if(this.formData.category == ""){
        return this.$t('collection.select_category')
      }

      for(var key in this.$env.VUE_APP_CATEGORY){
        if(this.$env.VUE_APP_CATEGORY[key].name == this.formData.category){
          return this.$env.VUE_APP_CATEGORY[key].value
        }
      }

      return ""
    }
  },
  data(){
    return {
      loading : false,

      previewImage : null,
      previewVideo : null,
      previewAudio : null,
      previewThumbnail : null,
      formData : {
        file : null,
        thumbnail : null,
        category : "",
        name : "",
        description : ""
      },
      tab : false,
      layerUpload : false,
      properties1: [],
      properties2: [],
    }
  },
  methods:{
    changeCategory(category){
      this.formData.category = category
    },
    onChangeFile(event){
      if(event.target.files.length == 0){
        return
      }

      let file = event.target.files[0]
      if(file.type == 'video/mp4') {
        this.previewVideo = URL.createObjectURL(file);
      } else if (file.type == 'audio/mpeg') {
        this.previewAudio = URL.createObjectURL(file);
        this.previewImage = null
      } else {
        this.previewImage = URL.createObjectURL(file);
      }

      this.formData.file = file
    },
    onChangeThumbnail(event){
      if(event.target.files.length == 0){
        return
      }

      let file = event.target.files[0]
      this.previewThumbnail = URL.createObjectURL(file);

      this.formData.thumbnail = file
    },
    onSubmit(event){
      event.preventDefault()

      this.createdNft()
    },
    async createdNft(){
      if(this.formData.file == null){
        alert(this.$t('collection.upload_file'))
        return
      }
      if(this.loading == true) {
        return
      }

      this.loading = true
      let result = await this.$api.createdNFT({
        data : {
          nft_file        : this.formData.file,
          nft_thumbnail        : this.formData.thumbnail,
          nft_category        : this.formData.category,
          nft_name       : this.formData.name,
          nft_description : this.formData.description,
          general_layers_type : this.properties1,
          general_layers_value : this.properties2
        }
      })
      this.loading = false
      if(result == false){
        return
      }else if(result.error != undefined){
        alert(result.error.message)
        return
      }

      this.$router.push({
        name : "Nft",
        params: { nft_id: result.id }
      })
    },
    changeMod(isLayer){
      this.layerUpload = isLayer
    },
    clickProperties() {
      this.$bvModal.show('bv-modal-properties')
    },
    save(text1, text2) {
      this.properties1 = text1
      this.properties2 = text2
    }
  },
  created() {
    document.title = this.$t('collection.create_nft') + " | " + this.$env.VUE_APP_NAME
  }
}
