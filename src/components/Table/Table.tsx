import React from "react";

type TablePropsType={
  slicedData:Array<{id:number,name:string,age:number,gender:string}>
}
const Table:React.FC<TablePropsType> = ({slicedData}) => {
  return (
    <div>
      <table>
        <thead>
          {Object.keys(slicedData[0]).map((headerField,key) => {
            return <th key={key}>{headerField}</th>;
          })}
        </thead>
        {slicedData.map((obj,key) => {
          return( 
            <tr key={key}>
            {Object.values(obj).map((entry,index) => {
            return (
                <td key={index}>{entry}</td>
            );
          })}
          </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
