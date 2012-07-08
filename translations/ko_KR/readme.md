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
* 개발자영어(EngForDev) [engfordev](http://www.opentutorials.org/course/167/1363) - 홍환민(Hwan Min Hong) / 권민택(MinTaek Kwon) [@leoinsight](http://twitter.com/leoinsight) /
심태원(Tw Shim) [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino) /
김나솔(Nassol Kim) [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol) /
박준태(Juntai Park) [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun) /
심민규 / 원강민 / 유정협(Justin Yoo) [@justinchronicle](http://twitter.com/justinchronicle) /이대엽
* Evgeny Mandrikov [@\_godin\_](http://twitter.com/_godin_), [github](https://github.com/Godin)


## 코드 기반에 있는 모든 코드는 마치 한 사람이 작성한 것처럼 보여야 합니다. 많은 사람이 코드 작성에 참여했더라도 말이죠.

### 제가 원저자인 프로젝트의 코드를 작성할 때는 몇 가지 원칙을 따르는데요, 아래의 목록에 그 원칙들을 나열하였습니다. 이 프로젝트의 코드작성에 참여할 때에는 다음의 가이드라인을 따라야 합니다.

### 다른 사람들에게 제 코드 작성 스타일을 따르라고 강요하려는 의도는 아닙니다. 이미 준수하는 코드작성 스타일이 있다면, 그것을 따라야 하겠지요.

> ### "Arguments over style are pointless. There should be a style guide, and you should follow it"
>_Rebecca_ _Murphey_

&nbsp;


> "성공적인 프로젝트의 멋진 일원이 되기 위해서는 여러분 마음대로 코드를 작성하는 것이 나쁜 생각™임을 깨닫는 것이지요. 수천만 사람들이 여러분의 코드를 사용한다면, 가장 명확하게 코딩해야 합니다. 언어 명세가 허용하는 한 가장 똑똑한 코드를 만들겠다는 당신의 개인적인 선호에 따라서가 아니라"
>_Idan_ _Gazit_

## 번역

* [독일어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/de_DE)
* [프랑스어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [스페인어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [포르투칼-브라질](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [한국어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [日本語](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [이탈리아어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/it_IT)
* [러시아어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)
* [루마니아어](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ro_RO)
* [简体中文](https://github.com/rwldrn/idiomatic.js/tree/master/translations/zh_CN)

## 관련은 없지만, 중요한 자료:

### 코드 품질: 멋진 툴들, 리소스 & 참고자료

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)


### 똑똑해지기

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

프로젝트에는 unit, reference, implementation이나 기능에 관한 테스트 부분이 _들어가 있어야_ 합니다. 시범 데모인 DO NOT QUALIFY를 사용해서 테스트하세요. 아래에는 테스트를 하는 프레임워크의 목록을 나열해 두었습니다. 이 중에 어느 하나를 더욱 추천하는 것은 아닙니다.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)


## 목차

 * [화이트스페이스](#whitespace)
 * [구문(Syntax)을 아름답게 작성하기](#spacing)
 * [데이터형을 확인하기(Type Checking) (Courtesy jQuery Core Style Guidelines)](#type)
 * [조건을 판정하기(Conditional Evaluation)](#cond)
 * [실용적인 스타일](#practical)
 * [이름을 짓는 방법](#naming)
 * [자잘한 것들](#misc)
 * [네이티브 & 호스트 객체](#native)
 * [주석 달기](#comments)
 * [One Language Code](#language)


## 자연스러운 스타일에 관한 선언문


1. <a name="whitespace">화이트 스페이스</a>

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
  // var statements should always be in the beginning of their respective scope (function).
  // Same goes for const and let from ECMAScript 6.

  // Bad
  function foo() {

    // some statements here

    var bar = "",
      qux;
  }

  // Good
  function foo() {
    var bar = "",
      qux;

    // all statements after the variables declarations.
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

  2.A-2.C섹션에서는 우선 공백을 사용하는 규칙을 제시하고 있습니다. 공백을 사용하는 원칙은 단순하면서도 우선순위가 높습니다. 바로 일관성이에요.
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

  E. Quotes

  Whether you prefer single or double shouldn't matter, there is no difference in how JavaScript parses them. What **ABSOLUTELY MUST** be enforced is consistency. **Never mix quotes in the same project. Pick one style and stick with it.**


  F. 각 줄의 끝부분, 빈 줄

  여백이 있으면 바뀐 내용들을 읽을 수가 없게 됩니다. 또한 diff툴이 제대로 작동하지 않습니다.
줄의 끝에 있는 여백이나 빈 줄에 들어있는 ‘커밋하기 전에 공백을 자동으로 지워주는 훅’(pre-commit hook)을 사용해 보세요.

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

  // smart coercion을 1진법의 +나 - 단항 연산자와 함께 사용함으로써 이슈를 선점할 수 있다:

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


  var num = 2.5;

  parseInt( num, 10 );

  // 위처럼 쓴 것은, 아래에 쓴 것과 같은 의미입니다.

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
  ALWAYS evaluate for the best, most accurate result - the above is a guideline, not a dogma.

  ```javascript

  // 4.2.1
  // Type coercion and evaluation notes

  Prefer `===` over `==` (unless the case requires loose type evaluation)

  === does not coerce type, which means that:

  "1" === 1;
  // false

  == does coerce type, which means that:

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


  A. 여러분은 컴파일러나 압축기(compressor)가 아닙니다. 그런게 되려고 노력하실 필요 없습니다.

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

  B. Faces of `this`

  Beyond the generally well known use cases of `call` and `apply`, always prefer `.bind( this )` or a functional equivalent, for creating `BoundFunction` definitions for later invocation. Only resort to aliasing when no preferable option is available.

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

  When unavailable, functional equivalents to `.bind` exist in many modern JavaScript libraries.


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

  As a last resort, create an alias to `this` using `self` as an Identifier. This is extremely bug prone and should be avoided whenever possible.

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

  Several prototype methods of ES 5.1 built-ins come with a special `thisArg` signature, which should be used whenever possible

  ```javascript

  // 6.C.1

  var obj;

  obj = { f: "foo", b: "bar", q: "qux" };

  Object.keys( obj ).forEach(function( key ) {

    // |this| now refers to `obj`

    console.log( this[ key ] );

  }, obj ); // <-- the last arg is `thisArg`

  // Prints...

  // "foo"
  // "bar"
  // "qux"

  ```

  `thisArg` can be used with `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

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


10. <a name="language">One Language Code</a>

  프로그램은 유지보수 하는 사람들에 의해 가급적 하나의 언어(영어이든 아니든 무슨 언어로든 간에 - 역자 주)로 쓰이는 것이 좋습니다.

## 부록

### 쉼표를 맨 앞에 쓰는 것에 대하여.

이 문서를 기본 스타일 가이드로 인용하는 모든 프로젝트는 달리 명시하지 않는 한, 쉼표를 맨 앞에 쓰는 코드 포맷은 허락되지 않습니다.
