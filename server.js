var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var index = require( './modules/routes/index' );
var mongo = require( './modules/routes/mongo' );

app.use( '/', index );
app.use( '/messages', mongo );
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

// globals
var port = process.env.PORT || 7654;

// spin up server
app.listen(port, function(){
  console.log('Server running on: ', port);
}); // end of app.listen
