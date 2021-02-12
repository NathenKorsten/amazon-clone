import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">Your Shopping basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <div className="checkout__basket">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </>
  );
}

export default Checkout;
