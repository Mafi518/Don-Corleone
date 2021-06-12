<template>
  <div class="popup">
    <i class="material-icons">close</i>
    <img src="@/assets/images/don-hello.png" alt="" class="popup__image" />
    <p class="popup__content">
      <slot></slot>
    </p>
    <button class="popup__next">Далее</button>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {

  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 11;
  display: none;
  &__image {
    max-width: 200px;
    max-height: 200px;
  }
  &__content {

  }
  &__next {

  }
}
</style>