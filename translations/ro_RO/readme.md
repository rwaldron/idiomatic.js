# Principii de codare consistentă și idiomatică în JavaScript


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
* Mihai Paun [@mihaipaun](http://twitter.com/mihaipaun), [github](https://github.com/mihaipaun)
* Evgeny Mandrikov [@\_godin\_](http://twitter.com/_godin_), [github](https://github.com/Godin)
* Sofish Lin [@sofish](http://twitter.com/sofish), [github](https://github.com/sofish)
* Дејан Димић [@dejan_dimic](http://twitter.com/dejan_dimic), [github](https://github.com/rubystream)
* Miloš Gavrilović [@gavrisimo](http://twitter.com/gavrisimo), [github](https://github.com/gavrisimo)


## Tot codul dintr-o aplicație trebuie să arate ca și cum ar fi fost scris de o singură persoană, indiferent de câți oameni au contribuit la scrierea lui.

### Următoarea listă subliniază practicile pe care le folosesc în aplicațiile al căror autor original sunt; contribuțiile la proiectele pe care le-am creat ar trebui să urmeze aceste indicații.

### Nu intenționez să impun preferințele mele de stilizare a codului altor oameni sau proiecte; în cazul în care un stil comun există, ar trebui respectat.


> ### "Dezbaterile asupra stilizării sunt inutile. Ar trebui să existe un ghid de stilizare, şi ar trebui urmat"
>_Rebecca_ _Murphey_

&nbsp;

> ### "Una din condițiile pentru a fi un bun administrator al unui proiect de succes este realizarea faptului că a scrie cod pentru tine este o IDEE REA™. Dacă mii de oameni îți folosesc codul, atunci scrie cod pentru claritate maximă, nu după preferințele personale de a deveni expert în specificații."
>_Idan_ _Gazit_


## Traduceri

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


## Conținut Important și Non-Idiomatic:

### Calitatea codului: Unelte, Resurse și Referințe

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
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

    // Stil foarte artificial de transmitere a continuității
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

    Spațiile albe pot distruge diff-urile și pot randa modificările imposibil de citit. Ia în calcul incorporarea unui hook pre-commit care elimină automat spațiile albe de la sfîrșitul liniilor și spațiile goale de pe liniile libere.

3. <a name="type">Verificarea tipului (Curtoazie a indicațiilor stilistice din jQuery Core)</a>

    A. Tipuri Existente

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
        (ori de câte ori este posibil)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null sau undefined:

        variable == null

    undefined:

      Variabile Globale:

        typeof variable === "undefined"

      Variabile Locale:

        variable === undefined

      Proprietăți:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Tipuri Constrânse

    Luați în considerare implicațiile următoarelor...

    Dat fiind codul HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` a fost declarat cu valoarea `0` și este de tipul `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Ulterior, trebuie actualizată variabila `foo`
    // cu o nouă valoare derivată dintr-un element `input`

    foo = document.getElementById("foo-input").value;

    // Dacă ar fi să verificați `typeof foo` acum, rezultatul ar fi `string`
    // Asta înseamnă că dacă ați fi avut logică care să verifice `foo` în următoarea manieră:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` nu s-ar evalua, chiar dacă `foo` are valoarea "1"


    // 3.B.1.2

    // Se pot anticipa asftel de probleme prin folosirea operatorilor unari + sau -:

    foo = +document.getElementById("foo-input").value;
    //    ^ operatorul unar + va converti operandul din dreapta într-un număr

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` va fi apelat
    ```

    Câteva cazuri comune, alături de constrângeri:


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

    // De remarcat că cele de mai sus trebuie considerate "inteligente inutil"
    // E de preferat abordarea evidentă a comparării valorii returnate de
    // indexOf, după cum urmează:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // e la fel ca...

    ~~num;

    num >> 0;

    num >>> 0;

    // Toate au ca rezultat 2


    // De reținut totuși, numerele negative vor fi tratate diferit...

    var neg = -2.5;

    parseInt( neg, 10 );

    // e la fel ca...

    ~~neg;

    neg >> 0;

    // Toate au ca rezultat -2
    // Totuși...

    neg >>> 0;

    // Va avea ca rezultat 4294967294




    ```



4. <a name="cond">Evaluare Condițională</a>

    ```javascript

    // 4.1.1
    // Când se evaluează dacă un array are dimensiune,
    // în loc de:
    if ( array.length > 0 ) ...

    // ...se evaluează valoarea de adevăr, după cum urmează:
    if ( array.length ) ...


    // 4.1.2
    // Când se evaluează dacă un array este gol,
    // în loc de:
    if ( array.length === 0 ) ...

    // ...se evaluează valoarea de adevăr, după cum urmează:
    if ( !array.length ) ...


    // 4.1.3
    // Când se evaluează dacă un string nu este gol,
    // în loc de:
    if ( string !== "" ) ...

    // ...se evaluează valoarea de adevăr, după cum urmează:
    if ( string ) ...


    // 4.1.4
    // Când se evaluează dacă un string _este_ gol,
    // în loc de:
    if ( string === "" ) ...

    // ...se evaluează falsitatea, după cum urmează:
    if ( !string ) ...


    // 4.1.5
    // Când se evaluează dacă o referință este adevarată,
    // în loc de:
    if ( foo === true ) ...

    // ...se evaluează așa cum are sens, profitând de capacitățile native ale limbajului:
    if ( foo ) ...


    // 4.1.6
    // Când se evaluează dacă o referință este falsă,
    // în loc de:
    if ( foo === false ) ...

    // ...se folosește negarea pentru a constrânge o evaluare adevarată
    if ( !foo ) ...

    // ...Atenție, această declarație va funcționa și cu: 0, "", null, undefined, NaN
    // Dacă _TREBUIE_ verificată o valoare booleană falsă, se folosește
    if ( foo === false ) ...


    // 4.1.7
    // Când se evaluează numai o referință care poate fi null sau undefined, dar NU și false, "" sau 0,
    // în loc de:
    if ( foo === null || foo === undefined ) ...

    // ...trebuie profitat de constrângerea tipului ==, după cum urmează:
    if ( foo == null ) ...

    // Reține, folosirea == va corespunde cu `null` atât pentru `null` cât și pentru `undefined`
    // dar nu și pentru `false`, "" sau 0
    null == undefined

    ```
    Se evaluează ÎNTOTDEAUNA pentru cel mai bun, cel mai precis rezultat - instrucțiunile de mai sus sunt o recomandare, nu o dogmă.

    ```javascript

    // 4.2.1
    // Tipuri de constrângere și note de evaluare

    // Se preferă `===` în pofida `==` (cu excepția cazului care necesită evaluarea tipului declarat)

    // === nu constrânge tipul, ceea ce înseamnă că:

    "1" === 1;
    // false

    // == constrânge tipul, ceea ce înseamnă că:

    "1" == 1;
    // true


    // 4.2.2
    // Valori Boolene, de Adevăr și Negative

    // Boolene:
    true, false

    // Valori de Adevăr:
    "foo", 1

    // Valori Negative:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Stil practic</a>

    ```javascript

    // 5.1.1
    // Un modul practic

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Aceasta este o proprietate booleană
          bool: true,
          // O valoare string oarecare
          string: "a string",
          // O proprietare de tip array
          array: [ 1, 2, 3, 4 ],
          // O proprietate de tip obiect
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // returnează valoarea actuală a variabilei `data`
            return data;
          },
          setData: function( value ) {
            // setează valoarea variabilei `data` și o returnează
            return ( data = value );
          }
        };
      })();

      // Alte instrucțiuni pot urma aici

      // expune modulul obiectului global
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Un Constructor Practic

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


      // Pentru a apela constructorul fără `new`, se poate utiliza:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // expune modulul obiectului global
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Nomenclatură</a>



    A. Nu ești un compilator/compresor de cod uman, deci nu încerca să fii unul.

    Următorul cod este un exemplu de nomenclatură greșită:

    ```javascript

    // 6.A.1.1
    // Exemplu de cod cu denumire slabă

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Fără nicio îndoială, ai scris cod ca acesta - sperăm să se încheie azi.

    Iată aceeași bucată de cod, dar cu o nomenclatură simpatică, mai expresivă (și o structură mai lizibilă):

    ```javascript

    // 6.A.2.1
    // Exemplu de cod cu nomenclatură îmbunătățită

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

    Câteva indicii suplimentare de nomenclatură:

    ```javascript

    // 6.A.3.1
    // Nume de string-uri

    `dog` e un string


    // 6.A.3.2
    // Nume de array-uri

    `dogs` e un array de string-uri `dog`


    // 6.A.3.3
    // Nume de funcții, obiecte, instanțe, etc

    camelCase; funcții și declarații de variabile


    // 6.A.3.4
    // Nume de constructori, prototipuri, etc.

    PascalCase; funcție constructor


    // 6.A.3.5
    // Nume de expresii regulate

    rDesc = //;


    // 6.A.3.6
    // Din ghidul de stil al librăriei Google Closure

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Variații ale `this`

    Dincolo de uzul general al metodelor `call` și `apply`, se preferă întotdeauna `.bind( this )` sau o funcție echivalentă, pentru a crea definiții `BoundFunction` pentru invocarea ulterioară. Se recurge la aliasing când nu mai sunt alte opțiuni disponibile.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // deschide un stream asincron,
      // care va fi apelat continuu
      stream.read( opts.path, function( data ) {

        // Actualizează valoarea actuală a acestei instanțe
        // cu cea mai recentă valoare din
        // streamul de date
        this.value = data;

      }.bind(this) );

      // Reglează frecvența evenimentelor emise de
      // această instanță Device
      setInterval(function() {

        // Emite un eveniment regulator
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Pretindem că am moștenit EventEmitter ;)

    ```

    Când nu e disponibil, echivalente funcționale pentru `.bind` există în multe librării JavaScript moderne.


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

    În ultimă instanță, creează un alias pentru `this` folosind `self` drept Identifier. Această soluție este predispusă la bug-uri și trebuie evitată ori de câte ori este posibil.

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


    C. Folosește `thisArg`

    Mai multe metode prototype native din ES 5.1 vin cu semnătură `thisArg` specială, care ar trebui folosită ori de câte ori este posibil

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| se referă acum la `obj`

      console.log( this[ key ] );

    }, obj ); // <-- ultimul argument este `thisArg`

    // Afișează...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` poate fi folosit împreună cu `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Diverse</a>

    Această secțiune ilustrează idei și concepte care nu ar trebui considerate dogmatice, ci există pentru a încuraja practicile de punere sub semnul întrebării într-o încercare de a găsi căi mai bune pentru a executa sarcini comune în programarea JavaScript.

    A. Utilizarea `switch` ar trebui evitată, metode moderne de tracing vor trece funcțiile cu declarații switch pe lista neagră

    Se pare că există îmbunătățiri drastice ale executării declarațiilor `switch` în ultimele versiuni Firefox și Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module

    îmbunătățiri notabile pot fi observate și aici:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Un exemplu de declarație switch

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // execută implicit
        break;
    }

    // 7.A.1.2
    // O abordare mai bună ar fi folosirea un obiect literal sau chiar a unui modul:

    var switchObj = {
      alpha: function() {
        // declarații
        // return
      },
      beta: function() {
        // declarații
        // return
      },
      _default: function() {
        // declarații
        // return
      }
    };

    var switchModule = (function () {
      return {
        alpha: function() {
          // declarații
          // return
        },
        beta: function() {
          // declarații
          // return
        },
        _default: function() {
          // declarații
          // return
        }
      };
    })();


    // 7.A.1.3
    // Dacă `foo` este o proprietate a `switchObj` sau a `switchModule`, execută ca o metodă...

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

    // Dacă știți și aveți încredere în valoarea lui `foo`, ați putea chiar omite verificarea OR
    // păstrând doar execuția:

    switchObj[ foo ]( args );

    switchModule[ foo ]( args );


    // Acest șablon încurajează, de asemenea, reutilizarea codului.

    ```

    B. "Return"-urile timpurii încurajează lizibilitatea codului cu diferențe de performanță neglijabile

    ```javascript

    // 7.B.1.1
    // Incorect:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Corect:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Obiecte native și gazdă</a>

    Principiul de bază aici este:

    ### Nu fă nimic stupid și totul va fi în regulă.

    Pentru a consolida acest concept, vizionați următoarea prezentare:

    #### “Everything is Permitted: Extending Built-ins” de Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Comentarii</a>

  * O singură linie deasupra codului la care se referă
  * Comentariile pe mai multe linii sunt bune
  * Comentariile la sfârșitul de linie sunt interzise!
  * Stilul din JSDoc este bun, dar necesită o investiție substanțială de timp


10. <a name="language">Un cod, un limbaj</a>

    Programele ar trebui scrise într-un singur limbaj, oricare ar fi el, așa cum a fost dictat de administrator sau administratori.

## Anexă

### Prima virgulă (Comma First).

Orice proiect care are ca referință acest document la baza ghidului de stilizare nu va accepta o formatare de tip prima virgulă (comma first), cu excepția cazului în care acest lucru a fost specificat diferit de autorul proiectului.