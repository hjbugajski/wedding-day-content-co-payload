import { Block } from 'payload/types';

import { fields as buttonLinkFields } from '../fields/buttonLink';

const ButtonLink: Block = {
  slug: 'buttonLink',
  interfaceName: 'ButtonLinkBlock',
  fields: buttonLinkFields,
};

export default ButtonLink;
