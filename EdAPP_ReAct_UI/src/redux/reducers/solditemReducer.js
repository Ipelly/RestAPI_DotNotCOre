import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.solditems, action) {
  switch (action.type) {
    case types.PROCESS_BID_ITEM:
      return [...state, { ...action.solditem }];
    case types.LOAD_SOLD_ITEM_SUCCESS:
      return action.solditems;
    default:
      return state;
  }
}
