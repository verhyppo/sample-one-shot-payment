<script>
  import { goto } from "$app/navigation";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { onMount } from "svelte";
  import postMessageHelper from "$lib/postMessageHelper";
  import { store } from "$lib/store/cardDataStore";

  /** @type {import('./$types').PageData} */
  export let data;
  store.setSessionId(data.sessionId);

  onMount(() => window.addEventListener("message", postMessageHelper));

  store.subscribe(value => {
      if (value.paymentStatus == "READY_FOR_PAY") {
        throw goto("/build/finalize");
      }
    }
  );
</script>

<div class="payment-form" id="payment-methods">
  <h1 class="payment-title">pay page</h1>
  <div class="payment-content">
    {#each data.fields as { id, type, src }, i}
      <div class="payment-field" {id}>
        <iframe {src} title={type}></iframe>
      </div>
    {/each}
  </div>
</div>
