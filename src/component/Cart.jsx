import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <p>No items in cart.</p>
      <button>Checkout</button>
    </section>
  );
};

export default Cart;