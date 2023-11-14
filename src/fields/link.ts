import { Field } from 'payload/types';

import RowLabel from '../components/RowLabel';

const fields: Field[] = [
  {
    name: 'text',
    type: 'text',
    required: true,
  },
  {
    type: 'row',
    fields: [
      {
        name: 'icon',
        type: 'text',
        admin: {
          width: '50%',
        },
      },
      {
        name: 'iconPosition',
        type: 'select',
        admin: {
          condition: (_, siblingData) => !!siblingData?.icon,
          width: '50%',
        },
        defaultValue: 'center',
        options: [
          {
            label: 'Center',
            value: 'center',
          },
          {
            label: 'Left',
            value: 'left',
          },
          {
            label: 'Right',
            value: 'right',
          },
        ],
      },
    ],
  },
  {
    name: 'type',
    type: 'radio',
    admin: {
      layout: 'horizontal',
    },
    required: true,
    defaultValue: 'internal',
    options: [
      {
        label: 'Internal',
        value: 'internal',
      },
      {
        label: 'External',
        value: 'external',
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'relationship',
        label: 'Page',
        type: 'relationship',
        relationTo: ['pages'],
        required: true,
        maxDepth: 1,
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'internal',
          width: '50%',
        },
      },
      {
        name: 'anchor',
        type: 'text',
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'internal',
          width: '50%',
        },
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'url',
        label: 'External URL',
        type: 'text',
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'external',
          width: '50%',
        },
      },
      {
        name: 'rel',
        label: 'Rel Attribute',
        type: 'select',
        hasMany: true,
        required: true,
        defaultValue: ['noreferrer'],
        options: ['noreferrer', 'nofollow'],
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'external',
          width: '50%',
        },
      },
    ],
  },
  {
    name: 'newTab',
    label: 'Open in new tab',
    type: 'checkbox',
    defaultValue: false,
  },
];

export const linkGroup: Field = {
  name: 'link',
  type: 'group',
  interfaceName: 'LinkFieldGroup',
  fields,
};

export const linkArray: Field = {
  name: 'links',
  type: 'array',
  admin: {
    components: {
      RowLabel: RowLabel('text', 'Link'),
    },
  },
  interfaceName: 'LinkFieldArray',
  fields,
};
