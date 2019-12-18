import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const BidList = ({ bids }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Auciton Name</th>
        <th>User</th>
        <th>Item </th>
        <th>Bid Price</th>
      </tr>
    </thead>
    <tbody>
      {bids.map(Bid => {
        return (
          <tr key={Bid.id}>
            <td>{Bid.auction.name}</td>
            <td>{`${Bid.user.firstName} ${Bid.user.lastName}`}</td>
            <td>{Bid.item.title}</td>
            <td>{Bid.price}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

BidList.propTypes = {
  bids: PropTypes.array.isRequired
};

export default BidList;
