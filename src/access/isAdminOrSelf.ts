import { Access, FieldAccess } from 'payload/types';

import { User } from '../payload-types';

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) {
    return false;
  }

  if (user.roles?.includes('admin')) {
    return true;
  }

  return {
    id: {
      equals: user.id,
    },
  };
};

export const isAdminOrSelfField: FieldAccess<{ id: string }, User> = ({ req: { user }, id }) =>
  user?.roles?.includes('admin') || user?.id === id;
