<template>
  <b-modal id="bv-modal-klip-wallet"  @show="show" @close="hide" @hide="hide" size="lg" title="Large Modal" hide-footer>
    <!--    centered-->
    <template #modal-title>
      {{ $t('header.kakao_qr') }}
    </template>
    <div class="underline mt-1 mb-5"></div>
    <div v-if="isMobile() == true">
      <div class="text-center mt-2 mb-5" style="justify-content: center !important;">
        <b-spinner label="Loading..."></b-spinner>
      </div>
      <b-row>
        <b-col>
          <p class="text-center">{{ $t('header.time') }} : {{ cnt }}</p>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-form>
        <b-row>
          <b-col>
            <qrcode-vue class="text-center" :value="codeData" :size="size" level="H" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="text-center">{{ $t('header.time') }} : {{ cnt }}</p>
          </b-col>
        </b-row>
      </b-form>
      <div class="underline mt-3 mb-3"></div>
      <div class="text-center" style="justify-content: center !important;">
        <img src="https://klayswap.com/img/icon/ic-kakaotalk-logo.svg" alt="" class="mr-3">
        <img src="https://klayswap.com/img/icon/ic-pointer-right-bk.svg" alt="" class="mr-3">
        <img src="https://klayswap.com/img/icon/ic-kakaotalk-search.svg" alt="" class="mr-3">
        <img src="https://klayswap.com/img/icon/ic-pointer-right-bk.svg" alt="" class="mr-3">
        <img src="https://klayswap.com/img/icon/ic-kakaotalk-scan.svg" alt="" class="">
      </div>

      <div class="text-center mt-2" style="justify-content: center !important;">
        <span class="mr-3 ml-3">{{ $t('header.connect_text1') }}</span>
        <span class="mr-3">{{ $t('header.connect_text2') }}</span>
        <span>{{ $t('header.connect_text3') }}</span>
      </div>
      <div class="text-center mt-2" style="justify-content: center !important;">
        <span>{{ $t('header.connect_text4') }}</span>
      </div>
    </div>

  </b-modal>
</template>
<script>

import ModalKlipWallet from '@/mixins/Modals/ModalKlipWallet'
import QrcodeVue from "qrcode.vue";

export default {
  name: "ModalKlipWallet",
  mixins : [
    ModalKlipWallet
  ],
  components: {
    QrcodeVue,
  },
}
</script>

<style scoped>
.underline {
  border-bottom: rgb(104 104 104 / 50%) 1px solid;
}
span {
  font-size: 10px;
}
</style>
