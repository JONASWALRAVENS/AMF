<script>
	import Logo from '$lib/assets/amf_logo_white.png';
</script>

<div>
	<main>
		<img class="amf-logo" src={Logo} alt="Antwerp Metal Fest Logo" />
	</main>
</div>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: start;
		height: 100svh;
	}

	.amf-logo {
		width: 100%;
		max-width: 440px;
	}
</style>
