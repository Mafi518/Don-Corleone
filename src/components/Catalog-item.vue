<template>
  <article class="card">
    <div class="card__head">
      <img
        :src="require('@/assets/images/' + donut_data.image)"
        alt=""
        class="card__image"
      />
      <button class="card__toCart" @click="addToCart">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="first-level-icon"
        >
          <path d="M16 0V32" stroke="white" stroke-width="2" />
          <path d="M0 15L32 15" stroke="white" stroke-width="2" />
        </svg>
      </button>
    </div>
    <div class="card__body">
      <h2 class="card__title">{{ donut_data.name }}</h2>
      <div class="card__wrapper">
        <p class="card__description">Калории</p>
        <p class="card__description">32г</p>
      </div>
    </div>
    <div class="card__footer">
      <p class="card__price">{{ donut_data.price }} ₽</p>
    </div>
    <button @click="addFullInfo" >dasdsadsadasdas</button>
  </article>
</template>

<script>
export default {
  components: {},
  name: "catalog-item",
  props: {
    donut_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.donut_data);
    },
    addFullInfo() {
      this.$emit("addFullInfo", this.donut_data)
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.card {
  background-color: $accent;
  border-radius: 30px;
  max-width: 377px;
  padding: 20px !important;
  width: 100%;
  min-height: 354px;
  max-height: 354px;
  font-size: 20px;
  margin-top: 80px !important;
  &:nth-child(-n + 2) {
    margin-top: 0;
  }
  &__head {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &::after {
      content: "";
      width: 105px;
      height: 33px;
      border-radius: 100%;
      background-color: #666666;
      filter: blur(18px);
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.18);
      z-index: 0;
      margin-top: -15px;
    }
  }
  &__body {
    margin: 30px 0 20px 0;
  }
  &__footer {
  }
  &__image {
    max-width: 189px;
    max-height: 227px;
    margin-top: -80px;
    position: relative;
    z-index: 1;
  }
  &__toCart {
    position: absolute;
    top: -20px;
    right: -20px;
    border-radius: 0 30px;
    background-color: #ffe7d9;
    width: 68px;
    height: 68px;
  }
  &__title {
    font-family: "Comfortaa", cursive;
    margin-bottom: 10px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__description {
  }
  &__price {
    font-size: 36px;
  }
}
</style>
