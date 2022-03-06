import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 1000000000,
    products: [],
    total: 0,
    purchased: [],
    shopping: false,
  },
  mutations: {
    calculateTotal(state, payload) {
      state.shopping = true
      for (let i = 0; i <= state.products.length; i++) {
        state.purchased.push('')
        if(i == payload) {
          state.money -= state.products[i].price
          state.total += state.products[i].price
          if(!state.purchased[i]) {
            state.purchased.splice(i, 1, {name: state.products[i].name, purchasedPrice: state.products[i].price, purchasedQuantity: 1})
          } else {
            state.purchased[i].purchasedPrice += state.products[i].price
            state.purchased[i].purchasedQuantity += 1
          }
        }
      }
    },
    storeProductsToState(state, payload) {
      state.products = payload
    },
    storeMoneyToState(state, payload) {
      state.money = payload
    }
  },
  actions: {
    buyProduct(context, data) {
      context.commit('calculateTotal', data)
    },
    storeProducts(context, data) {
      context.commit('storeProductsToState', data)
    },
    storeMoney(context, data) {
      context.commit('storeMoneyToState', data)
    }
  },
  modules: {
  }
})
