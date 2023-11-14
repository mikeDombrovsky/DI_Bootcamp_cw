import { db } from "../config/db";

export const getAllProducts = () => {
  return db("products").select("id", "name", "price");
};
