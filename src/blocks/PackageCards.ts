import { Block } from 'payload/types';

import { buttonLinkGroup, heading } from '../fields';

export const PackageCards: Block = {
  slug: 'packageCards',
  labels: {
    singular: 'Package Cards',
    plural: 'Package Cards',
  },
  fields: [
    {
      name: 'packages',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'emphasize',
          type: 'checkbox',
          defaultValue: false,
        },
        heading,
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          admin: {
            elements: [],
          },
        },
        {
          name: 'itemGroups',
          type: 'array',
          required: true,
          fields: [
            heading,
            {
              name: 'icon',
              type: 'text',
              defaultValue: 'check',
              required: true,
            },
            {
              name: 'items',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'superscript',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          name: 'pricing',
          type: 'group',
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'price',
              type: 'number',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
            },
            buttonLinkGroup,
            {
              name: 'footnote',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'footnotes',
      type: 'array',
      fields: [
        {
          name: 'superscript',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'showCustomPackage',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'customPackage',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData.showCustomPackage,
        hideGutter: true,
      },
      fields: [
        heading,
        {
          name: 'description',
          type: 'richText',
          admin: {
            elements: [],
          },
          required: true,
        },
        buttonLinkGroup,
      ],
    },
  ],
};
