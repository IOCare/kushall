angular.module('starter.config', [])
.constant('DB_CONFIG', {
    name: 'DB',
    tables: [
      {
            name: 'configurations',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'keyname', type: 'text'},
                {name: 'value', type: 'text'}
            ]
        }
    ]
});