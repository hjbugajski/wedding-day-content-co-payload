import { Field, GlobalConfig } from 'payload/types';

import { hasRole, Role } from '../access';
import { buttonLinkGroup } from '../fields/buttonLink';
import { linkArray } from '../fields/link';
import { deepMerge } from '../utils/deepMerge';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
    update: hasRole(Role.Admin),
  },
  fields: [linkArray, deepMerge<Field>(buttonLinkGroup, { name: 'callToAction', label: 'Call to Action' })],
};

export default Navigation;
