# Princìpi per la scrittura di JavaScript consistente ed idiomatico


## Questo è un documento in continua evoluzione e nuove idee sono sempre bene accette. Per contribuire: fork, clone, branch, commit, push, pull request.

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



## Tutto il codice, in qualsiasi linguaggio sia, dovrebbe sembrare come scritto da un'unica persona, non importa quante persone vi abbiano contribuito.

### Il seguente elenco, evidenzia le pratiche che utilizzo in tutto il codice di cui sono l'autore originale; contributi ai progetti da me creati dovrebbero seguire queste linee guida.

### Non è mia intenzione imporre il mio stile su codice o progetti altrui; se esiste già uno stile comune, esso dovrebbe essere rispettato.


> ### "Discussioni sullo stile sono inutili. Ci dovrebbe essere una guida di stile, e voi dovreste seguirla"
>_Rebecca_ _Murphey_

&nbsp;

> ### "Parte dell'essere un buon amministratore in un progetto votato al successo è capire che la scrittura di codice per sé stessi è una Cattiva Idea™. Se migliaia di persone usano il tuo codice, allora scrivi il tuo codice in modo che abbia la massima chiarezza, e non seguendo i tuoi gusti personali su come renderlo chiaro all'interno delle specifiche."
>_Idan_ _Gazit_


## Traduzioni

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


## Cose importanti, non idiomatiche:

### Strumenti per la qualità del codice, risorse e guide

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) per [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/jsoverson/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

### Impara

### [ECMAScript 5.1 con Annotazioni](http://es5.github.com/)
### [Specifiche Linguaggio EcmaScript, edizione 5.1](http://ecma-international.org/ecma-262/5.1/)

I seguenti dovrebbero essere considerati come 1) incompleti e 2) *LETTURE NECESSARIE*. Non sempre sono d'accordo con lo stile scritto dagli autori qui sotto, ma una cosa è certa: sono consistenti. Quindi, sono da considerare delle autorità per questo linguaggio.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)
 * [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)




### Processo di costruzione e distribuzione

Ogni progetto dovrebbe sempre cercare di fornire un qualche strumento generico, per mezzo del quale i sorgenti possano venire validati, testati e compressi per il successivo utilizzo in ambiente di produzione. Per questo lavoro, [grunt](https://github.com/cowboy/grunt) di Ben Alman non è secondo a nessuno e ha ufficialmente rimpiazzato la directory "kits/" di questo repo.




### Processo di testing

I progetti _devono_ includere una qualche sorta di unità, guida o implementazione di test oppure un test funzionale. Dimostrazioni di casi d'uso NON SONO QUALIFICATI come "test". La seguente è una lista di framework per il testing, nessuno dei quali è preferito rispetto all'altro.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)

## Tavola dei contenuti

 * [Spazio vuoto](#whitespace)
 * [Bella sintassi](#spacing)
 * [Controllo dei tipi (offerto dalle linee guida della jQuery Core Style)](#type)
 * [Esecuzione condizionale](#cond)
 * [Stile pratico](#practical)
 * [Nomenclatura](#naming)
 * [Varie](#misc)
 * [Oggetti nativi e ospite](#native)
 * [Commenti](#comments)
 * [Un codice di linguaggio](#language)



------------------------------------------------


## Prefazione

Le seguenti sezioni evidenziano una _ragionevole_ guida di stile per il moderno sviluppo di JavaScript, e non sono intese per essere obbligatorie. Il concetto più importante è la **legge sulla consistenza dello stile nel codice**. Qualsiasi stile scegliate per i vostri progetti dovrebbe essere considerato legge. Potete mettere un link a questo documento come espressione di impegno alla consistenza, leggibilità e manutenibilità del codice del vostro progetto.





## Manifesto dello stile idiomatico


1. <a name="whitespace">Spazio vuoto</a>
  - Mai mischiare spazi e tabulazioni.
  - Quando iniziate un progetto, prima di cominciare a scrivere il codice, scegliete tra indentazione soft (spazi) o tabulazioni reali, e considerate questa scelta **legge**.
      - Per la leggibilità, raccomando sempre di impostare la dimensione di indentamento del proprio editor a due caratteri &mdash; questo significa, due spazi o due spazi rappresentanti una tabulazione reale.
  - Se il vostro editor lo supporta, lavorate sempre con l'impostazione "mostra caratteri invisibili" attiva. I benefici di questa pratica sono:
      - Rafforzata consistenza
      - Eliminazione di spazi vuoti alla fine delle linee
      - Eliminazione di linee vuote
      - Commit e diff più facili da leggere


2. <a name="spacing">Bella sintassi</a>

    A. Parentesi, parentesi graffe, interruzioni di linea

    ```javascript

    // if/else/for/while/try hanno sempre spazi, parentesi graffe e sono suddivisi su
    // più linee, questo incoragga la leggibilità

    // 2.A.1.1
    // Esempi di sintassi veramente illeggibile

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Uso degli spazi vuoti per incrementare la leggibilità

    if ( condizione ) {
      // istruzioni
    }

    while ( condizione ) {
      // istruzioni
    }

    for ( var i = 0; i < 100; i++ ) {
      // istruzioni
    }

    // Ancora meglio:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // istruzioni
    }

    // Oppure...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // istruzioni
    }

    var prop;

    for ( prop in object ) {
      // istruzioni
    }


    if ( true ) {
      // istruzioni
    } else {
      // istruzioni
    }
    ```


    B. Assegnazioni, dichiarazioni, funzioni ( non anonima, espressione, costruttore )

    ```javascript

    // 2.B.1.1
    // Variabili
    var foo = "bar",
      num = 1,
      undef;

    // Notazioni literal:
    var array = [],
      object = {};


    // 2.B.1.2
    // L'utilizzo di una sola `var` per scope (funzione) incrementa la leggibilità
    // e mantiene la tua lista di dichiarazioni ordinata (inoltre riduce il numero di digitazioni)

    // Sbagliato
    var foo = "";
    var bar = "";
    var qux;

    // Corretto
    var foo = "",
      bar = "",
      quux;

    // oppure...
    var // Commento su questa linea
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // le dichiarazioni var dovrebbero sempre risiedere all'inizio del rispettivo scope (funzione).
    // Lo stesso vale per const e let di ECMAScript 6.

    // Sbagliato
    function foo() {

      // alcune istruzioni qui

      var bar = "",
        qux;
    }

    // Corretto
    function foo() {
      var bar = "",
        qux;

      // tutto il codice dopo le dichiarazioni delle variabili.
    }
    ```

    ```javascript

    // 2.B.2.1
    // Dichiarazione di funzione non anonima
    function foo( arg1, argN ) {

    }

    // Utilizzo
    foo( arg1, argN );


    // 2.B.2.2
    // Dichiarazione di funzione non anonima
    function square( number ) {
      return number * number;
    }

    // Utilizzo
    square( 10 );

    // Stile forzato di passaggio dei parametri a cascata
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // istruzioni di callback
    });


    // 2.B.2.3
    // Funzione espressione
    var square = function( number ) {
      // Ritorna qualcosa di importante e rilevante
      return number * number;
    };

    // Funzione espressione con identificatore
    // Questa è la variante preferita, ha il valore aggiunto di essere in grado
    // di richiamare sé stessa ed ha un'identità nelle tracce dello stack:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number - 1 );
    };


    // 2.B.2.4
    // Dichiarazione di costruttore
    function FooBar( options ) {

      this.options = options;
    }

    // Utilizzo
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Eccezioni, lievi deviazioni

    ```javascript

    // 2.C.1.1
    // Funzioni con callback
    foo(function() {
      // Nota che non ci sono spazi tra la prima parentesi
      // della funzione chiamata in esecuzione e la parola "function"
    });

    // Funzione che accetta un array, nessuno spazio
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Funzione che accetta un oggetto, nessuno spazio
    foo({
      a: "alpha",
      b: "beta"
    });

    // Singolo argomento stringa, nessuno spazio
    foo("bar");

    // Parentesi interne di raggruppamento, nessuno spazio
    if ( !("foo" in obj) ) {

    }

    ```

    D. La consistenza vince sempre

    Nelle sezioni da 2.A a 2.C, le regole per lo spazio vuoto vengono stabilite come raccomandazione per un motivo semplice ed importante: la consistenza.
    &Egrave; importante notare che le preferenze di formattazione, come lo "spazio vuoto interno" dovrebbero essere considerate opzionali, ma solo uno stile dovrebbe esistere per l'intero sorgente del vostro progetto.

    ```javascript

    // 2.D.1.1

    if (condizione) {
      // istruzioni
    }

    while (condizione) {
      // istruzioni
    }

    for (var i = 0; i < 100; i++) {
      // istruzioni
    }

    if (true) {
      // istruzioni
    } else {
      // istruzioni
    }

    ```

    E. Apici

    Che preferiate singoli o doppi apici non importa, non c'è differenza di gestione da parte di JavaScript. Ciò che **DEVE ASSOLUTAMENTE** essere mantenuta è la consistenza. **Mai mischiare gli apici nello stesso progetto. Scegliete uno stile e proseguite con esso.**

    F. Fine delle linee e linee vuote

    Lo spazio vuoto può complicare le diff e rendere le modifiche impossibili da leggere. Considerate di implementare un hook di pre-commit che rimuova automaticamente lo spazio vuoto alla fine delle linee e gli spazi vuoti nelle linee vuote.

3. <a name="type">Controllo di tipo (offerto dalle linee guida della jQuery Core Style)</a>

    A. Tipi attuali

    Stringa:

        typeof variable === "string"

    Numero:

        typeof variable === "number"

    Booleano:

        typeof variable === "boolean"

    Oggetto:

        typeof variable === "object"

    Array:

        Array.isArray( arrayLikeObject )
        (dove possibile)

    Nodo:

        elem.nodeType === 1

    Nullo:

        variable === null

    Nullo o non definito (undefined):

        variable == null

    Non definito:

      Variabili globali:

        typeof variable === "undefined"

      Variabili locali:

        variable === undefined

      Proprietà:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Tipi forzati

    Considerate le implicazioni di ciò che segue...

    Dato questo codice HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` è stato dichiarato di valore `0` ed il suo tipo è `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Successivamente, in qualche altra parte del codice, necessitate di aggiornare `foo`
    // con un nuovo valore derivato da un elemento input

    foo = document.getElementById("foo-input").value;

    // Se testaste `typeof foo` adesso, il risultato sarebbe `string`
    // Ciò significa che se aveste del codice che testa `foo` in questo modo:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` non verrebbe mai eseguito, anche se `foo` fosse di valore "1"


    // 3.B.1.2

    // Potete prevenire questi problemi usando la forzatura intelligente con gli operatori unari + o -:

    foo = +document.getElementById("foo-input").value;
    //    ^ l'operatore + unario convertirà il suo operando destro in un numero

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` verrà eseguito
    ```

    Ecco alcuni casi comuni con forzature:


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

    // Tenete presente che i summenzionati esempi dovrebbero essere considerati come "eccessivamente chiari"
    // &Egrave; da preferire il più ovvio approccio di comparazione del valore ritornato
    // da indexOf, cioè:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // è l'equivalente di...

    ~~num;

    num >> 0;

    num >>> 0;

    // Tutti danno come risultato 2


    // Comunque ricordate che i numeri negativi verranno trattati differentemente...

    var neg = -2.5;

    parseInt( neg, 10 );

    // è l'equivalente di...

    ~~neg;

    neg >> 0;

    // Tutti danno come risultato -2
    // Ma...

    neg >>> 0

    // Darà come risultato 4294967294




    ```



4. <a name="cond">Esecuzione condizionale</a>

    ```javascript

    // 4.1.1
    // Quando si deve solo stabilire se un array ha una dimensione,
    // invece di questo:
    if ( array.length > 0 ) ...

    // ...verificate la verità condizionale, in questo modo:
    if ( array.length ) ...


    // 4.1.2
    // Quando si deve solo stabilire che un array è vuoto,
    // invece di questo:
    if ( array.length === 0 ) ...

    // ...verificate la verità condizionale, in questo modo:
    if ( !array.length ) ...


    // 4.1.3
    // Quando si deve solo stabilire che una stringa non è vuota,
    // invece di questo:
    if ( string !== "" ) ...

    // ...verificate la verità condizionale, in questo modo:
    if ( string ) ...


    // 4.1.4
    // Quando si deve solo stabilire che una stringa _è_ vuota,
    // invece di questo:
    if ( string === "" ) ...

    // ...verificate la verità condizionale, in questo modo:
    if ( !string ) ...


    // 4.1.5
    // Quando si deve solo stabilire che un riferimento è vero,
    // invece di questo:
    if ( foo === true ) ...

    // ...verificatelo per il suo significato, avvantaggiatevi delle funzionalità proprie del linguaggio:
    if ( foo ) ...


    // 4.1.6
    // Quando si deve solo stabilire che un riferimento è falso,
    // invece di questo:
    if ( foo === false ) ...

    // ...usate la negazione per forzare una valutazione vera
    if ( !foo ) ...

    // ...ma state attenti, questo varrà anche per: 0, "", null, undefined, NaN
    // Se _DOVETE_ testare per un falso booleano, allora usate
    if ( foo === false ) ...


    // 4.1.7
    // Quando si deve solo stabilire che un riferimento potrebbe essere null o undefined,
    // ma NON falso, "" o 0, invece di questo:
    if ( foo === null || foo === undefined ) ...

    // ...avvantaggiatevi della forzatura di tipo fatta da ==, in questo modo:
    if ( foo == null ) ...

    // Ricordate, l'uso di == farà corrispondere un `null` SIA a `null` che a `undefined`
    // ma non a `false`, "" o 0
    null == undefined

    ```
    Valutate SEMPRE per il risultato migliore e più accurato - quella sopra è una linea guida, non un dogma.

    ```javascript

    // 4.2.1
    // Note sulla forzatura di tipo e sulla valutazione

    // Preferite `===` a `==` (a meno che il caso non richieda una valutazione di tipo meno restrittiva)

    // === non forza il tipo, ciò significa che:

    "1" === 1:
    // false

    // == forza il tipo, ciò significa che:

    "1" == 1;
    // true


    // 4.2.2
    // Booleani, verità e falsità

    // Booleani:
    true, false

    // Verità:
    "foo", 1

    // Falsità:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Stile pratico</a>

    ```javascript

    // 5.1.1
    // Un modulo pratico

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Proprietà booleana
          bool: true,
          // Un valore stringa
          string: "a string",
          // Una proprietà array
          array: [ 1, 2, 3, 4 ],
          // Una proprietà oggetto
          object: {
            lang: "en-US"
          },
          getData: function() {
            // ottiene il valore corrente di `data`
            return data;
          },
          setData: function( value ) {
            // imposta il valore di `data` e lo ritorna
            return ( data = value );
          }
        };
      })();

      // Altre istruzioni

      // esponiamo il nostro modulo all'oggetto globale
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Un costruttore pratico

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


      // Per richiamare il costruttore senza `new`, potreste fare così:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // esponiamo il nostro costruttore all'oggetto globale
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Nomenclatura</a>



    A. Non siete un compilatore/compressore umano di codice, quindi non cercate di esserlo.

    Il seguente codice è un esempio di tremenda nomenclatura:

    ```javascript

    // 6.A.1.1
    // Esempio di codice con nomi per nulla chiari

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Sicuramente avrete scritto codice come questo - con la speranza che ciò finisca oggi.

    Ecco lo stesso pezzo di codice, ma con una nomencaltura più riflessiva ed esplicativa (ed una struttura leggibile):

    ```javascript

    // 6.A.2.1
    // Esempio di codice con nomi migliorati

    function query( selector ) {
      return document.querySelectorAll( selector );
    }

    var idx = 0,
      elements = [],
      matches = query("#foo"),
      length = matches.length;

    for( ; idx < length; idx++ ) {
      elements.push( matches[ idx ] );
    }

    ```

    Alcune ulteriori considerazioni:

    ```javascript

    // 6.A.3.1
    // Nominare stringhe

    `dog` è una stringa


    // 6.A.3.2
    // Nominare array

    `dogs` è un array di stringhe `dog`


    // 6.A.3.3
    // Nominare funzioni, oggetti, istanze, ecc.

    camelCase; dichiarazioni di funzione e variabile


    // 6.A.3.4
    // Nominare costruttori, prototipi, ecc.

    PascalCase; funzione costruttore


    // 6.A.3.5
    // Nominare espressioni regolari

    rDesc = //;


    // 6.A.3.6
    // Dalla guida allo stile della libreria di Google Closure

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. La varie faccie di `this`

    Oltre ai generalmente ben conosciuti casi d'uso di `call` e `apply`, preferite sempre `.bind( this )` o una funzione equivalente, per la creazione di definizioni `BoundFunction` che dovranno successivamente essere invocate. Ricorrete all'aliasing solo quando non ci sono altre opzioni disponibili.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // apre uno flusso asincrono,
      // questo verrà richiamato continuamente
      stream.read( opts.path, function( data ) {

        // Aggiorna il valore corrente di questa istanza
        // con il più recente valore recuperato dal
        // flusso di dati

      }.bind(this) );

      // Regola la frequenza degli eventi emessi da
      // questa istanza di Device
      setInterval(function() {

        // Emette un evento regolato
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Fate finta che abbiamo ereditato EventEmitter ;)

    ```

    Quando non disponibile, funzioni equivalenti a `.bind` esistono in molte librerie JavaScript moderne.


    ```javascript
    // 6.B.2

    // es. lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // es. jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // es. dojo.hitch
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

    Come ultima risorsa, create un alias a `this` usando `self` come identificatore. Con questo approccio è estremamente facile generare bug e dovrebbe essere evitato ogni volta che è possibile.

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


    C. Uso di `thisArg`

    Diversi metodi di istanza delle funzioni interni di ES 5.1 forniscono una speciale firma `thisArg`, che dovrebbe essere usata tutte le volte che è possibile

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| ora fa riferimento a `obj`

      console.log( this[ key ] );

    }, obj ); // <-- l'ultimo argomento è `thisArg`

    // Stampa...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` può essere usato con `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.filter`

7. <a name="misc">Varie</a>

    Questa sezione servirà ad illustrare idee e concetti che non dovrebbero essere considerati un dogma, ma che invece esistono per incoraggiare pratiche di analisi nel tentativo di ricercare le migliori modalità per eseguire attività comuni di programmazione JavaScript.

    A. L'utilizzo di `switch` dovrebbe essere evitato, il metodo moderno di analisi metterà nella lista nera le funzioni con istruzioni switch

    Sembra che ci siano drastici miglioramenti nell'esecuzione di istruzioni `switch` nelle ultime release di Firefox e Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module

    Visibili miglioramenti vengono riportati anche qui:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Un esempio di istruzione switch

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // qualcosa da eseguire di default
        break;
    }

    // 7.A.1.2
    // Un approccio alternativo che supporta componibilità e riusabilità è di
    // usare un oggetto come magazzino dei "casi" ed una funzione per delegare:

    var cases, delegator;

    // I return sono solo a titolo esplicativo.
    cases = {
      alpha: function() {
        // istruzioni
        // un return
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // istruzioni
        // un return
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // istruzioni
        // un return
        return [ "Default", arguments.length ]
      }
    };

    delegator = function() {
      var args, key, delegate;

      // Trasforma la lista degli argomenti in un array
      args = [].slice.call( arguments );

      // Estrae la chiave del caso dagli argomenti
      key = args.shift();

      // Assegna il gestore del caso di default
      delegate = cases._default;

      // Risale al metodo al quale delegare l'esecuzione
      if ( cases.hasOwnProperties( key ) ) {
        delegate = cases[ key ];
      }

      // L'argomento dello scope può essere impostato a qualcosa di specifico,
      // in questo caso, |null| sarà sufficiente
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Per funzionare prendiamo la API di 7.A.1.2:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Ovviamente, l'argomento chiave `case` può facilmente essere basato
    // su qualche altra condizione arbitraria.

    var caseKey, someUserInput;

    // Qualche possibile tipo di input da un form?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // oppure...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // E quindi...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // E ovviamente...

    delegator();
    // [ "Default", 0 ]


    ```

    B. I ritorni da funzione anticipati promuovono la leggibilità del codice a fronte di una differenza di performance trascurabile

    ```javascript

    // 7.B.1.1
    // Sbagliato:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Corretto:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Oggetti nativi e ospite</a>

    Il principio base qui è:

    ### Non fare cose stupide e tutto andrà per il meglio.

    Per rafforzare questo concetto, date un'occhiata alla seguente presentazione:

    #### “Everything is Permitted: Extending Built-ins” di Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Commenti</a>

  #### Linea singola sopra il codice a cui ci si riferisce
  #### Multilinea va bene
  #### Commenti a fine linea sono proibiti!
  #### Lo stile JSDoc va bene, ma richiede un significante investimento di tempo


10. <a name="language">Un codice di linguaggio</a>

    I programmi dovrebbero essere scritti in un linguaggio, qualsiasi esso sia, come richiesto dal mantenitore o dai mantenitori.

## Appendice

### Comma First.

Qualsiasi progetto che citi questo documento come sua guida base di stile non accetterà la formattazione comma first del codice, a meno che non sia esplicitamente specificato dall'autore del progetto.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
