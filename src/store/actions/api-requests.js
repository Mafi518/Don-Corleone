import axios from "axios";

export default {
  GET_DONUTS_FROM_API({ commit }) {
    return axios(
      "https://corleone-db-default-rtdb.firebaseio.com/donuts.json",
      {
        method: "GET",
      }
    )
      .then((donuts) => {
        commit("SET_DONUTS_TO_STATE", donuts.data);
        return donuts;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
