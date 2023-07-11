import React from "react";
import { user } from "../../api/modal";

type TablePropsType = {
  slicedData: Array<user>;
};

const Table: React.FC<TablePropsType> = ({ slicedData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {slicedData.length &&
              Object.keys(slicedData[0]).map((headerField: string, key) => {
                return <th key={key}>{headerField}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {slicedData?.map((user, key) => {
            return (
              <tr key={key}>
                {Object.values(user).map((obj, index) => {
                  {if (typeof(obj)=="string"){
                    return <td key={index}>{obj}</td>;
                  }}
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
