<template>
  <div>
    <div class="tabs mb-0">
      <b-container class="pb-4 not-scroll">
        <b-row class="m-0" style="width:max-content">
          <b-button class="mr-2" variant="transparency" :to="'/profile/' + this.$route.params.address + '/nfts/sale'" style="width:120px">{{ $t('collection.sale') }}</b-button>
          <b-button class="mr-2" variant="transparency" :to="'/profile/' + this.$route.params.address  + '/nfts/owner'" style="width:120px">{{ $t('collection.holding') }}</b-button>
          <b-button class="mr-2" variant="transparency" :to="'/profile/' + this.$route.params.address  + '/nfts/creator'" style="width:120px">{{ $t('collection.created') }}</b-button>
          <b-button class="mr-2" variant="transparency" v-if="this.$route.params.address == this.$wallet.getWallet().getAccount()" :to="'/profile/' + this.$route.params.address  + '/setting'" style="width:120px">{{ $t('collection.setting') }}</b-button>
        </b-row>
      </b-container>
      <div id="upload" class="pt-4">
        <div class="container pb-4">
          <div class="up_box">

            <b-row class="justify-content-center">
              <h2>NFT {{ $t('collection.upload') }}</h2>
            </b-row>
            <b-row v-if="allowedLayerUploadWallet" class="justify-content-center mb-4">
              <b-button class="font-weight-light but-upload-type tab_view mr-2" style="width:120px; padding: 10px;" v-bind:class="{ active:!layerUpload }" @click="changeMod(false)">일반</b-button>
              <b-button class="font-weight-light but-upload-type tab_view" style="width:120px; padding: 10px;" v-bind:class="{ active:layerUpload }" @click="changeMod(true)">레이어</b-button>
            </b-row>

            <nft-upload v-if="!layerUpload" />
            <layer-upload v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Create from "@/mixins/Profile/Create";
import NftUpload from "./Components/NftUpload";
import LayerUpload from "./Components/LayerUpload";

export default {
  name: "Create",
  components: {LayerUpload, NftUpload},
  mixins: [Create],
}
</script>

<style scoped>
.filebox .upload-name {
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
}
.filebox label {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
}
.filebox input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
}
</style>
