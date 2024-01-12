import { lexicalEditor, ParagraphFeature } from '@payloadcms/richtext-lexical';
import { Block } from 'payload/types';

import RowLabel from '../components/RowLabel';

const Quotes: Block = {
  slug: 'quotes',
  interfaceName: 'QuotesBlocks',
  fields: [
    {
      name: 'quotes',
      type: 'array',
      minRows: 3,
      admin: {
        components: {
          RowLabel: RowLabel('client', 'Review'),
        },
      },
      fields: [
        {
          name: 'client',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: () => [ParagraphFeature()],
          }),
        },
      ],
    },
  ],
};

export default Quotes;
