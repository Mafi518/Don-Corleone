<template>
  <section class="home" id="home">
    <div class="home__left">
      <fullcard></fullcard>
    </div>
    <div class="home__catalog">
      <div class="fix-block"></div>
      <div class="home__wrapper">
        <catalog></catalog>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Fullcard from "@/components/Fullcard";
import Catalog from "@/components/Catalog";

export default {
  name: "Home",
  components: {
    Fullcard,
    Catalog,
  },
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
    padding: 0 40px;
    display: flex;
    align-items: center;
  }
  &__catalog {
    padding: 0 40px;
    overflow: auto;
  }
  &__left,
  &__catalog {
    width: 50vw;
    height: 100vh;
  }
}
.fix-block {
  width: 100%;
  height: 134px;
  background-color: transparent;
  margin-bottom: 30px;
}
</style>
