<template>
  <article class="description">
    <h1 class="description__title">Сет “Глазурь”</h1>
    <p class="description__subtitle">
      <slot></slot>
    </p>
    <button class="description__structure">Состав</button>
    <div class="description__buy">
      <span class="description__price">265₽</span>
      <Icon class="first-level-icon" name="toCart"></Icon>
    </div>
    <div
      class="description__image"
      :style="{'background-image' : 'url(' + require('@/assets/images/set-1.png') + ')'}"
    ></div>
  </article>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  props: {},
};
</script>

<style lang="scss">
.description {
  position: relative;
  letter-spacing: 0.075em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  &__title {
    @include h1;
    z-index: 1;
  }
  &__subtitle {
    font-size: 20px;
    line-height: 200%;
    margin-bottom: 40px;
    max-width: 630px;
    z-index: 1;
  }
  &__structure {
    font-size: 22px;
    border: none;
    border-bottom: 2px solid $brown;
    line-height: 90%;
    background-color: transparent;
    margin-bottom: 60px;
    z-index: 1;
  }
  &__buy {
    display: flex;
    align-items: center;
    font-size: 56px;
  }
  &__price {
    margin-right: 2vw;
  }
  &__image {
    position: absolute;
    max-width: 447px;
    width: 100%;
    min-height: 538px;
    background-size: contain;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-position: right;
}
}
</style>