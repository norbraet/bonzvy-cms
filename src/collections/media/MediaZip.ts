import { CollectionConfig } from 'payload'

export const MediaZip: CollectionConfig = {
  slug: 'media-zip',
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
