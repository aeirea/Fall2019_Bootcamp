/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

    mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  var query = {name: "Library West"};
  Listing.findOne(query, function(err, res)
  {
    if (err) throw err;
    console.log(res);
  });
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
};
var removeCable = function() {
  var query = {code: "CABL"};
  Listing.findOneAndDelete(query, function(err, res)
  {
    if (err) throw err;
    console.log(res);
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsLab = function() {
  var query = {code: "PHL"};
  var update = {address: "1953 Museum Rd, Gainesville, FL 32603"};
  Listing.findOneAndUpdate(query,update, function(err, res)
  {
    if (err) throw err;
    //console.log(res);
	Listing.findOne(query, function(err, res)
  {
    if (err) throw err;
    console.log(res);
  });
  });
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then
    log the updated document to the console.

    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function() {
  Listing.find().limit(150).exec(function(err, res)
  {
    if (err) throw err;
	res.forEach(function(x){
		console.log(x);
	});
  });
  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
