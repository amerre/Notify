<template>
  <div>
    <div id="popup" v-for="(popup, index) in this.$store.state.popup" :key="index">{{ popup }}</div>
  </div>
</template>

<style lang="scss" scoped>
#popup {
  border: 2px solid red;
  width: 50px;
  height: 50px;
  margin: 30px;
}
</style>
