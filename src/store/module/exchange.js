import ExchangeAPI from '@/exchange_api'

const state = {
  price : {}
}

const mutations = {
  setPrice(state,payload){
    state.price = payload
  },
}

const actions = {
  async loadPrice(context,payload){
    let data

    if(window.$i18n.locale != 'ko')
      data = {
        currency: 'USD'
      }
    else
      data = {
        currency: 'KRW'
      }

    let result = await ExchangeAPI.getPrice({
      data : data
    })

    context.commit("setPrice",result)
  },
}

const getters = {
  getPrice(state){
    return state.price
  },
}


const exchange = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default exchange
