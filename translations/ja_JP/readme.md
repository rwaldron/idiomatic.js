# 一貫性のある慣用的なJavaScriptの書き方


## これは継続しているドキュメントであるため、私たちのコードを改善できる新しいアイデアを常に歓迎します。貢献方法: fork、clone、branch、commit、push、pull request。

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


## どんなに多くの人が貢献したとしても、どのコードも一人で書いたようにするべきです。

### 次の項目では私のすべてのコードで使用しているプラクティスを説明しているため、私のプロジェクトに貢献する場合はこれらのガイドラインを理解していなければなりません。

### 私は皆さんのコードやプロジェクトに私のスタイルを押し付けるつもりはありませんし、もしすでに共通のスタイルがあるのであればそちらを順守すべきです。


> ### "スタイルに関する議論は無意味です。ここにあるスタイルガイドにあなたは従うべきです。"
>_Rebecca_ _Murphey_

&nbsp;

> ### "成功を収めるプロジェクトをうまく管理することの一つが自分でコードを書いて実現するということではありません。もし多くの人があなたのコードを利用しているなら、仕様の中にはあなたの好みではなく、最大限に明確なコードを書きましょう。" - Idan Gazit
>_Idan_ _Gazit_

## 翻訳

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


## 慣用的ではないもの（重要）:

### コードの品質ツールや情報とリファレンス

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)


## 賢くなろう

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

下記の事項は 1) 不完全、2) *必読*ということを熟考しなければなりません。私はこれらの作者によるスタイルに常に同意はしていませんが、彼らは一貫性があるため信頼できるのも確かです。その上、これらは言語の世界では権威があるものです。

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)




### ビルドとデプロイのプロセス

プロジェクトは常にプロダクションで使うための準備の中にチェックやテスト、圧縮などをするためのいくつかの包括的な手法を含めるように努力するべきです。このタスクのために、Ben Almanによる[grunt](https://github.com/cowboy/grunt)は他と比べようもないほど素晴らしく、このレポジトリの "kits/" ディレクトリも正式に置き換えられました。




### テストする仕組み

ユースケースデモを"テスト"として見なしてはいけません。下記の事項はテストフレームワークのリストで、どれも他の何よりも支持されているものです。

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)

## 目次

 * [スペース](#whitespace)
 * [美しい構文](#spacing)
 * [型のチェック（jQeury Core Style Guidelinesの作法）](#type)
 * [条件文の評価](#cond)
 * [実際のスタイル](#practical)
 * [ネーミング](#naming)
 * [雑則](#misc)
 * [ネイティブオブジェクトとホストオブジェクト](#native)
 * [コメント](#comments)
 * [1つの言語としてのコード](#language)



------------------------------------------------


## 序文

下記のセクションではモダンなJavaScriptの開発のための_合理的な_スタイルガイドを説明していますが、規範的になれという意味ではありません。最も重要なことは**一貫性のあるコードスタイル法則**ということです。どんなものでもあなたのプロジェクトのために選ぶスタイルは一貫性のある法則であるべきです。一貫性、可読性、メンテナンス性のあるコードスタイルにするためにあなたのプロジェクトのコミットメントとしてこのドキュメントへリンクしてください。





## 一貫性のあるスタイル宣言


1. <a name="whitespace">スペース</a>
  - スペースとタブを混ぜてはいけません。
  - プロジェクトの新しく始める時、コードを書く前にソフトインデント（スペース）かタブか選択するようにこの法則を検討してください。
      - 可読性をのために、私はエディターのインデントサイズを2文字にするようにいつも推奨しています &mdash; これは2つのスペースまたはタブを2つのスペースに表現することを意味しています。
  - もしあなたのエディターが"不可視文字を表示する"設定があるなら常にオンにしてください。このプラクティスのメリットは:
      - 一貫性を強制できる
      - 行末のスペースをなくせる
      - スペースの空行をなくせる
      - コミットと差分が読みやすくなる


2. <a name="spacing">美しい構文</a>

    A. 丸括弧、中括弧、改行

    ```javascript

    // if/else/for/while/try は常にスペース、中括弧、複数の行に架かるるようにします
    // これは可読性を促進します

    // 2.A.1.1
    // あまりに読みにくい構文の例

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // 可読性を促進するためにスペースを使います

    if ( condition ) {
      // 文
    }

    while ( condition ) {
      // 文
    }

    for ( var i = 0; i < 100; i++ ) {
      // 文
    }

    // より良い例:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // 文
    }

    // または...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // 文
    }

    var prop;

    for ( prop in object ) {
      // 文
    }


    if ( true ) {
      // 文
    } else {
      // 文
    }
    ```


    B. 割り当て、宣言、関数（名前、式、コンストラクター）

    ```javascript

    // 2.B.1.1
    // 変数
    var foo = "bar",
      num = 1,
      undef;

    // リテラル表記:
    var array = [],
      object = {};


    // 2.B.1.2
    // 可読性を促進するためにスコープ（関数）ごとに1つだけ `var` を使用します
    // 宣言するリストはすっきりしている状態を保ちます（同様に少ないキーストロークを守ります）

    // 悪い例
    var foo = "";
    var bar = "";
    var qux;

    // 良い例
    var foo = "",
      bar = "",
      quux;

    // または
    var // ここにコメントをつけます
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var文は常にそれぞれのスコープ（関数）の最初になくてはなりません。
    // ECMAScript 6のconstやletもまた同様です。

    // 悪い例
    function foo() {

      // ここにいくつかの文を書きます

      var bar = "",
        qux;
    }

    // 良い例
    function foo() {
      var bar = "",
        qux;

      // すべての文は変数の宣言の後に書きます
    }
    ```

    ```javascript

    // 2.B.2.1
    // 名前つきの関数の宣言
    function foo( arg1, argN ) {

    }

    // 関数の使い方
    foo( arg1, argN );


    // 2.B.2.2
    // 名前つきの関数の宣言
    function square( number ) {
      return number * number;
    }

    // 関数の使い方
    square( 10 );

    // 不自然に続けて渡すスタイル
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // コールバック関数の文
    });


    // 2.B.2.3
    // 式による関数の宣言
    var square = function( number ) {
      // 値や関連する何かを返します
      return number * number;
    };

    // 識別子と式による関数の宣言
    // この望ましい形はスタックトレースの中で自ら呼び出せる識別子を
    // 持てる値が追加されます:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };


    // 2.B.2.4
    // コンストラクターの宣言
    function FooBar( options ) {

      this.options = options;
    }

    // コンストラクターの使い方
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. 例外や些細なこと

    ```javascript

    // 2.C.1.1
    // コールバックと関数
    foo(function() {
      // ここには実行される関数の最初の括弧と"function"との間には
      // スペースがないことを注意してください
    });

    // 配列を受け取る関数、スペースはなし
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // オブジェクトを受け取る関数、スペースなし
    foo({
      a: "alpha",
      b: "beta"
    });

    // 1つの文字列を受け取る場合、スペースなし
    foo("bar");

    // 中でグループ化された括弧、スペースなし
    if ( !("foo" in obj) ) {

    }

    ```

    D. 一貫性が常に勝つ

    セクション2.A-2.Cのスペースのルールはよりシンプルで高い目的のための提案としたセットで一貫性に繋がるものです。
    "中のスペース"のようなフォーマットの好みは任意で検討するように気をつけなければいけませんが、1つのスタイルがあなたのプロジェクトのソース全体で揃っていなければなりません。

    ```javascript

    // 2.D.1.1

    if (condition) {
      // 文
    }

    while (condition) {
      // 文
    }

    for (var i = 0; i < 100; i++) {
      // 文
    }

    if (true) {
      // 文
    } else {
      // 文
    }

    ```

    E. クオート

    あなたの好みがシングルクオートだろうとダブルクオートだろうとどうでもいい事です。これらはJavaScriptの解析においては違いはありません。**絶対に**強制されることは一貫性に繋がります。**同じプロジェクトの中でクオートを混ぜないでください。1つのスタイルを選び、それにこだわってください。**

    F. 行末と空行

    スペースは読めない変更点を生み、差分を壊します。行末のスペースや空行のスペースを削除するためにコミット前の内容を組み込むかしっかり考えてください。

3. <a name="type">型のチェック（jQeury Core Style Guidelinesの作法）</a>

    A. 実際の型

    文字列:

        typeof variable === "string"

    数値:

        typeof variable === "number"

    ブール値:

        typeof variable === "boolean"

    オブジェクト:

        typeof variable === "object"

    配列:

        Array.isArray( arrayLikeObject )
        (wherever possible)

    ノード:

        elem.nodeType === 1

    null:

        variable === null

    nullまたはundefined:

        variable == null

    undefined:

      グローバル変数:

        typeof variable === "undefined"

      ローカル変数:

        variable === undefined

      プロパティ:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. 強制された型

    次の実装を考えてみてください。

    こういうHTMLがあったとします:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` は `0` という値で宣言されて、型は `number` になります
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // あなたのコードのどこかで、input要素から値を取得して
    // `foo` を更新する必要があります

    foo = document.getElementById("foo-input").value;

    // もしあなたがこの時点で `typeof foo` をテストした場合、次のような
    // ロジックがあるとその結果は `string` となることを意味します。

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` はたとえ `foo` が "1" だとしても評価されないでしょう。


    // 3.B.1.2

    // + または - といった単項演算子を使って、強制的にこの問題を回避できます:

    foo = +document.getElementById("foo-input").value;
    //    ^ この + 演算子は右側の値をnumberに変換します

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // こうすれば `importantTask()` は呼び出されます
    ```

    これらは同じように強制的に変換するいくつかの方法です:


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

    // 上記は"無駄に考えすぎていないか"ということを考慮してください
    // 次のようなindexOfが返した値を明確に比較するようなアプローチに
    // してみましょう。

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // これは次の場合と同じです

    ~~num;

    num >> 0;

    num >>> 0;

    // どれも結果は2になります


    // しかし、負の値の場合は異なった扱いをされることを覚えておきましょう

    var neg = -2.5;

    parseInt( neg, 10 );

    // これは次の場合と同じです

    ~~neg;

    neg >> 0;

    // これはどれも-2になります
    // 一方で...

    neg >>> 0;

    // この結果は4294967294となります




    ```



4. <a name="cond">条件文の評価</a>

    ```javascript

    // 4.1.1
    // 配列の長さだけを評価する場合は次の代わりに:
    if ( array.length > 0 ) ...

    // このように評価すればいいでしょう:
    if ( array.length ) ...


    // 4.1.2
    // 配列が空かどうかだけを評価する場合は次の代わりに:
    if ( array.length === 0 ) ...

    // このように評価すればいいでしょう:
    if ( !array.length ) ...


    // 4.1.3
    // 文字列が空ではないことだけを評価する場合は次の代わりに:
    if ( string !== "" ) ...

    // このように評価すればいいでしょう:
    if ( string ) ...


    // 4.1.4
    // 文字列が空であることだけを評価する場合は次の代わりに:
    if ( string === "" ) ...

    // このように評価すればいいでしょう:
    if ( !string ) ...


    // 4.1.5
    // 参照先がtrueかどうかだけ評価する場合は次の代わりに:
    if ( foo === true ) ...

    // このように評価することを意味し、これは内部的な機能を利用します:
    if ( foo ) ...


    // 4.1.6
    // 参照先がfalseかどうかを評価する場合は次の代わりに:
    if ( foo === false ) ...

    // 強制的にtrueの評価を行うために否定を使います
    if ( !foo ) ...

    // 注意点としてこの場合は0、""、null、undefined、NaNといった値にも
    // マッチします。もしfalseに限定する必要があるのであれば次のようにします
    if ( foo === false ) ...


    // 4.1.7
    // 参照先がfalse、""、0ではなく、nullまたはundefinedかどうかだけを
    // 評価する場合は次の代わりに:
    if ( foo === null || foo === undefined ) ...

    // 次のように==を使用して型の変換を利用します
    if ( foo == null ) ...

    // ==はfalse、""、0ではなくnullとundefinedの両方をnullとマッチすることを
    // 覚えておいてください
    null == undefined

    ```
    常にベストで正確な結果のための評価をしましょう - 上記はガイドラインであって、ドグマではありません。

    ```javascript

    // 4.2.1
    // 型の変換と評価の注意書き

    // `==` よりも `===` を選びましょう（ルーズな型の評価が必要でない限り）

    // ===は次のように型を変換しません:

    "1" === 1;
    // false

    // ==は次のように型を変換します:

    "1" == 1;
    // true


    // 4.2.2
    // ブール値、trueな値とfalseな値

    // ブール値:
    true, false

    // trueな値:
    "foo", 1

    // falseな値:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">実際のスタイル</a>

    ```javascript

    // 5.1.1
    // 実際のモジュール

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // 何かのブール値のプロパティ
          bool: true,
          // 何かの文字列の値
          string: "a string",
          // 配列のプロパティ
          array: [ 1, 2, 3, 4 ],
          // オブジェクトのプロパティ
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // 現在の`data`の値を取得する
            return data;
          },
          setData: function( value ) {
            // `data`の値をセットしてそれを返す
            return ( data = value );
          }
        };
      })();

      // に可能性のあるものはここに

      // グローバルオブジェクトにモジュールを見えるようにします
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // 実際のコンストラクター

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


      // `new`を使わずにコンストラクターを呼び出すにはこのようにします:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // グローバルオブジェクトにモジュールを見えるようにします
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">ネーミング</a>


    A. あなたがコードをコンパイルしたり圧縮したりするわけではないので、そういった事をしようとしてはいけません。

    次のコードはひどいネーミングの例です:

    ```javascript

    // 6.A.1.1
    // 悪い名前を使ったコードの例

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    紛れもなくこう書いたほうがいいでしょう。

    これはロジックは同じですが、より親切で考えられたネーミングです（そして読みやすい構造になっています）:

    ```javascript

    // 6.A.2.1
    // 改善したネーミングを使ったコードの例

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

    ネーミングの観点でいくつか補足すると:

    ```javascript

    // 6.A.3.1
    // 文字列のネーミング

    `dog` は文字列です


    // 6.A.3.2
    // 配列のネーミング

    `dogs` は `dog` という文字列の配列です


    // 6.A.3.3
    // 関数、オブジェクト、インスタンスなどのネーミング

    camelCase; function と var による宣言


    // 6.A.3.4
    // コンストラクターやプロトタイプなどのネーミング

    PascalCase; コンストラクター


    // 6.A.3.5
    // 正規表現のネーミング

    rDesc = //;


    // 6.A.3.6
    // Google Closure Library Style Guideより

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. `this` の扱い

    後から呼び出される `BoundFunction` を定義する場合は `call` や `apply` の一般的な使われ方よりも `.bind( this )` や同等の機能が好ましいです。好ましいオプションがない場合だけ、別の方法を考えましょう。

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // これは非同期のストリームをオープンし
      // 継続的に呼び出されます
      stream.read( opts.path, function( data ) {

        // このインスタンスの現在の値を
        // データストリームの最新の値で更新します
        this.value = data;

      }.bind(this) );

      // デバイスのインスタンスから頻繁に発行される
      // イベントを絞ります
      setInterval(function() {

        // 絞ったイベントを発行します
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // EventEmitterを継承したかのように装います ;)

    ```

    もし利用できない場合でも最近の多くのJavaScriptライブラリには `.bind` と同様な機能があります。


    ```javascript
    // 6.B.2

    // 例）lodash/underscoreの_.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // 例）jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // 例）dojo.hitch
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

    最後の回避方法は、識別子として`this`への別名に`self`を使うことですが、これは極端なバグになる傾向があるため、可能な限り避けるべきです。

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


    C. `thisArg`を使う

    ES 5.1の各プロトタイプのメソッドでは特別な`thisArg`という署名に対応しています。これは可能な限り利用するべきです。

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this|は`obj`への参照

      console.log( this[ key ] );

    }, obj ); // <-- 最後の引数が`thisArg`

    // 結果は...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg`は`Array.prototype.every`、`Array.prototype.forEach`、`Array.prototype.some`、`Array.prototype.map`、`Array.prototype.filter`と一緒に利用できます。

7. <a name="misc">雑則</a>

    このセクションは偏見的と見なされるべきではないアイデアやコンセプトを説明する代わりに、一般的なプログラミングタスクを行うためのより良い方法を見つけるためのプラクティスを助長するものです。

    A. `switch` の使用はできるだけ避けるべきでモダンなメソッドトレースはswitch文をブラックリストの関数にするでしょう

    これは最新のFirefoxとChromeでの `switch` 文の実行の大幅な改善です。
    http://jsperf.com/switch-vs-object-literal-vs-module

    注意すべき改善点はここでも確認できます:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // switch文の例

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // デフォルトのための何か
        break;
    }

    // 7.A.1.2
    // オブジェクトリテラルやモジュールを利用したより良いアプローチ:

    var switchObj = {
      alpha: function() {
        // 文
        // 返り値
      },
      beta: function() {
        // 文
        // 返り値
      },
      _default: function() {
        // 文
        // 返り値
      }
    };

    var switchModule = (function () {
      return {
        alpha: function() {
          // 文
          // 返り値
        },
        beta: function() {
          // 文
          // 返り値
        },
        _default: function() {
          // 文
          // 返り値
        }
      };
    })();


    // 7.A.1.3
    // もし `foo` が `switchObj` または `switchModule` のプロパティならメソッドとして実行されます

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

    // もし `foo` の値がはっきり分かっているなら、ORのチェックを省いて
    // 実行部分だけ残すようにできます:

    switchObj[ foo ]( args );

    switchModule[ foo ]( args );


    // このパターンはコードの再利用性を促進します。

    ```

    B. ごくわずかなパフォーマンスと早く返り値を返すことでコードの可読性を促進します

    ```javascript

    // 7.B.1.1
    // 悪い例:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // 良い例:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">ネガティブオブジェクトとホストオブジェクト</a>

    基本的な原則はここにある通りです:

    ### 愚かなことをしなければ、すべてうまくいく。

    このコンセプトを補足するために、次のプレゼンテーションを見てください:

    #### Andrew Dupontによる“Everything is Permitted: Extending Built-ins”（JSConf2011、ポートランド、オレゴン州）

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">コメント</a>

  * 主題としてコード上に単一行で書きます
  * 複数行でも良い
  * 行末のコメントは禁止！
  * JSDocのスタイルは良いですが大幅な時間を要します


10. <a name="language">1つの言語としてのコード</a>

    プログラムは1つの言語によって書かれるべきです。その言語が何であれ、メンテナーによって決定されるのです。

## 付録

### 最初にコンマを置くこと

このドキュメントを基本的なスタイルガイドとして引用しているいくつかのプロジェクトは、そのプロジェクトの作者が特別に指定しない限りコンマを最初に置くコードフォーマットを受け入れません。
