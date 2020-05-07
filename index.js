module.exports = {
  before: (config) => {
    const dotenv = require('dotenv');
    const path = require('path');

    const pluginConfig = config.dotenv || {};
    if (pluginConfig.path) {
      if (path.isAbsolute(pluginConfig.path)) {
        dotenv.config({ path: pluginConfig.path });
      } else {
        dotenv.config({ path: path.join(process.cwd(), pluginConfig.path) });
      }
    } else {
      dotenv.config();
    }
  },
};
