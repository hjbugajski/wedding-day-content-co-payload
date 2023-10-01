import { Field } from 'payload/types';

export const maxWidth: Field = {
  name: 'maxWidth',
  type: 'select',
  defaultValue: 'full',
  required: true,
  options: [
    {
      label: 'Full',
      value: 'full',
    },
    {
      label: 'Large',
      value: 'large',
    },
    {
      label: 'Medium',
      value: 'medium',
    },
  ],
};
