# जावास्क्रिप्ट लेखन के स्थिर एवं सिद्धप्रयोग  सिद्धांत 


## यह एक जीवित आलेख है और कोड को उत्तमतर बनाने हेतु नए विचारों का सर्वदा स्वागत है | योगदान: fork, clone, branch, commit, push, pull request.

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwaldron)
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
* EngForDev [engfordev](https://opentutorials.org/course/245/1788) - Hwan Min Hong / MinTaek Kwon [@leoinsight](http://twitter.com/leoinsight) / Tw Shim [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino) / Nassol Kim [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol) / Juntai Park [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun) / Minkyu Shim / Gangmin Won / Justin Yoo [@justinchronicle](http://twitter.com/justinchronicle) / Daeyup Lee
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
* Hao-Wei Jeng [@l0ckys](http://twitter.com/l0ckys), [github](https://github.com/lockys)  
* Richard Gibson [@gibson042](http://twitter.com/gibson042), [github](https://github.com/gibson042)  
* Fesuy [github](https://github.com/fesuydev)  
* Stephane Moreau [github](https://github.com/stmoreau)  
* Akshat Joshi [@akshat_joshi](http://twitter.com/akshat_joshi), [github](https://https://github.com/akshatjoshii)


## किसी भी कोड-बेस का कोड ऐसा दिखना चाहिए जैसे एक ही व्यक्ति ने मानो पूरा कोड लिखा हो, भले ही कितने लोगों का उसमें योगदान रहा हो |

### निम्नलिखित सूची उन तरीकों को रेखांकित करती है जो मैं अपने कोड मे प्रयोग करता हूँ, जिनका मैं वास्तविक लेखक हूँ ; मेरे द्वारा रचित प्रोजेक्ट्स में दिए गए योगदानों को इन दिशा निर्देशों का पालन करना चाहिए |

### मैं अपनी शैली और उसकी प्राथमिकताओं को दूसरे लोगों के कोड या उनके प्रोजेक्ट पर थोपने की नीयत नहीं रखता हूँ ; यदि कोई समान शैली अस्तित्व रखती है, तो उसका आदर होना चाहिए |


> ### "शैली पर तर्क व्यर्थ है। एक स्टाइल गाइड होनी चाहिए, और आपको इसका पालन करना चाहिए"
>_Rebecca_ _Murphey_

&nbsp;

> ### "स्वयं के लिए कोड करना गलत योजना है, यह अनुभूति एक सफल परियोजना (प्रोजेक्ट) के एक अच्छे प्रबंधक का हिस्सा होनी चाहिए | यदि हजारों लोग आपके कोड का उपयोग कर रहे हैं, तब आपको अधिकतम स्पष्टता के साथ अपना कोड लिखना है, न कि अपनी व्यक्तिगत प्राथमिकता कि कैसे अपने spec के भीतर चालाक हों |"
>_Idan_ _Gazit_


## अनुवाद

* [ORIGINAL](https://github.com/rwldrn/idiomatic.js/)
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
* [Serbian - latin alphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/sr_SR)
* [繁體中文](https://github.com/rwaldron/idiomatic.js/tree/master/translations/zh_TW)  
* [Indonesian](https://github.com/rwaldron/idiomatic.js/tree/master/translations/id_ID)  
* [Greek](https://github.com/rwaldron/idiomatic.js/tree/master/translations/gr_GR)
* [Hindi](https://github.com/rwaldron/idiomatic.js/tree/master/translations/hi_HI)  

## महत्वपूर्ण, नॉन-इडीओमैटिक स्टफ:

### कोड गुणवत्ता के उपकरण, संसाधन और संदर्भ

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/es-analysis/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [Codepen](http://codepen.io/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)
 * [eslint](http://eslint.org/)
 * [jscs](https://www.npmjs.org/package/jscs)
 * [jscodesniffer](https://www.npmjs.org/package/jscodesniffer)
 * [Editorconfig](http://editorconfig.org/)
 * [Hound](https://houndci.com/)

## स्मार्ट हो जाओ

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

निम्नलिखित को 1) अपूर्ण, और 2) *आवश्यक पठन*  मानना चाहिए | मैं निम्नोक्त लेखकों की शैली से सदैव सहमत नहीं होता हूँ, किन्तु एक चीज निश्चित है: उनमें स्थिरता / निरन्तरता (consistent) हैं | इसके अतिरिक्त, इनका भाषा पर अधिकार है |

 * [Baseline For Front End Developers: 2015](http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)




### बिल्ड एवं डिप्लॉयमेंट प्रोसेस

प्रोजेक्ट्स में हमेशा कुछ सामान्य साधनों को शामिल करने का प्रयास करना चाहिए जिस से उत्पादन के उपयोग हेतु स्त्रोत को लिन्ट, टेस्ट और कंप्रेस किया जा सके |
इस कार्य के लिए, Ben Alman की [grunt](https://github.com/gruntjs/grunt) अद्वितीय है एवं आधिकारिक रूप से इस रेपोज़ीटरी की "kits/" डाइरेक्टरी को रिप्लेस कर चुकी है |




### परीक्षण के साधन (टेस्ट फेसेलिटी)

प्रोजेक्ट में किसी न किसी रूप से यूनिट, रेफरेंस, इम्प्लिमेन्टेशन, अथवा फंगक्शनल टेस्टिंग _अवश्य_  शामिल होनी चाहिए | उपयोगिता के प्रदर्शन हेतु डेमो का प्रयोग "टेस्ट" के मापदंड को पार नहीं करता | नीचे टेस्ट फ्रेमवर्क की सूची दी गई है, जिनमें किसी का भी दूसरे की तुलना में कोई समर्थन नहीं किया गया है |

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)
 * [Tape](https://github.com/substack/tape)
 * [Jest](https://facebook.github.io/jest/)

## विषयसूची

 * [व्हाइटस्पेस](#whitespace)
 * [ब्यूटीफुल सिंटेक्स](#spacing)
 * [टाइप चेकिंग (सौजन्य jQuery कोर स्टाइल दिशानिर्देश)](#type)
 * [कन्डिशनल ईवैल्यूऐशन](#cond)
 * [प्रैक्टिकल स्टाइल](#practical)
 * [नामकरण](#naming)
 * [विविध](#misc)
 * [नेटिव एवं होस्ट ऑब्जेक्ट्स](#native)
 * [टिप्पणी](#comments)
 * [एक भाषीय कोड](#language)



------------------------------------------------


## प्रस्तावना

निम्नलिखित खंड आधुनिक जावास्क्रिप्ट के विकास के लिए एक _उचित_ शैली की रूपरेखा तैयार करते हैं और इसका अर्थ ये नहीं है कि ये ब्रह्मवाक्य हैं | सबसे महत्वपूर्ण है **कोड शैली मे स्थिरता का कानून** | जो भी कोड शैली आप अपने प्रोजेक्ट मे प्रयोग करते हैं, वो उस प्रोजेक्ट का कानून है | इस आलेख का लिंक आपके प्रोजेक्ट की कोड शैली की स्थिरता, पठनीयता एवं रख-रखाव की प्रतिबद्धता का वचन है |






## सिद्धप्रयोग शैली का घोषणापत्र


1. <a name="whitespace">व्हाइटस्पेस</a>
  - स्पेस और टैब कभी न मिलाएं |
  - प्रोजेक्ट शुरू करते समय, कोई भी कोड लिखने से पहले, सॉफ्ट इंडेंट्स (spaces) या वास्तविक टैब के बीच चयन करें, इसको **कानून** मानें |
      - पठनीयता के लिए, मैं हमेशा आपके एडिटर के इंडेंट साइज को दो अक्षरों में सेट करने की सलाह देता हूं &mdash; इसका अर्थ है दो स्पेस (spaces) या दो स्पेस (spaces) एक वास्तविक टैब का प्रतिनिधित्व कर रही हों |
  - यदि आपका एडिटर इसका सपोर्ट करता है, तो हमेशा "शो इनविसिबल्स (show invisibles)" सेटिंग के साथ काम करें। इस अभ्यास के लाभ हैं:
      - बाध्य स्थिरता 
      - लाइन के अंत से व्हाइटस्पेस का लुप्त होना 
      - ब्लैंक लाइन व्हाइटस्पेस का लुप्त होना
      - कामिट (commits) और डिफ़ (diffs) जो पढ़ने मे सरल हों |
  - जब भी संभव हो इसका प्रयोग करें [Editorconfig](http://editorconfig.org/) |  ये लगभग सभी आई-डी-ई को सपोर्ट करता है और ज्यादातर व्हाइटस्पेस सेटिंग्स को हैन्डल करता है |


2. <a name="spacing">ब्यूटीफुल सिंटेक्स</a>

    A. पैरेंस, ब्रेसेस, लाइन ब्रेक्स (Parens, Braces, Linebreaks)

    ```javascript

    // if/else/for/while/try में हमेशा स्पेस और ब्रेसेस होंगी और एक से अधिक लाइन मे इनका विस्तार होगा |
    // इस से पठनीयता को प्रोत्साहन मिलता है |

    // 2.A.1.1
    // अत्यंत बुरे सिन्टैक्स के उदाहरण

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // पठनीयता के लिए व्हाइटस्पेस का प्रयोग 

    if ( condition ) {
      // कोड वाक्य
    }

    while ( condition ) {
      // कोड वाक्य
    }

    for ( var i = 0; i < 100; i++ ) {
      // कोड वाक्य
    }

    // और अधिक उत्तम:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // कोड वाक्य
    }

    // अथवा...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // कोड वाक्य
    }

    var prop;

    for ( prop in object ) {
      // कोड वाक्य
    }


    if ( true ) {
      // कोड वाक्य
    } else {
      // कोड वाक्य
    }
    ```


    B. असाइनमेंट, डेक्लरैशन्स, फंगक्शन्स ( नैम्ड, इक्स्प्रेशन, कन्स्ट्रक्टर )

    ```javascript

    // 2.B.1.1
    // वेरीअबल्स
    var foo = "bar",
      num = 1,
      undef;

    // शाब्दिक अधिसूचनाएँ (लिटरल नोटैशन्स):
    var array = [],
      object = {};


    // 2.B.1.2
    // एक `var` का ही प्रत्येक स्कोप (फंगक्शन) मे प्रयोग या एक `var` का प्रत्येक वेरीअबल के लिए प्रयोग,
    // पठनीयता को बढ़ाता है और डेक्लरैशन्स की सूची को अव्यवस्था से मुक्त रखता है |
    // एक `var` प्रति वेरीअबल के प्रयोग से आप अपने वर्ज़न का अधिक नियंत्रण ले सकते हैं
    // और इस से कोड की लाइंस को पुनः व्यवस्थित करना सरल हो जाता है | 
    // एक `var` प्रति स्कोप से अनडिक्लेर्ड वेरीअबल को ढूंढना सरल हो जाता है
    // जो इमप्लाइड ग्लोबल बन ने की संभावना रखते हैं |
    // दोनों को मिक्स न करें, और जो बेहतर हो उसका उपयोग करें |

    // खराब, दोष पूर्ण 
    var foo = "",
      bar = "";
    var qux;

    // उत्तम
    var foo = "";
    var bar = "";
    var qux;

    // अथवा..
    var foo = "",
      bar = "",
      qux;

    // अथवा..
    var // टिप्पणी
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var कथन हमेशा प्रत्येक स्कोप (फ़ंक्शन) की शुरुआत में होना चाहिए ।


    // खराब, दोष पूर्ण
    function foo() {

      // कोड वाक्य

      var bar = "",
        qux;
    }

    // उत्तम
    function foo() {
      var bar = "",
        qux;

      // वेरीअबल्स घोषणा (डेक्लरैशन्स) के बाद सभी विवरण लिखें |
    }

    // 2.B.1.4
    // ECMAScript 6 के const और let के लिए भी यही मान्य  है ।

    // खराब, दोष पूर्ण
    function foo() {
      let foo,
        bar;
      if ( condition ) {
        bar = "";
        // कोड वाक्य
      }
    }
    // उत्तम
    function foo() {
      let foo;
      if ( condition ) {
        let bar = "";
        // कोड वाक्य
      }
    }
    ```

    ```javascript

    // 2.B.2.1
    // नामित फंक्शन की घोषणा
    function foo( arg1, argN ) {

    }

    // उपयोग
    foo( arg1, argN );


    // 2.B.2.2
    // नामित फंक्शन की घोषणा
    function square( number ) {
      return number * number;
    }

    // उपयोग
    square( 10 );

    // कृतिम कन्टिन्यूऐशन पासिंग स्टाइल
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // कॉलबैक स्टेटमेंट्स
    });


    // 2.B.2.3
    // फंगक्शन इक्स्प्रेशन
    var square = function( number ) {
      // कोई महत्वपूर्ण या संबंधित चीज़ रिटर्न करता है
      return number * number;
    };

    // फंगक्शन इक्स्प्रेशन आइडेंटिफ़ायर के साथ |
    // इस शैली से यह फायदा होता है कि इसके द्वारा फंगक्शन स्वयं को ही कॉल कर सकता है 
    // एवं स्टैक के चिन्हों मे उसकी पहचान होती है |
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number - 1 );
    };


    // 2.B.2.4
    // कन्स्ट्रक्टर की घोषणा (डेक्लरैशन)
    function FooBar( options ) {

      this.options = options;
    }

    // उपयोग
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. अपवाद, मामूली विषयांतरकरण

    ```javascript

    // 2.C.1.1
    // फंगक्शन के साथ कॉलबैक
    foo(function() {
      // ध्यान दें कि निष्पादित फंगक्शन कॉल के पहले पैरं 
      // और "फंगक्शन" शब्द के बीच में कोई रिक्त स्थान (स्पेस) नहीं है
    });

    // फंगक्शन जो एरे स्वीकारता हो, में कोई रिक्त स्थान नहीं
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // फ़ंक्शन जो ऑब्जेक्ट स्वीकारता हो, में कोई रिक्त स्थान नहीं
    foo({
      a: "alpha",
      b: "beta"
    });

    // एक ही स्ट्रिंग लिटरल आरग्यूमेंट पास होने में कोई रिक्त स्थान नहीं
    foo("bar");

    // कोष्ठकों के अंदर एक्सप्रेशन में कोई रिक्त स्थान नहीं
    if ( !("foo" in obj) ) {
      obj = (obj.bar || defaults).baz;
    }

    ```

    D. स्थिरता सदैव जीतती है

    खंड 2.A-2.C, व्हाइटस्पेस नियमों को अनुग्रह एक सरल, उच्च उद्देश्य के लिए किया गया है जो है: स्थिरता |
    यह ध्यान रखना महत्वपूर्ण है कि "आंतरिक व्हाइटस्पेस" जैसी प्राथमिकताओं को वैकल्पिक माना जाना चाहिए, लेकिन आपके प्रोजेक्ट के पूरे स्रोत में केवल एक शैली ही व्याप्त राहनी चाहिए।

    ```javascript

    // 2.D.1.1

    if (condition) {
      // कोड वाक्य
    }

    while (condition) {
      // कोड वाक्य
    }

    for (var i = 0; i < 100; i++) {
      // कोड वाक्य
    }

    if (true) {
      // कोड वाक्य
    } else {
      // कोड वाक्य
    }

    ```

    E. क्वोट्स

    चाहे आप सिंगल या डबल पसंद करते हैं या नहीं, इससे कोई फर्क नहीं पड़ता, दोनों को जावास्क्रिप्ट कैसे पार्स करता है उसमे तनिक भेद नहीं है | जो  **अत्यंत आवश्यक** रूप से लागू होना चाहिए वह है स्थिरता (अथवा निरन्तरता). **क्वोट्स को एक ही प्रोजेक्ट मे कदापि मिक्स न करें | एक शैली चुनें और उस पर अड़िग रहें |**

    F. लाइनों और खाली लाइनों का अंत

    व्हाइटस्पेस डिफ को बर्बाद कर सकता है और पढ़ने के लिए बदलाव असंभव बना सकता है। एक पूर्व-प्रतिबद्ध हुक को शामिल करने पर विचार करें जो अंत में लाइन के अंत मे आने वाले व्हाइटस्पेस और खाली लाइनों मे उपस्थित रिक्त स्थानों (स्पेसेस) को स्वचालित रूप से हटा देता है।

3. <a name="type">टाइप चेकिंग (जेक्वेरी कोर स्टाइल दिशानिर्देश के सौजन्य से)</a>

    A. वास्तविक टाइप्स

    स्ट्रिंग:

        typeof variable === "string"

    नंबर:

        typeof variable === "number"

    बूलियन:

        typeof variable === "boolean"

    ऑब्जेक्ट:

        typeof variable === "object"

    एरे:

        Array.isArray( arrayLikeObject )
        (जब भी संभव हो)

    नोड:

        elem.nodeType === 1

    नल:

        variable === null

    नल or अंडीफाइंड:

        variable == null

    अंडीफाइंड:

      ग्लोबल वेरीअबल:

        typeof variable === "undefined"

      लोकल वेरीअबल:

        variable === undefined

      प्रॉपर्टीज़:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. कोअर्सड (Coerced) टाइप्स

    निम्नलिखित के निहितार्थों पर विचार करें...

    इस एचटीएमएल को देखते हुए:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` को `0` से घोषित किया गया है  और उसका टाइप है `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // आपके कोड मे कहीं आगे जा के, आपको आवश्यकता होती है `foo`
    // को अपडेट करने की, एक नई वैल्यू से जो कि एक इनपुट एलीमेंट से प्राप्त हुई है

    foo = document.getElementById("foo-input").value;

    // यदि अब आप टेस्ट करें `typeof foo`, तो परिणाम होगा `string`
    // इसका अर्थ यह है कि यदि आपके कोड मे ये लॉजिक था जिसमे 'foo का कुछ इस तरह तरह परीक्षण किया गया था:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` काभी भी नहीं किया चलेगा, भले ही 'foo' की वैल्यू "1" है


    // 3.B.1.2

    // आप समस्याओं को दूर कर सकते हैं यूनरी + अथवा - ऑपरेटर्स के स्मार्ट कोअर्सन के प्रयोग से:

    foo = +document.getElementById("foo-input").value;
    //    ^ यूनरी + ऑपरेटर दाईं तरफ के आपरैन्ड को नंबर मे परिवर्तित कर देगा

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` अब क्रियान्वित होगा
    ```

    यहाँ कोअर्सन के कुछ सामान्य उद्धरण हैं


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

    // ध्यान दें कि उपरोक्त को "अनावश्यक रूप से चतुर" माना जाना चाहिए
    // indexOf की रिटर्ण्ड वैल्यू के कम्पैरिसन के लिए स्पष्ट तरीकों का ही प्रयोग उचित है
    // जैसे:
    
    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // यह निम्न के ही समान है

    ~~num;

    num >> 0;

    num >>> 0;

    // सभी का परिणाम होगा 2


    // हालांकि, ध्यान रखें कि नेगटिव संख्याओं को अलग तरह से माना जाएगा...

    var neg = -2.5;

    parseInt( neg, 10 );

    // यह निम्न के ही समान है...

    ~~neg;

    neg >> 0;

    // सभी का परिणाम होगा -2
    // हालांकि...

    neg >>> 0;

    // परिणाम होगा 4294967294




    ```



4. <a name="cond">कन्डिशनल ईवैल्यूऐशन</a>

    ```javascript

    // 4.1.1
    // जब केवल यह मूल्यांकन करना कि किसी एरे में कुछ लंबाई है,
    // बजाए इसके:
    if ( array.length > 0 ) ...

    // ...इस प्रकार से सत्यता का मूल्यांकन करें:
    if ( array.length ) ...


    // 4.1.2
    // जब केवल यह मूल्यांकन करना कि किसी एरे खाली है,,
    // तो बजाए इसके:
    if ( array.length === 0 ) ...

    // ...इस प्रकार से सत्यता का मूल्यांकन करें:
    if ( !array.length ) ...


    // 4.1.3
    // जब केवल यह मूल्यांकन करना कि स्ट्रिंग रिक्त नहीं है,
    // तो बजाए इसके:
    if ( string !== "" ) ...

    // ...इस प्रकार से सत्यता का मूल्यांकन करें:
    if ( string ) ...


    // 4.1.4
    // जब केवल यह मूल्यांकन करना कि स्ट्रिंग _रिक्त_ है,,
    // तो बजाए इसके:
    if ( string === "" ) ...

    // ...इस प्रकार से असत्यता का मूल्यांकन करें:
    if ( !string ) ...


    // 4.1.5
    // जब केवल मूल्यांकन करना है कि एक रेफेरेंस सत्य है,
    // तो बजाए इसके:
    if ( foo === true ) ...

    // ...इस तरह मूल्यांकन करें जैसा कि आप देख सकते हैं, अंतर्निहित क्षमताओं का लाभ उठाएं:
    if ( foo ) ...


    // 4.1.6
    // जब  मूल्यांकन करना है कि एक रेफेरेंस असत्य है,
    // तो बजाए इसके:
    if ( foo === false ) ...

    // ...सही मूल्यांकन के लिए निषेध (निगेशन) का उपयोग करें
    if ( !foo ) ...

    // ...सावधान रहें, यह भी मैच होगा: 0, "", null, undefined, NaN
    // यदि बूलियन फाल्स के लिए परीक्षण करना _अवश्यंभावी_ हो ही गया है, तो उपगयोग करें:
    if ( foo === false ) ...


    // 4.1.7
    // जब रेफ का मूल्यांकन करना हो जो null या undefined हो सकता है, लेकिन false, "" या 0 नहीं
    // तो बजाए इसके:
    if ( foo === null || foo === undefined ) ...

    // ...टाइप कोअर्सन == का लाभ उठायें, जैसे:
    if ( foo == null ) ...

    // याद रखें, == का उपयोग `null` को दोनों `null` एवं `undefined`से मैच करेगा
    // किन्तु `false`, "" या 0 से नहीं
    null == undefined

    ```
    सदैव उत्तम और सटीक परिणामों के लिए मूल्यांकन करें - उपरोक्त दिशानिर्देश हैं, हठधर्मिता नहीं।

    ```javascript

    // 4.2.1
    // टाईप कोअर्सन और ईवैल्यूऐशन के नोट्स

    // `===` को `==` पर वरीयता दें (जब तक कि लूज टाइप ईवैल्यूऐशन की अनिवार्यता नहीं है)

    // === यह कोअर्स टाइप नहीं है, अर्थात:

    "1" === 1;
    // false

    // == यह कोअर्स टाइप है, अर्थात:

    "1" == 1;
    // true


    // 4.2.2
    // बूलियन्स, ट्रूथीज़ एवं फाल्सीज़

    // बूलियन्स:
    true, false

    // ट्रूथी:
    "foo", 1

    // फाल्सी:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical"> प्रैक्टिकल स्टाइल (व्यावहारिक शैली)</a>

    ```javascript

    // 5.1.1
    // एक व्यावहारिक मॉड्यूल

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // यह बूलियन प्रॉपर्टी है
          bool: true,
          // कुछ स्ट्रिंग वैल्यू
          string: "a string",
          // एक एरे प्रॉपर्टी
          array: [ 1, 2, 3, 4 ],
          // एक ऑब्जेक्ट प्रॉपर्टी
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // `data` की वर्तमान वैल्यू लेता है
            return data;
          },
          setData: function( value ) {
            // `data` में वैल्यू डालता यही और उसको और उसको लौटाता (रिटर्न करता) है
            return ( data = value );
          }
        };
      })();

      // अन्यादि चीजें जो हो सकती हैं

      // मॉड्यूल को ग्लोबल ऑब्जेक्ट के लिए दृश्यमान बनाने के लिए
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // एक प्रैक्टिकल कंस्ट्रक्टर

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


      // `new` का उपयोग किए बिना कंस्ट्रक्टर को कॉल करने के लिए:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // कंस्ट्रक्टर को ग्लोबल ऑब्जेक्ट के लिए दृश्यमान बनाने के लिए
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">नामकरण</a>



    A. आप एक मानव कोड कंपाइलर/कंप्रेसर नहीं हैं, इसलिए वैसा बनने का प्रयत्न भी न करें |

    निम्नलिखित कोड सदोष (दोषपूर्ण) नामकरण का एक उदाहरण है::

    ```javascript

    // 6.A.1.1
    // खराब नामों वाले कोड का उदाहरण

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    बिना किसी संदेह के, आपने इस तरह से कोड लिखा है - उम्मीद है कि यह आज समाप्त होता है।

    यहाँ भी वही लॉजिक है, किन्तु अधिक अनुकूल और विचारशील नामकरण के साथ (और एक पठनीय संरचना के साथ):

    ```javascript

    // 6.A.2.1
    // बेहतर नामों के साथ कोड का उदाहरण

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

    कुछ अतिरिक्त नामकरण के संकेत:

    ```javascript

    // 6.A.3.1
    // स्ट्रिंगस का नामकरण

    `dog` एक स्ट्रिंग है 


    // 6.A.3.2
    // एरे का नामकरण

    `dogs` एक एरे हैं `dog` स्ट्रिंगस की


    // 6.A.3.3
    // फंक्शन, ऑब्जेक्ट्स, इंस्टेंसेज़, आदि का नामकरण

    camelCase; function एवं var डेक्लरैशन (declarations)


    // 6.A.3.4
    // कन्स्ट्रक्टर, प्रोटोटाइप, आदि का नामकरण

    PascalCase; कन्स्ट्रक्टर फंक्शन


    // 6.A.3.5
    // रेगुलर एक्सप्रेशन का नामकरण

    rDesc = //;


    // 6.A.3.6
    // गूगल क्लोजर लाइब्रेरी स्टाइल गाइड से

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. `this` के रूप

    `call` एवं `apply`के प्रसिद्ध उपयोगों के अतिरिक्त, सदैव `.bind( this )` अथवा उसके फंक्शनल समकक्षों को प्राथमिकता दें। यदि आपके पास कोई अन्य विकल्प नहीं है तो आप उपनाम बना सकते हैं ।

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // यह async स्ट्रीम खोलता है
      // और लगातार कॉल होता है
      stream.read( opts.path, function( data ) {

        // यह इंस्टेंस की वर्तमान वैल्यू को 
        // डेटा स्ट्रीम की नवीन वैल्यू के साथ अपडेट करेगा
        this.value = data;

      }.bind(this) );

      // Device इंस्टेंस की इवेंट्स (घटनाओं) की आवृत्ती (फ्रीक्वन्सी) को सेट करें
      setInterval(function() {

        // घटना (इवेंट्) प्रसारित करें
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // ऐसे दिखाएं मानों EventEmitter विरासत (इन्हेरीटेड) मे मिला है ;)

    ```
    उपलब्धता के अभाव मे, `.bind` के लिए कार्यात्मक (फंक्शनल) समकक्ष कई आधुनिक जावास्क्रिप्ट की लाइब्रेरिज मे विद्यमान है ।

    ```javascript
    // 6.B.2

    // उदाहरण lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // उदाहरण jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // उदाहरण dojo.hitch
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
    अंतिम उपाय के रूप में, पहचानकर्ता के रूप में `self` का उपयोग करके `this` के लिए एक उपनाम बनाएं | यह अत्यंत त्रुटि-प्रवण है और जब भी संभव हो इससे बचना चाहिए ।

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


    C. उपयोग `thisArg`

    ES 5.1 में बिल्ट-इन कई प्रोटोटाइप मेथड्स एक विशेष `thisArg` हस्ताक्षर के साथ आते हैं, जिसका उपयोग जब भी संभव हो करना चाहिए

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| अब `obj` को इंगित करता है

      console.log( this[ key ] );

    }, obj ); // <-- अंतिम आर्गुमेंन्ट `thisArg`

    // निम्न को छापता है...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` का प्रयोग `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter` के साथ हो सकता है

7. <a name="misc">Misc</a>

    यह खंड उन विचारों और अवधारणाओं को चित्रित करता है जिन्हें हठधर्मिता नहीं माना जाना चाहिए, अपितु इसका प्रयोजन जावास्क्रिप्ट प्रोग्रामिंग को करने के तरीकों को बेहतर बनाने के प्रयास में प्रश्न आदि पूछने की प्रक्रियाओं को प्रोत्साहित करना है ।

    A. `switch` के प्रयोग से बचना चाहिए, आधुनिक मेथड अनुरेखण (ट्रैसिंग) उन फंगक्शन को वर्जित करेगी जिनमें स्विच का प्रयोग है |

    फ़ायरफ़ॉक्स और क्रोम के नवीनतम रिलीज़ में `switch` स्टेटमेंट के निष्पादन में भारी सुधार प्रतीत होता है |
    http://jsperf.com/switch-vs-object-literal-vs-module

    उल्लेखनीय सुधार यहां भी देखे जा सकते हैं:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // स्विच स्टेटमेंट का एक उदाहरण

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
    // एक वैकल्पिक तरीका जो रचनाशीलता और पुनर्प्रयोग को सपोर्ट करता है
    // ऑब्जेक्ट में "cases" को सहेजें एवं फंगक्शन की ओर प्रेषित कर दें:

    var cases, delegator;

    // उदाहरण केवल चित्रण के लिए रिटर्न कर रहा है |
    cases = {
      alpha: function() {
        // कोड वाक्य 
        // रिटर्न वाक्य
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // कोड वाक्य 
        // रिटर्न वाक्य
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // कोड वाक्य 
        // रिटर्न वाक्य
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // आर्ग्यमन्ट की सूची को एरे मे परिवर्तित करता है
      args = [].slice.call( arguments );

      // आर्ग्यमन्ट की सूची से केस की को शिफ्ट करता (हटाता) है
      key = args.shift();

      // डिफ़ॉल्ट केस हैंडलर को असाइन करता है
      delegate = cases._default;

      // ऑपरेशन को प्रेषित करने हेतु मेथड को डिराइव करता है
      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      // स्कोप आर्ग्यमन्ट मे विशिष्ट वैल्यू सेट की जा सकती है ,
      // इस उदाहरण में, |null| पर्याप्त होगा
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // क्रियाशील करने के लिए एपीआई को 7.A.1.2 में डालते हैं:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // निःसंदेह, `case` key आर्ग्यमन्ट किसी भी अन्य
    // यादृच्छिक परिस्थिति पर आधारित हो सकता है |

    var caseKey, someUserInput;

    // संभवतः किसी तरह का फॉर्म इनपुट?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // अथवा...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // तत्पश्चात...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // और बेशक...

    delegator();
    // [ "Default", 0 ]


    ```

    B. प्रारम्भिक रिटर्न नगण्य परफॉरमेंस के अंतर के साथ कोड पठनीयता को बढ़ावा देते हैं |

    ```javascript

    // 7.B.1.1
    // सदोष, खराब:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // उत्तम:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">नेटिव एवं होस्ट ऑब्जेक्ट्स</a>

    यहां मूल सिद्धांत यह है कि:

    ### बेवकूफी न करें तो सब कुछ ठीक हो जाएगा

    इस अवधारणा को सुदृढ़ करने हेतु, कृपया निम्नलिखित प्रस्तुति देखें:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    https://www.youtube.com/watch?v=xL3xCO7CLNM


9. <a name="comments">टिप्पणी</a>

    #### विषय को कोड के ऊपर एक पंक्ति में लिखें
    #### मल्टीलाइन अच्छी है
    #### लाइन के अंत में टिप्पणियाँ निषिद्ध हैं!
    #### JSDoc शैली अच्छी है किन्तु इसमें बहुत समय लगता है


10. <a name="language">एक भाषीय कोड</a>

    प्रोग्राम को एक भाषा में लिखा जाना चाहिए, जो भी भाषा हो, जैसा कि अनुरक्षक या अनुरक्षकों द्वारा तय किया गया हो |

## परिशिष्ट

### कोमा फर्स्ट |

कोई भी प्रोजेक्ट जो इस आलेख को अपनी आधार शैली मार्गदर्शिका के रूप में उद्धृत करता है, कोमा फर्स्ट कोड फार्मेट को स्वीकार नहीं करेगा, जब तक कि उस प्रोजेक्ट के लेखक द्वारा स्पष्ट रूप से अन्यथा निर्दिष्ट न हो ।


----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">रिक वाल्ड्रॉन और योगदानकर्ताओं</a> <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">द्वारा रचित जावास्क्रिप्ट लेखन के स्थिर एवं सिद्धप्रयोग सिद्धांत </span><a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a> के तहत लाइसेन्स्ड है |<br /><a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a> पर आधारित है |
