import { Block, FieldHook } from 'payload/types';

import { heading, maxWidth } from '../fields';
import { slugify } from '../utils';

import ButtonLink from './ButtonLink';
import Content from './Content';
import Faq from './Faq';
import FeatureCards from './FeatureCards';
import ScrollSection from './ScrollSection';

const useSlug: FieldHook = ({ operation, siblingData }) => {
  if (operation === 'create' || operation === 'update') {
    return slugify(siblingData.heading);
  }
};

const HeroSection: Block = {
  slug: 'heroSection',
  fields: [
    maxWidth,
    heading,
    {
      name: 'sectionId',
      label: 'Section ID',
      type: 'text',
      admin: {
        description: 'Auto-generated from heading.',
      },
      hooks: {
        beforeValidate: [useSlug],
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Content, ButtonLink, Faq, FeatureCards, ScrollSection],
    },
  ],
};

export default HeroSection;
