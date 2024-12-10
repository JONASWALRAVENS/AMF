<script lang="ts">
  import { page } from '$app/stores';
  import { PortableText } from '@portabletext/svelte';
  import { derived } from 'svelte/store';

  const bands = derived(page, ($page) => $page.data.bands);

  function getGenre(genre: string) {
    const genres = [
      { title: 'Heavy Metal', value: 'heavymetal' },
      { title: 'Death Metal', value: 'deathmetal' },
      { title: 'Black Metal', value: 'blackmetal' },
      { title: 'Stoner Rock', value: 'stonerrock' },
      { title: 'New York Hardcore', value: 'newyorkhardcore' }
    ];
    return genres.find((g) => g.value === genre)?.title || genre;
  }

  console.log($bands);
</script>

<h1 class="hidden">Festival Lineup</h1>

{#if $bands && $bands.length > 0}
  <div class="lineup">
    {#each $bands as band}
      <div class="band-card">
        <div class="flex-row">
          <img class="logo" src={band.logoUrl} alt={band.name + ' logo'} />
          <img class="image" src={band.imageUrl} alt={band.name + ' logo'} />
        </div>
        <div class="extra-info">
          <p>
            <span
              ><strong>Genre:</strong>
              {getGenre(band.genre)}
            </span>
            <a href={band.website} target="_blank" class="link">Visit Website</a>
          </p>
          <!-- <p><strong>Performance:</strong> {new Date(band.schedule).toLocaleString()}</p> -->
        </div>
        <PortableText value={band.bio} onMissingComponent={false} components={{}} />
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

  .flex-row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .band-card {
    background-color: #000;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .band-card img {
    max-width: 100%;
    border-radius: 4px;
  }

  .logo {
    width: 200px;
    object-fit: contain;
    aspect-ratio: 1;
  }

  .image {
    object-fit: cover;
    margin-bottom: 1rem;
    padding: 0 8rem;
  }

  .link {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  .extra-info {
    margin-bottom: 1rem;
  }
</style>
