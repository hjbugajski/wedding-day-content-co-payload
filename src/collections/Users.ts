import { CollectionConfig } from 'payload/types';

import { hasRole, hasRoleField, hasRoleOrSelf, hasRoleOrSelfField, Role } from '../access';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
    defaultColumns: ['email', 'roles', 'id'],
  },
  access: {
    create: hasRole(Role.Admin),
    read: hasRoleOrSelf(Role.Admin),
    update: hasRoleOrSelf(Role.Admin),
    delete: hasRole(Role.Admin),
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: false,
        },
        {
          name: 'lastName',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['public'],
      required: true,
      access: {
        read: hasRoleOrSelfField(Role.Admin),
        update: hasRoleField(Role.Admin),
      },
      options: ['admin', 'editor', 'public'],
    },
  ],
};

export default Users;
