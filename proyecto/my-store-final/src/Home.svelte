<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import { productService } from './product.service';
  import { onMount } from 'svelte';

  let demo = 10;
  let filter = '';
  let filtered = [];
  let offer = {};

  const ps = new productService();

	onMount(async () => {
    console.log('onMount!');
    offer = await ps.offer();
    console.log(offer);
	});

  async function submit() {
    console.log(`Filtering ... ${filter}`);
    filtered = await ps.search(filter);
  }
</script>

<h1>Home</h1>

<p>Oferta: <small>{offer?.productName ?? 'Procesando ...'}</small></p>

<form on:submit|preventDefault={submit}>
  <input type="search" bind:value={filter} />
  <button type="submit">Search</button>
</form>

{#if filtered && filtered.length > 0}
  <ul>
    {#each filtered as product}
      <li>
        <Link to="product/{product.id}">{product.productName}</Link>
      </li>
    {/each}
  </ul>
{/if}
