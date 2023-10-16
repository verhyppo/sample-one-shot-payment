<h1>insert card data</h1>
<form>
<LayoutGrid>
    {#each $store.fields as { id, type, src }, i}
    <Cell span={3}>
        <iframe src="{src}" title="{type}"></iframe>

    </Cell>
    {/each}
    {$store.paymentStatus}
    <Button on:click={() => pay()} variant="raised">Pay</Button>
    <Button on:click={() => dismiss()} variant="raised" color="secondary">Dismiss</Button>
</LayoutGrid>
</form>
<script>
    import {store} from '$lib/store/cardDataStore'
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Button from '@smui/button';
    


const pay = () => {

}
const dismiss = () => {

}
</script>