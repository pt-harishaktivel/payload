import { GlobalConfig } from '../../../src/globals/config/types';
import Text from '../blocks/Text';

const Overview: GlobalConfig = {
  slug: 'overview',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: [Text],
      localized: true,
    },
  ],
  versions: {
    max: 25,
    // drafts: true,
    drafts: {
      autosave: true,
    },
  },
};

export default Overview;
