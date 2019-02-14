import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popup: 0
  },
  mutations: {
    POPUP_COMMIT(state, payload) {
      state.popup = payload;
      setTimeout(function() {
        state.popup -= 1;
      }, 1000);
    }
  },
  actions: {}
});
