<template>
  <section class="catalog">
    <transition-group name="catalog">
      <catalog-item
        v-for="donut in DONUTS"
        :key="donut.article"
        :donut_data="donut"
        @addToCart="addToCart"
        @addFullInfo="addFullInfo"
      ></catalog-item>
    </transition-group>
  </section>
</template>

<script>
import CatalogItem from "@/components/Catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["DONUTS"]),
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    addFullInfo(data) {
      this.ADD_FULL_INFO(data);
    },
    ...mapActions(["GET_DONUTS_FROM_API", "ADD_TO_CART", "ADD_FULL_INFO"]),
  },
  mounted() {
    this.GET_DONUTS_FROM_API();
  },
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.catalog-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.catalog-enter-to {
  opacity: 1;
  transform: scale(1);
}
.catalog-enter-active {
  transition: all 0.5s ease;
}
.catalog-leave-from {
  opacity: 1;
  transform: scale(1);
}
.catalog-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.catalog-leave-active {
  transition: all 0s ease;
}

@media (max-width: 1680px) {
  .catalog {
    justify-content: center;
  }
}
@media (max-width: 1000px) {
  .catalog {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
</style>
