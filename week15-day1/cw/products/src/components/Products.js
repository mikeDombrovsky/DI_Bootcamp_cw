import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const getAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:3001/products");

      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
        }),
      });

      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Shop</h1>
      <div>
        <form onSubmit={(e) => addProduct(e)}>
          <input
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type="submit" value="add" />
        </form>
      </div>
      {products.map((item) => {
        return (
          <Link to={`/${item.id}`}>
            <div key={item.id} style={{ border: "solid 1px black" }}>
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default Products;
