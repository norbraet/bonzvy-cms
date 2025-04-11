import { CollectionConfig } from 'payload'

export const Key: CollectionConfig = {
  slug: 'key',
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
