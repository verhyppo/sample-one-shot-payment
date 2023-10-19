import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */

export async function load({ params, url, fetch }) {
  let orderId = url.searchParams.get("orderId");
  let json = await fetch(`/api/order?orderId=${orderId}`)
    .then((data) => data.json())
    .catch((e) => {
      throw error(400, e);
    });
  return json;
}