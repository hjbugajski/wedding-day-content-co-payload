import { Field } from 'payload/types';

const fields: Field[] = [
  {
    name: 'text',
    type: 'text',
    required: true,
  },
  {
    name: 'icon',
    type: 'text',
  },
  {
    name: 'iconPosition',
    type: 'select',
    admin: {
      condition: (_, siblingData) => !!siblingData?.icon,
    },
    required: true,
    defaultValue: 'none',
    options: [
      {
        label: 'None',
        value: 'none',
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
  {
    name: 'newTab',
    label: 'Open in new tab',
    type: 'checkbox',
  },
  {
    name: 'type',
    type: 'radio',
    options: [
      {
        label: 'Internal link',
        value: 'reference',
      },
      {
        label: 'External link',
        value: 'external',
      },
    ],
    defaultValue: 'reference',
    admin: {
      layout: 'horizontal',
    },
    required: true,
  },
  {
    name: 'reference',
    label: 'Page',
    type: 'relationship',
    relationTo: ['pages'],
    required: true,
    maxDepth: 1,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'reference',
    },
  },
  {
    name: 'url',
    label: 'External URL',
    type: 'text',
    required: true,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'external',
    },
  },
];

export const linkGroup: Field = {
  name: 'link',
  type: 'group',
  fields,
};

export const linkArray: Field = {
  name: 'links',
  type: 'array',
  fields,
};
