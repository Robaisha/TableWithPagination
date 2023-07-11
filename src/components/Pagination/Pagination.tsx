import React from 'react';

type PaginationPropsType={
prevPage?:()=>void,
nextPage?:()=>void,
pageClick?:(id:number)=>void,
numbers?:Array<number>
}
const Pagination :React.FC<PaginationPropsType> = (props) => {

  let {prevPage,nextPage,pageClick,numbers}=props
    return (
        <div>
        <div className="Pagination">
          <button onClick={prevPage}>Prev</button>
          {numbers.map((item:number, i:number) => {
            return <button onClick={()=>{pageClick(item)}} key={i}>{item}</button>;
          })}
          <button onClick={nextPage}>Next</button>
        </div>
        </div>
      );
}

export default Pagination;
