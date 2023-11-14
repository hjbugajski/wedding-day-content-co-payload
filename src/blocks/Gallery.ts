import { Block } from 'payload/types';

const Gallery: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Gallery',
    plural: 'Galleries',
  },
  fields: [
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      hasMany: true,
      minRows: 1,
    },
  ],
};

export default Gallery;
