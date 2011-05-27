# Principals of Writing Consistent, Idiomatic JavaScript

### All code in any code-base should look like a single person typed it, no matter how many people contributed. 

### The following list outlines the practices that I use in all code that I am the original author of; contributions to projects that I have created should follow these guidelines. 

### I do not intend to impose my style preferences on other people's code if they have an existing common style - this should be respected. 


#### This is a living document, contributions are welcome: fork, clone, branch, commit, push, pull request.


## Important, Non-Idiomatic Stuff:

### Code Quality

Code should always be verifiable by means of commonly accepted, de-facto standards. Preferably, [JSHint](http://jshint.org/) ... [JSLint](http://jslint.org/) if you _must_.

### Build & Deployment Process

Projects _must_ include some generic means by which source can be compressed in preparation for production use. Preferably, Uglify.js via Node.js. Alternatively, Google Closure Compiler or YUI Compressor via js.jar are acceptable substitutes. Choose one and support it.

### Test Facility

Projects _must_ include some form of unit, reference, implementation or functional testing. Use case demos DO NOT QUALIFY as "tests".


## Idiomatic Style Manifesto


1. Whitespace

	* Never mix spaces and tabs. 
	* When beginning a project, before you write any code, choose between soft indents (spaces) or real tabs &mdash; this is law. 
		* For readablity, I always recommend setting your editor's indent size to two characters &mdash; this means two spaces or two spaces representing a real tab.
	* If your editor supports it, always work with the "show invisibles" setting turned on. The benefits of this practice are:
		* Enforced consistency
		* Eliminating end of line whitespace
		* Eliminating blank line whitespace
		* Commits and diffs that are easier to read


2. Spacing, Formatting and Syntax

	A. Parens, Braces, Linebreaks

	```javascript

		// if/else/for/while/try always have spaces, braces and span multiple lines
		// this encourages readability

		// 2.A.1.1
		// Examples of really cramped syntax

		if(condition) doSomething();

		while(condition) iterating++;

		for(var i=0;i<100;i++) someIterativeFn();


		// 2.A.1.1
		// Use whitespace to promote readability

		if ( condition ) {
			// statements
		}

		while ( condition ) {
			// statements
		}

		for ( var i = 0; i < 100; i++ ) {
			// statements
		}

		if ( true ) {
			// statements
		} else {
			// statements
		}
	```


	B. Assignments, Declarations, Functions ( Named, Expression, Constructor )

	```javascript

		// 2.B.1.1
		// Variables
		var foo = "bar", 
				num = 1, 
				undef;

		// Literal notations:
		var array = [], 
				object = {};


		// 2.B.1.2
		// Using only one `var` per scope (function) promotes readability
		// and keeps your declaration list free of clutter (also saves a few bytes)

		// Bad
		var foo = "";
		var bar = "";
		var qux;

		// Good
		var foo = "", 
				bar = "", 
				quux;

		// or.. 
		var // Comment on these
		foo = "", 
		bar = "", 
		quux;
	```

	```javascript

		// 2.B.2.1
		// Named Function Declaration
		function foo( arg1, argN ) {

		}

		// Usage
		foo( arg1, argN );


		// 2.B.2.2
		// Named Function (w/ callback argument)
		function bar( arg1, callback ) {

			if ( arg1 && callback ) {
				callback();
			}
		}

		// Usage
		bar( arg1, function() {
			// callback statements
		});


		// 2.B.2.3
		// Function Expression
		var quux = function( arg1, callback ) {

			if ( arg1 && callback ) {
				callback();
			}

			// always return 'something'
			return true;
		}

		// Usage:
		quux( arg1, function() {
			// callback statements
		});


		// 2.B.2.4
		// Constructor definition
		function FooBar() {
			return this;
		}

		// Usage:
		var fooBar = new FooBar();
	```


	C. Exceptions, Slight Deviations

	```javascript

		// 2.C.1.1
		// Functions with callbacks 
		foo(function() { 
			// Note there is no extra space between the first paren
			// of the executing function call and the word "function"
		});

		// Function accepting an array, no space
		foo([ "alpha", "beta" ]);

		// 2.C.1.2
		// Function accepting an object, no space
		foo({
			a: "alpha",
			b: "beta"
		});

		// Inner grouping parens, no space
		if ( !("foo" in obj) ) {

		}
	```

	D. Consistency Always Wins

	In sections 2.A-2.C, the whitespace rules are set forth as a recommendation with a simpler, higher purpose: consistency. 
	It's important to note that formatting preferences, such as "inner whitespace" should be considered optional, but only one style should exist across the entire source of your project.

	```javascript

		// 2.D.1.1

		if (condition) {
			// statements
		}

		while (condition) {
			// statements
		}

		for (var i = 0; i < 100; i++) {
			// statements
		}

		if (true) {
			// statements
		} else {
			// statements
		}

	```

3. Type Checking (Courtesy jQuery Core Style Guidelines)

	* String: 

		`typeof variable === "string"`
		
	* Number: 

		`typeof variable === "number"`

	* Boolean: 

		`typeof variable === "boolean"`

	* Object: 

		`typeof variable === "object"`
		
	* Array: 

		* wherever possible:
		
			`Array.isArray(arrayObject)`  

	* null: 

		`variable === null`

	* null or undefined: 

		* `variable == null`

	* undefined:

		* Global Variables:

			* `typeof variable === "undefined"`

		* Local Variables:

			* `variable === undefined`

		* Properties:
			* `object.prop === undefined`
			* `object.hasOwnProperty( prop )`
			* `"prop" in object`


4. Conditional Evaluation

	```javascript

		// 4.1.1
		// When only evaluating that an array has length, 
		// instead of this:
		if ( array.length > 0 ) ...

		// ...evaluate truthiness, like this:
		if ( array.length ) ...


		// 4.1.2
		// When only evaluating that an array is empty, 
		// instead of this:
		if ( array.length === 0 ) ...

		// ...evaluate truthiness, like this:
		if ( !array.length ) ...


		// 4.1.3
		// When only evaluating that a string is not empty, 
		// instead of this:
		if ( string !== "" ) ...

		// ...evaluate truthiness, like this:
		if ( string ) ...


		// 4.1.4
		// When only evaluating that a string is empty, 
		// instead of this:
		if ( string === "" ) ...

		// Good
		if ( !string ) ...


		// 4.1.5
		// When only evaluating that a reference is true, 
		// instead of this:
		if ( foo === true ) ...

		// Good
		if ( foo ) ...


		// 4.1.6
		// When evaluating that a reference is false, 
		// instead of this:
		if ( foo === false ) ...

		// ...use negation to coerce a true evaluation
		if ( !foo ) ...

		// Be careful, this will also match: 0, "", null, undefined, NaN
		// If you _MUST_ test for a boolean false, then use
		if ( foo === false ) ...


		// 4.1.7
		// When only evaluating a ref that might be null or undefined, but NOT false, 
		// instead of this:
		if ( foo === null || foo === undefined ) ...

		// ...take advantage of == type coercion
		if ( foo == null ) ...

		// Remember, using == will match a `null` to BOTH `null` and `undefined`
		// but not `false`
	```


	```javascript

		// 4.2.1
		// Type coercion and evaluation notes

		Prefer `===` over `==` (unless the case requires loose type evaluation)

		=== does not coerce type, which means that:

		"1" === 1;
		// false

		== does coerce type, which means that:

		"1" == 1;
		// true


		// 4.2.2
		// Booleans, Truthies & Falsies
	
		Booleans: true, false

		Truthy are: "foo", 1

		Falsy are: "", 0, null, undefined, NaN, void 0

	```


5. General Style

	```javascript

		// 5.1.1
		// A Practical Application:

		(function( global ) {
			var Module = (function() {

				// Private to this closure
				var secret = "secret";

				return {
					// This is some boolean property
					bool: true,
					// Some other important string
					string: "a string",
					// An array property
					array: [ 1, 2, 3, 4 ],
					// An object property
					object: {
							lang: "en-Us"
					},
					getSecret: function() {
						// get the "private" variable from here
						return secret;
					},
					setSecret: function( value ) {
						// set the "private" variable
						return ( secret = value );
					}
				};
			};

			// Other things might happen here
			
			// expose our module to the global object
			global.Module = Module;
			
		})( this );
	```

	* NOTE: In the above example, "secret" is _not_really_ private


6. Naming

	```javascript

		`dog` is a string

		`dogs` is an array of `dog` strings

		camelCase; function and var declarations

		PascalCase; constructor function
	```

7. Misc

	A. Using `switch` should be avoided, modern method tracing will blacklistsfunctions with switch statements

	Also, switch sucks. http://jsperf.com/switch-vs-object-literal-vs-module

	```javascript

		// 7.A.1.1
		// An example switch statement

		switch( foo ) {
			case "alpha":
				alpha();
				break;
			case "beta":
				beta();
				break;
			default:
				// something to default to
				break;
		}

		// 7.A.1.2
		// A better approach would be to use an object literal or even a module:

		var switchObj = {
			alpha: function() {
				// statements
				// a return
			}, 
			beta: function() {
				// statements
				// a return
			}, 
			default: function() {
				// statements
				// a return
			}
		};

		var switchModule = (function () {
			return {
				alpha: function() {
					// statements
					// a return
				}, 
				beta: function() {
					// statements
					// a return
				}, 
				default: function() {
					// statements
					// a return
				}
			};
		})();


		// 7.A.1.3
		// If `foo` is a property of `switchObj` or `switchModule`, execute as a method...

		switchObj[ foo ] && switchObj[ foo ]( args );
		
		switchModule[ foo ] && switchModule[ foo ]( args );

		// If you know and trust the value of `foo`, you could even omit the right hand evaluation
		// leaving only the execution:

		switchObj[ foo ]( args );
		
		switchModule[ foo ]( args );


		// This pattern also promotes code reusability
		
	```

	B. Early returns promote code readability with negligible performance difference

	```javascript

		// 7.B.1.1
		// Bad:
		function returnLate( foo ) {
			var ret;

			if ( foo ) {
				ret = "foo";
			} else {
				ret = "quux";
			}
			return ret;
		}

		// Good:

		function returnEarly( foo ) {

			if ( foo ) {
				return "foo";
			}
			return "quux";
		}
	```


8. Comments

	* JSDoc style is good (Closure Compiler type hints++)
	* Single line above the code that is subject
	* Multiline is good
	* End of line comments are prohibited!


