import { CollectionConfig } from 'payload'
import { PayloadRequest } from 'payload/types'
import { BeforeChangeHook } from 'payload/types'

const handleAudioUpload: BeforeChangeHook = async ({data, req, operation}) => {
  if (operation !== 'create' && operation !== 'update') return
}

export const MediaAudio: CollectionConfig = {
  slug: 'media-audio',
  admin: {
    useAsTitle: 'filename',
    group: 'Media',
    description: '',
    // defaultColumns: ['name', 'key', 'BPM', 'visibility', 'artwork'],
  },
  upload: {
    staticDir: 'public/uploads/media/audio',
    mimeTypes: ['audio/*'],
    adminThumbnail: 'large',
    imageSizes: [
      {
        name: 'small',
        fit: 'cover',
        height: 300,
        width: 900,
      },
      {
        name: 'large',
        fit: 'cover',
        height: 600,
        width: 1800,
      },
    ],
  },
  hooks: {
    beforeChange: [
      async ({data, req, operation}) => {
  
        
        
        const file = req?.files?.file
      },
    ],
  },
  fields: [
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'audioType',
      label: 'Audio Type',
      type: 'relationship',
      relationTo: 'media-audio-type',
      required: true,
    },
  ],
}
