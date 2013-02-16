# Principe d'écriture d'un code Javascript cohérent et idiomatique

## Il s'agit d'un document vivant, les nouvelles idées pour améliorer le code autour de nous sont toujours les bienvenues. Pour contribuer : "fork", "clone", "branch", "commit", "push", "pull request".

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
* Ryuichi Okumura [@okuryu](http://twitter.com/okuryu), [github](https://github.com/okuryu)
* Pascal Precht [@PascalPrecht](http://twitter.com/PascalPrecht), [github](https://github.com/pascalprecht)
* EngForDev [engfordev](http://www.opentutorials.org/course/167/1363) - Hwan Min Hong / MinTaek Kwon [@leoinsight](http://twitter.com/leoinsight) / Tw Shim [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino) / Nassol Kim [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol) / Juntai Park [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun) / Minkyu Shim / Gangmin Won / Justin Yoo [@justinchronicle](http://twitter.com/justinchronicle) / Daeyup Lee
* Marco Trulla [@marcotrulla](http://twitter.com/marcotrulla), [github](https://github.com/Ragnarokkr)
* Alex Navasardyan [@alexnavasardyan](http://twitter.com/alexnavasardyan), [github](https://github.com/2k00l)
* Mihai Paun [@mihaipaun](http://twitter.com/mihaipaun), [github](https://github.com/mihaipaun)
* Evgeny Mandrikov [@\_godin\_](http://twitter.com/_godin_), [github](https://github.com/Godin)
* Sofish Lin [@sofish](http://twitter.com/sofish), [github](https://github.com/sofish)
* Дејан Димић [@dejan_dimic](http://twitter.com/dejan_dimic), [github](https://github.com/rubystream)
* Miloš Gavrilović [@gavrisimo](http://twitter.com/gavrisimo), [github](https://github.com/gavrisimo)


## Tout code, peu importe les bases sur lequels il est établi, devrait ressembler au code tapé par une seule personne, peu importe le nombre de personnes ayant contribué.

### La liste suivante donne un aperçu des pratiques que j'utilise dans tout le code dont je suis l'auteur. Les contributions aux projets dont je suis l'auteur doivent suivre ces lignes directrices.

### Je n'ai pas l'intention d'imposer mes préférences de style sur le code d'autres personnes. Si elles ont un style commun, dans ce cas, il est important de respecter le style de chacun.

> "Il est essentiel de réaliser que pour la réussite d'un projet, un bon intervenant ne doit pas coder pour soi-même mais pour les autres. Si un millier de personnes doivent utiliser votre code, écrivez le avec un maximun de clareté, non pour des préférences personnelles, mais pour être au plus prêt du besoin." - Idan Gazit

## Traductions

* [ORIGINAL](https://github.com/rwldrn/idiomatic.js/)
* [German](https://github.com/rwldrn/idiomatic.js/tree/master/translations/de_DE)
* [French](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Spanish](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Portuguese - Brazil](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Korean](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [Japanese](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [Italian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/it_IT)
* [Russian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)
* [Romanian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ro_RO)
* [简体中文](https://github.com/rwldrn/idiomatic.js/tree/master/translations/zh_CN)
* [Serbian - cyrilic alphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ср_СР)
* [Serbian - latin aplphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/sr_SR)

## Important, aspect non-idiomatique :

### Qualité du Code : indispensables, ressources et références

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Optimisation des outils de qualité de code par Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)

### Soyez cohérent

[http://es5.github.com/](http://es5.github.com/)

Ce qui suit doit être considéré comme 1) __incomplet__, et comme une 2) __LECTURE OBLIGATOIRE__. Je ne suis pas toujours d'accord avec le style écrit par les auteurs ci-dessous, mais une chose est certaine : ils sont conformes. En outre, ce sont des autorités sur le language.

 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Rebecca Murphey](http://www.rebeccamurphey.com/) or [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)

### Processus de "build" et de déploiement

Les projets doivent toujours tenter d'inclure des moyens de vérifier le code implémenté avec Lint, tester et minifier les fichiers afin d'avoir de meilleurs performances en production.
Pour cette tâche, [Grunt](https://github.com/cowboy/grunt) maintenu par Ben Alman rassemble les bonnes pratiques, que nous soutenons dans notre projet.

### Testabilité

Les projets _doivent_ inclure certaines formes de test unitaire : tests d'implementation et de périmètre fonctionnel. Utiliser des démos de cas d'utilisation NE SONT PAS des "tests". Ce qui suit est une liste de bibliothèques de test, aucune d'entre elles n'est approuvée plus que l'autre.

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
 * [Tests Conditionnels](#cond)
 * [Style Pratique](#practical)
 * [Règles de nommage](#naming)
 * [Divers](#misc)
 * [Native & Host Objects](#native)
 * [Commentaires](#comments)
 * [Un code, un language](#language)



------------------------------------------------


## Préface

Les sections suivantes décrivent un guide de style _raisonable_ pour tout développement moderne en JavaScript et ne sont pas censées être normatives. Le plus important à appliquer est la **loi de cohérence dans le style de code**. Le style que vous avez choisi pour votre projet, quel qu'il soit, doit être considéré comme la loi. Référer à ce document pour afficher l'engagement de votre projet à utiliser un style de code cohérent, lisible et maintenable.




## Manifeste : style idiomatique

1. <a name="whitespace">Les Espaces</a>

  - Ne jamais mélanger les espaces et les tabulations.
  - Avant d'écrire le moindre code en début de projet, vous devez choisir entre l'indentation par espace ou par tabulation. C'est une règle.
      - Pour la lisibilité, paramétrer votre éditeur avec une indentation de deux caractères &mdash; ce qui veut dire deux espaces ou une tabulation représentant deux espaces.
  - Si votre éditeur le supporte, travaillez toujours avec le mode "afficher les caractères invisibles" actif. Les avantages de cette pratique sont:
      - Améliore la cohérence du code
      - Elimine les espaces de fin de ligne
      - Elimine les espaces utilisés pour des lignes blanches
      - Améliorer la lisibilité de vos "commit" et des "diff"

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
	// Utiliser une unique déclaration `var` par portée de (fonction) améliore la
	// lisibilité et permets de garder une déclaration séparée du corps de la fonction
	// (en adéquation avec la portée des variables JS)

	// Mauvais
	var foo = "";
	var bar = "";
	var qux;

	// Correct
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
	Il est important de noter que les préférences de formatage, tel que les "espaces situés à l'intérieur de déclaration", doivent être considérés comme optionnels. Un _unique style_ doit exister pour tous les sources d'un projet.

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

	Les espaces peuvent anéantir la lisibilité de vos "diffs". Considérez que la suppression des espaces et des espaces en fin de ligne doit être effectuée __automatiquement__ avant chaque "commit".

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

	Voici quelques cas courants de coercion:


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

4. <a name="cond">Tests Conditionnels</a>

	```javascript

	// 4.1.1
	// Lorsque vous évaluez que la taille d'un tableau est non nulle,
	// Plutôt que d'utiliser l'expression suivante :
	if ( array.length > 0 ) ...

	// ...préférez :
	if ( array.length ) ...


	// 4.1.2
	// A l'inverse, lorsque vous évaluez si un tableau est vide,
	// Plutôt que d'utiliser l'expression suivante :
	if ( array.length === 0 ) ...

	// ...préférez :
	if ( !array.length ) ...


	// 4.1.3
	// Lorsque vous évaluez si une chaine est non vide,
	// Plutôt que d'utiliser l'expression suivante :
	if ( string !== "" ) ...

	// ...préférez :
	if ( string ) ...


	// 4.1.4
	// A l'inverse, lorsque vous évaluez si une chaine est vide,
	// Plutôt que d'utiliser l'expression suivante :
	if ( string === "" ) ...

	// ...préférez :
	if ( !string ) ...


	// 4.1.5
	// Lorsque vous évaluez si une référence est vraie,
	// Plutôt que d'utiliser l'expression suivante :
	if ( foo === true ) ...

	// ...évaluer ce que cela signifie et bénéficier des tests primitifs:
	if ( foo ) ...


	// 4.1.6
	// Lorsque vous évaluez si une référence est fausse,
	// Plutôt que d'utiliser l'expression suivante :
	if ( foo === false ) ...

	// ...utilise la négation et la coercion de l'évaluation de la vérité:
	if ( !foo ) ...

	// ...Soyez prudent, cela correspondra aux valeurs suivantes: 0, "", null, undefined, NaN
	// Vous _DEVEZ_ dans ce cas tester la valeur `faux`, comme suit:
	if ( foo === false ) ...


	// 4.1.7
	// Lorsque vous évaluez une référence et seulement une référence qui peut être null ou undefined, mais NOT fausse, "" ou 0,
	// Plutôt que d'utiliser l'expression suivante :
	if ( foo === null || foo === undefined ) ...

	// ...bénéficiez de la coercion de type ==, comme suit:
	if ( foo == null ) ...

	// Souvenez vous, utiliser == vérifiera une égalité avec `null` et `null` & `undefined`
	// mais pas `false`, "" ou 0
	null == undefined

	```
	_TOUJOURS_ tester avec le meilleur et le plus performant des résultats - les consignes ci-dessus sont une ligne de conduite et non un dogme.

	```javascript

	// 4.2.1
	// Cohercion de Type coercion et remarques

	Preferez `===` à la place de `==` (à moins que le cas de test ne requiert la perte d'évaluation de type)

	=== n'effectue pas de cohercion de type, ce qui signifie que:

	"1" === 1;
	// faux

	== effectue la cohercion de type, ce qui signifie que:

	"1" == 1;
	// vrai


	// 4.2.2
	// Booléens, valeurs de vérités et de négation

	Booléens: true, false

	sont vrais: "foo", 1

	sont faux: "", 0, null, undefined, NaN, void 0

	```


5. <a name="practical">Style usuel</a>

	```javascript

	// 5.1.1
	// Module

	(function( global ) {
		var Module = (function() {

			var data = "secret";

			return {
				//Ceci est une proprété booléenne (boolean)
				bool: true,
				//  Une chaîne de caractère (string)
				string: "a string",
				// Une propriété tableau (array)
				array: [ 1, 2, 3, 4 ],
				// Une propriété objet (object)
				object: {
					lang: "en-Us"
				},
				getData: function() {
					// obtenir la valeur courante de `data`
					return data;
				},
				setData: function( value ) {
					// affecter une valeur `value` à `data` et le renvoyer
					return ( data = value );
				}
			};
		})();

		// D'autres choses peuvent être implémentées ici

		// Exposition de notre module via l'objet global
		global.Module = Module;

	})( this );

	```

	```javascript

	// 5.2.1
	// Contructeur

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


		// Appel du contructeur sans `new`, en utilisant cette syntaxe:
		var ctor = function( foo ) {
			return new Ctor( foo );
		};


		// Exposition de notre constructeur via l'objet global
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

	Vous avez peut être déjà écrit un code comme ci-dessus - nous espérons que cette mauvaise pratique se terminera aujourd'hui.

	Ci-dessous la même logique, avec plus de clarté et surtout plus de lisibilité fonctionnelle:

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
	// Nommage des fonctions, objets, instances, etc

	camelCase; fonction et déclarations var


	// 6.3.4
	// Nommage des contructeurs, prototypes, etc.

	PascalCase; fonction constructeur


	// 6.3.5
	// Nommage des expressions régulières

	rDesc = //;


	// 6.3.6
	// Extrait du guide de la librairie de Google Closure

	functionNamesLikeThis;
	variableNamesLikeThis;
	ConstructorNamesLikeThis;
	EnumNamesLikeThis;
	methodNamesLikeThis;
	SYMBOLIC_CONSTANTS_LIKE_THIS;

	```

7. <a name="misc">Divers</a>

	Cette section servira à illustrer des idées et des concepts qui ne devraient pas être considérés comme un dogme, mais il existe, au lieu d'encourager les pratiques en doute dans une tentative de trouver de meilleures façons de le faire les tâches courantes de programmation JavaScript.

	A. L'utilisation des `switch` doit être évitée, les méthodes modernes de tracking devraient 'blacklister' l'utilisation des fonctions avec `switch`.

	Il semble y avoir des améliorations radicales à l'exécution des déclarations de `switch` dans les dernières version de Firefox et Chrome.
	http://jsperf.com/switch-vs-object-literal-vs-module

	Des améliorations notables sont également visibles ici:
	https://github.com/rwldrn/idiomatic.js/issues/13

	```javascript

	// 7.A.1.1
	// Exemple de déclaration de `switch`

	switch( foo ) {
		case "alpha":
			alpha();
			break;
		case "beta":
			beta();
			break;
		default:
			// comportement par défaut
			break;
	}

	// 7.A.1.2
	// Une meilleur approche est d'utiliser un object literal ou même un module:

	var switchObj = {
		alpha: function() {
			// déclarations
			// return
		},
		beta: function() {
			// déclarations
			// return
		},
		_default: function() {
			// déclarations
			// return
		}
	};

	var switchModule = (function () {
		return {
			alpha: function() {
				// déclarations
				// return
			},
			beta: function() {
				// déclarations
				// return
			},
			_default: function() {
				// déclarations
				// return
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

	Les programmes doivent être rédigés dans un language, quelque soit le language, le mainteneur ou les mainteneurs doivent donner les bonnes pratiques.


## Appendice

### Première virgule.


Tout projet qui cite ce document comme son guide de style de base ne pourra accepter le formatage du code première virgule, sauf mention contraire.
