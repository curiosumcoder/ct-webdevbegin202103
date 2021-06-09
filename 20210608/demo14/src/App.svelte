<script>
	export let name;
	let times = 1;
	$: message = `You click me! ${times} times`;

	function onClickMe(event) {
		alert(message);
		times++;
	}
</script>

<main>
	<h1>Hola {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">
		Svelte tutorial</a> to learn how to build Svelte apps.
	</p>
	<hr/>
	<p style="color: red;">Esta es una prueba</p>
	<button on:click={onClickMe}>Demo</button>
	<p>{times}</p>
	<input type="number" bind:value={times} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: cornsilk;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>