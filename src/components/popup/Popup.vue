<template>
  <article class="popup">
    <img src="@/assets/images/don-hello.png" alt="" />
    <p>Пышные пончики с сладкой глазурью со вкусом клубники и шоколада</p>
    <button class="popup__button popup__next">Далее</button>
  </article>
</template>

<script>
export default {
  methods: {},
  components: {},
  mounted() {},
};
</script>

<style lang="scss">
.popup {
  width: 50vw;
  height: 100vh;
  background-color: $accent;
  &__image {
    max-width: 200px;
    max-height: 200px;
  }
  &__content {
  }
  &__next {
  }
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  background-color: $accent;
  z-index: 14;
  background-color: $white;
  p {
    line-height: 200%;
    font-size: 24px;
    max-width: 552px;
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
  }
  button {
    max-width: 337px;
    width: 100%;
    padding: 15px 0;
    background-color: $brown;
    text-align: center;
    font-size: 20px;
    color: $white;
    border-radius: 30px;
  }
}
</style>
