import { db } from "../config/db";

export const _register = (email, password) => {
  return db("myusers").insert({ email, password }, ["id", "email"]);
};
