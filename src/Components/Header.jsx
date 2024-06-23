import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col">TOTAL QUANTITY: {cardQuantity}</div>
          <div className="col">TOTAL PRICE : { (cardAmount).toFixed(2)}</div>
          <div className="col-auto">
            <button className="btn btn-danger">PROCEED TO PAY</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;