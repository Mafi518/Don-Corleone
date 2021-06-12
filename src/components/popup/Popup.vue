<template>
  <article class="description popup">
    <slot></slot>
  </article>
</template>

<script>
export default {
  methods: {},
  components: {},
  mounted() {},
};
</script>

<style lang="scss" >
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
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 40px;
  background-color: $accent;
}
</style>