import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { url } from "../../../utils";

function useTasks() {
  const queryClient = useQueryClient();
  function refresh() {
    queryClient.invalidateQueries("task");
  }
  const { data, isLoading, isError, error } = useQuery("task", async () => {
    try {
      const response = await axios.get(url.get("todos"));
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {}
  });
  return {
    refresh,
    data,
    isLoading,
    isError,
    error,
  };
}

function useTaskCreate() {
  const mutation = useMutation(async (data) => {
    try {
      await axios.post(url.get("todos"), data);
    } catch (error) {}
  });
  return {
    mutation,
  };
}
export { useTasks, useTaskCreate };
