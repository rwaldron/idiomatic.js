# Principi pisanja konzistentnog, idiomatskog JavaScript-a


## Ovo je "živ" dokument i nove ideje za unapređenje koda oko nas su uvek dobrodošle. Doprinesite:  fork, clone, branch, commit, push, pull request.

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


## Sav kod u bilo kojoj "bazi koda" trebalo bi da izgleda kao da ga je napisala jedna osoba, bez obzira koliko je ljudi doprinelo njegovom kreiranju.

### Lista koja sledi uokviruje praksu koju ja primenjujem u svom kodu, čiji sam ja originalni autor. Saradnici, na projektima koje sam ja kreirao, bi trebalo da se pridržavaju ovih uputstava.

### Ja nemam nameru da namećem svoje osobine stila na kod ili projekte drugih ljudi, ako već postoji zajednički stil, on mora biti poštovan.


> ### "Argumenti oko stila nemaju smisla. Potrebno je da postoji uputstvo korišćenja stila, i ti bi trebalo da ga se pridržavaš."
>_Rebecca_ _Murphey_

&nbsp;

> ### "Deo uloge dobrog upravnika uspešnog projekta je i u razumevanju da pisanje koda po svojim merilima je loša ideja™. Ako hiljade ljudi koristi tvoj kod, onda piši najjasniji kod, a ne preva svojim ličnim preferencijama ili da sa željom da ispadneš pametan u okvirima specifikacije."
>_Idan_ _Gazit_


## Translations

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


## Važne, ne idiomatske stvari:

### Alati za proveravanje kvaliteta koda, izvori i literatura

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

## Budite pametniji

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

Sledeće treba smatrati za: 1) nepotpunu, i 2) *OBAVEZNA LEKTIRA*. Ja se ne slažem uvek sa stilom pisanog od strane autora u nastavku, ali jedna stvar je sigurna: Oni su dosledni. Osim toga, to su autoriteti u ovom jeziku.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)




### Build i deployment procesi

Projekti bi trebalo da uvek sadrže neki vid generičkih alata pomoću kojih kod može biti pročišćen, testiran i komprimovan u procesu pripreme za produkcionu primenu. Za ovaj zadatak, [grunt](https://github.com/cowboy/grunt) od Ben Alman-a je odličan i zvanično je zamenio "kits/" direktorijum ovog repozitorijuma.



### Pogon za testiranje

Projekti _moraju_ da uključe neku formu "unit", "reference", "implementation" ili "functional" testiranja. "Use case" demoi se NE KVALIFIKUJU kao "testovi". Sledi lista alata za testiranje, nijedan od njih nije prihvaćeniji od drugih.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)

## Sadržaj

 * [Beline (Whitespace)](#whitespace)
 * [Lepa sintaksa](#spacing)
 * [Provera tipa (Zahvalnica jQuery Core Style Guidelines)](#type)
 * [Uslovna evaluacija](#cond)
 * [Praktičan stil](#practical)
 * [Imenovanje](#naming)
 * [Razno](#misc)
 * [Native i Host objekti](#native)
 * [Komentari](#comments)
 * [Kod u jednom jeziku](#language)



------------------------------------------------


## Predgovor

Sledeće sekcije ocrtavaju _razuma_ vodič za stil modernog JavaScript razvoja i nije im namera da budu preopširne. Najznačajnija poruka je **zakon o koezistentnosti stila pisanja koda**. Šta god da izaberete kao stil za vaš projekat to treba smatrati zakonom. Povežite ovaj dokument kao izjavu vašeg projekta koezistentnosti stila pisanja koda, čitljivosti i lakoći održavanja istog.





## Idiomatski manifest stila


1. <a name="whitespace">Beline (Whitespace)</a>
  - Nikada ne mešajte razmake i tabulatore.
  - Kada započinjete projekat, pre nego što napišete i jednu liniju koda, izaberite između razmaka (spaces) i tabulatora i to tretirajte kao **zakon**.
      - Radi čitljivosti, ja uvek preporučujem da postavite uvlačenje vašeg editora na dva karaktera &mdash; ovo predstavlja dva razmaka ili tab veličine dva razmaka.
  - Ukoliko vaš editor podržava, uvek radite sa uključenom opcijom "show invisibles". Koristi od ove prakse su:
      - Nametnuta koezistentnost
      - Eliminisanje nepotrebnih razmaka na kraju reda
      - Eliminisanje nepotrebnih razmaka u praznim redovima
      - Commits i diffs komande koje se lakše čitaju


2. <a name="spacing">Lepa sintaksa</a>

    A. Razmaci, zagrade, novi red

    ```javascript

    // if/else/for/while/try uvek imaju razmake, zagrade i prostiru se na više redova
    // ovo podstiče čitljivost

    // 2.A.1.1
    // Primeri stvarno skučene sintakse

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Koristite beline da bi promovisali čitljivost

    if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Još bolje:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // statements
    }

    // Ili...

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


    B. Dodela vrednosti, deklaracije, funkcije ( imenovane, izrazi, konstruktor )

    ```javascript

    // 2.B.1.1
    // Promenjive
    var foo = "bar",
      num = 1,
      undef;

    // Slovna notacija:
    var array = [],
      object = {};


    // 2.B.1.2
    // Korišćenje samo jedne `var` deklaracije po oblasti važenja (function) promoviše čitljivost
    // i održava vašu listu deklaracija čistu od nasumičnog (a štedi i nekoliko kucanja po taserima)

    // Loše
    var foo = "";
    var bar = "";
    var qux;

    // Dobro
    var foo = "",
      bar = "",
      quux;

    // Ili..
    var // Komentar o ovima
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var deklaracije bi uvek trebalo da se nalaze na početku njihove oblasti važenja (function).
    // Ovo isto važi i za const i let iz ECMAScript 6.

    // Loše
    function foo() {

      // some statements here

      var bar = "",
        qux;
    }

    // Dobro
    function foo() {
      var bar = "",
        qux;

      // all statements after the variables declarations.
    }
    ```

    ```javascript

    // 2.B.2.1
    // Deklaracija imenovane funkcije
    function foo( arg1, argN ) {

    }

    // Korišćenje
    foo( arg1, argN );


    // 2.B.2.2
    // Deklaracija imenovane funkcije
    function square( number ) {
      return number * number;
    }

    // Usage
    square( 10 );

    // Veoma izmišljen stil prenošenja parametara
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // callback statements
    });


    // 2.B.2.3
    // Funkcioni izraz
    var square = function( number ) {
      // Return something valuable and relevant
      return number * number;
    };

    // Funkcioni izraz sa određivačem
    // Ovaj poželjni oblik ima dodatu vrednost da može
    // da pozove sebe i ima identitet u stack traces:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };


    // 2.B.2.4
    // Deklaracija konstruktora
    function FooBar( options ) {

      this.options = options;
    }

    // Korišćenje
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Izuzetci, mala odstupanja

    ```javascript

    // 2.C.1.1
    // Funkcije sa povratnim pozivima (callbacks)
    foo(function() {
      // Zabeležite da nema dodatog razmaka između prve zagrade
      // poziva funkcije koja se izvršava i reči "function"
    });

    // Funkcija koja prihvata niz, bez razmaka
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Funkcija koja prihvata objekat, bez razmaka
    foo({
      a: "alpha",
      b: "beta"
    });

    // Jedan tekstualni argument, bez razmaka
    foo("bar");

    // Unutrašnje grupisanje zagrada, bez razmaka
    if ( !("foo" in obj) ) {

    }

    ```

    D. Konzistentnost uvek pobeđuje

    U sekcijama 2.A-2.C, pravila korišćenja belina su postavljena preporuka sa jednostavnijom, višom namenom: konzistentnost.
    Važno je da se naglasi da preference formatiranja, kao što su "unutrašnje beline", se mogu smatrati opcionim, ali samo jedan stil bi trebalo da se primenjuje kroz ceo kod vašeg projekta.

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

    E. Navodnici

    Sve jedno da li preferirate jednostruke ili dvostruke navodnike, ne postoji razlika kako ih JavaScript parsira. Ono što se **APSOLUTNO MORA** nametnuti je konzistentnost. **Nikada ne mešati različite navognike u istom projektu. Izaberite jedan stil i držite se njega.**

    F. Kraj reda i prazni redovi

    Beline mogu upropastiti diff komande i učiniti ih nečitljivim. Razmotrite uključivanje pre-commit hook koji automatski uklanja beline na kraju reda i beline u praznim redovima.

3. <a name="type">Provera tipa (Zahvalnica jQuery Core Style Guidelines)</a>

    A. Stvarni tipovi

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

      Globalne promenjive:

        typeof variable === "undefined"

      Lokalne promenjive:

        variable === undefined

      Osobine:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Implicitna konverzija tipa

    Razmislite o implikacijama sledećeg...

    Za dati HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` je deklarisana sa vrednošću `0` i njen tip je `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Negde kasnije u vašem kodu, želite da osvežite `foo`
    // sa novom vrednošću koja je došla iz ulaznog elementa

    foo = document.getElementById("foo-input").value;

    // Ako bi sada testirali `typeof foo`, rezultat bi bio `string`
    // Ovo znači da ako imate logiku koja proverava `foo` kao:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` nikada ne bi bio izvršen, čak i kada `foo` ima vrednost "1"


    // 3.B.1.2

    // Možete preduprediti probleme koristeći pametnu implicitnu konverziju tipa sa unarnim + i - operatorima:

    foo = +document.getElementById("foo-input").value;
    //    ^ unarni + operator će konvertovati svoj desi operand u broj

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` će biti pozvan
    ```

    Evo nekoliko uobičajenih primera sa konverzijom tipa:


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

    // Zabeležite da prethodno treba smatrati "nepotrebno pametno"
    // Preferirajte očigledan pristup u upoređivanju povratne vrednosti
    // indexOf, kao:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // je isto kao...

    ~~num;

    num >> 0;

    num >>> 0;

    // Sve ima rezultat 2


    // Zapamtite, negativni brojevi će biti drugačije tretirani...

    var neg = -2.5;

    parseInt( neg, 10 );

    // je isto kao...

    ~~neg;

    neg >> 0;

    // Sve ima rezultat -2
    // Međutim...

    neg >>> 0;

    // će imati rezultat 4294967294




    ```



4. <a name="cond">Uslovna evaluacija</a>

    ```javascript

    // 4.1.1
    // Kada utvrđujete da niz ima svoju dužinu,
    // umesto ovoga:
    if ( array.length > 0 ) ...

    // ...ustanovite istinitost, ovako:
    if ( array.length ) ...


    // 4.1.2
    // Kada utvrđujete da je niz prazan,
    // umesto ovoga:
    if ( array.length === 0 ) ...

    // ...ustanovite istinitost, ovako:
    if ( !array.length ) ...


    // 4.1.3
    // Kada utvrđujete da string nije prazan,
    // umesto ovoga:
    if ( string !== "" ) ...

    // ...ustanovite istinitost, ovako:
    if ( string ) ...


    // 4.1.4
    // Kada utvrđujete da string _jeste_ prazan:
    // umesto ovoga:
    if ( string === "" ) ...

    // ...ustanovite neistinitost, ovako:
    if ( !string ) ...


    // 4.1.5
    // Kada utvrđujete da je referenca true,
    // umesto ovoga:
    if ( foo === true ) ...

    // ...ustanovite onako kako ste to i mislili like you mean it, iskoristite ugrađene mogućnosti:
    if ( foo ) ...


    // 4.1.6
    // Kada utvrđujete da je referenca false,
    // umesto ovoga:
    if ( foo === false ) ...

    // ...koristite negaciju da prinudite istinitu evaluaciju
    if ( !foo ) ...

    // ...Budite oprezni, ovo će isto odgovarati i: 0, "", null, undefined, NaN
    // Ako _MORATE_ da testirate na logičko false, koristite
    if ( foo === false ) ...


    // 4.1.7
    // Kada samo utvrđujete da referenca može biti null ili undefinded, ali NE i false, "" ili 0,
    // umesto ovoga:
    if ( foo === null || foo === undefined ) ...

    // ...iskoristite prednost == prinudne konverzije tipa, ovako:
    if ( foo == null ) ...

    // Upamtite, korišćenje == će odgovarati `null` za `null` _I_ `undefined`
    // ali ne i za `false`, "" ili 0
    null == undefined

    ```
    Uvek utvrđujte za najbolji, najtačniji rezultat - prethodno je smernica, a ne dogma.

    ```javascript

    // 4.2.1
    // Zabeleške oko prinudne konverzije tipa i evaluacije

    // Preferišite `===` u odnosu na `==` (osim ako slučaj zahteva labavu proveru tipa)

    // === ne konvertuje tip, što znači da:

    "1" === 1;
    // false

    // == konvertuje tip, što znači da:

    "1" == 1;
    // true


    // 4.2.2
    // Logičke promenjive, istinitost i neistinitost

    // Logičke promenjive:
    true, false

    // Istinito:
    "foo", 1

    // Neistinito:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Praktičan stil</a>

    ```javascript

    // 5.1.1
    // Praktičan modul

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Ovo je nak logička osobina
          bool: true,
          // Neka tekstualna vrednost
          string: "a string",
          // Niz
          array: [ 1, 2, 3, 4 ],
          // Objekat
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // vraća tekuću vrednost promenjive `data`
            return data;
          },
          setData: function( value ) {
            // postavlja vrednost promenjive `data` i vraća je
            return ( data = value );
          }
        };
      })();

      // Ostale stvari koje se mogu ovde desiti

      // izložite naš modul kao globalni objekat
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Praktični konstruktor

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


      // da bi pozvali konstruktore bez korišćenja `new`, možete uraditi ovo:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // izložite naš konstruktor kao globalni objekat
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Imenovanje</a>



    A. Vi niste ljudski kompajler/kompresor koda, i ne pokušavajte to da budete.

    Sledeći kod je primer nečuvenog imenovanja:

    ```javascript

    // 6.A.1.1
    // Primer koda sa lošim imenima

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Bez sumnje, vi ste pisali kod kao ovaj - srećom to prestaje danas.

    Evo istog parčeta logike, ali sa suptilnijim, pametnijim imenovanjem (i čitljivijom strukturom):

    ```javascript

    // 6.A.2.1
    // Primer koda sa unapređenim imenovanjem

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

    Nekoliko dodatnih saveta prilikom imenovanja:

    ```javascript

    // 6.A.3.1
    // Imenovanje string-ova

    `dog` je string


    // 6.A.3.2
    // Imenovanje nizova

    `dogs` je niz `dog` string-ova


    // 6.A.3.3
    // Imenovanje funkcija, objekata, instanci, itd

    camelCase; funkcije i var deklaracije


    // 6.A.3.4
    // Imenovanje konstruktora, prototipova, itd

    PascalCase; konstruktor funkcija


    // 6.A.3.5
    // Imenovanje regularnih izraza

    rDesc = //;


    // 6.A.3.6
    // Iz Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Oblici `this`

    Izvan dobro poznatih "use case"-ova za `call` i `apply`, uvek preferirajte `.bind( this )` ili funkcionalni ekvivalent, za kreiranje `BoundFunction` definicija za kasnije prizivanje.
    Pribegavajte korišćenju pseudonimima (aliasing) kada preferirana opcija nije raspoloživa.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // otvori asinhroni tok,
      // ovo će biti pozivano neprekidno
      stream.read( opts.path, function( data ) {

        // Ažurirajte trenutne vrednosti this instance
        // sa poslednjom vrednošću sa toka podataka
        this.value = data;

      }.bind(this) );

      // Podesite učestalost ažuriranja
      setInterval(function() {

        // Emitujte događaj
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Samo se pretvarajte da smo nasledili EventEmitter ;)

    ```

    Kada nije dostupan, funkcionalni ekvilen za `.bind` postoji u mnogim modernim JavaScript bibliotekama.


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

    Kao poslednju mogućnost, kreirajte pseudonim na `this` koristeći `self` kao identifikator. Ovo je veoma podložno greškama i treba izbegavati kad god je to moguće.

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

    Nekoliko prototype metoda iz ES 5.1 dolaze sa specijalnim `thisArg` potpisom, koji je potrebno koristiti kad god je to moguće

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| now refers to `obj`

      console.log( this[ key ] );

    }, obj ); // <-- poslednji argument je `thisArg`

    // Ispisuje...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` se može koristiti sa `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Razno</a>

    Ova sekcija će služiti da ilustruje ideje i koncepte koje ne treba smatrati dogmama, već postoje da bi podstakle preispitivanje praksi kao pokušaj da se pronađe bolji način izvršavanja uobičajenih JavaScript programerski zadataka.

    A. Korišćenje `switch`-a treba izbegavati, moderne metode praćenja će staviti na crnu listu funkcije sa switch izrazima

    Izgleda da postoje drastična poboljšanja u izvršavanju `switch` izraza u poslednjim izdanjima Firefox i Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module

    Primetna poboljšanja se mogu uočiti takođe i ovde:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Primer switch izraza

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // podrazumevana vrednost
        break;
    }

    // 7.A.1.2
    // Alternativni pristup koji podržava "composability" i "reusability" je da se
    // koristi objekat koji sadrži sve slučajeve i funkciju da delegira:

    var cases, delegator;

    // Example returns for illustration only.
    cases = {
      alpha: function() {
        // izrazi
        // povratna vrednost
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // izrazi
        // povratna vrednost
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // izrazi
        // povratna vrednost
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // Transformiše listu argumenata u niz
      args = [].slice.call( arguments );

      // uzmi vrednost prvog indeksa iz liste argumenata
      key = args.shift();

      // Dodeli podrazumevani obrađivač slučajeva
      delegate = cases._default;

      // Izvedi metodu koja će da delegira operacije
      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      // Obim argumenta bi mogao biti podešen na nešto specifično,
      // u ovom slučaju, |null| je dovoljno
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Postavi API iz 7.A.1.2 da radi:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Naravno, `case` argument bi lako mogao da bude baziran
    // na nekom drugom arbitrarnom uslovu.

    var caseKey, someUserInput;

    // Možda neka vrsta form input-a?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // ili...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // i onda...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // i naravno...

    delegator();
    // [ "Default", 0 ]


    ```

    B. Rano vraćanje vrednosti funkcija promoviše čitljivost koda sa manjom razlikom u performansama koda

    ```javascript

    // 7.B.1.1
    // Loše:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Dobro:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Native & Host Objekti</a>

    Osnovni princip ovde je:

    ### Ne pravite glupa sranja i sve će biti u redu.

    Da bi utvrdili ovaj koncept, molim vas da pogledate sledeću prezentaciju:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Komentari</a>

    #### Jedna linija iznad koda je naslov
    #### Više linija je dobro
    #### Komentari na kraju reda su zabranjeni!
    #### JSDoc stil je dobar, ali zahteva značajnu insvesticiju u vremenu


10. <a name="language">Kod u jednom jeziku</a>

    Programi bi trebalo biti pisani u jednom jeziku, bez obzira koji je to jezik, diktirano od strane osobe ili osoba koje održavaju kod.

## Dodaci

### Zarez prvi.

Svaki projekat koji citira ovaj dukument kao svoj osnovni stil neće prihvatiti "prvi zaret" formatiranje, osim ako nije eksplicitno naglašeno od strane autora projekta.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
