# Zasady pisania zwartego, idiomatycznego kodu JavaScript


## Dokument który czytasz powstał dzięki współpracy wielu ludzi, wszelkie działania aby uduskonalać kod dookoła nas jest są mile widziane. Dołącz się: fork, clone, branch, commit, push, pull request.

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* John Fischer [@jfroffice](https://twitter.com/jfroffice), [github](https://github.com/jfroffice/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idan)
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
* Firede [@firede](https://twitter.com/firede) [github](https://github.com/firede)
* monkadd [github](https://github.com/monkadd)
* Stephan Lindauer [@stephanlindauer](http://twitter.com/stephanlindauer), [github](https://github.com/stephanlindauer)
* Thomas P [@dragon5689](https://twitter.com/dragon5689) [github](https://github.com/dragon5689)
* Yotam Ofek [@yotamofek](https://twitter.com/yotamofek) [github](https://github.com/yotamofek)
* Aleksandr Filatov [@greybax](http://twitter.com/greybax), [github](https://github.com/greybax)
* Duc Nguyen [@ducntq](https://twitter.com/ducntq), [github](https://github.com/ducntq)
* James Young [@jamsyoung](http://twitter.com/jamsyoung), [github](https://github.com/jamsyoung)
* Wojciech Adaszyński [github](https://github.com/wojciechAdaszynski)
* Stephane Moreau [github](https://github.com/stmoreau)  
* Boris Nekezov [github](https://github.com/boris-nekezov)
* Akshat Joshi [@akshat_joshi](http://twitter.com/akshat_joshi), [github](https://https://github.com/akshatjoshii)


## Cały kod w projekcie powinien wyglądać jakby pisała go jedna osoba, bez względu na to ile osób pracowało przy nim.

### Poniższa lista zasad została spisana przez orginalnego autora. Wszelkie poprawki czy tłumaczenia nie mogą naruszać pierwotnych zasad i logiki.

### Celem tego poradnika nie jest wymuszenie jedynego słusznego stylu pisania, jeżeli istnieją jakiekolwiek inne powszechnie używane zasady - należy je uszanować.


> ### "Spory dotyczące stylu kodu są bezsensowne. Powinny istnieć jasne zasady pisania czystego kodu, a programista powinien ich przestrzegać."
>_Rebecca_ _Murphey_

&nbsp;

> ### "Częścią bycia dobrym zarządcą projektu jest zdanie sobie sprawy, że pisanie kodu pod siebie jest złym pomysłem. Jeżeli tysiące osób pracują nad jednym projektem, maksymalna czytelność powinna być twoim priorytetem, a nie twoje osobiste preferencje."
>_Idan_ _Gazit_


## Tłumaczenia

* [ORIGINAL](https://github.com/rwldrn/idiomatic.js/)
* [Bulgarian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/bg_BG)
* [German](https://github.com/rwldrn/idiomatic.js/tree/master/translations/de_DE)
* [French](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Spanish](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Portuguese - Brazil](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Korean](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [日本語](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [Italian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/it_IT)
* [Russian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)
* [Romanian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ro_RO)
* [简体中文](https://github.com/rwldrn/idiomatic.js/tree/master/translations/zh_CN)
* [Serbian - cyrilic alphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ср_СР)
* [Serbian - latin aplphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/sr_SR)
* [Greek](https://github.com/rwaldron/idiomatic.js/tree/master/translations/gr_GR)
* [Hindi](https://github.com/rwaldron/idiomatic.js/tree/master/translations/hi_HI)  


## Ważne, nieidiomatyczne rzeczy:

### Narzędzia poprawiające jakość kodu, źródła i odnośniki

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/es-analysis/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)
 * [eslint](http://eslint.org/)
 * [jscs](https://www.npmjs.org/package/jscs)
 * [Editorconfig](http://editorconfig.org/)

## Dodatkowe materiały do nauki

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

Poniższe materiały są: 1) niekompletne, lub 2) mimo tego, że kod jest spójny nie zgadzam się ze stylem autorów. Są oni jednak odpowiedzialni za bieżący standard języka JavaScript.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)




### Uruchamianie i wdrażanie

Projekty powinny zawsze zawierać środki umożliwiające testowanie, optymalizacje i kompresję do kodu produkcyjnego. Najlepszym do tego narzędziem jest [grunt](https://github.com/gruntjs/grunt) autorstwa Bena Almana.




### Testowanie aplikacji

Projekty _muszą_ zawierać w jakiejkolwiek postaci testy: jednostkowe, funkcjonalne i implementacyjne. Prezentacje przypadków użycia nie kwalifikują się pod "testy". Kolejność poniżysz frameworków do testów jest przypadkowa.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)

## Spis treści

 * [Białe znaki](#whitespace)
 * [Piękna składnia](#spacing)
 * [Sprawdzanie typów](#type)
 * [Instrukcje warunkowe](#cond)
 * [Praktyczny styl](#practical)
 * [Nazewnictwo](#naming)
 * [Pozostałe](#misc)
 * [Native & Host Objects](#native)
 * [Komentarze](#comments)
 * [Jeden język](#language)



------------------------------------------------


## Przedmowa

Poniższe rozdziały są jedynie sugestią jak pisać _rozsądny_ oraz nowoczesny kod w języku JavaScript. Najważniejszą z nich jest **nakaz spójności kodu**. Niezależnie od obranego stylu w projekcie, pownien on być przestrzegany przez przystkich programistów.





## Manifest idiomatycznego kodu


1. <a name="whitespace">Białe znaki</a>
  - Nigdy nie używaj znaków spacji razem ze znakami tabulacji.
  - Przed rozpoczęciem projektu ustal jeden znak indentacji (spacje lub tabulator).
      - Dla czytelności sugeruję tobie ustawienie w środowsku programistycznym indentacji na 2 spacje. &mdash;.
  - Jeżeli twój edytor obsługuje tę opcję, włącz wyświetlanie wszystkich znaków aby:
      - Wymusić spójność
      - Uniknąć białych znaków na końcu linii
      - Uniknąć białych znaków w pustych liniach
      - Wymusić czytelność Commitów i diffów
  - Używaj [Editorconfig](http://editorconfig.org/) jeżeli tylko jest to możliwe.  Wspiera on większość środowisk programistycznych oraz załatwia większość problemów związanych z białymi znakami.


2. <a name="spacing">Piękna składnia</a>

    A. Nawiasy, nawiasy klamrowe, znaki nowej linii

    ```javascript

    // if/else/for/while/try zawsze występują ze spacją oraz nawiasami klamrowymi. Rozpinją się zawsze na kilka linii.
    // Zwiększa to czytelność.

    // 2.A.1.1
    // Przykłady zagęszczonego kodu.

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Używaj białych znaków, aby zwiększyć czytelność.

    if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Lub nawet:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // statements
    }

    // Lub...

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


    B. Przypisania, Deklaracje, Funkcje ( Named, Expression, Constructor )

    ```javascript

    // 2.B.1.1
    // Zmienne
    var foo = "bar",
      num = 1,
      undef;

    // Literal notations:
    var array = [],
      object = {};


    // 2.B.1.2
    // `var` powinno być używte tylko raz w fukcjach, aby zwiększyć czytelność kodu
    // oraz ujednolicić twój kod (redukuje to również ilość kodu)

    // Źle
    var foo = "";
    var bar = "";
    var qux;

    // Dobrze
    var foo = "",
      bar = "",
      qux;

    // lub..
    var // Komentarze dot. zmiennych
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // `var` powinno znajdować się zawsze na początku funkcji.


    // Źle
    function foo() {

      // instrukcje

      var bar = "",
        qux;
    }

    // Dobrze
    function foo() {
      var bar = "",
        qux;

      // wszelkie instrukcje funkcji
    }

    // 2.B.1.4
    // const oraz let, z ECMAScript 6, powinny znajdować się na górze bloku(scope).

    // Źle
    function foo() {
      let foo,
        bar;
      if ( condition ) {
        bar = "";
        // instrukcje
      }
    }
    // Dobrze
    function foo() {
      let foo;
      if ( condition ) {
        let bar = "";
        // instrukcje
      }
    }
    ```

    ```javascript

    // 2.B.2.1
    // Deklaracje funkcji (Named Functions Declarations)
    function foo( arg1, argN ) {

    }

    // Użycie
    foo( arg1, argN );


    // 2.B.2.2
    // Deklaracje funkcji (Named Functions Declarations)
    function square( number ) {
      return number * number;
    }

    // Użycie
    square( 10 );

    // Wywoływanie funkcji z funkcji
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // callback statements
    });


    // 2.B.2.3
    // Wyrażenia funkcyjne
    var square = function( number ) {
      // zwróć bardzo istotną wartość
      return number * number;
    };

    // Wyrażenia funkcyjne z identyfikatorem
    // Jest to preferowana forma deklaracji wyrażeń funkcyjnych.
    // Umożliwia ona wołanie samej siebie oraz posiada identyfikator na Stack Trace
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number - 1 );
    };


    // 2.B.2.4
    // Deklarowanie konstruktora
    function FooBar( options ) {

      this.options = options;
    }

    // Użycie
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Wyjątki od poprzednich reguł

    ```javascript

    // 2.C.1.1
    // Fukcje z callbackami
    foo(function() {
      // Zwróć uwagę na brak spacji między 'function',
      // a pierwszym nawiasem
    });

    // Funkcje przyjmujące tablicę jako argument
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Funkcje przyjmujące obiekt
    foo({
      a: "alpha",
      b: "beta"
    });

    // Funkcje przyjmujące pojedynczy string
    foo("bar");

    // Nawiasy grupujące wewnętrze wyrażenie
    if ( !("foo" in obj) ) {

    }

    ```

    D. Spójność jest najważniejsza

    W rozdziałach 2.A-2.C zasady dotyczące białych znaków służą jako wskazówki do utrzymania spójnego kodu.
    Najważniejszym wnioskiem idącym z tego poradnika jest to, aby niezależnie od obranych preferencji(np. spacje wewnątrz ciała funkcji) utrymywane one były w całym projekcie.

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

    E. Cudzysłów czy apostrof?

    Wybór ten nie wpływa w żaden sposób na działanie parsera JavaScript. **Należy** jednak używać tylko jednego z tych znaków w całym projekcie. **Nigdy nie mieszaj cudzysłowów z apostrowami.**

    F. Koniec linii oraz puste linie.

    Białe znaki potrafią w znaccy sposób utrudnić pracę programistów. Operacje *diff* stają się przez nie nieczytelne, a changeset projektu powoli zamienia się w śmietnik. Dobrym pomysłem jest używanie oprogramowania usuwającego białe znaki na końcu oraz w pustych liniach.

3. <a name="type">Sprawdzanie typu</a>

    A. Typy podstawowe

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
        (gdziekolwiek możliwe)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null or undefined:

        variable == null

    undefined:

      Global Variables:

        typeof variable === "undefined"

      Lokalne Zmienne:

        variable === undefined

      Properties:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Rzutowane typy

    Rozważmy następujący przypadek...

    Mając dany element:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // deklarujemy `foo` i przypisujemy mu wartość 0, jego typ to Number
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Aktualizujemy `foo` wartością z elementu HTML

    foo = document.getElementById("foo-input").value;

    // Jeżeli teraz sprawdzilibyśmy wartość `typeof foo` wynosiła by ona String

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` nigdy nie zostałby wykonany, mimo że `foo` ma wartość "1"


    // 3.B.1.2

    // Dzięki operatorom + i - możemy zastosować sprytne rzutowanie:

    foo = +document.getElementById("foo-input").value;
    //    ^ jednoargumentowy operator + zrzutuje nam wartość Number na String

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` będzie wtedy wykonany
    ```

    Kilka przykładów zastosowania sprytnego rzutowania:


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

    // Ostatnie przykłady mogą okazać się w póżniejszych etapach
    //prac nad projektem uciążliwe.
    // Polecanym zapisem powyższego przykładu jest:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // jest równoważne z:

    ~~num;

    num >> 0;

    num >>> 0;

    // wszystkie powyższe dają 2


    // Ujemne wartości dają jednak dla tych operacji różne wyniki.

    var neg = -2.5;

    parseInt( neg, 10 );

    // to to samo co...

    ~~neg;

    neg >> 0;

    // wszystkie dają -2
    // Ale...

    neg >>> 0;

    // da nam wynik 4294967294




    ```



4. <a name="cond">Instrukcje warunkowe</a>

    ```javascript

    // 4.1.1
    // Kiedy sprawdzamy czy tablica jest niepusta,
    // zamiast zapisu:
    if ( array.length > 0 ) ...

    // ...lepiej sprawdzić czy zadana wartość jest *Truthy*:
    if ( array.length ) ...


    // 4.1.2
    // Kiedy sprawdzamy czy tablica jest pusta,
    // zamiast zapisu:
    if ( array.length === 0 ) ...

    // ...lepiej sprawdzić czy wartość jest *Falsy*:
    if ( !array.length ) ...


    // 4.1.3
    // Kiedy sprawdzamy czy string jest niepusty
    // zamiast zapisu:
    if ( string !== "" ) ...

    // ...sprawdź czy zmienna jest *Truthy*:
    if ( string ) ...


    // 4.1.4
    // Kiedy sprawdzamy czy string jest pusty:
    // zamiast...
    if ( string === "" ) ...

    // ...sprawdź czy wyrażenie jest *Falsy*:
    if ( !string ) ...


    // 4.1.5
    // Kiedy sprawdzamy czy typ logiczne jest prawdą,
    // zamiast zapisu...
    if ( foo === true ) ...

    // ...skorzystajmy z wyrażenia:
    if ( foo ) ...


    // 4.1.6
    // Kiedy sprawdzamy czy typ logiczne jest fałszem,
    // zamiast zapisu...
    if ( foo === false ) ...

    // ...skorzystajmy z negacji:
    if ( !foo ) ...

    // ...wyrażenie to jednak będzie prawdziwe również dla wartości: 0, null, undefined, NaN, ""
    // jeżeli chcesz sprawdzić czy wyrażenie jest rzeczywiście fałszem:
    if ( foo === false ) ...


    // 4.1.7
    // Kiedy sprawdzasz czy zmienna ma wartość null lub undefined
    // zamiast zapisu:
    if ( foo === null || foo === undefined ) ...

    // ...zastosuj operator ==:
    if ( foo == null ) ...

    // Pamiętaj, użycie == dopasuje `null` do `null` i `undefined`
    // ale nie `false`, "" or 0
    null == undefined

    ```
    Zawsze stosuj najdokładniejsze porównania, unikniesz dzięki temu wielu niechcianych rzutowań.

    ```javascript

    // 4.2.1
    // Uwagi odnoście rzutowania typów i ich wartości

    // Wybieraj `===` nad `==` (chyba że przypadek dopuszcza domyślne rzutowanie)

    // === nie rzutuje typu, tzn.:

    "1" === 1;
    // false

    // == rzutuje typ, tzn.:

    "1" == 1;
    // true


    // 4.2.2
    // Typy logiczne, wartości Truthy i Falsy

    // Booleans:
    true, false

    // Truthy:
    "foo", 1

    // Falsy:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Praktyczny styl</a>

    ```javascript

    // 5.1.1
    // Praktyczny moduł

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // wartość logiczna
          bool: true,
          // Zmienna typu string
          string: "a string",
          // tablica jako pole obiektu
          array: [ 1, 2, 3, 4 ],
          // obiekt jako pole obiektu
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // funkcja zwracająca `data`
            return data;
          },
          setData: function( value ) {
            // funkcja ustawiająca `data` i zwracająca ją
            return ( data = value );
          }
        };
      })();

      // pozostała część kodu

      // upubliczniamy moduł w zmiennej `global`
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Praktyczny konstruktor

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


      // Aby wywołać konstruktor bez słowa kluczowego `new`
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // upubliczniamy moduł w zmiennej `global`
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Nazewnictwo</a>



    A. Nie próbuj być kompilatorem.

    Poniżej przedstawiony jest niedopuszczalny kod:

    ```javascript

    // 6.A.1.1
    // Przykład złych nazw

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Jeżeli twój kod przypomina powyższy przykład to musisz go koniecznie zmienić.

    Kod wykonujący dokładnie tą samą logikę, lecz w bardziej przystępnej dla człowieka formie:

    ```javascript

    // 6.A.2.1
    // przykład z poprawionymi nazwami

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

   Kilka uwag odnoście nazw zmiennych:

    ```javascript

    // 6.A.3.1
    // Nazwy zmiennych tekstowych

    `dog` is a string


    // 6.A.3.2
    // Tablice

    `dogs` to tablica zmiennych `dog`


    // 6.A.3.3
    // Funkcje, obiekty, instancje

    camelCase; nazwy zmiennych i funkcji


    // 6.A.3.4
    // Nazwy konstruktorów, prototypów, etc.

    PascalCase; dla konstruktorów

    // 6.A.3.5
    // nazwy dla wyrażeń regularnych

    rDesc = //;


    // 6.A.3.6
    // Z Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Oblicza `this`

    Poza znanymi przykładami zastosowania `call` oraz `apply`, zawsze staraj się stosować funkcję `.bind( this )` do tworzenia `Związanych funkcji(BoundFunction)`. Zawsze staraj się przypisywać związaną funkcję do jakiejś zmiennej.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // otwórz asynchroniczny strumień,
      // this będzie wielokrotnie wywoływane
      stream.read( opts.path, function( data ) {

        // Zaktualizuj wartość this dla funkcji
        // zaktualizowaną wartościa ze strumienia
        this.value = data;

      }.bind(this) );

      // Throttle the frequency of events emitted from
      // this Device instance
      setInterval(function() {

        // Emit a throttled event
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    ```

    Funkcje podobne do `.bind` istnieją w wielu bibliotekach.


    ```javascript
    // 6.B.2

    // np. lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // np. jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // np. dojo.hitch
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

    Ostatnią możliwością jest ustawienie zmiennej `self` na `this`. Należy jednak unikać tego rozwiązania, ponieważ prowadzi do trudno wychwytywalnych błędów.
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


    C. Użycie `thisArg`

    Kilka metod obiektu prototype w standardzie EcmaScript 5.1 zawierają specjalne oznaczenie `thisArg`, które powinno być wykorzystywane w miarę możliwości.

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| now refers to `obj`

      console.log( this[ key ] );

    }, obj ); // <-- ostatnim argumentem jest `thisArg`

    // Prints...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` może być używane z  `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Pozostałe</a>

    This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

    Ten rozdział opisuje metody, które nie powinne być traktowane jako żelazne zasady, lecz jako style które programista w miarę swoich preferencji może przyjąć lub nie. Jest to również próba zachęcenia do znajdowania lepszych sposobów realizacji bardzo często spotykanych problemów w kodzie JavaScript.

    A. Używanie instrukcji `switch` powinno być ograniczone do minimum. Śledzenie wywołań funkcji w kodzie może ignorować te wywołane ze `switch`.

    ```javascript

    // 7.A.1.1
    // Przykład użycia `switch`

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // domyślny kod
        break;
    }

    // 7.A.1.2
    // innym sposobem jest trzymanie przypadków w obiekcie:

    var cases, delegator;

    // Przykład:
    cases = {
      alpha: function() {
        // instrukcje
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // instrukcje
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // instrukcje
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // zamiana listy arguments na tablicę
      args = [].slice.call( arguments );

      // przesunięcie klucza(przypadku) w argumentach
      key = args.shift();

      // przypisz domyślny handler
      delegate = cases._default;

      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Przykład użycia kodu z  7.A.1.2:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Oczywiście zmienna `case` może też być zależna od innych warunków.

    var caseKey, someUserInput;

    // Albo od danych od użytkownika.
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // lub...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // And of course...

    delegator();
    // [ "Default", 0 ]


    ```

    B. Wcześniejsze wyjścia z funkcji zwiększają przejrzystość kodu.

    ```javascript

    // 7.B.1.1
    // Źle:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Dobrze:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Native & Host Objects</a>

    Podstawowo zasada:

    ### Nie rób głupot, a wszystko będzie ok.

    Aby lepiej przyswoić tę zasadę obejrzyj prezentacje:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    https://www.youtube.com/watch?v=xL3xCO7CLNM


9. <a name="comments">Komentarze</a>

    #### Pojedyncza linia nad kodem stanowi tytuł.
    #### Wieloliniowe komentarze są ok.
    #### Zakańczanie komentarzy jednoliniowych jest zabronione
    #### styl JSDoc jest poprawny, ale ciężki do opanowania


10. <a name="language">Jeden język</a>

    Wszystkie programy powinny być pisane w jednym języku.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
