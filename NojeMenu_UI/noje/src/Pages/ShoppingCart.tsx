import React from 'react';
import CartPickUpDetails from '../Components/Page/Cart/CartPickUpDetails.tsx';
import CartSummary from '../Components/Page/Cart/CartSummary.tsx';

function ShoppingCart() {
  return (
    <div className="row w-100" style={{marginTop: "10px"}}>
        <div className="col-lg-6 col-12" style={{fontWeight: 300}}>
            <CartSummary/>
        </div>
        <div className="col-lg-6 col-12 p-4"><CartPickUpDetails/></div>
        </div>
  )
}

export default ShoppingCart;