var // Dependencies
zombie = require( "zombie" ),
fs = require( "fs" );

var i, // Storage for configurable options
tests = [],
buffer = fs.readFileSync( "./test/headless/tests.json" );

try {
	tests = JSON.parse( buffer.toString() );

	for( i=0; i<tests.length; i++ ) {
		tests[i] = require(tests[i]);
	}
} catch ( ex ) {
	console.log( ex.toString() );
}

// Export function to run in Jakefile
exports.run = function() {
	// Iterate over each test file and each test module
	tests.forEach(function( test ) {
		Object.keys(test).forEach(function( module ) {
			// Pass each module zombie instance
			test[module]( zombie );
		});
	});
};
