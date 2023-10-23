<script>
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { cart } from "$lib/store/cartStore";
  import { products} from "./products.js";

</script>

<LayoutGrid>
  <Cell span={1}>
    <div class="demo-cell"></div>
  </Cell>
  <Cell span={10}>
        <LayoutGrid>
          {#each products as product, i}
          <Cell span={6}>
          <Card>
            <PrimaryAction
              on:click={() =>
                cart.addItem(product)}
            >
              <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({product.image});">
                <MediaContent>
                  <div
                    style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
                  ></div>
                </MediaContent>
              </Media>
              <Content class="mdc-typography--body2">€ {parseFloat(product.price).toFixed(2)}</Content>
            </PrimaryAction>
            <Actions>
              <ActionButtons>
                <Button
                  on:click={() =>
                    cart.addItem(product)}
                >
                  <Label>Add to Cart</Label>
                </Button>
                <Button
                  on:click={() =>
                    cart.removeItem(product.id)}>
                  <Label>Remove</Label>
                </Button>
              </ActionButtons>
            </Actions>
          </Card>
      
        </Cell>
        {/each}
      </LayoutGrid>
  </Cell>

  <Cell span={1}>
    <div class="demo-cell"></div>
  </Cell>
</LayoutGrid>
