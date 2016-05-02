var app = require('koa')();
var logger = require('koa-logger')();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var json = require('koa-json')();
var cors = require('kcors')();

var Store = require('./src/storage.js');
var DB = require('./src/db.js');


router.post('/find', function *(next) {
    this.body = yield Store.find(this.requestParams);
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
    .use(function* (next) {
        yield DB.connect();
        yield next;
    })
    // parse http parameters
    .use(koaBody)
    .use(function* (next) {
        try {
            this.requestParams = JSON.parse(this.request.body);
        } catch(e) {
            console.error(e);
        }
        yield next;
    })
    .use(router.routes())
    .use(router.allowedMethods())
    .use(function* (next) {
        DB.disconnect();
        yield next;
    });


app.listen(3000);