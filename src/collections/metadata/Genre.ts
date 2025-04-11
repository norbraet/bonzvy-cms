import { CollectionConfig } from 'payload'

export const Genre: CollectionConfig = {
  slug: 'genre',
  admin: {
    useAsTitle: 'name',
    group: 'Metadata',
    description: '',
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
