import { CollectionConfig } from 'payload'

export const TrackType: CollectionConfig = {
  slug: 'track-type',
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
