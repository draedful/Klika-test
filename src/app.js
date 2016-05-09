const koa = require('koa');
const app = koa();
const logger = require('./app.logger.js')()//require('koa-logger')();
const router = require('koa-router')();
const koaBody = require('koa-body')();
const json = require('koa-json')();
const cors = require('kcors')();
const Store = require('./storage.js');
const DB = require('./db.js');
var mongorito = require('mongorito');
const Models = require('./models');
var config = require('config');
var helpers = require('./helpers');

var cache = {};
console.log('init');
//require('look').start();

const cluster = require('cluster');
const CPUs = require('os').cpus().length;

if(cluster.isMaster) {
     var threadCount = CPUs;
     for (var i = 0; i < threadCount; i++) {
     cluster.fork();
     }

     cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
 });
 } else {

    router.get('/', function*(next) {
        this.body = "Hello world";
        yield next;
    });

    router.post('/find', function *(next) {
        this.body = yield this.Store.find.call(this, this.requestParams);
        yield next;
    });

    router.post('/create', function *(next) {
        var res = yield Store.create.call(this, this.requestParams);
        this.body = res.toJSON();

        yield next;
    });

    module.exports = app
        .use(logger)
        .use(cors)
        .use(json)
        .use(DB.connect)
        // parse http parameters
        .use(koaBody)
        .use(function* (next) {
            if (typeof this.request.body == "string" ) {
                try {
                    this.requestParams = JSON.parse(this.request.body);
                } catch (e) {
                    console.error(e);
                }
            } /*else {
                this.requestParams = this.request.body
            }*/
            yield next;
        })
        .use(router.routes())
        .use(router.allowedMethods())
        //.use(DB.disconnect);

    app.context.Models = Models;
    app.context.Store = Store;
    app.context.mongorito = mongorito;
    app.context.dbHost = config.get('db.host');
    app.listen(config.port);
    /*DB.DB.connect().then(function() {
        Store.Tracks.index('author',{});
        Store.Tracks.index('name',{});
        Store.Tracks.index('genre',{});
        Store.Tracks.index('duration',{});
    });*/
}