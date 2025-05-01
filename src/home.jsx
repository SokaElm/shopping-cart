import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Start shopping now!</p>
      <Link to="products">You can look at our products by clicking here!</Link>
    </div>
  );
};

export default Home;
