import { CollectionConfig, FieldHook } from 'payload/types';

import { isAdminOrEditor } from '../access';
import Hero from '../blocks/Hero';
import HeroPage from '../blocks/HeroPage';
import HeroSection from '../blocks/HeroSection';
import { Section } from '../blocks/Section';
import { slugify } from '../utils';

const useSlug: FieldHook = ({ operation, siblingData }) => {
  if (operation === 'create') {
    return slugify(siblingData.name);
  }
};

const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'id'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Used in Payload only.',
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        description: 'Auto-generated from name.',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [useSlug],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'meta',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Hero, HeroSection, HeroPage, Section],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
