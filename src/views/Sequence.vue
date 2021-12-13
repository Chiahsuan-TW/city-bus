<template>
  <div class="sequence">
    <header>
      <Navbar />
    </header>
    <main>
      <section class="basic-info">
        <div class="wrapper">
          <div class="city-route">
            <div class="return">
              <img
                src="./../assets/images/arrow-left.png"
                alt="arrow pointing to the left"
              />
            </div>
            <span
              >{{ cityName }}｜ {{ selectedRoute.RouteName.Zh_tw }} 公車</span
            >
          </div>
          <span>XX秒後更新</span>
        </div>
        <div class="wrapper">
          <h2>
            {{ selectedRoute.RouteName.Zh_tw }} |
            <span>
              {{ selectedRoute.DestinationStopNameZh }} -
              {{ selectedRoute.DepartureStopNameZh }}</span
            >
          </h2>
          <button class="router-detail">...</button>
        </div>
      </section>
      <section class="route">
        <div class="route-tabs">
          <div @click="currentTab = 'departure'" class="route-tab">
            <img src="./../assets/images/bus-dark.png" alt="bus icon" />
            <span>往 {{ selectedRoute.DestinationStopNameZh }}</span>
          </div>
          <div @click="currentTab = 'return'" class="route-tab">
            <img src="./../assets/images/bus-dark.png" alt="bus icon" />
            <span> 往 {{ selectedRoute.DepartureStopNameZh }}</span>
          </div>
        </div>
        <div class="route-sequence-list">
          <div
            v-show="currentTab === 'departure'"
            v-for="(stop, index) in departureRouteSequence"
            :key="index"
            class="route-sequence-list-item"
          >
            <span class="status">尚未發車</span>
            <span class="stop">{{ stop.StopName["Zh_tw"] }}</span>
            <span>{{ stop.StopSequence }}</span>
          </div>
          <div
            v-show="currentTab === 'return'"
            v-for="(stop, index) in returnRouteSequence"
            :key="index"
            class="route-sequence-list-item"
          >
            <span class="status">尚未發車</span>
            <span class="stop">{{ stop.StopName["Zh_tw"] }}</span>
            <span>{{ stop.StopSequence }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Sequence",
  components: {
    Navbar,
  },
  data() {
    return {
      currentTab: "departure",
    };
  },
  computed: {
    ...mapState(["selectedRoute"]),
    ...mapGetters([
      "departureRouteSequence",
      "returnRouteSequence",
      "cityName",
    ]),
  },
};
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient(143.04deg, #70ebb0 13.42%, #40caca 84.3%);
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
    color: color.$primary;
    background-color: #fff;
    font-size: 28px;
    font-weight: 700;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
}

.route {
  &-tabs {
    display: flex;
  }

  &-tab {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 11px 0;
    cursor: pointer;
  }

  &-tab:first-child {
    background-color: color.$light-gray;
    border-radius: 20px 20px 0px 0px;
  }

  &-tab:last-child {
    background-color: #afece4;
    border-radius: 20px 20px 0px 0px;
  }

  &-sequence-list {
    background-color: color.$light-gray;
    height: 85vh;
    overflow: scroll;
    padding: 20px;
  }

  &-sequence-list-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    margin-top: 10px;
  }
}
</style>
