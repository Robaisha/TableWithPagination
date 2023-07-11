import React from "react";
import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import { Table } from "../../components/Table";
import {usePagination} from "../../Hook";

const App = () => {
  let {nextPage ,prevPage,pageClick,numbers,data}=usePagination()
  return (
    <div>
      <Table slicedData={data}/>
      <Pagination nextPage={nextPage} prevPage={prevPage} pageClick={pageClick} numbers={numbers}/>
    </div>
  );
};

export default App;
