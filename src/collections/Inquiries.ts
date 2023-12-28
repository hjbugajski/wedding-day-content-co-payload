import { CollectionConfig } from 'payload/types';

import { hasRole, Role } from '../access';

const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    read: hasRole(Role.Admin, Role.Editor),
    create: () => true,
    update: () => false,
    delete: hasRole(Role.Admin),
  },
  fields: [
    {
      name: 'first',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'last',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'budget',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'information',
      type: 'textarea',
      required: true,
    },
    {
      name: 'photographerNames',
      type: 'text',
    },
    {
      name: 'openToOtherCreators',
      type: 'radio',
      required: true,
      admin: {
        layout: 'horizontal',
      },
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    },
  ],
};

export default Inquiries;
