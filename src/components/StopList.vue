<template>
  <div v-for="(stopName, index) in filter" :key="index" class="list-item">
    <h5 class="list-title">{{ stopName }}</h5>
    <div class="list-detail">
      <span>{{ cityName }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "stopList",
  props: {
    keyword: {
      type: String,
    },
  },
  computed: {
    ...mapState(["cityRoutes"]),
    ...mapGetters(["cityName", "stopNames"]),
    filter() {
      return this.stopNames.filter((stopName) =>
        stopName.includes(this.keyword)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
