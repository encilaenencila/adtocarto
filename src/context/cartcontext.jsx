import { createContext, useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ProductContext from "./productcontext";
import { addDecimals } from "../helper/helper";
import PropTypes from "prop-types";
import Swal from 'sweetalert2'
    

const CartContext = createContext();
export function CartProvider({ children }) {
  const { filterCategoryBy } = useContext(ProductContext);
  
  const [cart, setCart] = useState([]);


  
  useEffect(() => {
    if(cart.length > 0){
      localStorage.setItem("adtocarto", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const newCart = JSON.parse(localStorage.getItem("adtocarto")) || [];
    if (newCart) {
      setCart(newCart);
    }
  }, []);
  
  // eliminating all of the duplicate names from the cart
  const removeDupeItemOnCart = (cart) => {
    let nameList = cart.map((data) => data.id);
    return Array.from(new Set(nameList));
  };

  // if the product is in the cart, retrieve all the information 
  // from the product's json file linked to its id.
  //collecting every array that is either empty or not 
  const findProductById = (id) => {
    let allProducts = filterCategoryBy("all");
    let filteredById = allProducts.map((products) =>
      products.filter((produce) => produce.id === id)
    );
    return filteredById;
  };

    //deleting all instances of the empty or null array from "findProductById"
    // matching the id and obtaining all of its information
  const getProductFromId = (id) => {
    let products = findProductById(id).filter((productFromId) => {
      if (productFromId.length > 0) {
        return productFromId[productFromId.length - 1];
      }
    });
    return products[0][0];
  };
  
  //removing duplicate id from cart
  //mapping every id then pass it to getProductFromId to retrieve all the data related
  const newCart = () => {
    let noDupeitemOnCart = removeDupeItemOnCart(cart);
    let newCartList = noDupeitemOnCart.map((id) => {
      return getProductFromId(id);
    });

    return newCartList.reverse();
  };

   //add new id to cart and localstorage
  const addToCart = (id) => {
    const newCart = {
      id: id,
    };
    const newCarts = [...cart, newCart];
    setCart(newCarts);
    return Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Added to Cart!',
      showConfirmButton: false,
      timer: 1000
    })
  };

  // 
  const increaseItemFromCartById = (id) => {
    const newCart = {
      id: id,
    };
    const newCarts = [...cart, newCart];
    setCart(newCarts);
    
  };

  //subtracting id count from cart and localstorage
  const reduceItemFromCartById = (id) => {
    const newCart = cart.filter((crt) => crt.id);

    let indices = [];
    newCart.forEach((element, idx) => {
      if (element.id === id) {
        indices.push(idx);
      }
    });

    if (indices.length !== 0) {
      newCart.splice(indices[indices.length - 1], 1);
    }
    const storage = JSON.parse(localStorage.getItem("adtocarto")) || [];
     if(storage.length === 1){
      localStorage.removeItem("adtocarto")
     }
   
     setCart(newCart);
  };


    //totally remove id from cart and localstorage
  const removeFromCart = (id) => {
    const newCart = cart.filter((crt) => crt.id !== id);
    localStorage.removeItem("adtocarto", id)
    setCart(newCart);
   
  };

  // identify the duplicate IDs in the cart, count them, and then give the length per ID.
  const perItemCount = (id) => {
    const count = cart.filter((crt) => crt.id === id);
    return count.length;
  };


  // identify the duplicate IDs in the cart, count them, and then give the length per ID
  //then multiply by its price
  const perItemSubTotal = (id, price) => {
    const count = cart.filter((crt) => crt.id === id);
    let newPrice = count.length * price;
    return addDecimals(Math.round(newPrice));
  };

    // adding all the array
  const anyReducer = (accumulator,currentValue)=>{
   return accumulator + currentValue
  }

   // use "perItemCount"
   // then add the prices after multiplying by the item's price
  const checkOutTotal = () => {
    let  total = newCart().map((crt) => perItemCount(crt.id) * crt.price );
    let newTotal = total.reduce(anyReducer)
    return addDecimals(newTotal)
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        newCart,
        addToCart,
        removeFromCart,
        increaseItemFromCartById,
        reduceItemFromCartById,
        perItemCount,
        perItemSubTotal,
        checkOutTotal,
      
      }}
    >
      {children}
      <Outlet />
    </CartContext.Provider>
  );
}
CartProvider.propTypes = {
  children: PropTypes.any,
};
export default CartContext;
