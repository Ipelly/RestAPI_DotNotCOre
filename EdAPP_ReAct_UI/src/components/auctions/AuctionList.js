import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const AuctionList = ({ auctions }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date </th>
        <th>Days Left</th>
      </tr>
    </thead>
    <tbody>
      {auctions.map(Auction => {
        return (
          <tr key={Auction.id}>
            <td>{Auction.name}</td>
            <td>{Auction.startDate}</td>
            <td>{Auction.endDate}</td>
            <td>{Auction.dayLeft}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AuctionList.propTypes = {
  auctions: PropTypes.array.isRequired
};

export default AuctionList;
