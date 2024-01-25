import { supabase } from "$lib/supabaseClient";

export const saveOrder = async (correlationId, order) => {
  const { data, error } = await supabase.from("orders").insert({
    order_id: order.operation.orderId,
    trace_id: correlationId,
    order: order,
  });
  console.log("data", data, error);
}
export const upsertOrder = async (orderId, response, ack) => {
  const { data, error } = await supabase
    .from("orders")
    .select()
    .eq("order_id", orderId);

  const [selectData] = data || [];

  const { data: upsertData, error: upsertError } =
    selectData &&
    (await supabase.from("orders").upsert({
      id: selectData.id,
      order_id: orderId,
      response: response,
      ack: true,
    }));
  console.log(upsertData, upsertError);
}
export const getOrder = async (orderId) => {
  const { data, error } = await supabase
    .from("orders")
    .select()
    .eq("order_id", orderId);
  
  return data; 
} 
