import { Block } from 'payload/types';

import ContentCards from './ContentCards';

const ScrollSection: Block = {
  slug: 'scrollSection',
  interfaceName: 'ScrollSectionBlock',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [ContentCards],
    },
  ],
};

export default ScrollSection;
