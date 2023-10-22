import { error } from "@sveltejs/kit";
import { store } from "$lib/store/cardDataStore";

/** @type {import('./$types').PageLoad} */

export async function load({ params, url, fetch }) {
  let orderId = store.orderId;
  let json = await fetch(`/api/order/${orderId}`)
    .then((data) => data.json())
    .catch((e) => {
      throw error(400, e);
    });
  return json;
}
