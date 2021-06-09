<template>
  <section class="catalog">
    <catalog-item
      v-for="donut in donuts"
      :key="donut.article"
      :donut_data="donut"
      @sendDataToParent="sendDataToParent"
    ></catalog-item>
  </section>
</template>

<script>
import CatalogItem from "@/components/Catalog-item";

export default {
  components: {
    CatalogItem,
  },
  data() {
    return {
      donuts: [
        {
          image: "set-1.png",
          name: "Сет “Глазурь”",
          price: 2100,
          article: "T1",
        },
        {
          image: "set-2.png",
          name: "Сет “Дурь”",
          price: 3150,
          article: "T2",
        },
        {
          image: "set-3.png",
          name: "Сет “Кийосаки”",
          price: 4200,
          article: "T3",
        },
        {
          image: "set-4.png",
          name: "Сет “Лид”",
          price: 5300,
          article: "T4",
        },
        {
          image: "set-5.png",
          name: "Сет “Карамель”",
          price: 6500,
          article: "T5",
        },
        {
          image: "set-5.png",
          name: "Сет “Купи слона”",
          price: 8700,
          article: "T6",
        },
      ],
    };
  },
  computed: {},
  methods: {
    sendDataToParent(data) {
      console.log(data)
    }
  }
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
