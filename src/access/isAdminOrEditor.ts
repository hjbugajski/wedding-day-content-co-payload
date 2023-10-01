import { Access } from 'payload/types';

export const isAdminOrEditor: Access = ({ req: { user } }) =>
  Boolean(user?.roles?.includes('editor') || user?.roles?.includes('admin'));
