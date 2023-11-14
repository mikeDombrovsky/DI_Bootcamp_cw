import { _register, _login } from "../models/users";
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const lower_email = email.toLowerCase();

    const row = await _login(lower_email);
    if (row.length === 0) {
      return res.status(404).json({ msg: "email not found" });
    }
    const match = await bcrypt.compare(password + "", row[0].password);

    if (!match) {
      return res.status(404).json({ msg: "wrong credentials" });
    }
    const userId = row[0].id;
    const userEmail = row[0].email;

    const secret = proccess.env.ACCESS_SECRET_TOKEN;
    const accessToken = jwt.sign({ userId, userEmail }, secret, {
      expiresIn: "60s",
    });

    res.cookie("token", accessToken, { httpOnly: true, maxAge: 60 * 1000 });
    res.json({ token: accessToken });
    
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "something went wrong" });
  }
};
