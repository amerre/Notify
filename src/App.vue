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
// Layout
body {
  height: 100vh;
  overflow: hidden;
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
