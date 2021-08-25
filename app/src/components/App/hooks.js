import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const url = "http://localhost:9519/api/";

function useTodos() {
  const { isError, isLoading, error, data, refetch } = useQuery(
    "todos",
    function () {
      return axios.get(url + "todos");
    },
    {
      enabled: true,
    }
  );
  return {
    isError,
    isLoading,
    error,
    data,
    refetch,
  };
}

function useTodosCreate() {
  const mutation = useMutation(function (data) {
    return axios.post(url + "todos", data);
  });
  return mutation;
}

export { useTodos, useTodosCreate };
