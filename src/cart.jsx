import styles from "./cart.module.css";
import { useOutletContext } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems } = useOutletContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const listItems = cartItems.map((product) => (
    <li className={styles.productList} key={product.id} id={product.id}>
      <div className={styles.productImg}>
        <img
          className={styles.productImg}
          src={product.image}
          alt={product.title}
          width="60"
          height="60"
        />
        <p>{product.title}</p>
      </div>

      <div className={styles.productInfo}>
        <p> {product.price}$</p>
        <p> {product.quantity * product.price}$</p>
        <Trash2 onClick={() => addToCart(product)} />
      </div>
    </li>
  ));

  return (
    <div className={styles.content}>
      <h1 className={styles.mainTitle}>Cart</h1>
      <div className={styles.tableHeaders}>
        <h2 className={styles.tableTitle}>Product</h2>
        <div className={styles.priceHeaders}>
          <h2 className={styles.tableTitle}>Price</h2>
          <h2 className={styles.tableTitle}>Quantity</h2>
          <h2 className={styles.tableTitle}>Total</h2>
        </div>
      </div>
      <ul className={styles.productGrid}>{listItems}</ul>
      <h3 className={styles.total}>
        Total: {totalPrice}$
        <Link to="/account">
          <button className={styles.btn}>Checkout</button>
        </Link>
      </h3>
    </div>
  );
}
export default Cart;
