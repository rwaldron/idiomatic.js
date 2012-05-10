# Prinzipien des Schreibens von konsequenten und idiomatischen JavaScript

## Dies ist ein lebendiges Dokument und neue Ideen, die den Code in unserem Umfeld verbessern, sind immer willkommen. Tragt dazu bei: "fork", "clone", "branch", "commit", "push", "pull request".

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

## Jeder Code sollte so aussehen als wenn ihn nur eine Person geschrieben hätte, völlig egal wieviele daran gearbeitet haben.

### Die folgende Liste nennt die Praktiken, die sich in jeden Code den ich ursprünglich geschrieben habe wiederfinden sollten. Sämtliche Beiträge dich Ich für Projekte geleistet habe, sollten diesen Praktiken folgen.

### Ich möchte nicht anderen Leuten meine Vorlieben aufzwängen; wenn es bereits einen geläufigen Style gibt, sollte das respektiert werden.

> "Das es eine schlechte Idee ist, nur für sich selbst Code zu schreiben, ist etwas was man als guter Betreuer eines erfolgreichen Projektes begreifen muss™. Wenn tausende Leute deinen Code benutzen, dann schreibe deinen Code möglichst klar und übersichtlich,  nicht einfach nur nach deinen persönlichen Vorlieben." - Idan Gazit


## Übersetzungen

* [ORIGINAL](https://github.com/rwldrn/idiomatic.js)
* [French](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Spanish](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Portuguese - Brazil](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Korean](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [Japanese](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)

## Wichtiger, nicht-idiomatischer Kram:

### Code-Qualität: Tolle Werkzeuge, Ressourcen und Referenzen

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)


### Schlau werden

[http://es5.github.com/](http://es5.github.com/)

Bei den Folgenden Ressourcen sollte berücksichtigt werden das sie 1) unvollständig und 2) *PFLICHTLEKTÜREN* sind. Ich stimme dem geschriebenen Style der unten stehenden Autoren nicht immer zu, aber eins ist sicher: Sie sind konsequent. Außerdem sind dies echte Autoriäten in dieser Sprache.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)

### Build- und Deployment-Prozess

Jedes Projekt sollte Komponenten verwenden, um den Code zu linten, testen oder komprimieren, um so im Produktivbereich eingesetzt zu werden. Ben Alan hat für diese Aufgabe [grunt](https://github.com/cowboy/grunt) entworfen und damit offiziell das "kits/" Verzeichnis aus diesem Repository ersetzt.

### Hilfsmittel zum Testen

Projekte _müssen_ irgendeine Art von Unit-, Reference, Implementation- oder Functional-Testing enthalten. Demonstrationen von Anwendungsfällen reichen als Test niht aus. Die unten aufgeführte Liste beinhaltet eine Menge nützlicher Test-Frameworks.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)

## Inhaltsverzeichnis

 * [Whitespace](#whitespace)
 * [Schöne Syntax](#spacing)
 * [Typprüfung](#type)
 * [Bedingte Auswertungen](#cond)
 * [Praktischer Style](#practical)
 * [Bezeichnung](#naming)
 * [Sonstiges](#misc)
 * [Native & Host Objekte](#native)
 * [Kommentare](#comments)
 * [Ein-Sprache-Code](#language)



------------------------------------------------

## Vorwort

Die folgenden Bereiche zeigen einen vertretbaren Style Guide für moderne JavaScript-Entwicklung. Es handelt sich dabei aber nicht etwa um eine Art Vorschrift. Das wichtigste was man aber mitnehmen sollte ist das **Gesetz der Stilkonsistenz**. Egal welchen Stil du für dein Projekt wählst, er sollte als Regel betrachtet werden.





## Idiomatisches Style Manifest


1. <a name="whitespace">Whitespace</a>
    - Mische niemals Spaces und Tabs
    - Bevor du mit einem Projekt beginnst und Code schreibst, entscheide dich zwischen Soft Intends (Spaces) oder echten Tabs.
        - Für die Lesbarkeit empfehle ich die Einrückung immer auf die Größe von zwei Zeichen zu setzen. Das bedeutet zwei Spaces oder zwei Spaces repräsentieren einen echten Tab.
    - Wenn dein Editor die Konfiguration "Steuerzeichen einblenden" unterstützt, solltest du sie einschalten. Das bringt folgende Vorteile mit sich:
        - Erzwungene Konsistenz
        - Zerstören von Whitespaces am Ende der Zeile
        - Zerstören von leeren "Whitespace Zeilen"
        - Commits und Diffs sind einfacher zu lesen

2. <a name="spacing">Schöne Syntax</a>

    A. Leerzeichen, geschweifte Klammern und Zeilenumbrüche

    ```javascript

    // if/else/for/while/try enthalten immer Leerzeichen, geschweifte Klammern
    // und erstrecken sich über mehrere Zeilen
    // Das trägt zur Lesbarkeit bei

    // 2.A.1.1
    // Beispiele von echt verkrampfter Syntax

    if(Bedingung) machWas();

    while(Bedingung) iterieren++;

    for(var i=0;i<100;i++) irgendeineIterativeFunktion();


    // 2.A.1.1
    // Benutze Whitespaces um die Lesbarkeit zu verbessern

    if ( Bedingung ) {
        // statements
    }

    while ( Bedingung ) {
        // statements
    }

    for ( var i = 0; i < 100; i++ ) {
        // statements
    }

    // Noch besser:

    var i,
        length = 100;

    for ( i = 0; i < length; i++ ) {
        // statements
    }

    // Oder...

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


    B. Zuweisungen, Deklarationen, Funktionen (Benamte, Ausdrücke, Kontruktoren)

    ```javascript

    // 2.B.1.1
    // Variablen
    var foo = "bar",
        num = 1,
        undef;

    // Literalnotationen:

    var array = [],
        object = {};


    // 2.B.1.2
    // Nur einmal `var` pro Scope (Funktion) zu verwenden, verbessert die Lesbarkeit
    // und hält deine Deklarationsliste frei von Verwirrungen

    // Schlecht
    var foo = "";
    var bar = "";
    var qux;

    // Gut
    var foo = "",
        bar = "",
        quux;

    // Oder..
    var // Hier kommentieren
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var Statements sollten immer an den Anfang ihrers respektiven Scopes (Funktion)
    // Das gleiche gilt für const und let aus ECMAScript 6

    // Schlecht
    function foo() {
        // irgendwas

        var bar = "",
            qux;
    }

    // Gut
    function foo() {
        var bar = "",
        qux;

        // alle Statements nach der var-Deklaration
    }
    ```

    ```javascript
    
    // 2.B.2.1
    // Benannte Funktionsdeklaration
    function foo( arg1, argN ) {

    }

    // Benutzung
    foo( arg1, argN );


    // 2.B.2.2
    // Benannte Funktionsdeklaration
    function quadrat(zahl) {
        return zahl * zahl;
    }

    // Benutzung
    quadrat( 10 );

    function quadrat( zahl, callback ) {
        callback( zahl * zahl);
    }

    quadrat( 10, function (square) {
        // callback Statements
    });

    // 2.B.2.3
    // Funktionsausdruck
    var quadrat = function ( zahl ) {
        // gibt irgendwas zurück
        return zahl * zahl;
    }

    // Functionsausdruck mit Bezeichner
    // Diese Form hat den Vorteil, das sie sich selbst aufrufen kann
    // und der Bezeichner im Stack Trace zufinden ist
    var factorial = function factorial( zahl ) {
        if ( zahl < 2 ) {
            return 1;
        }

        return zahl * factorial( zahl-1 );
    };


    // 2.B.2.4
    // Konstrukturdeklaration
    function fooBar ( options) {

        this.options = options;
    }

    // Benutzung
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options:
    // { a: "alpha" }
    ```

    C. Ausnahmen, Leichte Abweichungen

    ```javascript

    // 2.C.1.1
    // Funktionen mit Callbacks
    foo(function() {
        // Achte drauf, das es hier keinen extra Whitespace nach der ersten Klammer gibt
    });

    // Funktionen, die ein Array erwarten, keine Whitespaces auf erster Ebene
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Funktionen, die ein Object erwarten, haben ebenfalls keine Spaces
    foo({
        a: "alpha",
        b: "beta"
    });

    // Einzelner Stringliteral, kein Space
    foo("bar");

    // Inner gruppierte Klammern, kein Space
    if ( !("foo" in obj) ) {

    }

    ```

    D. Konsistenz gewinnt immer

    In Sektion 2.A-2.C, sieht man den Vorteil durch die Verwendung von Whitespaces. Lesbarkeit und Konsistenz.
    Es ist immer wichtig darauf zu achten, Formatierungsvorlieben, wie der Whitespace innerhalb der Klammern, als optional zu betrachten. Trotzdem sollte sich eine Formatierung durch den ganzen Quelltext einheitlich erstrecken.

    ```javascript

    // 2.D.1.1

    if (Bedingung) {
        // statements
    }

    while (Bedingung) {
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

    E. Anführungszeichen

    Ob du jetzt einfache oder doppelte Anführungszeichen bevorzugst ist völlig egal. JavaScript parst sie immer gleich. Das einzige worauf auf jeden Fall geachtet werden **MUSS**, ist Konsistenz. **Vermische niemals Anführungszeichen innerhalb eines Projekts.** Suche dir einen Stil aus und bleib dabei.

    F. Zeilenenden und leere Zeilen

    Whitespaces können diffs ruinieren. Pre-Commit-Hooks können verwendet werden, um End-Of-Line-Whitespaces zu leere Zeilen zu entfernen.

3. <a name="type">Typprüfung</a>

    A. Primitive Typen

    String:

        typeof variable === "string"

    Number:

        typeof variable === "number"

    Boolean:

        typeof variable === "boolean"

    Object:

        typeof variable === "object"

    Array:

        Array.isArray( arrayArtigesObjekt )
        (wenn möglich)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null oder undefined:

        variable == null

    undefined:

        Globale Variablen:

            typeof variable === "undefined"

        Lokale Variablen:

            variable === undefined

        Properties:

            object.prop === undefined
            object.hasOwnProperty( prop )
            "prop" in object

    B. Gezwungene Typen

    Betrachten wir folgende Auswirkungen...

    Dieses HTML ist gegeben:

    ```html

    <input type="text" id="foo-input" value="1">
    ```

    ```js

    // 3.B.1.1

    // `foo` wurde mit dem Wert `0` deklariert und ist vom Typ `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Später im Code musst du `foo` mit einem neuen Wert aus dem input-Element überschreiben
    foo = document.getElementById("foo-input").value;

    // Wenn du jetzt mit `typeof foo` testen möchtest, wird das ergebnis `string` sein
    // Das bedeutet, wenn du Logik hast, die `foo` so testet:

    if ( foo === 1 ) {

        wichtigeFunktion();

    }

    // `wichtigeFunktion()` würde niemals ausgeführt, selbst wenn `foo` den wert "1" hätte

    // 3.B.1.2

    // Du kannst diese Probleme umgehen, indem du die Typen mit unären - order + - Operationen erzwingst:

    foo = +document.getElementById("foo-input".value;
    //    ^ unärer + - Operator konvertiert den rechten Operanden in eine Zahl (Number)
    // typeof foo;
    // "number"

    if ( foo === 1 ) {

        wichtigeFunktion();

    }

    // `wichtigeFunktion()` würde ausgeführt
    ```

    Hier sind ein paar Fälle in denen Erzwingungen verwendet werden:


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

    bool == !!string;
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
    ```

    ```javascript
    // 3.B.2.3


    var num = 2.5;

    parseInt( num, 10 );

    // ist das Gleiche wie...

    ~num;

    num >> 0;

    num >>> 0;

    // Gibt 2 zurück


    // Denke daran das negative Zahlen anders behandelt werden...

    var neg = -2.5;

    parseInt( neg, 10 );

    // Ist das Gleiche wie...

    ~~neg;

    neg >> 0;

    // Gibt 2 zurück
    // Wie dem auch sei...

    neg >>> 0;

    // Gibt 4294967294 zurück


    ```
