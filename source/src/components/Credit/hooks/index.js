import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../../utils";

function useCreditFind() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  async function initAsync(id) {
    setIsLoading(true);
    try {
      const json = await fetch(url.get(`todos/${id}`));
      if (json.ok) {
        setData(await json.json());
      }
    } catch (error) {
      console.error(error.message);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    if (id) {
      initAsync(id);
    }
  }, [id]);
  return { data, id, isLoading };
}

function useCreditCreate() {
  const [isLoading, setIsLoading] = useState(false);
  async function createAsync(data) {
    setIsLoading(true);
    try {
      await fetch(url.get("todos"), {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  return {
    createAsync,
    isLoading,
  };
}

function useCreditUpdate() {
  const [isLoading, setIsLoading] = useState(false);
  async function updateAsync(data) {
    setIsLoading(true);
    try {
      await fetch(url.get(`todos/${data.id}`), {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  return {
    updateAsync,
    isLoading,
  };
}

function useCreditPageList() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function initAsync(n) {
    setIsLoading(true);
    try {
      const json = await fetch(url.get(`todos/page/${n}`));
      if (json.ok) {
        setData(await json.json());
      }
    } catch (error) {
      console.error(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    initAsync(page);
  }, [page]);

  return {
    data,
    page,
    setPage,
    isLoading,
  };
}

export { useCreditPageList, useCreditFind, useCreditCreate, useCreditUpdate };
