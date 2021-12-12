import { createStore } from "vuex";
import API from "@/services/API";

export default createStore({
  state: {
    slectedCity: {},
    cityRoutes: [],
    cityStops: [],
    // isLoading: true,
  },
  getters: {
    cityName: (state) => {
      if (!state.selectedCity) {
        return;
      } else {
        return state.selectedCity.CityName;
      }
    },
    stopNames: (state) => {
      return state.cityStops.map((stop) => stop.StopName.Zh_tw);
    },
  },
  mutations: {
    setCity(state, city) {
      state.selectedCity = city;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    async searchRoutes({ state }) {
      const city = state.selectedCity.City;
      const { data } = await API.getRoutesByCity(city);
      console.log("routes", data);
      state.cityRoutes = data;
      // commit("toggleLoading");
    },
    async searchStops({ state }) {
      const city = state.selectedCity.City;
      const { data } = await API.getStopsByCity(city);
      console.log("stop", data);
      state.cityStops = data;
      // commit("toggleLoading");
    },
  },
  modules: {},
});
