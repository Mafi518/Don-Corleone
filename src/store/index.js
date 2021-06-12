import { createStore } from "vuex";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import apiRequests from "./actions/api-requests";
import commonActions from "./actions/actions";

const actions = { ...commonActions, ...apiRequests };

export default createStore({
  state: {
    donuts: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
  modules: {},
});
