<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./Home.svelte";
	import Product from "./Product.svelte";
	import About from "./About.svelte";
	import Contact from "./Contact.svelte";
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="contact">Contact</Link>
	</nav>
	<div>
		<Route path="/">
			<Home />
		</Route>
		<Route path="product/*">
			<Route path=":id" component={Product} />
		</Route>
		<Route path="about" component={About} />
		<Route path="contact" component={Contact} />
	</div>
</Router>