import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import wishlist_icon from "../Assets/wishlist_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const { addToWishlist } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-description">
          A timeless slim-fit shirt made from 100% breathable cotton. Perfect
          for work or casual wear, featuring a crisp collar, wrinkle-resistant
          fabric, and all-day comfort.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="productdisplay-right-buttons">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <div
            className="wishlist-icon"
            onClick={() => {
              addToWishlist(product.id);
            }}
          >
            <img src={wishlist_icon} alt="wishlist" />
          </div>
        </div>

        <p className="productdisplay-right-category">
          <span>Category: </span> Women , T-Shirt , Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
