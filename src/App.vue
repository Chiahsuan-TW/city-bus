<template>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: RGBA(3, 128, 128, 0.5);
}

#app {
  max-width: 425px;
  margin: 0 auto;

  @include breakpoints.tablet {
    max-width: 768px;
  }

  @include breakpoints.desktop {
    max-width: 992px;
  }
}
</style>
