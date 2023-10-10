import path from 'path';

import { CollectionConfig } from 'payload/types';

import { isAdminOrEditor } from '../access';
import useDataUrl from '../hooks/useDataUrl';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'filename',
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
        height: 1000,
      },
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
    },
    {
      name: 'video',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.video,
      },
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
