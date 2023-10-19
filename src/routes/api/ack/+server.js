import { upsertOrder } from "$lib/server/database/orderrepository";
export async function POST(event) {
  const data = await event.request.json();
  return upsertOrder(data.operation.orderId, data, true).then(
    () =>
      new Response(JSON.stringify({ message: "CIAO BRUS! CIAO EMA!" }), {
        status: 200,
      }),
  );
}
