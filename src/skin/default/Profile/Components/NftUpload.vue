<template>
  <b-form @submit="onSubmit">
    <b-row>
      <b-col v-bind:class="{ 'col-6':previewVideo != null }">
        <div class="input__file__upload mb-4">
          <div class="no__file_select" v-if="previewImage == null && previewVideo == null">
            <img src="/img/file_photo.png" alt="file_photo">
          </div>
          <img  class="select__file__image"  v-if="previewImage != null" :src="previewImage" style="max-width: 100%"/>
          <video  class="select__file__video" v-if="previewVideo != null" :src="previewVideo" autoplay loop muted="muted" style="max-width: 100%;border-radius: 16px"/>
          <input id="nft-file" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg" v-on:change="onChangeFile">
        </div>

      </b-col>
      <b-col class="d-none col-6" v-bind:class="{ 'd-block':previewVideo != null }">
        <div class="input__file__upload mb-4">
          <div class="no__file_select" v-if="previewThumbnail == null">
            <img class="mb-3" src="/img/file_photo.png" alt="file_photo" style="max-width:100px;">
            <span class="d-block" style="font-size: 14px;color:#333;">썸네일을 선택해주세요</span>
          </div>
          <img  class="select__file__image"  v-if="previewThumbnail != null" :src="previewThumbnail" style="max-width: 100%"/>
          <input id="nft-file-thumbnail" type="file" accept=".png,.jpg,.jpeg" v-on:change="onChangeThumbnail">
        </div>

      </b-col>
    </b-row>
    <div class="tabs">

      <b-dropdown :text="selectCategory" class="text-left w-100 mb-4" toggle-class="sign__input text-left w-100 bg-white border-radius-10" menu-class="top-0" >
        <span v-for="n in $env.VUE_APP_CATEGORY.length" >
          <b-dropdown-item @click="changeCategory($env.VUE_APP_CATEGORY[n-1].name)">{{ $env.VUE_APP_CATEGORY[n-1].value }}</b-dropdown-item>
          <b-dropdown-divider v-if="n != $env.VUE_APP_CATEGORY.length"></b-dropdown-divider>
        </span>
      </b-dropdown>

      <div class="tab_content d-block border-radius-10" style="background-color: white;">
        <div class="p-3 d-flex" style="justify-content: space-between;" :class="{ 'mb-3' : this.properties1[0] === undefined }">
          <div class="d-flex" style="font-weight: 300;">
            <span class="p-2">{{ $t('collection.property') }}</span>
          </div>
          <div>
            <b-button class="d-block border-radius-10" variant="primary" @click="clickProperties">+</b-button>
          </div>
        </div>
        <div class="mb-3 p-2 properties_box" v-if="this.properties1[0]">
          <div style="color: var(--secondary-color);" v-for="(i, index) in this.properties1">
            <div class="pro_item_box">
              <div class="pro_item_1">{{ i }}</div>
              <div class="pro_item_2">{{ properties2[index] }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab_content d-block" >
        <div class="mb-3">
          <input  v-model="formData.name" :placeholder="$t('collection.nft_subject')" required type="text" class="form-control w-100 border-0 border-radius-10 p-3" id="exampleFormControlInput1">
        </div>
        <div class="mb-3">
          <textarea v-model="formData.description" :placeholder="$t('collection.nft_description')"  required class="form-control w-100 border-0 border-radius-10 p-3" id="exampleFormControlTextarea1"></textarea>
        </div>
      </div>
    </div>

    <b-button class="d-block m-auto" type="submit" variant="upload" v-bind:class="{ disabled : loading }">
      <b-spinner v-if="loading"></b-spinner>
      <span v-else class="base-font-weight">{{ $t('collection.upload') }}</span>
    </b-button>

    <modal-properties @saveProperties="save" />
  </b-form>
</template>

<script>
import Create from "@/mixins/Profile/Create";
import ModalProperties from "../../Modals/ModalProperties";

export default {
  name: "NftUpload",
  mixins: [Create],
  components: {
    ModalProperties
  }
}
</script>

<style scoped>
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
