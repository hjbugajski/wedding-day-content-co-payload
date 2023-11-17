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
  UnoderedListFeature,
} from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload/types';

import { hasRole, hasRoleOrPublished, Role } from '../access';
import { richTextFields } from '../fields/link';

const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: hasRoleOrPublished(Role.Admin, Role.Editor),
    create: hasRole(Role.Admin, Role.Editor),
    update: hasRole(Role.Admin, Role.Editor),
    delete: hasRole(Role.Admin, Role.Editor),
  },
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          ParagraphFeature(),
          BoldTextFeature(),
          ItalicTextFeature(),
          UnderlineTextFeature(),
          StrikethroughTextFeature(),
          UnoderedListFeature(),
          OrderedListFeature(),
          SuperscriptTextFeature(),
          SubscriptTextFeature(),
          LinkFeature({ fields: richTextFields }),
        ],
      }),
    },
  ],
};

export default FAQs;
