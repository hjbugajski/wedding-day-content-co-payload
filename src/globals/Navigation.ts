import { GlobalConfig } from 'payload/types';

import { isAdmin } from '../access';
import { linkArray } from '../fields';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [linkArray],
};

export default Navigation;
