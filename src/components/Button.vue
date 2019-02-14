<template>
  <div class="wrapper">
    <button @click="showPopup++">Notify me - {{ showPopup }}</button>
  </div>
</template>

<script>
export default {
  computed: {
    showPopup: {
      get() {
        return this.$store.state.popup;
      },
      set(value) {
        this.$store.commit("POPUP_COMMIT", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  button {
    font-size: 20px;
    color: red;
  }
}
</style>