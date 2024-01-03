import path from 'path';

import { CollectionConfig } from 'payload/types';

import { hasRole, Role } from '../access';
import useDataUrl from '../hooks/useDataUrl';

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
    afterChange: [useDataUrl],
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
