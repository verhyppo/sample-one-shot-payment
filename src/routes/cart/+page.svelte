<script>
    import Accordion, {Panel, Header, Content} from "@smui-extra/accordion";
    import {cart} from "$lib/store/cartStore";
    import PayInCart from "./_PayInCart.svelte";
</script>

<PayInCart/>
<div class="accordion-container">
    <div class="accordion-content">
        <Accordion>
            {#each $cart.items as {name, description, quantity, price}, i}
                <Panel>
                    <Header>{name}
                        <span slot="description">QTY: {quantity}</span>
                    </Header>
                    <Content>
                        {description}
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: inline-block;">
                                <div> € {quantity * price}</div>
                            </div>
                        </div>
                        {description}
                    </Content>
                </Panel>
            {/each}
        </Accordion>
    </div>
</div>

<style>
    .accordion-container {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .accordion-content {
        max-width: 640px;
        flex: 1;
    }
</style>
