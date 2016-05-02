var mongorito = require('mongorito');
var helpers = require('./helpers');
var config = require('config');
require('./db.logger.js');

const State = {
    DISCONNECTED:   0,
    PROGRESS:       1,
    CONNECTED:      2
};

module.exports = {
    state: State.DISCONNECTED,
    isConnected() {
        return this.state == State.CONNECTED;
    },
    connect: function() {
        if(!this.isConnected() ) {
            if(config.has('db.host')) {
                return mongorito.connect(config.get('db.host')).then(() => {
                    this.state = State.CONNECTED;
                }).catch(function(e) {
                    console.error('Cant db connection', e);
                });
            }
            return Promise.reject();
        }
        return Promise.resolve();
    },
    disconnect: helpers.debounce(function() {
        mongorito.disconnect();
        this.state = State.DISCONNECTED;
    }, config.get('db.lifeTimeConnection'))
};