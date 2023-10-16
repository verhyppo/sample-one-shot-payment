<script>
  import Nav from "$lib/components/Nav.svelte";
</script>

<div class="flexy">
  <div class="top-app-bar-container flexor">
    <Nav />
    <slot />
  </div>
</div>

<style>
  .top-app-bar-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: inline-block;
  }
  @media (max-width: 480px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }
</style>
