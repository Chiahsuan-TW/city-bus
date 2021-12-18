<template>
  <div class="search">
    <header>
      <Navbar />
    </header>
    <main>
      <SearchBox
        :cityName="cityName"
        :keyword="keyword"
        @keyin="receiveKeyword"
      />
      <section class="list">
        <Spinner v-if="isLoading" />
        <component :is="currentComponent" :keyword="keyword"></component>
      </section>
      <section v-show="currentComponent === routeList" class="keyboard">
        <div class="keyboard-route">
          <button
            @click="keyword += route"
            v-for="(route, index) in routeCodes"
            :key="index"
            type="button"
          >
            {{ route }}
          </button>
        </div>
        <div class="keyboard-dial">
          <button
            @click="keyword += digit"
            v-for="(digit, index) in dialDigits"
            :key="index"
            type="button"
          >
            {{ digit }}
          </button>
          <button @click="removeLast" type="button">清除</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Spinner from "@/components/Spinner";
// import RouteList from "@/components/RouteList";
// import StopList from "@/components/StopList";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import { markRaw } from "vue";

export default {
  name: "Search",
  components: {
    Navbar,
    SearchBox,
    Spinner,
    // RouteList,
    // StopList,
  },
  data() {
    return {
      dialDigits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      routeCodes: ["紅", "藍", "綠", "棕", "橘", "小", "其他", "幹線"],
      currentComponent: null,
      keyword: "",
      routeList: markRaw(
        defineAsyncComponent(() => import("@/components/RouteList"))
      ),
      stopList: markRaw(
        defineAsyncComponent(() => import("@/components/StopList"))
      ),
    };
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters(["cityName", "stopNames"]),
  },
  methods: {
    receiveKeyword(keyword) {
      this.keyword = keyword;
    },
    removeLast() {
      if (!this.keyword) return;
      this.keyword = this.keyword.slice(0, -1);
    },
  },
  created() {
    const { type } = this.$route.query;
    if (type === "route") {
      this.currentComponent = this.routeList;
    }
    if (type === "stop") {
      this.currentComponent = this.stopList;
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  background: linear-gradient(143.04deg, #70ebb0 13.42%, #40caca 84.3%);
}

.keyboard {
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(38, 147, 133, 0.5);
  box-shadow: 0px -2px 6px rgba(23, 96, 87, 0.1);
  backdrop-filter: blur(30px);

  border-radius: 20px 20px 0px 0px;

  &-route {
    flex: 2;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }

  &-route button {
    padding: 10px;
    border-radius: 10px;
    background: #f2f3f1;
  }

  &-dial {
    flex: 3;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(6, 1fr);
  }

  &-dial button {
    padding: 10px;
    border-radius: 10px;
    background: #f2f3f1;
    grid-column: span 2;
  }

  &-dial button:nth-child(10) {
    grid-column: span 3;
  }

  &-dial button:last-child {
    grid-column: span 3;
  }
}

/* list item */
.list {
  height: 85vh;
  overflow: scroll;
  padding: 30px 20px 0 20px;
}
</style>
