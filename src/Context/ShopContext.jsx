import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

// Create context
export const ShopContext = createContext(all_product);

// Provider component
const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
