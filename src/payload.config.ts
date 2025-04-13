// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/users/Users'
import { Beat } from './collections/content/Beats'
import { License } from './collections/license/Licenses'
import { LicenseType } from './collections/license/LicenseType'
import { MediaAudioType } from './collections/license/MediaAudioType'
import { MediaZipType } from './collections/license/MediaZipType'
import { MediaAudio } from './collections/media/MediaAudio'
import { MediaImage } from './collections/media/MediaImage'
import { MediaZip } from './collections/media/MediaZip'
import { Genre } from './collections/metadata/Genre'
import { Instrument } from './collections/metadata/Instrument'
import { Key } from './collections/metadata/Key'
import { Mode } from './collections/metadata/Mode'
import { Tag } from './collections/metadata/Tag'
import { TypeBeat } from './collections/metadata/TypeBeat'
import { TrackType } from './collections/metadata/TrackType'

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
    Beat,
    License,
    LicenseType,
    MediaAudioType,
    MediaZipType,
    MediaAudio,
    MediaImage,
    MediaZip,
    Genre,
    Instrument,
    Key,
    Mode,
    Tag,
    TypeBeat,
    TrackType,
    Users,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DB_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
