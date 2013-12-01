# Принципи за писане на систематичен, идиоматичен JavaScript

## Това е развиващ се документ и всички идеи за развиване на кода са са винаги добре дошли. Може да сътрудничите: fork, clone, branch, commit, push, pull request.

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
* Borislav Banchev [github](https://github.com/borislavvv)


 
## Целият код в една база данни трябва да изглежда всякаш един човек го е писал, без значение колко хора са помагали.
  
### Следващият списък подчертава практиките, които авторът на оригиналния документ използва; всички допълвания към документа трябва да ползват тези насоки.

### Това са само насоки, ако се наложи да се ползват други правила, това е въпрос на личен избор.
  
### "Спорове около стила са безсмислени. Трябва да има ръководство за стила и ти трябва да го следваш."
>_Ребека_ _Мърфи_

&nbsp;

> ### "Част от това да бъдеш добър ръководител на проект е да разбереш, че писането на код за себе си е  Лоша Идея™. Ако хиляди хора ти ползват кода, то пиши код с максимална ясното, не по лични предпочитания как да бъдеш умен в твоите си разбирания."
>_Идан_ _Газит_


## Преводи

* [Немски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/de_DE)
* [Френски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Испански](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Португалски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Корейски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [Японски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [Италиански](https://github.com/rwldrn/idiomatic.js/tree/master/translations/it_IT)
* [Руски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)
* [Румънски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ro_RO)
* [简体中文](https://github.com/rwldrn/idiomatic.js/tree/master/translations/zh_CN)
* [Сръбски](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ср_СР)
* [Сръбски - латиница](https://github.com/rwldrn/idiomatic.js/tree/master/translations/sr_SR)
* [Български](https://github.com/rwldrn/idiomatic.js/tree/master/translations/bg_BG)


## Важни, неидиоматични неща:

### Инструменти за качествен код, ресурски & връзки

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

## Най-важното: умната 

### [Анотация ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript езикови спецификации, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

Следните неща да се вземат в предвид 1) непълно, и 2) *Изисква препрочитане*. Не винаги съм съгласен със стила на авторите по-надолу, но едно е сигурно: Те са последателни, нещо повече - те са авторитети в езика.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)




### Билд & Деплой процес

Проектите винаги трябва да се опитват някакви правила по които да могат да бъдат проверени, тествани и компресирани в подготовката за продукционна версия. За тази задача, [grunt](https://github.com/gruntjs/grunt) от Ben Alman е безценен проект и официално е заменило "kits/" директоритите от това хранилище.




### Тестов механизъм

Проектите _трябва_ да включват някаква форма на юнит тетване, справки, изпъление или функционално тестване. 'Use case' демонстрациите НЕ СА "тестове". Това е списък със заверени тестващи прибори.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)

## Съдържание

 * [Празни полета](#whitespace)
 * [Красив синтаксис](#spacing)
 * [Проверка на типове(Бладарение на jQuery Core стилови насоки)](#type)
 * [Условни уравнения](#cond)
 * [Практически стил](#practical)
 * [Именуване](#naming)
 * [Смесено](#misc)
 * [Обекти](#native)
 * [Коментари](#comments)
 * [Едноезиков код](#language)



------------------------------------------------


## Преговор

Следващата секция очертава _разумни_ стилови насоки за модерно JavaScript писане без намерение да е норма. Най-важното си остава **закона за последователно стилизиран код**. Какъвто и стил да изберете за проектът ви, трябва да е закон. Може да давате връзка към този документ за стил на вашия проект.


## Манифест за идиоматичен стил


1. <a name="whitespace">Празни полета</a>
  - Никога не смесвайте табулации и празни полета.
  - Когато започвате проект, преди да пишете код, изберете празно поле или табулация, и зачитайте този **закон**.
  - За четимост, се предлага да се настрой редактора на 2 празни полета &mdash; това значи 2 празни полета да се равняват на 1 табулация.
  - Ако редакторът ви го поддържа, работете винаги със "покажи невидимите" пуснато. Ползата от тази практика е :
      - Принудително постоянство
      - Премахване на последно празно пространство от края на реда

2. <a name="spacing">Красив синтаксис</a>

    A. Големи и малки скоби, нов ред

    ```javascript

    // if/else/for/while/try винаги имат празни пространства, и се пишат на няколко реда
    // това насърчава четимостта

    // 2.A.1.1
    // Пример за трудно четим синтаксис

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Ползвайте празно пространство за повишаване на четливостта

    if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Даже по-добре:

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


    B. Придаване на стойност, декларации, функции ( наименовани, изрази, конструктури )

    ```javascript

    // 2.B.1.1
    // Променливи
    var foo = "bar",
      num = 1,
      undef;

    // Литерали:
    var array = [],
      object = {};


    // 2.B.1.2
    // Използвайте едно `var` на скоуп (функция) насърчава четимостта
    // и пази декларациите от бъркотии (по-малко писане също)

    // зле
    var foo = "";
    var bar = "";
    var qux;

    // добре
    var foo = "",
      bar = "",
      quux;

    // или..
    var // Comment on these
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var декларациите винаги трябва да са в началото на скоупа (функцията).
    // Същото е и за константите от ECMAScript 6.

    // зле
    function foo() {

      // some statements here

      var bar = "",
        qux;
    }

    // добре
    function foo() {
      var bar = "",
        qux;

      // all statements after the variables declarations.
    }
    ```

    ```javascript

    // 2.B.2.1
    // Деклариране на именовани функции
    function foo( arg1, argN ) {

    }

    // Извикване
    foo( arg1, argN );


    // 2.B.2.2
	// Именовани функции декларация
    function square( number ) {
      return number * number;
    }

    // Ползване
    square( 10 );

    // Наистина скалъпен начин за стойност
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // callback statements
    });


    // 2.B.2.3
    // Изрази функции
    var square = function( number ) {
      // Return something valuable and relevant
      return number * number;
    };

    // Функции изрази с имена
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number - 1 );
    };


    // 2.B.2.4
    // Конструктури
    function FooBar( options ) {

      this.options = options;
    }

    // Извикване
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Изключения, леко отклонение

    ```javascript

    // 2.C.1.1
    // Функции с колбек
    foo(function() {
         
    });

    // Функцията приема масив, без празни полета
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Функция, приемаща обект, няма празно поле
    foo({
      a: "alpha",
      b: "beta"
    });

    // Аргумент един низ, няма разно поле
    foo("bar");

    // Вътрешни скоби, няма празно поле
    if ( !("foo" in obj) ) {

    }

    ```

    D. Последователността винаги е по-добре

    Във секции 2.A-2.C, празните полета се препоръчват с цел последователност при писането на код.
    Важно е да се разбере, че трябва да се избере един модел на писане в целия проект.

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

    E. Кавички

    Няма значение дали се избира единични или двойни кавички, няма разлика при интерпретирането им. What **НАЙ-ВАЖНОТО** е да е консистентен кода. **Не смесвайте използването на кавички в проекта. Изберете един стил и се придържайте към него.**
 
    F. Край на редове и празни редове

    Празните полета могат много да затруднят четимостта когато са наслагани хаотично. Добре да се премахват в края на реда.

3. <a name="type">Проверяване на типове (Благодарности на jQuery Core Style Guidelines)</a>

    A. Реални типове

    Низ:

        typeof variable === "string"

    Число:

        typeof variable === "number"

    Булева стойност:

        typeof variable === "boolean"

    Обект:

        typeof variable === "object"

    Масив:

        Array.isArray( arrayLikeObject )
        (wherever possible)

    Разклонение:

        elem.nodeType === 1

    null:

        variable === null

    null или undefined:

        variable == null

    undefined:

      Глобални променливи:

        typeof variable === "undefined"

      Локални променливи:

        variable === undefined

      Полета:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Прехвърляне към тип

    Помислете върху последиците от следното...

    От този HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` е деклариран със стойност `0` и типът му е `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Някъде по-надолу в кода трябва да се промени `foo`
    // с нова стойност, извлечена от input елемента

    foo = document.getElementById("foo-input").value;

    // Ако се тества `typeof foo` резултатът ще бъде `string`
    // Това значи, че ако има логика, която тества `foo` така:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` няма да бъде извикана дори `foo` като има стойност "1"


    // 3.B.1.2

    // Това може да се реши като се използва унарните + или - операции за прехвърляне на тип:

    foo = +document.getElementById("foo-input").value;
    //    ^ унарният оператор ще конвертира дясната страна към число

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` will be called
    // `importantTask()` ще се извика
    ```
 
	Ето някои общи случаи с използване на принудително преобразуване на типове:


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

    // Горното може да се разглежда като ненужно хитро
    // Предпочитайте очевидния подход за сравняване на върната стойност с
    // indexOf, like:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // същото като...

    ~~num;

    num >> 0;

    num >>> 0;

    // All result in 2


    // Имайте впредвид, че отрицателните числа ще се разглеждат различно...

    var neg = -2.5;

    parseInt( neg, 10 );

    // е същото като...

    ~~neg;

    neg >> 0;

    // Резултатът е -2
    // Въпреки това...

    neg >>> 0;

    // Резултатът е 4294967294




    ```



4. <a name="cond">Условни проверки</a>

    ```javascript

    // 4.1.1
    // Когато проверявате дали масив има дължина,
    // вместо това:
    if ( array.length > 0 ) ...

    // ...проверявайте за вярност така:
    if ( array.length ) ...


    // 4.1.2
    // Когато проверявате дали масив е празен,
    // вместо това:
    if ( array.length === 0 ) ...

    // ...проверявайте така:
    if ( !array.length ) ...


    // 4.1.3
    // Когато проверявате низ дали е празен
    // вместо това:
    if ( string !== "" ) ...

    // ...проверявайте така
    if ( string ) ...


    // 4.1.4
    // Когато проверявате дали низ _е_ празен,
    // вместо това:
    if ( string === "" ) ...

    // ...проверявайте така:
    if ( !string ) ...


    // 4.1.5
    // Когато проверявате дали референция е true
    // вместо това:
    if ( foo === true ) ...

    // ...ползвайте вградените възможности
    if ( foo ) ...


    // 4.1.6
    // Когато се проверява дали референция е празна,
    // вместо това:
    if ( foo === false ) ...

    // ...ползвайте обратната стойност на правилният вариант
    if ( !foo ) ...

    // ...Внимавайте, това също може да съвпада с : 0, "", null, undefined, NaN
    // Ако _ТРЯБВА_ да се тества за false, ползвайте
    if ( foo === false ) ...


    // 4.1.7
    // Когато проверявате дали референция може да е null или undefined, но НЕ false, "" или 0,
    // вместо това: 
    if ( foo === null || foo === undefined ) ...

    // ...ползвайте == типово прехвърляне така:
    if ( foo == null ) ...

    // Запомнете, ползвайки == ще приравни `null` към `null` и `undefined`
    // но не и към `false`, "" или 0
    null == undefined

    ```
    Винаги проверявайте за най-точни резултати, горното са насоки, не догма

    ```javascript

    // 4.2.1
    // Прехвърляне на типове и проверка бележки

    // Предпочитайте `===` над `==` (освен ако случая не изисква свободна типова оценка)

    // === не прехвърля тип, което значи това:

    "1" === 1;
    // false

    // == прехвърля тип, което значи:

    "1" == 1;
    // true


    // 4.2.2
    // Булеви стойности, вярно, грешно

    // Булеви стойности:
    true, false

    // Вярно:
    "foo", 1

    // Грешно:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Практически стил</a>

    ```javascript

    // 5.1.1
    // Практически модул

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Някаква булева стойност
          bool: true,
          // Някакъв низ
          string: "a string",
          // Масив
          array: [ 1, 2, 3, 4 ],
          // Обект
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // стойността на `data`
            return data;
          },
          setData: function( value ) {
            // задай стойност `data` и я върни
            return ( data = value );
          }
        };
      })();

      // Друг код

      // Разкрийте модула на глобалния обект
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Практически конструктор

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


      // За извикване на конструктор без `new`, може така:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };

      // открий конструктора на глобалния обект
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Именоване</a>



    A. Ти не си човек-компилатор, не се и опитвай да бъдеш.

    Пример за лош код:

    ```javascript

    // 6.A.1.1
    // Неправилни имена

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

	Всеки може да е писал такъв код. Дано това да спре от днес.

    Ето някакъв код с по-добри имена:

    ```javascript

    // 6.A.2.1
    // Пример за код с подобрени имена

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

    Някои допълнителни показатели за имена:

    ```javascript

    // 6.A.3.1
    // Именоване на низ

    `dog` is a string


    // 6.A.3.2
    // Именоване на масив

    `dogs` is an array of `dog` strings


    // 6.A.3.3
    // Функции, обекти, инстанции, други

    camelCase; function and var declarations


    // 6.A.3.4
    // Конструктори, прототипи, други

    PascalCase; constructor function


    // 6.A.3.5
    // Регулярни изрази

    rDesc = //;


    // 6.A.3.6
    // От Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Лицата на `this`

	Предпочитайте `.bind( this )` пред `call` and `apply` или еквивалент, когато е възможно разбира се. 

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

    Ако няма как, функционални еквиваленти на `.bind` съществуват в много модерни библиотеки.


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

    Като последно средство, създавайте псевдоним на `this` използвайки `self` като идентификатор. Това не е от най-добрите практики и са възможни много грешки.

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


    C. Използвайте `thisArg`

    Няколко прототипа на методи в ES 5.1 идват с включено `thisArg`, което трябва да се използва, когато е възможно.

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| се отнася към `obj`

      console.log( this[ key ] );

    }, obj ); // <-- последният arg е `thisArg`
    

    // Принтиране...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` може да се използва с `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Смесени</a>

    Тази секция цели да илюстрира идеи и концепции, които не са догма, но за сметка на това поущряват практики с цел намиране на по-добри начини за съвместни програмни JavaScript задачи.

    A. Използването на `switch` може да се избегне.
	
    Въпреки, че има драстично подобряване на изпълнението на  `switch` в последните версии на Firefox и Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module
 
    Забележителни промени могат да се забележат и тук:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Примерен switch

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
    // Алтернативен подход, предлагащ преизползване 
    // използва обект за запазване на "cases" и функция за делегат

    var cases, delegator;

    // Example returns for illustration only.
    cases = {
      alpha: function() {
        // statements
        // a return
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // statements
        // a return
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // statements
        // a return
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // Transform arguments list into an array
      args = [].slice.call( arguments );

      // shift the case key from the arguments
      key = args.shift();

      // Assign the default case handler
      delegate = cases._default;

      // Derive the method to delegate operation to
      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      // The scope arg could be set to something specific,
      // in this case, |null| will suffice
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Put the API in 7.A.1.2 to work:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Разбира се `case` може да бъде базиран 
    // на някои случайни условия.

    var caseKey, someUserInput;

    // От input?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // или...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // и тогава...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // разбира се...

    delegator();
    // [ "Default", 0 ]


    ```

    B. Ранните връщания на метод повишават четимостта с пренебрежими разлики в изпълнението

    ```javascript

    // 7.B.1.1
    // зле:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // добре:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Обекти</a>

    Най-важният принцип тук е:

    ### Не правете простотии и всичко ще е наред.

    За подсилване на концепцията, моля гледайте следната презентация:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Коментари</a>

    #### Едноредови коментари над кода, към който се отнасят
    #### Многоредовите коментари са добри
    #### Забранени са коментари в края на реда!
    #### JSDoc стила е добър, но изисква значителна инвестиция на време


10. <a name="language">Едноезиков код</a>

    Програмите трябва да са написани на един език, който и да било, както се диктува от поддържащите разработчици.

## Индекс

### Първо запетая.

Всеки проект, който цитира този документ като основен стил, не приема запетая като начало на форматиране, освен ако не е казано изрично от автора на проекта.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
