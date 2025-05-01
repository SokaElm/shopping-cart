import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import styles from "./cart.module.css";
import { useOutletContext } from "react-router-dom";
import { Trash2 } from "lucide-react";

function Cart() {
  const { cartItems } = useOutletContext();

  const listItems = cartItems.map((product) => (
    <li className={styles.productList} key={product.id} id={product.id}>
      <img
        className={styles.productImg}
        src={product.image}
        alt={product.title}
        width="60"
        height="60"
      />
      <p>{product.title}</p>
      <p> {product.price}$</p>
      <p> {product.quantity}$</p>
      <Trash2 onClick={() => addToCart(product)} />
    </li>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div className="tableHeaders">
        <h2>Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Total</h2>
      </div>
      <ul className={styles.productGrid}>{listItems}</ul>
    </>
  );
}
export default Cart;
