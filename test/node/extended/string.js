var runner = require('../setup');

runner.load('../../release/npm/sugar/string');
runner.load('../../release/npm/sugar/range');

// Tests
runner.loadTest('string');
runner.loadTest('string-range');

runner.runExtended(module);
