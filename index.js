var app = require('koa')();
var logger = require('./src/app.logger.js')()//require('koa-logger')();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var json = require('koa-json')();
var cors = require('kcors')();
var Store = require('./src/storage.js');
var DB = require('./src/db.js');



router.get('/', function*(next) {
    this.body = "Hello world";
    yield next;
});

router.post('/find', function *(next) {
    console.log('find');
    this.body = yield Store.find(this.requestParams);
    console.log('find end');
    yield next;
});

router.post('/create', function *(next) {
    var res = yield Store.create(this.requestParams);
    this.body = res.toJSON();
    yield next;
});

app
    .use(logger)
    .use(cors)
    .use(json)
    .use(DB)
    // parse http parameters
    .use(koaBody)
    .use(function* (next) {
        if(this.request && this.request.body) {
            try {
                this.requestParams = JSON.parse(this.request.body);
            } catch(e) {
                console.error(e);
            }
        }
        yield next;
    })
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);