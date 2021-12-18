import { createStore } from "vuex";
import API from "@/services/API";

export default createStore({
  state: {
    slectedCity: {},
    cityRoutes: [],
    cityRoutesStops: [],
    cityStops: [],
    routeSequences: [],
    selectedRoute: {},
    selectedStop: {},
    timeOfArrival: [],
    isLoading: undefined,
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
    stops: (state) => {
      return state.cityStops.map((stop) => {
        return {
          ...stop,
          StationName: stop.StationName.Zh_tw,
        };
      });
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
        return stops;
      }
    },
  },
  mutations: {
    setCity(state, city) {
      state.selectedCity = city;
    },
    setRouteSequences(state, sequence) {
      state.routeSequences = sequence;
    },
    setSelectedRoute(state, route) {
      state.selectedRoute = route;
    },
    setSelectedStop(state, stop) {
      state.selectedStop = stop;
    },
    resetCityStop(state) {
      state.cityStops = [];
    },
    resetCityRoutes(state) {
      state.CityRoutes = [];
    },
    resetRouteSequence(state) {
      state.routeSequences = [];
    },
    resetSelectedStop(state) {
      state.selectedStop = {};
    },
    resetSelectedRoute(state) {
      state.selectedRoute = {};
    },
    changeLoadingStatus(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    async searchRoutes({ state, commit }) {
      commit("changeLoadingStatus", true);
      const city = state.selectedCity.City;
      const { data } = await API.getRoutesByCity(city);
      state.cityRoutes = data;
      commit("changeLoadingStatus", false);
    },
    async searchStations({ state, commit }) {
      commit("changeLoadingStatus", true);
      const city = state.selectedCity.City;
      const { data } = await API.getStationsByCity(city);
      state.cityStops = data;
      commit("changeLoadingStatus", false);
    },
    async getRouteSequence({ getters, commit }, route) {
      commit("changeLoadingStatus", true);
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getRouteByName(city, routeName);
      if (data.length > 2) {
        const exactRoute = data.filter(
          (datum) => datum.RouteName["Zh_tw"] === routeName
        );
        commit("setRouteSequences", exactRoute);
        commit("changeLoadingStatus", false);
      } else {
        commit("setRouteSequences", data);
        commit("changeLoadingStatus", false);
      }
    },
    async getTimeOfArrival({ state, getters, commit }, route) {
      commit("changeLoadingStatus", true);
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getTimeOfArrival(city, routeName);
      state.timeOfArrival = data;
      commit("changeLoadingStatus", false);
    },
    async getRoute({ getters, commit }, route) {
      commit("changeLoadingStatus", true);
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getRoute(city, routeName);
      commit("setSelectedRoute", data[0]);
      commit("changeLoadingStatus", false);
    },
  },
  modules: {},
});
