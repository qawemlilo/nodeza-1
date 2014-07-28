
var when = require('when');
var config = require('./config.json');
var Cache = null;

module.exports = config;

config.exec = function (App, collections) {

	if (Cache) {
	  return when(Cache);
	}

  var categories = new collections.Categories();

  return categories.fetch()
  .then(function (collection) {
    config.collection = collection;
    Cache = config;
    
    return config;
  });
};