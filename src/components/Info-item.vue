<template>
  <article class="description fake" ref="info_item">
    <h1 class="description__title">{{ info_item_data.name }}</h1>
    <p class="description__subtitle">
      Пышные пончики с сладкой глазурью со вкусом клубники и шоколада,
      посыпанные крошкой – сытный десерт для вкусного перекуса!
    </p>
    <button class="description__structure">Состав</button>
    <div class="description__buy">
      <span class="description__price">{{ info_item_data.price }} ₽</span>
      <button class="toCart">
        <!-- <Icon class="first-level-icon" name="toCart"></Icon> -->
      </button>
    </div>
    <div
      class="description__image"
      :style="{
        'background-image': 
          'url(' + require(`@/assets/images/${info_item_data.image}`) + ')',
      }"
    ></div>
  </article>
</template>

<script>
// import Icon from '@/components/Icon'

export default {
  props: {
    info_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    // Icon
  },
  methods: {
    infoToCart() {
      this.$emit('infoToCart')
    }
  }
};
</script>

<style lang="scss">
</style>