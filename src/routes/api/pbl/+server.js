import { error } from "@sveltejs/kit";
import payService from "$lib/server/payService";

export async function GET({ url }) {
  let amount = url.searchParams.get("amount");
  return payService
    .pbl(url.origin, amount)
    .then((json) => new Response(JSON.stringify(json)))
    .catch((e) => {
      throw error(400, JSON.stringify(e));
    });
}
