import React from "react";

const Table = ({slicedData}) => {
  
  return (
    <div>
      <table>
        <tr>
          {Object.keys(slicedData[0]).map((headerField) => {
            return <th >{headerField}</th>;
          })}
        </tr>
        {slicedData.map((obj) => {
          return( 
            <tr >
            {Object.values(obj).map((entry) => {
            return (
                <td>{entry}</td>
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
