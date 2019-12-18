import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const BidForm = ({
  bid,
  items,
  users,
  auctions,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      {/* <h2>{course.id ? "Edit" : "Add"} Course</h2> */}
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <SelectInput
        name="UserId"
        label="User"
        value={bid.UserId || ""}
        defaultOption="Select User"
        options={users.map(user => ({
          value: user.id,
          text: user.firstName + " " + user.lastName 
        }))}
        onChange={onChange}
        error={errors.user}
      />

      <SelectInput
        name="AuctionId"
        label="Auction"
        value={bid.AuctionId || ""}
        defaultOption="Select Auction"
        options={auctions.map(auction => ({
          value: auction.id,
          text: auction.name
        }))}
        onChange={onChange}
        error={errors.auction}
      />

      <SelectInput
        name="ItemId"
        label="Item"
        value={bid.ItemId || ""}
        defaultOption="Select Item"
        options={items.map(item => ({
          value: item.id,
          text: item.title
        }))}
        onChange={onChange}
        error={errors.item}
      />

      <TextInput
        name="Price"
        label="Price"
        value={bid.price}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

BidForm.propTypes = {
  items: PropTypes.array,
  users: PropTypes.array,
  auctions: PropTypes.array,
  
  bid: PropTypes.object,
  errors: PropTypes.object,
  onSave: PropTypes.func,
  handleUserChange: PropTypes.func,
  handleItemChange: PropTypes.func,
  handleAuctionChange: PropTypes.func,
  saving: PropTypes.bool
};

export default BidForm;
