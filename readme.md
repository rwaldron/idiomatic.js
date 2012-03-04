# Principe d'écriture d'un code Javascript cohérent et idiomatique

## Il s'agit d'un document vivant, les nouvelles idées pour améliorer le code autour de nous sont toujours les bienvenues. Pour Contribuer: "fork", "clone", "branch", "commit", "push", "pull request".

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* John Fischer [@jfroffice](https://twitter.com/jfroffice), [github](https://github.com/jfroffice/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idangazit)
* Leo Balter [@leobalter](http://twitter.com/leobalter), [github](https://github.com/leobalter)
* Breno Oliveira [@garu_rj](http://twitter.com/garu_rj), [github](https://github.com/garu)
* Leo Beto Souza [@leobetosouza](http://twitter.com/leobetosouza), [github](https://github.com/leobetosouza)

## Tout code, peu importe les bases sur lequels il est établi, devrait ressembler au code tapé par une seule personne, peu importe le nombre de personnes ayant contribué.

### La liste suivante donne un aperçu des pratiques que j'utilise dans tout le code dont j'en suis l'auteur. Les contributions aux projets dont je suis l'auteur doivent suivre ces lignes directrices.

### Je n'ai pas l'intention d'imposer mes préférences de style sur le code d'autres personnes, si elles ont un style commun - dans ce cas, il est important de respecter le style de chacun.

> "Il est essentiel de réaliser que pour la réussite d'un projet, un bon intervenant ne doit pas coder pour soit même mais pour les autres. Si un millier de personnes doivent utiliser votre code, écrivez le avec un maximun de clareté, non pour des préférences personnelles, mais pour être au plus prêt du besoin." - Idan Gazit

## Traductions

* [Anglais](https://github.com/rwldrn/idiomatic.js)
* [Espagnol](https://github.com/MatiasArriola/idiomatic.js/)
* [Portugais - Brésilien](https://github.com/leobalter/idiomatic.js/)

## Important, aspect Non-Idiomatique :

### Qualité du Code : indispensables, ressources et références

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Optimisation des outils de qualité de code par Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)


### Soyez Intelligent

[http://es5.github.com/](http://es5.github.com/)

Ce qui suit doit être considéré 1) __incomplète__, et 2) __LECTURE OBLIGATOIRE__. Je n'ai pas toujours d'accord avec le style écrit par les auteurs ci-dessous, mais une chose est certaine: Ils sont conformes. En outre, ce sont les autorités sur le language.

 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Rebecca Murphey](http://www.rebeccamurphey.com/) or [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)


### Processus de "Build" et de déploiement

Les projets doivent toujours tenter d'inclure des moyens de vérifier le code implémenté avec Lint, testé et minifier les fichiers afin d'avoir de meilleurs performances en production.
Pour cette tâche, [grunt](https://github.com/cowboy/grunt) maintenu par Ben Alman rassemble les bonnes pratiques officielles du project idiomatic.js.

### Testabilité

Les projets _doivent_ inclure certaines formes de test unitaire, par référence, d'implementation et de périmètre fonctionnelle. Utilisez des démos de cas ne sont pas des «tests». Ce qui suit est une bibliothèque de test, aucune d'entre elles n'ait approuvée plus que l'autre.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)

## Table des matières

 * [Les Espaces](#whitespace)
 * [Beautiful Syntax](#spacing)
 * [Type Checking (Courtesy jQuery Core Style Guidelines)](#type)
 * [Conditional Evaluation](#cond)
 * [Practical Style](#practical)
 * [Règles de nommage](#naming)
 * [Misc](#misc)
 * [Native & Host Objects](#native)
 * [Commentaires](#comments)
 * [One Language Code](#language)

## Manifeste style idiomatique

1. <a name="whitespace">Les Espaces</a>

	* Ne jamais mélanger les espaces et les tabulations.
	* Avant d'écriture le moindre code en début de projet, vous devez choisir entre l'indentation par espace ou par tabulation. C'est une règle.
	 	* Pour la lisibilité, paramétrer votre éditeur avec une indentation de 4 caractères.
	* Si votre éditeur le supporte, travaillez toujours avec le mode "afficher les caractères invisibles" actif. Les avantages de cette pratique sont:
		* Améliore la cohérence du code
		* Elimine les espaces de fin de ligne
		* Elimine les espaces utilisés pour des lignes blanches
		* Améliorer la lisibilité de vos "commit" et des "diff"


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

	// Even better:

	var i,
		length = 100;

	for ( i = 0; i < length; i++ ) {
		// statements
	}

	// Or...

	var i = 0,
		length = 100;

	for ( ; i < length; i++ ) {
		// statements
	}

	var prop;

	for ( prop in object ) {
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
	// and keeps your declaration list free of clutter (also saves a few keystrokes)

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

	// 2.B.1.3
	// var statements should always be in the beginning of their respective scope (function).
	// Same goes for const and let from ECMAScript 6.

	// Bad
	function foo() {

		// some statements here

		var bar = "",
			qux;
	}

	// Good
	function foo() {
		var bar = "",
			qux;

		// all statements after the variables declarations.
	}
	```

	```javascript

	// 2.B.2.1
	// Named Function Declaration
	function foo( arg1, argN ) {

	}

	// Usage
	foo( arg1, argN );


	// 2.B.2.2
	// Named Function Declaration
	function square( number ) {
		return number * number;
	}

	// Usage
	square( 10 );

	// Really contrived continuation passing style
	function square( number, callback ) {
		callback( number * number );
	}

	square( 10, function( square ) {
		// callback statements
	});


	// 2.B.2.3
	// Function Expression
	var square = function( number ) {
		// Return something valuable and relevant
		return number * number;
	};

	// Function Expression with Identifier
	// This preferred form has the added value of being
	// able to call itself and have an identity in stack traces:
	var factorial = function factorial( number ) {
		if ( number < 2 ) {
			return 1;
		}

		return number * factorial( number-1 );
	};


	// 2.B.2.4
	// Constructor Declaration
	function FooBar( options ) {

		this.options = options;
	}

	// Usage
	var fooBar = new FooBar({ a: "alpha" });

	fooBar.options;
	// { a: "alpha" }

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

	Les espaces peuvent anéantir la lisibilité de vos "diffs". Considérez que la suppression des espaces et des espaces en fin de ligne doit être effectuer __automatiquement__ avant chaque "commit".

3. <a name="type">Type Checking (Courtesy jQuery Core Style Guidelines)</a>

	3.A Actual Types

	* String:

		`typeof variable === "string"`

	* Number:

		`typeof variable === "number"`

	* Boolean:

		`typeof variable === "boolean"`

	* Object:

		`typeof variable === "object"`

	* Array:

		`Array.isArray(arrayObject)`
		(wherever possible)

	* null:

		`variable === null`

	* null or undefined:

		`variable == null`

	* undefined:

		* Global Variables:

			* `typeof variable === "undefined"`

		* Local Variables:

			* `variable === undefined`

		* Properties:
			* `object.prop === undefined`
			* `object.hasOwnProperty( prop )`
			* `"prop" in object`


	JavaScript is a dynamically typed language - which can be your best friend or worst enemy, so: Always respect `type`, as recommended.


	3.B Coerced Types

	Consider the implications of the following...

	Given this HTML:

	```html

	<input type="text" id="foo-input" value="1">

	```


	```js

	// 3.B.1.1

	// `foo` has been declared with the value `0` and its type is `number`
	var foo = 0;

	// typeof foo;
	// "number"
	...

	// Somewhere later in your code, you need to update `foo`
	// with a new value derived from an input element

	foo = document.getElementById("foo-input").value;

	// If you were to test `typeof foo` now, the result would be `string`
	// This means that if you had logic that tested `foo` like:

	if ( foo === 1 ) {

		importantTask();

	}

	// `importantTask()` would never be evaluated, even though `foo` has a value of "1"


	// 3.B.1.2

	// You can preempt issues by using smart coercion with unary + or - operators:

	foo = +document.getElementById("foo-input").value;
	      ^ unary + operator will convert its right side operand to a number

	// typeof foo;
	// "number"

	if ( foo === 1 ) {

		importantTask();

	}

	// `importantTask()` will be called
	```

	Here are some common cases along with coercions:


	```javascript

	// 3.B.2.1

	var number = 1,
		string = "1",
		bool = false;

	number;
	// 1

	number + "";
	// "1"

	string;
	 // "1"

	+string;
	// 1

	+string++;
	// 1

	string;
	// 2

	bool;
	// false

	+bool;
	// 0

	bool + "";
	// "false"
	```


	```javascript
	// 3.B.2.2

	var number = 1,
		string = "1",
		bool = true;

	string === number;
	// false

	string === number + "";
	// true

	+string === number;
	// true

	bool === number;
	// false

	+bool === number;
	// true

	bool === string;
	// false

	bool === !!string;
	// true
	```

	```javascript
	// 3.B.2.3

	var array = [ "a", "b", "c" ];

	!!~array.indexOf( "a" );
	// true

	!!~array.indexOf( "b" );
	// true

	!!~array.indexOf( "c" );
	// true

	!!~array.indexOf( "d" );
	// false


	var num = 2.5;

	parseInt( num, 10 );

	// is the same as...

	~~num;

	```

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
	ALWAYS evaluate for the best, most accurate result - the above is a guideline, not a dogma.

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

			var data = "secret";

			return {
				// This is some boolean property
				bool: true,
				// Some string value
				string: "a string",
				// An array property
				array: [ 1, 2, 3, 4 ],
				// An object property
				object: {
					lang: "en-Us"
				},
				getData: function() {
					// get the current value of `data`
					return data;
				},
				setData: function( value ) {
					// set the value of `data` and return it
					return ( data = value );
				}
			};
		})();

		// Other things might happen here

		// expose our module to the global object
		global.Module = Module;

	})( this );

	```

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



6. <a name="naming">Règles de nommage</a>


	Vous n'êtes pas un compilateur ou un compresseur, il ne faut pas essayer d'être un.

	Le code suivant est un exemple flagrant de ce qu'il ne faut pas faire:

	```javascript

	// 6.1.1
	// Example of code with poor names

	function q(s) {
		return document.querySelectorAll(s);
	}
	var i,a=[],els=q("#foo");
	for(i=0;i<els.length;i++){a.push(els[i]);}
	```

	Vous avez peut être probablement écrit le code comme ci-dessus - nous espérons que cette mauvaise pratique se terminera aujourd'hui.

	Trouvez ci-desssous la même logique, mais avec plus de clareté, de compréhension et surtour plus de lisibilité fonctionnelle:

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


	// 6.3.6
	// From the Google Closure Library Style Guide

	functionNamesLikeThis;
	variableNamesLikeThis;
	ConstructorNamesLikeThis;
	EnumNamesLikeThis;
	methodNamesLikeThis;
	SYMBOLIC_CONSTANTS_LIKE_THIS;



	```

7. <a name="misc">Misc</a>

	This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

	A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch statements

	There seems to be drastic improvements to the execution of `switch` statements in latest releases of Firefox and Chrome.
	http://jsperf.com/switch-vs-object-literal-vs-module

	Notable improvements can be witnesses here as well:
	https://github.com/rwldrn/idiomatic.js/issues/13

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

	( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

	( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

	// If you know and trust the value of `foo`, you could even omit the OR check
	// leaving only the execution:

	switchObj[ foo ]( args );

	switchModule[ foo ]( args );


	// This pattern also promotes code reusability.

	```

	B. Les "return" prématurés permettent d'améliorer la lisibilité du code avec une différence de performance négligeable

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

        Le principe de base est ici:

	### Ne faites pas de choses stupides et tout sera OK.

	Pour renforcer ce concept, s'il vous plaît regarder la présentation suivante:

	#### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

	<iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

	http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Commentaires</a>

	* Le style de commentaire JSDoc est bon (Closure Compiler type hints++)
	* Une seule ligne de commentaire au-dessus du code surlequel il s'applique
	* L'utilisation de plusieurs lignes est bonne
	* Les commentaires en find de ligne sont interdits!


10. <a name="language">Un code, un language</a>

	Les programmes doivent être rédigés dans un language, quelle que soit le language, le mainteneur ou les mainteneurs donnent les bonnes pratiques.


## Appendix

### Comma First.


Any project that cites this document as its base style guide will not accept comma first code formatting unless explicitly specified otherwise.

See: https://mail.mozilla.org/pipermail/es-discuss/2011-September/016805.html
Notable: "That is horrible, and a reason to reject comma first.", "comma-first still is to be avoided"
