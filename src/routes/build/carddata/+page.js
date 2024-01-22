import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */

export async function load({ params, url, fetch }) {
  let amount = url.searchParams.get("amount");
  let json = await fetch(`/api/build/init?amount=${amount}`)
    .then((data) => data.json())
    .catch((e) => {
      throw error(400, e);
    });
  return json;
}
