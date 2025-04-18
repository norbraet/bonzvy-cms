import { CollectionConfig } from 'payload'

export const MediaAudio: CollectionConfig = {
  slug: 'media-audio',
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
