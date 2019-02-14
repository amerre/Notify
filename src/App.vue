<template>
  <div id="app">
    <Button/>
    <Popup/>
  </div>
</template>

<script>
import Button from "./components/Button";
import Popup from "./components/Popup";

export default {
  components: {
    Button,
    Popup
  }
};
</script>

<style lang="scss">
@import "./assets/main.scss";

#app {
  margin: 20px;
}
</style>
