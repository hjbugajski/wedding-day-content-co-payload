import path from 'path';

import { buildConfig } from 'payload/config';

import Pages from './collections/Pages';
import Users from './collections/Users';
import Footer from './globals/Footer';
import Navigation from './globals/Navigation';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages],
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
