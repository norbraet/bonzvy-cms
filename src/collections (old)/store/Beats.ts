import { CollectionConfig } from 'payload'

export const Beats: CollectionConfig = {
  slug: 'beats',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'key', 'BPM', 'visibility', 'artwork'],
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
                  type: 'upload',
                  relationTo: 'images',
                  required: true,
                  displayPreview: true,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  maxLength: 500,
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },

            {
              type: 'row',
              fields: [
                {
                  name: 'trackType',
                  type: 'select',
                  options: ['Beat', 'Beat with Hook', 'Topline', 'Vocal'],
                  required: true,
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'visibility',
                  type: 'select',
                  options: ['Public', 'Private', 'Unlisted'],
                  defaultValue: 'Public',
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'releaseDate',
                  type: 'date',
                  admin: {
                    width: '33%',
                  },
                },
              ],
            },
            {
              name: 'includingInBulkDiscounts',
              type: 'checkbox',
              label: 'Include in bulk discounts',
            },
            {
              name: 'allowCoupons',
              type: 'checkbox',
              label: 'Allow coupons',
            },
          ],
        },
        {
          label: 'Files',
          description: 'Here you can upload your files',
          fields: [
            {
              name: 'mp3',
              type: 'upload',
              relationTo: 'audio',
              required: true,
            },
            {
              name: 'wav',
              type: 'upload',
              relationTo: 'audio',
            },
            {
              name: 'stems',
              type: 'upload',
              relationTo: 'zips',
            },
          ],
        },
        {
          label: 'Metadata',
          description: 'Fill in your metadata information for the uploaded audio file.',
          fields: [
            {
              name: 'tags',
              type: 'array',
              minRows: 0,
              maxRows: 3,
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                },
              ],
            },
            {
              name: 'genres',
              type: 'array',
              minRows: 0,
              maxRows: 3,
              fields: [
                {
                  name: 'genre',
                  type: 'text',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'key',
                  type: 'select',
                  options: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B'],
                  admin: {
                    width: '25%',
                  },
                },
                {
                  name: 'mode',
                  type: 'select',
                  options: [
                    'Major',
                    'Natural Minor',
                    'Melodic Minor',
                    'Harmonic Minor',
                    'Major Pentatonic',
                    'Minor Pentatonic',
                    'Blues',
                    'Dorian',
                    'Mixolydian',
                    'Phrygian',
                  ],
                  admin: {
                    width: '25%',
                  },
                },
                {
                  name: 'BPM',
                  type: 'number',
                  admin: {
                    width: '25%',
                  },
                },
              ],
            },

            {
              name: 'moods',
              type: 'array',
              minRows: 0,
              maxRows: 5,
              fields: [
                {
                  name: 'mood',
                  type: 'text',
                },
              ],
            },
            {
              name: 'instruments',
              type: 'array',
              minRows: 0,
              maxRows: 3,
              fields: [
                {
                  name: 'instrument',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Price',
          description: 'Fill in your metadata information for the uploaded audio file.',
          fields: [
            {
              name: 'license',
              label: 'License',
              type: 'relationship',
              relationTo: ['licenses'],
              hasMany: false,
              required: true,
              admin: {
                description: 'Select one license available for this beat.',
              },
            },
          ],
        },
        {
          name: 'Others',
          description: 'Options that are related to the track.',
          fields: [
            {
              name: 'voiceTags',
              type: 'array',
              label: 'Voice Tags',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'audio',
                  type: 'upload',
                  relationTo: 'audio',
                  required: true,
                },
                {
                  name: 'isDefault',
                  type: 'checkbox',
                  defaultValue: false,
                },
                {
                  name: 'published',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
            {
              name: 'collaborations',
              type: 'group',
              fields: [
                {
                  name: 'thirdPartySamples',
                  type: 'checkbox',
                  label: 'Used 3rd Party samples',
                },
                {
                  name: 'samples',
                  type: 'array',
                  fields: [
                    {
                      name: 'sampleOrLoop',
                      type: 'text',
                      label: 'Sample or Loop',
                    },
                    {
                      name: 'source',
                      type: 'text',
                      label: 'Source',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
