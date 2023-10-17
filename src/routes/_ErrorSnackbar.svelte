<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import Kitchen from "@smui/snackbar/kitchen";
  import Button, { Label } from "@smui/button";
  import pushToKitchen, { container } from "$lib/store/errorStore";

</script>

<Kitchen bind:this={container.kitchen} dismiss$class="material-icons" />


