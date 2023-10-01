import { Field } from 'payload/types';

import { linkGroup } from './link';

const fields: Field[] = [
  {
    name: 'color',
    type: 'select',
    required: true,
    defaultValue: 'primary',
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
  linkGroup,
];

export const buttonLinkGroup: Field = {
  name: 'buttonLink',
  type: 'group',
  admin: {
    hideGutter: true,
  },
  fields,
};

export const buttonLinkArray: Field = {
  name: 'buttonLinks',
  type: 'array',
  fields,
};
