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
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical';
import { Block, Field } from 'payload/types';

import { heading } from '../fields/heading';
import { richTextFields } from '../fields/link';
import useAppendEmptyParagraph from '../hooks/useAppendEmptyParagraph';
import { deepMerge } from '../utils/deepMerge';

import ButtonLink from './ButtonLink';
import Gallery from './Gallery';
import ImageStack from './ImageStack';
import MessagesMarquee from './MessagesMarquee';
import PortfolioCards from './PortfolioCards';
import Quotes from './Quotes';
import Stepper from './Stepper';

const singleColumnBlocks = [ButtonLink, PortfolioCards, Gallery, MessagesMarquee, Quotes, Stepper];
const multiColumnBlocks = [ButtonLink, ImageStack];

const richTextField = (columns: '1' | '2'): Field => ({
  name: 'content',
  type: 'richText',
  hooks: {
    beforeValidate: [useAppendEmptyParagraph],
  },
  editor: lexicalEditor({
    features: () => [
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
      ParagraphFeature(),
      BoldTextFeature(),
      ItalicTextFeature(),
      UnderlineTextFeature(),
      StrikethroughTextFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      SuperscriptTextFeature(),
      SubscriptTextFeature(),
      AlignFeature(),
      LinkFeature({ fields: richTextFields }),
      UploadFeature(),
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
