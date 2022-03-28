const {
  override,
  fixBabelImports,
  addBabelPlugins,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");

const overrideProcessEnv = (value) => (config) => {
  const { plugins } = config;
  const plugin = plugins.find((p) => p.constructor.name === "DefinePlugin");
  const processEnv = plugin.definitions["process.env"] || {};

  plugin.definitions["process.env"] = {
    ...processEnv,
    ...value,
  };

  return config;
};

module.exports = override(
  ...addBabelPlugins([
    "@babel/plugin-proposal-class-properties",
    { loose: true },
  ]),
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackAlias({
    "@components": path.resolve(__dirname, "./src/components"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@router": path.resolve(__dirname, "./src/router"),
    "@store": path.resolve(__dirname, "./src/store"),
    "@interfaces": path.resolve(__dirname, "./src/interfaces"),
    "@guards": path.resolve(__dirname, "./src/guards"),
    "@layout": path.resolve(__dirname, "./src/layout"),
  }),

  overrideProcessEnv({
    API_URL: JSON.stringify(process.env.API_URL || "__API_URL"),
  })
);
