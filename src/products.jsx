import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import styles from "./products.module.css";
import { useOutletContext } from "react-router-dom";

function Products() {
  const { products, loading, error, cartItems, setCartItems } =
    useOutletContext();

  function addToCart(product) {
    const isInCart = cartItems.find((item) => item.id === product.id);

    if (isInCart) {
      setCartItems((prevCartItems) => {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  }

  const listItems = products.map((product) => (
    <li className={styles.productList} key={product.id} id={product.id}>
      <img
        className={styles.productImg}
        src={product.image}
        alt={product.title}
      />
      <p>{product.title}</p>
      <p> {product.price}$</p>
      <ShoppingCart onClick={() => addToCart(product)} />
    </li>
  ));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return <ul className={styles.productGrid}>{listItems}</ul>;
}
export default Products;
