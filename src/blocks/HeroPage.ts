import { Block } from 'payload/types';

import { buttonLinkGroup, heading, maxWidth } from '../fields';
import { deepMerge } from '../utils';

const HeroPage: Block = {
  slug: 'heroPage',
  interfaceName: 'HeroPageBlock',
  fields: [
    maxWidth,
    heading,
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'ctaButton',
      type: 'checkbox',
      label: 'Show CTA button?',
      defaultValue: false,
    },
    deepMerge(buttonLinkGroup, {
      admin: {
        condition: (_, siblingData) => !!siblingData?.ctaButton,
      },
    }),
  ],
};

export default HeroPage;
