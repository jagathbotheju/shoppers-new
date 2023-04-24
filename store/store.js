import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      totalPrice: 0,

      addItemToCart: (params) => {
        const { newItem } = params;

        set((state) => {
          const newCart = [...state.cart, newItem];
          let price = 0;
          newCart.map((item) => {
            price += item.price * item.quantity;
          });

          return {
            ...state,
            totalPrice: price,
            cart: newCart.sort((x, y) => {
              let a = x.title.toUpperCase();
              let b = y.title.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            }),
          };
        });
      },

      deleteQuantity: (params) => {
        const { quantity, id } = params;

        set((state) => {
          const newItem = state.cart.find((item) => item._id === id);
          if (newItem.quantity === 1) return;
          newItem.quantity -= 1;
          const newCart = [
            ...state.cart.filter((item) => item._id !== id),
            newItem,
          ];
          let price = 0;
          newCart.map((item) => {
            price += item.price * item.quantity;
          });

          return {
            ...state,
            totalPrice: price,
            cart: newCart.sort((x, y) => {
              let a = x.title.toUpperCase();
              let b = y.title.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            }),
          };
        });
      },

      addQuantity: (params) => {
        const { quantity, id } = params;

        set((state) => {
          const newItem = state.cart.find((item) => item._id === id);
          newItem.quantity += 1;
          const newCart = [
            ...state.cart.filter((item) => item._id !== id),
            newItem,
          ];
          let price = 0;
          newCart.map((item) => {
            price += item.price * item.quantity;
          });

          return {
            ...state,
            totalPrice: price,
            cart: newCart.sort((x, y) => {
              let a = x.title.toUpperCase();
              let b = y.title.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            }),
          };
        });
      },

      deleteItem: (params) => {
        const { id } = params;

        set((state) => {
          const newCart = state.cart.filter((item) => item._id !== id);
          let price = 0;
          newCart.map((item) => {
            price += item.price * item.quantity;
          });

          return {
            ...state,
            totalPrice: price,
            cart: newCart.sort((x, y) => {
              let a = x.title.toUpperCase();
              let b = y.title.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            }),
          };
        });
      },

      emptyCart: () => {
        set((state) => {
          const newCart = [];
          return {
            ...state,
            cart: newCart,
            totalPrice: 0,
          };
        });
      },
    }),
    { name: "cart" }
  )
);

export default useCart;
