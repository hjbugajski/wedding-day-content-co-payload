import { Block } from 'payload/types';

import { buttonLinkGroup, heading, linkGroup, tagArray } from '../fields';

const ContentCards: Block = {
  slug: 'contentCards',
  interfaceName: 'ContentCardsBlock',
  labels: {
    singular: 'Content Cards',
    plural: 'Content Cards',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'scroll',
      required: true,
      options: [
        {
          label: 'Scroll',
          value: 'scroll',
        },
        {
          label: 'Grid',
          value: 'grid',
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      required: true,
      fields: [
        heading,
        tagArray,
        {
          name: 'image',
          type: 'relationship',
          required: true,
          relationTo: 'media',
        },
        linkGroup,
      ],
    },
    {
      name: 'showUpSellCard',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'upSellCard',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData.showUpSellCard,
        hideGutter: true,
      },
      fields: [
        heading,
        {
          name: 'description',
          type: 'richText',
          admin: {
            elements: [],
          },
          required: true,
        },
        buttonLinkGroup,
      ],
    },
  ],
};

export default ContentCards;
