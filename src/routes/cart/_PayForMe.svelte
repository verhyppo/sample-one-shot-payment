<script>
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  import CopyToClipboard from "svelte-copy-to-clipboard";
  import { onMount } from "svelte";
  import { cart } from "$lib/store/cartStore";

  export let dialogText = "Copy me!";
  export let open = false;

  const handleSuccessfullyCopied = (e) => {
    alert(`successfully copied to clipboard! ${e}`);
  };

  const handleFailedCopy = () => {
    alert("failed to copy :(");
  };
</script>

<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <Title id="simple-title">Share the link</Title>
  <Content id="simple-content">
    <a href={dialogText}>{dialogText}</a>
  </Content>
</Dialog>
 <!-- <CopyToClipboard
      text={dialogText}
      on:copy={handleSuccessfullyCopied}
      on:fail={handleFailedCopy}
      let:onCopy
    >
      <Button on:click={onCopy}>An element to trigger the copy</Button>     </CopyToClipboard>
-->
