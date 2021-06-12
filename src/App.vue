<template>
  <nav id="nav" class="menu">
    <div class="menu__social">
      <Icon name="navigation" class="menu__navigation first-level-icon"></Icon>
      <a href="" class="facebook-icon menu__network"
        ><Icon class="first-level-icon" name="facebook"></Icon
      ></a>
      <a href="" class="instagram-icon menu__network"
        ><Icon class="first-level-icon" name="instagram"></Icon
      ></a>
      <a href="" class="vk-icon menu__network"
        ><Icon class="first-level-icon" name="vk"></Icon
      ></a>
    </div>
    <div class="menu__info">
      <div class="menu__location">
        <Icon name="location" class="second-level-icon"></Icon>
        <span
          >Санкт-Петербург <br />
          Москва</span
        >
      </div>
      <div class="menu__phone">
        <Icon name="phone" class="second-level-icon"></Icon>
        <span
          >22 3333 333 9 <br />
          22 3333 333 9</span
        >
      </div>
      <Icon name="logo" class="logo second-level-icon"></Icon>
    </div>
  </nav>
  <router-view />
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "App",
  components: {
    Icon,
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/styles/normalize.scss";
body {
  max-height: 100vh;
  height: 100vh;
}
#nav {
  z-index: 10;
}
.menu {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__social {
    display: flex;
    justify-content: space-between;
    max-width: 50vw;
    width: 100%;
    padding: 0 40px;
  }
  &__network {
    margin: 0 20px;
  }
  &__navigation {
    min-width: 48px;
    min-height: 48px;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    max-width: 50vw;
    width: 100%;
    padding: 0 40px;
  }
  &__location,
  &__phone {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
}
</style>
