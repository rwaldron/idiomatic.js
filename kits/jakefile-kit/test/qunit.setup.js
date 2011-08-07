(function( global, QUnit ) {




var

AP = Array.prototype,
OP = Object.prototype,

forEach = AP.forEach,
slice = AP.slice,
hasOwn = OP.hasOwnProperty,
toString = OP.toString;


QUnit.forEach = function( obj, fn, context ) {

  if ( !obj || !fn ) {
    return {};
  }

  context = context || this;

  var key, len;

  // Use native whenever possible
  if ( forEach && obj.forEach === forEach ) {
    return obj.forEach( fn, context );
  }

  if ( toString.call( obj ) === "[object NodeList]" ) {
    for ( key = 0, len = obj.length; key < len; key++ ) {
      fn.call( context, obj[ key ], key, obj );
    }
    return obj;
  }

  for ( key in obj ) {
    if ( hasOwn.call( obj, key ) ) {
      fn.call( context, obj[ key ], key, obj );
    }
  }
  return obj;
};


})( this, QUnit );