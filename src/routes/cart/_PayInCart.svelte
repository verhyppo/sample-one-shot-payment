
<div class="card-container">
    <Card>
        <Content>Pay your order of € {$cart.total.toFixed(2)} as you prefer</Content>
        <Actions>
        <Button on:click={() => cart.clear()} variant="raised" color="secondary">
            <Label>Clear</Label>
        </Button>
        <Button on:click={() => pay()} disabled='{$cart.total <=0}' variant="outlined">
            <Label>PAY WITH HOSTED PAYMENT PAGE</Label>
        </Button>
        <Button on:click={() => build()} disabled='{$cart.total <=0}' variant="outlined">
            <Label>PAY WITH BUILD API</Label>
        </Button>
        <Button on:click={() => pbl()} disabled='{$cart.total <=0}' variant="outlined">
            <Label>ASK SOMEONE TO PAY FOR YOU (PAYBYLINK)</Label>
        </Button>
        </Actions>
    </Card>
</div>
<PayForMe dialogText={pblurl} open={openDialog}/>
<script>
import Card, {
    Content,
    Actions,
} from '@smui/card';
import PayForMe from './_PayForMe.svelte'
import Button, { Label } from '@smui/button';
import {goto} from '$app/navigation'

import { cart } from '$lib/store/cartStore';

let pblurl;
let openDialog=false;
function build() {
    throw goto(`build/carddata?amount=${$cart.total}`)
}

async function pay() {
  let url = await fetch(`/api/pay?amount=${$cart.total}`)
  .then((data) => data.json())
  .then((json) => json.hostedPage);
  throw goto(url)
}
async function pbl() {
  pblurl = await fetch(`/api/pbl?amount=${$cart.total}`)
  .then((data) => data.json())
  .then((json) => json.paymentLink.link);
  openDialog=true;
}
</script>