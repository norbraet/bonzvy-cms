import { CollectionConfig } from 'payload'

export const MediaAudioType: CollectionConfig = {
  slug: 'media-audio-type',
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
