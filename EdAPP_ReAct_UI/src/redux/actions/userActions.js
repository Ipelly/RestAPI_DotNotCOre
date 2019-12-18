import * as types from "./actionTypes";
import * as edAppApi from "../../api/edAppApi";


export function loadusersuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}


export function loadusers() {
  return function(dispatch) {
    return edAppApi
      .getUsers
      .then(Users => {
        console.log('Users', Users);
        dispatch(loadusersuccess(Users));
      })
      .catch(error => {
        throw error;
      });
  };
}



var resultUsers = [
  {
      "id": "2902b665-1190-4c70-9915-b9c2d7680450",
      "firstName": "Tom",
      "lastName": "Singing",
      "dateOfBirth": "1991-12-16T00:00:00+01:00"
  },
  {
      "id": "da2fd609-d754-4feb-8acd-c4f9ff13ba96",
      "firstName": "Steve",
      "lastName": "Jobs",
      "dateOfBirth": "1968-05-21T00:00:00+02:00"
  },
  {
      "id": "d28888e9-2ba9-473a-a40f-e38cb54f9b35",
      "firstName": "Bill",
      "lastName": "gates",
      "dateOfBirth": "1970-07-23T00:00:00+02:00"
  }
];
