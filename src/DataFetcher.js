import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://jsonfakery.com/jobs", {
          signal,
        });
        setData(response.data.slice(0, 20));
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Membatalkan permintaan jika komponen di-unmount
    };
  }, []);
  //console.log(data);
  if (!loading && !error && data) return data;
};

export default DataFetcher;
