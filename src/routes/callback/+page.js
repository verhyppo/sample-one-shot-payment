import {clientID, verifier} from '$lib/client.config'
/** @type {import('./$types').PageLoad} */

export async function load({ params, url }) {
  let code = url.searchParams.get("code");
  let state = url.searchParams.get("state");
  let accessToken = doPost(code);
  return { accessToken };
}

async function doPost(code) {
  const res = await fetch(
    "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        client_id: clientID,
        scope: "openid user.read",
        redirect_uri: "http://localhost:5173/callback",
        grant_type: "authorization_code",
        code_verifier: verifier,
        code: code
      }) 
    }
  );

  const json = await res.json();
  console.log(json)
  return json.access_token;
}