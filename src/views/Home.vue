<template>
  <div class="home">
    <header>
      <Navbar />
    </header>
    <main>
      <h3>全台公車一次找</h3>
      <section class="bus">
        <div class="bus-title">
          <h4>找公車</h4>
          <router-link :to="{name: 'About'}">
            <img
              src="./../assets/images/arrow-right.png"
              alt="arrow to right"
            />
          </router-link>
        </div>
        <div class="bus-city">
          <CityCard v-for="city in cityList" :key="city.CityID" :city="city" />
        </div>
      </section>
      <section>
        <div class="route">
          <div class="route-title">
            <h4>找站牌</h4>
            <div>
              <img
                src="./../assets/images/arrow-right.png"
                alt="arrow to right"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import CityCard from "@/components/CityCard";
import cityList from "./../../public/cities.json";

export default {
  name: "Home",
  components: {
    Navbar,
    CityCard,
  },
  data() {
    return {
      cityList,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  border-radius: 26px;
}
main {
  background: linear-gradient(143.04deg, #70ebb0 13.42%, #40caca 84.3%);

  h3 {
    padding: 25px 30px;
    font-size: 28px;
    color: #fff;
  }
}

.bus {
  background-color: #fff;
  border-radius: 0px 40px 0px 0px;
  padding: 24px 30px 35px;

  &-title {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 20px;
      letter-spacing: 0.1em;
      color: color.$secondary;
    }
  }

  &-city {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 35px;

    justify-items: center;
    margin-top: 35px;
    height: 50vh;
    overflow: scroll;
  }
}

section {
  background-color: #fff;

  .route {
    padding: 35px 30px;
    background-color: color.$light-primary;
    border-radius: 0px 40px 0px 0px;

    &-title {
      display: flex;
      justify-content: space-between;

      h4 {
        font-size: 20px;
        letter-spacing: 0.1em;
        color: color.$secondary;
      }
    }
  }
}
</style>
