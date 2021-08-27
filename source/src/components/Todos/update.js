import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  return <div>update {id}</div>;
}

export default Update;
