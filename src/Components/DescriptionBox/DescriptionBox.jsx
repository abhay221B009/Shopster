import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-box-nav">Description</div>
        <div className="description-box-nav-fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is a digital platform that enables the buying
          and selling of goods or services online. It acts as a virtual
          marketplace where businesses and individuals can display their
          products, engage with customers, and carry out transactions without
          needing a physical storefront. These websites have become highly
          popular due to their convenience, easy accessibility, and ability to
          reach a global audience.
        </p>
        <p>
          Online shopping platforms have transformed the way people purchase
          goods by offering a fast, easy, and contactless experience. Customers
          can browse a wide variety of products, compare prices, read reviews,
          and place orders from the comfort of their homes. For businesses,
          these platforms provide powerful tools for marketing, inventory
          management, and customer engagement, making them essential in the
          modern digital economy.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
