import { CollectionConfig } from 'payload'

export const TypeBeat: CollectionConfig = {
  slug: 'type-beat',
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
    {
      name: 'genre',
      type: 'relationship',
      relationTo: 'genre',
      required: false,
      hasMany: true,
    },
  ],
}
