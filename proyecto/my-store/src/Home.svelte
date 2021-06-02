<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import { productService } from './product.service';
  let demo = 10;
  let filter = '';
  let filtered = [];

  async function submit() {
    console.log(`Filtering ... ${filter}`);
    const ps = new productService();
    filtered = await ps.search(filter);
  }
</script>

<h1>Home</h1>

<form on:submit|preventDefault={submit}>
  <input type="search" bind:value={filter} />
  <button type="submit">Search</button>
</form>

{#if filtered && filtered.length > 0}
  <ul>
    {#each filtered as p}
      <li>
        <Link to="product/{p.id}">{p.productName}</Link>
      </li>
    {/each}
  </ul>
{/if}
