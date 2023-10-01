import { Block } from 'payload/types';

import { linkGroup } from '../fields';

const ButtonLink: Block = {
  slug: 'buttonLink',
  fields: [
    linkGroup,
    {
      name: 'color',
      type: 'select',
      required: true,
      defaultValue: 'neutral',
      options: [
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Neutral',
          value: 'neutral',
        },
      ],
    },
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'outlined',
      options: [
        {
          label: 'Outlined',
          value: 'outlined',
        },
        {
          label: 'Solid',
          value: 'solid',
        },
      ],
    },
    {
      name: 'size',
      type: 'select',
      required: true,
      defaultValue: 'md',
      options: [
        {
          label: 'Small',
          value: 'sm',
        },
        {
          label: 'Medium',
          value: 'md',
        },
        {
          label: 'Large',
          value: 'lg',
        },
      ],
    },
  ],
};

export default ButtonLink;
