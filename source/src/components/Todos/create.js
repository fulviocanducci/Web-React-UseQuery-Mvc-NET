import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";

import FormBase from "./base";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";

import { createTodo } from "./sources";

function Create() {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError, error } = useMutation(createTodo);

  const onSubmit = async (data) => {
    await mutateAsync(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
        history.push("/todos");
      },
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorAlert message={error.message} />;

  return <FormBase onSubmit={onSubmit} defaultValues={{ description: "", active: true }} to="/todos" />;
}

export default Create;
