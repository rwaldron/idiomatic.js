# Principles of Writing Consistent, Idiomatic JavaScript


## This is a living document and new ideas for improving the code around us are always welcome. Contribute: fork, clone, branch, commit, push, pull request.

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
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



## All code in any code-base should look like a single person typed it, no matter how many people contributed.

### The following list outlines the practices that we use in all code that we are the original author of.

> ### "Arguments over style are pointless. There should be a style guide, and you should follow it"
>_Rebecca_ _Murphey_

&nbsp;

> ### "Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec."
>_Idan_ _Gazit_


## Important, Non-Idiomatic Stuff:

### Code Quality Tools, Resources & References

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jshint](http://jshint.com/)
 * [Editorconfig](http://editorconfig.org/)

## Get Smart

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

The following should be considered 1) incomplete, and 2) *REQUIRED READING*. I don't always agree with the style written by the authors below, but one thing is certain: They are consistent. Furthermore, these are authorities on the language.

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript: The Good Parts] (https://7chan.org/pr/src/OReilly_JavaScript_The_Good_Parts_May_2008.pdf)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)




### Build & Deployment Process

Projects should always attempt to include some generic means by which source can be linted, tested and compressed in preparation for production use.




### Test Facility

Projects _must_ include some form of unit, reference, implementation or functional testing. Use case demos DO NOT QUALIFY as "tests". The following is a list of test frameworks, none of which are endorsed more than the other.

 * [Mocha](https://github.com/visionmedia/mocha)
 * [Chai.js](http://chaijs.com/)
 * [Sinon.js](http://sinonjs.org/)

## Table of Contents

 * [Whitespace](#whitespace)
 * [Beautiful Syntax](#spacing)
 * [Type Checking (Courtesy jQuery Core Style Guidelines)](#type)
 * [Conditional Evaluation](#cond)
 * [Practical Style](#practical)
 * [Naming](#naming)
 * [Misc](#misc)
 * [Native & Host Objects](#native)
 * [Comments](#comments)
 * [One Language Code](#language)
 * <a href="#Backbone">Backbone.js</a>



------------------------------------------------


## Preface

The following sections outline a _reasonable_ style guide for modern JavaScript development and are not meant to be prescriptive. The most important take-away is the **law of code style consistency**. Whatever you choose as the style for your project should be considered law. Link to this document as a statement of your project's commitment to code style consistency, readability and maintainability.





## Idiomatic Style Manifesto


1. <a name="whitespace">Whitespace</a>
  - Never mix spaces and tabs.
  - When beginning a project, before you write any code, always use spaces.
      - Always use 4 space tabs. Never more, never less.
  - If your editor supports it, always work with the "show invisibles" setting turned on. The benefits of this practice are:
      - Enforced consistency
      - Eliminating end of line whitespace
      - Eliminating blank line whitespace
      - Commits and diffs that are easier to read
  - Use [Editorconfig](http://editorconfig.org/) when possible.  It supports most IDEs and handles most whitespace settings.


2. <a name="spacing">Beautiful Syntax</a>

    A. Parens, Braces, Linebreaks

    ```javascript

    // if/else/for/while/try always have spaces, braces and span multiple lines
    // this encourages readability

    // 2.A.1.1
    // Examples of really cramped syntax

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Use whitespace to promote readability

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
    // Using only one `var` per scope (function) promotes readability
    // and keeps your declaration list free of clutter (also saves a few keystrokes)

    // Bad
    var foo = "";
    var bar = "";
    var qux;

    // Good
    var foo = "",
        bar = "",
        qux;

    // 2.B.1.3
    // var statements should always be in the beginning of their respective scope (function).


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

    // 2.B.1.4
    // const and let, from ECMAScript 6, should likewise be at the top of their scope (block).

    // Bad
    function foo() {
        let foo,
            bar;
        
        if (condition) {
            bar = "";
            // statements
        }
    }
    
    // Good
    function foo() {
        let foo;
        if (condition) {
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

    // Usage
    foo( arg1, argN );


    // 2.B.2.2
    // Named Function Declaration
    function square( number ) {
        return number * number;
    }

    // Usage
    square( 10 );

    // Really contrived continuation passing style
    function square( number, callback ) {
        callback( number * number );
    }

    square( 10, function( square ) {
        // callback statements
    });


    // 2.B.2.3
    // Function Expression with Identifier
    // This preferred form has the added value of being
    // able to call itself and have an identity in stack traces:
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

    // Usage
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Exceptions, Slight Deviations

    ```javascript

    // 2.C.1.1
    // Functions with callbacks
    foo(function() {
        // Note there is no extra space between the first paren
        // of the executing function call and the word "function"
    });

    // Function accepting an array, no space
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Function accepting an object, no space
    foo({
        a: "alpha",
        b: "beta"
    });

    // Single argument string literal, no space
    foo("bar");

    // Inner grouping parens, no space
    if ( !("foo" in obj) ) {

    }

    ```

    E. Quotes

    **We use only single quotes.**

    F. End of Lines and Empty Lines

    Whitespace can ruin diffs and make changesets impossible to read. Consider incorporating a pre-commit hook that removes end-of-line whitespace and blanks spaces on empty lines automatically.

3. <a name="type">Type Checking (Courtesy jQuery Core Style Guidelines)</a>

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

    Consider the implications of the following...

    Given this HTML:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `foo` has been declared with the value `0` and its type is `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Somewhere later in your code, you need to update `foo`
    // with a new value derived from an input element

    foo = document.getElementById("foo-input").value;

    // If you were to test `typeof foo` now, the result would be `string`
    // This means that if you had logic that tested `foo` like:

    if ( foo === 1 ) {

        importantTask();

    }

    // `importantTask()` would never be evaluated, even though `foo` has a value of "1"


    // 3.B.1.2

    // You can preempt issues by using smart coercion with unary + or - operators:

    foo = +document.getElementById("foo-input").value;
    //    ^ unary + operator will convert its right side operand to a number

    // typeof foo;
    // "number"

    if ( foo === 1 ) {
        importantTask();
    }

    // `importantTask()` will be called
    ```

    Here are some common cases along with coercions:


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
    // Never do any of this. It's too complex.

    var array = [ "a", "b", "c" ];

    !!~array.indexOf("a");
    // true

    !!~array.indexOf("b");
    // true

    !!~array.indexOf("c");
    // true

    !!~array.indexOf("d");
    // false

    // Note that the above should be considered "unnecessarily clever"
    // Prefer the obvious approach of comparing the returned value of
    // indexOf, like:

    if ( array.indexOf( "a" ) >= 0 ) {
        // ...
    }
    ```

    ```javascript
    // 3.B.2.4
    // Never do any of this. It's too complex.

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



4. <a name="cond">Conditional Evaluation</a>

    ```javascript

    // 4.1.1
    // When only evaluating that an array has length,
    // instead of this:
    if ( array.length > 0 ) ...

    // ...evaluate truthiness, like this:
    if ( array.length ) ...


    // 4.1.2
    // When only evaluating that an array is empty,
    // instead of this:
    if ( array.length === 0 ) ...

    // ...evaluate truthiness, like this:
    if ( !array.length ) ...


    // 4.1.3
    // When only evaluating that a string is not empty,
    // instead of this:
    if ( string !== "" ) ...

    // ...evaluate truthiness, like this:
    if ( string ) ...


    // 4.1.4
    // When only evaluating that a string _is_ empty,
    // instead of this:
    if ( string === "" ) ...

    // ...evaluate falsy-ness, like this:
    if ( !string ) ...


    // 4.1.5
    // When only evaluating that a reference is true,
    // instead of this:
    if ( foo === true ) ...

    // ...evaluate like you mean it, take advantage of built in capabilities:
    if ( foo ) ...


    // 4.1.6
    // When evaluating that a reference is false,
    // instead of this:
    if ( foo === false ) ...

    // ...use negation to coerce a true evaluation
    if ( !foo ) ...

    // ...Be careful, this will also match: 0, "", null, undefined, NaN
    // If you _MUST_ test for a boolean false, then use
    if ( foo === false ) ...


    // 4.1.7
    // When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
    // instead of this:
    if ( foo === null || foo === undefined ) ...

    // ...take advantage of == type coercion, like this:
    if ( foo == null ) ...

    // Remember, using == will match a `null` to BOTH `null` and `undefined`
    // but not `false`, "" or 0
    null == undefined

    ```
    ALWAYS evaluate for the best, most accurate result - the above is a guideline, not a dogma.

    ```javascript

    // 4.2.1
    // Type coercion and evaluation notes

    // Prefer `===` over `==` (unless the case requires loose type evaluation)

    // === does not coerce type, which means that:

    "1" === 1;
    // false

    // == does coerce type, which means that:

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


5. <a name="practical">Practical Style</a>

    ```javascript

    // 5.1.1
    // A Practical Module

    (function( global ) {
        var Module = (function() {
            var data = "secret";

            return {
                // This is some boolean property
                bool: true,
                // Some string value
                string: "a string",
                // An array property
                array: [ 1, 2, 3, 4 ],
                // An object property
                object: {
                    lang: "en-Us"
                },
                getData: function() {
                    // get the current value of `data`
                    return data;
                },
                setData: function( value ) {
                    // set the value of `data` and return it
                    return ( data = value );
                }
            };
        })();

        // Other things might happen here

        // expose our module to the global object
        global.Module = Module;
    })( this );

    ```

    ```javascript

    // 5.2.1
    // A Practical Constructor

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


        // To call constructor's without `new`, you might do this:
        var ctor = function( foo ) {
            return new Ctor( foo );
        };


        // expose our constructor to the global object
        global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Naming</a>



    A. You are not a human code compiler/compressor, so don't try to be one.

    The following code is an example of egregious naming:

    ```javascript

    // 6.A.1.1
    // Example of code with poor names

    function q(s) {
        return document.querySelectorAll(s);
    }
    
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```

    Without a doubt, you've written code like this - hopefully that ends today.

    Here's the same piece of logic, but with kinder, more thoughtful naming (and a readable structure):

    ```javascript

    // 6.A.2.1
    // Example of code with improved names

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

    A few additional naming pointers:

    ```javascript

    // 6.A.3.1
    // Naming strings

    `dog` is a string


    // 6.A.3.2
    // Naming arrays

    `dogs` is an array of `dog` strings


    // 6.A.3.3
    // Naming functions, objects, instances, etc

    camelCase; function and var declarations


    // 6.A.3.4
    // Naming constructors, prototypes, etc.

    PascalCase; constructor function


    // 6.A.3.5
    // Naming regular expressions

    rDesc = //;
    
    // 6.A.3.6
    // Naming jQuery objects
    
    $bodyEl = $( 'body' );
    
    // 6.A.3.7
    // Naming index variables
    // Always use `idx`
    
    for ( var idx = 0; idx < x.length; idx++ ) {
        // do stuff
    }
    
    // 6.A.3.8
    // Naming events
    // Always use `evt`
    
    $( 'body' ).on( 'click.runFunc', function( evt ) {
        // do something with evt
    });


    // 6.A.3.9
    // From the Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

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

7. <a name="misc">Misc</a>

    This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

    A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch statements

    There seems to be drastic improvements to the execution of `switch` statements in latest releases of Firefox and Chrome.
    http://jsperf.com/switch-vs-object-literal-vs-module

    Notable improvements can be witnessed here as well:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // An example switch statement

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
    // A alternate approach that supports composability and reusability is to
    // use an object to store "cases" and a function to delegate:

    var cases, delegator;

    // Example returns for illustration only.
    cases = {
        alpha: function() {
            // statements
            // a return
            return [ "Alpha", arguments.length ];
        },
        beta: function() {
            // statements
            // a return
            return [ "Beta", arguments.length ];
        },
        _default: function() {
            // statements
            // a return
            return [ "Default", arguments.length ];
        }
    };

    delegator = function() {
        var args, key, delegate;

        // Transform arguments list into an array
        args = [].slice.call( arguments );

        // shift the case key from the arguments
        key = args.shift();

        // Assign the default case handler
        delegate = cases._default;

        // Derive the method to delegate operation to
        if ( cases.hasOwnProperty( key ) ) {
            delegate = cases[ key ];
        }

        // The scope arg could be set to something specific,
        // in this case, |null| will suffice
        return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Put the API in 7.A.1.2 to work:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Of course, the `case` key argument could easily be based
    // on some other arbitrary condition.

    var caseKey, someUserInput;

    // Possibly some kind of form input?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
        caseKey = "alpha";
    } else {
        caseKey = "beta";
    }

    // or...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // And then...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // And of course...

    delegator();
    // [ "Default", 0 ]


    ```

    B. Early returns promote code readability with negligible performance difference

    ```javascript

    // 7.B.1.1
    // Bad:
    function returnLate( foo ) {
        var ret;

        if ( foo ) {
            ret = "foo";
        } else {
            ret = "quux";
        }
        return ret;
    }

    // Good:

    function returnEarly( foo ) {

        if ( foo ) {
            return "foo";
        }
            return "quux";
        }
    }

    ```
    
    C. DOM events should always be namspaced
    
    ```javascript
    // 7.C.1.1
    // Bad:
    $( 'body' ).on( 'click', function() {
        // do something
    });
    
    // Good:
    $( 'body' ).on( 'click.eventName', function() {
        // do something
    });


8. <a name="native">Native & Host Objects</a>

    The basic principle here is:

    ### Don't do stupid shit and everything will be ok.

    To reinforce this concept, please watch the following presentation:

    #### “Everything is Permitted: Extending Built-ins” by Andrew Dupont (JSConf2011, Portland, Oregon)

    <iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

    http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Comments</a>

    #### Single line above the code that is subject
    #### Multiline is good
    #### End of line comments are prohibited!
    #### JSDoc style is required for datuUI functions!


10. <a name="language">One Language Code</a>

    Programs should be written in one language, whatever that language may be, as dictated by the maintainer or maintainers.
    
<h2 id="Backbone">Backbone.js</h2>
<p>At Datu Health, we currently use the <a rel="nofollow" class="external text" href="http://backbonejs.org/" target="_blank">Backbone.js</a> framework to structure our front end code. It's a pretty flexible solution and provides tools to build single page applications. The previous link takes you to the source, but you may also want to reference the <a rel="nofollow" class="external text" href="http://backbonejs.org/docs/backbone.html" target="_blank">annotated source</a> as it provides a little more context and insight into how each method works. Backbone includes <a href="http://underscorejs.org/" target="_blank">Underscore.js</a> so become familiar with it.</p></p>
<p>A lot of this info is taken from the Backbone site, but it has been filtered a bit in the attempt to lay things out in a little more novice friendly way.</p>

<h3>Backbone high level concept</h3>
<p>In Backbone we have <a href="#Backbone_Routers">Backbone Routers</a> which parse your routes (url) and sends you to the appropriate <a href="#Backbone_Views">Backbone View</a>. In the <a href="#Backbone_Views">Backbone View</a>, you have the bulk of the code that displays and manipulates the html/css. If you have data, a singular object would be stored in a <a href="#Backbone_Models">Backbone Model</a> whereas a collection of similar items would be stored in a <a href="#Backbone_Collections">Backbone Collection</a> -- in other words, if you only have a single person object (that holds their info), that would generally be stored in a model -- but if you had, say, an address book, you would have several people objects. You can then take that data and use it in the view to pass along to a template to get rendered.

<p>
Comparing the overall structure of Backbone to a server-side MVC framework like Rails, the pieces line up like so:</p>
<ul>
<li>Backbone.Model – Like a Rails model minus the class methods. Wraps a row of data in business logic.</li>
<li>Backbone.Collection – A group of models on the client-side, with sorting/filtering/aggregation logic.</li>
<li>Backbone.Router – Rails routes.rb + Rails controller actions. Maps URLs to functions.</li>
<li>Backbone.View – A logical, re-usable piece of UI. Often, but not always, associated with a model.</li>
<li>Client-side Templates – Rails .html.erb views, rendering a chunk of HTML.</li>
</ul>

<h3 id="Backbone_Routers">Backbone Routers</h3>
<p>This is where you parse the url, which is what essentially pertains to the section after the domain. E.g. https://my-site.com/#stuff-that-backbone-cares-about</p>
<p>In the router you'll specify a routes object like so:</p>
<pre> routes: {
   'super-cool-route': 'superCoolRouteHandler'
 }
</pre>
<p>Where the key is the url portion, e.g. domain/<b>#super-cool-route</b></p>
<p>And the value is the name of the method that will handle what happens when the user hits that route:</p>
<pre> ... 
 superCoolRouteHandler: function() {
   //Do some cool stuff, like call a backbone view and render some content
 }
 ...
</pre>
<p>Routes can contain parameter parts, e.g. :param, which match a single URL component between slashes. Part of a route can be made optional by surrounding it in parentheses (/:optional).  For example:</p>
<pre>
'patients/:patientId/messages(/:subItem)': 'patientMessages',
</pre>
<p>During page load, after your application has finished creating all of its routers, be sure to call Backbone.history.start(), or Backbone.history.start({pushState: true}) to route the initial URL, which serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks. You shouldn't ever have to create one of these yourself since Backbone.history already contains one.</p>

<h3 id="Backbone_Views">Backbone Views</h3>
<p>You should have all of the code pertaining to the look and feel of the page in a view. That is, once you have your data ready in your collection or model (more on that below) you then take that data and use the view to render it -- in our case, we use a template that we pass along the data to in order to render it.</p>
<p>However, the view also holds logic, where applicable/necessary, to manipulate the dom -- e.g. binding events, adding/removing classes, etc.</p>

<h5>Key Properties/Methods</h5>
<p><b>el</b>: this is one of two things and it's good to know the difference.</p>
<ul>
<li>A CSS style selector of the dom node you want the content of your view to be added to. E.g.</li>
</ul>
<pre>   el: 'div.my-awesome-div'
</pre>
<ul>
<li>If left undefined, el becomes an empty &lt;div&gt;</li>
</ul>
<p><br>
<b>$el</b>: this is a cached jquery object of the aforementioned el. You can reference it in the view via calling: this.$el</p>
<p><br>
<b>events</b>: this is an object that you can define in the view, and backbone will automatically bind the events for you. You must be aware though, that the events must follow a certain syntax and that they are bound to the view's "el" -- meaning you cannot bind events that are not descendants of "el" with this object.</p>
<ul>
<li>Syntax is as follows: the <b>key</b> of the item must have the event type first (e.g. click, keyup, etc), followed by a space, and then followed by a CSS style selector. The <b>value</b> of the item must be the name of a method you've created to handle the event</li>
</ul>
<pre>   events: {
       'click li.my-awesome-menu-item': 'myAwesomeMenuHandler'
   }
   ...
   myAwesomeMenuHandler: function(event) {
       //handle the click event appropriately
   }
</pre>
<p><br>
<b>initialize</b>: this is a method that gets called as the view is created. If you want/need to, you can define it so that you can do various actions like pass along information from outside the view, setup a collection/model, setup listeners, and more. For example:</p>
<pre>   initialize: function (options) {
       //we can pass along data/info 
       options = options || {};
       this.awesomeData = options.awesomeData || [];
       
       //we can setup a collection
       this.collection = new AwesomeCollection();
       
       //we can setup listeners (more on this later)
       this.listenTo(this.collection, 'someCustomActionCalledByTheCollection', this.awesomeActionHandlerMethod)
   }
</pre>
<p><b>render</b>: this is the heart of the view essentially. You define this method as how the view will render its content -- you setup the template and pass it any data it needs to render. E.g.</p>
<pre>   render: function() {
       var template = MyAwesomeTemplate;
       
       this.$el.html(template({
           myAwesomeData1: 'some data'
           myAwesomeData2: 'some more data'
       }));
   }
</pre>

<h3 id="Backbone_Models">Backbone Models</h3>
<p>A model is, very generally, a single object in terms of data. For example, if you have a table that is populated with several rows, and each row has a friend alongside a little of their information, that row's data would be housed in a model.</p>
<p>Backbone models provide a robust set of properties and methods, but in the interest of brevity, we'll look at a few key ones.</p>

<h5>Key Properties/Methods</h5>
<p><b>url</b>: this is a vital property to set if you are going to use the model to make an async call. It's what the Backbone.sync method (essentially a jquery ajax call with added features) points at to make the call. Pretty self explanatory, but worth mentioning nonetheless.</p>
<p><br>
<b>initialize</b>: much like the initialize method mentioned above in the Backbone views section, this method will run after the model has been created. You can pass along data, bind listeners, etc.</p>
<p><br>
<b>attributes</b>: an object that holds the model's data. More generally, it's where data gets set when using backbone conventions. It's not recommended to change these directly -- backbone provides accessor methods.</p>
<p><br>
<b>get</b>: the method to get a property from the attributes object. Syntax is generally: myModel.get('myProperty')</p>
<p><br>
<b>set</b>: the setter method has two implementations.</p>
<ul>
<li>You can pass it a single value: myModel.set('key', 'value');</li>
<li>Or you can pass it an object: myModel.set({ key1: 'value1', key2: 'value2'});</li>
</ul>
<p><br>
<b>fetch</b>: generally, this is the method used to get data from the server. The default implementation allows you to easily mirror the server side data on the clientside, but this is generally more used in true RESTful situations. **This will not clear out your model, but rather extends the attributes of your model**. Side note: we at Datu sometimes repurpose the fetch method to be a semantic way of getting data.</p>
<p><br>
<b>parse</b>: a method that can be defined so as to parse the raw AJAX response. For example, if you have a date coming back in the response, by setting a parse method, you can handle the date parsing for that model, and any other model of the same type with one defined method that is called from parse.</p>
<p><br>
<b>Backbone.sync</b>: While not truly attached to a backbone model specifically, it is the primary method of making asynchronous calls. It takes three parameters: 1) a string that represents a HTTP verb. In our code, you'll see 'read' (GET), and 'create' (POST). 2) the model or collection to be read/saved. 3) options. These can be the callback methods as well as any other jquery request options.</p>

<h5>Default Model Values</h5>
<p>Backbone includes "defaults", however, the problem with it is that it only goes one level deep, so if you have nested objects being returned, there are places that will try to dereference something null and it'll blow up. At Datu we have created a custom function named setDefaults(), which is on the model prototype, so it is available to any model.  It should be called from within the parse function of the model like so:</p>
<pre>
parse: function(resp) {
    this.setDefaults(resp);
}
</pre>
<p>The default values should be specified from within the model like so:</p>
<pre>defaultVals: {
            "Name": "--",
            "Categories": [],
            "Date": "--",
            "Status": "--",
            "ID": "--",
            "Codes": [
                {
                    "System": "--",
                    "Standard": "--",
                    "Name": "--"
                }
            ]
        }
});</pre></p>

<h5>Validation</h5>
<p>Here at Datu we use a <a href="https://github.com/thedersen/backbone.validation" target="_blank">validation plugin</a> for validating backbone models. Please only use this method for validation<p>

<h3 id="Backbone_Collections">Backbone Collections</h3>
<p>Much like how a model often represents a row of table data, a collection often represents the entire table itself -- in other words it is an ordered set of models. At a high level, you can think of it like a JSON array of objects: [{model1}, {model2}, {model3}, ... ]</p>
<p>And also like the model, it has several properties and methods, but we're mainly concerned with a few key ones.</p>

<h5>Key Properties/Methods</h5>
<p><b>url</b>: this is a vital property to set if you are going to use the model to make an async call. It's what the Backbone.sync method (essentially a jquery ajax call with added features) points at to make the call. Pretty self explanatory, but worth mentioning nonetheless.</p>
<p><br>
<b>model</b>: this is to specify a model class that the collection houses. For example, if my collection is "Cars" the model might be "Car"</p>
<p><br>
<b>initialize</b>: much like the initialize method mentioned above, this method will run after the model has been created. You can pass along data, bind listeners, etc.</p>
<p><br>
<b>models</b>: the raw array of objects -- often used when passing the entire collection to a template for a table to be rendered.</p>
<p><br>
<b>get</b>: the method to get a specific model from the collection. You need to know the id of the model (assigned upon the model's creation).</p>
<p><br>
<b>set</b>: the setter method will do a "smart" update on the collection where it will create models if they are new, delete models if they are present in the current list and not present in the list passed to the method, and will change any existing models if necessary. This takes takes a list of models (an array of objects).</p>
<p><br>
<b>reset</b>: this will completely reset the collection, discarding any previous models the collection held, and repopulates the list with the models passed to the method. This also takes takes a list of models (an array of objects).</p>
<p><br>
<b>fetch</b>: generally, this is the method used to get data from the server. The default implementation allows you to easily mirror the server side data on the clientside, but this is generally more used in true RESTful situations. **This will not clear out your collection, but rather extends the attributes of your collection**. Side note: we at Datu sometimes repurpose the fetch method to be a semantic way of getting data.</p>
<p><br>
<b>Backbone.sync</b>: While not truly attached to a backbone collection specifically, it is the primary method of making asynchronous calls. It takes three parameters: 1) a string that represents a HTTP verb. In our code, you'll see 'read' (GET), and 'create' (POST). 2) the model or collection to be read/saved. 3) options. These can be the callback methods as well as any other jquery request options.</p>

<h3 id="Backbone_Events">Backbone Events</h3>
<p>This has been mentioned above, but Backbone has an events module that can be used to bind and trigger custom events. This is available in any Backbone object (views, models, controllers, routers) and can also be extended on in order to do things like create a global event bus.  View events are automatically bound to the view's context for you. </p>
<p>These events do not have to be declared when they are bound and they can also take arguments. Example:</p>
<pre>   //In a view, bind a custom listener to its collection to know when to render content
   this.listenTo( this.collection, 'renderContent', this.render);
   ...
   //In the collection, once a successful AJAX call has been made, and the response has been set in the collection, we can trigger a render
   this.trigger('renderContent')
</pre>

<h3>Backbone Best Practices</h3>
<p>In general, a good rule of thumb is to keep your concerns separate. The backbone paradigm and design offers logical places to handle various bits of logic.</p>
<ul>
<li>Keep all dom manipulation logic in the view.</li>
<li>Keep all data manipulation logic in the model or collection. You can easily reuse and extend models and collections throughout your application without concern for the views that are tying into them.</li>
<li>Keep all the AJAX and corresponding asynchronous logic in the model or collection.</li>
<li>Keep your templates as simple as possible -- some logic is unavoidable, but most of the data should be nice and neat <i>before</i> it gets to the template</li>
</ul>

<h5 id="Callbacks_Deferreds">AJAX Calls, Callbacks, Deferreds</h5>
<p>When making asynchronous calls, there are different ways to handle the data responses coming back. At Datu we strongly prefer developers <b>not</b> use deferreds (represents work that is not yet finished). While deferreds are a powerful tool to handle post-AJAX call duties, implementation can vary wildly (and has). One of the bigger overarching problems with deferreds is that they can be extremely fragile since you have to be very cognizant of more than just happy path handling.</p>
<p>As an alternative, anyone doing front end dev should use the built in callback methods that are available in Backbone.sync. More specifically these methods are:</p>
<ul>
<li>success -- this is called when (and only when) you get a good http response</li>
<li>error -- this is called when you get any sort of "error" http response (401, 403, 404, 500, etc)</li>
<li>complete -- this is called when the call response comes back, regardless of http success or error</li>
</ul>
<p>With those three callbacks combined with Backbone events, there's really no reasonable need for deferreds outside of a handful of very specific cases. At this point, there are deferreds in the code base -- however, moving forward, anyone that uses a deferred should have a strong case as to why it's better than the system of callbacks, and why the aforementioned system cannot be used. Further, the person reviewing new code should ask the question if they see a deferred in the submitted code.</p>

<h5 id="Memory_Leaks">Avoid Memory Leaks By Unbinding Events</h5>
<p>Avoid using .on() when binding an event:
<pre>
initialize: function() {
    this.model.on('change', this.render, this);
}
</pre>
<p>When using .on(), the "change" event handler is still bound even after the view has been removed. Even though your code no longer holds a reference to that view, it is never garbage collected since the model still holds a reference via the event handler. So while the DOM element may be removed, the view object itself is never released from memory. Use the .listenTo() method instead, like this:
<pre>
initialize: function() {
    this.listenTo(this.model, 'change', this.render);
}
</pre>

<h5>Binding "this"</h5> 
<p>
Perhaps the single most common JavaScript "gotcha" is the fact that when you pass a function as a callback, its value for this is lost. When dealing with events and callbacks in Backbone, you'll often find it useful to rely on listenTo or the optional context argument that many of Underscore and Backbone's methods use to specify the this that will be used when the callback is later invoked.</p>
<pre>
messages.each(this.addMessage, this);
</pre>  

<h5 id="View_Parts">Render Parts Of Views Instead Of Entire Views</h5>
<p>This prevents the entire view from re-rendering everytime there is a change to a model or collection. Instead try re-rendering only the part of the view corresponding to the changed attribute in the model or model in the collection. For example, create a template and view that pertains to each model in the collection.</p>
</div>

## Appendix

### Comma First.

Any project that cites this document as its base style guide will not accept comma first code formatting, unless explicitly specified otherwise by that project's author.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
