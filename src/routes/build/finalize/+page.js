import { error } from "@sveltejs/kit";
import { store } from "$lib/store/buildFlowStore";

/** @type {import('./$types').PageLoad} */

export async function load({ params, url, fetch }) {
  const orderId = store.orderId;
  const json = await fetch(`/api/order/${orderId}`)
    .then((data) => data.json())
    .catch((e) => {
      throw error(400, e);
    });
  return json;
}
