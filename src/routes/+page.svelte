<LayoutGrid>
    <Cell span={3}>
        <div class="demo-cell"></div>
    </Cell>
    <Cell span={6}>
      <div class="card-display">
        <div class="card-container">
            <Card>
              <PrimaryAction on:click={() => cart.addItem({id: '1', name: 'ciao', description: 'pippo', price: 10})}>
                <Media class="card-media-16x9" aspectRatio="16x9">
                  <MediaContent>
                    <div
                      style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
                    >
                      <h2 class="mdc-typography--headline6" style="margin: 0;">
                        A card with media.
                      </h2>
                      <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                        And a subtitle.
                      </h3>
                    </div>
                  </MediaContent>
                </Media>
                <Content class="mdc-typography--body2">
                  It's all in this card. It's a veritable smorgasbord of card features.
                </Content>
              </PrimaryAction>
              <Actions>
                <ActionButtons>
                  <Button on:click={() => cart.addItem({id: '1', name: 'ciao', description: 'pippo', price: 10})}>
                    <Label>Add to Cart</Label>
                  </Button>
                  <Button on:click={() => cart.addItem({id: '1', name: 'ciao', description: 'pippo', price: 10})}>
                    <Label>Another</Label>
                  </Button>
                </ActionButtons>
              </Actions>
            </Card>
          </div>
      </div>
  </Cell>

  <Cell span={3}>
    <div class="demo-cell"></div>
  </Cell>
</LayoutGrid> 
<script lang="ts">
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import {cart} from '$lib/store/cartStore'

</script>
<style>
  * :global(.card-media-16x9) {
    background-image: url(https://placehold.co/320x180?text=16x9);
  }
</style>