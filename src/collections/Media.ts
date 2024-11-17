import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: "testui",
      type: 'ui',
      admin: {
        components: {
          Field: '@/ClientTestComponent'
        }
      }
    },
  ],
  upload: true,
}
