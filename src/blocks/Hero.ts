import { Block, Field } from 'payload/types';

import { buttonLinkArray } from '../fields/buttonLink';
import { heading } from '../fields/heading';
import { deepMerge } from '../utils/deepMerge';

const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    heading,
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      maxRows: 2,
      minRows: 2,
      required: true,
    },
    deepMerge<Field>(buttonLinkArray, {
      required: true,
    }),
  ],
};

export default Hero;
