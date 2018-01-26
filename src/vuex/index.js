import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoItems: [
      {name: 'hoge'},
      {name: 'fuga'},
      {name: 'piyo'}
    ]
  },
  mutations: {
    add: function (state, text) {
      state.todoItems.push({name: text})
    },
    remove: function (state, index) {
      state.todoItems.splice(index, 1)
    }
  }
})

export default store
