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
  .from('countries')
  .select()
  .eq("order_id", orderId);

  const { data:upsertData, error:upsertError } = await supabase
    .from("orders")
    .upsert({ id: data[0].id, order_id: orderId, response: response, ack: true })
  console.log(upsertData, upsertError);
}
