# 撰寫一致風格且通順易懂的 JavaScript 之原則

## 這是一份持續更新的文件，歡迎任何對於增進本文件內程式碼的想法。參與貢獻：fork、clone、branch、commit、push、pull、pull request。

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
* Duc Nguyen [@ducntq](https://twitter.com/ducntq), [github](https://github.com/ducntq)
* James Young [@jamsyoung](http://twitter.com/jamsyoung), [github](https://github.com/jamsyoung)
* Hao-Wei Jeng [@l0ckys](http://twitter.com/l0ckys), [github](https://github.com/lockys)

## 不論有多少人在撰寫同一個程式庫，所有在此程式庫的程式看起來都是由一個人寫的。

### 在下面清單中列出了應用在作者是我的程式之一些撰寫規則。任何對於我建立的建案的貢獻都必須遵守這些規則。

### 我並不是強制別人使用我的程式撰寫風格在別人的專案中或程式中;如果某專案已經存在一個一致的程式撰寫風格，它應該要被遵從與尊重。


> ### "對於風格的爭論是沒有意義的。它們應該是一種風格的指南，且你也應該要遵守。"
>_Rebecca_ _Murphey_

&nbsp;

> ### "要成為一個成功專案的好管理者，有一個因素是你必須要了解到總是以自己的風格寫程式碼是一個不好的做法。
如果有成千上萬的人在使用你的程式碼，那請用通俗易懂的方式來寫你的程式碼，而不是自作聰明地用自己的撰寫風格。"
>_Idan_ _Gazit_

## 多語言翻譯

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
* [繁體中文](https://github.com/rwldrn/idiomatic.js/tree/master/translations/zh_TW)

## 重要的、通用的資源：
> 建議搭配英文版一同閱讀，有些程式專有名次翻譯成中文或許無法很好地表達出原意。

### 程式品質工具、資源與參考文獻

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)
 * [Editorconfig](http://editorconfig.org/)

## 變得更聰明!

### [ECMAScript 5.1 註解版](http://es5.github.com/)
### [EcmaScript 語言規範, 5.1 版](http://ecma-international.org/ecma-262/5.1/)

下列文件應該被視為：1）不完全版的，2）*必讀的*。我並不全然贊同下列作者們所撰寫的風格，但是可以確定的一點是：它們有一致性。此外，他們也都是這個語言界的權威專家。

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)

### 建置與部署的過程

專案應該總是要包含一些通用的方法，使得程式能夠被檢驗、測試或壓縮以為產品正式上線做準備。針對此類的工作，由 Ben Alman 所開發的 [grunt](https://github.com/cowboy/grunt) 是一個非常棒的工具，並且已經正式地取代這個程式庫下的 "kits/" 目錄。

### 測試工具

專案 _必須_ 包含某種單元、基準、執行與功能性的測試。使用案例(use case)的展示並不能被視為 "測試"。
下面列出一些測試用的框架，誰都不是誰更好的替代品(None of which are endorsed more than the other)。

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)

## 目錄

 * [空格 (Whitespace)](#whitespace)
 * [漂亮的語法 (Beautiful Syntax)](#spacing)
 * [型別檢測 (Courtesy jQuery Core Style Guidelines)](#type)
 * [條件語句之評估 (Conditional Evaluation)](#cond)
 * [實用的撰寫風格 (Practical Style)](#practical)
 * [命名](#naming)
 * [其他雜項的規定、風格 Misc](#misc)
 * [原生與宿主物件 Native & Host Object](#native)
 * [註解 (Comments)](#comments)
 * [使用單一語言 (One Language Code)](#language)

------------------------------------------------

## 前言

下面章節所講的是一個 _合理_ 的現代 JavaScript 開發風格指南，目的並不是要做硬性規範。最重要的目的是要傳達*高度一致性的程式撰寫風格法則*（the law of code style consistency）。你為你的專案所選擇的撰寫風格都應該被視為最高準則。在你的專案中連結此份文件作為程式撰寫風格之一致性、可讀性以及可維護性的保證。

## 慣例風格宣言

1. <a name="whitespace">空格</a>
  - 永遠不要混用空格與 Tab
  - 在開始一個專案，還沒寫程式碼之前，選擇一種縮排方式，空格或 real Tab，並將它視為**最高準則**。
      - 為了程式的可讀性, 我總推薦設定你的編輯器的縮排為兩個字元的寬度 &mdash; 這代表兩個空白或以兩個空白代表 Tab。
  - 如果你的編輯器有支援的話，請一定要打開 "顯示不可見字元" 的設定。這個慣例的好處是：
      - 保證一致性
      - 去掉行尾的空格
      - 去掉空行的空格
      - 提交與差異對比更具有可讀性


2. <a name="spacing">漂亮的語法</a>

    A. 小括號、大括號、換行

    ```javascript

    // if/else/for/while/try 總是有要有小括號、大括號與換行
    // 這對於可讀性有幫助

    // 2.A.1.1
    // 不好辨認的語法（cramped syntax）範例

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // 善用空格來提升可讀性

    if ( condition ) {
      // 敘述、程式邏輯
    }

    while ( condition ) {
      // 敘述、程式邏輯
    }

    for ( var i = 0; i < 100; i++ ) {
      // 敘述、程式邏輯
    }

    // 更好的作法:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // 敘述、程式邏輯
    }

    // 或者是...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // 敘述、程式邏輯
    }

    var prop;

    for ( prop in object ) {
      // 敘述、程式邏輯
    }


    if ( true ) {
      // 敘述、程式邏輯
    } else {
      // 敘述、程式邏輯
    }
    ```


    B. 賦予值, 宣告, 函式 ( 命名函式, 函式表達式 (Expression), 建構函式 (constructor) )

    ```javascript

    // 2.B.1.1
    // 變數
    var foo = "bar",
      num = 1,
      undef;

    // 實字表示 (Literal notations):
    var array = [],
      object = {};


    // 2.B.1.2
    // 在一個函式内只使用一個 `var` 有助於提升可讀性
    // 並且讓你的宣告列表更加的整齊 (還幫你少敲了幾次鍵盤)

    // 不好的做法
    var foo = "";
    var bar = "";
    var qux;

    // 好的做法
    var foo = "",
      bar = "",
      quux;

    // 或者是..
    var // 對這些變數下註解
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // `var` 描述應該總要在函式作用域的頂端

    // 不好的做法
    function foo() {

      // 在變數前有些程式邏輯、敘述

      var bar = "",
        qux;
    }

    // 好的做法
    function foo() {
      var bar = "",
        qux;

      // 所有程式邏輯或敘述要在變數之後
    }

    // 2.B.1.4
    // ECMAScript 6 的 const 和 let , 也應該要在作用域的頂端 (區塊).
    // 不好的做法
    function foo() {
      let foo,
        bar;
      if ( condition ) {
        bar = "";
        // 程式邏輯、敘述
      }
    }
    // 好的做法
    function foo() {
      let foo;
      if ( condition ) {
        let bar = "";
        // 程式邏輯、敘述
      }
    }

    ```


    ```javascript

    // 2.B.2.1
    // 命名函式的宣告
    function foo( arg1, argN ) {

    }

    // 使用方法
    foo( arg1, argN );


    // 2.B.2.2
    // 命名函式的宣告
    function square( number ) {
      return number * number;
    }

    // 使用方法
    square( 10 );

    // 2.B.2.3
    // 函式表達式
    var square = function( number ) {
      // 回傳相關數值
      return number * number;
    };

    // 具有名字的函式表達式
    // 這種宣告形式的好處是它可以呼叫自己
    // 並在程式出錯時的 stack trace 具有名字
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };


    // 2.B.2.4
    // 建構函式
    function FooBar( options ) {

      this.options = options;
    }

    // 使用方法
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. 例外, 一些細節

    ```javascript

    // 2.C.1.1
    // 具有回呼 (callback) 的函式
    foo(function() {
      // 注意在呼叫之函式的第一個小括號與 `function` 之間沒有空格
    });

    // 函式可傳入 `array` 作為參數，沒有空格
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // 函式可傳入 `object` 作為參數，沒有空格
    foo({
      a: "alpha",
      b: "beta"
    });

    // 函式可傳入 `string` 實字作為參數，沒有空格
    foo("bar");

    // 在外部的小括號內部包住條件式 (condition) 的小括號，没有空格
    if ( !("foo" in obj) ) {

    }

    ```

    D. 保持一致性是無庸置疑的（Consistency Always Wins）

    在 2.A-2.C 章節中，我們建議以空格(留白)規則來撰寫程式，為了是一個更簡單的、更高的目標：一致性。值得注意的是對於程式排版的偏好，譬如"在內部的空格"是可選擇的，但是在整個專案中的程式碼中必須只遵守一種風格。

    ```javascript

    // 2.D.1.1

    if (condition) {
      // 程式邏輯、敘述
    }

    while (condition) {
      // 程式邏輯、敘述
    }

    for (var i = 0; i < 100; i++) {
      // 程式邏輯、敘述
    }

    if (true) {
      // 程式邏輯、敘述
    } else {
      // 程式邏輯、敘述
    }

    ```

    E. 引號 (Quote)

    無論你選擇單引號或雙引號都沒關係，在 JavaScript 解析中並沒有差別。但**絕對需要**強制的還是一致性。 **永遠不要在你的專案中混用兩種引號，選擇一種，並保持一致**。

    F. 行尾與空行

    在行尾或空行空格(留白)會破壞變更紀錄 [changesets](https://en.wikipedia.org/wiki/Changeset) 的可讀性。請考慮加入在提交前 (pre-commit) 會自動刪除行尾以及空行空格的工具。

3. <a name="type">型別檢測 (來自於 jQuery Core Style Guidelines)</a>

    A. 直接型別（Actual Types）

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
        (如果可能的話)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null or undefined:

        variable == null

    undefined:

      全域變數:

        typeof variable === "undefined"

      區域變數:

        variable === undefined

      屬性:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. 轉換類型（強制型別，Coerced Types）

    想想下面的含義...

    给定下列的 HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` 被賦予 `0`，型別是 `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // 在之後的程式碼中，你需要更新 `foo`，賦予在 input 元素中得到的新值

    foo = document.getElementById("foo-input").value;

    // 如果你現在測試 `typeof foo`, 結果會是 `string`
    // 這代表著你在 if 判斷式檢測 `foo` 時，會有以下邏輯:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` 將永遠不會被執行到，即使 `foo` 的值是 "1"


    // 3.B.1.2

    // 你可以巧妙地使用 + / - 一元運算符以強制轉換型別來解決此問題:

    foo = +document.getElementById("foo-input").value;
    //    ^ + 一元運算符將他的右邊的運算對象轉換成 `number`

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` 將會被執行到
    ```

    下面是幾個強制轉換型別的範例:


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

    // 值得注意的是上面例子都有點 "不必要的聰明"
    // 請使用較明確的方法來比較 indexOf 回傳的值

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // 等於...

    ~~num;

    num >> 0;

    num >>> 0;

    // 结果都是 2


    // 請時時刻刻牢記在心裡, 負數將被特別對待...

    var neg = -2.5;

    parseInt( neg, 10 );

    // 等於...

    ~~neg;

    neg >> 0;

    // 结果都是 -2
    // 但是...

    neg >>> 0;

    // 结果就是 4294967294

    ```

4. <a name="cond">條件語句之評估</a>

    ```javascript

    // 4.1.1
    // 當判斷 array 內是否有東西時，建議不要使用以下方法:
    if ( array.length > 0 ) ...

    // ... 請使用以下方式:
    if ( array.length ) ...


    // 4.1.2
    // 當判斷一個 array 是否為空，建議不要使用以下方法:
    if ( array.length === 0 ) ...

    // ... 請使用以下方式:
    if ( !array.length ) ...


    // 4.1.3
    // 當判斷一個 string 是否不等於空字串，建議不要使用以下方法:
    if ( string !== "" ) ...

    // ... 請使用以下方式:
    if ( string ) ...


    // 4.1.4
    // 當判斷一個 string 是否等於空字串，建議不要使用以下方法:
    if ( string === "" ) ...

    // ... 請使用以下方式:
    if ( !string ) ...


    // 4.1.5
    // 當判斷一個變數值是否為真，建議不要使用以下方法:
    if ( foo === true ) ...

    // ...只需這樣，享受內建功能的好處:
    if ( foo ) ...


    // 4.1.6
    // 當判斷一個變數值是否為假，建議不要使用以下方法:
    if ( foo === false ) ...

    // ...使用驚嘆號 (negation) 將判斷式整體轉為真值
    if ( !foo ) ...

    // ...需要注意的是：這幾個數值也會符合這情況 0, "", null, undefined, NaN
    // 如果你 _必須_ 是布林型別的 false，請這樣使用：
    if ( foo === false ) ...


    // 4.1.7
    // 當想判斷一個變數為 null 或者 undefined，但不是 false, "" 或者 0,
    // 請不要使用：
    if ( foo === null || foo === undefined ) ...

    // ...享受 == 型別轉換的好處，像是這樣:
    if ( foo == null ) ...

    // 請記住，使用 == 將會使 `null` 等於 `null` 和 `undefined`
    // 但不是 `false`，"" 或者 0
    null == undefined
    // true
    ```
    總是判斷最好、最精確的數值，上述是指南而非教條。

    ```javascript

    // 4.2.1
    // 型別轉換和比較運算符说明

    // 首重 `===`，`==` 次之 (除非需要鬆散型別的比較)

    // `===` 不會做型別轉換，這代表著:

    "1" === 1;
    // false

    // `==` 會先轉換型別，這代表著:

    "1" == 1;
    // true


    // 4.2.2
    // 布林, 真 & 假

    // 布林:
    true, false

    // 真:
    "foo", 1

    // 假:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">實用的撰寫風格</a>

    ```javascript

    // 5.1.1
    // 一個實用的模組

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // 這是一個布林值
          bool: true,
          // 一個字串
          string: "a string",
          // 一個數字陣列
          array: [ 1, 2, 3, 4 ],
          // 一個物件
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // 取得 `data` 的值
            return data;
          },
          setData: function( value ) {
            // 回傳賦予值過的 `data` 值
            return ( data = value );
          }
        };
      })();

      // 其他一些程式邏輯敘述將會在這...

      // 把你的模組變成全域物件
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // 一個實用的建構函式

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


      // 不使用 `new` 來呼叫建構函式的話，你可能會這樣做：
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // 把我們的建構函式變成全域物件
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">命名</a>


    A. 你不是一個人體編譯器/壓縮器，所以不要嘗試去做編譯器/壓縮器該做的事。

    下面是一個極為糟糕的命名範例:

    ```javascript

    // 6.A.1.1
    // 糟糕的命名範例

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    毫無疑問地，你應該寫過這樣的程式碼 —— 希望今天你看完這篇文件後，他不會再出現。

    以下是相同邏輯的程式碼，但是使用更貼切，思考過的命名（和一個可讀性的架構）：

    ```javascript

    // 6.A.2.1
    // 改善過後的命名範例

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

    其他一些命名的指南：

    ```javascript

    // 6.A.3.1
    // 命名字串

    `dog` 是一個 string


    // 6.A.3.2
    // 命名陣列 (array)

    `['dogs']` 是一個含有 `dog 字串的陣列 (array)`


    // 6.A.3.3
    // 命名函数、物件、實例，等

    camlCase; 函式 (function) 和 var 變數宣告


    // 6.A.3.4
    // 命名建構函式、原型 (prototypes)，等

    PascalCase; 建構函式


    // 6.A.3.5
    // 命名正規表示式

    rDesc = //;


    // 6.A.3.6
    // 來自 Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. 來面對 `this`

    除了使用眾所皆知的 `call` 和 `apply` 外，總是優先選擇使用 `.bind( this )`
    或者一個功能上等於他的，建立 `BoundFunction` 以供之後使用，當沒有更好的選擇時才使用別名。

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // 建立一個非同步 (async) 的 stream，這將會被持續地使用
      stream.read( opts.path, function( data ) {

        // 使用 stream 回傳 data 最新的值，更新實例的值
        this.value = data;

      }.bind(this) );

      // 控制事件被觸發的頻率
      setInterval(function() {

        // 發出被控制的事件
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // 假設我們已經繼承了一個事件發送器（EventEmitter） ;)

    ```

    當不能使用 `.bind` 時，許多等價於 `.bind` 的功能在多數現在 JavaScript libraries 中都有提供。


    ```javascript
    // 6.B.2

    // 範例：lodash/underscore，_.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // 範例：jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // 範例：dojo.hitch
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

    宣告一個 `this` 的别名，以 `self` 作變數名。這很有可能出現 bug，應該盡可能避免使用。

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


    C. 使用 `thisArg`

    好幾個 ES 5.1 中的原型的方法都內建了 `thisArg` ，應盡可能的使用它

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| 現在是 `obj`

      console.log( this[ key ] );

    }, obj ); // <-- 最後的參數是 `thisArg`

    // 印出來 prints...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` 在 `Array.prototype.every`、 `Array.prototype.forEach`、 `Array.prototype.some`、 `Array.prototype.map`、 `Array.prototype.filter` 中都可以使用。

7. <a name="misc">其他雜項的規定、風格 Misc(miscellaneous)</a>

    這一章節主要會描述一些想法與概念，而非教條。相反地，我們更鼓勵對於現有的慣例保持好奇心，進而嘗試找到更好的撰寫 JavaScript 程式的方法。

    A. 避免使用 `switch`，現代方法追蹤（method tracing）將會把含有 switch 敘述的函式列為黑名單。

    似乎在最新版本的 Firefox 和 Chrome 都對於 `switch` 敘述有重大的改進。http://jsperf.com/switch-vs-object-literal-vs-module

    值得注意的是，改進可以在此連結看到:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // switch 敘述範例

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // 預設的邏輯敘述
        break;
    }

    // 7.A.1.2
    // 一個具有組合性與重複使用性的替代方法是使用物件來儲存 "cases"
    // 並使用一個 function 来做委派：

    var cases, delegator;

    // 回傳值僅作說明用的範例
    cases = {
      alpha: function() {
        // 邏輯敘述
        // 一個回傳值
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // 邏輯敘述
        // 一個回傳值
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // 邏輯敘述
        // 一個回傳值
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // 把 `argument` 轉換為陣列
      args = [].slice.call( arguments );

      // 從 `argument` 中拿出第一個值
      key = args.shift();

      // 使用預設的 case (Default)
      delegate = cases._default;

      // 從物件中取得方法並委派執行方法
      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      // arg 的作用域可以設成特定值，
      // 在這種情況下，設成 |null| 就可以了
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // 使用 7.A.1.2 中的 API:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // 當然 `case` key 的值可以輕鬆地根據一些其他不同的情況而做設定。

    var caseKey, someUserInput;

    // 有可能是某表單的輸入?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // 或者...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // 然後...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // 當然你還可以這樣做...

    delegator();
    // [ "Default", 0 ]


    ```

    B. 提前回傳值可提升可讀性，且對於性能不怎麼有影響

    ```javascript

    // 7.B.1.1
    // 不好的做法:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // 好的做法:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">原生 & 宿主物件 (Host Objects)</a>

    基本的原則是:

    ### 不要做蠢事，Everything will be ok!

    為了加深這個概念，請看看以下的演講:

    #### “一切都被允许: 擴展內建的方法或物件..等” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">註解</a>

  * 單行的註解放在程式碼上面是首選
  * 多行也可以
  * 避免行尾的註解!
  * JSDoc 的註解方式也不錯，但就需要花比較多時間。


10. <a name="language">使用單一語言</a>

    無論是什麼語言的維護者（或者團隊）規定使用什麼語言，程式應該都使用同一種語言撰寫。

## 附錄

### 逗號前置（Comma First）

所有使用本文件作為風格指南的專案都不允許逗號優先的撰寫風格，除非專案作者有明確的指定或者要求。



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
