import { require } from "../helper/helper";
import { category } from "../json/category";
import ProductContext from "../context/productcontext";
import { useContext, useRef } from "react";
function ProductFilter() {
  const { handleCategory } = useContext(ProductContext);
  const scrollRef = useRef();
  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft -= 210;
  };
  const handleScrollRight = () => {
    scrollRef.current.scrollLeft += 210;
  };
  return (
    <div className="products-filter">
      <div className="filters-slider">
        <input
          type="button"
          value={"<"}
          className="filter-slider-btn"
          onClick={handleScrollLeft}
        />
        <ul className="filters-list" ref={scrollRef}>
          {category.map((cat, idx) => {
            return (
              <li key={idx} className="filter-card">
                <button
                  className="filter-card-btn"
                  onClick={() => handleCategory(cat.category)}
                >
                  <img src={require(cat?.category)} className="filter-img" />
                  <small className="filter-name">{cat.name}</small>
                </button>
              </li>
            );
          })}
        </ul>
        <input
          type="button"
          value={">"}
          className="filter-slider-btn"
          onClick={handleScrollRight}
        />
      </div>
    </div>
  );
}

export default ProductFilter;
