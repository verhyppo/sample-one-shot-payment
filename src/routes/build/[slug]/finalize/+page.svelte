<script>
  import { store } from "$lib/store/buildFlowStore";
  import { goto } from "$app/navigation";
  import Button from "@smui/button";

  /**
   * TIP: in this case we are opening a new page, but you could complete
   * your order in a Dialog, or whatever you prefer!
   */

  /** @type {import('./$types').PageData} */
  export let data;

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
        return json;
      });
    console.log(json);
    if (json.state == "REDIRECTED_TO_EXTERNAL_DOMAIN") {
      throw goto(json.url);
    }
  };
</script>

<div class="payment-form" id="payment-methods">
  <h1 class="payment-title">Your payment recap</h1>
  <div class="payment-content">
    <div>
      <h2>Thanks for buying at PICCOL E-SHOP</h2>
      <h3>
        your goods will arrive in 365 days directly at the address you haven't
        communicated
      </h3>
      <h3>Let's complete your payment</h3>
      <p>
        Would you like to complete the payment of {data.orderStatus.order
          .currency}
        {parseInt(data.orderStatus.order.amount) / 100}?
      </p>
    </div>
    <Button on:click={() => pay()} variant="raised" color="secondary"
      >I'm ready! Let's move on</Button
    >
  </div>
</div>
