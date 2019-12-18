import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/auctions" activeStyle={activeStyle}>
        Auction
      </NavLink>
      {" | "}
      <NavLink to="/bids" activeStyle={activeStyle}>
        All Bids
      </NavLink>
      {" | "}
      <NavLink to="/solditems" activeStyle={activeStyle}>
        Sold Items
      </NavLink>
      
    </nav>
  );
};

export default Header;
