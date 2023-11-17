# jutore

Jutore is a simple event listening and scope management library. This library is used to manage different scopes within an application and provides the ability to listen and respond to events between these scopes.

## Installation

To add Jutore to your project, you can follow these steps:

```shell
npm install jutore

or

yarn add jutore
```

## Usage
Jutore consists of two main modules: scope and listener.

### Scope Module
The scope module is used to manage different scopes and listen to changes in values between these scopes.

```javascript
// Example Usage
const jutore = require('jutore');

// Create a new scope
const myScope = jutore.getScope('myScope');

// Set a value and trigger a listener
myScope.set('key', 'value');
```

### Listener Module
The listener module is used to listen to events in specific scopes and respond to these events.

```javascript
// Example Usage
const jutore = require('jutore');

// Listen to an event
jutore.addListener('myScope', 'key', (value) => {
    console.log('Value changed:', value);
});

// Trigger a value change
jutore.getScope('myScope').set('key', 'new-value');
```

## API Reference
#### `getScope(name)`
Gets or creates a scope with the specified name.

#### `setScope(name, props)`
Creates or updates a scope with the specified name.

#### `addListener(name, key, func)`
Adds an event listener for a specific key in the specified scope.

#### `removeListener(name, key, func)`
Removes an event listener for a specific key in the specified scope.

## Examples

### [Basic Usage][]

This example shows the most basic way of usage.

[Basic Usage]: https://github.com/JosephUz/jutore/tree/master/examples/basic


License
-------

This software is free to use under the JosephUz. See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/JosephUz/jutore/blob/master/LICENSE

