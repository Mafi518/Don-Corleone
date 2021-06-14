export default {
  SET_DONUTS_TO_STATE: (state, donuts) => {
    state.donuts = donuts;
  },
  SET_CART: (state, donut) => {
    if (state.cart.length) {
      let isDonutExists = false;
      state.cart.map(function (item) {
        if (item.article === donut.article) {
          isDonutExists = true;
          item.quantity++;
        }
      });
      if (!isDonutExists) {
        state.cart.push(donut);
      }
    } else {
      state.cart.push(donut);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  SET_INFO: (state, donut) => {
    if (state.info.length >= 1) {
      state.info.shift()
      state.info.push(donut)
    } else if (state.info.length === 0) {
      state.info.push(donut)
    } else {
      state.info.push(donut)
    }
  }
};
