<template>
  <router-link :to="{ name: 'Sequence' }">
    <div
      @click="clickRoute(route)"
      v-for="route in getMatch(keyword)"
      :key="route.RouteUID"
      class="list-item"
    >
      <h5 class="list-title">{{ route.RouteName["Zh_tw"] }}</h5>
      <div class="list-detail">
        <span>{{ getDepartueDestination(route) }}</span>
        <span>{{ getFirstLastTrip(route) }}</span>
      </div>
    </div>
  </router-link>
  <!-- <pre>{{ cityRoutes }}</pre> -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RouteList",
  props: {
    keyword: {
      type: String,
    },
  },
  computed: {
    ...mapState(["cityRoutes"]),
  },
  methods: {
    getDepartueDestination(route) {
      const departure = route.DepartureStopNameZh;
      const destination = route.DestinationStopNameZh;
      return `${departure} - ${destination}`;
    },
    getFirstLastTrip(route) {
      if (!route.SubRoutes[0].FirstBusTime) {
        return "未提供起迄時間";
      } else {
        const first = route.SubRoutes[0].FirstBusTime;
        const last = route.SubRoutes[0].LastBusTime;
        return `${first} - ${last}`;
      }
    },
    getMatch(keyword) {
      const results = this.cityRoutes.filter((route) =>
        route.RouteName["Zh_tw"].includes(keyword)
      );
      return results;
    },
    clickRoute(route) {
      this.$store.commit("resetRouteSequence");
      this.$store.dispatch("getRouteSequence", route);
      this.$store.dispatch("getTimeOfArrival", route);
      this.$store.commit("setSelectedRoute", route);
    },
  },
  watch: {
    keyword: function (newValue) {
      console.log(newValue);
      this.getMatch(newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &-item {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    padding: 11px 15px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 14px;
    box-shadow: 0px 4px 10px rgba(19, 23, 20, 0.15);
  }

  &-item:hover {
    cursor: pointer;
    box-shadow: 2px 8px 15px rgba(19, 23, 20, 0.25);
  }

  &-title {
    font-size: 23px;
    letter-spacing: 0.1em;
    color: color.$indigo;
  }

  &-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #8f9491;

    span:first-child {
      font-size: 16px;
    }

    span:last-child {
      font-size: 12px;
    }
  }
}
</style>
