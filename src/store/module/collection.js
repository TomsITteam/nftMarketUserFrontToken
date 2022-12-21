import API from "@/api";
import Wallet from "@/wallet";

const state = {
  myCollection : null,
}

const mutations = {
  setMyCollection(state,payload){
    state.myCollection = payload
  },
}

const actions = {
  async loadMyCollection(context,walletAddress){
    walletAddress = walletAddress.toLowerCase()

    let result = await API.getCollection({
      data : {
        address : walletAddress
      }
    })

    context.commit("setMyCollection",result)
  },
}


const getters = {
  getMyCollection(state){
    return state.myCollection
  },
}

const collection = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default collection
