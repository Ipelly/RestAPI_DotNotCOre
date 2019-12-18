import { combineReducers } from "redux";
import auctions from "./auctionReducer";
import bids from "./bidReducer";
import solditems from "./solditemReducer";
import items from "./itemReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
  auctions,
  bids,
  solditems,
  items,
  users
});

export default rootReducer;
