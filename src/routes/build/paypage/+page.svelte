<script>
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { onMount } from "svelte";
  import postMessageHelper from "$lib/postMessageHelper";
  import { store } from "$lib/store/cardDataStore";

  /** @type {import('./$types').PageData} */
  export let data;
  store.setSessionId(data.sessionId);

  onMount(() => window.addEventListener("message", postMessageHelper));
</script>

<h1>pay page</h1>

<LayoutGrid>
  {#each data.fields as { id, type, src }, i}
    <Cell span={3}>
      <iframe {src} title={type}></iframe>
    </Cell>
  {/each}
</LayoutGrid>
