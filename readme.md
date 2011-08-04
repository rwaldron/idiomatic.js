# Principles of Writing Consistent, Idiomatic JavaScript

## This is a living document and new ideas for improving the code around us are always welcome. Contribute: fork, clone, branch, commit, push, pull request.

### All code in any code-base should look like a single person typed it, no matter how many people contributed.

### The following list outlines the practices that I use in all code that I am the original author of; contributions to projects that I have created should follow these guidelines.

### I do not intend to impose my style preferences on other people's code if they have an existing common style - this should be respected.


## Important, Non-Idiomatic Stuff:

### Code Quality: Awesome Tools, Resources & References

 * [jsPerf](http://jsperf.com)
 * [jsFiddle](http://jsfiddle.net)
 * [jsbin](http://jsbin.com)
 * [JavaScript Lint (JSL)](http://javascriptlint.com)
 * [jshint](http://jshint.com)
 * [jslint](http://jslint.org)

[Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)


### Get Smart

[http://es5.github.com/](http://es5.github.com/)

The following should be considered 1) incomplete, and 2) *REQUIRED READING*. I don't always agree with the style written by the authors below, but one thing is certain: They are consistent. Furthermore, these are authorities on the language.

 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Rebecca Murphey](http://www.rebeccamurphey.com/) or [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)



### Build & Deployment Process

Projects should always attempt to include some generic means by which source can be compressed in preparation for production use. A few popular and proven tools include: Uglify.js on Node.js, Google Closure Compiler on js.jar or YUI Compressor on js.jar. Choose one and support it.

You can now find a functional, generic "build kit" in the /kit directory of this repository. Usage is easy: 1) copy the contents of a kit found in /kits/ to a new working directory, 2) save your project .js file in the /src/ directory, 3) put the name of the project in "project.txt", 4) run "make" from command line. (Even easier directions: replace occurrences of "foo")

### Test Facility

Projects _must_ include some form of unit, reference, implementation or functional testing. Use case demos DO NOT QUALIFY as "tests".

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Hiro](http://hirojs.com/)


## Table of Contents

 * [Whitespace](#whitespace)
 * [Beautiful Syntax](#spacing)
 * [Type Checking (Courtesy jQuery Core Style Guidelines)](#type)
 * [Conditional Evaluation](#cond)
 * [Practical Style](#practical)
 * [Naming](#naming)
 * [Misc](#misc)
 * [Native & Host Objects](#native)
 * [Comments](#comments)


## Idiomatic Style Manifesto


1. <a name="whitespace">Whitespace</a>

	* Never mix spaces and tabs.
	* When beginning a project, before you write any code, choose between soft indents (spaces) or real tabs &mdash; this is law.
		* For readablity, I always recommend setting your editor's indent size to two characters &mdash; this means two spaces or two spaces representing a real tab.
	* If your editor supports it, always work with the "show invisibles" setting turned on. The benefits of this practice are:
		* Enforced consistency
		* Eliminating end of line whitespace
		* Eliminating blank line whitespace
		* Commits and diffs that are easier to read


2. <a name="spacing">Beautiful Syntax</a>

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
	};

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

	E. End of Lines and Empty Lines

	Whitespace can ruin diffs and make changesets impossible to read. Consider incorporating a pre-commit hook that removes end-of-line whitespace and blanks spaces on empty lines automatically.

3. <a name="type">Type Checking (Courtesy jQuery Core Style Guidelines)</a>

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


4. <a name="cond">Conditional Evaluation</a>

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
	// When only evaluating that a string _is_ empty,
	// instead of this:
	if ( string === "" ) ...

	// ...evaluate falsy-ness, like this:
	if ( !string ) ...


	// 4.1.5
	// When only evaluating that a reference is true,
	// instead of this:
	if ( foo === true ) ...

	// ...evaluate like you mean it, take advantage of it's primitive capabilities:
	if ( foo ) ...


	// 4.1.6
	// When evaluating that a reference is false,
	// instead of this:
	if ( foo === false ) ...

	// ...use negation to coerce a true evaluation
	if ( !foo ) ...

	// ...Be careful, this will also match: 0, "", null, undefined, NaN
	// If you _MUST_ test for a boolean false, then use
	if ( foo === false ) ...


	// 4.1.7
	// When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
	// instead of this:
	if ( foo === null || foo === undefined ) ...

	// ...take advantage of == type coercion, like this:
	if ( foo == null ) ...

	// Remember, using == will match a `null` to BOTH `null` and `undefined`
	// but not `false`, "" or 0
	null == undefined


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


5. <a name="practical">Practical Style</a>

	```javascript

	// 5.1.1
	// A Practical Module

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
		})();

		// Other things might happen here

		// expose our module to the global object
		global.Module = Module;

	})( this );

	```

	* NOTE: In the above example, "secret" is _not_really_ private

	```javascript

	// 5.2.1
	// A Practical Constructor

	(function( global ) {

		function Ctor( foo ) {

			this.foo = foo;

			return this;
		}

		Ctor.prototype.getFoo = function() {
			return this.foo;
		};

		Ctor.prototype.setFoo = function( val ) {
			return ( this.foo = val );
		};


		// To call constructor's without `new`, you might do this:
		var ctor = function( foo ) {
			return new Ctor( foo );
		};


		// expose our constructor to the global object
		global.ctor = ctor;

	})( this );

	```



6. <a name="naming">Naming</a>


	You are not a human code compiler/compressor, so don't try to be one.

	The following code is an example of egregious naming:

	```javascript

	// 6.1.1
	// Example of code with poor names

	function q(s) {
		return document.querySelectorAll(s);
	}
	var i,a=[],els=q("#foo");
	for(i=0;i<els.length;i++){a.push(els[i]);}
	```

	Without a doubt, you've written code like this - hopefully that ends today.

	Here's the same piece of logic, but with kinder, more thoughtful naming (and a readable structure):

	```javascript

	// 6.2.1
	// Example of code with improved names

	function query( selector ) {
		return document.querySelectorAll( selector );
	}

	var idx = 0,
		elements = [],
		matches = query("#foo"),
		length = matches.length;

	for( ; idx < length; idx++ ){
		elements.push( matches[ idx ] );
	}

	```

	A few additional naming pointers:

	```javascript

	// 6.3.1
	// Naming strings

	`dog` is a string


	// 6.3.2
	// Naming arrays

	`dogs` is an array of `dog` strings


	// 6.3.3
	// Naming functions, objects, instances, etc

	camelCase; function and var declarations


	// 6.3.4
	// Naming constructors, prototypes, etc.

	PascalCase; constructor function


	// 6.3.5
	// Naming regular expressions

	rDesc = //;

	```

7. <a name="misc">Misc</a>

	A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch statements

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
		_default: function() {
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
			_default: function() {
				// statements
				// a return
			}
		};
	})();


	// 7.A.1.3
	// If `foo` is a property of `switchObj` or `switchModule`, execute as a method...

	( switchObj.hasOwnProperty( foo ) && switchObj[ foo ] || switchObj._default )( args );

	( switchModule.hasOwnProperty( foo ) && switchModule[ foo ] || switchModule._default )( args );

	// If you know and trust the value of `foo`, you could even omit the OR check
	// leaving only the execution:

	switchObj[ foo ]( args );

	switchModule[ foo ]( args );


	// This pattern also promotes code reusability.

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


8. <a name="native">Native & Host Objects</a>

	The basic principal here is:

	### Don't do stupid shit and everything will be ok.

	To reinforce this concept, please watch the following presentation:

	#### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

	<iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

	http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542

9. <a name="comments">Comments</a>

	* JSDoc style is good (Closure Compiler type hints++)
	* Single line above the code that is subject
	* Multiline is good
	* End of line comments are prohibited!
