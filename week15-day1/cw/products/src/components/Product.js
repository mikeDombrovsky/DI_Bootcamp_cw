import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3001/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Name: {product?.name}</h1>
      <h2>Price: {product?.price}</h2>
      <Link to={`/`}>to Shop</Link>
    </div>
  );
};
export default Product;
