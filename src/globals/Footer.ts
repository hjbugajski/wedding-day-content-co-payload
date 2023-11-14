import { GlobalConfig } from 'payload/types';

import { hasRole, Role } from '../access';
import RowLabel from '../components/RowLabel';
import { heading } from '../fields/heading';
import { linkArray } from '../fields/link';

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: hasRole(Role.Admin),
  },
  fields: [
    {
      name: 'faqs',
      label: 'FAQs',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
    },
    {
      name: 'linkGroups',
      type: 'array',
      admin: {
        components: {
          RowLabel: RowLabel('heading', 'Link Group'),
        },
      },
      fields: [heading, linkArray],
    },
    {
      name: 'marquee',
      type: 'text',
      required: true,
    },
    {
      name: 'copyright',
      type: 'text',
      required: true,
    },
  ],
};

export default Footer;
