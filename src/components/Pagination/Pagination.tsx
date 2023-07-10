import React from "react";
import { useState } from "react";
import { Table } from "../Table";
import UserData from "../../mockData/UserData";
const Pagination = () => {
  const [limit, setLimit] = useState(5);
  const numbers=[...Array(UserData.length/limit).keys()];
  
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);

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
  return (
    <div>
  <Table slicedData={slicedData}/>
    <div className="Pagination">
      <button onClick={prevPage}>Prev</button>
      {numbers.map((item, i) => {
        return <button key={i}>{item}</button>;
      })}
      <button onClick={nextPage}>Next</button>
    </div>
    </div>
  );
};

export default Pagination;
