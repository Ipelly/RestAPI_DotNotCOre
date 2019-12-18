import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const SoldItemList = ({ solditems }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Item Name</th>
        <th>User Name</th>
      </tr>
    </thead>
    <tbody>
      {solditems.map(SoldItem => {
        return (
          <tr key={SoldItem.id}>
            <td>{SoldItem.item.title}</td>
            <td>{`${SoldItem.user.firstName}   ${SoldItem.user.lastName}`}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

SoldItemList.propTypes = {
  solditems: PropTypes.array.isRequired
};

export default SoldItemList;
