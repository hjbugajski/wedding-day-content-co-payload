import { Block } from 'payload/types';

import { fields as buttonLinkFields } from '../fields/buttonLink';

const ButtonLink: Block = {
  slug: 'buttonLink',
  fields: [
    ...buttonLinkFields,
    {
      name: 'margin',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};

export default ButtonLink;
