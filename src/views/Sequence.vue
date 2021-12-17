<template>
  <div class="sequence">
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
            <span
              >{{ cityName }}｜ {{ selectedRoute.RouteName.Zh_tw }} 公車</span
            >
          </div>
          <!-- <span>XX秒後更新</span> -->
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
            v-for="(stop, index) in depatureDataset"
            :key="index"
            class="route-sequence-list-item"
          >
            <span
              :class="[
                'status',
                {
                  approaching: getWaitingMinute(stop.ETA) === 0,
                  soon:
                    getWaitingMinute(stop.ETA) < 2 &&
                    getWaitingMinute(stop.ETA) > 0,
                  waiting:
                    stop.StopStatus === 0 && getWaitingMinute(stop.ETA) >= 2,
                  'out-of-service': stop.StopStatus !== 0,
                },
              ]"
            >
              {{ getCurrentStopStatus(stop) }}</span
            >
            <span class="stop">{{ stop.StopName["Zh_tw"] }}</span>
          </div>
          <div
            v-show="currentTab === 'return'"
            v-for="(stop, index) in returnDataset"
            :key="index"
            class="route-sequence-list-item"
          >
            <span
              :class="[
                'status',
                {
                  approaching: getWaitingMinute(stop.ETA) === 0,
                  soon:
                    getWaitingMinute(stop.ETA) < 2 &&
                    getWaitingMinute(stop.ETA) > 0,
                  waiting:
                    stop.StopStatus === 0 && getWaitingMinute(stop.ETA) >= 2,
                  'out-of-service': stop.StopStatus !== 0,
                },
              ]"
              >{{ getCurrentStopStatus(stop) }}</span
            >
            <span class="stop">{{ stop.StopName["Zh_tw"] }}</span>
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
    ...mapState(["selectedRoute", "timeOfArrival"]),
    ...mapGetters([
      "departureRouteSequence",
      "returnRouteSequence",
      "cityName",
    ]),
    depatureDataset() {
      let organized = this.departureRouteSequence.map((stop) => {
        const matching = this.timeOfArrival.filter(
          (item) => stop.StopUID === item.StopUID
        )[0];
        // console.log("matching--------------", matching);
        return {
          ...stop,
          StopStatus: matching.StopStatus,
          ETA: matching.EstimateTime,
          // ...matching,
        };
      });

      return organized;
    },
    returnDataset() {
      let organized = this.returnRouteSequence.map((stop) => {
        const matching = this.timeOfArrival.filter(
          (item) => stop.StopUID === item.StopUID
        )[0];

        return {
          ...stop,
          StopStatus: matching.StopStatus,
          ETA: matching.EstimateTime,
          // ...matching,
        };
      });

      return organized;
    },
  },
  methods: {
    getWaitingMinute(time) {
      return Math.floor(time / 60);
    },
    getWaitingNotice(minute) {
      if (minute === 0) {
        return "進站中";
      } else if (minute > 0 && minute < 2) {
        return "即將進站";
      } else {
        return `${minute}分鐘`;
      }
    },
    busStatus(code) {
      const status = {
        1: "尚未發車",
        2: "交管不停靠",
        3: "末班車已過",
        4: "今日未發車",
      };
      return status[code];
    },
    getCurrentStopStatus(stop) {
      if (stop.StopStatus === 0) {
        const watingMinute = this.getWaitingMinute(stop.ETA);
        return this.getWaitingNotice(watingMinute);
      } else {
        return this.busStatus(stop.StopStatus);
      }
    },
    timer() {
      let timerSeconds = 60;
      const clearID = window.setInterval(() => {
        timerSeconds--;
      }, 1000);

      if (timerSeconds === 0) {
        clearInterval(clearID);
        return this.timer;
      }
    },
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

  .return:hover {
    cursor: pointer;
  }

  span {
    font-size: 14px;
    text-shadow: 1px 0px 2px color.$secondary;
    color: #fff;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: color.$secondary;

    span {
      margin-left: 5px;
      color: inherit;
      font-size: 18px;
      font-weight: normal;
      text-shadow: none;
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
    box-shadow: 0px 4px 10px rgba(19, 23, 20, 0.15);
  }

  .status {
    padding: 5px 15px 5px 9px;
    border-radius: 6px 30px 30px 6px;
  }

  .approaching {
    background-color: color.$orange;
  }

  .soon {
    background-color: color.$yellow;
  }

  .waiting {
    background-color: color.$skyblue;
  }
  .out-of-service {
    background-color: #aeb2b0;
  }
}
</style>
