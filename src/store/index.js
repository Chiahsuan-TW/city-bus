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
  },
  actions: {
    async searchRoutes({ state }) {
      const city = state.selectedCity.City;
      const { data } = await API.getRoutesByCity(city);
      state.cityRoutes = data;
    },
    async searchStations({ state }) {
      const city = state.selectedCity.City;
      const { data } = await API.getStationsByCity(city);
      state.cityStops = data;
      // console.log("FFFFF-----Station", data);
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
        commit("setRouteSequences", data);
      }
    },
    async getTimeOfArrival({ state, getters }, route) {
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getTimeOfArrival(city, routeName);
      state.timeOfArrival = data;
    },
    async getRoute({ getters, commit }, route) {
      const city = getters.cityNameEn;
      const routeName = route.RouteName["Zh_tw"];
      const { data } = await API.getRoute(city, routeName);
      commit("setSelectedRoute", data[0]);
    },
    //取得含有停靠站資訊的所有路線
    // async getRoutesStops({ state, getters, commit }, stop) {
    //   const city = getters.cityNameEn;
    //   const { data } = await API.getRoutesStops(city);
    //   state.cityRoutesStops = data;
    //   console.log("含有停靠站資訊的所有路線", data);
    //   commit("setSelectedStop", stop);
    // },
  },
  modules: {},
});
