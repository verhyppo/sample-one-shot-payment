import orderService from "$lib/server/orderService";
import { error } from "@sveltejs/kit";

export async function GET({ url }) {
  let orderId = url.searchParams.get("orderId");
  const serverOrder = await orderService().serverOrder(orderId);
  const [dbOrder] = await orderService().dbOrder(orderId) || [];
  return new Response(JSON.stringify({server: serverOrder, db: dbOrder}));
}
