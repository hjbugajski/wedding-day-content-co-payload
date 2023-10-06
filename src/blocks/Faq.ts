import { Block } from 'payload/types';

const Faq: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQs',
    plural: 'FAQs',
  },
  fields: [
    {
      name: 'questions',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'richText',
          required: true,
          admin: {
            elements: ['ol', 'ul'],
          },
        },
      ],
    },
  ],
};

export default Faq;
