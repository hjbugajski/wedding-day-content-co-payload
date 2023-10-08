import { Block } from 'payload/types';

import ButtonLink from './ButtonLink';
import Content from './Content';
import Faq from './Faq';

const ScrollSection: Block = {
  slug: 'scrollSection',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Content, ButtonLink, Faq],
    },
  ],
};

export default ScrollSection;
