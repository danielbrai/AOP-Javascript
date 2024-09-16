const { getWeaver } = require('@aspectjs/core');
const { LogAfterAspect, LogBeforeAspect } = require('./log-flow.aspect');
const { LogErrorAspect } = require('./log-error.aspect');


const logEnabler = (() => {
    getWeaver().enable(new LogAfterAspect());
    getWeaver().enable(new LogBeforeAspect());
    getWeaver().enable(new LogErrorAspect());
})();

module.exports = {
    logEnabler
}