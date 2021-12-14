import { createStore } from "vuex";
import API from "@/services/API";

export default createStore({
  state: {
    slectedCity: {},
    cityRoutes: [],
    cityStops: [],
    routeSequences: [],
    selectedRoute: {},
    timeOfArrival: [],
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
    cityNameEn: (state) => {
      if (!state.selectedCity) {
        return;
      } else {
        return state.selectedCity.City;
      }
    },
    stopNames: (state) => {
      return state.cityStops.map((stop) => stop.StopName.Zh_tw);
    },
    departureRouteSequence: (state) => {
      const directionCode = 0;
      const result = state.routeSequences.filter(
        (sequence) => sequence.Direction === directionCode
      );
      if (!result.length) {
        return [];
      } else {
        const stops = result[0]["Stops"];
        console.log("DEPART ROUTE", stops);
        return stops;
      }
    },
    returnRouteSequence: (state) => {
      const directionCode = 1;
      const result = state.routeSequences.filter(
        (sequence) => sequence.Direction === directionCode
      );
      if (!result.length) {
        return [];
      } else {
        const stops = result[0]["Stops"];
        console.log("RETURN ROUTE", stops);
        return stops;
      }
    },
  },
  mutations: {
    setCity(state, city) {
      state.selectedCity = city;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setRouteSequences(state, sequence) {
      state.routeSequences = sequence;
    },
    setSelectedRoute(state, route) {
      state.selectedRoute = route;
    },
  },
  actions: {
    async searchRoutes({ state }) {
      const city = state.selectedCity.City;
      const { data } = await API.getRoutesByCity(city);
      state.cityRoutes = data;
      // commit("toggleLoading");
    },
    async searchStops({ state }) {
      const city = state.selectedCity.City;
      const { data } = await API.getStopsByCity(city);
      state.cityStops = data;
      // commit("toggleLoading");
    },
    async getRouteSequence({ getters, commit }, route) {
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getRouteByName(city, routeName);
      if (data.length > 2) {
        const exactRoute = data.filter(
          (datum) => datum.RouteName["Zh_tw"] === routeName
        );
        commit("setRouteSequences", exactRoute);
      } else {
        // console.log("route", data);
        commit("setRouteSequences", data);
      }
    },
    async getTimeOfArrival({ state, getters }, route) {
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getTimeOfArrival(city, routeName);
      state.timeOfArrival = data;
    },
  },
  modules: {},
});
