<script>
  import postMessageHelper from "$lib/postMessageHelper";
  import { onMount } from "svelte";

  /**
   * Mount the listener for postevent messages
   */
  onMount(() => window.addEventListener("message", postMessageHelper));
</script>
<slot />
