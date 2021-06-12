export default {
  INCREMENT_CART_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit("DECREMENT", index);
  },
  ADD_TO_CART({ commit }, donut) {
    commit("SET_CART", donut);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  ADD_FULL_INFO({ commit }, donut) {
    commit("SET_INFO", donut)
  }
};
