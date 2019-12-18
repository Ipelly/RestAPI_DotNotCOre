import * as types from "./actionTypes";
import * as edAppApi from "../../api/edAppApi";

export function createBid(bid) {
  return { type: types.CREATE_BID, bid };
}

export function loadbidsuccess(bids) {
  return { type: types.LOAD_BID_SUCCESS, bids };
}

export function loaditemsuccess(items) {
  return { type: types.LOAD_BID_SUCCESS, items };
}

export function loadusersuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function savebid() {
  return function(dispatch) {
    return edAppApi
      .saveBid
      .then(bid => {
        console.log('bid', bid);
        dispatch(createBid(bid));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadbids() {
  return function(dispatch) {
    return edAppApi
      .getBids
      .then(bids => {
        console.log('Bids', bids);
        dispatch(loadbidsuccess(bids));
      })
      .catch(error => {
        throw error;
      });
  };
}



var resultBids = [
  {
      "id": "4dd6bac4-008c-4432-91d3-08d7834d82f4",
      "price": 30000,
      "auction": {
          "id": "5b4f5207-ecca-468e-00ed-08d7834d7358",
          "name": "Auction - Jan",
          "startDate": "2020-01-01T00:00:00-05:00",
          "endDate": "2020-01-28T00:00:00-05:00"
      },
      "auctionId": "5b4f5207-ecca-468e-00ed-08d7834d7358",
      "item": {
          "id": "d8663e5e-7494-4f81-8739-6e0de1bea7ee",
          "title": "Airbus",
          "description": "Overthrowing Mutiny",
          "stock": 5,
          "initPrice": 20000,
          "isSold": false
      },
      "itemId": "d8663e5e-7494-4f81-8739-6e0de1bea7ee",
      "user": {
          "id": "2902b665-1190-4c70-9915-b9c2d7680450",
          "firstName": "Tom",
          "lastName": "Singing",
          "dateOfBirth": "1991-12-16T00:00:00+01:00"
      },
      "userId": "2902b665-1190-4c70-9915-b9c2d7680450"
  }
];


