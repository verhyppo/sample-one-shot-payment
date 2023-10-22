<script>
  import { store } from "$lib/store/buildFlowStore";
  import Button from "@smui/button";
  import { goto } from "$app/navigation";

  const pay = () => {
    goto(`/build/${$store.orderId}/finalize`);
  };
  const dismiss = () => {};
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
        <Button
          on:click={() => pay()}
          variant="raised"
          disabled={$store.paymentStatus !== "READY_FOR_PAY"}>Pay</Button
        >
        <Button on:click={() => dismiss()} variant="raised" color="secondary"
          >Dismiss</Button
        >
      </div>
    </div>
  </div>
</form>
