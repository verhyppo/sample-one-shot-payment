import orderService from "$lib/server/orderService";
import { error } from "@sveltejs/kit";

export async function GET({ params }) {
  let orderId = params.slug;
  const serverOrder = await orderService().serverOrder(orderId);
  return new Response(JSON.stringify(serverOrder));
}
