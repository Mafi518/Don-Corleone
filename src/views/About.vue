<template>
  <div class="about change-background">
    <h1 class="about__title">О компании</h1>
    <p class="about__info">
      Первая в России лаборатория пончиков Каждое утро на собственном
      производстве по авторским рецептам мы готовим свежие и вкусные сеты
      пончиков.
    </p>
    <p class="about__info">
      Разнообразные начинки приходятся по вкусу даже взыскательным сладкоежкам,
      а авторские рисунки приводят в восторг детишек и взрослых.
    </p>
    <p class="about__info">
      Если вы хотите порадовать своих детишек или себя свежими и вкусными
      пончиками, то Don Corleone это ваш выбор
    </p>
    <p class="about__info">
      Кроме пончиков, в в необычной атмосфере кафе Don Corleone, можно
      насладиться большим выбором сладостей, согревающим чаем - кофе и
      фирменными напитками.
    </p>
    <p class="about__info">Кафе: будни 10:00 – 21:00, выходные 11:00 – 22:00</p>
    <p class="about__info">
      Доставка: ежедневно 12:00 – 21:00 на сайте Don-Corleone.ru
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  background-color: $accent;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  &__title {
    @include h1;
  }
  &__info {
    font-size: 18px;
    line-height: 200%;
    margin-bottom: 50px;
    max-width: 1214px;
  }
}
</style>