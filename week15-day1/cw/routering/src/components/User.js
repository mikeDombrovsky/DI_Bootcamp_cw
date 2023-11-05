import { useParams } from "react-router-dom";

const User = (params) => {
    let { id } = useParams();
  return (
    <>
      <h3>User</h3>
      <p>User id: {id}</p>
    </>
  );
};

export default User;
