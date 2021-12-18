import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";
export default createStore({
  state: {
    token: null,
    user: null,
    driver: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeDriver(state, driver) {
      state.driver = driver;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getDriver({ commit }) {
      axios.get("/drivers").then((aResponse) => {
        console.log("response in /drivers", aResponse);
        commit("storeDriver", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/customers/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in loggin out");
        });
    },
  },
});
