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


2. Spacing

	A. Parens, Braces, Linebreaks

	```javascript

		// if/else/for/while/try always have spaces, braces and span multiple lines
		// this encourages readability

		//	Bad
		if(condition) doSomething();

		while(condition) iterating++;

		for(var i=0;i<100;i++) someIterativeFn();

		//	Good
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

		// Variables
		var foo = "bar", 
				num = 1, 
				undef;

		// Literal notations:
		var array = [], 
				object = {};

		// Attempt to maintain a single `var` per scope

		// Bad:
		var foo = "";
		var bar = "";
		var qux;

		// Good:
		var foo = "", 
				bar = "", 
				qux;

		// or.. 
		var // Comment on these
		foo = "", 
		bar = "", 
		qux;

		// Good: Named Function + Usage
		function foo( arg1, argN ) {

		}

		foo( arg1, argN );


		// Good: Named Function + Usage with callback
		function bar( arg1, callback ) {

			if ( arg1 && callback ) {
				callback();
			}
		}

		bar( arg1, function() {
			// callback statements
		});


		// Good: Function Expression + Usage
		var quux = function( arg1, callback ) {

			if ( arg1 && callback ) {
				callback();
			}

			// always return 'something'
			return true;
		}

		quux( arg1, function() {
			// callback statements
		});


		// Good: Constructor definition
		function FooBar() {
			return this;
		}

		var fooBar = new FooBar();
	```


	C. Exceptions, Slight Deviations

	```javascript

		// Functions with callbacks 
		foo(function() { 
			// Note there is no extra space between the first paren
			// of the executing function call and the word "function"
		});

		// Function accepting an array, no space
		foo([ "alpha", "beta" ]);

		// Function accepting an object, no space
		foo({
			a: "alpha",
			b: "beta"
		});

		// Inner grouping parens, no space
		if ( !("foo" in obj) ) {

		}
	```

3. Type Checking (Courtesy jQuery Core Style Guidelines)

	* String: 

		`typeof object === "string"`
		
	* Number: typeof object === "number"
	* Boolean: typeof object === "boolean"
	* Object: typeof object === "object"
	* Array: Array.isArray(arrayObject) wherever possible
	* null: object === null
	* null or undefined: object == null
	* undefined:
			* Global Variables: typeof variable === "undefined"
			* Local Variables: variable === undefined
			* Properties: object.prop === undefined


4. Evaluation

	```javascript

		// Bad
		array.length > 0

		// Good
		array.length


		// Bad
		array.length === 0

		// Good
		!array.length


		// Bad
		string !== ""

		// Good
		string


		// Bad
		string === ""

		// Good
		!string


		// Bad
		foo === true

		// Good
		foo


		// Bad
		foo === false

		// Good
		!foo
			// Be careful, this will also match: 0, "", null, undefined, NaN


		// Bad
		foo === null || foo === undefined

		// Good
		foo == null
			// Using == will match null as both null and undefined
			// but not false

	
		// Notes:

		Prefer `===` over `==` (unless the case requires loose type evaluation )

		Booleans, Truthies & Falsies
	
		Booleans: true, false

		Truthy are: "foo", 1

		Falsy are: "", 0, null, undefined, NaN, void 0
	```

	
4. Style	

	```javascript

		// A Practical Application:

		var Module = (function() {
									^ No space

			// really private 
			var private = "secret";

			return {
				// properties
				defaults: {
					// comments
					bool: true, 
					// comments
					string: "a string",
					// comments
					array: [ 1, 2, 3, 4 ], 
					// comments
					object: {
							lang: "en-Us"
					}
				}, 
				getBool: function() {
					// comments
					return this.defaults.bool;
				},
				setBool: function( arg1 ) {
					// comments
					return ( this.defaults.bool = arg1 );
				}
			};
		})();
	```

	* NOTE: Comments are never at the end of the line, 
					always on the line above.


5. Naming

	```javascript

		`dog` is a string

		`dogs` is an array of `dog` strings

		camelCase; function and var declarations

		PascalCase; constructor function
	```

6. Misc

	A. Using `switch` should be avoided, modern method tracing blacklists functions with switch statements

	```javascript

		// Bad:

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

		// Good:

		var module = (function () {
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

		// If `foo` is a property of `module`, execute the method 
		module[ foo ] && module[ foo ]();


		// This pattern is also really good because it promotes code reusability.
	```

	B. Early returns are nice clean and sometimes offer perf boosts

	```javascript
		
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


7. Comments

	* JSDoc style is good (Closure Compiler type hints++)
	* Single line above the code that is subject
	* Multiline is good
	* End of line comments are prohibited!

