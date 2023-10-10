import { Block } from 'payload/types';

import { maxWidth } from '../fields';

import ButtonLink from './ButtonLink';
import Content from './Content';
import ContentCards from './ContentCards';
import Faq from './Faq';
import FeatureCards from './FeatureCards';
import PackageCards from './PackageCards';

const Section: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
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
      blocks: [Content, ButtonLink, Faq, FeatureCards, PackageCards, ContentCards],
    },
  ],
};

export default Section;
