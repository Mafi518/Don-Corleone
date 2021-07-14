<template>
  <transition-group name="list">
    <InfoItem
      v-for="item in info_data"
      :key="item.article"
      :info_item_data="item"
    ></InfoItem>
  </transition-group>
</template>

<script>
import InfoItem from "@/components/Info-item";

export default {
  props: {
    info_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    InfoItem,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.description {
  position: relative;
  letter-spacing: 0.075em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  &__title {
    @include h1;
    z-index: 1;
  }
  &__subtitle {
    font-size: 20px;
    line-height: 200%;
    margin-bottom: 40px;
    max-width: 630px;
    z-index: 1;
  }
  &__structure {
    font-size: 22px;
    border: none;
    border-bottom: 2px solid $brown;
    line-height: 90%;
    background-color: transparent;
    margin-bottom: 60px;
    z-index: 1;
  }
  &__buy {
    display: flex;
    align-items: center;
    font-size: 56px;
  }
  &__price {
    margin-right: 2vw;
  }
  &__image {
    position: absolute;
    max-width: 447px;
    width: 100%;
    min-height: 538px;
    background-size: contain;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-position: right;
  }
}

// transitions

.list-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.1s;
}
.list-leave-from {
  position: absolute;
  display: none;
}
.list-leave-to {
  position: absolute;
  display: none;
}
.list-leave-active {
  transition: all 0.5s ease;
}
@media (max-width: 1000px) {
  .description {
    &__title {
      font-size: 56px;
    }
    &__image {
      min-height: 460px;
    }
  }
}
@media (max-width: 425px) {
  .description {
    &__title {
      font-size: 38px;
      margin-bottom: 5px;
    }
    &__subtitle {
      font-size: 16px;
      margin-bottom: 15px;
    }
    &__image {
      min-height: 200px;
    }
    &__price {
      font-size: 34px;
    }
  }
}
@media (max-width: 320px) {
  .description {
    &__title {
      font-size: 32px;
      margin-bottom: 5px;
    }
    &__subtitle {
      font-size: 14px;
      margin-bottom: 15px;
    }
    &__image {
      min-height: 200px;
    }
    &__price {
      font-size: 28px;
    }
  }
}
</style>
