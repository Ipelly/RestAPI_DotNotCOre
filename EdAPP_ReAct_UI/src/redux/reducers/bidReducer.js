import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.bids, action) {
  switch (action.type) {
    case types.CREATE_BID:
      return [...state, { ...action.bid }];
    case types.LOAD_BID_SUCCESS:
      return action.bids;
    
    default:
      return state;
  }
}
