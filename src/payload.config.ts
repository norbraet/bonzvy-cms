// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/users/Users'
import { MediaImages } from './collections/media/MediaImages'
import { MediaZips } from './collections/media/MediaZips'
import { MediaAudio } from './collections/media/MediaAudio'
import { Beats } from './collections/content/Beats'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    // Content
    {
      ...Beats,
      admin: {
        group: 'Content',
        description:
          'Manage your uploaded beats here. You can browse existing entries or add new beats to your catalog.',
      },
    },

    // Media
    {
      ...MediaImages,
      admin: {
        group: 'Media',
        description:
          'This section stores all uploaded image assets. Upload cover art, thumbnails, and other visuals.',
      },
    },
    {
      ...MediaZips,
      admin: {
        group: 'Media',
        description:
          'Manage all uploaded zip files, such as project stems, sound kits, or bundled resources.',
      },
    },
    {
      ...MediaAudio,
      admin: {
        group: 'Media',
        description:
          'Upload and manage your audio files including WAV, MP3, and other formats used in your productions.',
      },
    },

    // Users
    {
      ...Users,
      admin: {
        group: 'Access',
        description: 'Control user access, roles, and credentials for managing the platform.',
      },
    },
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
