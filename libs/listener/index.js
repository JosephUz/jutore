const nameListeners = {};
const keyListeners = {};

function callNameListeners(name, props) {
    var listener = nameListeners[name];
    if (listener) {
        nameListeners[name] = listener.filter((item) => item.mounted);
        listener.forEach((listener) => {
            if (listener.mounted) listener.func(props);
        });
    }
}

function callKeyListeners(name, key, props) {
    var listener = keyListeners[name];
    if (listener) {
        var arr = listener[key];
        if (arr) {
            listener[key] = arr.filter(
                (item) => item.mounted
            );
            arr.forEach((listener) => {
                if (listener.mounted) listener.func(props[key]);
            });
        }
    }
}

function defineListeners(name, key) {
    if (key) {
        if (!keyListeners[name])
            keyListeners[name] = {};

        if (!keyListeners[name][key])
            keyListeners[name][key] = [];
    }
    if (!nameListeners[name])
        nameListeners[name] = [];
}

function addListener(name, key, func) {
    let item;
    if (typeof key === 'string') {
        defineListeners(name, key);
        item = {
            mounted: true,
            func: func
        };
        keyListeners[name][key].push(item);
    } else {
        item = {
            mounted: true,
            func: key
        };
        nameListeners[name].push(item);
    }
    return item;
}

function removeListener(name, key, func) {
    if (typeof key === 'string')
        keyListeners[name][key].forEach((old) => {
            if (old.func === func) {
                old.mounted = false;
            }
        });
    else
        nameListeners[name].forEach((old) => {
            if (old.func === key) {
                old.mounted = false;
            }
        });
}

module.exports = {
    callNameListeners,
    callKeyListeners,
    defineListeners,
    addListener,
    removeListener
}