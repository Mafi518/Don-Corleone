<template>
  <div class="settings change-background">
    <div class="settings__wrapper">
      <h1 class="settings__title">
        Когда каждый говорит о дизайне Мы даём волю чувствам
      </h1>
      <div class="settings__window">
        <div>
          <div class="settings__item">
            <h2 class="settings__item-title">Иконки 1 уровня</h2>
            <div class="settings__example">
              <Icon name="vk" class="first-level-icon"></Icon>
            </div>
            <input
              type="color"
              class="settings__input"
              name="first-level-color"
              ref="firstLevelIconColorChanger"
              id=""
              @input="setFirstIconLevelColor"
            />
          </div>
          <div class="settings__item">
            <h2 class="settings__item-title">Иконки 2 уровня</h2>
            <div class="settings__example">
              <Icon name="location" class="second-level-icon"></Icon>
            </div>
            <input
              type="color"
              class="settings__input"
              name="second-level-color"
              ref="secondLevelIconColorChanger"
              id=""
              @input="setSecondIconLevelColor"
            />
          </div>
          <div class="settings__item">
            <h2 class="settings__item-title">Задний фон</h2>
            <div
              class="settings__example settings__display change-background"
            ></div>
            <input
              type="color"
              class="settings__input"
              name="background-color"
              ref="backgroundColorChanger"
              id=""
              @input="setBackgroundColor"
            />
          </div>
        </div>
        <button class="settings__reset" @click="setDefaultPallete">
          Сбросить настройки
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  methods: {
    setFirstIconLevelColor() {
      let fli = document.querySelectorAll(".first-level-icon path");
      fli.forEach((element) => {
        element.setAttribute(
          "style",
          `fill: ${this.$refs.firstLevelIconColorChanger.value}`
        );
      });
      localStorage.setItem(
        "changed-first-level-icon-color",
        `${this.$refs.firstLevelIconColorChanger.value}`
      );
    },
    setSecondIconLevelColor() {
      let fli = document.querySelectorAll(".second-level-icon path");
      fli.forEach((element) => {
        element.setAttribute(
          "style",
          `fill: ${this.$refs.secondLevelIconColorChanger.value}`
        );
      });
      localStorage.setItem(
        "changed-second-level-icon-color",
        `${this.$refs.secondLevelIconColorChanger.value}`
      );
    },
    setBackgroundColor() {
      let fli = document.querySelectorAll(".change-background");
      fli.forEach((element) => {
        element.setAttribute(
          "style",
          `background-color: ${this.$refs.backgroundColorChanger.value}`
        );
      });
      localStorage.setItem(
        "changed-background-color",
        `${this.$refs.backgroundColorChanger.value}`
      );
    },
    setDefaultPallete() {
      localStorage.setItem("changed-background-color", `FFDAC5`);
      localStorage.setItem("changed-second-level-icon-color", `34241B`);
      localStorage.setItem("changed-first-level-icon-color", `FFFFFF`);
      let getBackgroundColor = localStorage.getItem("changed-background-color");
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
    },
  },
};
</script>

<style lang="scss">
.settings {
  width: 100vw;
  height: 100vh;
  background-color: $accent;
  display: flex;
  align-items: center;
  padding: 0 40px;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
  }
  &__title {
    font-family: "comfortaa", cursive;
    color: $white;
    font-size: 72px;
    max-width: 584px;
  }
  &__window {
    display: flex;
    flex-direction: column;
    background-color: #fadee1;
    padding: 40px;
    max-width: 1127px;
    width: 100%;
    border-radius: 30px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      font-family: "comfortaa", cursive;
    }
  }
  &__input {
    width: 60px;
    height: 60px;
    margin-top: 20px;
  }
  &__example {
    margin-top: 30px;
    svg {
      width: 96px;
      height: 96px;
    }
  }
  &__display {
    width: 100px;
    height: 100px;
    background-color: $accent;
  }
  &__reset {
    background-color: $accent;
    height: 80px;
    font-size: 24px;
    margin-top: 40px;
  }
}
</style>
