<h1> pay page </h1>

<LayoutGrid>
{#each data.fields as { id, type, src }, i}
<Cell span={3}>
    <iframe src="{src}" title="{type}"></iframe>
</Cell>
{/each}
</LayoutGrid>


<script>
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import {onMount} from 'svelte'
    import postMessageHelper from '$lib/postMessageHelper'

	/** @type {import('./$types').PageData} */
	export let data;
    
  onMount(()=>window.addEventListener('message',postMessageHelper))
        
</script>