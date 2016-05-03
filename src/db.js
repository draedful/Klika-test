var mongorito = require('mongorito');
var helpers = require('./helpers');
var config = require('config');
require('./db.logger.js');

module.exports = function*(next) {

    if (config.has('db.host')) {
        yield mongorito.connect(config.get('db.host')).catch(function (e) {
            console.error('Cant db connection', e);
        });
    }


    yield next;
}