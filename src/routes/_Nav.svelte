<script>
  import { clientID, challenge, redirect_uri } from "$lib/client.config";
  import { onMount } from "svelte";
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  let topAppBar;

  $: modeLabel = `switch to ${darkTheme ? "light" : "dark"} mode`;
  let darkTheme=false;
  // This icon represents the mode to which the user can switch.
  $: modeIcon = darkTheme ? "light_mode" : "dark_mode";

  const toggleMode = () => (darkTheme = !darkTheme);

  export let generateMicrosoftLoginUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirect_uri}&response_mode=query&scope=openid%20user.read&state=12345&code_challenge=${challenge}&code_challenge_method=S256`;
</script>

<svelte:head>
  <link rel="stylesheet" href="/global.css" />
  {#if darkTheme === undefined}
    <link
      rel="stylesheet"
      href="/smui.css"
    />
    <link
      rel="stylesheet"
      href="/smui-dark.css"
    />
  {:else if darkTheme}
    <link rel="stylesheet" href="/smui.css" media="print" />
    <link rel="stylesheet" href="/smui-dark.css" media="screen" />
  {:else}
    <link rel="stylesheet" href="/smui.css" />
  {/if}
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="static">
  <Row>
    <Section>
      <IconButton href="/" class="material-icons">home</IconButton>
      <Title>Piccol Marketplace</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton href="/cart" class="material-icons">shopping_cart</IconButton>
      <IconButton
        aria-label={modeLabel}
        class="material-icons"
        on:click={toggleMode}
        title={modeLabel}
      >
        {modeIcon}
      </IconButton>
      <!--IconButton href={generateMicrosoftLoginUrl} class="material-icons"
        >login</IconButton-->
    </Section>
  </Row>
</TopAppBar>

<style>
</style>
