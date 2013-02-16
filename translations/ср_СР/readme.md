# Принципи писања Конзистентног, Идиоматског JavaScript-а


## Ово је "жив" документ и нове идеје за унапређење кода око нас су увек добродошле. Допринесите: fork, clone, branch, commit, push, pull request.

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
* Дејан Димић [@dejan_dimic](http://twitter.com/dejan_dimic), [github](https://github.com/rubystream)


## Сав код у било којој "бази кода" требало би да изгледа као да га је написала једна особа, без обзира колико је људи допринело његовом креирању.

### Листа која следи уоквирује праксу коју ја примењујем у свом коду, чији сам ја оригинални аутор. Сарадници, на пројектима које сам ја креирао, би требало да се придржавају ових упутстава.

### Ја немам намеру да намећем своје особине стила на код или пројекте других људи, ако већ постоји заједнички стил, он мора бити поштован.


> ### "Аргументи око стила немају смисла. Потребно је да постоји упутство коришћења стила, и ти би требало да га се придржаваш."
>_Rebecca_ _Murphey_

&nbsp;

> ### "Део улоге доброг управника успешног пројекта је и у разумевању да писање кода по својим мерилима је Лоша Идеја™. Ако хиљаде људи користи твој код, онда пиши најјаснији код, а не према својим личним преференцијама или да са жељом да испаднеш паметан у оквирима спецификације."
>_Idan_ _Gazit_


## Преводи

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


## Важне, Не-Идиоматске ствари:

### Алати за проверавање квалитета кода, Извори и Литература

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

## Будите паметнији

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

Следеће треба сматрати за 1) непотпуну, и 2) *ОБАВЕЗНА ЛЕКТИРА*. Ја се не слажем увек са стилом писаног од стране аутора у наставку, али једна ствар је сигурна: Они су доследни. Осим тога, то су ауторитети у овом језику.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)




### Build & Deployment Процес

Пројекти би требало да увек садрже неки вид генеричких алата помоћу којих код може бити прочишћен, тестиран и компримован у процесу примпреме за продукциону примену. За овај задатак, [grunt](https://github.com/cowboy/grunt) од Ben Alman-а је одличан и званично је заменио "kits/" директоријум овог репозиторијума.




### Погон за тестирање

Пројекти _морају_ да укључе неку форму 'unit', 'reference', 'implementation' или 'functional' тестирања. 'Use case' демои се НЕ КВАЛИФИКУЈУ као "тестови". Следи листа алата за тестирање, ниједан од њих није прихваћенији од других.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)

## Садржај

 * [Белине (Whitespace)](#whitespace)
 * [Лепа Синтакса](#spacing)
 * [Провера типа (Захвалница jQuery Core Style Guidelines)](#type)
 * [Условна евалуација](#cond)
 * [Практичан Стил](#practical)
 * [Именовање](#naming)
 * [Разно](#misc)
 * [Native и Host Објекти](#native)
 * [Коментари](#comments)
 * [Код у једном језику](#language)



------------------------------------------------


## Предговор

Следеће секције оцртавају _разуман_ водич за стил модерног JavaScript развоја и није им намера да буду преопширне. Најзначајнија порука је **закон о коезистентности стила писања кода**. Шта год да изаберете као стил за ваш пројекат то треба сматрати законом. Повежите овај документ као изјаву вашег пројекта коезистентности стила писања кода, читљивости и лакоћи одржавања истог.






## Идиоматски Манифест Стила


1. <a name="whitespace">Белине (Whitespace)</a>
  - Никада не мешајте размаке и табулаторе.
  - Када започињете пројекат, пре него што напишете и једну линију кода, изаберите између размака (spaces) и табулатора и ово третирајте као **закон**.
      - Ради читљивости, ја увек препоручујем да поставите увлачење вашег едитора на два карактера &mdash; ово представља два размака или таб величине два размака.
  - Уколико ваш едитор подржава, увек радите са укљученом опцијом "show invisibles". Користи од ове праксе су:
      - Наметнута коезистентност
      - Елиминисање непотребних размака на крају реда
      - Елиминисање непотребних размака у празним редовима
      - Commits и diffs команде које се лакше читају


2. <a name="spacing">Лепа Синтакса</a>

    A. Размаци, Заграде, Нови Ред

    ```javascript

    // if/else/for/while/try увек имају размаке, заграде и простиру се на више редова
    // ово подстиче читљивост

    // 2.A.1.1
    // Примери стварно скучене синтаксе

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Користите белине да би промовисали читљивост

    if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Још боље:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // statements
    }

    // Или...

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


    B. Додела вредности, Декларације, Функције ( Именоване, Изрази, Конструктор )

    ```javascript

    // 2.B.1.1
    // Промењиве
    var foo = "bar",
      num = 1,
      undef;

    // Словна нотација:
    var array = [],
      object = {};


    // 2.B.1.2
    // Коришћење само једне `var` декларације по области важења (function) промовише читљивост
    // и одржава вашу листу декларација чисту од насумичног (а штеди и неколико куцања по тастерима)

    // Лоше
    var foo = "";
    var bar = "";
    var qux;

    // Добро
    var foo = "",
      bar = "",
      quux;

    // Или..
    var // Коментар о овима
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var декларације би увек требало да се налазе на почетку њихове области важења (function).
    // Ово исто важи и за const и let из ECMAScript 6.

    // Лоше
    function foo() {

      // some statements here

      var bar = "",
        qux;
    }

    // Добро
    function foo() {
      var bar = "",
        qux;

      // all statements after the variables declarations.
    }
    ```

    ```javascript

    // 2.B.2.1
    // Декларација Именоване Функције
    function foo( arg1, argN ) {

    }

    // Коришћење
    foo( arg1, argN );


    // 2.B.2.2
    // Декларација Именоване Функције
    function square( number ) {
      return number * number;
    }

    // Коришћење
    square( 10 );

    // Веома измишљен стил преношења параметара
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // callback statements
    });


    // 2.B.2.3
    // Функциони израз
    var square = function( number ) {
      // Return something valuable and relevant
      return number * number;
    };

    // Функциони израз са одређивачем
    // Овај пожељни облик има додату вредност да може
    // да позове себе и има идентитет у stack traces:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };


    // 2.B.2.4
    // Декларација Конструктора
    function FooBar( options ) {

      this.options = options;
    }

    // Коришћење
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Изузетци, Мала одступања

    ```javascript

    // 2.C.1.1
    // Функције са повратним позивима (callbacks)
    foo(function() {
      // Забележите да нема додатог размака између прве заграде
      // позива функције која се извршава и речи "function"
    });

    // Функција која прихвата низ, без размака
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Функција која прихвата објекат, без размака
    foo({
      a: "alpha",
      b: "beta"
    });

    // Један текстуални аргумент, без размака
    foo("bar");

    // Унутрашње груписање заграда, без размака
    if ( !("foo" in obj) ) {

    }

    ```

    D. Козистентност увек побеђује

    У секцијама 2.A-2.C, правила коришћења белина су постављена као препорука са једноставнијом, вишом наменом: конзсистентност.
    Важно је да се нагласи да преференце форматирања, као што су "унутрашње белине", се могу сматрати опционим, али само један стил би требало да се примењује кроз цео код вашег пројекта.

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

    E. Наводници

    Све једно да ли преферирате једноструке или двоструке наводнике, не постоји разлика како их JavaScript парсира. Оно што се **АПСОЛУТНО МОРА** наметнути је конзистентност. **Никада не мешати различите наводнике у истом пројекту. Изаберите један стил и држите се њега.**

    F. Крај Реда и Празни редови

    Белине могу упропастити diff команде и учинити их нечитљивим. Размотрите укључивање pre-commit hook који аутоматски уклања белине на крају реда и белине у празним редовима.

3. <a name="type">Провера типа (Захвалница jQuery Core Style Guidelines)</a>

    A. Стварни типови

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

      Глобалне промењиве:

        typeof variable === "undefined"

      Локалне промењиве:

        variable === undefined

      Особине:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Имплицитна конверзија типа

    Размислите о импликацијама следећег...

    За дати  HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` је декларисана са вредношћу `0` и њен тип је `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Негде касније у вашем коду, желите да освежите `foo`
    // са новом вредношћу која је дошла из улазног елемента

    foo = document.getElementById("foo-input").value;

    // Ако би сада тестирали `typeof foo`, резултат би био `string`
    // Ово значи да ако имате логику које проверава `foo` као:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` никада не би био извршен, чак и када `foo` има вредност "1"


    // 3.B.1.2

    // Можете предупредити проблеме користећи паметну имплицитну конверзију типа са унарним + or - операторима:

    foo = +document.getElementById("foo-input").value;
    //    ^ унарни + оператор ће конвертовати свој десни операнд у број

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` ће бити позван
    ```

    Ово неколико уобичајених примера са konverzijom типа:


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

    // Забележите да предходно треба сматрати "непотребно паметно"
    // Преферирајте очигледан приступ упоређивању повратне вредности
    // indexOf, као:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // је исто као...

    ~~num;

    num >> 0;

    num >>> 0;

    // Све има резултат 2


    // Запамптите, негативни бројеви ће бити другачије третирани...

    var neg = -2.5;

    parseInt( neg, 10 );

    // је исто као...

    ~~neg;

    neg >> 0;

    // Све има резултат -2
    // Међутим...

    neg >>> 0;

    // ће имати резултат 4294967294




    ```



4. <a name="cond">Условна евалуација</a>

    ```javascript

    // 4.1.1
    // Када утврђујете да низ има своју дужину,
    // уместо овога:
    if ( array.length > 0 ) ...

    // ...установите истинитост, овако:
    if ( array.length ) ...


    // 4.1.2
    // Када утврђујете да је низ празан,
    // уместо овога:
    if ( array.length === 0 ) ...

    // ...установите истинитост, овако:
    if ( !array.length ) ...


    // 4.1.3
    // Када утврђујете да string није празан,
    // уместо овога:
    if ( string !== "" ) ...

    // ...установите истинитост, овако:
    if ( string ) ...


    // 4.1.4
    // када утврђујете да string _јеste_ празан,
    // уместо овога:
    if ( string === "" ) ...

    // ...установите неистинитост, овако:
    if ( !string ) ...


    // 4.1.5
    // Када утврђујете да је референца true,
    // уместо овога:
    if ( foo === true ) ...

    // ...установите онако како сте то и мислили, искористите уграђене могућности:
    if ( foo ) ...


    // 4.1.6
    // Када утврђујете да је референца false,
    // уместо овога:
    if ( foo === false ) ...

    // ...користите негацију да принудите истиниту евалуацију
    if ( !foo ) ...

    // ...Будите опрезни, ово ће исто одговарати и: 0, "", null, undefined, NaN
    // Ако _МОРАТЕ_ да тестирате на логичко false, користите
    if ( foo === false ) ...


    // 4.1.7
    // Када само утврђујете да референца може бити null или undefined, али НЕ и false, "" или 0,
    // уместо овога:
    if ( foo === null || foo === undefined ) ...

    // ...искористите предност == принудне конверзије типа, овако:
    if ( foo == null ) ...

    // Упамтите, коришћење == ће одговарати `null` за `null` _I_ `undefined`
    // али не и за `false`, "" или 0
    null == undefined

    ```
    УВЕК утврђујте за најбољи, најтачнији резултат - предходно је смерница, а не догма.

    ```javascript

    // 4.2.1
    // Забелешке око принудне конверзије типа и евалуације

    // Преферишите `===` у односу на `==` (осим ако случај захтева лабаву проверу типа)

    // === не конвертује тип, што значи да:

    "1" === 1;
    // false

    // == конвертује тип, што значи да:

    "1" == 1;
    // true


    // 4.2.2
    // Логичке промењиве, Истинитост & Неистинитост

    // Логичке промењиве:
    true, false

    // Истинито:
    "foo", 1

    // Неистинито:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Практичан Стил</a>

    ```javascript

    // 5.1.1
    // Практичан Модул

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Ово је нека логичка особина
          bool: true,
          // Нека текстуална вредност
          string: "a string",
          // Низ
          array: [ 1, 2, 3, 4 ],
          // Објекат
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // враћа текућу вредност промењиве `data`
            return data;
          },
          setData: function( value ) {
            // поставља вредност промењиве `data` и враћа је
            return ( data = value );
          }
        };
      })();

      // Остале ствари које се могу овде десити

      // изложите наш модул као глобални објекат
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Практични конструктор

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


      // да би позвали конструкторе без коришћења `new`, можете урадити ово:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // изложите наш конструктор као глобални објекат
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Именовање</a>



    A. Ви нисте људски компајлер/компресор кода, и не покушавајте то да будете.

    Следећи код је пример нечувеног именовања:

    ```javascript

    // 6.A.1.1
    // Пример кода са лошим именима

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Без сумње, ви сте писали код као овај - срећом то престаје данас.

    Ево истог парчета логике, али са суптилнијим, паметнијим именовањем (и читљивијом структуром):

    ```javascript

    // 6.A.2.1
    // Пример кода са унапређеним именовањем

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

    Неколико додатних савета приликом именовања:

    ```javascript

    // 6.A.3.1
    // Именовање string-ова

    `dog` је string


    // 6.A.3.2
    // Именовање низова

    `dogs` је низ `dog` string-ова


    // 6.A.3.3
    // Именовање функција, објеката, инстанци, итд

    camelCase; функције и var декларације


    // 6.A.3.4
    // Именовање конструктора, прототипова, итд

    PascalCase; конструктор функција


    // 6.A.3.5
    // Именовање регуларних израза

    rDesc = //;


    // 6.A.3.6
    // Из Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Облици `this`

    Изван добро познатих "use case"-ova за `call` и `apply`, увек преферирајте `.bind( this )` или функционални еквивалент, за креирање `BoundFunction` дефиниција за каснију призивање. Прибегавајте коришћењу преудонима (aliasing) када преферирана опција није расположива.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // отвори асинхрони ток,
      // ово ће бити позивано непрекидно
      stream.read( opts.path, function( data ) {

        // Ажурирајте тренутне вредности this инстанце
        // са последњом вредношћу са тока података
        this.value = data;

      }.bind(this) );

      // Подесите учесталост ажуриранја
      setInterval(function() {

        // Емитујте догађај
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Само се претварајте да смо наследили EventEmitter ;)

    ```

    Када није доступан, функционални еквилент за `.bind` постоји у многим модерним JavaScript библиотекама.


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

    Као последњу могућност, креирајте alias на `this` користећи `self` као идентификатор. Ово је веома подложно грешкама и треба избегавати кад год је то могуће.

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


    C. Користи `thisArg`

    Неколико prototype метода из ES 5.1 долазе са специјалним `thisArg` потписом, који је потребно користити кад год је то могуће

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| now refers to `obj`

      console.log( this[ key ] );

    }, obj ); // <-- последнји аргумент је `thisArg`

    // Исписује...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` се може користити са `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Разно</a>

    Ова секција ће служити да илуструје идеје и концепте које не треба сматрати за догмама, већ постоје да би подстакле преиспитивање пракси као покушај да се пронађе бољи начин извршавања уобичајених JavaScript програмерских задатака.

    A. коришћење `switch`-а треба избегавати, модерне методе праћења ће ставити на црну листу функције са switch изразима

    Изгледа да постоје драстична побољшања у извршавању `switch` израза у последњим издањима Firefox и Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module

    Приметна побољшања се могу уочити такође и овде:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Пример switch израза

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // подразумевана вредност
        break;
    }

    // 7.A.1.2
    // Бољи пример би било коришћење објекта или чак модула:

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
    // Ако `foo` је особина `switchObj` или `switchModule`, извршите као метод...

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

    // Ако познајете и верујете вредности `foo`, можете изоставити и OR проверу
    // leaving only the execution:

    switchObj[ foo ]( args );

    switchModule[ foo ]( args );


    // Овај шаблон промовише и поновно коришћење кода.

    ```

    B. Рано враћање вредности функција промовише читљивост кода са мањом разликом у перформансама кода

    ```javascript

    // 7.B.1.1
    // Лоше:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Добро:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Native & Host Објекти</a>

    Основни принцип овде је:

    ### Не правите глупости и све ће бити у реду.

    Да би утврдили овај концепт, молим вас погледајте следећу презентацију:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Коментари</a>

  * Једна линија изнад кода који је тема
  * Више линија је добро
  * Коментари на крају реда су забрањени!
  * JSDoc стил је добар, али захтева значајну инвестицију у времену


10. <a name="language">Код у једном језику</a>

    Програми би требало бити писани у једном језику, без обзира који је то језик, диктирано од стране особе или особа које одржавају код.

## Додатци

### Зарез Први.

Сваки пројекат који цитира овај документ као свој основни стил неће прихватити "прво зарез" форматирање, осим ако није експлицитно наглашено од стране аутора пројекта.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
