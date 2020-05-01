const { override, addWebpackPlugin  } = require('customize-cra');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
);