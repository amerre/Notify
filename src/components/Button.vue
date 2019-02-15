<template>
  <div class="buttonWrapper">
    <div class="inputs">
      <label>Text to display</label>
      <input type="text" v-model="$store.state.text">
      <label>Timeout (in seconds)</label>
      <input type="number" min="1" max="20" v-model="$store.state.timeout">
    </div>
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
      // Retrait de la popup apres 2 secondes (la plus ancienne)
      setTimeout(function() {
        vm.$store.state.popups.shift();
        // Convertir la valeur timeout en millisecondes
      }, vm.$store.state.timeout + "000");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.buttonWrapper {
  // Le bouton central
  button {
    cursor: pointer;
    font-size: 25px;
    padding: 10px 60px;
    outline: none;
    background-color: $yellow;
    border: none;
    border-radius: 5px;
    box-shadow: 0 9px $grey;
    &:active {
      background-color: darken($yellow, 5%);
      box-shadow: 0 5px darken($grey, 15%);
      transform: translateY(4px);
    }
  }
  // Les inputs et les labels
  .inputs {
    display: grid;
    grid-gap: 10px;
    margin-bottom: 10px;
  }
}

// Responsive
@media (max-width: 600px) {
  #app {
    align-items: flex-end !important;
    button {
      margin-bottom: 30px;
    }
  }
}
</style>

