<template>
  <section class="home" id="home">
    <div class="home__left">
      <div class="home__plate">
        <div class="home__plate-1"></div>
        <div class="home__plate-2"></div>
        <div class="home__product">
          <img src="@/assets/images/set-1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="home__right">
      <input
        type="color"
        name="colorInp"
        ref="firstLevelIconColor"
        value="#c4c4c4"
        v-on:input="setFirstIconLevelColor()"
        id="color"
      />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  computed: {},
  mounted() {},
  methods: {
    setFirstIconLevelColor() {
      let fli = document.querySelectorAll(".first-level-icon path");
      fli.forEach((element) => {
        element.setAttribute(
          "style",
          `fill: ${this.$refs.firstLevelIconColor.value}`
        );
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  &__left {
    background-color: $accent;
    max-width: 33vw;
    width: 100%;
    max-height: 100vh;
    min-height: 100vh;
    position: relative;
  }
  &__right {
    max-width: 47vw;
    width: 100%;
    max-height: 100vh;
    min-height: 100vh;
  }
  &__plate {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__plate-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $accent;
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.09);
    z-index: -1;
  }
  &__plate-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $accent;
    width: 48vh;
    height: 48vh;
    border-radius: 50%;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25);
    z-index: -1;
  }
  &__product {
    max-width: 430px;
  }
}
</style>
