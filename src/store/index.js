import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    street: [
      {
        id: 1,
        title: 'Street',

      },
      {
        id: 2,
        title: 'pooriavakili'
      },
      {
        id: 3,
        title: 'tehranpars'
      },
      {
        id: 4,
        title: 'pooriavakili09'
      },
      {
        id: 5,
        title: '09376720694'
      }
    ],
    delivery: [
      {
        id: 1,
        title: 'Delivery'
      },
      {
        id: 2,
        title: 'Cost on Delivery'
      },
      {
        id: 3,
        title: 'Payment methods'
      },
      {
        id: 4,
        title: 'Delivery astus'
      },
      {
        id: 5,
        title: 'Returns'
      }
    ],
    about: [
      {
        id: 1,
        title: "About"
      },
      {
        id: 2,
        title: 'how it work'
      },
      {
        id: 3,
        title: 'Our params'
      },
      {
        id: 4,
        title: 'Promotions'
      },
      {
        id: 5,
        title: 'Refer A friend'
      }
    ],
    category: [
      {
        title: 'car',
        img: 'audi.jpg'
      },
      {
        title: 'charkh',
        img: 'charkh.jpg'
      },
      {
        title: 'roghancar',
        img: 'roghancar.jpg'
      },
      {
        title: 'aiene',
        img: 'aiene.jpg'
      },
      {
        title: 'cheragh',
        img: 'cheragh.jpg'
      },
      {
        title: 'zabet',
        img: 'zabet.jpg'
      }
    ],
    products: [
      {
        title: 'mustang',
        img: 'mustang.jpg',
        price: 100
      },
      {
        title: 'benz',
        img: 'benz.jpg',
        price: 200
      },
      {
        title: 'tondar',
        img: 'tondar.jpg',
        price: 300
      },
      {
        title: 'autoini',
        img: 'Autoini.jpg',
        price: 400
      },
      {
        title: 'lamborgini',
        img: 'lamborgini.jpg',
        price: 500
      },
      {
        title: 'divistoseven',
        img: 'divistoseven.jpg',
        price: 600
      }
    ],
    cart: []
  },
  getters: {
    products: state => state.products
  },
  mutations: {
    productsAdd(state, products) {
      state.products = products
    },
    addToCart(state, item) {
      state.cart.push({ ...item, qty: 1 })
    }
  },
  actions: {
    productsAdd({ commit }) {
      commit('productsAdd')
    },
    addToCart({ commit }, item) {
      commit('addToCart', item)
    }
  },
  modules: {
  }
})
