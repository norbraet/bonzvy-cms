import type { CollectionConfig } from 'payload'

export const MediaAudio: CollectionConfig = {
  slug: 'audio',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'textarea',
    },
  ],
  upload: {
    staticDir: 'public/uploads/media',
    mimeTypes: ['audio/*'],
  },
}
