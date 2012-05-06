# Принципы написания консистентного, идиоматического Джаваскрипта ***

## Это "живой" документ и новые идеи по улучшению когда всегда приветствуются.
 Участники: fork, clone, branch, commit, push, pull request. ***

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idangazit)
* Leo Balter [@leobalter](http://twitter.com/leobalter), [github](https://github.com/leobalter)
* Breno Oliveira [@garu_rj](http://twitter.com/garu_rj), [github](https://github.com/garu)
* Leo Beto Souza [@leobetosouza](http://twitter.com/leobetosouza), [github](https://github.com/leobetosouza)
* Ryuichi Okumura [@okuryu](http://twitter.com/okuryu), [github](https://github.com/okuryu)
* EngForDev [engfordev](http://www.opentutorials.org/course/167/1363) - Hwan Min Hong / MinTaek Kwon [@leoinsight](http://twitter.com/leoinsight) / Tw Shim [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino) / Nassol Kim [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol) / Juntai Park [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun) / Minkyu Shim / Gangmin Won / Justin Yoo [@justinchronicle](http://twitter.com/justinchronicle) / Daeyup Lee

## Весь код должен выглядеть так, как будто один человек это писал, неважно как много людей работали над ним. ***

### Последующее является списоком норм, которыми я руководствуюсь при написании кода, когда я являюсь первым автором; вклад в проекты, которые я создал, должен отвечать этим нормам. ***

### Я не намерен навязывать свои предпочтения в стиле другим людям; свой стиль написания кода достоен уважения.

> "Чтобы быть хорошим управляющим проекта, нужно понимать, что писать код для себя это Плохая Идея. Если тысячи людей используют твой код, то пишите свой код максимально понятно" - Идан Газит.

## Переводы

* [Французский](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Испанский](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Португальский - Бразильский](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Корейский](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [Японский](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [Русский](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)

## Важное, не идиоматическое

### Качество кода: отличные инструменты, ресурсы и ссылки

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

 [Использование инструментов по улучшению качества кода](http://anton.kovalyov.net/slides/gothamjs/)

### Становись умнее

[http://es5.github.com/](http://es5.github.com/)

Следующее должно считаться 1) незавершенным и 2) требующим чтения. Я не всегда согласен со стилями этих авторов, но одно точно: они консистентны. Более того, это каноны для языка.

  * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)

 ### Компиляция и Развертывание

 ***



 ### Test Facility

 Проекты должны иметь юнит, ссылочные, по реализации или функуциональные тесты. Демо use case не является тестом. Это список фреймворков для тестирования, ни один из которых ни получил большего одобрения, чем другие.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)

## Содержание

 * [Пробелы, табуляция и пустые строки](#whitespace)
 * [Красивый синтаксис](#spacing)
 * [Проверка типов (Вежливое руководство по стилю от jQuery Core](#type)
 * [Условное Вычисление/Обработка](#cond)
 * [Практичный стиль](#practical)
 * [Именование](#naming)
 * [Разное](#misc)
 * ["Родные" и "чужие" объекты](#native)
 * [Комментарии](#comments)
 * [Код одного языка](#language)


------------------------------------------------


## Предисловие

Следующие секции обрисовывают/показывают приемлимое руководство по стилю для современной разработки на языке Javascript и не являются предписанием. Самое важное - это закон написания консистентного кода. Какой бы стиль вы не выбрали для вашего проекта, он должен считаться законом. Сошлитесь на этот документ как заявление о приверженности вашего проекта к консистентности кода, читабельности и удобству сопровождения.




## Манифест Идиоматического Стиля

1. <a name="whitespace">Пробелы, табуляция и пустые строки</a>
  - Никогда не путайте пробел и знак табуляции.
  - Перед тем как начать проект, перед тем, как писать код, выберите между "тихими" отступами (пробелами) или настоящими знаками табуляции и считайте это **законом**.
  		- Для лучшей читаемости кода, я всегда рекомендую выставлять размер отступа в вашем редакторе на 2 символа&mdash это либо два пробела, либо два пробела, которые представляют собой знак табуляции.
  - Всегда работайте со включенной "показать скрытое" опцией, если ваш редактор поддерживает ее. Преимущества:
  		- принужденная последовательность
  		- удаление пробела в конце строки
  		- удаление пустых строк
  		- легко читаемые коммиты и диффы

2. <a name="spacing">Красивый Синтаксис</a> 
  	
  	A. Скобки, Фигурные Скобки, Переносы Строк

  	````javascript

  	// if/else/for/while/try всегда разделяются пробелом,
  	// это улучшает читабельность

  	// 2.A.1.1
  	// Пример неразборчивого синтаксиса

  	if(condition) doSomething();

  	while(condition) iterating++;

  	for(var i=0;i<100;i++) someInterativeFn();

  	// 2.A.1.1
  	// Используйте пробелы для того, чтобы улучшить читаемость

  	if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Even better:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // statements
    }

    // Or...

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


    B. Присваивание, Объявление, Функции (Именованные, Выражение, Конструктор)

    ```javascript

    // 2.B.1.1
    // Переменные
    var foo = "bar",
      num = 1,
      undef;

    // Обозначение/объявление литералов:
    var array = [],
    	object = {};


    // 2.B.1.2
    // Использование только одного `var` на одну область видимости улучшает читаемость
    // и упорядочивает блок объявления переменных (также сохраняет вам несколько нажатий клавиш)

    // Неправильно
    var foo = "";
    var bar = "";
    var qux;

    // Правильно
    var foo = "",
      bar = "",
      quux;

    // или...
    var // комментарий для переменных
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var операторы всегда должны быть в начале области видимости (функции).
    // Тоже самое верно для констант и let оператора из ECMAScript 6.

    // Неправильно
    function foo() {

      // выражения

      var bar = "",
        qux;
    }

    // Правильно
    function foo() {
      var bar = "",
        qux;

      // все выражения после объявления переменных.
    }
    ```

    ```javascript

    // 2.B.2.1
    // Обяъвление Именнованых Функций
    function foo( arg1, argN ) {

    }

    // Использование
    foo( arg1, argN );


    // 2.B.2.2
    // Обяъвление Именнованых Функций
    function square( number ) {
      return number * number;
    }

    // Использование
    square( 10 );

    // Очень надуманный стиль передачи параметров
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // обратный вызов
    });

    // 2.B.2.3
    // Функция-Выражение
    var square = function( number ) {
      // вернуть что-то ценное и важное
      return number * number;
    };

    // Функция-Выражение с Идентификатором
    // Такое объявление хорошо тем, что функция может вызвать сама себя
    // и ее имя будет видно в стеке вызовов функций:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };

    // 2.B.2.4
    // Объявление Конструктора
    function FooBar( options ) {

      this.options = options;
    }

    // Использование
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Исключения, Незначительные Отклонения от правил

    ```javascript

    // 2.C.1.1
    // Функции с обратным вызовом
    foo(function() {
      // Заметьте, что пробела между "function" и первой скобкой нет
    });

    // Функция, которая принимает массив как параметр, тоже без пробела
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Функция, которая принимает объект как параметр, тоже без пробела
    foo({
      a: "alpha",
      b: "beta"
    });

    // Одна строка, тоже без пробела
    foo("bar");

    // Внутренние скобки, тоже без пробела
    if ( !("foo" in obj) ) {

    }

    ```

    D. Последовательность Всегда Побеждает

    В секции 2.A-2.C, правила использования проблела и знака табуляции установлены с простой целью: согласованность. 
    Очень важно отметить, что предпочтения в форматировании, как "внутренний пробел", должны считаться необязательными/опциональными, но в вашем проекте должен использоваться только один стиль формартирования.

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

		E. Кавычки

		Абсолютно неважно какие кавычки вы используете (одинарные или двойные), нет никакой разницы в том, как JavaScript обрабатывает их. Что **действительно важно**, это сохранять согласованность. **Никогда не путайте кавычки в вашем проекте. Выберите один стиль и придерживайтесь его.**

    F. Конец строки и пустые строки

    Пробелы, знаки табуляции могут испортить диффы и сделать чэнджсеты непригодными для чтения. Подумайте о создании pre-commit hook, который убирает пробелы в конце строк и пустых строк автоматически.

3. <a name="type">Проверка типов (Вежливое руководство по стилю от jQuery Core)</a>    
		
		A. Типы

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
        (где возможно)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null or undefined:

        variable == null

    undefined:

      Глобальные переменные:

        typeof variable === "undefined"

      Локальные переменные:

        variable === undefined

      Свойства:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    JavaScript динамически типизированный язык. То, что может быть вашим "лучшим другом", может быть и вашим "злейшим" врагом. Всегда следуйте рекомендациям относительно `type`.

    B. Неявное приведение типов

    Представьте результаты следующего...

    Дан такой HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```js

    // 3.B.1.1

    // `foo` была объявлена, ей был присвоен `0` и ее тип `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Дальше в коде вам нужно обновить значение `foo`
    // новым значением из input элемента

    foo = document.getElementById("foo-input").value;

    // Если бы вы проверили тип переменной сейчас `typeof foo`, то получили бы `string`
    // Это значит, что если бы вы тестировали `foo` вот так:

    if ( foo === 1 ) {

      importantTask();

    }

    // то `importantTask()` никогда бы не была вызвана, даже если значение `foo` было бы "1"


    // 3.B.1.2

    // Вы можете избежать ошибок, используя приведение типов с помощью унарных операторов "+" и "-":

    foo = +document.getElementById("foo-input").value;
    //    ^ унарный операторв + приведет правую часть выражения к типу `number`

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` будет вызвана
    ```

    Вот несколько простых примеров приведения типов:


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

    // Заметьте, что выше изложенное можно считать "черезчур умным"
    // Лучше делать так:

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



4. <a name="cond">Условное Вычисление/Обработка</a>

		```javascript

    // 4.1.1
    // Проверяя, есть ли у массива длина,
    // вместо:
    if ( array.length > 0 ) ...

    // проверяйте значение выражения:
    if ( array.length ) ...


    // 4.1.2
    // Проверяя, пустой ли массив:
    // вместо:
    if ( array.length === 0 ) ...

    // проверяйте значение выражения:
    if ( !array.length ) ...


    // 4.1.3
    // Проверяя, не пуста ли строка:
    // вместо:
    if ( string !== "" ) ...

    // проверяйте значение выражения:
    if ( string ) ...


    // 4.1.4
    // Проверяя, пустая ли строка:
    // вместо:
    if ( string === "" ) ...

    // проверяйте ложно ли выражение:
    if ( !string ) ...


    // 4.1.5
    // Проверяя, является ли переменная истиной,
    // вместо:
    if ( foo === true ) ...

    // проверяйте следующим образом:
    if ( foo ) ...


    // 4.1.6
		// Проверяя, является ли переменная ложью,
    // вместо:    
    if ( foo === false ) ...

    // проверяйте, используя отрицание:
    if ( !foo ) ...

    // ...Будьте осторожны, потому что это выражение справедливо и для: 0, "", null, undefined, NaN
    // Для проверки значения заведомо ложных выражений, используйте:
    if ( foo === false ) ...


    // 4.1.7
    // Проверяя, если переменная null или undefined, но НЕ ложь, "" или 0,
    // вместо:
    if ( foo === null || foo === undefined ) ...

    // ...воспользуйтесь оператором ==:
    if ( foo == null ) ...

    // Помните, что сравнение с помощью оператора == с `null` сработает для ОБОИХ `null` и `undefined` 
    // но не для `false`, "" или 0
    null == undefined

    ```
    ВСЕГДА оценивайте самый лучший и точный результат - выше приведено руководство, а не догма. 

    ```javascript

    // 4.2.1
    // Приведение видов и оценка выражений

    // Отдавай предпочтение `===`, а не `==` (только если конкретный случай не требует не строго типизированной оценки)

    // === не приводит типы принудительно, т.е.:

    "1" === 1;
    // false

    // == приводит типы принудительно, т.е.:

    "1" == 1;
    // true


    // 4.2.2
    // Логические выражения, Истинные и Ложные

    // Логические выражения:
    true, false

    // Истинные:
    "foo", 1

    // Ложные:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Practical Style</a>
	
		```javascript

    // 5.1.1
    // Практический модуль

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Логическое свойство
          bool: true,
          // Свойство типа строка
          string: "a string",
          // Свойство - массив
          array: [ 1, 2, 3, 4 ],
          // Свойство - объект
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // получить текущее значение переменной `data`
            return data;
          },
          setData: function( value ) {
            // присвоить значение переменной `data` и вернуть его
            return ( data = value );
          }
        };
      })();

      // Другие объявления

      // делаем наш модуль глобальным 
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Практический конструктор

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


      // Чтобы вызывать конструктор без использования оператора `new`, можно объявить конструктор так:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // делаем наш конструктор глобальным 
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Именование</a>


    Вы не компилятор или компрессор, так что не пытайтесь быть одним из них. 

    Весь последующий код является примером плохового именования переменных:

    ```javascript

    // 6.1.1
    // Пример кода с "бедными на описание" именами переменных 

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Без сомнения, если вы написали такой код, я надеюсь, что это прекратится сегодня.

    Вот кусок кода с такой же логикой, но с лучшим именованием переменных (и читаемой структурой):

    ```javascript

    // 6.2.1
    // Пример кода с улучшенным именованием переменных

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

    Вот еще несколько советов для именования переменных:

    ```javascript

    // 6.3.1
    // Строки

    `dog` is a string


    // 6.3.2
    // Массивы

    `dogs` is an array of `dog` strings


    // 6.3.3
    // Именование функций, объектов, инстансов, etc

    camelCase; фунции и объявление переменных


    // 6.3.4
    // Именование конструкторов, прототипов, etc.

    PascalCase; конструкторы


    // 6.3.5
    // Именование регулярных выражений

    rDesc = //;


    // 6.3.6
    // Из рекомендации по стилю Google Closure Library 

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;



    ```

7. <a name="misc">Разное</a>

		Этот раздел будет служить для описания идей и концепций, которые не должны рассматриваться догма, но существуют поощрения сомнения в общепринятых методах в попытке найти более эффективные способы для выполнения общих задач программирования JavaScript.

    A. Использование `switch` следует избегать, потому что современный метод откладки будет скрывать вызовы функций, которые используют `switch`. 

    В последних версиях браузеров Firefox и Chrome кажется есть значительные улучшения в исполнении функций, которые используют `switch`.
    http://jsperf.com/switch-vs-object-literal-vs-module

    На заметные улучшения также можно посмотреть тут:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Пример оператора switch

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // какое-то значение по умолчанию
        break;
    }

    // 7.A.1.2
    // Лучшим подходом было бы использовать объект или даже модуль:

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
    // Если `foo` это свойство `switchObj` или `switchModule`, то выполнить метод...

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

    // If you know and trust the value of `foo`, you could even omit the OR check
    // leaving only the execution:

    switchObj[ foo ]( args );

    switchModule[ foo ]( args );


    // Эта модель также поддерживает повторное использование кода.

    ```

    B. "Ранние возвраты" способствуют читабельности кода с незначительной разницей в производительности

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


8. <a name="native">"Родные" и "чужие" объекты</a>

    Основное правило тут: 

    ### Не делайте тупых вещей и все будет хорошо.

    Для усиления этой концепции, посмотрите вот это видео:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Комментарии</a>

  * Однострочные комментарии на линию выше кода
  * Комментарии в несколько строк тоже приветствуются
  * Комментарии в конце строки запрещены!
  * Стиль JSDoc хорош, но в нем нужно долго разбираться


10. <a name="language">Код Одного Языка</a>

		Программы должны быть написаны на одном языка, независимо от языка, так, как требуют того люди, которые сопровождают код.		

## Аппендикс

### Первая Запятая.

Любой проект, который ссылается этот документ в качестве руководства по стилю, не примет форматирование кода "первой запятой", только если автор специально не укажется этого. 