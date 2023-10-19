import { error } from "@sveltejs/kit";
import {upsertOrder} from "$lib/server/database/orderrepository"
export async function POST(event) {
  const data = await event.request.json();
  console.log(data);
  upsertOrder(data.order.orderId, data, true);
  return new Response(JSON.stringify({ message: "CIAO BRUS! CIAO EMA!" }), { status: 200 }) 
}
