
<div class="card-container">
    <Card>
        <Content>Pay your order as you prefer</Content>
        <Actions>
        <Button on:click={() => $cart.clear} >
            <Label>Clear</Label>
        </Button>
        <Button on:click={() => pay()} disabled='{$cart.total <=0}'>
            <Label>PAY WITH HOSTED PAYMENT PAGE {$cart.total.toFixed(2)}</Label>
        </Button>
        <Button on:click={() => build()} disabled='{$cart.total <=0}'>
            <Label>PAY WITH BUILD {$cart.total.toFixed(2)}</Label>
        </Button>
        <Button on:click={() => pbl()} disabled='{$cart.total <=0}'>
            <Label>PAYBYLINK {$cart.total.toFixed(2)}</Label>
        </Button>
        </Actions>
    </Card>
</div>
<script>
import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
} from '@smui/card';
import Button, { Label } from '@smui/button';
import {goto} from '$app/navigation'

import { cart } from '$lib/store/cartStore.js';


function build() {
    //store the order
    throw goto('build/paypage')
}

async function pay() {
  let url = await fetch(`/api/pay?amount=${$cart.total}`)
  .then((data) => data.json())
  .then((json) => json.hostedPage);
  throw goto(url)
}
async function pbl() {
  let url = await fetch(`/api/pbl?amount=${$cart.total}`)
  .then((data) => data.json())
  .then((json) => json.paymentLink.link);
  throw goto(url)
}
</script>