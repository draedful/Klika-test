var mongorito = require('mongorito');
var Model = mongorito.Model;
var helpers = require('./helpers');
const Models = require('./models');

const LIMIT = 20;

var Tracks = Model.extend({
    collection: 'tracks',
});

Models.set('Tracks', Tracks);


exports.create = function(params) {

    var track = new (this.Models.get('Tracks'))(params);
    return track.save().then(function(resp) {
        return track;
    });

};

exports.find =  function* (query) {
    var tracks = this.Models.get('Tracks');
    if(helpers.isObject(query)) {
        if(helpers.isObject(query.match)) {
            var keys = Object.keys(query.match);
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
            for(var name in query.sort) {
                if(query.sort.hasOwnProperty(name)) {
                    tracks = tracks.sort(name, query.sort[name]);
                }
            }
            tracks = tracks.sort(query.sort);
        }

        if(query.limit) {
            tracks = tracks.limit(query.limit);
        } else {
            tracks = tracks.limit(LIMIT);
        }

        if(query.page) {
            tracks = tracks.skip(query.page * (query.limit || LIMIT))
        }
    }

    return tracks.find().then(function(tracks) {
        return {
            count: count,
            tracks: tracks
        };
    });
}