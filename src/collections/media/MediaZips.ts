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
    staticDir: 'public/uploads/zips',
    mimeTypes: [
      'application/zip',
      'application/x-zip-compressed',
      'application/vnd.rar',
      'application/x-rar-compressed',
    ],
  },
}
