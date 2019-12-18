import * as types from "./actionTypes";
import * as edAppApi from "../../api/edAppApi";

export function processBidItem(bid) {
  return { type: types.PROCESS_BID_ITEM, bid };
}

export function loadsolditemsuccess(solditems) {
  return { type: types.LOAD_SOLD_ITEM_SUCCESS, solditems };
}

export function loadsolditems() {
  return function(dispatch) {
    return edAppApi
      .getSoldItems
      .then(solditems => {
        // console.log('SoldItems', solditems);
        // var solditems = [
        //                 {
        //                     "id": "4d9de0c5-4dcf-4a26-0e6b-08d7835c4bb8",
        //                     "user": {
        //                         "id": "2902b665-1190-4c70-9915-b9c2d7680450",
        //                         "firstName": "Tom",
        //                         "lastName": "Singing",
        //                         "dateOfBirth": "1991-12-16T00:00:00+01:00"
        //                     },
        //                     "userId": "2902b665-1190-4c70-9915-b9c2d7680450",
        //                     "item": {
        //                         "id": "d8663e5e-7494-4f81-8739-6e0de1bea7ee",
        //                         "title": "Airbus",
        //                         "description": "Overthrowing Mutiny",
        //                         "stock": 5,
        //                         "initPrice": 20000,
        //                         "isSold": true
        //                     },
        //                     "itemId": "d8663e5e-7494-4f81-8739-6e0de1bea7ee"
        //                 }
        //             ];
        dispatch(loadsolditemsuccess(solditems));
      })
      .catch(error => {
        throw error;
      });
  };
}
