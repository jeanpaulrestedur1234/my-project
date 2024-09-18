import { createStore } from 'vuex';

const store = createStore({
  state: {
    contador: 0,
    quotes:[],
    quote:'',
 
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    },

    ADD_QUOTE(state, quote) {
        state.quotes.push(quote);
      },
      DELETE_QUOTE(state, index) {
        state.quotes.splice(index, 1);
      }
    
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar');
    },
    decrementar({ commit }) {
      commit('decrementar');
    },

    addQuote({ commit }, quote) {
        commit('ADD_QUOTE', quote);
      },
      deleteQuote({ commit }, index) {
        commit('DELETE_QUOTE', index);
      }
  },
  getters: {
    contador(state) {
      return state.contador;
    },
    allQuotes: (state) => state.quotes
  }
});

export default store;
