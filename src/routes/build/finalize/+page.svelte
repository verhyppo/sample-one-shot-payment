<div class="payment-form" id="payment-methods">
  <h1 class="payment-title">Finalize your payment</h1>
  <div class="payment-content"></div>
  <Button on:click={() => pay()} variant="raised" color="secondary">Finalize payment</Button>
</div>
</div>
<script>
  import { store } from "$lib/store/cardDataStore";
  import Button from "@smui/button";

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
</script>
