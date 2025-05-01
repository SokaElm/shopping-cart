import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const contextValues = {
    products,
    loading,
    error,
    cartItems,
    setCartItems,
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header>
        <h1>FakeShop Market</h1>
        <div className="basket">
          <Link to="cart">
            <ShoppingCart width="30" height="30" />
            {totalQuantity > 0 && (
              <span className="cartBadge">{totalQuantity}</span>
            )}
          </Link>
        </div>
      </header>

      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="account">Account</Link>
          </li>
        </ul>
      </nav>

      <Outlet context={contextValues} />

      <footer>
        <h2>Usefull links</h2>
        <ul className="footer-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="products">Products</a>
          </li>
          <li>
            <a href="account">Account</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default App;
