<script>
  import Card, { Content } from "@smui/card";
  import LayoutGrid, { Cell } from "@smui/layout-grid";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="card-container">
  <Card padded>Your Payment has been confirmed</Card>
</div>
<LayoutGrid>
<Cell span={6}>
  <h1>Data coming from XPAY API</h1>
  <pre>{JSON.stringify(data.server, null, 2)}</pre>
</Cell>
<Cell span={6}>
  <h1>Data coming from XPAY notification</h1>
  <pre>{JSON.stringify(data.db?.response, null, 2)}</pre>
</Cell>
</LayoutGrid>
<style>
  .card-container {
    margin: 0 auto;
    max-width: 480px;
    margin-top: 30px;
  }
</style>
