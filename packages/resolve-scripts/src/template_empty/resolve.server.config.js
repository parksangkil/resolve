import path from 'path';
import fileDriver from 'resolve-storage-lite';
import busDriver from 'resolve-bus-memory';
import aggregates from './common/aggregates';
import readModels from './common/read-models';
import clientConfig from './resolve.client.config.js';

if (module.hot) {
    module.hot.accept();
}

const { NODE_ENV = 'development' } = process.env;
const dbPath = path.join(__dirname, `${NODE_ENV}.db`);

export default {
    entries: clientConfig,
    bus: { driver: busDriver },
    storage: {
        driver: fileDriver,
        params: { pathToFile: dbPath }
    },
    initialState: () => ({}),
    aggregates,
    initialSubscribedEvents: { types: [], ids: [] },
    readModels,
    extendExpress: () => {}
};
