<template>
  <nav id="nav" class="menu">
    <div class="menu__social">
      <button class="menu__navigation">
        <Icon name="navigation" class="first-level-icon"></Icon>
      </button>
      <ul class="menu__list">
        <li class="menu__item">
          <router-link to="/about">О компании</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/settings">Настройки</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/">Главная</router-link>
        </li>
      </ul>
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
  methods: {
    setChangedColors() {
      setTimeout(() => {
        console.log("dasd");
        let getBackgroundColor = localStorage.getItem(
          "changed-background-color"
        );
        let getFirstLevelIconColor = localStorage.getItem(
          "changed-first-level-icon-color"
        );
        let getSecondLevelIconColor = localStorage.getItem(
          "changed-second-level-icon-color"
        );
        let fli = document.querySelectorAll(".first-level-icon path");
        fli.forEach((element) => {
          element.setAttribute("style", `fill: ${getFirstLevelIconColor}`);
        });
        let sli = document.querySelectorAll(".second-level-icon path");
        sli.forEach((element) => {
          element.setAttribute("style", `fill: ${getSecondLevelIconColor}`);
        });
        let bg = document.querySelectorAll(".change-background");
        bg.forEach((element) => {
          element.setAttribute(
            "style",
            `background-color: ${getBackgroundColor}`
          );
        });
      }, 50);
    },
    createPopup(subtitle) {
      document.querySelector('#app').insertAdjacentHTML(
        "afterbegin",
        `
              <div class="popup">
                тут картинка
                <p>${subtitle}</p>
                <button class="popup__button popup__next">Далее</button>
              </div>
      `
      );
    },
    showHelloPopup() {
      this.createPopup(
        "Пышные пончики с сладкой глазурью со вкусом клубники и шоколада",
      );
      this.createPopup(
        "Пышные пончики с сладкой глазурью со вкусом клубники и "
      );
      this.createPopup("Пышные пончики с сладкой глазурью со вкусом");
      this.createPopup("Пышные пончики с сладкой глазурью");

      document.querySelectorAll(".popup__next").forEach((element) => {
        element.addEventListener("click", function () {
          this.parentNode.remove();
        });
      });
    },
  },
  mounted() {
    document
      .querySelector(".menu__navigation")
      .addEventListener("click", () => {
        let menuOverlay = document.querySelector(".menu__list");
        let childs = menuOverlay.childNodes;
        childs.forEach((element) => {
          console.log(element);
        });
      });
    document.addEventListener("DOMContentLoaded", this.setChangedColors);
    this.showHelloPopup();
  },
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
    z-index: 999;
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

  &__list {
    position: absolute;
    top: -20px;
    left: 0px;
    width: 100vw;
    height: 0vh;
    list-style: none;
    display: flex;
  }
  &__item {
    background-color: $brown;
    width: 33.333333%;
    transition: 0.5s;
    transform: scale(0);
    &:nth-child(1) {
      background-color: $menu-1;
    }
    &:nth-child(2) {
      background-color: $menu-2;
    }
    &:nth-child(3) {
      background-color: $menu-3;
    }
    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $brown;
    }
  }
}
.menu-overlay--active {
  height: 100vh;
}
.menu-overlay-item--active {
  transform: scale(1);
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
