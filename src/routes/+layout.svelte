<script>
  import {config} from "../staticConf"
  import {onMount} from 'svelte';
  import TopAppBar, {Row, Section, Title, AutoAdjust} from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let darkTheme = true;
  let topAppBar;

  $: modeLabel = `switch to ${darkTheme ? 'light' : 'dark'} mode`;

  // This icon represents the mode to which the user can switch.
  $: modeIcon = darkTheme ? 'light_mode' : 'dark_mode';

  onMount(() => {
    darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleMode = () => (darkTheme = !darkTheme);

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

<style>
 
 .top-app-bar-container {
    width: 100%;
    height:100%;
    background-color: var(--mdc-theme-background, #fff);
    overflow: auto;
    display: inline-block;
  }
 
  @media (max-width: 480px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }
 
  .flexy {
    display: flex;
    flex-wrap: wrap;
    height:100%;
  }
 
  .flexor {
    display: inline-flex;
    flex-direction: column;
  }
 
  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="/global.css"
  />
  {#if darkTheme === undefined}
  <link
    rel="stylesheet"
    href="/smui.css"
    media="(prefers-color-scheme: light)"
  />
  <link
    rel="stylesheet"
    href="/smui-dark.css"
    media="screen and (prefers-color-scheme: dark)"
  />
  {:else if darkTheme}
  <link rel="stylesheet" href="/smui.css" media="print" />
  <link rel="stylesheet" href="/smui-dark.css" media="screen" />
  {:else}
  <link rel="stylesheet" href="/smui.css" />
  {/if}
</svelte:head>
<div class="flexy">
  <div class="top-app-bar-container flexor">
    <TopAppBar bind:this="{topAppBar}" variant="static">
      <Row>
        <Section>
          <IconButton class="material-icons">menu</IconButton>
          <Title>Standard</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton
            aria-label="{modeLabel}"
            class="material-icons"
            on:click="{toggleMode}"
            title="{modeLabel}"
          >
            {modeIcon}
          </IconButton>
        </Section>
      </Row>
    </TopAppBar>
      <slot />
  </div>
</div>

