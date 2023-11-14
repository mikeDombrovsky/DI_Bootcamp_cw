import { db } from "../config/db";

export const _register = (email, password) => {
  return db("myusers").insert({ email, password }, ["id", "email"]);
};

export const _login = (email) => {
  return db('users')
  .select('id', 'email','password')
  .where({email})
}

