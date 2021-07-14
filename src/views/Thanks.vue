<template>
  <div class="thanks">
    <img src="@/assets/images/don-hello.png" alt="" />
    <p>{{ userName }}, спасибо за заказ!</p>
    <p>В ближайшее время с вами свяжется наш менеджер</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: localStorage.getItem("thanks-name"),
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.thanks {
  background-color: $accent;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
