<script>
  import { goto } from "$app/navigation";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { onMount, onDestroy } from "svelte";
  import { store } from "$lib/store/buildFlowStore";

  /** @type {import('./$types').PageData} */
  export let data;
  let unsubscribe;
  store.setOrderId(data.orderId);
  store.setSessionId(data.sessionId);

  /**
   * During the initial page, when the user selects
   * alternative payment methods, we receive a message
   * that allows us to finalize the payment.
   * In this case we jump to the last one
   **/

  $: if ($store.paymentStatus == "READY_FOR_PAY") {
    throw goto(`/build/${$store.orderId}/finalize`);
  }
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
