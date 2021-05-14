# Αρχές γραφής συνεπούς και ιδιοματικής Javascript



## Αυτό είναι απλά ένα αρχείο και νέες ιδέες που βελτιώνουν τον κώδικα γύρω μας είναι πάντα ευπρόσδεκτες. Συνεισφέρετε, κάντε fork, clone, branch, commit, push και pull request.

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
* Hao-Wei Jeng [@l0ckys](http://twitter.com/l0ckys), [github](https://github.com/lockys)  
* Richard Gibson [@gibson042](http://twitter.com/gibson042), [github](https://github.com/gibson042)  
* Fesuy [github](https://github.com/fesuydev)  
* Stephane Moreau [github](https://github.com/stmoreau)  
* Boris Nekezov [github](https://github.com/boris-nekezov)
* Akshat Joshi [@akshat_joshi](http://twitter.com/akshat_joshi), [github](https://https://github.com/akshatjoshii) 


## Όλος ο κώδικας σε ένα project πρέπει να φαίνεται σαν να τον έχει γράψει ένα άτομο, ασχέτως του πόσα άτομα έχουν συνεισφέρει.

### Η παρακάτω λίστα δείχνει τις πρακτικές που ακολουθώ σε όλον τον κώδικα για τον οποίο είμαι ο author. Contributions σε projects που έχω δημιουργήσει πρέπει να ακολουθούν αυτές τις οδηγίες.

### Δεν σκοπεύω να επιβάλω τα style preferences μου σε κώδικα άλλων ανθρώπων, αν ένα κοινό στυλ υπάρχει πρέπει να ακολουθείται αυτό.


> ### "Επιχειρήματα αντί για στυλ δεν έχει νόημα. Θα πρέπει να υπάρχει ένα style guide και θα πρέπει να το ακολουθείτε"
>_Rebecca_ _Murphey_

&nbsp;


> ### "Μέρος του να είσαι καλός διαχειριστής ενός επιτυχημένου project είναι η συνειδητοποίηση ότι το να γράφεις κώδικα για τον εαυτό σου είναι κακή ιδέα. Εάν χιλιάδες άνθρωποι χρησιμοποιούν τον κωδικό σας, τότε γράψτε τον κωδικό σας για μέγιστη σαφήνεια, όχι με την προσωπική σας προτίμηση για το πώς να το παίξετε έξυπνοι με το spec."
>_Idan_ _Gazit_


## Translations

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
* [Serbian - latin alphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/sr_SR)
* [繁體中文](https://github.com/rwaldron/idiomatic.js/tree/master/translations/zh_TW)  
* [Indonesian](https://github.com/rwaldron/idiomatic.js/tree/master/translations/id_ID)  
* [Greek](https://github.com/rwaldron/idiomatic.js/tree/master/translations/gr_GR)
* [Hindi](https://github.com/rwaldron/idiomatic.js/tree/master/translations/hi_HI) 

## Σημαντικά, Μη-Ιδιωματικά Πράγματα:

### Code Quality Εργαλεία, Πόροι & Αναφορές

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) για το [Sonar](http://www.sonarsource.org/)
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

## Γίνετε έξυπνοι

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

Τα επόμενα θα πρέπει να θεωρρηθούν 1) μη τελειωμένα και 2) *ΑΠΑΡΑΙΤΗΤΟ ΔΙΑΒΑΣΜΑ*. Δεν συμφωνώ πάντα με το στυλ που χρησιμοποιείται από τους παρακάτω συγγραφείς, αλλά ένα είναι σίγουρο: είναι συνεπής. Επιπλέον, πρόκειται για αρχές σχετικά με τη γλώσσα.

 * [Baseline For Front End Developers: 2015](http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)




### Διαδικασία Δημιουργίας και Deployment

Τα project θα πρέπει πάντα να προσπαθούν να περιέχουν κάποιους γενικούς τρόπους με τους οποίους να μπορούν να γίνουν linted, tested και συμπιεσμένα για την παραγωγή. Για αυτή τη διαδικασία το [grunt](https://github.com/gruntjs/grunt) από τον Ben Alman και το [webpack](https://github.com/webpack/webpack) είναι σπουδαία εργαλεία.




### Test Facility

Τα projects _πρέπει_ να περιέχουν κάποιου είδους unit, reference, implementation ή functional testing. Παρακάτω είναι μια λίστα με test frameworks, εκ των οποίων κανένα δεν συνιστάται πιο πολύ από τα άλλα.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)
 * [Tape](https://github.com/substack/tape)

## Πίνακας περιεχομένων

 * [Λευκός χώρος](#whitespace)
 * [Όμορφο Συντακτικό](#spacing)
 * [Έλεγχος τύπου (ευγενείς οδηγίες jQuery Core Style)](#type)
 * [Conditional Evaluation](#cond)
 * [Πρακτικό στυλ](#practical)
 * [Ονομασία](#naming)
 * [Διάφορα](#misc)
 * [Native & Host Objects](#native)
 * [Σχόλια](#comments)
 * [Ένας κώδικας γλώσσας](#language)



------------------------------------------------


## Πρόλογος

Τα επόμενα τμήματα δείχνουν ένα _λογικό_ style guide για μοντέρνο JavaScript development και δεν είναι εντεταλμένα. Το πιο σημαντικό στοιχείο να αποκομίσετε είναι ο **νόμος της code style συνέπειας**. Ό,τι και να διαλέξετε για το στυλ του project σας πρέπει λαμβάνεται ως νόμος.





## Ιδιωματικό Style Manifesto


1. <a name="whitespace">Λευκός χώρος</a>
  - Ποτέ να μην συνδιάζετε κενά και tabs.
  - Όταν ξεκινάτε ένα project, πριν γράψετε καν κώδικα, διαλέξτε ανάμεσα σε κενά ή tabs και θεωρήστε το **νόμο**.
      - Για να είναι ευανάγνωστο, πάντα προτείνω να σετάρετε το indent του editor σας σε 2 χαρακτήρες &mdash; αυτό σημαίνει πως δυο κενά αντιπροσωπεύουν ένα tab.
  - Αν το υποστηρίζει ο editor σας, πάντα να δουλεύετε με το "show invisibles" αναμένο. Τα πλεονεκτήματα αυτού είναι:
      - Ενισχυμένη συνοχή
      - Εξάλειψη των κενών στο τέλος της γραμμής
      - Εξάλειψη των κενών γραμμών
      - Commits και diffs που είναι ευκολότερα να διαβαστούν
  - Χρησιμοποιείτε [Editorconfig](http://editorconfig.org/) όποτε μπορείτε.  Υποστηρίζει τα περισσότερα IDEs και διαχειρίζεται τις πεισσότερες ρυθμίσεις για τους κενούς χώρους.


2. <a name="spacing">Όμορφο Συντακτικό</a>

    A. Parens, Braces, Linebreaks

    ```javascript

    // if/else/for/while/try πάντα έχουν κενά, braces and span πολλαπλές γραμμές
    // προωθεί το readability

    // 2.A.1.1
    // παραδείγματα από πραγματικά πυκνό συντακτικό

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Χρησιμοποιείστε τα κενά για να προωθήσετε το readability

    if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Ακόμα καλύτερα:

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


    B. Assignments, Declarations, Functions ( Named, Expression, Constructor )

    ```javascript

    // 2.B.1.1
    // Variables
    var foo = "bar",
      num = 1,
      undef;

    // Literal notations:
    var array = [],
      object = {};


    // 2.B.1.2
    // Χρησιμοποιώντας ένα `var` ανά scope (function) ή ένα `var` για κάθε μεταβλητή,
    // προωθείτε το readability και κρατιέται το declaration list χωρίς ακαταστασία.
    // Χρησιμοποιώντας ένα `var` ανά μεταβλητή έχετε καλύτερο έλεγχο των versions
    // και κάνει ευκολότερο να μετακινείτε τις γραμμές.
    // Ένα `var` ανά scope κάνει ευκολότερο το να βρίσκετε undeclared variables
    // που μπορεί να γίνουν implied globals.
    // Διαλέξτε καλύτερα για το project σας και ποτέ μην τα αναμιγνύετε.

    // Κακό
    var foo = "",
      bar = "";
    var qux;

    // Καλό
    var foo = "";
    var bar = "";
    var qux;

    // ή αλλιώς..
    var foo = "",
      bar = "",
      qux;

    // ή..
    var // Comment σε αυτά
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var statements πρέπει να είναι πάντα στην αρχή του respective scope (function).


    // κακό
    function foo() {

      // some statements here

      var bar = "",
        qux;
    }

    // καλό
    function foo() {
      var bar = "",
        qux;

      // all statements after the variables declarations.
    }

    // 2.B.1.4
    // const και let, από το ECMAScript 6, πρέπει να είναι στην αρχή του scope (block) τους.

    // κακό
    function foo() {
      let foo,
        bar;
      if ( condition ) {
        bar = "";
        // statements
      }
    }
    // καλό
    function foo() {
      let foo;
      if ( condition ) {
        let bar = "";
        // statements
      }
    }
    ```

    ```javascript

    // 2.B.2.1
    // Named Function Declaration
    function foo( arg1, argN ) {

    }

    // Χρήση
    foo( arg1, argN );


    // 2.B.2.2
    // Named Function Declaration
    function square( number ) {
      return number * number;
    }

    // Χρήση
    square( 10 );

    // Really contrived continuation passing style
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // callback statements
    });


    // 2.B.2.3
    // Function Expression
    var square = function( number ) {
      // Return something valuable and relevant
      return number * number;
    };

    // Function Expression with Identifier
    // Αυτή η χρήση έχει το πλεονέκτημα ότι μπορεί να καλεσθέι
    // από τον εαυτό της και έχει ένα identity στα stack traces:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number - 1 );
    };


    // 2.B.2.4
    // Constructor Declaration
    function FooBar( options ) {

      this.options = options;
    }

    // Χρήση
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Εξαιρέσεις, ελαφρές αποκλίσεις

    ```javascript

    // 2.C.1.1
    // Functions with callbacks
    foo(function() {
      // Προσέξτε ότι δεν υπάρχει έξτρα κενό ανάμεσα στο πρώτο paren
      // του executing function call και της λέξης "function"
    });

    // Function δεχόμενο ένα array, όχι κενό
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Function δεχόμενο ένα object, όχι κενό
    foo({
      a: "alpha",
      b: "beta"
    });

    // Single argument string literal, όχι κενό
    foo("bar");

    // Expression parens, όχι κενό
    if ( !("foo" in obj) ) {
      obj = (obj.bar || defaults).baz;
    }

    ```

    D. Η συνέπεια πάντα κερδίζει

    Στα κεφάλαια 2.A-2.C, οι κανόνες των κενών ορίζονται ως σύσταση με έναν απλούστερο, ψηλότερο σκοπό: η συνέπεια.
    Είναι σημαντικό να σημειώσουμε πως τα formatting preferences, όπως το "inner whitespace" πρέπει να θεωρούνται προαιρετικά, αλλά ένα στυλ πρέπει να υπάρχει σε όλο το project σας.

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

    E. Quotes

    Είτε προτιμάτε μονά ή διπλά δεν πειράζειμ δεν υπάρχει διαφορά στο πως η Javascript τα διαβάζει. Αυτό που **ΟΠΩΣ ΚΑΙ ΔΗΠΟΤΕ ΠΡΕΠΕΙ** να ενισχυθεί είναι η συνέπεια. **Ποτέ μην χρησιμοποιείτε και τα δυο στο ίδιο project. Διαλέξτε ένα στυλ και ακολουθείστε αυτο.**

    F. Τέλος γραμμών και κενές γραμμές

    Το κενό μπορεί να καταστρέψει τα diffs και να τα κάνει αδύνατο να διαβαστούν. Σκεφτείτε να συμπεριλαμβάνετε ένα pre-commit hook που θα διαγράφει το end-of-line κενό και τα blanks spaces στις κενές γραμμές αυτόματα.

3. <a name="type">Έλεγχος τύπου (ευγενείς οδηγίες jQuery Core Style)</a>

    A. Actual Types

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

      Global Variables:

        typeof variable === "undefined"

      Local Variables:

        variable === undefined

      Properties:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Coerced Types

    Σκεφτείτε τις εφαρμογές των παρακάτω...

    Έχοντας αυτό το HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` έχει γίνει declared με την τιμή `0` και ο τύπος είναι `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Κάπου αργότερα στον κώδικα, πρέπει να ανανεώσετε το `foo`
    // με μία καινούρια τιμή από ένα input element

    foo = document.getElementById("foo-input").value;

    // Άμα θέλατε να τεστάρετε `typeof foo` τώρα, το αποτέλεσμα θα ήταν `string`
    // Αυτό σημαίνει πως αν είχατε λογική που να τεστάρει το `foo`:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` δεν θα γινόταν ποτέ evaluated, ακόμα και αν το `foo` έχει την τιμή "1"


    // 3.B.1.2

    // Μπορείτε να προκατέχετε τέτοια προβλήματα χρησιμοποιώντας smart coercion με unary + ή - operators:

    foo = +document.getElementById("foo-input").value;
    //    ^ unary + operator θα μετατρέψουν το δεξιά operand σε αριθμό

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` θα κληθεί
    ```

    Παρακάτω είναι μερικές συχνές περιπτώσεις με coercions:


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

    // Παρατηρείστε πως τα παραπάνω πρέπει να θεωρούνται "unnecessarily clever"
    // Να προτιμάτε την φανερή προσέγγιση συγκρίνοντας την επιστρεφόμενη τιμή του
    // indexOf, όπως:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // είναι το ίδιο με...

    ~~num;

    num >> 0;

    num >>> 0;

    // Όλα επιστρέφουν 2


    // Να θυμάστε βέβαια, πως οι αρνητικοί αριθμοί θα αντιμετωπιστούν διαφορετικά...

    var neg = -2.5;

    parseInt( neg, 10 );

    // είναι το ίδιο με...

    ~~neg;

    neg >> 0;

    // Όλα επιστρέφουν -2
    // Όμως...

    neg >>> 0;

    // Θα επιστρέψει 4294967294




    ```



4. <a name="cond">Conditional Evaluation</a>

    ```javascript

    // 4.1.1
    // Όταν ελέγχετε αν ένα array έχει length,
    // αντί για αυτό:
    if ( array.length > 0 ) ...

    // ...να ελέγχετε το truthiness, με αυτόν τον τρόπο:
    if ( array.length ) ...


    // 4.1.2
    // Όταν ελέγχετε ότι ένα array είναι empty,
    // αντί για αυτό:
    if ( array.length === 0 ) ...

    // ...να ελέγχετε το truthiness, με αυτόν τον τρόπο:
    if ( !array.length ) ...


    // 4.1.3
    // Όταν ελέγχετε ότι ένα string δεν είναι empty,
    // αντί για αυτό:
    if ( string !== "" ) ...

    // ...να ελέγχετε το truthiness, με αυτόν τον τρόπο:
    if ( string ) ...


    // 4.1.4
    // Όταν ελέγχετε ότι ένα string _είναι_ empty,
    // αντί για αυτό:
    if ( string === "" ) ...

    // ...να ελέγχετε το falsy-ness, με αυτόν τον τρόπο:
    if ( !string ) ...


    // 4.1.5
    // Όταν ελέγχετε ότι ένα reference είναι true,
    // αντί για αυτό:
    if ( foo === true ) ...

    // ...να το ελέγχετε σαν να το εννωείτε, Επωφεληθείτε από τις ενσωματωμένες δυνατότητες:
    if ( foo ) ...


    // 4.1.6
    // Όταν ελέγχετε ότι ένα reference είναι false,
    // αντί για αυτό:
    if ( foo === false ) ...

    // ...να χρησιμποιείτε negation για να κάνετε coerce ένα true evaluation
    if ( !foo ) ...

    // ...Προσοχή, αυτό θα ισχύει και για: 0, "", null, undefined, NaN
    // Αν _ΠΡΕΠΕΙ_ να ελέγξετε ένα boolean false, τότε να χρησιμποιείτε
    if ( foo === false ) ...


    // 4.1.7
    // Όταν ελέγχετε έμα ref που μπορεί να είναι null ή undefined, αλλά ΟΧΙ false, "" or 0,
    // αντί για αυτό:
    if ( foo === null || foo === undefined ) ...

    // ...εκμεταλευτείτε το == type coercion, με αυτόν τον τρόπο:
    if ( foo == null ) ...

    // Να θυμάστε πως η χρήση == θα ταιριάξει ένα `null` και στο `null` και στο `undefined`
    // αλλά όχι `false`, "" ή 0
    null == undefined

    ```
    Πάντα να ελέγχετε για το καλύτερο, πιο ακριβές αποτέλεσμα - τα παραπάνω είναι μια κατευθυντήρια γραμμή, όχι ένα δόγμα.

    ```javascript

    // 4.2.1
    // Type coercion και evaluation notes

    // Να προτιμάρε `===` αντί για `==` (εκτός και αν αυτή η περίπτωση απαιτεί loose type evaluation)

    // === δεν κάνει coerce το type, που σημαίνει ότι:

    "1" === 1;
    // false

    // == κάνει coerce type, που σημαίνει ότι:

    "1" == 1;
    // true


    // 4.2.2
    // Booleans, Truthies & Falsies

    // Booleans:
    true, false

    // Truthy:
    "foo", 1

    // Falsy:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Πρακτικό στυλ</a>

    ```javascript

    // 5.1.1
    // Ένα Practical Module

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Αυτό είναι boolean property
          bool: true,
          // Ένα string value
          string: "a string",
          // Ένα array property
          array: [ 1, 2, 3, 4 ],
          // Ένα object property
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // Επιστρέφει την τωρινή τιμή του `data`
            return data;
          },
          setData: function( value ) {
            // θέτει την τιμή του `data` και την επιστρέφει
            return ( data = value );
          }
        };
      })();

      // Άλλα πράγματα μπορούν να γίνουν εδώ

      // Έκθεση του module στο global object
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Ένα Practical Constructor

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


      // Για να καλέσετε constructor χωρίς `new`, μπορείτε να κάνετε αυτό:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // Έκθεση του constructor στο global object
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Ονομασία</a>



    A. Δεν είστε code compiler/compressor, οπότε μην προσπαθείτε να είστε ένας.

    Ο ακόλουθος κώδικας είναι ένα παράδειγμα από ανήκουστη ονομασία:

    ```javascript

    // 6.A.1.1
    // Παράδειγμα κώδικα με φτωχή ονομασία

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Χωρίς αμφιβολία, έχετε γράψει κώδικα σαν και αυτόν - εύχομαι να τελειώσει σήμερα αυτό.

    Παρακάτω είναι η ίδια λογική, αλλά με πιο καλή ονομασία (ευανάγνωστη δομή):

    ```javascript

    // 6.A.2.1
    // Παράδειγμα κώδικα με βελτιωμένη ονομασία

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

    Λίγοι επιπλέον δείκτες ονομασίας:

    ```javascript

    // 6.A.3.1
    // Ονομάζοντας strings

    `dog` είναι ένα string


    // 6.A.3.2
    // Ονομάζοντας arrays

    `dogs` είναι ένα array από `dog` strings


    // 6.A.3.3
    // Ονομάζοντας functions, objects, instances, κλπ

    camelCase; function and var declarations


    // 6.A.3.4
    // Ονομάζοντας constructors, prototypes, etc.

    PascalCase; constructor function


    // 6.A.3.5
    // Ονομάζοντας regular expressions

    rDesc = //;


    // 6.A.3.6
    // Από το Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Περιπτώσεις από το `this`

    Εκτός από τις γενικά γνωστές περιπτώσεις του `call` και του `apply`, πάντα να προτιμάτε το `.bind( this )` ή ένα functional equivalent, για να δημιουργείτε `BoundFunction` definitions για μελλοντική χρήση. Χρησιμοποιείτε μόνο ψευδώνυμα όταν δεν υπάρχει διαθέσιμη επιλογή.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // ανοίξτε ένα async stream,
      // αυτό θα καλείαι συνεχόμενα
      stream.read( opts.path, function( data ) {

        // Ανανεώστε αυτού του instance την τιμή
        // με την πιο πρόσφατη τιμή από το
        // data stream
        this.value = data;

      }.bind(this) );

      // Πετάξτε τη συχνότητα των συμβάντων που εκπέμπονται από
      // αυτήν την εμφάνιση συσκευής
      setInterval(function() {

        // Εκπέμπει ένα throttled event
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Απλά προσποιηθείτε ότι κάναμε inherit EventEmitter ;)

    ```

    Όταν δεν είναι διαθέσιμες, λειτουργικά ισοδύναμα με το `.bind` υπάρχουν σε πολλές σύγχρονες βιβλιοθήκες JavaScript.


    ```javascript
    // 6.B.2

    // πχ. lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // πχ. jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // πχ. dojo.hitch
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

    Ως έσχατη λύση, δημιουργήστε ένα ψευδώνυμο στο `this 'χρησιμοποιώντας `self` ως αναγνωριστικό. Αυτό είναι εξαιρετικά επιρρεπές στο σφάλμα και θα πρέπει να αποφεύγεται όποτε είναι δυνατόν.

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


    C. Χρήση `thisArg`

    Αρκετές πρωτότυπες μέθοδοι των ενσωματωμένων ES 5.1 έρχονται με μια ειδική υπογραφή `thisArg`, η οποία θα πρέπει να χρησιμοποιείται όποτε είναι δυνατόν

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| τώρα αναφέρεται στο `obj`

      console.log( this[ key ] );

    }, obj ); // <-- το τελευταίο arg είναι το `thisArg`

    // Εκτυπώνει...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` μπορεί να χρησιμοποιηθεί με `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Διάφορα</a>

    Αυτή η ενότητα θα χρησιμεύσει για να Εικονογραφηθούν ιδέες και έννοιες που δεν πρέπει να θεωρούνται δόγμα, αλλά αντίθετα υπάρχουν για να ενθαρρύνουμε τις πρακτικές αμφισβήτησης σε μια προσπάθεια να βρούμε καλύτερους τρόπους για να κάνουμε κοινές εργασίες προγραμματισμού JavaScript.

    A. Η χρήση του `switch` πρέπει να αποφεύγεται, ο σύγχρονος εντοπισμός μεθόδων θα περιλαμβάνει μαύρες λίστες με εντολές μεταγωγής

    Φαίνεται να υπάρχουν δραστικές βελτιώσεις στην εκτέλεση των δηλώσεων `switch` στις τελευταίες εκδόσεις του Firefox και του Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module

    Σημαντικές βελτιώσεις μπορούν να παρατηρηθούν και εδώ:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Ένα παράδειγμα switch statement

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // κάτι στο οποίο να κάνει default
        break;
    }

    // 7.A.1.2
    // Μια εναλλακτική προσέγγιση που υποστηρίζει τη δυνατότητα σύνθεσης και επαναχρησιμοποίησης είναι
    // η χρήση ενός αντικειμένου για την αποθήκευση "cases" και ένα function για την ανάθεση:

    var cases, delegator;

    // Παράδειγμα επιστρέφει μόνο για απεικόνιση.
    cases = {
      alpha: function() {
        // statements
        // ένα return
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // statements
        // ένα return
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // statements
        // ένα return
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // Μετατρέψτε το arguments list σε ένα array
      args = [].slice.call( arguments );

      // shift το case key από τα arguments
      key = args.shift();

      // Αναθέστε το default case handler
      delegate = cases._default;

      // Derive the method to delegate operation to
      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      // Τα scope arg θα μπορούσαν να ανατεθούν σε κάτι συγκεκριμένο,
      // σε αυτήν την περίπτωση το |null| θα ήταν αρκετό
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Κάντε το API από το 7.A.1.2 να δουλέψει:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Φυσικά, το `case` key argument θα μπορούσε έυκολα να είναι βασισμένο
    // σε κάποιο άλλο τυχαίο condition.

    var caseKey, someUserInput;

    // Πιθανών κάποιου είδους form input;
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // ή...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // Ύστερα...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // Και φυσικά...

    delegator();
    // [ "Default", 0 ]


    ```

    B. Οι πρώτες επιστροφές προάγουν την αναγνωσιμότητα του κώδικα με αμελητέα διαφορά απόδοσης

    ```javascript

    // 7.B.1.1
    // Κακό:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Καλό:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Native & Host Objects</a>

    Η βασική αρχή εδώ είναι:

    ### Μην κάνετε χαζές βλακείες και όλα θα δουλεύουν καλά.

    Για να ενισχύσετε αυτήν την έννοια, παρακαλούμε δείτε την ακόλουθη παρουσίαση:

    #### “Everything is Permitted: Extending Built-ins” του Andrew Dupont (JSConf2011, Portland, Oregon)

    https://www.youtube.com/watch?v=xL3xCO7CLNM


9. <a name="comments">Σχόλια</a>

    #### Μονή γραμμή πάνς από τον κώδικα είναι υποκειμενικό
    #### Πολλαπλή γραμμή είναι καλή
    #### Τα σχόλια στο τέλος της γραμμής απαγορεύονται!
    #### Το JSDoc στυλ είναι καλό, αλλά απαιτεί μια σημαντική επένδυση χρόνου


10. <a name="language">Ένας κώδικας γλώσσας</a>

    Τα προγράμματα πρέπει να είναι γραμμένα σε μία γλώσσα, όποια και αν είναι αυτή η γλώσσα, όπως υπαγορεύει ο διαχειριστής ή οι συντηρητές.

## Παράρτημα

### Comma First.

Οποιοδήποτε project που παραθέτει αυτό το έγγραφο ως βασικό οδηγό στυλ δεν θα δεχτεί μορφοποίηση πρώτου κώδικα με κόμμα, εκτός εάν έχει οριστεί διαφορετικά από τον συντάκτη του project.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
