import { CollectionConfig } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { slugField } from '@/fields/slug'
import { visibilityField } from '@/fields/visbility'

export const License: CollectionConfig = {
  slug: 'license',
  admin: {
    useAsTitle: 'name',
    group: 'Licenses',
    description: '',
    defaultColumns: ['name', 'description', 'price', 'slug', 'visibility'],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'Terms of Use',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
    ...slugField('name'),
    ...visibilityField(),
  ],
}
