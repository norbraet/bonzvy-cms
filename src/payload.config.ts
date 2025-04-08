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
          'Here you can see all the beats that are uploaded or you can upload a new beat.',
      },
    },

    // Media
    {
      ...MediaImages,
      admin: {
        group: 'Media',
        description:
          'Here you can see all the Images that are uploaded or you can upload a new image.',
      },
    },
    {
      ...MediaZips,
      admin: {
        group: 'Media',
        description:
          'Here you can see all the Zip Files that are uploaded or you can upload a new Zip File.',
      },
    },
    {
      ...MediaAudio,
      admin: {
        group: 'Media',
        description:
          'Here you can see all the Audio Files that are uploaded or you can upload a new Audio File.',
      },
    },

    // Users
    { ...Users, admin: { group: 'Access' } },
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
