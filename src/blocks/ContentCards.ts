import { Block } from 'payload/types';

import { heading, linkGroup, tagArray } from '../fields';

const ContentCards: Block = {
  slug: 'contentCards',
  interfaceName: 'ContentCardsBlock',
  labels: {
    singular: 'Content Cards',
    plural: 'Content Cards',
  },
  fields: [
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
  ],
};

export default ContentCards;
