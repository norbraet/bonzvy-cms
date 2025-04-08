import { CollectionConfig } from 'payload'

export const Beats: CollectionConfig = {
  slug: 'beats',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
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
              name: 'untagged',
              type: 'upload',
              relationTo: 'audio',
              required: true,
            },
            {
              name: 'tagged',
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
              name: 'nonExclusiveLicenses',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                },
                {
                  name: 'downloads',
                  type: 'select',
                  options: ['MP3', 'MP3, WAV', 'MP3, WAV, Stems'],
                },
                {
                  name: 'price',
                  type: 'number',
                },
                {
                  name: 'active',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
            {
              name: 'exclusiveLicense',
              type: 'group',
              fields: [
                {
                  name: 'makeOfferOnly',
                  type: 'checkbox',
                },
                {
                  name: 'price',
                  type: 'number',
                },
                {
                  name: 'downloads',
                  type: 'select',
                  options: ['MP3, WAV, Stems'],
                },
                {
                  name: 'active',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
            {
              name: 'freeDownload',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                },
                {
                  name: 'downloads',
                  type: 'select',
                  options: ['MP3'],
                },
                {
                  name: 'active',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
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
