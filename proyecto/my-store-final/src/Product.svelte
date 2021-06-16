<script>
	import { Route, Link } from "svelte-navigator";
	import { productService } from './product.service';

	export let id;
	
	const ps = new productService();
	let p = ps.find(id);
	console.log(p);

</script>

<h1>Product: {id}</h1>

{#await p}
	<p>Procesando ...</p>
{:then data} 
	<p>{data.productName}<br/>{data.unitPrice}</p>
{/await}