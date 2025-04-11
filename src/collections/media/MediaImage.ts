import { CollectionConfig } from 'payload'

export const MediaImage: CollectionConfig = {
  slug: 'media-image',
  admin: {
    useAsTitle: 'name',
    group: 'Media',
    description: '',
    // defaultColumns: ['name', 'key', 'BPM', 'visibility', 'artwork'],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
}
