import React from "react";
import "./Subtotal.css";
import CurrcencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) => {
    var totalPrice = 0;
    basket?.forEach((product) => {
      totalPrice += product?.price;
    });
    return totalPrice;
  };

  console.log(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <CurrcencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong>{` $${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
