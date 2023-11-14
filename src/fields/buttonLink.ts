import { Field } from 'payload/types';

import RowLabel from '../components/RowLabel';

import { linkGroup } from './link';

export const fields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'variant',
        type: 'select',
        admin: {
          width: '50%',
        },
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
        admin: {
          width: '50%',
        },
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
  admin: {
    components: {
      RowLabel: RowLabel('link.text', 'Button Link'),
    },
  },
  fields,
};
