import { CollectionConfig } from 'payload'

export const MediaZipType: CollectionConfig = {
  slug: 'media-zip-type',
  admin: {
    useAsTitle: 'name',
    group: 'Licenses',
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
