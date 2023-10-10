import { GlobalConfig } from 'payload/types';

import { isAdmin } from '../access';
import { linkArray } from '../fields';
import { deepMerge } from '../utils';

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    deepMerge(linkArray, {
      name: 'socialLinks',
    }),
  ],
};

export default Footer;
