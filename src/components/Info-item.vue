<template>
  <article class="description fake">
    <h1 class="description__title">Сет “Глазурь”</h1>
    <p class="description__subtitle">
      Пышные пончики с сладкой глазурью со вкусом клубники и шоколада,
      посыпанные крошкой – сытный десерт для вкусного перекуса!
    </p>
    <button class="description__structure">Состав</button>
    <div class="description__buy">
      <span class="description__price">265₽</span>
    </div>
    <div
      class="description__image"
      :style="{
        'background-image': 'url(' + require('@/assets/images/set-1.png') + ')',
      }"
    ></div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>