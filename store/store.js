const { create } = require("zustand");

const useCart = create((set, get) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  addItemToCart: (params) => {
    const { newItem } = params;

    set((state) => {
      const newCart = [...state.cart, newItem];
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  emptyCart: () => {
    set((state) => {
      const newCart = [];
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
