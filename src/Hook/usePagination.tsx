import React from "react";
import { useState } from "react";
import UserData from "../mockData/UserData";

const usePagination = () => {
  const [limit, setLimit] = useState<number>(5);
  const numbers=[...Array(UserData.length/limit).keys()];
  
  const [firstIndex, setFirstIndex] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(5);

  const slicedData=UserData.slice(firstIndex,lastIndex)

  const prevPage = () => {
    if (firstIndex > 0) {
      setLastIndex(firstIndex)
      setFirstIndex(firstIndex-limit)
    }
  };
  const nextPage = () => {
    if (lastIndex < UserData.length) {
      setFirstIndex(lastIndex);
      setLastIndex(lastIndex + limit);
    }
    
  };
  function pageClick(item:number){
    setFirstIndex(limit*item)
    setLastIndex((limit*item)+5)
  };
  return { nextPage ,prevPage,pageClick,numbers,slicedData};
};

export default usePagination;
