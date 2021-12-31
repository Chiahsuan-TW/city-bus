<template>
  <div @click="selectCity(city)" class="bus-city-card">
    <div>
      <img src="./../assets/images/bus.png" alt="bus icon" />
    </div>
    <p class="bus-city-name">{{ city.CityName }}</p>
  </div>
</template>

<script>
export default {
  name: "CityCard",
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectCity(city) {
      this.$store.commit("setCity", city);
    },
  },
};
</script>

<style lang="scss" scoped>
.bus-city-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 120px;
  height: 120px;
  background-color: color.$primary;
  border-radius: 26px;
  box-shadow: 4px 4px 2px color.$indigo;
}

.bus-city-card:hover {
  cursor: pointer;
}

.bus-city-name {
  color: #fff;
  font-size: 22px;
}
</style>
