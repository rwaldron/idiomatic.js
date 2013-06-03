<<<<<<< HEAD
# Принципи написання консистентного, ідіоматичного коду на JavaScript ***

##Це "живий" документ і нові ідеї по покращенню коду завжди заохочуються. Візьміть участь: fork, clone, branch, commit, push, pull request. ***

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


## Код в будь-якому проекті повинен виглядати так, ніби його писала одна людина, не залежно від того, скільки людей працювало над ним. ***

### Все наступне є списком норм, якими я керуюсь при написанні коду, автором якого я є; будь-який вклад в проекти, які я створив, повинен відповідати даним нормам. ***

### Я не маю наміру нав'язувати свої вподобання в стилі іншим; власний стиль написання коду гідний поваги.

> ### "Суперечки з приводу стилів бузглузді. У вас повинен бути посібник по стилю і ви повинні слідувати йому."
>_Rebecca_ _Murphey_

&nbsp;

> ### "Щоб бути хорошим керівником проекту, потрібно розуміти, що писати код для себе - це погана ідея. Якщо ваш код використовують тисячі людей, то пишіть свій код максимально зрозуміло, а не на власний розсуд."
>_Idan_ _Gazit_

## Переклади

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

## Важливе, не ідіоматичне

### Якість коду: онлайн сервіси, ресурси, посилання

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) для [Sonar](http://www.sonarsource.org/)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Використання інструментів по покращенню коду від Антона Ковалева](http://anton.kovalyov.net/slides/gothamjs/)

### Ставай розумнішим

### [ECMAScript 5.1 з коментарями](http://es5.github.com/)
### [Специфікації мови ECMAScript, видання 5.1](http://ecma-international.org/ecma-262/5.1/)

Наступне потрібо вважати 1) незакінченим, и 2) *ОБОВ'ЯЗКОВИМ ДО ПРОЧИТАННЯ*. Я не завжди згідний з стилями даних авторів, але одне є точно: вони консистентні. Крім того, це канони для мови.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)

### Компіляція і розгортання

Проекти поивнні старатись включати в себе певний інструментарій для контролю стилю, тестування і стиснення коду. Для цього ви можете використовувати [grunt](https://github.com/cowboy/grunt) від Ben Alman.



### Тестування

Проекти повинні мати юніт, еталонні, "по реалізації" або функціональні тести. Демонстрація сценаріїв НЕ ЯВЛЯЄТЬСЯ тестом. Нижче наведений списоу фреймворків для тестування, ні один із них не отримав більшого схвалення, ніж інший.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)

## Зміст

 * [Пробіли, табуляція, порожні рядки](#whitespace)
 * [Гарний синтаксис](#spacing)
 * [Перевірка типів (Інструкція по стилю від команди jQuery Core)](#type)
 * [Умовні обчислення](#cond)
 * [Стиль на практиці](#practical)
 * [Найменування](#naming)
 * [Різне](#misc)
 * ["Рідні" і "чужі" об'єкти](#native)
 * [Коментарі](#comments)
 * [Код однієї мови](#language)


------------------------------------------------


## Передмова

Наступні секції описують прийнятну інструкцію по стилю для сучасної розробки на JavaScript і не являються обов’язковими.Найважливіше - це **закон написання консистентного коду**. Який стиль ви б не вибрали для вашого проекту, він повинен вважатись законом. Ссилайтесь на даний документ як на заяву про відношення вашого проекту до консистентності коду, читабельності і зручності супроводу.



## Маніфест Ідіоматичного Стилю

1. <a name="whitespace">Пробіли, табуляція і порожні рядки</a>
  - Ніколи не змішуйте пробіли і знаки табуляції.
  - Перед тим як почати проект, перед тим, як писати код, виберіть між "м’якими" відступами(пробіли) або знаками табуляції і вважайте це **законом**.
  - Для кращої читабельності коду, я завжди рекомендую виставити розмір відступу в вашому редакторі на 2 символи &mdash - це або два пробіли, або два пробіли які являються знаком табуляції.
  - Завжди працюйте з увімкнутою опцією "показати приховане", якщо ваш редактор підтримує її. Переваги:
        - вимушена послідовність
        - видалення пробілу в кінці рядка
        - видалення порожніх рядків
        - читабельні коміти та діффи

2. <a name="spacing">Гарний Синтаксис</a>

    A. Дужки, Фігурні Дужки, Перенос Рядка

    ```javascript

    // if/else/for/while/try завжди розділяються пробілом,
    // це покращує читабельність

    // 2.A.1.1
    // // Приклад нерозбірливого синтаксису

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someInterativeFn();

    // 2.A.1.1
    // Використовуйте пробіли для того, щоб покращити читабельність

    if ( condition ) {
      // вирази
    }

    while ( condition ) {
      // вирази
    }

    for ( var i = 0; i < 100; i++ ) {
      // вирази
    }

    // Ще краще:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // вирази
    }

    // Або...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // вирази
    }

    var prop;

    for ( prop in object ) {
      // вирази
    }


    if ( true ) {
      // вирази
    } else {
      // вирази
    }
    ```


    B. Присвоєння, Оголошення, Функції(Іменовані, Функції-Вирази, Функціх-Конструктори)

    ```javascript

    // 2.B.1.1
    // Змінні
    var foo = "bar",
      num = 1,
      undef;

    // Оголошення літералів:
    var array = [],
      object = {};


    // 2.B.1.2
    // Використання тільки одного `var` на одну область видимості покращує читабельність

    // і впорядковує блок оголошення змінних(також зберігає вам декілька символів)

    // Неправильно
    var foo = "";
    var bar = "";
    var qux;

    // Правильно
    var foo = "",
      bar = "",
      quux;

    // або...
    var // коментар для змінних
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // Оператор var завжди повинен бути на початку області видимості(функції)
    // Те саме вірно для констант і оператора let із ECMAScript 6.

    // Неправильно
    function foo() {

      // вирази

      var bar = "",
        qux;
    }

    // Правильно
    function foo() {
      var bar = "",
        qux;

      // всі вирази після оголошеня змінних.
    }
    ```

    ```javascript

    // 2.B.2.1
    // Оголошення Іменованих Функцій
    function foo( arg1, argN ) {

    }

    // Використання
    foo( arg1, argN );


    // 2.B.2.2
    // Оголошення Іменованих Функцій
    function square( number ) {
      return number * number;
    }

    // Використання
    square( 10 );

    // Дуже надуманий стиль передачі параметрів
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // зворотній виклик
    });

    // 2.B.2.3
    // Функція-Вираз
    var square = function( number ) {
      // повернути щось важливе і цінне
      return number * number;
    };

    // Функція-Вираз з Ідентифікатором
    // Таке оголошення гарне тим, що функція може викликати сама себе
    // і її ім’я буде видно в стеку викликів функцій:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };

    // 2.B.2.4
    // Оголошення Конструктора
    function FooBar( options ) {

      this.options = options;
    }

    // Використання
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Виключення, Незначні відхилення від правил

    ```javascript

    // 2.C.1.1
    // Функції з зворотнім викликом
    foo(function() {
      // Зауважте, що пробілу між "function" і першою дужкою нема
    });

    // Функція, що приймає масив як параметр, теж без пробілу
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Функція, що приймає об’єкт як параметр, теж без пробілу
    foo({
      a: "alpha",
      b: "beta"
    });

    // Один рядок - без пробілу
    foo("bar");

    // Внутрішні дужки теж без пробілу
    if ( !("foo" in obj) ) {

    }

    ```

    D. Консистентність Завжди Виграє

    В секції 2.A-2.C, правила використання пробілу і знака табуляції встановлені з простою цілюю: консистентність.
    Важливо зазначити, що переваги в форматуванні, такі як "внутрішній пробіл", повинні вважатись опціональними, але в вашому проекті повинен використовуватись тільки один стиль форматування.

    ```javascript

    // 2.D.1.1

    if (condition) {
      // вирази
    }

    while (condition) {
      // вирази
    }

    for (var i = 0; i < 100; i++) {
      // вирази
    }

    if (true) {
      // вирази
    } else {
      // вирази
    }

    ```

    E. Лапки

    Абсолютно не важливо, які лапки ви використовуєте(одинарні чи подвійні), немає різниці в тому, як JavaScript обробляє їх. Що **справді важливо**, так це зберігати консистентність. **Ніколи не плутайте лапки в вашому проекті. Оберіть один стиль і притримуйтель його.**

    F. Кінець рядка і порожні рядки

    Пробіли, знаки табуляції можуть зіпсувати діффи і зробити чейнджсети непридатними для читання. Подумайте про те, щоб забирати пробіли в кінці рядка і породні рядки автоматично перед комітом.

3. <a name="type">Перевірка типів (Інструкція по стилю від команди jQuery Core)</a>

    A. Типи

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
        (де можливо)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null or undefined:

        variable == null

    undefined:

      Глобальні змінні:

        typeof variable === "undefined"

      Локальні змінні:

        variable === undefined

      Властивості(properties):

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Неявне зведення типів

    Представте результат наступного...

    Нехай дано HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```js

    // 3.B.1.1

    // `foo`  була оголошена, їй був присвоєний `0` и її тип `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Далі в коді вам потрібно оновити значення `foo`
    // новим значенням із input елемента

    foo = document.getElementById("foo-input").value;

    // Якщо б ви перевірили тип змінної зараз `typeof foo`, то отрималм б `string`
    // Це означає, що якщо б ви тестували `foo` ось так:

    if ( foo === 1 ) {

      importantTask();

    }

    // то `importantTask()` не була б викликана, навіть якщо б значення `foo` було рівне "1"


    // 3.B.1.2

    // Ви можете уникнути помилок, використовуючи зведення типів за допомогою унарних операторів "+" і "-":

    foo = +document.getElementById("foo-input").value;
    //унарний оператор "+" зведе праву частину виразу до типу `number`

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` буде викликана
    ```

    Ось декілька простих прикладів зведення типів:


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

    // Зауважте, що вищесказане можна вважати "занадто розумним"
    // Краще зробити так:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // те саме що

    ~~num;

    num >> 0;

    num >>> 0;

    // У всіх випадках результат рівний 2


    // Пам’ятайте, що від’ємні числа будуть опрацьовані іншим чином...

    var neg = -2.5;

    parseInt( neg, 10 );

    // те саме що...

    ~~neg;

    neg >> 0;

    // У всіх випадках результат рівний -2
    // Хоча...

    neg >>> 0;

    // покаже 4294967294




    ```



4. <a name="cond">Умовні обчислення/Опрацювання</a>

    ```javascript

    // 4.1.1
    // Перевіряючи, чи у масиву є довжина
    // замість:
    if ( array.length > 0 ) ...

    // перевіряйте значення виразу:
    if ( array.length ) ...


    // 4.1.2
    // Перевіряючи, чи масив не порожній:
    // замість:
    if ( array.length === 0 ) ...

    // перевіряйте значення виразу:
    if ( !array.length ) ...


    // 4.1.3
    // Перевіряючи, чи рядок не порожній:
    // замість:
    if ( string !== "" ) ...

    // перевіряйте значення виразу:
    if ( string ) ...


    // 4.1.4
    // Перевіряючи, чи рядок порожній:
    // замість:
    if ( string === "" ) ...

    // перевіряйте значення виразу:
    if ( !string ) ...


    // 4.1.5
    // Перевіряючи, чи змінна істинна
    // замість:
    if ( foo === true ) ...

    // перевіряйте наступним чином:
    if ( foo ) ...


    // 4.1.6
    // Перевіряючи, чи змінна хибна
    // замість:
    if ( foo === false ) ...

    // перевіряйте, використовуючи заперечення:
    if ( !foo ) ...

    // ...Будьте уважні, тому що вираз справедливий і для: 0, "", null, undefined, NaN
    // Для перевірки завідомо хибних виразів, використовуйте:
    if ( foo === false ) ...


    // 4.1.7
    // Перевіряючи, чи змінна null або undefined, але не хибна, "" або 0, 
    // замість:
    if ( foo === null || foo === undefined ) ...

    // ... скористайтеся оператором ==:
    if ( foo == null ) ...

    // Пам’ятайте, що за допомогою оператора == з `null` спрацює для ОБОХ `null` і `undefined`
    // але не для `false`, "" або 0
    null == undefined

    ```
    Завжди оцінюйте найкращий і найточніший результат - вище наведено інструкцію, а не догму.

    ```javascript

    // 4.2.1
    // Зведення типів і оцінка виразів

    // Віддавайте перевагу `===`, а не `==` (тільки якщо конкретний випадок не потребує слабо типізованої оцінки)

    // === не зводить типи примусово, тобто:

    "1" === 1;
    // false

    // == зводить типи примусово, тобто:

    "1" == 1;
    // true


    // 4.2.2
    // Логічні вирази, Істинні і Хибні

    // Логічні вирази:
    true, false

    // Істинні:
    "foo", 1

    // Хибні:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Стиль на практиці</a>

    ```javascript

    // 5.1.1
    // Модуль

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Логічна властивість
          bool: true,
          // Властивість типу рядок
          string: "a string",
          // Властивість - масив
          array: [ 1, 2, 3, 4 ],
          // Властивість - об’єкт
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // отримати поточне значення змінної `data`
            return data;
          },
          setData: function( value ) {
            // присвоїти значення змінної `data` і повернути його
            return ( data = value );
          }
        };
      })();

      // Інші оголошення

      // робимо наш модуль глобальним
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Конструктор

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


      // Щоб викликати конструктор без використання оператора `new`, можна оголосити конструктор так:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // робимо наш конструктор глобальним
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Найменування</a>


    A. Ви не компілятор і не компрессор, так що не старайтесь бути одним із них.

    Весь наступний код являється прикладом поганого найменування змінних:

    ```javascript

    // 6.A.1.1
    // Приклад коду з "бідними на описання" іменами змінних

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Якщо ви пишете такий код, то я сподіваюсь що ви перестанете робити це сьогодні.

    Ось шматок коду з такою ж логікою, але з кращим найменуванням змінних(і читабельною структурою):

    ```javascript

    // 6.A.2.1
    // Приклад коду з покращеним найменуванням змінних

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

    Ось ще декілька порад по найменуванню змінних:

    ```javascript

    // 6.A.3.1
    // Рядки

    `dog`


    // 6.A.3.2
    // Масиви

    `dogs`


    // 6.A.3.3
    // Найменування функцій, об’єктів, etc

    camelCase;


    // 6.A.3.4
    // Найменування конструкторів, прототипів, etc.

    PascalCase;


    // 6.A.3.5
    // Найменування регулярних виразів

    rDesc = //;


    // 6.A.3.6
    // Із рекомендації по стилю Google Closure Library

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. "Сторони" `this`

    Окрім гарно відомого застосування `call` і `apply`, старайтесь використовувати `.bind( this )` або його функціональний еквівалент для оголошення `Зв’язаної Функції` для подальшого виклику. Створення аліаса являється останньою мірою, якщо всі інші рішеня не підходять.

    ```

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // Відкриєм асинхронний потік,
      // потсійно викликаючий передану функцію
      stream.read( opts.path, function( data ) {

        // Оновим поточне значення на останнє, отримане з потоку
        this.value = data;

      }.bind(this) );

      // Обмежим частоту подій, що надходять від Device
      setInterval(function() {

        // Відправим подію
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    ```

    Функціональні еквіваленти `.bind` існують в багатьох нових бібліотеках JavaScript.


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

    Створіть аліас для `this`, використовуючи `self` (як остання міра). Таке рішення схильне до помилок і варто уникати його.

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


    C. Використання `thisArg`

    В деяких із вбудованих методів в ES 5.1 є спеціальний аргумент `thisArg`,
яких варто використовувати всюди, де це можливо.

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| вказує на `obj`

      console.log( this[ key ] );

    }, obj ); // <-- останній аргумент це `thisArg`

    // Виведе...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` може бути використаний з `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Різне</a>

    Даний розділ описує ідеї і концепції, які не повинні розглядатись як догма. Він існує для того, щоб посіяти сумніви в загальноприйнятих методах в спробах знайти більш ефективні пособи вирішення загальних задач програмування на JavaScript.

    A. Використання `switch` варто уникати, тому що сучасний метод відлагодження буде приховувати виклики функцій, які використовують `switch`.

    В останніх версіях браузерів Firefox і Chrome, здається, є вагомі покращення в виконанні функцій, які використовують `switch`.
    http://jsperf.com/switch-vs-object-literal-vs-module

    На вагомі покращення також можна поглянути тут:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Приклад оператора switch

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // якесь значення по замовчуванню
        break;
    }

    // 7.A.1.2
    // Кращим підходом було б використати об’єкт або навіть модуль:

    var switchObj = {
      alpha: function() {
        // вирази
        // повертаєм результат
      },
      beta: function() {
        // вирази
        // повертаєм результат
      },
      _default: function() {
        // вирази
        // повертаєм результат
      }
    };

    var switchModule = (function () {
      return {
        alpha: function() {
          // вирази
          // повертаєм результат
        },
        beta: function() {
          // вирази
          // повертаєм результат
        },
        _default: function() {
          // вирази
          // повертаєм результат
        }
      };
    })();


    // 7.A.1.3
    // Якщо `foo` це властивість `switchObj` або `switchModule`, то виконати метод...

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

    // Якщо ви знаєте можливі значення `foo` і довіряєту його джерелу, можете опустити умови АБО
    // залишивши тільки виконання

    switchObj[ foo ]( args );

    switchModule[ foo ]( args );


    // Дана можель підтримує повторне використання коду

    ```

    B. "Ранні повернення" сприяють читабельності коду з незначними відмінностями в продуктивності

    ```javascript

    // 7.B.1.1
    // Неправильно:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Правильно:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">"Рідні" і "чужі" об’єкти</a>

    Основне правило:

    ### Не робіть тупих речей, і все буде добре.

    Для кращого розуміння даної концепції, подивіться відео:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Коментарі</a>

  * Однорядкові коментарі на рядок вище коду
  * Коментарі в декілька рядків теж вітаються
  * Коментарі в кінці рядка заборонені!
  * Стиль JSDoc гарний, але в ньому потрібно довго розбиратись


10. <a name="language">Код однієї мови</a>

Програми повинні бути написані на одній мові (незалежно від мови), як потребують того люди, які супроводжують код.

## Додаток

### Перша Кома.

Будь-який проект, котрий посилається на даний документ в якості інструкції по стилю, не прийме форматування коду "першої коми", тільки якщо автор спеціально не вкаже цього.
