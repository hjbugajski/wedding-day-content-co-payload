import { Block } from 'payload/types';

import { heading, maxWidth } from '../fields';

export const FeatureCards: Block = {
  slug: 'featureCards',
  labels: {
    singular: 'Feature Cards',
    plural: 'Feature Cards',
  },
  fields: [
    maxWidth,
    {
      name: 'listType',
      type: 'radio',
      admin: {
        layout: 'horizontal',
      },
      required: true,
      defaultValue: 'unordered',
      options: [
        {
          label: 'Unordered',
          value: 'unordered',
        },
        {
          label: 'Ordered',
          value: 'ordered',
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      required: true,
      fields: [
        heading,
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: ['ol', 'ul'],
          },
        },
      ],
    },
  ],
};
