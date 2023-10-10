import { Field } from 'payload/types';

import { linkGroup } from './link';

export const fields: Field[] = [
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
  linkGroup,
];

export const buttonLinkGroup: Field = {
  name: 'buttonLink',
  type: 'group',
  interfaceName: 'ButtonLinkFieldGroup',
  fields,
};

export const buttonLinkArray: Field = {
  name: 'buttonLinks',
  type: 'array',
  interfaceName: 'ButtonLinkFieldArray',
  fields,
};
