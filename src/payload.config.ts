import path from 'path';

import { buildConfig } from 'payload/config';

import Media from './collections/Media';
import Pages from './collections/Pages';
import Users from './collections/Users';
import Footer from './globals/Footer';
import Navigation from './globals/Navigation';

const useDataUrlPath = path.resolve(__dirname, 'hooks/useDataUrl');
const mockModulePath = path.resolve(__dirname, 'mocks/emptyObject.ts');

export default buildConfig({
  admin: {
    user: Users.slug,
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          [useDataUrlPath]: mockModulePath,
        },
      },
    }),
  },
  collections: [Users, Pages, Media],
  globals: [Navigation, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.MONGODB_IP].filter(Boolean),
  csrf: [process.env.SERVER_URL, process.env.DOMAIN, process.env.PAYLOAD_DOMAIN].filter(Boolean),
  serverURL: process.env.SERVER_URL,
});
