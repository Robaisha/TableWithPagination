import React from "react";
import { useState } from "react";
import UserData from "../../mockData/UserData";
const Pagination = () => {
  
  const [numbers, setNumber] = useState([1, 2, 3, 4]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const [limit, setLimit] = useState(lastIndex - firstIndex);
  const prevPage = () => {
    if (firstIndex >= 0) {
      setLastIndex(lastIndex - firstIndex);
    }
  };
  const nextPage = () => {
    if (lastIndex <= UserData.length) {
      setFirstIndex(lastIndex);
      setLastIndex(firstIndex + limit);
    }
  };
  return (
    <div className="Pagination">
      <button onClick={prevPage}>Prev</button>
      {numbers.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
