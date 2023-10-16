<PayInCart/>
<div class="accordion-container">
    <div class="accordion-content">
    <Accordion>
        {#each $cart.items as { name, description }, i}
        <Panel>
            <Header>{name}</Header>
            <Content>
            {description}
            </Content>
        </Panel>
        {/each}
    </Accordion>
</div>
  </div>
  
  <script>
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import { cart } from '$lib/store/cartStore';
    import Tooltip, { Wrapper } from '@smui/tooltip';
    import { Action } from '@smui/banner';
    import Banner, { Label } from '@smui/banner';
    import Button from '@smui/button';
    import { redirect } from '@sveltejs/kit';
    import PayInCart from '$lib/components/PayInCart.svelte'

  </script>
  
  <style>
    .accordion-container {
        display: flex;
        justify-content: center;
    }
    .accordion-content {
        max-width: 640px;
        flex: 1;
    }
</style>