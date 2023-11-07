import { useContext } from "react";
import { AppContext } from "../App";

const Button = () => {
  const { increment } = useContext(AppContext);

  return <button onClick={increment}>click me!</button>;
};

export default Button;
