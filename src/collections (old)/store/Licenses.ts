import type { CollectionConfig } from 'payload'

export const Licenses: CollectionConfig = {
  slug: 'licenses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'price', 'active', 'downloads'],
    description:
      'Manage all available licensing options for your beats or other digital products. Each license type includes pricing, terms of usage, and visibility settings.',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Non-Exclusive',
          value: 'non-exclusive',
        },
        {
          label: 'Exclusive',
          value: 'exclusive',
        },
        {
          label: 'Free',
          value: 'free',
        },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        condition: (_, sibilingData) => sibilingData.type !== 'free',
      },
    },
    {
      name: 'downloads',
      type: 'select',
      hasMany: true,
      options: ['MP3', 'WAV', 'Stems'],
      admin: {
        description: 'File types included in this license',
        condition: (_, siblingData) => siblingData.type !== 'free',
      },
    },
    {
      name: 'termsOfUse',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief explanation or link to full terms.',
      },
    },
  ],
}
