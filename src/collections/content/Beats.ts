import { CollectionConfig } from 'payload'

export const Beat: CollectionConfig = {
  slug: 'beat',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
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
