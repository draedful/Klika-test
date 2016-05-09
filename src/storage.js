var mongorito = require('mongorito');
var Model = mongorito.Model;
var helpers = require('./helpers');
var Models = require('./models');
var pick = require('lodash/pick');
var extend = require('lodash/extend');

var LIMIT = 20;

var Tracks = Model.extend({
    collection: 'tracks',
});

Models.set('Tracks', Tracks);

exports.Tracks = Tracks;

exports.create = function(params) {
    var track = new (this.Models.get('Tracks'))(params);
    return track.save().then(function(resp) {
        return track;
    });

};

/**
 * Поиск с параметрами
 *
 * @param {Object} query - параметры запроса
 * @param {Object} query.match - параметры поиска по паттерну
 * @param {Object} query.sort - параметры сортировки
 * @param {Number} query.limit - размер списка
 * @param {String} query.page
 *
 * @return {Promise}
 * */
exports.find =  function* (query) {
    var tracks = this.Models.get('Tracks');
    query = extend({limit: LIMIT}, query);

    if(helpers.isObject(query.match)) {

        var keys = Object.keys(pick(query.match, ['author', 'name', 'duration', 'genre']));
        for(var i = keys.length; i >= 0 ;i--) {
            if(query.match.hasOwnProperty(keys[i])) {
                tracks = tracks.where({
                    [keys[i]]: new RegExp(query.match[keys[i]], 'i')
                });
            }
        }


        var count = yield tracks.count();

        if(!count) {
            return Promise.resolve({
                count: count,
                tracks: []
            });
        }
    }
    if(helpers.isObject(query.sort)) {
        var keys = Object.keys(pick(query.sort, ['author', 'name', 'duration', 'genre']));

        for(var i = keys.length; i >= 0 ;i--) {
            if(query.sort.hasOwnProperty(keys[i])) {
                tracks = tracks.sort(keys[i], query.sort[keys[i]]);
            }
        }

        //tracks = tracks.sort(pick(query.sort, ['author', 'name', 'duration', 'genre']));
    }

    if(query.limit /*&& query.limit < 100*/) {
        tracks = tracks.limit(query.limit);
    } else {
        tracks = tracks.limit(LIMIT);
    }

    if(query.page) {
        tracks = tracks.skip(query.page * (query.limit || LIMIT))
    }

    return tracks.find().then(function(tracks) {

        return {
            count: count,
            tracks: tracks
        };
    });
}