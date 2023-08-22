import { useContext } from "react";
import ProductContext from "../context/productcontext";
import CartContext from "../context/cartcontext";
function Features() {
  const { filterCategoryBy } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div className="features">
        <h3>New Products</h3>
        
      <ul className='products-list'>
        {filterCategoryBy("cannedgoods").map((products) =>
          products.map((produce, idx) => {
            return (
              <li key={idx} className="products-card">
               <div  className="products-card-head">
               <img
                  srcSet={`${produce?.image} 1x, ${produce?.image} 2x`}
                  src={produce?.image}
                  alt={idx}
                  className="products-img"
                />
               </div>
              <div className="products-card-mid">
               <span className="products-name"> {produce.name} </span>
              <small className="products-price"> P{produce.price}/{produce.perqty} </small>
             </div>

               <div className="products-card-foot">

               <button className="products-card-btn" 
               onClick={()=>addToCart(produce.id)}>
                Add to Cart
                </button>
               </div >
           
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default Features;
