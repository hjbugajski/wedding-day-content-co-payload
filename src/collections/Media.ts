import path from 'path';

import { CollectionConfig, Field } from 'payload/types';

import { hasRole, Role } from '../access';
import { linkGroup } from '../fields/link';
import useDataUrl from '../hooks/useDataUrl';
import { deepMerge } from '../utils/deepMerge';

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'mimeType', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: hasRole(Role.Admin, Role.Editor),
    update: hasRole(Role.Admin, Role.Editor),
    delete: hasRole(Role.Admin, Role.Editor),
  },
  hooks: {
    beforeChange: [useDataUrl],
  },
  upload: {
    adminThumbnail: 'thumbnail',
    staticDir: path.resolve(__dirname, '../../media'),
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      {
        name: 'preview',
        height: 1080,
      },
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'hasLink',
      type: 'checkbox',
      defaultValue: false,
    },
    deepMerge<Field>(linkGroup, {
      admin: {
        condition: (_, siblingData) => siblingData.hasLink,
      },
    }),
    {
      name: 'dataUrl',
      label: 'Data URL',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
};

export default Media;
