// import React, { useContext } from "react";
// import "./Wishlist.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";

// const Wishlist = () => {
//   const { all_product, wishlistItems, removeFromWishlist, addToCart } =
//     useContext(ShopContext);

//   return (
//     <div className="wishlist">
//       <h1>Your Wishlist</h1>
//       <div className="wishlist-items">
//         {all_product.map((item) =>
//           wishlistItems[item.id] ? (
//             <div key={item.id} className="wishlist-item">
//               <img src={item.image} alt={item.name} />
//               <div className="wishlist-details">
//                 <h2>{item.name}</h2>
//                 <p>Price: ${item.new_price}</p>
//                 <div className="wishlist-actions">
//                   <button onClick={() => addToCart(item.id)}>
//                     Add to Cart
//                   </button>
//                   <img
//                     src={remove_icon}
//                     onClick={() => removeFromWishlist(item.id)}
//                     alt="Remove"
//                     className="wishlist-remove-icon"
//                   />
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
