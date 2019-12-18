import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {  loadbids, savebid } from "../../redux/actions/bidActions";
import {  loaditems} from "../../redux/actions/itemActions";
import { loadusers } from "../../redux/actions/userActions";
import { loadauctions } from "../../redux/actions/auctionActions";
import PropTypes from "prop-types";
import BidForm from "./BidForm";

function ManageBidPage({
  bids,
  users,
  items,
  auctions,
  loadusers,
  loaditems,
  loadbids,
  loadauctions,
  savebid,
  history,
  ...props
}) {
  const [bid, setBid] = useState({ ...props.bid });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (bids.length === 0) {
      loadbids().catch(error => {
        alert("ManageBidPage Loading bids failed" + error);
      });
    } else {
      setBid({ ...props.bid });
    }

    if (users.length === 0) {
      loadusers().catch(error => {
        alert("ManageBidPage Loading users failed" + error);
      });
    }

    if (items.length === 0) {
      loaditems().catch(error => {
        alert("ManageBidPage Loading items failed " + error);
      });
    }

    if (auctions.length === 0) {
      loadauctions().catch(error => {
        alert("ManageBidPage Loading auctions failed" + error);
      });
    }
  }, [props.bid]);

  function onChange(event) {
    const { name, value } = event.target;
    console.log(bid);
    setBid(prevBid => ({
      ...prevBid,
      [name]: name === "AucitonId" ? parseInt(value, 10) : value
    }));
    console.log(bid);
  }

  function handleSave(event) {
    event.preventDefault();
    savebid(bid).then(() => {
      //history.push("/bids");
      alert('Saving ....');
    });
  }

  return (
    <BidForm
      bid={bid}
      errors={errors}
      users={users}
      items={items}
      auctions={auctions}
      onChange={onChange}
      onSave={handleSave}
    />
  );
}

ManageBidPage.propTypes = {
  bid: PropTypes.object,

  bids: PropTypes.array,
  users: PropTypes.array,
  items: PropTypes.array,
  auctions: PropTypes.array,

  loadusers: PropTypes.func,
  loaditems: PropTypes.func,
  loadbids: PropTypes.func,
  loadauctions: PropTypes.func,
  savebid: PropTypes.func,
  history: PropTypes.object
};

export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state) {
  return {
    bids : state.bids,
    users : state.users,
    items : state.items,
    auctions : state.auctions
  };
}

const mapDispatchToProps = {
  loadusers, loaditems, loadbids, loadauctions, savebid
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBidPage);
