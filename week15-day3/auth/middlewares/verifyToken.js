import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.autherization;

  if (!token) {
    return res.status(401).json({ msg: "unauthorized" });
  }
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "token verification failed" });
    }  
    next();
  });

};
