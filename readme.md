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

### Je n'ai pas l'intention d'imposer mes préférences de style sur le code d'autres personnes. Si elles ont un style commun, dans ce cas, il est important de respecter le style de chacun.

> "Il est essentiel de réaliser que pour la réussite d'un projet, un bon intervenant ne doit pas coder pour soi-même mais pour les autres. Si un millier de personnes doivent utiliser votre code, écrivez le avec un maximun de clareté, non pour des préférences personnelles, mais pour être au plus prêt du besoin." - Idan Gazit

## Traductions

* [Anglais](https://github.com/rwldrn/idiomatic.js)
* [Espagnol](https://github.com/MatiasArriola/idiomatic.js/)
* [Portugais - Brésilien](https://github.com/leobalter/idiomatic.js/)

## Important, aspect non-idiomatique :

### Qualité du Code : indispensables, ressources et références

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Optimisation des outils de qualité de code par Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)

### Soyez cohérent

[http://es5.github.com/](http://es5.github.com/)

Ce qui suit doit être considéré comme 1) __incomplet__, et comme une 2) __LECTURE OBLIGATOIRE__. Je n'ai pas toujours d'accord avec le style écrit par les auteurs ci-dessous, mais une chose est certaine : ils sont conformes. En outre, ce sont les autorités sur le language.

 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Rebecca Murphey](http://www.rebeccamurphey.com/) or [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)

### Processus de "build" et de déploiement

Les projets doivent toujours tenter d'inclure des moyens de vérifier le code implémenté avec Lint, testé et minifier les fichiers afin d'avoir de meilleurs performances en production.
Pour cette tâche, [Grunt](https://github.com/cowboy/grunt) maintenu par Ben Alman rassemble les bonnes pratiques, que nous soutenons dans notre project.

### Testabilité

Les projets _doivent_ inclure certaines formes de test unitaire : tests d'implementation et de périmètre fonctionnelle. Utilisez des démos de cas d'utilisation NE SONT PAS des "tests". Ce qui suit est une liste de bibliothèque de test, aucune d'entre elles n'est approuvée plus que l'autre.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)

## Table des matières

 * [Les Espaces](#whitespace)
 * [Une Syntaxe Précise](#spacing)
 * [Vérification de Type (Courtesy jQuery Core Style Guidelines)](#type)
 * [Conditional Evaluation](#cond)
 * [Style Pratique](#practical)
 * [Règles de nommage](#naming)
 * [Divers](#misc)
 * [Native & Host Objects](#native)
 * [Commentaires](#comments)
 * [Un code, un language](#language)

## Manifeste : style idiomatique

1. <a name="whitespace">Les Espaces</a>

	* Ne jamais mélanger les espaces et les tabulations.
	* Avant d'écriture le moindre code en début de projet, vous devez choisir entre l'indentation par espace ou par tabulation. C'est une règle.
	 	* Pour la lisibilité, paramétrer votre éditeur avec une indentation de 4 caractères.
	* Si votre éditeur le supporte, travaillez toujours avec le mode "afficher les caractères invisibles" actif. Les avantages de cette pratique sont:
		* Améliore la cohérence du code
		* Elimine les espaces de fin de ligne
		* Elimine les espaces utilisés pour des lignes blanches
		* Améliorer la lisibilité de vos "commit" et des "diff"

2. <a name="spacing">Une Syntaxe Précise</a>

	A. Parenthèses, Accolades, Sauts de ligne

	```javascript

	// if/else/for/while/try ont toujours des espaces, des parenthèses et plusieurs sauts de ligne
	// cela améliore la lisibilité

	// 2.A.1.1
	// Exemples de mauvaises pratiques

	if(condition) doSomething();

	while(condition) iterating++;

	for(var i=0;i<100;i++) someIterativeFn();


	// 2.A.1.1
	// Utilisez les espaces afin d'améliorer la lisibilité

	if ( condition ) {
		// déclarations
	}

	while ( condition ) {
		// déclarations
	}

	for ( var i = 0; i < 100; i++ ) {
		// déclarations
	}

	// même mieux:
	var i,
		length = 100;

	for ( i = 0; i < length; i++ ) {
		// déclarations
	}

	// Ou...
	var i = 0,
		length = 100;

	for ( ; i < length; i++ ) {
		// déclarations
	}

	var prop;
	for ( prop in object ) {
		// déclarations
	}


	if ( true ) {
		// déclarations
	} else {
		// déclarations
	}
	```

	B. Déclaration, Affectation, Fonction ( Nommage, Expression, Constructeur )

	```javascript

	// 2.B.1.1
	// Variables
	var foo = "bar",
		num = 1,
		undef;

	// Notations littérales:
	var array = [],
		object = {};

	// 2.B.1.2
	// Utilisez une unique déclaration `var` par portée de (fonction) améliore la
	// lisibilité et permets de garder une déclaration séparée du corps de la fonction
	// (en adéquation avec la portée des variables JS)

	// Mauvais
	var foo = "";
	var bar = "";
	var qux;

	// Correcte
	var foo = "",
		bar = "",
		quux;

	// ou..
	var // donnez votre avis
	foo = "",
	bar = "",
	quux;

	// 2.B.1.3
	// La déclaration des variables 'var' doit toujours être au début de la portée de chaque fonction.
	// Le même principe s'applique au 'const' défini dans ECMAScript 6.

	// Mauvais
	function foo() {

		// déclarations
		var bar = "",
			qux;
	}

	// Correcte
	function foo() {
		var bar = "",
			qux;

		// toutes les autres déclarations sont après la déclaration des variables.
	}
	```

	```javascript

	// 2.B.2.1
	// Déclaration de fonction nommée
	function foo( arg1, argN ) {

	}

	// Utilisation
	foo( arg1, argN );


	// 2.B.2.2
	// Déclaration de fonction nommée
	function square( number ) {
		return number * number;
	}

	// Utilisation
	square( 10 );

	// Passage d'une callback par variable nommée
	function square( number, callback ) {
		callback( number * number );
	}

	square( 10, function( square ) {
		// déclaration de la callback
	});


	// 2.B.2.3
	// Expression de fonction
	var square = function( number ) {
		// Renvoie quelque chose de pertinent
		return number * number;
	};

	// Expression de fonction avec un identifiant
	// Cette forme préférée a pour valeur ajoutée d'être en mesure de se faire appeler
	// et d'avoir une identité dans les traces de pile
	var factorial = function factorial( number ) {
		if ( number < 2 ) {
			return 1;
		}

		return number * factorial( number-1 );
	};


	// 2.B.2.4
	// Déclaration de Constructeur
	function FooBar( options ) {

		this.options = options;
	}

	// Utilisation
	var fooBar = new FooBar({ a: "alpha" });

	fooBar.options;
	// { a: "alpha" }

	```


	C. Exceptions et légères différences

	```javascript

	// 2.C.1.1
	// Fonctions avec 'callbacks'
	foo(function() {
		// remarque : il n'y a pas d'espace supplémentaire entre la première parenthèse
		// d'exécution de la fonction appelée et le mot réservé "function"
	});

	// Fonction acceptant un tableau, sans espace
	foo([ "alpha", "beta" ]);

	// 2.C.1.2
	// Fonction acceptant un objet, sans espace
	foo({
		a: "alpha",
		b: "beta"
	});

	// Regroupement de déclaration à l'intérieur de parenthèse, sans espace
	if ( !("foo" in obj) ) {

	}

	```

	D. La cohérence gagne toujours

	Dans les sections 2.A-2.C, les règles d'espacement sont énoncées sous forme de recommandation avec un objectif simple et plus abouti : la cohérence.
	Il est important de noter que les préférences de formatage, tel que les "espaces situés à l'intérieur de déclaration", doivent être considérer comme optionnels. Un _unique style_ doit exister pour tous les sources d'un projet.

	```javascript

	// 2.D.1.1

	if (condition) {
		// déclarations
	}

	while (condition) {
		// déclarations
	}

	for (var i = 0; i < 100; i++) {
		// déclarations
	}

	if (true) {
		// déclarations
	} else {
		// déclarations
	}

	```

	E. Fin de ligne et lignes vides

	Les espaces peuvent anéantir la lisibilité de vos "diffs". Considérez que la suppression des espaces et des espaces en fin de ligne doit être effectuer __automatiquement__ avant chaque "commit".

3. <a name="type">Vérification de Type (Courtesy jQuery Core Style Guidelines)</a>

	3.A Types réels

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
		(dans la mesure du possible)

	* null:

		`variable === null`

	* null ou undefined:

		`variable == null`

	* undefined:

		* Variable Global:

			* `typeof variable === "undefined"`

		* Variable Local:

			* `variable === undefined`

		* Propriétés:
			* `object.prop === undefined`
			* `object.hasOwnProperty( prop )`
			* `"prop" in object`


	JavaScript est un langage typé dynamiquement - ce qui peut être votre meilleur ami comme votre pire ennemi : respectez donc les 'type', en appliquant les règles ci-dessus.


	3.B Coercion de type

	Considérons les implications de ce qui suit...

	Etant donné ce code HTML:

	```html

	<input type="text" id="foo-input" value="1">

	```


	```js

	// 3.B.1.1

	// `foo` a été déclaré avec la valeur `0` et son type est `number`
	var foo = 0;

	// typeof foo;
	// "number"
	...

	// Quelque part plus loin dans votre code, vous devez mettre à jour `foo`
	// avec une nouvelle valeur issue de l'element 'input'

	foo = document.getElementById("foo-input").value;

	// Si vous deviez tester `typeof foo` maintenant, le résultat serait "string"
	// Cela signifie que si vous aviez la logique testant `foo` comme suit:

	if ( foo === 1 ) {

		important();
	}

	// `important()` ne serait jamais évalué, même si `foo` a une valeur de "1"


	// 3.B.1.2

	// Vous pouvez vous prémunir de ce problème en utilisant la coercion de type de l'opérateur unaire + ou -:

	foo = +document.getElementById("foo-input").value;
	      ^ opérateur unaire + convertissant à sa droite l'opérante en "number"

	// typeof foo;
	// "number"

	if ( foo === 1 ) {

		important();

	}

	// `important()` sera évaluer
	```

	Voici quelques cas courants de coercion :


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

	// identique à...

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


5. <a name="practical">Style usuel</a>

	```javascript

	// 5.1.1
	// A Module

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
	// A Constructeur

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


	Vous n'êtes pas un compilateur ou un minificateur, il ne faut pas essayer d'être un.

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

	Ci-dessous la même logique, avec plus de clareté et surtout plus de lisibilité fonctionnelle:

	```javascript

	// 6.2.1
	// Exemple de code avec un nommage amélioré

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

	Quelques conseilles supplémentaires:

	```javascript

	// 6.3.1
	// Nommage des chaines de caractères "string"

	`dog` est une chaine de caractère


	// 6.3.2
	// Nommage des chaines des tableaux "array"

	`dogs` est un tableau de `dog` chaine de caractère


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

7. <a name="misc">Divers</a>

	This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

	A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch déclarations

	There seems to be drastic improvements to the execution of `switch` déclarations in latest releases of Firefox and Chrome.
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
			// déclarations
			// a return
		},
		beta: function() {
			// déclarations
			// a return
		},
		_default: function() {
			// déclarations
			// a return
		}
	};

	var switchModule = (function () {
		return {
			alpha: function() {
				// déclarations
				// a return
			},
			beta: function() {
				// déclarations
				// a return
			},
			_default: function() {
				// déclarations
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
