import React, { useEffect, useState } from "react";
import { ApiResponse, Product } from "./test";

const UseFetch = (url: string, options = {}) => {
  // 3 states
  const [data, setData] = useState<ApiResponse>();
  const [pending, setPending] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchData();
  }, [url]);

  /**
   * Récupère les données depuis une API
   */
  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError("");
      setPending(false);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
      setPending(false);
    }
  };
  return { data, error, pending };
};

export default UseFetch;
