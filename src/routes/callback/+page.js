/** @type {import('./$types').PageLoad} */

export async function load({ params, url }) {
  let code = url.searchParams.get("code");
  let state = url.searchParams.get("state");
  return { code, state };
}
