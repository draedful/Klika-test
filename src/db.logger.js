var config = require('config');
var intel = require('intel')
var log = intel.getLogger('db');
log.setLevel(log.DEBUG);
if(process.env.NODE_ENV && process.env.NODE_ENV != 'development') {
    log.addHandler(new intel.handlers.File('log/'+process.env.NODE_ENV.toLowerCase()+'.db.log'));
}

var Logger = require('mongodb').Logger;
Logger.setLevel(config.get('log_level.db'));
Logger.filter('class', ['Cursor']);
Logger.setCurrentLogger(function(msg, context) {
    switch(context.type) {
        case 'debug':
            log.debug('['+new Date(context.date)+' #'+context.pid + ']' +'[ MongoDB~'+context.className+'] -- : ' + context.message);
            return;
        case 'info':
            log.debug('['+new Date(context.date)+' #'+context.pid + ']' +'[ MongoDB~'+context.className+'] -- : ' + context.message);
            return;
        case 'error':
            log.debug('['+new Date(context.date)+' #'+context.pid + ']' +'[ MongoDB~'+context.className+'] -- : ' + context.message);
            return;
    }
    return;
    //console.log(context.type.toUpperCase()+' ['+new Date(context.date)+' #'+context.pid + ']' +'[ MongoDB~'+context.className+'] -- : ' + context.message);
});