import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  function handleRazorpayPayment() {
    const amount = getTotalCartAmount() * 100; // Razorpay works in paise
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Demo key, replace with your own for production
      amount: amount || 10000, // default to 100.00 INR if cart is empty
      currency: "INR",
      name: "Shopster Demo",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png", // Optional: replace with your logo
      handler: function (response) {
        // Improved: Show a styled message instead of alert
        const paymentDiv = document.createElement("div");
        paymentDiv.style.position = "fixed";
        paymentDiv.style.top = "20px";
        paymentDiv.style.right = "20px";
        paymentDiv.style.background = "#4BB543";
        paymentDiv.style.color = "white";
        paymentDiv.style.padding = "16px 24px";
        paymentDiv.style.borderRadius = "8px";
        paymentDiv.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
        paymentDiv.style.zIndex = 9999;
        paymentDiv.innerText = `Payment successful! Payment ID: ${response.razorpay_payment_id}`;
        document.body.appendChild(paymentDiv);
        setTimeout(() => {
          paymentDiv.remove();
        }, 5000);
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f37254",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format  cartitems-format-main">
                <img
                  src={e.image}
                  alt={e.name}
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>Rs{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Rs{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                  className="cartitems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleRazorpayPayment}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code , Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
