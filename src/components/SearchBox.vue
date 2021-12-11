<template>
  <div class="search">
    <div class="search-group">
      <span class="return"></span>
      <span class="search-city">台南</span>
    </div>
    <label for="">
      <input type="text" placeholder="搜尋公車號" />
    </label>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* search */
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;

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