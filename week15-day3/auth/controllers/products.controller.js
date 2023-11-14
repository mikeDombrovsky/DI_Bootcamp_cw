import { getAllProducts } from "../models/products.js";

export const _getAllProducts = async (req, res) => {
  try {
    const rows = await getAllProducts();
    res.json(rows)
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "no products" });
  }
};
