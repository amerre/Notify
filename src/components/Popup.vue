<template>
  <div class="popups">
    <transition-group name="slide">
      <div class="popup" v-for="(popup, index) in this.$store.state.popups" :key="index + 1">Hey</div>
    </transition-group>
  </div>
</template>

<style lang="scss">
// Le wrapper ou sont toutes les popups
.popups {
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 0;
  right: 0;
  // Une seule popup
  .popup {
    border: 2px solid #ffc600;
    width: 200px;
    height: 60px;
    font-size: 25px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffc600;
  }
}

// Animation du <transition-group>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.slide-leave {
  opacity: 1;
}

// Responsive
@media (max-width: 700px) {
  .popups {
    margin-bottom: 50px;
  }
}
</style>