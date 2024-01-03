import { Block } from 'payload/types';

const ImageStack: Block = {
  slug: 'imageStack',
  interfaceName: 'ImageStackBlock',
  fields: [
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      maxRows: 2,
      minRows: 2,
      required: true,
    },
  ],
};

export default ImageStack;
