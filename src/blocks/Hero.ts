import { Block } from 'payload/types';

import { buttonLinkArray, heading, maxWidth, tagArray } from '../fields';

const Hero: Block = {
  slug: 'hero',
  fields: [
    maxWidth,
    heading,
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    tagArray,
    buttonLinkArray,
  ],
};

export default Hero;
