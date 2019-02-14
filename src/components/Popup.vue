<template>
  <div class="wrapper">
    <div id="popup" v-for="(popup, index) in this.$store.state.popup" :key="index">{{ popup }}</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 0;
  right: 0;
  #popup {
    border: 2px solid red;
    width: 50px;
    height: 50px;
  }
}
</style>
