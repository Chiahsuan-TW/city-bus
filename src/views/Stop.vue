<template>
  <div class="stop">
    <header>
      <Navbar />
    </header>
    <main>
      <section class="basic-info">
        <div class="wrapper">
          <div class="city-route">
            <div class="return" @click="this.$router.go(-1)">
              <img
                src="./../assets/images/arrow-left.png"
                alt="arrow pointing to the left"
              />
            </div>
            <span>{{ cityName }}｜ {{ selectedStop.StationName }}</span>
          </div>
        </div>
        <div class="wrapper">
          <h2>{{ selectedStop.StationName }}</h2>
          <button class="router-detail">分享頁面</button>
        </div>
      </section>
      <section>
        <!--copy routelist's html-->
        <router-link :to="{ name: 'Sequence' }">
          <div
            @click="clickRoute(route)"
            v-for="route in routeChoices"
            :key="route.RouteUID"
            class="list-item"
          >
            <h5 class="list-title">{{ route.RouteName["Zh_tw"] }}</h5>
            <div class="list-detail">
              <!-- <span>{{ getDepartueDestination(route) }}</span> -->
              <!-- <span>{{ getFirstLastTrip(route) }}</span> -->
            </div>
          </div>
        </router-link>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
// import RouteList from "@/components/RouteList";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Stop",
  components: {
    Navbar,
    // RouteList,
  },
  computed: {
    ...mapState(["selectedStop", "cityStops"]),
    ...mapGetters(["cityName"]),
    routeChoices() {
      return this.selectedStop.Stops;
    },
  },
  methods: {
    routes() {
      this.selectedStop.Stops;
    },
    clickRoute(route) {
      this.$store.dispatch("getRouteSequence", route);
      this.$store.dispatch("getTimeOfArrival", route);
      this.$store.commit("setSelectedRoute", route);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient(143.04deg, #70ebb0 13.42%, #40caca 84.3%);
  height: 92vh;
}

.basic-info {
  padding: 10px 20px 20px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .city-route {
    display: flex;
    align-items: center;
    font-size: 0;
  }

  .return:hover {
    cursor: pointer;
  }

  span {
    font-size: 12px;
    color: #fff;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: color.$secondary;

    span {
      color: inherit;
      font-size: 14px;
      font-weight: normal;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 40px;
  }
}

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
