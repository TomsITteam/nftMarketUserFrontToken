<template>
  <div>

    <b-row class="mb-3" v-for="(item,index) in selecteLayerData">
      <label>{{ index }}</label>
      <b-form-select class="col-12 mb-3" v-model="selectLayer[index]" :options="item" @change="changeLayerSelect(index)"></b-form-select>
    </b-row>

    <b-row>
      <b-dropdown :text="selectCategory" class="text-left w-100 mb-4" toggle-class="sign__input text-left w-100 bg-white" menu-class="top-0" >
        <span v-for="n in $env.VUE_APP_CATEGORY.length" >
          <b-dropdown-item @click="changeCategory($env.VUE_APP_CATEGORY[n-1].name)">{{ $env.VUE_APP_CATEGORY[n-1].value }}</b-dropdown-item>
          <b-dropdown-divider v-if="n != $env.VUE_APP_CATEGORY.length"></b-dropdown-divider>
        </span>
      </b-dropdown>


      <div class="tab_content d-block w-100" >
        <div class="mb-3">
          <input  v-model="formData.name" :placeholder="$t('collection.nft_subject')" required type="text" class="form-control w-100 border-0 p-3" id="exampleFormControlInput1">
        </div>
        <div class="mb-3">
          <textarea v-model="formData.description" :placeholder="$t('collection.nft_description')"  required class="form-control w-100 border-0 p-3" id="exampleFormControlTextarea1"></textarea>
        </div>
      </div>
    </b-row>

    <b-row class="mb-3 justify-content-center">

      <div  class="position-relative w-50" style="padding-bottom:50%;">
        <div  class="input__file__upload position-absolute d-block w-100" style="top:0;left:0;width:100%;height: 100%;">
          <div class="no__file_select" v-if="previewImage == null && previewVideo == null">
            <img src="/img/file_photo.png" alt="file_photo">
          </div>

          <img  class="select__file__image"  v-if="previewImage != null" :src="previewImage" style="max-width: 100%"/>
          <video  class="select__file__video" v-if="previewVideo != null" :src="previewVideo" autoplay loop muted="muted" style="max-width: 100%;border-radius: 3px"/>
          <input id="nft-file" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg" v-on:change="onChangeFile">
        </div>
      </div>

    </b-row>

    <b-button class="d-block m-auto" @click="createdNft" variant="upload" v-bind:class="{ disabled : loading }">
      <b-spinner v-if="loading"></b-spinner>
      <span v-else class="base-font-weight">{{ $t('collection.upload') }}</span>
    </b-button>
  </div>
</template>

<script>
import LayerUpload from "@/mixins/Profile/Components/LayerUpload";

export default {
  name: "LayerUpload",
  mixins:[LayerUpload],
  data(){
    return {

    }
  },
  methods:{

  },
  created() {
    this.beforeCreated()
  }
}
</script>

<style scoped>
label{
  font-size:18px;
  margin-bottom:12px;
}
select{
  background-color: #fff;
  border:1px solid #eee;
  height: 50px;
  border-radius: 3px;
  font-size: 18px;
  color:#333;
}
input{
  border: 1px solid #F2F2F2;
  background-color: #fff;
  font-size: 14px;
  height: 50px;
  outline: 0;
}
textarea{
  outline: 0px;
  height: 200px;
  border: 1px solid rgb(242, 242, 242);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
}
</style>
