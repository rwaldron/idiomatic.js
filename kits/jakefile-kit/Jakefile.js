var // Program refs
fs = require("fs"),
sys = require("sys"),
uglify = require("uglify-js"),
jshint = require("jshint").JSHINT,
print = require("sys").print,
util = require("util"),
exec = require("child_process").exec,
spawn = require("child_process").spawn,
assert = require("assert"),
child;

// TODO: move project specific configs to external file

// global constant
// Minimal license header for compressed version of code
LICENSE = "/*! Project.js, MIT License */";

// global constant
// output destination
DIST = "dist/";

// global constant
// project files run down
FILES = {

	// Name this property to match the name of your project
	// This will determine the name of the files saved to dist/
	// eg. "mylibrary" => "dist/mylibrary.js"
	project: [
		"src/core.js",
		""
	],
	server: [

	],
	unit: [
		"test/unit/core.js",
		""
	]
};

// global constant
// stores all the jshint configs, edit as needed
HINTS = {
	project: { devel: true, undef: true, noempty: true, evil: true, forin: false, maxerr: 100 },
	server: { devel: true, noempty: true, evil: true, forin: false, maxerr: 100 },
	unit: { devel: true, evil: true, forin: false, maxerr: 100 }
};



desc("Uglify JS");
task( "compress", [], function( params ) {

	print( "\nUglifying...\n\n" );

	var ast, out, _files, all,
	files = FILES;


	for ( var type in files ) {

		// DO NOT INCLUDE: server, unit
		if ( [ "server", "unit" ].indexOf( type ) === -1 ) {

			_files = files[ type ];
			all = "";

			// Concatenate JavaScript resources
			_files.forEach(function(file, i) {
				if ( file.match(/^.*js$/) && file ) {

					print( "        " + file + "\n" );

					all += fs.readFileSync( file ).toString();
				}
			});

			// Outout concatenated
			out = fs.openSync( DIST + type + ".js", "w+" );
			fs.writeSync( out, all );

			// Create AST from concatenated sources
			ast = uglify.parser.parse( all );

			// Open output stream
			out = fs.openSync( DIST + type + ".min.js", "w+" );

			// Compress AST
			ast = uglify.uglify.ast_mangle( ast );
			ast = uglify.uglify.ast_squeeze( ast );

			// Output regenerated, compressed code
			fs.writeSync( out, LICENSE + "\n" + uglify.uglify.gen_code( ast ) );

			print( "\n    Complete: " + DIST + type + ".js \n\n" );
		}
	}
});

desc("JSHint");
task( "hint", [], function( params ) {

	print( "\nHinting...\n" );

	var files = FILES,
	hints = HINTS;

	function hintFile( file, hint ) {

		var src = fs.readFileSync( file, "utf8"),
		ok = {
			// warning.reason
			"Expected an identifier and instead saw 'undefined' (a reserved word).": true,
			"Use '===' to compare with 'null'.": true,
			"Use '!==' to compare with 'null'.": true,
			"Expected an assignment or function call and instead saw an expression.": true,
			"Expected a 'break' statement before 'case'.": true,
			"'e' is already defined.": true,

			// warning.raw
			"Expected an identifier and instead saw \'{a}\' (a reserved word).": true
		},
		found = 0, errors, warning;

		jshint( src, hint );

		errors = jshint.errors;


		for ( var i = 0; i < errors.length; i++ ) {
			warning = errors[i];

			// If a warning exists for this error
			if ( warning &&
					// If the warning has evidence and the evidence is NOT a single line comment
					( warning.evidence && !/^\/\//.test( warning.evidence.trim() ) )
				) {

				//console.dir( warning );

				if ( !ok[ warning.reason ] && !ok[ warning.raw ] ) {
					found++;

					print( "\n" + file + " at L" + warning.line + " C" + warning.character + ": " + warning.reason );
					print( "\n    " + warning.evidence.trim() + "\n");

				}
			}
		}
		if ( found > 0 ) {
			print( "\n\n" + found + " Error(s) found.\n" );

		} else {
			print( "        PASS: " + file + "\n" );
		}
	}

	[ "joystick", "server", "unit" ].forEach(function( set ) {
		print( "\n    " + set + ": \n" );

		files[ set ].forEach(function( file, i ) {

			if ( file ) {
				hintFile( file, hints[ set ] );
			}

		});
	});
});

task( "clean", [], function( params ) {

	print( "\nCleaning...\n\n" );
	var files = [
		DIST + "joystick.js",
		DIST + "joystick.min.js",
		""
	],
	length = files.length;

	files.forEach(function( file, i ) {

		if ( file ) {
			exec("rm " + file,
				function( error, stdout, stderr ) {

					if ( error !== null && !/No such file/.test( error ) ) {
						console.log( error );
					} else {
						// no such file errors will be allowed through, just ignore them
						if ( error !== null ) {
							console.log("  deleted: " + file );
						}
					}
				}
			);

		} else {
			length--;
		}

		if ( length - 1 === i ) {
			print("Completed.\n");
		}
	});
});

task( "default", [ "hint", "compress" ], function( params ) {

	print( "\n" );

});
