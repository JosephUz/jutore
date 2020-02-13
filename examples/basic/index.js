const store = require('../../');

var scope = store.setScope('yusuf', {
    name: 'Yusuf'
});

function log(value) {
    console.log('My name is');
    console.log(value);
}

log(scope.get('name'));

scope.addListener('name', log);

scope.set('name', 'Yusuf Çağrı');

scope.props.name = 'Yusuf Çağrı';

scope.removeListener('name', log);

scope.set('name', 'Yusuf Çağrı Oğuz');

