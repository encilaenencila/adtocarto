import { Link } from "react-router-dom";
import ProductContext from "../context/productcontext";
import { category } from "../json/category";
import { useContext} from "react";
import Banner from "../component/banner";
import Features from "../component/features";
function Home () {
  const { handleCategory } = useContext(ProductContext);
  
  return (
    <div className="home-container">
      <Banner/>
    
      <ul>
        {category.map((cat, idx) => {
          return (
            <li key={idx} className="home-card">
              <Link
                className="home-Link"
                to={"products"}
                onClick={() => handleCategory(cat.category)}>
                <img
                  srcSet={`${cat.imgurl} 1x, ${cat.imgurl} 2x`}
                  src={cat.imgurl}
                  alt={idx}
                  className="home-category-img"
                />
                <small className="home-category-name">{cat.name}</small>
              </Link>
            </li>
          );
        })}
      </ul>

      <Features/>
    </div>
  );
}

export default Home;





