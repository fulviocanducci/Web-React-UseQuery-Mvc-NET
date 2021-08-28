import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { findTodo, updateTodo } from "./sources";

import FormBase from "./base";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";

function Update() {
  const history = useHistory();
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { mutateAsync } = useMutation(updateTodo);

  const { data, isLoading, isError, error } = useQuery(["todo", id], () => findTodo(id));

  const onSubmit = async (data) => {
    await mutateAsync(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("todo");
        history.push("/todos");
      },
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorAlert message={error.message} />;

  return <FormBase onSubmit={onSubmit} defaultValues={data?.data} to="/todos" />;
}

export default Update;
