var intel = require('intel');

module.exports = dev;

var AppLog = intel.getLogger('app');
AppLog.setLevel(AppLog.DEBUG);
if(process.env.NODE_ENV && process.env.NODE_ENV != 'development') {
    AppLog.addHandler(new intel.handlers.File('log/'+process.env.NODE_ENV.toLowerCase()+'.app.log'));
}

function dev(opts) {
    return function* logger(next) {

        var date = new Date();
        var start = process.hrtime();
        yield next;
        var diff = process.hrtime(start);
        log(date, this.method, this.url,  Math.round((diff[0]*1000) + (diff[1]/1000000)));

        try {
            yield next;
        } catch (err) {
            // log uncaught downstream errors
            AppLog.critical('[%s #%s] %s %s - %s', startDate, process.pid, this.method, this.url, err);
            throw err;
        }
        var res = this.res;

        var onfinish = done.bind(null, 'finish');
        var onclose = done.bind(null, 'close');

        res.once('finish', onfinish);
        res.once('close', onclose);

        function done(event){
            res.removeListener('finish', onfinish);
            res.removeListener('close', onclose);
        }
    }
}

function log(startDate, method, url, diff) {
    AppLog.debug('[%s #%s] %s %s - %s', startDate, process.pid, method, url,  diff, 'ms');
}