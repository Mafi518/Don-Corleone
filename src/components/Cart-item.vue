<template>
  <article class="card">
    <div class="card__head">
      <img
        :src="require('@/assets/images/' + cart_item_data.image)"
        alt=""
        class="card__image"
      />
      <button
        class="card__toCart card__qunatity card__minus"
        @click="decrement"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="first-level-icon"
        >
          <path d="M0 15L32 15" stroke="white" stroke-width="2" />
        </svg>
      </button>
      <button class="card__toCart card__qunatity card__plus" @click="increment">
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
      <h2 class="card__title">{{ cart_item_data.name }}</h2>
      <div class="card__wrapper">
        <p class="card__description">Количество</p>
        <p class="card__description">{{ cart_item_data.quantity }} шт</p>
      </div>
    </div>
    <div class="card__footer">
      <p class="card__price">
        {{ cart_item_data.price * cart_item_data.quantity }} ₽
      </p>
    </div>
    <button class="card__delete" @click="deleteFromCart">
      Удалить из корзины
    </button>
  </article>
</template>

<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrement() {
      this.$emit("decrement");
    },
    increment() {
      this.$emit("increment");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.card {
  max-height: 424px;
  &__delete {
    padding: 15px 0;
    border-radius: 30px;
    font-size: 20px;
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
  }
  &__minus {
    left: -20px;
    border-radius: 30px 0;
  }
}
</style>