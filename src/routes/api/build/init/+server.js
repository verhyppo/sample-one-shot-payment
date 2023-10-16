import { error } from "@sveltejs/kit";
import { getPayPageData } from "$lib/server/spi/buildIntegration/internal";

export async function GET({ url }) {
  let amount = url.searchParams.get("amount");
  return getPayPageData(url.origin, amount)
    .then((json) => new Response(JSON.stringify(json)))
    .catch((e) => {
      throw error(e.status, JSON.stringify(e));
    });
}
