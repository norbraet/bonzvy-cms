import { CollectionConfig } from 'payload'

export const Key: CollectionConfig = {
  slug: 'key',
  admin: {
    useAsTitle: 'name',
    group: 'Metadata',
    description: '',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      validate: (value: string) => {
        const isValid = /^[A-H(#|♯|b|♭)]+$/.test(value)
        return isValid || 'Only letters A–H, #, ♯, b or ♭ are allowed'
      },
    },
  ],
}
