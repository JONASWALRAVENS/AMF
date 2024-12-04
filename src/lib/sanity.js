import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qfyf21qb',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
