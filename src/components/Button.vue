<template>
  <button @click="showPopup++">Notify me - {{ showPopup }}</button>
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