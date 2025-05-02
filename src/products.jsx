import { ShoppingCart } from "lucide-react";
import styles from "./products.module.css";
import { useOutletContext } from "react-router-dom";

function Products() {
  const { products, loading, error, cartItems, setCartItems } =
    useOutletContext();

  function addToCart(product, quantity = 1) {
    const isInCart = cartItems.find((item) => item.id === product.id);

    if (isInCart) {
      setCartItems((prevCartItems) => {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  arguments.length === 1 ? item.quantity + quantity : quantity,
              }
            : item
        );
      });
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: quantity },
      ]);
    }
  }

  const listItems = products.map((product) => {
    const currentQty =
      cartItems.find((item) => item.id === product.id)?.quantity || 1;

    return (
      <li className={styles.productList} key={product.id} id={product.id}>
        <img
          className={styles.productImg}
          src={product.image}
          alt={product.title}
        />
        <p>{product.title}</p>
        <p> {product.price}$</p>
        <label className={styles.quantityControl}>
          Quantity{": "}
          <button
            type="button"
            onClick={() => {
              if (currentQty > 1) addToCart(product, currentQty - 1);
            }}
          >
            –
          </button>
          <input
            type="number"
            min="1"
            step="1"
            value={currentQty || 1}
            onChange={(e) => addToCart(product, Number(e.target.value))}
          />
          <button
            type="button"
            onClick={() => {
              addToCart(product, currentQty + 1);
            }}
          >
            +
          </button>
        </label>
        <ShoppingCart onClick={() => addToCart(product)} />
      </li>
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return <ul className={styles.productGrid}>{listItems}</ul>;
}
export default Products;
