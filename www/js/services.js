angular.module('kushall.services', ['kushall.config'])
.service('APIServices', function ($q, $http) {
    return {
  
    sendtoGateway: function (device, cmd) {
      var deferred = $q.defer(),
                promise = deferred.promise;
                console.log(device);
      //Ajax Starts
        $.ajax({
            url: "http://"+device+"/sendnode?cmd="+cmd,
            type: 'GET',
            data: '',
            beforeSend: function(xhr) { 
              //xhr.setRequestHeader("X-OCTOBER-REQUEST-HANDLER", "onCheckLogin");
              xhr = {};
              //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          })
        .done(function(response) { 
          console.log(response);
          deferred.resolve(response);
        })
        .fail(function(response) {
          console.log("in error ");
          console.log(response);
          deferred.reject(response);
        });
      //ajax Ends
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            };
            return promise;

      },

    SaveDeviceConfig: function (config,ip,gw,sm) {
      var deferred = $q.defer(),
                promise = deferred.promise;
                console.log(config);
      //Ajax Starts
        $.ajax({
            url: "http://10.1.104.1/wifisave?s="+config.wifi_ssid+"&p="+config.wifi_key+"&ip="+ip+"&gw="+gw+"&sn="+sm,
            type: 'GET',
            data: '',
            beforeSend: function(xhr) { 
              //xhr.setRequestHeader("X-OCTOBER-REQUEST-HANDLER", "onCheckLogin");
              xhr = {};
              //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          })
        .done(function(response) { 
          console.log(response);
          deferred.resolve(response);
        })
        .fail(function(response) {
          console.log("in error ");
          console.log(response);
          deferred.reject(response);
        });
      //ajax Ends
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            };
            return promise;

      },

    getUserInfo: function (access_token) {
      var deferred = $q.defer(),
                promise = deferred.promise;
                
      //Ajax Starts
        $.ajax({
            url: "https://api.kushall.com/api/v1/get-user",
            type: 'GET',
            data: '',
            beforeSend: function(xhr) { 
              xhr.setRequestHeader("Accept", "application/json");
              //xhr = {};
			  xhr.setRequestHeader("Authorization", "Bearer "+access_token);
              xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          })
        .done(function(response) { 
          //console.log(response);
          deferred.resolve(response);
        })
        .fail(function(response) {
          console.log("in error ");
          console.log(response);
          deferred.reject(response);
        });
      //ajax Ends
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            };
            return promise;

      },

    getUserDevices: function (access_token) {
      var deferred = $q.defer(),
                promise = deferred.promise;
                
      //Ajax Starts
        $.ajax({
            url: "https://api.kushall.com/api/v1/devices",
            type: 'GET',
            data: '',
            beforeSend: function(xhr) { 
              xhr.setRequestHeader("Accept", "application/json");
              //xhr = {};
			  xhr.setRequestHeader("Authorization", "Bearer "+access_token);
              xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          })
        .done(function(response) { 
          //console.log(response);
          deferred.resolve(response);
        })
        .fail(function(response) {
          console.log("in error ");
          console.log(response);
          deferred.reject(response);
        });
      //ajax Ends
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            };
            return promise;

      },


    saveUserDevices: function (device_data,access_token) {
      var deferred = $q.defer(),
                promise = deferred.promise;
                console.log(device_data);
      //Ajax Starts
        $.ajax({
            url: "https://api.kushall.com/api/v1/devices",
            type: 'POST',
            data: device_data,
            beforeSend: function(xhr) { 
              xhr.setRequestHeader("Accept", "application/json");
              //xhr = {};
			  xhr.setRequestHeader("Authorization", "Bearer "+access_token);
              xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          })
        .done(function(response) { 
          //console.log(response);
          deferred.resolve(response);
        })
        .fail(function(response) {
          console.log("in error ");
          console.log(response);
          deferred.reject(response);
        });
      //ajax Ends
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            };
            return promise;

      },

    updateGW: function (gatewayurl) {
      var deferred = $q.defer(),
                promise = deferred.promise;
                console.log(gatewayurl);
      //Ajax Starts
        $.ajax({
            url: "http://"+gatewayurl+"/selfupdate",
            type: 'GET',
            data: '',
            beforeSend: function(xhr) { 
              //xhr.setRequestHeader("X-OCTOBER-REQUEST-HANDLER", "onCheckLogin");
              xhr = {};
              //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
          })
        .done(function(response) { 
          console.log(response);
          deferred.resolve(response);
        })
        .fail(function(response) {
          console.log("in error ");
          console.log(response);
          deferred.reject(response);
        });
      //ajax Ends
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            };
            return promise;

      }


  };
})

.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        try{
          //self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name, androidDatabaseImplementation: 2, location: 'default'});
          self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1); 
          angular.forEach(DB_CONFIG.tables, function(table) {
              var columns = [];

              angular.forEach(table.columns, function(column) {
                  columns.push(column.name + ' ' + column.type);
              });

              var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
              self.query(query);
              console.log('Table ' + table.name + ' initialized');
          });

        }
        catch (err)
        {
          console.log('Error..'+err);
        }

    };

    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();

        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });

        return deferred.promise;
    };

    self.fetchAll = function(result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        
        return output;
    };

    self.fetch = function(result) {
        return result.rows.item(0);
    };

    return self;
})

// Resource service example
.factory('Config', function(DB) {
    var self = this;
    
    self.all = function() {
        return DB.query('SELECT * FROM configurations')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };
    
    self.getById = function(id) {
        return DB.query('SELECT * FROM configurations WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };
    self.inserInto = function(keyname,value) {
        return DB.query('INSERT INTO configurations (keyname,value) VALUES ("'+keyname+'", "'+value+'")')
        .then(function(result){
            return result;
        });
    }; 
    self.inserUpdateInto = function(id,keyname,value) {
        return DB.query('INSERT or REPLACE INTO configurations (id, keyname,value) VALUES ((SELECT id from configurations WHERE id="'+id+'"),"'+keyname+'", "'+value+'")')
        .then(function(result){
            return result;
        });
    };        
    self.setUpdate = function(id,fldname,value) {
        return DB.query('UPDATE configurations SET "'+fldname+'"="'+value+'" WHERE id = ?', [id])
        .then(function(result){
            return result;
        });
    };  
    self.dropConfigTable = function(id,fldname) {
        return DB.query('DROP TABLE configurations')
        .then(function(result){
            return DB.fetch(result);
        });
    }; 

    return self;
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
