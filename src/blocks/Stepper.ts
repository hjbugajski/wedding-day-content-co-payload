import {
  BoldTextFeature,
  ItalicTextFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughTextFeature,
  SubscriptTextFeature,
  SuperscriptTextFeature,
  UnderlineTextFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical';
import { Block } from 'payload/types';

import RowLabel from '../components/RowLabel';
import { heading } from '../fields/heading';
import { richTextFields } from '../fields/link';
import useAppendEmptyParagraph from '../hooks/useAppendEmptyParagraph';

const Stepper: Block = {
  slug: 'stepper',
  interfaceName: 'StepperBlock',
  fields: [
    {
      name: 'steps',
      type: 'array',
      minRows: 1,
      admin: {
        components: {
          RowLabel: RowLabel('heading', 'Step'),
        },
      },
      fields: [
        heading,
        {
          name: 'content',
          type: 'richText',
          hooks: {
            beforeValidate: [useAppendEmptyParagraph],
          },
          editor: lexicalEditor({
            features: () => [
              ParagraphFeature(),
              BoldTextFeature(),
              ItalicTextFeature(),
              UnderlineTextFeature(),
              StrikethroughTextFeature(),
              UnorderedListFeature(),
              OrderedListFeature(),
              SuperscriptTextFeature(),
              SubscriptTextFeature(),
              LinkFeature({ fields: richTextFields }),
            ],
          }),
        },
      ],
    },
  ],
};

export default Stepper;
