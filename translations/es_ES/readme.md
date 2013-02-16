# Principios para escribir JavaScript consistente e idiomático

## Esta traducción es un fork de https://github.com/rwldrn/idiomatic.js/ (inglés), con mínimas modificaciones.
Ante cualquier duda, sugerencia, etc. puedes reportar una issue, crear una pull request o contactar conmigo en [fernetjs](http://fernetjs.com) o vía [@matiasarriola](https://twitter.com/matiasarriola). ¡Tratemos de tener este documento actualizado e ir incluyendo cosas que falten!

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
* Israel Viana [@ivianag](http://twitter.com/ivianag), [github](https://github.com/isra00)


## Todo el código en cualquier proyecto debería verse como si una sola persona lo hubiera escrito, sin importar cuánta gente haya contribuido

### La lista que se presenta a continuación destaca las prácticas que uso en todo el código del que soy autor, y las contribuciones a todos los proyectos que he creado deben seguir estas prácticas.

### No intento imponer mis preferencias de estilo en el código de otras personas; si tienen un algún estilo común, homogéneo, esto debería ser respetado.

## Traducciones

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

## Cosas importantes, no relacionadas directamente con el JS idiomático:

### Calidad de código: herramientas, recursos y referencias

 * [Plug-in de JavaScript](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) para [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Usando herramientas de calidad de código - por Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/) (inglés)


### Conociendo mejor el lenguaje

[http://es5.github.com/](http://es5.github.com/)

Los siguientes artículos son 1) incompletos y 2) *OBLIGATORIOS*. No siempre estoy de acuerdo con el estilo escrito por sus autores, pero dos cosas son ciertas: son consistentes, y son autoridades en el lenguaje.

 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Rebecca Murphey](http://www.rebeccamurphey.com/) or [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
(Todos estos artículos están en inglés)

### Proceso de Build y Deployment

Los proyectos deberían tratar de incluir siempre algún mecanismo para que el código pueda ser comprimido y optimizado para su uso en producción. Algunos ejemplos de herramientas que hacen esto son [Uglify.js](https://github.com/mishoo/UglifyJS) (hecha en JavaScript), [Google Closure Compiler](http://code.google.com/closure/compiler/) (basada en Java), y [YUI Compressor](http://developer.yahoo.com/yui/compressor/). Escoge una y dale soporte.

Se puede encontrar un "kit para build" genérico, ya funcional, en el directorio `/kits` de este mismo repositorio. El uso es sencillo: 1) copiar los contenidos de algún kit de la carpeta `/kits` a un nuevo directorio en el que se va a trabajar, 2) guarda el .js de tu proyecto en el directorio `/src` 3) incluir el nombre del proyecto en el archivo `project.txt`, 4) ejecutar el comando `make` desde la terminal.


### Testing

Los proyectos _deben_ incluir alguna forma de testing (test unitario, test funcional, etc). Las demos NO CUENTAN como "tests". A continuación, una lista de frameworks para testing, ninguno de los cuales recomiendo más que otro.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)

## Tabla de contenidos

 * [Espacios en blanco](#whitespace)
 * [Beautiful Syntax](#spacing)
 * [Checkeo de tipos (Cortesía de la guía de estilo de jQuery)](#type)
 * [Evaluación condicional](#cond)
 * [Estilo práctico](#practical)
 * [Naming](#naming)
 * [Varios](#misc)
 * [Native & Host Objects](#native)
 * [Comentarios](#comments)


## Manifiesto de estilo idiomático


1. <a name="whitespace">Espacios en blanco</a>

	* Nunca mezclar espacios y tabulaciones.
	* Al comenzar un proyecto, antes de escribir código, escoger entre indentación blanda (espacios), o tabulaciones &mdash; Esto es LEY.
		* Para mayor legibilidad, siempre recomiendo ajustar las preferencias de tu editor para que el tamaño de la indentación sea de dos caracteres &mdash; esto significa, usar dos espacios, o que dos espacios representen una tabulación.
	* Si tu editor lo soporta, trabajar siempre con la preferencia activada para que se muestren los caracteres invisibles. Los beneficios de esta práctica son:
		* Reforzar la consistencia.
		* Eliminar el espacio en blanco del fin de línea.
		* Eliminar los espacios en blanco de las líneas vacías.
		* Facilitar los commits y los diffs (comparar cambios contra versiones anteriores, etc).


2. <a name="spacing">Sintaxis elegante</a>

	A. Paréntesis, Llaves, Fines de línea

	```javascript

	// if/else/for/while/try siempre tienen espacios y se extienden a múltiples líneas
	// Esto mejora la legibilidad

	// 2.A.1.1
	// Ejemplos de sintaxis toda comprimida

	if(condition) doSomething();

	while(condition) iterating++;

	for(var i=0;i<100;i++) someIterativeFn();


	// 2.A.1.1
	// Uso de espacios para mejorar la legibilidad

	if ( condition ) {
		// statements
	}

	while ( condition ) {
		// statements
	}

	for ( var i = 0; i < 100; i++ ) {
		// statements
	}

	// Aún mejor:

	var i,
		length = 100;

	for ( i = 0; i < length; i++ ) {
		// statements
	}

	// O...

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


	B. Asignaciones, Declaraciones, Funciones (Nombradas, Expresiones, Constructores)

	```javascript

	// 2.B.1.1
	// Variables
	var foo = "bar",
		num = 1,
		undef;

	// Notaciones literales:
	var array = [],
		object = {};


	// 2.B.1.2
	// Usando solo una instancia de `var` por scope (o sea, dentro de la función), mejora la legibilidad
	// y mantiene tu lista de declaraciones claras (también ahorra de tipear un poco más)

	// Mal
	var foo = "";
	var bar = "";
	var qux;

	// Bien
	var foo = "",
		bar = "",
		quux;

	// o..
	var // comentar en éstos
	foo = "",
	bar = "",
	quux;

	```

	```javascript

	// 2.B.2.1
	// Declaración De Función Nombrada
	function foo( arg1, argN ) {

	}

	// Uso
	foo( arg1, argN );


	// 2.B.2.2
	// Declaración De Función Nombrada
	function square( number ) {
		return number * number;
	}

	// Uso
	square( 10 );

	// Really contrived continuation passing style
	function square( number, callback ) {
		callback( number * number );
	}

	square( 10, function( square ) {
		// callback statements
	});


	// 2.B.2.3
	// Expresión de función
	var square = function( number ) {
		// Retornar algo relevante y con valor agregado
		return number * number;
	};

	// Expresión de función con identificador
	// Esta forma es preferida porque tiene el valor agregado de
	// poder ser llamada a sí misma y ser identificable en el stacktrace (MUY útil para debugging) :
	var factorial = function factorial( number ) {
		if ( number < 2 ) {
			return 1;
		}

		return number * factorial( number-1 );
	};


	// 2.B.2.4
	// Declaración de Constructor
	function FooBar( options ) {

		this.options = options;
	}

	// Uso
	var fooBar = new FooBar({ a: "alpha" });

	fooBar.options;
	// { a: "alpha" }

	```


	C. Algunas excepciones

	```javascript

	// 2.C.1.1
	// Funciones con callbacls
	foo(function() {
		// Como se ve no hay espacio entre el primer paréntesis
		// y la palabra "function"
	});

	// Función que acepta un Array como parámetro, sin espacio entre ([
	foo([ "alpha", "beta" ]);

	// 2.C.1.2
	// Función que acepta un objeto, sin espacio
	foo({
		a: "alpha",
		b: "beta"
	});

	// Grupo de paréntesis dentro de paréntesis, sin espacio
	if ( !("foo" in obj) ) {

	}

	```

	D. La consistencia siempre gana

	En las secciones 2.A-2.C, las reglas para los espacios son puestas con un objetivo mas simple y con un propósito más general: consistencia.
	Es importante destacar que algunas preferencias de formato, deberían ser consideradas opcionales, pero solo un estilo debería existir a través de todo el código de fuente de tu proyecto.

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

	E. Fin de línea y líneas vacías

	Espacios en blanco pueden arruinar diffs y hacer los cambios imposibles leer. Considera agregar algún mecanismo para remover automáticamente los espacios que se encuentran al final de la línea o en líneas vacías.

3. <a name="type">Checkeo de tipos (Cortesía de la guía de estilo de jQuery)</a>

	3.A Tipos

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
		(cuando sea posible / hay implementaciónes que no tienen esta función)

	* null:

		`variable === null`

	* null or undefined:

		`variable == null`

	* undefined:

		* Variables globales:

			* `typeof variable === "undefined"`

		* Variables locales:

			* `variable === undefined`

		* Propiedades:
			* `object.prop === undefined`
			* `object.hasOwnProperty( prop )`
			* `"prop" in object`


	JavaScript es un lenguaje dinámicamente tipado - por lo que puede ser tu mejor amigo o tu peor enemigo, entonces: Siempre respeta al `type` como se recomienda.

	3.B Conversiones implícitas de tipos

	Considera lo que causaría lo siguiente...

	Dado este HTML:

	```html

	<input type="text" id="foo-input" value="1">

	```


	```js

	// 3.B.1.1

	// `foo` ha sido declarado con el valor `0` y su tipo es `number`
	var foo = 0;

	// typeof foo;
	// "number"
	...

	// En algún lugar, más tarde en tu código, necesitas modificar `foo`
	// con un nuevo valor derivado de el elemento input del HTML

	foo = document.getElementById("foo-input").value;

	// Si vas a testear `typeof foo` ahora, el resultado sería `string`
	// Esto significa que si hubieras tenido lógica que comparara `foo` así:

	if ( foo === 1 ) {

		importantTask();

	}

	// `importantTask()` nunca habría sido evaluada, incluso con `foo` teniendo un valor de "1"

	// 3.B.1.2

	// Te le podés adelantar a los problemas, usando conversión de tipos con los operadores unarios + o - :

	foo = +document.getElementById("foo-input").value;
	      ^ el operador unario + va a convertir su operando derecho a number

	// typeof foo;
	// "number"

	if ( foo === 1 ) {

		importantTask();

	}

	// `importantTask()` va a ser llamada
	```

	Aquí hay algunos casos comunes de conversiones implícitas:


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

	// es lo mismo que...

	~~num;

	```

4. <a name="cond">Evaluación condicional</a>

	```javascript

	// 4.1.1
	// Cuando evaluamos para saber si un array tiene algún elemento,
	// en lugar de hacer esto:
	if ( array.length > 0 ) ...

	// ...evaluar por el valor de verdad de la expresión, como en este caso:
	if ( array.length ) ...


	// 4.1.2
	// Cuando solo evaluamos que un array está vacío,
	// en lugar de esto:
	if ( array.length === 0 ) ...

	// ...evaluar el valor de verdad de la expresión:
	if ( !array.length ) ...


	// 4.1.3
	// Cuando evaluamos que un string no es vacío,
	// en vez de hacer esto:
	if ( string !== "" ) ...

	// ...evaluar el valor de verdad de la expresión:
	if ( string ) ...


	// 4.1.4
	// Cuando evaluamos si un string es vacío,
	// en lugar de:
	if ( string === "" ) ...

	// ...evaluar la expresión por falso, como aquí:
	if ( !string ) ...


	// 4.1.5
	// Cuando evaluamos si una variable es true,
	// en lugar de esto:
	if ( foo === true ) ...

	// ...expresar directamente de la siguiente manera:
	if ( foo ) ...


	// 4.1.6
	// Cuando evaluamos si una variable es false,
	// en vez de:
	if ( foo === false ) ...

	// ...usar negación y expresar de esta manera
	if ( !foo ) ...

	// ...Tener cuidado, porque la anterior expresión va a ser true también para: 0, "", null, undefined, NaN
	// si se _DEBE_ testear por el valor false únicamente, utilizar el ===
	if ( foo === false ) ...


	// 4.1.7
	// Cuando solamente se esta evaluando una referencia que puede ser null o undefined, pero NO false, "" or 0,
	// en lugar de:
	if ( foo === null || foo === undefined ) ...

	// ...tomar ventaja del uso del operador ==:
	if ( foo == null ) ...

	// Recuerda, usar == va a matchear `null` con AMBOS `null` y `undefined`
	// pero no `false`, "" o 0
	null == undefined

	```
	SIEMPRE evaluar por el mejor, más preciso resultado - lo de arriba es sólo una guía o un dogma y depende mucho de cada situación.

	```javascript

	// 4.2.1
	// Sobre los tipos y evaluación de expresiones

	Preferir `===` por sobre `==` (a menos que el caso particular requiera una evaluación no fuertemente tipada)

	=== no genera coerción de tipos, lo que significa que:

	"1" === 1;
	// false

	== genera coerción de tipos, lo que significa que:

	"1" == 1;
	// true


	// 4.2.2
	// Booleanos, Verdaderos y Falsos

	Booleanos: true, false

	Verdaderos: "foo", 1

	Falsos: "", 0, null, undefined, NaN, void 0

	```


5. <a name="practical">Estilo práctico</a>

	```javascript

	// 5.1.1
	// Un módulo práctico

	(function( global ) {
		var Module = (function() {

			var data = "secret";

			return {
				// Esta es una propiedad booleana
				bool: true,
				// Algun valor string
				string: "a string",
				// Una propiedad Array
				array: [ 1, 2, 3, 4 ],
				// Una propiedad objeto
				object: {
					lang: "es-AR"
				},
				getData: function() {
					// Obtener el valor de `data`
					return data;
				},
				setData: function( value ) {
					// setea el valor de `data` y lo retorna
					return ( data = value );
				}
			};
		})();

		// Otras cosas podrían pasar aquí

		// Exponer nuestro módulo al módulo global
		global.Module = Module;

	})( this );

	```

	```javascript

	// 5.2.1
	// Un constructor práctico

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


		// para llamar al constructor sin usar `new`, se podría hacer de la siguiente manera:
		var ctor = function( foo ) {
			return new Ctor( foo );
		};


		// Exponer nuestro constructor al objeto global
		global.ctor = ctor;

	})( this );

	```



6. <a name="naming">Naming</a>


	Si no eres un compilador/compresor humano de código, no trates de serlo.

	A continuación ejemplos "tristes" de nombramiento de variables

	```javascript

	// 6.1.1
	// Ejemplo de código con nombres de variables pobres / poco descriptivos

	function q(s) {
		return document.querySelectorAll(s);
	}
	var i,a=[],els=q("#foo");
	for(i=0;i<els.length;i++){a.push(els[i]);}
	```

	Seguramente, alguna vez hayas escrito código como este. Con un poco de suerte dejarás de hacerlo hoy mismo.

	Aquí está el mismo fragmento, pero con un nombramiento de variables más inteligente (y una estructura más legible):

	```javascript

	// 6.2.1
	// Ejemplo de código con nombres mejorados

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

	Algunos tips más para nombramiento de variables:

	```javascript

	// 6.3.1
	// Nombrando strings

	"dog" es un string


	// 6.3.2
	// Nombrando arrays

	"dogs" es un array de "dog" strings


	// 6.3.3
	// Nombrando funciones, objetos, instancias, etc.

	camelCase; función y declaración de variable


	// 6.3.4
	// Nombrando constructores, prototypes, clases, etc.

	PascalCase; función constructora


	// 6.3.5
	// Nombrando expresiones regulares

	rDesc = //;


	// 6.3.6
	// Extraído de la guía de estilo de la Google Closure Library

	functionNamesLikeThis;
	variableNamesLikeThis;
	ConstructorNamesLikeThis;
	EnumNamesLikeThis;
	methodNamesLikeThis;
	SYMBOLIC_CONSTANTS_LIKE_THIS;



	```

7. <a name="misc">Varios</a>

	Esta sección servirá para describir ideas y conceptos que no deberían se considerados dogmas, pero existen para alentar a cuestionarse prácticas, en un intento para encontrar mejores maneras de llevar a cabo tareas comunes de programación en JavaScript.

	A. El uso de `switch` debería ser evitado, ya que los métodos modernos de tracing marcarán como negativas las funciones que contengan sentencias `switch`.

	Parecen haber mejoras drásticas en la ejecución de sentencias `switch` en las últimas versiones de Firefox y Chrome.
	http://jsperf.com/switch-vs-object-literal-vs-module

	Mejoras destacables pueden ser vistas aquí también:
	https://github.com/rwldrn/idiomatic.js/issues/13

	```javascript

	// 7.A.1.1
	// Ejemplo de una sentencia switch

	switch( foo ) {
		case "alpha":
			alpha();
			break;
		case "beta":
			beta();
			break;
		default:
			// hacer algo por defecto
			break;
	}

	// 7.A.1.2
	// Una mejor manera de hacer esto sería usar un objeto literal o incluso un módulo:

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
	// Si `foo` es una propiedad de `switchObj` o `switchModule`, ejecutar como un método...

	( switchObj.hasOwnProperty( foo ) && switchObj[ foo ] || switchObj._default )( args );

	( switchModule.hasOwnProperty( foo ) && switchModule[ foo ] || switchModule._default )( args );

	// Si ya se sabe que existe `foo` y podemos confiar en eso, se puede omitir el uso del OR
	// dejando sólo la ejecución:

	switchObj[ foo ]( args );

	switchModule[ foo ]( args );


	// Este patrón también facilita la reutilización de código.

	```

	B. Hacer un return temprano mejora la legibilidad del código y no tiene un impacto significativo en el rendimiento

	```javascript

	// 7.B.1.1
	// Mal:
	function returnLate( foo ) {
		var ret;

		if ( foo ) {
			ret = "foo";
		} else {
			ret = "quux";
		}
		return ret;
	}

	// Bien:

	function returnEarly( foo ) {

		if ( foo ) {
			return "foo";
		}
		return "quux";
	}

	```


8. <a name="native">Native & Host Objects</a>

	El principio fundamental aquí es:

	### No hagas cosas estúpidas y todo irá bien.

	Para reforzar este concepto, mirar esta presentación:

	#### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon) - recomendada!

	<iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

	http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Comentarios</a>

	* El estilo de JSDoc es bueno y aceptable (Closure Compiler type hints++)
	* Comentar en la línea que está encima del código del que se está hablando
	* Comentarios en múltiples líneas son buenos
	* Comentarios en el fin de línea están prohibidos!!



## Apéndice

### Coma Primero.

Cualquier proyecto que cite este documento como una guía para estilo no va a aceptar formateo de código con "coma primero", a menos que sea explícitamente específicado.

Ver: https://mail.mozilla.org/pipermail/es-discuss/2011-September/016805.html
Notable: "That is horrible, and a reason to reject comma first.", "comma-first still is to be avoided"

Salud.
