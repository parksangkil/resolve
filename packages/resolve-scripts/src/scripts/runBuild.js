import webpack from 'webpack';

import prodClientConfig from '../configs/webpack.client.config.js';
import prodServerConfig from '../configs/webpack.server.config.js';
import buildConfig from './build-config';
import outputConfig from './output-stats-config';

buildConfig.extendWebpack(prodClientConfig, prodServerConfig);

require('./clean');
require('./copy');

webpack([prodClientConfig, prodServerConfig], (err, stats) => {
    process.stdout.write(stats.toString(outputConfig) + '\n');
});
