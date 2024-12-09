<script>
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const bands = derived(page, ($page) => $page.data.bands);
</script>

<h1>Festival Lineup</h1>

{#if $bands && $bands.length > 0}
  <div class="lineup">
    {#each $bands as band}
      <div class="band-card">
        <h2>{band.name}</h2>
        <img class="logo" src={band.logoUrl} alt={band.name + ' logo'} />
        <img class="image" src={band.imageUrl} alt={band.name + ' logo'} />
        <p>{band.bio}</p>
        <p><strong>Genre:</strong> {band.genre}</p>
        <p><strong>Performance:</strong> {new Date(band.schedule).toLocaleString()}</p>
        {#if band.website}
          <p><a href={band.website} target="_blank">Visit Website</a></p>
        {/if}
      </div>
    {/each}
  </div>
{:else}
  <p>No bands to display.</p>
{/if}

<style>
  .lineup {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }

  .band-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .band-card img {
    max-width: 100%;
    border-radius: 4px;
  }

  .logo {
    height: 80px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .image {
    height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
</style>
