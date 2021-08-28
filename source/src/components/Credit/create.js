import { useHistory } from "react-router-dom";
import FormBase from "../Todos/base/index";
import { useCreditCreate } from "./hooks";

function Create() {
  const history = useHistory();
  const { createAsync } = useCreditCreate();
  const onSubmit = async (data) => {
    console.log(data);
    await createAsync(data);
    history.push("/credit");
  };
  return <FormBase onSubmit={onSubmit} defaultValues={{ description: "", active: true }} to="/credit" />;
}

export default Create;
