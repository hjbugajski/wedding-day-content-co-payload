import { Field } from 'payload/types';

const fields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'text',
        type: 'text',
        required: true,
        admin: {
          width: '50%',
        },
      },
      {
        name: 'icon',
        type: 'text',
        admin: {
          width: '50%',
        },
      },
    ],
  },
];

export const tagGroup: Field = {
  name: 'tag',
  type: 'group',
  interfaceName: 'TagFieldGroup',
  fields,
};

export const tagArray: Field = {
  name: 'tags',
  type: 'array',
  interfaceName: 'TagFieldArray',
  fields,
};
