<template>
  <nav>
    <router-link :to="{ name: 'Home' }">
      <h1 class="logo">
        <img src="./../assets/images/logo.png" alt="wait for bus logo" />
      </h1>
    </router-link>
    <h2>全台公車整合資訊網</h2>
  </nav>
  
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
}

h2 {
  font-size: 12px;
}

.logo {
  font-size: 0;
}


</style>
