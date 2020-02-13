const listener = require('../listener');

function Scope(name, props) {
    this.name = name;
    this.value = props;
    this.props = {};

    this.get = function (key) {
        return this.value[key];
    }

    this.set = function (key, value, trigger) {
        this.value[key] = value;

        trigger = trigger == null ? true : trigger;

        if (trigger) {
            listener.callNameListeners(this.name, this.value);
            listener.callKeyListeners(this.name, key, this.value);
        }
    }

    Object.keys(props).forEach(key => {
        listener.defineListeners(name, key);
        Object.defineProperty(this.props, key, {
            get: () => {
                return this.get(key);
            },
            set: value => {
                this.set(key, value);
            }
        });
    });
}

Scope.prototype.addListener = function (key, func) {
    listener.addListener(this.name, key, func);
}

Scope.prototype.removeListener = function (key, func) {
    listener.removeListener(this.name, key, func);
}

module.exports = Scope;