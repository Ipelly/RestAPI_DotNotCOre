

import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/courses/";

export function getUsers() {
  return fetch(`${process.env.API_URL}/users`)
    .then(handleResponse)
    .catch(handleError);
}
export function getItems() {
  return fetch(`${process.env.API_URL}/items`)
    .then(handleResponse)
    .catch(handleError);
}

export function getAucitons() {
  return fetch(`${process.env.API_URL}/auctions`)
    .then(handleResponse)
    .catch(handleError);
}

export function getBids() {
  return fetch(`${process.env.API_URL}/bids`)
    .then(handleResponse)
    .catch(handleError);
}

export function getSoldItems() {
  return fetch(`${process.env.API_URL}/solditems`)
    .then(handleResponse)
    .catch(handleError);
}

export function saveBid(bid) {
  return fetch(`${process.env.API_URL}/bids` , {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bid)
  })
    .then(handleResponse)
    .catch(handleError);
}
