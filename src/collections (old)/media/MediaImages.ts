import type { CollectionConfig } from 'payload'

const generateCustomImageName = ({
  height,
  sizeName,
  extension,
  width,
}: {
  height: number | undefined
  sizeName: string
  extension: string
  width: number
}) => {
  return `custom-${sizeName}-${width}-${height || 'auto'}.${extension}` //TODO: das custom ist hier falsch. da sollte der name von der datei rein
}

export const MediaImages: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Optional description of the image.',
      },
    },
  ],
  upload: {
    adminThumbnail: 'large',
    imageSizes: [
      {
        name: 'thumbnail',
        fit: 'cover',
        width: 150,
        height: undefined,
        generateImageName: generateCustomImageName,
      },
      {
        name: 'small',
        fit: 'cover',
        width: 300,
        height: undefined,
        generateImageName: generateCustomImageName,
      },
      {
        name: 'medium',
        fit: 'cover',
        width: 600,
        height: undefined,
        generateImageName: generateCustomImageName,
      },
      {
        name: 'large',
        fit: 'cover',
        width: 1200,
        height: undefined,
        generateImageName: generateCustomImageName,
      },
      {
        name: 'extra-large',
        fit: 'cover',
        width: 2400,
        height: undefined,
        generateImageName: generateCustomImageName,
      },
    ],
    staticDir: 'public/uploads/images',
    mimeTypes: ['image/*'],
  },
}
