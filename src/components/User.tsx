import { useParams } from "react-router-dom";
// /user/:id
const User = () => {
  const { id } = useParams<{ id: string }>();
  return <div>User id:{id}</div>;
};

export default User;
