import { Block } from 'payload/types';

const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
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

export default Content;
