<template>
  <div class="wrapper">
    <button @click="addPopup()">Notify me</button>
  </div>
</template>

<script>
export default {
  methods: {
    addPopup() {
      let vm = this;
      // Ajout de la nouvelle popup
      this.$store.state.popups.push(true);
      // Retrait de la popup apres 2 secondes
      setTimeout(function() {
        vm.$store.state.popups.shift();
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
// Le bouton central
button {
  cursor: pointer;
  font-size: 25px;
  padding: 10px 60px;
  outline: none;
  background-color: #ffc600;
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px grey;
  &:active {
    background-color: darken(#ffc600, 5%);
    box-shadow: 0 5px darken(grey, 15%);
    transform: translateY(4px);
  }
}

// Responsive
@media (max-width: 600px) {
  #app {
    align-items: flex-end !important;
    button {
      width: 100vh;
    }
  }
}
</style>

