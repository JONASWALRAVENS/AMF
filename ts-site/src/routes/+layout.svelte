<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/lineup">Lineup</a>
	<a href="/tickets">Tickets</a>
</nav>

{@render children()}

<style>
	nav {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 32px 0 0 0;
	}

	nav a {
		color: white;
		text-decoration: none;
		margin: 0 10px;
	}
</style>
