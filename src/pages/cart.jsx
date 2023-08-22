import { useContext } from "react";
import emptycart from "../assets/emptycart.svg";
import CartContext from "../context/cartcontext";
import { Link } from "react-router-dom";
function Cart() {
  const {
    cart,
    newCart,
    removeFromCart,
    increaseItemFromCartById,
    reduceItemFromCartById,
    perItemCount,
    perItemSubTotal,
    checkOutTotal,
  } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cart.length <= 0 ? (
        <ul>
          <li>
            <img
              srcSet={`${emptycart} 1x, ${emptycart} 2x`}
              src={emptycart}
              alt="empty-cart"
              className="cart-img"
            />
          </li>
          <li className="cart-empty-text">
            <h4>You cart is currently empty </h4>
            <small>before proceeding to checkout you must </small>
            <small>add some products to your cart.</small>
          </li>
          <li>
            <Link className="products-card-btn" to={"/products"}>
              Return to Shop
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          {newCart().map((produce, idx) => {
            return (
              <li key={idx} className="cart-card">
                <div className="cart-card-sec-one">
                  <input
                    type="button"
                    value="x"
                    className="cart-card-btn"
                    onClick={() => removeFromCart(produce.id, idx.length)}
                  />
                </div>

                <div className="cart-card-sec-two">
                  <img
                    srcSet={`${produce?.image} 1x, ${produce?.image} 2x`}
                    src={produce?.image}
                    alt={idx}
                    className="cart-img"
                  />
                </div>

                <div className="cart-card-sec-three">
                  <input
                    type="button"
                    value="-"
                    className="cart-card-btn"
                    onClick={() => reduceItemFromCartById(produce.id)}
                  />

                  <span className="cart-card-item-count">
                    {perItemCount(produce.id)}
                  </span>
                  <input
                    type="button"
                    value="+"
                    className="cart-card-btn"
                    onClick={() => increaseItemFromCartById(produce.id)}
                  />
                </div>

                <div className="cart-card-sec-four">
                  <span> ₱{perItemSubTotal(produce.id, produce.price)} </span>
                  <small> amount </small>
                </div>

                <div className="cart-card-sec-five">
                  <span className="cart-name"> {produce.name} </span>
                  <small className="cart-price">
                    ₱{produce.price}/{produce.perqty}
                  </small>
                </div>
              </li>
            );
          })}
          <li>
            <Link className="products-card-btn" to={"/products"}>
            ← Continue Shopping
            </Link>
          </li>
          <li className="cart-checkout">
            <div className="checkout-sec-one">
              <h3>₱{checkOutTotal()} </h3>
              <span>Subtotal</span>
            </div>
            <div className="checkout-sec-two">
              <button className="checkout-btn">Checkout</button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Cart;
