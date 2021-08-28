import { useEffect, useState } from "react";
import { url } from "../../../utils";

function useCreditPageList() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function initAsync(n) {
    try {
      setIsLoading(true);
      const json = await fetch(url.get(`todos/page/${n}`));
      if (json.ok) {
        setData(await json.json());
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error.message);
    }
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

export { useCreditPageList };
