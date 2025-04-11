import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Access',
    description: 'Control user access, roles, and credentials for managing the platform.',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
