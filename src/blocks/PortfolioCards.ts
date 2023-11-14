import { Block } from 'payload/types';

import RowLabel from '../components/RowLabel';
import { linkGroup } from '../fields/link';

const PortfolioCards: Block = {
  slug: 'portfolioCards',
  labels: {
    singular: 'Portfolio Cards',
    plural: 'Portfolio Cards',
  },
  interfaceName: 'PortfolioCardsBlock',
  fields: [
    {
      name: 'cards',
      type: 'array',
      admin: {
        components: {
          RowLabel: RowLabel('link.text', 'Link'),
        },
      },
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        linkGroup,
      ],
    },
  ],
};

export default PortfolioCards;
