import { Block } from 'payload/types';

const Images: Block = {
  slug: 'images',
  interfaceName: 'ImagesBlock',
  labels: {
    singular: 'Images',
    plural: 'Images',
  },
  fields: [
    {
      name: 'images',
      label: 'Images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
  ],
};

export default Images;
