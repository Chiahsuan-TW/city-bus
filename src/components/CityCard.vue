<template>
  <div class="bus-city-card">
    <div><img src="./../assets/images/bus.png" alt="bus icon" /></div>
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
}

.bus-city-name {
  color: #fff;
  font-size: 22px;
}
</style>
