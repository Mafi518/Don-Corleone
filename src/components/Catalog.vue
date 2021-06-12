<template>
  <section class="catalog">
    <catalog-item
      v-for="donut in DONUTS"
      :key="donut.article"
      :donut_data="donut"
      @addToCart="addToCart"
    ></catalog-item>
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
    ...mapActions(["GET_DONUTS_FROM_API", "ADD_TO_CART"]),
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
</style>
