import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { products } from "../json/products";
import PropTypes from "prop-types";
const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [category, setCategory] = useState("all");



  
  const filterCategoryBy = (category) => {
    let filter = products.filter((product) => {
        if (category === "all") {
          return product.category;
        } else {
          return product.category === category;
        }
      })
      .map((product) => {
        return product.produce;
      });


    if(filter.length <=0){
      return null
    }

    return filter;
  };
  function handleCategory(cat) {
    setCategory(cat);
  }

  return (
    <ProductContext.Provider
      value={{
        handleCategory,
        filterCategoryBy,
        category,
      }}
    >
      {children}
      <Outlet />
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.any,
};
export default ProductContext;
