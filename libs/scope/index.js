const Scope = require('./scope');

const scopes = {};

function setScope(name, props) {
    const scope = new Scope(name, props);
    scopes[name] = scope;
    return scope;
};

function getScope(name) {
    return scopes[name];
}

module.exports = {
    setScope,
    getScope
}