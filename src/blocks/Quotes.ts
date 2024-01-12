import { lexicalEditor, ParagraphFeature } from '@payloadcms/richtext-lexical';
import { Block } from 'payload/types';

import RowLabel from '../components/RowLabel';
import useAppendEmptyParagraph from '../hooks/useAppendEmptyParagraph';

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
          hooks: {
            beforeValidate: [useAppendEmptyParagraph],
          },
          editor: lexicalEditor({
            features: () => [ParagraphFeature()],
          }),
        },
      ],
    },
  ],
};

export default Quotes;
