/** @type {import('./$types').PageLoad} */

export async function load({ params, url }) {
  let paymentid = url.searchParams.get("paymentid");
  return { paymentid };
}
