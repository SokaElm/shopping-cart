import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Start shopping now!</h1>
      <Link to="products">You can look at our products by clicking here!</Link>
    </div>
  );
};

export default Home;
