import { CollectionConfig } from 'payload'

export const Tag: CollectionConfig = {
  slug: 'tag',
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
