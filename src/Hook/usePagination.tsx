import React, { useEffect } from "react";
import { useState } from "react";
import {user} from "../api/modal"

const usePagination = () => {
  const [data, setUserData] = useState<Array<user>>([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users?page=1")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUserData(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  const [limit, setLimit] = useState<number>(5);
  const numbers = [...Array(data .length / limit).keys()];

  const [firstIndex, setFirstIndex] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(5);

  const slicedData = data.slice(firstIndex, lastIndex);

  const prevPage = () => {
    if (firstIndex > 0) {
      setLastIndex(firstIndex);
      setFirstIndex(firstIndex - limit);
    }
  };
  const nextPage = () => {
    if (lastIndex < data.length) {
      setFirstIndex(lastIndex);
      setLastIndex(lastIndex + limit);
    }
  };
  function pageClick(item: number) {
    setFirstIndex(limit * item);
    setLastIndex(limit * item + 5);
  }
  return { nextPage, prevPage, pageClick, numbers, data };
};

export default usePagination;
