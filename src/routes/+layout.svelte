<script>
  import "../app.scss";
  import Nav from "./_Nav.svelte";
  import ErrorSnackbar from "./_ErrorSnackbar.svelte"
</script>


    <ErrorSnackbar></ErrorSnackbar>
    <Nav></Nav>
    <slot></slot>

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
