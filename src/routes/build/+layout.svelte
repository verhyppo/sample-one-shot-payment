<script>
  import postMessageHelper from "$lib/postMessageHelper";
  /**
   * Mount the listener for postevent messages
   */
  onMount(() => window.addEventListener("message", postMessageHelper));
</script>
