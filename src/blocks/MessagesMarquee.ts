import { Block } from 'payload/types';

const MessagesMarquee: Block = {
  slug: 'messagesMarquee',
  interfaceName: 'MessagesMarqueeBlock',
  fields: [
    {
      name: 'messages',
      type: 'array',
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};

export default MessagesMarquee;
