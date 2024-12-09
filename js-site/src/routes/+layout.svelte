<script>
  let { children } = $props();
</script>

<nav>
  <a href="/">home</a>
  <a href="/lineup">lineup</a>
</nav>

{@render children()}