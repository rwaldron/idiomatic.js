# Principals of Writing Consistent, Idiotmatic JavaScript

### All code in any code-base should look like a single person typed it, no matter how many people contributed. 

### The following list outlines the practices that I use in all code that I am the original author of; contributions to projects that I have created should follow these guidelines. 

### I do not intend to impose my style preferences on other people's code if they have an existing common style - this should be respected. 


#### This is a living document, contributions are welcome: fork, clone, branch, commit, push, pull request.


## Code Quality

Code should always be verifiable by means of commonly accepted, de-facto standards. Preferably, [JSHint](http://jshint.org/) ... [JSLint](http://jslint.org/) if you _must_.

## Build & Deployment Process

Projects _must_ include some generic means by which source can be compressed in preparation for production use. Preferably, Uglify.js via Node.js. Alternatively, Google Closure Compiler or YUI Compressor via js.jar are acceptable substitutes. Choose one and support it.

## Test Facility

Projects _must_ include some form of unit, reference, implementation or functional testing. Use case demos DO NOT QUALIFY as "tests".

## Style Manifesto


1. NEVER MIX WHITESPACE. Two space soft indents (fake tabs) OR tabs

2. Spacing

    A. Parens, Braces, Linebreaks

        // if/else/for/while/try always have spaces, braces and span multiple lines
        // this encourages readability

        //  Bad
        if(condition) doSomething();
  
        while(condition) iterating++;
  
        for(var i=0;i<100;i++) someIterativeFn();
  
        //  Good
        if ( condition ) {
          // statements
        }

        while ( condition ) {
          // statements
        }

        for ( var i = 0; i < 100; i++ ) {
          // statements
        }
  
        if ( true ) {
          // statements
        } else {
          // statements
        }




    B. Assignments, Declarations, Functions ( Named, Expression, Constructor )

        // Variables
        var foo = "bar", 
            num = 1, 
            undef;

        // Literal notations:
        var array = [], 
            object = {};

        // Attempt to maintain a single `var` per scope

        // Bad:
        var foo = "";
        var bar = "";
        var qux;

        // Good:
        var foo = "", 
            bar = "", 
            qux;

        // or.. 
        var // Comment on these
        foo = "", 
        bar = "", 
        qux;

        // Good: Named Function + Usage
        function foo( arg1, argN ) {

        }

        foo( arg1, argN );


        // Good: Named Function + Usage with callback
        function bar( arg1, callback ) {

          if ( arg1 && callback ) {
            callback();
          }
        }

        bar( arg1, function() {
          // callback statements
        });


        // Good: Function Expression + Usage
        var quux = function( arg1, callback ) {

          if ( arg1 && callback ) {
            callback();
          }

          // always return 'something'
          return true;
        }

        quux( arg1, function() {
          // callback statements
        });


        // Good: Constructor definition
        function FooBar() {
          return this;
        }

        var fooBar = new FooBar();



    C. Exceptions, Slight Deviations
  
        // Functions with callbacks 
        foo(function() { 
            ^ No space

        });
        ^ No space


        // Functions accepting arrays
        foo([         ]);
            ^          ^ No space


        // Functions accepting object
        foo({         });
            ^          ^ No space


        // Inner parens:
        if ( !("foo" in obj) ) {
               ^           ^ No Space
        }


3. Type Checking (Courtesy jQuery Core Style Guidelines)

  * String: typeof object === "string"
  * Number: typeof object === "number"
  * Boolean: typeof object === "boolean"
  * Object: typeof object === "object"
  * Array: Array.isArray(arrayObject) wherever possible
  * null: object === null
  * null or undefined: object == null
  * undefined:
      * Global Variables: typeof variable === "undefined"
      * Local Variables: variable === undefined
      * Properties: object.prop === undefined


4. Evaluation

        
        // Bad
        array.length > 0

        // Good
        array.length


        // Bad
        array.length === 0

        // Good
        !array.length


        // Bad
        string !== ""

        // Good
        string


        // Bad
        string === ""

        // Good
        !string


        // Bad
        foo === true

        // Good
        foo


        // Bad
        foo === false

        // Good
        !foo
          // Be careful, this will also match: 0, "", null, undefined, NaN


        // Bad
        foo === null || foo === undefined

        // Good
        foo == null
          // Using == will match null as both null and undefined
          // but not false

        
        // Notes:

        Prefer `===` over `==` (unless the case requires loose type evaluation )
  
        Booleans, Truthies & Falsies
        
        Booleans: true, false

        Truthy are: "foo", 1

        Falsy are: "", 0, null, undefined, NaN, void 0


  
4. Style  

        // A Practical Application:

        var Module = (function() {
                      ^ No space

          // really private 
          var private = "secret";

          return {
            // properties
            defaults: {
              // comments
              bool: true, 
              // comments
              string: "a string",
              // comments
              array: [ 1, 2, 3, 4 ], 
              // comments
              object: {
                  lang: "en-Us"
              }
            }, 
            getBool: function() {
              // comments
              return this.defaults.bool;
            },
            setBool: function( arg1 ) {
              // comments
              return ( this.defaults.bool = arg1 );
            }
          };
        })();

  * NOTE: Comments are never at the end of the line, 
          always on the line above.


5. Naming

        `dog` is a string

        `dogs` is an array of `dog` strings

        camelCase; function and var declarations

        PascalCase; constructor function


6. Misc

    A. Using `switch` should be avoided, modern method tracing blacklists functions with switch statements


        
        // Bad:

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

        // Good:

        var module = (function () {
          return {
            alpha: function() {
              // statements
              // a return
            }, 
            beta: function() {
              // statements
              // a return
            }, 
            default: function() {
              // statements
              // a return
            }
          };
        })();

        // If `foo` is a property of `module`, execute the method 
        module[ foo ] && module[ foo ]();


        // This pattern is also really good because it promotes code reusability.


    B. Early returns are nice clean and sometimes offer perf boosts

        
        // Bad:
        function returnLate( foo )  {
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



7. Comments

  * JSDoc style is good (Closure Compiler type hints++)
  * Single line above the code that is subject
  * Multiline is good
  * End of line comments are prohibited!
  

  

