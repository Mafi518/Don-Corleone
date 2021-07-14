<template>
  <nav id="nav" class="menu">
    <div class="menu__social" ref="menuSocial">
      <button class="menu__navigation" @click="menuShow">
        <Icon name="navigation" class="first-level-icon"></Icon>
      </button>
      <ul class="menu__list">
        <li class="menu__item">
          <router-link to="/about">О компании</router-link>
        </li>
        <li class="menu__item">
          <router-link to="">Настройки</router-link>
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
    <div class="menu__info" ref="menuInfo"></div>
    <div class="menu__location">
      <Icon name="location" class="second-level-icon"></Icon>
      <span
        >Санкт-Петербург <br />
        Москва</span
      >
    </div>
    <a href="tel:+22 3333 333 9" class="menu__phone">
      <Icon name="phone" class="second-level-icon"></Icon>
      <span> 22 3333 333 9</span>
    </a>
    <Icon name="logo" class="logo second-level-icon"></Icon>
  </nav>
  <router-view class="router-view" />
</template>

<script>
import Icon from "@/components/Icon";
import gsap from "gsap";

export default {
  name: "App",
  components: {
    Icon,
  },
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    createPopup(subtitle) {
      document.querySelector("#app").insertAdjacentHTML(
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
        "Пышные пончики с сладкой глазурью со вкусом клубники и шоколада"
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
    menuShow() {
      if (this.isOpenMenu == false) {
        this.isOpenMenu = true;
        gsap.fromTo(".menu__list", 0, { height: "0vh" }, { height: "100vh" });
        gsap.to(".menu__item", {
          duration: 1,
          transform: "scale(1)",
          stagger: {
            from: "start",
            amount: 0.25,
          },
        });
      } else {
        this.menuHide();
      }
    },
    menuHide() {
      this.isOpenMenu = false;
      gsap.fromTo(
        ".menu__list",
        0.5,
        { height: "100vh", delay: 0 },
        { height: "0vh", delay: 0.5 }
      );
      gsap.fromTo(
        ".menu__item",
        0.5,
        { transform: "scale(1)" },
        { transform: "scale(0)" }
      );
    },
  },
  mounted() {
    document.title = "Don Corleone";
    document
      .querySelector(".menu__navigation")
      .addEventListener("click", () => {
        let menuOverlay = document.querySelector(".menu__list");
        let childs = menuOverlay.childNodes;
        childs.forEach((element) => {
          element;
        });
      });
    document.querySelectorAll(".menu__item").forEach((element) => {
      element.addEventListener("click", this.menuHide);
    });
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
a {
  color: $brown;
}
.menu {
  position: absolute;
  width: 100%;
  height: 104px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 50vw;
    width: 100%;
    height: 100%;
    padding: 0px 40px;
    background-color: $accent;
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
    padding: 5px 40px;
    background-color: $white;
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
    height: 102.2vh;
    transform: scale(0);
    z-index: 99;
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

.logo {
  min-width: 64px;
}

@media (max-width: 1680px) {
  .menu {
    &__info {
      width: 40vw;
    }
    &__social {
      max-width: 60vw;
    }
  }
}
@media (max-width: 1140px) {
  .logo {
    display: none;
  }
  .menu {
    &__info {
      padding: 0;
    }
  }
}
@media (max-width: 1000px) {
  .menu {
    &__info,
    &__social {
      background-color: transparent;
    }
    &__network {
      margin: 0;
    }
  }
}
@media (max-width: 768px) {
  .menu {
    width: 100vw;
    &__info {
      display: none;
    }
    &__social {
      max-width: 100vw;
    }
  }
}
@media (max-width: 425px) {
  .menu {
    height: 60px;
    &__list {
      flex-direction: column;
    }
    &__item {
      height: 33.3333vh;
      width: 100vw;
    }
    &__social {
      padding: 0 5px;
      svg {
        max-width: 36px;
      }
    }
  }
}
</style>
