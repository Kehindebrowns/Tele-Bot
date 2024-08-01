// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';
import Button from '../Button/Button';


// eslint-disable-next-line react/prop-types, no-unused-vars
function Cart({ cartItem, onCheckOut }) {
  // eslint-disable-next-line react/prop-types
  const totalPrice = cartItem.reduce((a, c) => a + c.price * c.quantity, 0);

  // Corrected variable name and moved conditional logic outside JSX for readability
  // eslint-disable-next-line react/prop-types
  const isEmptyCart = cartItem.length === 0;
  const buttonText = isEmptyCart ? 'Order !' : 'CheckOut';
  const isDisabled = isEmptyCart;
 

  return (
    <div className="cart__container">
      {isEmptyCart ? "No item in Cart" : ""}
      <br />
      <span>Total Price: ${totalPrice.toFixed(2)}</span>
      <Button title={buttonText} type="checkout" disabled={isDisabled} />
      onClick={onCheckOut}
    </div>
  );
}

export default Cart;
