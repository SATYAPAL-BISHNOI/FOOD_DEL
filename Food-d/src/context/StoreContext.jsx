import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setcartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setcartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getCartTotalAmount = () => {
    let totala = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = food_list.find((prodect) => prodect._id === item);
        totala += iteminfo.price * cartItem[item];
      }
    }
    return totala;
  };

  const contextValue = {
    food_list,
    cartItem,
    setcartItem,
    addToCart,
    removeFromCart,
    getCartTotalAmount,
  };
  return (
    // <StoreContext.Provider value={contextValue}>
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
