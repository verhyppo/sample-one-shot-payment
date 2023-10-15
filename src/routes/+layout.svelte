<script>
  import {config} from "../staticConf"
  import "../app.css"

  export let generateMicrosoftLoginUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?\
            client_id=719d34c4-8b45-40c2-b436-bbcb176580a4\
            &response_type=code\
            &redirect_uri=http%3A%2F%2Flocalhost:5173%2Fcallback%2F\
            &response_mode=query\
            &scope=openid%20user.read\
            &state=12345\
            &code_challenge=${config.challenge}\
            &code_challenge_method=S256`;
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
  <a href={generateMicrosoftLoginUrl}>Signin</a>
</nav>

<slot />
