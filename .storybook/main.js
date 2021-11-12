const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");
module.exports = {
  stories: [...getStoriesPaths(), "../src/styles/globals.css"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
