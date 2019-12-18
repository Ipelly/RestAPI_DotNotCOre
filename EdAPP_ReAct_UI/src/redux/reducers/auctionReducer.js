import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.auctions, action) {
  switch (action.type) {
    case types.CREATE_AUCTION:
      return [...state, { ...action.course }];
    case types.LOAD_AUCTION_SUCCESS:
      return action.auctions;
    default:
      return state;
  }
}
