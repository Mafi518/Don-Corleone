<template>
  <section class="home change-background" id="home">
    <div class="home__left">
      <div class="don-prompt-1" v-if="INFO.length === 0">
        <img src="@/assets/images/don-prompt-1.png" alt="" />
        <p>Стоит нажать на один из пончиков...</p>
      </div>
      <fullcard v-if="INFO.length" :info_data="INFO"></fullcard>
    </div>
    <div class="home__catalog">
      <div class="home__wrapper">
        <catalog></catalog>
      </div>
    </div>
    <button class="cart-icon" @click="cartShow">
      <p class="cart-quantity">{{ CART.length }}</p>
      <icon class="first-level-icon" name="cart" />
    </button>

    <cart :cart_data="CART"> </cart>
  </section>
</template>

<script>
// @ is an alias to /src
import Fullcard from "@/components/Fullcard";
import Catalog from "@/components/Catalog";
import Cart from "../components/Cart.vue";
import { mapGetters } from "vuex";
import Icon from "../components/Icon.vue";
import gsap from "gsap";

export default {
  name: "Home",
  components: {
    Fullcard,
    Catalog,
    Cart,
    Icon,
  },
  data() {
    return {
      isOpenCart: false,
    };
  },
  computed: {
    ...mapGetters(["CART", "INFO"]),
  },
  mounted() {
    document.querySelector(".cart-icon").addEventListener("click", function () {
      this.style.display = "none";
    });
  },
  methods: {
    setFirstIconLevelColor() {
      let fli = document.querySelectorAll(".first-level-icon path");
      fli.forEach((element) => {
        element.setAttribute(
          "style",
          `fill: ${this.$refs.firstLevelIconColor.value}`
        );
      });
    },
    cartShow() {
      if (this.isOpenCart == false) {
        gsap.fromTo(
          ".cart",
          0.5,
          { transform: "translate(-100%)", display: 'none' },
          { transform: "translate(0%)", display: 'flex' }
        );
      } 
    },
    cartHide() {
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  &__left {
    background-color: $accent;
    padding: 0 40px;
    display: flex;
    align-items: center;
  }
  &__catalog {
    padding: 0 40px;
    overflow: auto;
    padding-top: 100px;
  }
  &__left,
  &__catalog {
    width: 50vw;
    height: 100vh;
  }
}

.cart-icon {
  position: absolute;
  bottom: 60px;
  left: 40px;
  z-index: 12;
  cursor: pointer;
}
.cart-quantity {
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 6px 10px;
  border-radius: 50%;
  background-color: $accent;
  border: 1px solid $white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  line-height: 100%;
}
.don-prompt-1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    margin-bottom: 40px;
  }
  p {
  }
}
</style>
