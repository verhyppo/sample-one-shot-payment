/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.route.id && event.route.id.indexOf("(protected)") > 0) {
    return new Response("Authentication required");
  }
  return await resolve(event);
}
