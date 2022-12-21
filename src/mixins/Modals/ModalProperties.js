export default {
  data() {
    return {
      tables: [],
      inputText1 : [],
      inputText2 : [],
    }
  },
  watch: {
    inputText1(val) {
      this.inputText1 = val
    },
    inputText2(val) {
      this.inputText2 = val
    }
  },
  methods: {
    show() {

    },
    arrayFil(num = null) {
      if (num === null) {
        for (let i = 0; i < this.tables.length; i++) {
          if (this.inputText1[i] === undefined || this.inputText2[i] === undefined || this.inputText1[i] === '' || this.inputText2[i] === '') {
            this.deleteArray(i)
            i--
          }
        }
      } else if (num || num === 0) {
        this.deleteArray(num)
      }

      if(this.tables.length === 0)
        this.tables.push('a')
    },
    deleteArray(num){
      this.inputText1.splice(num, 1)
      this.inputText2.splice(num, 1)
      this.tables.splice(num, 1)
    },
    saveFilter() {
      this.arrayFil()
      this.$emit('saveProperties', this.inputText1, this.inputText2)
      this.$bvModal.hide('bv-modal-properties')
    },
    addTables() {
      this.tables.push('a')
    },
    removeList(num) {
      if(this.tables.length === 1) {
        this.inputText1 = []
        this.inputText2 = []
        return
      }
      this.arrayFil(num)
    },
    hide() {
      this.arrayFil()
      this.$emit('saveProperties', this.inputText1, this.inputText2)
    }
  },
  created() {
    if(this.tables.length === 0)
      this.tables.push('a')
  }
}
