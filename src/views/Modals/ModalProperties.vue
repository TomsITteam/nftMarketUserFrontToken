<template>
  <b-modal id="bv-modal-properties" hide-footer @show="show" @hide="hide">
    <template #modal-title>
      속성 추가
    </template>

    <div style="height: 100%; overflow-y: auto;">
      <p>속성은 항목 아래에 표시되고 클릭 가능하며 컬렉션의 사이드바에서 필터링 할 수 있습니다.</p>
      <table class="mb-2" style="width: 100%;">
        <thead>
        <tr>
          <th class="pl-5">타입</th>
          <th>이름</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in tables" >
            <td>
              <div>
                <div class="properties" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">
                  <div class="input_left">
                    <button class="remove_btn" @click="removeList(index)">
                      <i class="fal fa-times"></i>
                    </button>
                  </div>
                  <div class="prefix"></div>
                  <input type="text" class="type_text" placeholder="Character" v-model="inputText1[index]"/>
                </div>
              </div>
            </td>
            <td>
              <div>
                <div class="properties" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">
                  <div class="prefix"></div>
                  <input type="text" class="type_text"  placeholder="Male" v-model="inputText2[index]"/>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <b-button class="m-1" variant="primary" @click="addTables">+</b-button>
    </div>

    <div class="mt-3 pt-3 pb-3" style="border-top: 1px solid #eee">
      <div class="m-auto">
        <b-button style="float: right; width: 100px;"  variant="primary" @click="saveFilter">저장</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
import ModalProperties from "@/mixins/Modals/ModalProperties"

export default {
  name: "ModalProperties",
  mixins: [ModalProperties],
}
</script>

<style scoped>

i {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
}
th {
  margin-left: 50px;
  text-align: start;
  padding: 15px 5px;
}
td {
  padding: 0 0 20px;
}

input {
  color: inherit;
  font: inherit;
  margin: 0;
  width: 100%;
}
button {
  font-weight: 300;
}
</style>
