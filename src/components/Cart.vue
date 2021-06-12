<template>
  <div class="cart">
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    ></CartItem>
    <div class="cart__wrapper">
      <button class="cart__close cart__button">Закрыть корзину</button>
      <button class="cart__pay cart__button">
        Перейти к оплате – {{ cartTotalSum }} ₽
      </button>
    </div>
  </div>
</template>

<script>
import CartItem from "./Cart-item";
import { mapActions } from "vuex";

export default {
  components: { CartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalSum() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });

        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  width: 50vw;
  background-color: #ffd3c5;
  padding: 0 40px;
  padding-top: 100px;
  padding-bottom: 140px;
  overflow: auto;
  &__item {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
  }
  &__wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50vw;
    height: 10vh;
    background-color: $accent;
    display: flex;
    justify-content: space-between;
    z-index: 3;
  }
  &__button {
    height: 100%;
    background-color: transparent;
    font-size: 22px;
    width: 50%;
  }
}
</style>