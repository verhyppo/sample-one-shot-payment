<script>
  import { store } from "$lib/store/cardDataStore";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Button from "@smui/button";
  import { onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import Card, { Content } from "@smui/card";

  onDestroy(() => {
    store.clear();
  });

  const pay = async () => {
    const json = await fetch("/api/build/pay", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ sessionId: $store.sessionId }),
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        return json;
      });
    console.log(json);
    if (json.state === "REDIRECTED_TO_EXTERNAL_DOMAIN") {
      throw goto(json.url);
    }
  };
  const dismiss = () => {

  };
</script>

<form>
  <div class="payment-form">
    <h1 class="payment-title">insert card data</h1>
    <div class="payment-content">
      {#each $store.fields as { id, type, src }, i}
        <div class="payment-field" {id}>
          <iframe {src} title={type}></iframe>
        </div>
      {/each}

      <div class="payment-buttons">
        <Button on:click={() => pay()} variant="raised" disabled={$store.paymentStatus!=="READY_FOR_PAY"}>Pay</Button>
        <Button on:click={() => dismiss()} variant="raised" color="secondary"
          >Dismiss</Button
        >
      </div>
    </div>
  </div>
</form>
