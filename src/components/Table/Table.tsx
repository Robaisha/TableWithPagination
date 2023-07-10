import React, { useState } from "react";
import UserData from "../../mockData/UserData";
const Table = () => {
  return (
    <div>
      <table>
        <tr>
          {Object.keys(UserData[0]).map((headerField) => {
            return <th>{headerField}</th>;
          })}
        </tr>
        {UserData.map((obj) => {
          return( 
            <tr>
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
