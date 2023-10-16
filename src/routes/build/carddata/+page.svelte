<script>
  import { store } from "$lib/store/cardDataStore";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Button from "@smui/button";

  const pay = async () => {
    json = await fetch("/api/build/pay", {
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
  const dismiss = () => {};
</script>

<h1>insert card data</h1>
<form>
  <LayoutGrid>
    {#each $store.fields as { id, type, src }, i}
      <Cell span={3}>
        <iframe {src} title={type}></iframe>
      </Cell>
    {/each}
    {$store.paymentStatus}
    <Button on:click={() => pay()} variant="raised">Pay</Button>
    <Button on:click={() => dismiss()} variant="raised" color="secondary"
      >Dismiss</Button
    >
  </LayoutGrid>
</form>
