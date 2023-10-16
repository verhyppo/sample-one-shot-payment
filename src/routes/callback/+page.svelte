<script>
  import { config } from "../../staticConf";

  /** @type {import('./$types').PageData} */
  export let data;


  async function doPost() {
    const res = await fetch(
      "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
          client_id: "719d34c4-8b45-40c2-b436-bbcb176580a4",
          scope: "openid user.read",
          redirect_uri: "http://localhost:5173/callback",
          grant_type: "authorization_code",
          code_verifier: config.verifier,
          code: data.code
        }) 
      }
    );

    const json = await res.json();
    const result = JSON.stringify(json);
    let access_token = result.access_token;
  }
  doPost();
</script>

<h1>About me</h1>
<p>receiving your code!!</p>
<p>{data.code}</p>
<p>{data.state}</p>
