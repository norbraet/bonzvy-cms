import { CollectionConfig } from 'payload'

export const LicenseType: CollectionConfig = {
  slug: 'license-type',
  admin: {
    useAsTitle: 'name',
    group: 'Licenses',
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
  ],
}
