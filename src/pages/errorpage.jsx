
import errorpage from "../assets/errorpage.svg";
import { Link } from "react-router-dom";
function ErrorPage() {

    return (
        <div className='error-page'>
         <ul>
          <li>
            <img
              srcSet={`${errorpage} 1x, ${errorpage} 2x`}
              src={errorpage}
              alt="empty-cart"
              className="cart-img"
            />
          </li>
          <li className="cart-empty-text">
            <h4>404 page not found </h4>
            <small>Unfortunately we cant find the page</small>
            <small>you are looking for.</small>
          </li>
          <li>
            <Link className="products-card-btn" to={"/products"}>
              Return to Shop
            </Link>
          </li>
        </ul>
        </div>
    )
}

export default ErrorPage