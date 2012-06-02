# Principii de scriere cod JavaScript consistent și idiomatic


## Acesta este un document în continuă dezvoltare și noi idei pentru îmbunătățirea codului pe care-l scriem sunt întotdeauna binevenite. Contribuie și tu: fork, clone, branch, commit, push, pull request.

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


## Tot codul dintr-o aplicație trebuie să arate ca și cum ar fi fost scris de o singură persoană, indiferent de câți oameni au contribuit la scrierea lui.

### Următoarea listă subliniază practicile pe care le folosesc în aplicațiile al căror autor original sunt; contribuțiile la proiectele pe care le-am creat ar trebui să urmeze aceste indicații.

### Nu intenționez să impun preferințele mele de stilizare a codului altor oameni sau proiecte; în cazul în care un stil comun există, ar trebui respectat.


> ### "Dezbaterile asupra stilizării sunt inutile. Ar trebui să existe un ghid de stil, şi ar trebui urmat"
>_Rebecca_ _Murphey_

&nbsp;

> ### "Una din condițiile pentru a fi un bun administrator al unui proiect de succes este realizarea faptului că a scrie cod pentru tine este o IDEE REA™. Dacă mii de oameni îți folosesc codul, atunci scrie cod pentru claritate maximă, nu după preferințele personale de a deveni expert în specificații."
>_Idan_ _Gazit_


## Traduceri

* [German](https://github.com/rwldrn/idiomatic.js/tree/master/translations/de_DE)
* [French](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Spanish](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Portuguese - Brazil](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Korean](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [Japanese](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [Italian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/it_IT)
* [Russian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)
* [Romanian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ro_RO)


## Conținut Important și Non-Idiomatic:

### Calitatea codului: Unelte, Resurse și Referințe

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

## Învață

### [ECMAScript 5.1 Adnotat](http://es5.github.com/)
### [Specificațiile EcmaScript, Ediția 5.1](http://ecma-international.org/ecma-262/5.1/)

Următoarele ar trebui să fie considerate 1) incomplete, și 2) *LECTURĂ OBLIGATORIE*. Nu sunt întotdeauna de acord cu stilul promovat de următorii autori, dar un lucru este clar: Sunt consecvenți. Mai mult decât atât, ei reprezintă autorități ale limbajului.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)




### Procesul de Build & Deployment

Proiectele ar trebui să încerce mereu să includă unele mijloace prin care sursele pot fi validate (linted), testate și comprimate în vederea pregătirii pentru producție. Pentru această activitate, [grunt](https://github.com/cowboy/grunt) de Ben Alman este principala opțiune și a înlocuit oficial directorul "kits/" al acestui repozitoriu.




### Procesul de Testare

Proiectele _trebuie_ să includă o formă sau alta de testare unitară, de referință, de implementare sau funcțională. Studiile de caz NU SE CONSIDERĂ "teste". Lista următoare este o listă de framework-uri de testare, niciunul dintre ele nefiind mai avizat decât celălalt.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)

## Cuprins

 * [Spațiile albe](#whitespace)
 * [Sintaxă plăcută](#spacing)
 * [Verificarea tipului (Curtoazie a indicațiilor stilistice din jQuery Core)](#type)
 * [Evaluare condițională](#cond)
 * [Stil practic](#practical)
 * [Nomenclatura](#naming)
 * [Diverse](#misc)
 * [Obiecte native și gazdă](#native)
 * [Comentarii](#comments)
 * [Un cod, un limbaj](#language)



------------------------------------------------


## Prefață

Următoarele secțiuni subliniază un ghid de stilizare _rezonabil_ pentru dezvoltarea modernă de cod JavaScript și nu sunt menite să fie normative. Cea mai importantă de reținut este **legea coerenței stilului de cod**. Orice stil ai considera pentru proiectul tău trebuie considerat lege. Consideră acest document ca o declarație a consistenței, lizibilității și mentenabilității proiectului tău.





## Manifest de stil idiomatic


1. <a name="whitespace">Spațierea</a>
  - Nu se amestecă spațiile albe cu taburile.
  - La începutul unui proiect, înainte de a începe să scrii cod, alege între spațiere soft (spații) sau taburi - consideră aceasta **lege**.
      - Pentru lizibilitate, recomand configurarea setării de indentare a editorului la 2 caractere &mdash; asta înseamnă două spații sau două spații reprezentând un tab real.
  - Dacă editorul suportă, opțiunea "show invisibles" ar trebui să fie bifată. Beneficiile acestei practici sunt:
      - Consecvență aplicată
      - Eliminarea spațiilor albe de la sfîrșitul liniei
      - Eliminarea rândurilor libere
      - Commit-urile și diff-urile sunt mai ușor de citit


2. <a name="spacing">Sintaxă curată</a>

    A. Parantezele, Acoladele, Liniile noi

    ```javascript

    // if/else/for/while/try au întotdeauna spații, acolade și se întind pe mai multe linii
    // asta încurajează lizibilitatea codului

    // 2.A.1.1
    // Exemple de sintaxă foarte înghesuită

    if(condition) doSomething();

    while(condition) iterating++;   

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Folosește spațiere pentru a încuraja lizibilitatea codului

    if ( condition ) {
      // declarații
    }

    while ( condition ) {
      // declarații
    }

    for ( var i = 0; i < 100; i++ ) {
      // declarații
    }

    // De preferat:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // declarații
    }

    // Sau...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // declarații
    }

    var prop;

    for ( prop in object ) {
      // declarații
    }


    if ( true ) {
      // declarații
    } else {
      // declarații
    }
    ```


    B. Atribuiri, Declarații, Funcții ( Nomenclatura, Expresie, Constructor )

    ```javascript

    // 2.B.1.1
    // Variabile
    var foo = "bar",
      num = 1,
      undef;

    // Notații literale:
    var array = [],
      object = {};


    // 2.B.1.2
    // Folosirea unei singure `var` per context (funcție) încurajează lizibilitatea codului
    // și păstrează lista declarațiilor în ordine (de asemenea te scutește de câteva tastări)

    // Incorect
    var foo = "";
    var bar = "";
    var qux;

    // Corect
    var foo = "",
      bar = "",
      quux;

    // sau..
    var // Comentarii
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // declarațiile de variable trebuie să fie la începutul contextului lor respectiv (funcției).
    // Același lucru se aplică pentru const și let din ECMAScript 6.

    // Incorect
    function foo() {

      // unele declarații aici

      var bar = "",
        qux;
    }

    // Corect
    function foo() {
      var bar = "",
        qux;

      // restul codului după declarațiile de variabile
    }
    ```

    ```javascript

    // 2.B.2.1
    // Declarație de funcție denumită
    function foo( arg1, argN ) {

    }

    // Utilizare
    foo( arg1, argN );


    // 2.B.2.2
    // Declarație de funcție denumită
    function square( number ) {
      return number * number;
    }

    // Utilizare
    square( 10 );

    // Stil de transmitere a continuării foarte complicat
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // declarații callback
    });


    // 2.B.2.3
    // Exprimarea Funcției
    var square = function( number ) {
      // returnează ceva valoros și relevant
      return number * number;
    };

    // Exprimarea Funcției și Identificator
    // Această formă preferată are valoarea adăugată de a fi
    // capabilă de a se invoca și de a avea o identitate în stiva de comenzi
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };


    // 2.B.2.4
    // Declarația Constructor-ului
    function FooBar( options ) {

      this.options = options;
    }

    // Utilizare
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Excepții, Ușoare Abateri

    ```javascript

    // 2.C.1.1
    // Funcții cu callbacks
    foo(function() {
      // De observat că nu există spațiu intre prima paranteză
      // a funcției în execuție și cuvântul "function"
    });

    // Funcție care primește ca parametru un array, fără spații
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Funcție care primește ca paremtru un obiect, fără spații
    foo({
      a: "alpha",
      b: "beta"
    });

    // Un singur argument literal de tip string, fără spații
    foo("bar");

    // Paranteze interioare grupate, fără spații
    if ( !("foo" in obj) ) {

    }

    ```

    D. Consecvența are câștig de cauză întotdeauna

    În secțiunile 2.A-2.C, normele de spațiere sunt stabilite drept o recomandare cu un scop simplu și precis: consecvența.
    E important de reținut că preferințele de formatare, precum "spațierea interioară" ar trebui să fie considerate opționale, dar un singur stil ar trebui să existe pe întreaga sursă a proiectului.

    ```javascript

    // 2.D.1.1

    if (condition) {
      // declarații
    }

    while (condition) {
      // declarații
    }

    for (var i = 0; i < 100; i++) {
      // declarații
    }

    if (true) {
      // declarații
    } else {
      // declarații
    }

    ```

    E. Ghilimele

    Fie că preferi ghilimele simple sau duble nu ar trebui să conteze, nu există o diferență în modul de parsare al JavaScript. Ce trebuie **NEAPĂRAT FĂCUT** este să primeze consecvența. **Nu amesteca tipul de ghilimele în același proiect. Alege un stil și ține-te de el.**

    F. Sfîrșitul de Linii și Liniile Goale

    Spațiile albe pot ruina diff-urile și pot randa modificările imposibil de citit. Ia în calcul incorporarea unui hook pre-commit care elimină automat spațiile albe de la sfîrșitul liniilor și spațiile goale de pe liniile libere.

3. <a name="type">Type Checking (Courtesy jQuery Core Style Guidelines)</a>

    A. Actual Types

    String:

        typeof variable === "string"

    Number:

        typeof variable === "number"

    Boolean:

        typeof variable === "boolean"

    Object:

        typeof variable === "object"

    Array:

        Array.isArray( arrayLikeObject )
        (wherever possible)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null or undefined:

        variable == null

    undefined:

      Global Variables:

        typeof variable === "undefined"

      Local Variables:

        variable === undefined

      Properties:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Coerced Types

    Consider the implications of the following...

    Given this HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

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
    //    ^ unary + operator will convert its right side operand to a number

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

    !!~array.indexOf("a");
    // true

    !!~array.indexOf("b");
    // true

    !!~array.indexOf("c");
    // true

    !!~array.indexOf("d");
    // false

    // Note that the above should be considered "unnecessarily clever"
    // Prefer the obvious approach of comparing the returned value of
    // indexOf, like:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // is the same as...

    ~~num;

    num >> 0;

    num >>> 0;

    // All result in 2


    // Keep in mind however, that negative numbers will be treated differently...

    var neg = -2.5;

    parseInt( neg, 10 );

    // is the same as...

    ~~neg;

    neg >> 0;

    // All result in -2
    // However...

    neg >>> 0;

    // Will result in 4294967294




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

    // ...evaluate like you mean it, take advantage of built in capabilities:
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

    // Prefer `===` over `==` (unless the case requires loose type evaluation)

    // === does not coerce type, which means that:

    "1" === 1;
    // false

    // == does coerce type, which means that:

    "1" == 1;
    // true


    // 4.2.2
    // Booleans, Truthies & Falsies

    // Booleans:
    true, false

    // Truthy:
    "foo", 1

    // Falsy:
    "", 0, null, undefined, NaN, void 0

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



6. <a name="naming">Naming</a>



    A. You are not a human code compiler/compressor, so don't try to be one.

    The following code is an example of egregious naming:

    ```javascript

    // 6.A.1.1
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

    // 6.A.2.1
    // Example of code with improved names

    function query( selector ) {
      return document.querySelectorAll( selector );
    }

    var idx = 0,
      elements = [],
      matches = query("#foo"),
      length = matches.length;

    for ( ; idx < length; idx++ ) {
      elements.push( matches[ idx ] );
    }

    ```

    A few additional naming pointers:

    ```javascript

    // 6.A.3.1
    // Naming strings

    `dog` is a string


    // 6.A.3.2
    // Naming arrays

    `dogs` is an array of `dog` strings


    // 6.A.3.3
    // Naming functions, objects, instances, etc

    camelCase; function and var declarations


    // 6.A.3.4
    // Naming constructors, prototypes, etc.

    PascalCase; constructor function


    // 6.A.3.5
    // Naming regular expressions

    rDesc = //;


    // 6.A.3.6
    // From the Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Faces of `this`

    Beyond the generally well known use cases of `call` and `apply`, always prefer `.bind( this )` or a functional equivalent, for creating `BoundFunction` definitions for later invocation. Only resort to aliasing when no preferable option is available.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // open an async stream,
      // this will be called continuously
      stream.read( opts.path, function( data ) {

        // Update this instance's current value
        // with the most recent value from the
        // data stream
        this.value = data;

      }.bind(this) );

      // Throttle the frequency of events emitted from
      // this Device instance
      setInterval(function() {

        // Emit a throttled event
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Just pretend we've inherited EventEmitter ;)

    ```

    When unavailable, functional equivalents to `.bind` exist in many modern JavaScript libraries.


    ```javascript
    // 6.B.2

    // eg. lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // eg. jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // eg. dojo.hitch
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, dojo.hitch( this, function( data ) {

        this.value = data;

      }) );

      setInterval( dojo.hitch( this, function() {

        this.emit("event");

      }), opts.freq || 100 );
    }

    ```

    As a last resort, create an alias to `this` using `self` as an Identifier. This is extremely bug prone and should be avoided whenever possible.

    ```javascript

    // 6.B.3

    function Device( opts ) {
      var self = this;

      this.value = null;

      stream.read( opts.path, function( data ) {

        self.value = data;

      });

      setInterval(function() {

        self.emit("event");

      }, opts.freq || 100 );
    }

    ```


    C. Use `thisArg`

    Several prototype methods of ES 5.1 built-ins come with a special `thisArg` signature, which should be used whenever possible

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| now refers to `obj`

      console.log( this[ key ] );

    }, obj ); // <-- the last arg is `thisArg`

    // Prints...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` can be used with `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

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

    The basic principle here is:

    ### Don't do stupid shit and everything will be ok.

    To reinforce this concept, please watch the following presentation:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Comments</a>

  * Single line above the code that is subject
  * Multiline is good
  * End of line comments are prohibited!
  * JSDoc style is good, but requires a significant time investment


10. <a name="language">One Language Code</a>

    Programs should be written in one language, whatever that language may be, as dictated by the maintainer or maintainers.

## Appendix

### Comma First.

Any project that cites this document as its base style guide will not accept comma first code formatting, unless explicitly specified otherwise by that project's author.
