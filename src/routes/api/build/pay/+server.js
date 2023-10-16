import { error } from "@sveltejs/kit";
import { pay } from "$lib/server/spi/buildIntegration/internal";

export async function POST(event) {
  const data = await event.request.json();

  return pay(data)
    .then((json) => new Response(JSON.stringify(json)))
    .catch((e) => {
      console.log(e);
      throw error(e.status, JSON.stringify(e));
    });
}
