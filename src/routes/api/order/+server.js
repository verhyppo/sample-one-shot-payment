import orderService from "$lib/server/orderService";
import { error } from "@sveltejs/kit";

export async function GET({ url }) {
  let orderId = url.searchParams.get("orderId");
  return orderService()
    .serverOrder(orderId)
    .then((json) => new Response(JSON.stringify(json)))
    .catch((e) => {
      throw error(400, JSON.stringify(e));
    });
}
