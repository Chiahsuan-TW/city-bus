<template>
  <div class="search">
    <div class="search-group">
      <router-link :to="{ name: 'Home' }" class="return"></router-link>
      <span class="search-city">{{ cityName }}</span>
    </div>
    <label for="">
      <input
        type="text"
        @input="passKeyword($event)"
        placeholder="搜尋公車號"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
  methods: {
    passKeyword($event) {
      this.$emit("keyin", $event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
/* search */
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
  margin-top: -8px;
  background-color: #fff;
  border-radius: 0 0 26px 26px;

  &-group {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .return {
    width: 20px;
    height: 15px;
    color: gray;
    background: url("./../assets/images/arrow-left.png") no-repeat center center;
  }

  &-city {
    font-size: 16px;
    color: color.$indigo;
  }

  input {
    padding: 10px 20px;
    border: 1px solid color.$primary;
    border-radius: 12px;
  }
}
</style>
