# 자연스럽고 일관성 있게 자바스크립트 코딩하는 원칙

## 이 문서는 계속 바뀝니다. 주변의 코드를 더 낫게 만들기 위한 좋은 아이디어가 있으시면 알려주세요. Github에서 fork, clone, branch, commit, push, pull request 하는 방법으로 참여해 보세요.

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

## 코드 기반에 있는 모든 코드는 마치 한 사람이 작성한 것처럼 보여야 합니다. 많은 사람이 코드 작성에 참여했더라도 말이죠.

### 제가 원저자인 프로젝트의 코드를 작성할 때는 몇 가지 원칙을 따르는데요, 아래의 목록에 그 원칙들을 나열하였습니다. 이 프로젝트의 코드작성에 참여할 때에는 다음의 가이드라인을 따라야 합니다.

### 다른 사람들에게 제 코드 작성 스타일을 따르라고 강요하려는 의도는 아닙니다. 이미 준수하는 코드작성 스타일이 있다면, 그것을 따라야 하겠지요.


<!--> ### "Arguments over style are pointless. There should be a style guide, and you should follow it"-->
> ### "스타일에 관한 논쟁은 무의미하다. 스타일 가이드가 있을테니, 거기에 따르기만 해라"
>_Rebecca_ _Murphey_

&nbsp;

> ### "성공적인 프로젝트의 멋진 일원이 되기 위해서는 여러분 마음대로 코드를 작성하는 것이 나쁜 생각™임을 깨닫는 것이지요. 수천만 사람들이 여러분의 코드를 사용한다면, 가장 명확하게 코딩해야 합니다. 언어 명세가 허용하는 한 가장 똑똑한 코드를 만들겠다는 당신의 개인적인 선호에 따라서가 아니라"
>_Idan_ _Gazit_


## 번역

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

## 관련은 없지만, 중요한 자료:

### 코드 품질: 멋진 툴들, 리소스 & 참고자료

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)


## 똑똑해지기

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

아래 리스트는 1) 이 주제의 모든 지식들을 포괄하지는 않습니다. 2) *반드시 읽기를 권합니다*. 저는 아래 저자들이 말하는 코딩 스타일에 대해 항상 찬성하는 것은 아니지만, 분명한 것은 그들이 일관성 있단 겁니다. 게다가 이들은 프로그래밍 언어의 권위자들입니다.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [유창한 자바스크립트(Eloquent JavaScript)](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [자바스크립트 개발 모험(Adventures in JavaScript Development)](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [더글라스 크록포드의 월드와이드웹(Douglas Crockford's Wrrrld Wide Web)](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)



### 빌드 & 배포 프로세스

<!--Projects should always attempt to include some generic means by which source can be linted, tested and compressed in preparation for production use. For this task, [grunt](https://github.com/cowboy/grunt) by Ben Alman is second to none and has officially replaced the "kits/" directory of this repo.-->
프로젝트는 배포를 위해 소스코드를 압축하는 방법을 마련해두어야 합니다. 이렇게 하기 위해, Ben Alman의 [grunt](https://github.com/cowboy/grunt) 는 둘째가라면 서러운 솔루션이며 공식적으로 이 레포지터리의 "kits/" 디랙토리를 대체 하고있습니다.



### 테스트 Facility

프로젝트에는 유닛, 참조, 구현, 기능에 관한 테스트가 _들어가 있어야_ 합니다. 유스 케이스를 "테스트"로 **한정하지 마세요.** 아래에는 테스트를 하는 프레임워크의 목록을 나열해 두었습니다. 이 중에 어느 하나를 더욱 추천하는 것은 아닙니다.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)


## 목차

 * [공백](#whitespace)
 * [구문(Syntax)을 아름답게 작성하기](#spacing)
 * [데이터형을 확인하기(Type Checking) (Courtesy jQuery Core Style Guidelines)](#type)
 * [조건을 판정하기(Conditional Evaluation)](#cond)
 * [실용적인 스타일](#practical)
 * [이름을 짓는 방법](#naming)
 * [자잘한 것들](#misc)
 * [네이티브 & 호스트 객체](#native)
 * [주석 달기](#comments)
 * [한 언어로 작성하기](#language)



------------------------------------------------


<!---## Preface-->
## 서문

<!--The following sections outline a _reasonable_ style guide for modern JavaScript development and are not meant to be prescriptive. The most important take-away is the **law of code style consistency**. Whatever you chose as the style for your project should be considered law. Link to this document as a statement of your project's commitment to code style consistency, readability and maintainability.-->
<!--下記のセクションではモダンなJavaScriptの開発のための_合理的な_スタイルガイドを説明していますが、規範的になれという意味ではありません。最も重要なことは一貫性のあるコードスタイル法則ということです。どんなものでもあなたのプロジェクトのために選ぶスタイルは一貫性のある法則であるべきです。一貫性、可読性、メンテナンス性のあるコードスタイルにするためにあなたのプロジェクトのコミットメントとしてこのドキュメントへリンクしてください。-->
이 글의 섹션은 현대적인 자바스크립트 개발을 위한 _합리적인_ 스타일가이드를 제시하고 있지만, 그게 규정이라는 의미는 아닙니다. 제일 중요한 것은 **일관성 있는 코딩 스타일을 위한 규칙** 입니다. 프로젝트에 어떤 스타일을 사용하던간에 반드시 지켜져야 합니다. 이 문서를 프로젝트의 일관성, 가독성, 유지보수용이성을 위한 참고자료로써 링크해 주세요.




## 자연스러운 스타일에 관한 선언문


1. <a name="whitespace">공백</a>
  - 절대 스페이스와 탭을 섞어 쓰지 마세요.
  - 프로젝트를 시작할 때, 코드를 작성하기 전에 먼저 스페이스와 탭 중의 하나를 선택하여야 합니다. 이것이 **규칙** 입니다.
      - 가독성을 위해서 저는 항상 편집기의 들여쓰기 크기를 2 문자로 설정하기를 권장합니다. &mdash; 2 문자란 2 스페이스 또는 탭으로 표현되는 2칸 공간을 의미합니다.
  - 에디터가 들여쓰기 설정을 지원한다면, 저는 "show invisibles" 설정을 켜고 작업합니다. 이렇게 했을 때의 장점은 다음과 같아요:
      - 일관성을 강제할 수 있어요.
      - 줄 끝의 공백문자 제거하기 좋아요.
      - 빈 줄 공백문자를 제거하기 좋아요.
      - 커밋하고 비교(diff)할 때 읽기 편해요.


2. <a name="spacing">아름답게 구문 작성하기</a>

    A. 중괄호{}, 괄호(), 줄 바꾸기

    ```javascript

    // if나 else, for while, try를 쓸 때에는 항상 빈 칸을 띠우고, 괄호를 사용하고, 여러 줄로 나누어 쓰세요.
    // 이렇게 하면 가독성이 더 좋아집니다.

    // 2.A.1.1
    // 빼곡해서 알아보기 어려운 구문의 예

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // 가독성이 높아지도록 빈 칸을 띠워주세요.

    if ( condition ) {
      // 코드
    }

    while ( condition ) {
      // 코드
    }

    for ( var i = 0; i < 100; i++ ) {
      // 코드
    }

    // 아래처럼 하면 더 좋습니다:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // 코드
    }

    // 아니면 이렇게 할 수도 있죠...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // 코드
    }

    var prop;

    for ( prop in object ) {
      // 코드
    }


    if ( true ) {
      // 코드
    } else {
      // 코드
    }
    ```


    B. 할당, 선언, 함수(일반, 표현식, 생성자)

    ```javascript

    // 2.B.1.1
    // 변수
    var foo = "bar",
      num = 1,
      undef;

    // 리터럴 표기법:
    var array = [],
      object = {};


    // 2.B.1.2
    // 함수 같은 유효 범위에 `var` 를 하나만 사용하면 가독성이 높아집니다.
    // 이렇게 하면 선언 목록도 깔끔해집니다(아울러 키보드로 입력해야 할 양도 줄어들지요)

    // 나쁜 스타일
    var foo = "";
    var bar = "";
    var qux;

    // 좋은 스타일
    var foo = "",
      bar = "",
      quux;

    // 또는..
    var // 아래 변수에 대한 설명
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var 문은 관련있는 스코프(함수) 안의 시작하는 곳에 있어야합니다.
    // ECMAScript 6의  const, let도 같은 맥락으로 이 규칙이 적용됩니다.

    // 나쁜 스타일
    function foo() {

      // 여기에 어떤 구문이 있음
      var bar = "",
        qux;
    }

    // 좋은 스타일
    function foo() {
      var bar = "",
        qux;

      // 변수 선언이후에 모든 구문들이 옴.
    }
    ```

    ```javascript

    // 2.B.2.1
    // 일반 함수 선언
    function foo( arg1, argN ) {

    }

    // 사용법
    foo( arg1, argN );


    // 2.B.2.2
    // 일반 함수 선언
    function square( number ) {
      return number * number;
    }

    // 사용법
    square( 10 );

    // 아주 부자연스러운 연속 전달 스타일(continuation passing style) (CPS에 대해서는 http://goo.gl/TA32o를 참고)
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // 콜백 문장
    });


    // 2.B.2.3
    // 함수 표현식
    var square = function( number ) {
      // 가치 있고 의미 있는 뭔가를 반환합니다
      return number * number;
    };

    // 식별자를 지닌 함수 표현식
    // 아래와 같은 형태는 자기 자신을 호출할 수 있으면서
    // 스택 트레이스상에서 식별할 수 있다는 부가적인 장점이 있습니다:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number-1 );
    };


    // 2.B.2.4
    // 생성자 선언
    function FooBar( options ) {

      this.options = options;
    }

    // 사용법
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. 예외 사항, 약간의 탈선

    ```javascript

    // 2.C.1.1
    // 콜백을 포함한 함수
    foo(function() {
      // 참고로 함수 호출을 실행하는 첫 괄호와 "function"이라는
      // 단어 사이에는 별도의 공백이 없습니다.
    });

    // 배열을 받는 함수일 때에는 공백 없음
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // 객체를 받는 함수일 때에는 공백 없음
    foo({
      a: "alpha",
      b: "beta"
    });

    // 괄호안에 괄호가 있을 때에는 공백 없음
    if ( !("foo" in obj) ) {

    }

    ```

    D. 일관성을 지키는 편이 항상 좋습니다.

    섹션2.A-2.C에서는 우선 공백을 사용하는 규칙을 제시하고 있습니다. 공백을 사용하는 원칙은 단순하면서도 우선순위가 높습니다. 바로 일관성이에요.
    "inner whitespace"를 쓰라는 등의 포맷방식을 모두에게 강요할 수는 없겠지요. 그러나 여러분의 프로젝트 전체에 걸쳐서 단 한 가지의 스타일이 적용되어야 합니다. 이 점이 중요합니다.

    ```javascript

    // 2.D.1.1

    if (조건) {
      // 코드
    }

    while (조건) {
      // 코드
    }

    for (var i = 0; i < 100; i++) {
      // 코드
    }

    if (true) {
      // 코드
    } else {
      // 코드
    }

    ```

    E. 따옴표

    작은 따옴표로 하냐 큰 따옴표로 하냐는 별로 중요하지않습니다, 자바스크립트에서는 그둘은 파싱하는 과정에서 전혀 차이가 없으니까요. 중요한것은 **절대적인 일관성** 이 있어야 한다는 점입니다. **같은 프로젝트에서는 절대로 큰따옴표와 작은따옴표를 섞지 마세요. 한 스타일을 정해서 고수하세요.**


    F. 각 줄의 끝부분, 빈 줄

    여백이 있으면 바뀐 내용들을 읽을 수가 없게 됩니다. 또한 diff툴이 제대로 작동하지 않습니다.
  줄의 끝에 있는 여백이나 빈 줄에 들어있는 공백을 자동적으로 제거해주는 ‘pre-commit hook'을 사용해 보세요.

3. <a name="type">자료형 확인하기 (Courtesy jQuery Core Style Guidelines)</a>

    A. 실제 타입

    스트링:

        typeof variable === "string"

    숫자:

        typeof variable === "number"

    불린:

        typeof variable === "boolean"

    오브젝트:

        typeof variable === "object"

    배열:

        Array.isArray(arrayObject)
        (가능한 곳이면 어디든지)

    노드:

        elem.nodeType === 1

    널(null):

        variable === null

    널(null), 미할당(undefined):

        variable == null

    미할당(undefined):

      전역변수들:

        typeof variable === "undefined"

      지역변수들:

        variable === undefined

      프로퍼티:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. 강제변환된 타입

    다음의 결과를 생각해 보죠...

    아래와 같은 HTML 코드가 있어요:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` 라는 변수를  `0` 값을 갖는 상태로 선언하였습니다. 그리고 자료형은  `수(number)` 이고요.
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // 나중에 입력요소(input element)에서 받은 새로운 값을
    // `foo` 변수에다가 넣어야 합니다.

    foo = document.getElementById("foo-input").value;
    // (역자주 : 아, `foo` 변수에 원래는 숫자형 자료가 들어가 있었는데, 이번에는 문자형 자료가 들어가네요.)

    // 자, 이제 `typeof foo` 라고 쳐서 `foo` 의 자료형을 확인해보면, 결과는 `문자열` 이
    // 나올 겁니다. 즉 `foo` 의 자료형을 알아볼 때, 아래와 같이 했다면:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` 함수는 절대로 실행이 안될 겁니다. `foo` 의 값이 "1" 이라고 하더라도 말이죠.


    // 3.B.1.2

    // 1진법의 +나 - 단항 연산자를 사용한 smart 강제변환으로 문제를 해결할 수 있습니다:

    foo = +document.getElementById("foo-input").value;
          ^ 1진법의 단항연산자 +는 오른쪽에 있는 부분을 숫자로 바꿉니다.

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` 가 호출됩니다.
    ```

    아래에는 자료형을 강제로 변환하는 흔한 사례들이 나와 있습니다.:


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

    !!~array.indexOf( "a" );
    // true

    !!~array.indexOf( "b" );
    // true

    !!~array.indexOf( "c" );
    // true

    !!~array.indexOf( "d" );
    // false

    // 주의: 위의 구문들은 "과도하게 영리"한 방법이 아닌지 생각해 보아야 합니다
    // 다음 구문처럼 비교되는 indexOf의 리턴 값이 더 명확한 쪽이
    // 좋지 않을까요?

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4

    var num = 2.5;

    parseInt( num, 10 );

    // 위처럼 쓴 것은, 아래에 쓴 것과 같은 의미입니다.

    ~~num;

    num >> 0;

    num >>> 0;

    // 전부 2가 됩니다.


    // 하지만 음수는 다르게 취급되는것도 명심하셔야 합니다...
    var neg = -2.5;

    parseInt( neg, 10 );

    // 위처럼 쓴 것은, 아래에 쓴 것과 같은 의미입니다.

    ~~neg;

    neg >> 0;

    // 전부 -2가 됩니다.
    // 하지만...

    neg >>> 0;

    // 이경우엔 4294967294가 나옵니다.




    ```

4. <a name="cond">조건문으로 확인하는 코드</a>

    ```javascript

    // 4.1.1
    // 배열에 뭔가가 들어있는지 여부를 확인하려는 거라면,
    // 다음과 같이 코드를 작성하는 대신에:
    if ( array.length > 0 ) ...

    // 다음과 같이 작성하세요:
    if ( array.length ) ...


    // 4.1.2
    // 배열이 비어있다는 것만을 확인할 때에는,
    // 아래처럼 작성하지 마시고:
    if ( array.length === 0 ) ...

    // ...다음처럼 작성하세요:
    if ( !array.length ) ...


    // 4.1.3
    // 문자열이 비어있지 않다는 것을 확인할 때에는,
    // 다음처럼 작성하지 마시고:
    if ( string !== "" ) ...

    // ...다음과 같이 작성하세요:
    if ( string ) ...


    // 4.1.4
    // 문자열이 _비어있다는 것_을 확인만 하는 경우라면,
    // 다음처럼 작성하지 마시고:
    if ( string === "" ) ...

    // ...다음과 같이 작성해서, 거짓인지를 확인하세요. :
    if ( !string ) ...


    // 4.1.5
    // 참조 변수가 true인지 확인하려면,
    // 다음처럼 작성하지 마시고:
    if ( foo === true ) ...

    // ...그냥 아래처럼 써주세요. 기본 기능을 활용하면 됩니다:
    if ( foo ) ...


    // 4.1.6
    // 어떤 참조 변수가 false인지 판정할 때에는,
    // 다음처럼 작성하지 마시고:
    if ( foo === false ) ...

    // ...true인지를 확인하도록 부정(!)을 사용하세요.
    if ( !foo ) ...

    // ...주의하세요. 이렇게 제안하면 foo의 값이 0, “”, null, undefined, NaN인 경우에도 참을 반환할 겁니다.
    // foo가 불린값 false를 갖는지를 확인하는 경우라면, 아래와 같이 사용하세요.
    if ( foo === false ) ...


    // 4.1.7
    // 어떤 변수가 있다고 하죠. 이 변수의 값은 null이나 undefined일 수는 있지만 false나 "", 또는 0의 값은 가지지 않습니다. 이런 변수를 판정할 때에는,
    // 아래처럼 작성하지 마시고:
    if ( foo === null || foo === undefined ) ...

    // ...강제형변환되는 ==를 사용하세요. 다음과 같이요:
    if ( foo == null ) ...

    // 그리고 이 점을 기억하세요. == 를 사용하면, 판정하려는 변수의 값이 `null` 이나 `undefined` 일 때, 참을 반환할 것입니다.
    // 하지만 `false` 나 "" 나 0 값을 가질 때에는 거짓을 반환할 것입니다.
    null == undefined

    ```
    **항상** 최선의 결과를 내는 비교가 무엇인지 고민하세요. - 위에 것들은 다 가이드라인입니다, 교리같은건 아니죠.

    ```javascript

    // 4.2.1
    // 형변환 과 비교에 관한 메모

    `===` 가 `==` 보다 좋습니다. (느슨한 형 비교가 필요하지 않는 이상)

    === 는 형변환을 하지 않습니다. 무슨뜻인가 하면:

    "1" === 1;
    // false

    == 는 형변환을 합니다, 무슨 뜻인가 하면:

    "1" == 1;
    // true


    // 4.2.2
    // 불린값, 참(true)으로 간주되는 것, 거짓(false)으로 간주되는 것

    불린값: true, false

    참(true)으로 간주되는 것: "foo", 1

    거짓(false)으로 간주되는 것: "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">실용적인 스타일</a>

    ```javascript

    // 5.1.1
    // 실용적인 모듈

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // 이것은 불린 속성입니다
          bool: true,
          // 문자열 값
          string: "a string",
          // 배열 속성
          array: [ 1, 2, 3, 4 ],
          // 객체 속성
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // `data` 의 현재 값을 알아내고 반환합니다
            return data;
          },
          setData: function( value ) {
            // `data` 의 값을 설정하고 반환합니다
            return ( data = value );
          }
        };
      })();

      // 여기에 다른 내용이 들어갈 수도 있습니다

      // 전역 객체에 모듈을 노출시키세요.
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // 실용적인 생성자

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


      // `new`없이 생성자를 호출하려면, 이렇게 할 수 도 있습니다:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // 전역 개체에 생성자를 노출합니다
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">이름 짓기</a>


    A. 여러분은 컴파일러나 압축기(compressor)가 아닙니다. 그렇게 되려고 시도하지 마세요.

    다음은 이름을 심하게 안 좋게 지은 코드 작성 사례입니다:

    ```javascript

    // 6.A.1.1
    // 이름을 안 좋게 지은 코드 작성 사례

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    틀림없이 여러분은 이제까지 이렇게 코드를 작성했겠죠. - 이런 코드 작성 방식은 오늘부로 바뀌기를 바랍니다.

    아래에는 좀 더 사려깊게, 그리고 좀 더 논리적으로, 친절하게 이름을 짓는 방식이 제시되어 있습니다. (가독성이 더욱 높은 구조이고요):

    ```javascript

    // 6.A.2.1
    // 이름짓기가 더 잘된 코드 작성 예

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

    몇 가지 이름짓는 방법에 대한 조언 몇 가지:

    ```javascript

    // 6.A.3.1
    // strings의 이름 짓기

    `dog` 은 문자열입니다.


    // 6.A.3.2
    // 배열의 이름 짓기

    `dogs` 는 `dog` 문자열이 들어있는 배열입니다.


    // 6.A.3.3
    // 함수나 오브젝트(object), 객체(instance) 등의 이름 짓기

    camelCase; 함수와 변수를 선언할 때는 이렇게 이름지어 주세요.


    // 6.A.3.4
    // 생성자, prototypes, 기타 등등의 이름 짓는 법

    PascalCase; 생성자 함수의 이름은 이렇게 짓습니다.


    // 6.A.3.5
    // 정규표현식의 이름 짓는 법

    rDesc = //;


    // 6.A.3.6
    // 구글 Closure 라이브러리 스타일 가이드에서 발췌한 것

    functionNamesLikeThis;  // 함수는 이렇게 이름을 지으시고..
    variableNamesLikeThis;  // 변수는 이렇게 이름을 지으세요.
    ConstructorNamesLikeThis;  // 생성자는 이렇게 이름을 지으시고..
    EnumNamesLikeThis;  // Enum의 이름은 이렇게 지으세요.
    methodNamesLikeThis;  // 메서드의 이름은 이렇게 지으시고,
    SYMBOLIC_CONSTANTS_LIKE_THIS;  // symbolic 상수의 이름은 이렇게 지어주세요.



    ```

    B. `this` 다루기

    나중에 호출되는 `BoundFunction`을 정의 하기위해서 `call` 이나 `apply` 가 일반 적으로 쓰여지고 있긴 하지만, `.bind( this )` 같은 함수를 사용하는편이 좋습니다. 더 좋은 선택지가 없을 때에만 엘리어싱을 고려하세요.


    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // 비동기 스트림으로 열어서,
      // 지속적으로 불릴 것 입니다.
      stream.read( opts.path, function( data ) {

        // 이 인스턴스의 현재 값을
        // 데이터 스트림의 최신값으로 업데이트
        this.value = data;

      }.bind(this) );

      // 이 Device 인스턴스에서의 이벤트 발생 빈도를 조절
      setInterval(function() {

        // 조절된 이벤트를 발생
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // EventEmitter를 구현하는 척만 했어요. ;)

    ```

    이런게 불가능할 경우를 위해, 많은 현대적인 자바스크립트 라이브러리들이 `.bind` 같은 함수를 가지고 있습니다.


    ```javascript
    // 6.B.2

    // lodash/underscore 의 _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // dojo.hitch
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

    최후의 수단으로, `this` 의 알리아스를 `self`로 만드세요. 이 방법은 버그가 매우 발생하기 쉬우므로 가능한한 피해야 합니다.

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


    C. `thisArg` 사용하기

    ES 5.1 의 내부 프로토타입의 함수는 `thisArg`라는 특별한 시그니쳐를 가지고 있고 가능한 한 사용해야합니다

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| 는 이제 `obj`에 대한 참조

      console.log( this[ key ] );

    }, obj ); // <-- 이 최후의 인수가 `thisArg`

    // Prints...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` 는 `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter` 같은 것과 같이 쓸 수 있습니다.

7. <a name="misc">자잘한 것들</a>

    이번 섹션에서는 몇 가지 아이디어와 개념에 대해서 다룰 겁니다. 아이디어와 개념의 목적은 자바스크립트로 프로그래밍하는 데 있어 좀더 나은 방법을 찾을 수 있도록 기존에 사용하던 관행에 의문을 제기하게 만드는 것입니다.

    A. `switch` 사용을 피해야 합니다. 현대의 방법론에서는, switch문이 들어간 함수를 블랙리스트에 올릴 겁니다.

    파이어폭스와 크롬 최신 버전에서 `switch` 구문의 실행에 관한 눈부신 발전이 이루어진 듯 합니다.
    http://jsperf.com/switch-vs-object-literal-vs-module

    개선된 것들 중에 주목할 만한 것은 이곳에서도 볼 수 있습니다:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // switch 구문을 사용한 코드 작성 예

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // 기본적으로 수행할 것
        break;
    }

    // 7.A.1.2
    // 객체 리터럴(object lieteral)이나 모듈을 사용하여 접근하는 방식이 더 좋습니다:

    var switchObj = {
      alpha: function() {
        // 구문들
        // 반환문
      },
      beta: function() {
        // 구문들
        // 반환문
      },
      _default: function() {
        // 구문들
        // 반환문
      }
    };

    var switchModule = (function () {
      return {
        alpha: function() {
          // 구문들
          // 반환문
        },
        beta: function() {
          // 구문들
          // 반환문
        },
        _default: function() {
          // 구문들
          // 반환문
        }
      };
    })();


    // 7.A.1.3
    // `foo`가 `switchObj` 또는 `switchModule`의 속성이라고 할 때, 아래 메서드처럼 실행합니다...

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

    ( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

    // `foo` 의 값을 알고 있고 확신한다면
    // 실행만 남겨 둔 채 OR 체크를 생략할 수도 있습니다:

    switchObj[ foo ]( args );

    switchModule[ foo ]( args );


    // 이 패턴은 코드의 재사용성도 높여줘요.

    ```

    B. 값을 일찍 반환하면 코드의 가독성이 높아져요. 성능 차이는 무시할 정도밖에 안돼죠.

    ```javascript

    // 7.B.1.1
    // 안좋은 예:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // 좋은 예:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">네이티브 & 호스트 객체</a>

    기본적으로 중요한 것은 이겁니다:

    ### 바보같은 짓은 하지마세요. 다 괜찮을 겁니다.

    이 개념에 대해 좀 더 알고 싶으시면, 다음 프리젠테이션을 보세요:

    #### “Everything is Permitted: Extending Built-ins(모든 게 다 가능해진, 내장기능 확장)” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542

9. <a name="comments">주석 달기</a>
  * JSDoc 스타일이 좋아요 (Closure Compiler type hints++)
  * 주제를 가진 코드위에는 한 줄로 주석을 달아요.
  * 보통은 여러줄로 주석을 다는게 좋고요.
  * 코드의 맨 마지막 줄에 주석을 다는 것은 금물이에요!


10. <a name="language">한 언어로 작성하기</a>

    프로그램은 유지보수 하는 사람들에 의해 가급적 하나의 언어(영어이든 아니든 무슨 언어로든 간에 - 역자 주)로 쓰이는 것이 좋습니다.

## 부록

### 쉼표를 맨 앞에 쓰는 것에 대하여.

이 문서를 기본 스타일 가이드로 인용하는 모든 프로젝트는 달리 명시하지 않는 한, 쉼표를 맨 앞에 쓰는 코드 포맷은 허락되지 않습니다.
