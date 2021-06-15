<template>
  <div class="cart">
    <div class="cart__list">
      <transition-group name="cart">
        <CartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        ></CartItem>
      </transition-group>
    </div>
    <div class="cart__empty" v-if="CART.length == 0">
      <img src="@/assets/images/cart-empty.png" alt="" />
      <p>Корзина пуста, но это пока!</p>
    </div>
    <div class="cart__wrapper">
      <button class="cart__close cart__button" @click="cartHide">
        Закрыть корзину
      </button>
      <button class="cart__pay cart__button" @click="openPay">
        Перейти к оплате – {{ cartTotalSum }} ₽
      </button>
    </div>
  </div>
  <form action="#" class="modal">
    <label for="name" class="modal__label">
      <input type="text" id="name" placeholder="Имя" class="modal__input" />
      <transition name="error">
        <p class="modal__error"></p>
      </transition>
    </label>
    <label for="surname" class="modal__label">
      <input
        type="text"
        id="surname"
        placeholder="Фамилия"
        class="modal__input"
      />
      <transition name="error">
        <p class="modal__error"></p>
      </transition>
    </label>
    <label for="location" class="modal__label">
      <input
        type="text"
        id="location"
        placeholder="Адрес доставки"
        class="modal__input"
      />
      <transition name="error">
        <p class="modal__error"></p>
      </transition>
    </label>
    <p class="modal__payment">Оплата наличными или картой при получении заказа</p>
    <button type="submit" class="modal__submit" @click.prevent="submit">
      Заказать – {{ cartTotalSum }}
    </button>
    <input
      type="text"
      id="cartTotalSum"
      ref="cartTotalSum"
      hidden
      :value="cartTotalSum"
    />
    <button class="modal__exit" @click.prevent="openPay">Вернуться</button>
  </form>
</template>

<script>
import CartItem from "./Cart-item";
import { mapActions, mapGetters } from "vuex";
import gsap from "gsap";

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
    return {
      isPayOpen: false,
      isNameValid: false,
      isSurNameValid: false,
      isLocationValid: false,
    };
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
    ...mapGetters(["CART", "INFO"]),
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
    cartHide() {
      gsap.fromTo(
        ".cart",
        0.3,
        { transform: "translateX(0%)" },
        { transform: "translateX(-100%)" }
      );
      document.querySelector(".cart-icon").style.display = "flex";
    },
    openPay() {
      let totalSum = this.$refs.cartTotalSum.value;
      if (this.isPayOpen == false && totalSum != 0) {
        this.isPayOpen = true;
        gsap.fromTo(
          ".modal",
          0.3,
          { transform: "translateX(-100%)" },
          { transform: "translateX(0%)" }
        );
      } else if (this.isPayOpen == true) {
        this.isPayOpen = false;
        gsap.fromTo(
          ".modal",
          0.3,
          { transform: "translateX(0%)" },
          { transform: "translateX(-100%)" }
        );
      }
    },
    submit() {
      let name = document.querySelector("#name");
      let surname = document.querySelector("#surname");
      let location = document.querySelector("#location");
      if (name.value.trim().length == 0 || name.value.trim().length < 2) {
        name.nextElementSibling.innerText = "Не существует имён меньше 2 букв";
        this.isNameValid = false;
      } else {
        this.isNameValid = true;
        name.nextElementSibling.innerText = "";
      }
      if (surname.value.trim().length == 0 || surname.value.trim().length < 2) {
        surname.nextElementSibling.innerText =
          "Не существует фамилий меньше 2 букв";
        this.isSurNameValid = false;
      } else {
        this.isSurNameValid = true;
        surname.nextElementSibling.innerText = "";
      }
      if (
        location.value.trim().length == 0 ||
        location.value.trim().length < 5
      ) {
        location.nextElementSibling.innerText =
          "Укажите корректный адрес доставки";
        this.isLocationValid = false;
      } else {
        this.isLocationValid = true;
        location.nextElementSibling.innerText = "";
      }
      if (
        this.isNameValid === true &&
        this.isSurNameValid === true &&
        this.isLocationValid === true
      ) {
        localStorage.setItem("thanks-name", name.value)
        this.$router.push("thanks");
      }
    },
  },
  mounted() {},
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
  display: none;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
  }
  &__item {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
  }
  &__wrapper {
    width: 100%;
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
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      margin-bottom: 40px;
    }
  }
}

.cart-enter-from,
.error-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.cart-enter-to,
.error-enter-to {
  opacity: 1;
  transform: scale(1);
}
.cart-enter-active,
.error-enter-active {
  transition: all 0.5s ease;
}
.cart-leave-from,
.error-leave-from {
  opacity: 1;
  transform: scale(1);
}
.cart-leave-to,
.error-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.cart-leave-active,
.error-leave-active {
  transition: all 0.2s ease;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  background-color: $accent;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 150px 0;
  transform: translateX(-100%);
  &__input,
  &__submit,
  &__exit {
    max-width: 300px;
    width: 100%;
    padding: 15px;
    background-color: $white;
    border-radius: 30px;
  }
  &__label {
    max-width: 300px;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  &__submit {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  &__error {
    font-size: 14px;
    margin-top: 10px;
  }
  &__payment {
    font-size: 14px;
    max-width: 240px;
    text-align: center;
  }
}
</style>
