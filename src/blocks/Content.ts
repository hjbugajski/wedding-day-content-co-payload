import { Block } from 'payload/types';

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul'],
      },
    },
  ],
};
