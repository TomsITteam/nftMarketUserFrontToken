<template>
  <div @scroll="scroll">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "scrollTrigger",
  props:{
    top    : Function,
    bottom : Function
  },
  data(){
    return {

    }
  },
  methods:{
    prevTop(e){
      if(this.top == undefined){
        return
      }

      this.top(e)
    },
    prevBottom(e){
      if(this.bottom == undefined){
        return
      }

      this.bottom(e)
    },
    scroll(e){
      if(e.srcElement.scrollTop == 0){
        this.prevTop(e)
        return
      }else if((e.srcElement.clientHeight + e.srcElement.scrollTop) < e.srcElement.scrollHeight){
        return
      }

      this.prevBottom(e)
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
