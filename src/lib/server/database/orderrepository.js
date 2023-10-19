import { supabase } from "$lib/supabaseClient";

export async function saveOrder(correlationId, order) {
  const { data, error } = await supabase.from("orders").insert({
    order_id: order.order.orderId,
    trace_id: correlationId,
    order: order,
  });
  console.log("data", data, error);
}
export async function upsertOrder(orderId, response, ack) {
  const { data, error } = await supabase
    .from("orders")
    .upsert({ orderId: orderId, response: response, ack: true })
    .eq("order_id", orderId);
  console.log(data, error);
}
