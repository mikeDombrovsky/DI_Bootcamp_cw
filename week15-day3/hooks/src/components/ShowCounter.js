import { useContext } from "react";
import { AppContext } from "../App";

const Counter = () => {
  const { count } = useContext(AppContext);
  return <h2>{count}</h2>;
};

export default Counter;
