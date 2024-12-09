import {defineField, defineType} from 'sanity'

export const bandType = defineType({
  name: 'band',
  title: 'Band',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the band.',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'A short bio of the band.',
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          {title: 'Heavy Metal', value: 'heavymetal'},
          {title: 'Death Metal', value: 'deathmetal'},
          {title: 'Black Metal', value: 'blackmetal'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'A promotional image or band photo.',
      options: {
        hotspot: true, // Enables image cropping and focal point selection
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the image (for accessibility).',
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The band’s logo.',
      options: {
        hotspot: true, // Enables image cropping and focal point selection
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the logo (for accessibility).',
        },
      ],
    }),
    defineField({
      name: 'schedule',
      title: 'Performance Time',
      type: 'datetime',
      description: 'The scheduled time for the band’s performance.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'A link to the band’s official website or social media.',
    }),
  ],
})
