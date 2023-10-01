import { Block, FieldHook } from 'payload/types';

import { maxWidth } from '../fields';
import { slugify } from '../utils';

import ButtonLink from './ButtonLink';
import { Content } from './Content';
import { Faq } from './Faq';
import { FeatureCards } from './FeatureCards';
import { PackageCards } from './PackageCards';

const useSlug: FieldHook = ({ operation, siblingData }) => {
  if (operation === 'create' || operation === 'update') {
    return slugify(siblingData.heading);
  }
};

export const Section: Block = {
  slug: 'section',
  fields: [
    maxWidth,
    {
      name: 'sectionId',
      label: 'Section ID',
      type: 'text',
      required: true,
      hooks: {
        beforeValidate: [useSlug],
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Content, ButtonLink, Faq, FeatureCards, PackageCards],
    },
  ],
};
