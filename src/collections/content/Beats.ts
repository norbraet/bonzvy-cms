import { CollectionConfig } from 'payload'

export const Beat: CollectionConfig = {
  slug: 'beat',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
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
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Info',
          description: 'Basic Info Description',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'artwork',
                  label: 'Artwork',
                  type: 'relationship',
                  relationTo: 'media-image',
                  displayPreview: true,
                  admin: {
                    width: '50%',
                  }
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  maxLength: 500,
                  admin: {
                    width: '50%',
                  },
                }
              ],
            },
            {
              name: 'wavUpload',
              label: 'WAV File',
              type: 'upload',
              relationTo: 'media-audio',
              required: true,
            },
            {
              name: 'mp3Version',
              label: 'MP3 Version',
              type: 'relationship',
              relationTo: 'media-audio',
              admin: { readOnly: true }
            },
            {
              name: 'previewVersion',
              label: 'Preview Version',
              type: 'relationship',
              relationTo: 'media-audio',
              admin: { readOnly: true }
            },
            {
              name: 'mp3',
              type: 'upload',
              relationTo: 'media-audio',
            }
          ],
        }
      ],
    },
  ],
}
