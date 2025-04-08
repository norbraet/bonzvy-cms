import type { CollectionConfig } from 'payload'

export const MediaZips: CollectionConfig = {
  slug: 'zips',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'notes',
      type: 'text',
    },
  ],
  upload: {
    mimeTypes: ['application/zip'],
  },
}
