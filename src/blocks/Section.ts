import { Block } from 'payload/types';

import { maxWidth } from '../fields';

import ButtonLink from './ButtonLink';
import Content from './Content';
import Faq from './Faq';
import FeatureCards from './FeatureCards';
import PackageCards from './PackageCards';

const Section: Block = {
  slug: 'section',
  fields: [
    maxWidth,
    {
      name: 'sectionId',
      label: 'Section ID',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Content, ButtonLink, Faq, FeatureCards, PackageCards],
    },
  ],
};

export default Section;
