const scope = require('./libs/scope');
const listener = require('./libs/listener');

module.exports = {
    getScope: scope.getScope,
    setScope: scope.setScope,
    addListener: listener.addListener,
    removeListener: listener.removeListener
}