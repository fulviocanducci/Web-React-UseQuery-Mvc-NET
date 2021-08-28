import axios from "axios";

import { url } from "./../../../utils";

const allTodos = () => axios.get(url.get("todos"));
const findTodo = (id) => axios.get(url.get(`todos/${id}`));
const createTodo = (data) => axios.post(url.get("todos"), data);
const updateTodo = (data) => axios.put(url.get(`todos/${data.id}`), data);

export { allTodos, createTodo, updateTodo, findTodo };
