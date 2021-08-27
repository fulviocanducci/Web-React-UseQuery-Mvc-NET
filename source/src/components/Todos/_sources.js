import axios from "axios";

import { url } from "../../utils";

const fetchAll = async () => axios.get(url.get("todos"));

export { fetchAll };
