// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withNx, nextTranslate], {
  nx: { svgr: true },
});
