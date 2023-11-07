import { _register } from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const lower_email = email.toLowerCase();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password + "", salt);

  try {
    const row = await _register(lower_email, hash);
    res.json(row);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "email already exist" });
  }
};
