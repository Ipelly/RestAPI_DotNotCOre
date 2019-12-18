import * as types from "./actionTypes";
import * as edAppApi from "../../api/edAppApi";

export function createAuction(auction) {
  return { type: types.CREATE_AUCTION, auction };
}

export function loadauctionsuccess(auctions) {
  return { type: types.LOAD_AUCTION_SUCCESS, auctions };
}

export function loadauctions() {
  return function(dispatch) {
    return edAppApi
      .getAucitons()
      .then(auctions => {
        //console.log('auctions', auctions);
        // var auctions = [
        //   {
        //   "id": "e1d04edf-8ef1-400a-5c81-08d7835c2e30",
        //   "name": "Auction - Jan",
        //   "startDate": "2020/01/01",
        //   "endDate": "2020/01/28"
        //   }
      //];
        dispatch(loadauctionsuccess(auctions));
      })
      .catch(error => {
        throw error;
      });
  };
}
