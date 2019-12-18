import * as types from "./actionTypes";
import * as edAppApi from "../../api/edAppApi";


export function loaditemsuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}


export function loaditems() {
  return function(dispatch) {
    return edAppApi
      .getItems
      .then(items => {
        console.log('items', items);
        dispatch(loaditemsuccess(items));
      })
      .catch(error => {
        throw error;
      });
  };
}

var resultItems = [
  {
      "id": "d8663e5e-7494-4f81-8739-6e0de1bea7ee",
      "title": "Airbus",
      "description": "Overthrowing Mutiny",
      "stock": 5,
      "initPrice": 20000,
      "isSold": false
  },
  {
      "id": "5b1c2b4d-48c7-402a-80c3-cc796ad49c6b",
      "title": "Computer",
      "description": "Commandeering a Ship Without Getting Caught",
      "stock": 10,
      "initPrice": 2000,
      "isSold": false
  },
  {
      "id": "d173e20d-159e-4127-9ce9-b0ac2564ad97",
      "title": "Robot",
      "description": "Avoiding Brawls While Drinking as Much Rum as You Desire",
      "stock": 3,
      "initPrice": 200000,
      "isSold": false
  }
];

