import { client } from '$lib/sanity';

export async function load() {
  const query = `*[_type == "band"]{
    _id,
    name,
    bio,
    genre,
    "imageUrl": image.asset->url,
    "logoUrl": logo.asset->url,
    schedule,
    website
  }`;

  const bands = await client.fetch(query);
  return { bands };
}
