import { useHistory } from "react-router-dom";
import Loading from "../Loading";
import FormBase from "../Todos/base/index";
import { useCreditFind, useCreditUpdate } from "./hooks";

function Update() {
  const history = useHistory();
  const { data, isLoading } = useCreditFind();
  const { updateAsync } = useCreditUpdate();
  async function onSubmit(data) {
    await updateAsync(data);
    history.push("/credit");
  }
  if (isLoading) return <Loading />;
  return <FormBase onSubmit={onSubmit} defaultValues={{ ...data }} to="/credit" />;
}

export default Update;
