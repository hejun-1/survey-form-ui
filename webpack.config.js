const env = process.env.APP_ENV ? process.env.APP_ENV : 'consumer';

function buildConfig() {
  return require('./webpack-' + env + '.config.js')();
}

module.exports = buildConfig;