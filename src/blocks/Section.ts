import {
  AlignFeature,
  BlocksFeature,
  BoldTextFeature,
  HeadingFeature,
  ItalicTextFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughTextFeature,
  SubscriptTextFeature,
  SuperscriptTextFeature,
  UnderlineTextFeature,
  UnoderedListFeature,
} from '@payloadcms/richtext-lexical';
import { Block, Field } from 'payload/types';

import { heading } from '../fields/heading';
import { richTextFields } from '../fields/link';
import { deepMerge } from '../utils/deepMerge';

import ButtonLink from './ButtonLink';
import Gallery from './Gallery';
import PortfolioCards from './PortfolioCards';

const singleColumnBlocks = [ButtonLink, PortfolioCards, Gallery];
const multiColumnBlocks = [ButtonLink];

const richTextField = (columns: '1' | '2'): Field => ({
  name: 'content',
  type: 'richText',
  editor: lexicalEditor({
    features: () => [
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
      ParagraphFeature(),
      BoldTextFeature(),
      ItalicTextFeature(),
      UnderlineTextFeature(),
      StrikethroughTextFeature(),
      UnoderedListFeature(),
      OrderedListFeature(),
      SuperscriptTextFeature(),
      SubscriptTextFeature(),
      AlignFeature(),
      LinkFeature({ fields: richTextFields }),
      BlocksFeature({
        blocks: columns === '1' ? singleColumnBlocks : multiColumnBlocks,
      }),
    ],
  }),
});

const Section: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
  fields: [
    heading,
    {
      name: 'columns',
      type: 'radio',
      admin: {
        layout: 'horizontal',
      },
      required: true,
      defaultValue: '1',
      options: [
        {
          label: 'One',
          value: '1',
        },
        {
          label: 'Two',
          value: '2',
        },
      ],
    },
    deepMerge<Field>(richTextField('1'), {
      admin: {
        condition: (_, siblingData) => siblingData.columns === '1',
      },
    }),
    deepMerge<Field>(richTextField('2'), {
      name: 'contentColumnOne',
      admin: {
        condition: (_, siblingData) => siblingData.columns === '2',
      },
    }),
    deepMerge<Field>(richTextField('2'), {
      name: 'contentColumnTwo',
      admin: {
        condition: (_, siblingData) => siblingData.columns === '2',
      },
    }),
  ],
};

export default Section;
