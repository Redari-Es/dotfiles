/*! LINER Core Script | (c) Made by Jin Woo Kim, CEO at LINER Inc. | (License) Not allowed to be used by anyone, except the maker(Jin Woo Kim, CEO at LINER Inc.) */
// Luke - config.js
if ((window.injectLinerConfigJS || (window.injectLinerCoreScript || window.top === window)) && !window.isConfigJSInjected) {
    window.isConfigJSInjected = true;

    window.linerCoreScriptVersion = "0.1.26";
    const linerCoreType = 'be';  // Luke - todo: 상황에 맞게 세팅해줄 것
    
    if (linerCoreType === 'be') {
        window.isProductionMode = true;
        window.isLinerBrowserDesktopDebugMode = false;
        window.isLinerBrowser = false;
        window.isLinerAPIMode = false;      
    } else if (linerCoreType === 'be_debug') {
        window.isProductionMode = false;
        window.isLinerBrowserDesktopDebugMode = false;
        window.isLinerBrowser = false;
        window.isLinerAPIMode = false;      
    } else if (linerCoreType === 'ocean') {
        window.isProductionMode = true;
        window.isLinerBrowserDesktopDebugMode = false;
        window.isLinerBrowser = true;
        window.isLinerAPIMode = false;     
    } else if (linerCoreType === 'ocean_debug') {
        window.isProductionMode = false;
        window.isLinerBrowserDesktopDebugMode = false;
        window.isLinerBrowser = true;
        window.isLinerAPIMode = false;
    } else if (linerCoreType === 'ocean_debug_desktop') {
        window.isProductionMode = false;
        window.isLinerBrowserDesktopDebugMode = true;
        window.isLinerBrowser = true;
        window.isLinerAPIMode = false;    
    } else if (linerCoreType === 'api') {
        window.isProductionMode = true;
        window.isLinerBrowserDesktopDebugMode = false;
        window.isLinerBrowser = false;
        window.isLinerAPIMode = true;    
    } else if (linerCoreType === 'api_debug') {
        window.isProductionMode = false;
        window.isLinerBrowserDesktopDebugMode = false;
        window.isLinerBrowser = false;
        window.isLinerAPIMode = true;    
    }

    window.isProductionMode ? window.isLinerBrowserDesktopDebugMode = false : null;
}

// Luke - jquery.3.5.1.js
if ((window.injectLinerJQuery || (window.injectLinerCoreScript || window.top === window)) && !window.isJqueryInjected) {
    window.isJqueryInjected = true;
    const originalDollar = window.$;
    const originalJQuery = window.jQuery;

    /*!
    * jQuery JavaScript Library v3.5.1
    * https://jquery.com/
    *
    * Includes Sizzle.js
    * https://sizzlejs.com/
    *
    * Copyright JS Foundation and other contributors
    * Released under the MIT license
    * https://jquery.org/license
    *
    * Date: 2020-05-04T22:49Z
    */
    ( function( global, factory ) {

        "use strict";

        if ( typeof module === "object" && typeof module.exports === "object" ) {

            // For CommonJS and CommonJS-like environments where a proper `window`
            // is present, execute the factory and get jQuery.
            // For environments that do not have a `window` with a `document`
            // (such as Node.js), expose a factory as module.exports.
            // This accentuates the need for the creation of a real `window`.
            // e.g. var jQuery = require("jquery")(window);
            // See ticket #14549 for more info.
            module.exports = global.document ?
                factory( global, true ) :
                function( w ) {
                    if ( !w.document ) {
                        throw new Error( "jQuery requires a window with a document" );
                    }
                    return factory( w );
                };
        } else {
            factory( global );
        }

    // Pass this if window is not defined yet
    } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";

    var arr = [];

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var flat = arr.flat ? function( array ) {
        return arr.flat.call( array );
    } : function( array ) {
        return arr.concat.apply( [], array );
    };


    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call( Object );

    var support = {};

    var isFunction = function isFunction( obj ) {

        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };


    var isWindow = function isWindow( obj ) {
            return obj != null && obj === obj.window;
        };


    var document = window.document;



        var preservedScriptAttributes = {
            type: true,
            src: true,
            nonce: true,
            noModule: true
        };

        function DOMEval( code, node, doc ) {
            doc = doc || document;

            var i, val,
                script = doc.createElement( "script" );

            script.text = code;
            if ( node ) {
                for ( i in preservedScriptAttributes ) {

                    // Support: Firefox 64+, Edge 18+
                    // Some browsers don't support the "nonce" property on scripts.
                    // On the other hand, just using `getAttribute` is not enough as
                    // the `nonce` attribute is reset to an empty string whenever it
                    // becomes browsing-context connected.
                    // See https://github.com/whatwg/html/issues/2369
                    // See https://html.spec.whatwg.org/#nonce-attributes
                    // The `node.getAttribute` check was added for the sake of
                    // `jQuery.globalEval` so that it can fake a nonce-containing node
                    // via an object.
                    val = node[ i ] || node.getAttribute && node.getAttribute( i );
                    if ( val ) {
                        script.setAttribute( i, val );
                    }
                }
            }
            doc.head.appendChild( script ).parentNode.removeChild( script );
        }


    function toType( obj ) {
        if ( obj == null ) {
            return obj + "";
        }

        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[ toString.call( obj ) ] || "object" :
            typeof obj;
    }
    /* global Symbol */
    // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module



    var
        version = "3.5.1",

        // Define a local copy of jQuery
        jQuery = function( selector, context ) {

            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init( selector, context );
        };

    jQuery.fn = jQuery.prototype = {

        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function() {
            return slice.call( this );
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function( num ) {

            // Return all the elements in a clean array
            if ( num == null ) {
                return slice.call( this );
            }

            // Return just the one element from the set
            return num < 0 ? this[ num + this.length ] : this[ num ];
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function( elems ) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge( this.constructor(), elems );

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        each: function( callback ) {
            return jQuery.each( this, callback );
        },

        map: function( callback ) {
            return this.pushStack( jQuery.map( this, function( elem, i ) {
                return callback.call( elem, i, elem );
            } ) );
        },

        slice: function() {
            return this.pushStack( slice.apply( this, arguments ) );
        },

        first: function() {
            return this.eq( 0 );
        },

        last: function() {
            return this.eq( -1 );
        },

        even: function() {
            return this.pushStack( jQuery.grep( this, function( _elem, i ) {
                return ( i + 1 ) % 2;
            } ) );
        },

        odd: function() {
            return this.pushStack( jQuery.grep( this, function( _elem, i ) {
                return i % 2;
            } ) );
        },

        eq: function( i ) {
            var len = this.length,
                j = +i + ( i < 0 ? len : 0 );
            return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
        },

        end: function() {
            return this.prevObject || this.constructor();
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[ 0 ] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;

            // Skip the boolean and the target
            target = arguments[ i ] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !isFunction( target ) ) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target = this;
            i--;
        }

        for ( ; i < length; i++ ) {

            // Only deal with non-null/undefined values
            if ( ( options = arguments[ i ] ) != null ) {

                // Extend the base object
                for ( name in options ) {
                    copy = options[ name ];

                    // Prevent Object.prototype pollution
                    // Prevent never-ending loop
                    if ( name === "__proto__" || target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                        ( copyIsArray = Array.isArray( copy ) ) ) ) {
                        src = target[ name ];

                        // Ensure proper type for the source value
                        if ( copyIsArray && !Array.isArray( src ) ) {
                            clone = [];
                        } else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
                            clone = {};
                        } else {
                            clone = src;
                        }
                        copyIsArray = false;

                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );

                    // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend( {

        // Unique for each copy of jQuery on the page
        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function( msg ) {
            throw new Error( msg );
        },

        noop: function() {},

        isPlainObject: function( obj ) {
            var proto, Ctor;

            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if ( !obj || toString.call( obj ) !== "[object Object]" ) {
                return false;
            }

            proto = getProto( obj );

            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if ( !proto ) {
                return true;
            }

            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
            return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
        },

        isEmptyObject: function( obj ) {
            var name;

            for ( name in obj ) {
                return false;
            }
            return true;
        },

        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function( code, options, doc ) {
            DOMEval( code, { nonce: options && options.nonce }, doc );
        },

        each: function( obj, callback ) {
            var length, i = 0;

            if ( isArrayLike( obj ) ) {
                length = obj.length;
                for ( ; i < length; i++ ) {
                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( i in obj ) {
                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                        break;
                    }
                }
            }

            return obj;
        },

        // results is for internal usage only
        makeArray: function( arr, results ) {
            var ret = results || [];

            if ( arr != null ) {
                if ( isArrayLike( Object( arr ) ) ) {
                    jQuery.merge( ret,
                        typeof arr === "string" ?
                        [ arr ] : arr
                    );
                } else {
                    push.call( ret, arr );
                }
            }

            return ret;
        },

        inArray: function( elem, arr, i ) {
            return arr == null ? -1 : indexOf.call( arr, elem, i );
        },

        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function( first, second ) {
            var len = +second.length,
                j = 0,
                i = first.length;

            for ( ; j < len; j++ ) {
                first[ i++ ] = second[ j ];
            }

            first.length = i;

            return first;
        },

        grep: function( elems, callback, invert ) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for ( ; i < length; i++ ) {
                callbackInverse = !callback( elems[ i ], i );
                if ( callbackInverse !== callbackExpect ) {
                    matches.push( elems[ i ] );
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function( elems, callback, arg ) {
            var length, value,
                i = 0,
                ret = [];

            // Go through the array, translating each of the items to their new values
            if ( isArrayLike( elems ) ) {
                length = elems.length;
                for ( ; i < length; i++ ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret.push( value );
                    }
                }

            // Go through every key on the object,
            } else {
                for ( i in elems ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret.push( value );
                    }
                }
            }

            // Flatten any nested arrays
            return flat( ret );
        },

        // A global GUID counter for objects
        guid: 1,

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    } );

    if ( typeof Symbol === "function" ) {
        jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
    }

    // Populate the class2type map
    jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
    function( _i, name ) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    } );

    function isArrayLike( obj ) {

        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = toType( obj );

        if ( isFunction( obj ) || isWindow( obj ) ) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }
    var Sizzle =
    /*!
    * Sizzle CSS Selector Engine v2.3.5
    * https://sizzlejs.com/
    *
    * Copyright JS Foundation and other contributors
    * Released under the MIT license
    * https://js.foundation/
    *
    * Date: 2020-03-14
    */
    ( function( window ) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,

        // Local document vars
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,

        // Instance-specific data
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function( a, b ) {
            if ( a === b ) {
                hasDuplicate = true;
            }
            return 0;
        },

        // Instance methods
        hasOwn = ( {} ).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,

        // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function( list, elem ) {
            var i = 0,
                len = list.length;
            for ( ; i < len; i++ ) {
                if ( list[ i ] === elem ) {
                    return i;
                }
            }
            return -1;
        },

        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
            "ismap|loop|multiple|open|readonly|required|scoped",

        // Regular expressions

        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]",

        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +

            // "Attribute values must be CSS identifiers [capture 5]
            // or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
            whitespace + "*\\]",

        pseudos = ":(" + identifier + ")(?:\\((" +

            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

            // 3. anything else (capture 2)
            ".*" +
            ")\\)|)",

        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp( whitespace + "+", "g" ),
        rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
            whitespace + "+$", "g" ),

        rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
        rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
            "*" ),
        rdescend = new RegExp( whitespace + "|>" ),

        rpseudo = new RegExp( pseudos ),
        ridentifier = new RegExp( "^" + identifier + "$" ),

        matchExpr = {
            "ID": new RegExp( "^#(" + identifier + ")" ),
            "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
            "TAG": new RegExp( "^(" + identifier + "|[*])" ),
            "ATTR": new RegExp( "^" + attributes ),
            "PSEUDO": new RegExp( "^" + pseudos ),
            "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
                whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
            "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp( "^" + whitespace +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
                "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
        },

        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,

        rnative = /^[^{]+\{\s*\[native \w/,

        // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

        rsibling = /[+~]/,

        // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
        funescape = function( escape, nonHex ) {
            var high = "0x" + escape.slice( 1 ) - 0x10000;

            return nonHex ?

                // Strip the backslash prefix from a non-hex escape sequence
                nonHex :

                // Replace a hexadecimal escape sequence with the encoded Unicode code point
                // Support: IE <=11+
                // For values outside the Basic Multilingual Plane (BMP), manually construct a
                // surrogate pair
                high < 0 ?
                    String.fromCharCode( high + 0x10000 ) :
                    String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
        },

        // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function( ch, asCodePoint ) {
            if ( asCodePoint ) {

                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if ( ch === "\0" ) {
                    return "\uFFFD";
                }

                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice( 0, -1 ) + "\\" +
                    ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
            }

            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        },

        // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function() {
            setDocument();
        },

        inDisabledFieldset = addCombinator(
            function( elem ) {
                return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            },
            { dir: "parentNode", next: "legend" }
        );

    // Optimize for push.apply( _, NodeList )
    try {
        push.apply(
            ( arr = slice.call( preferredDoc.childNodes ) ),
            preferredDoc.childNodes
        );

        // Support: Android<4.0
        // Detect silently failing push.apply
        // eslint-disable-next-line no-unused-expressions
        arr[ preferredDoc.childNodes.length ].nodeType;
    } catch ( e ) {
        push = { apply: arr.length ?

            // Leverage slice if possible
            function( target, els ) {
                pushNative.apply( target, slice.call( els ) );
            } :

            // Support: IE<9
            // Otherwise append directly
            function( target, els ) {
                var j = target.length,
                    i = 0;

                // Can't trust NodeList.length
                while ( ( target[ j++ ] = els[ i++ ] ) ) {}
                target.length = j - 1;
            }
        };
    }

    function Sizzle( selector, context, results, seed ) {
        var m, i, elem, nid, match, groups, newSelector,
            newContext = context && context.ownerDocument,

            // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;

        results = results || [];

        // Return early from calls with invalid selector or context
        if ( typeof selector !== "string" || !selector ||
            nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

            return results;
        }

        // Try to shortcut find operations (as opposed to filters) in HTML documents
        if ( !seed ) {
            setDocument( context );
            context = context || document;

            if ( documentIsHTML ) {

                // If the selector is sufficiently simple, try using a "get*By*" DOM method
                // (excepting DocumentFragment context, where the methods don't exist)
                if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

                    // ID selector
                    if ( ( m = match[ 1 ] ) ) {

                        // Document context
                        if ( nodeType === 9 ) {
                            if ( ( elem = context.getElementById( m ) ) ) {

                                // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                if ( elem.id === m ) {
                                    results.push( elem );
                                    return results;
                                }
                            } else {
                                return results;
                            }

                        // Element context
                        } else {

                            // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if ( newContext && ( elem = newContext.getElementById( m ) ) &&
                                contains( context, elem ) &&
                                elem.id === m ) {

                                results.push( elem );
                                return results;
                            }
                        }

                    // Type selector
                    } else if ( match[ 2 ] ) {
                        push.apply( results, context.getElementsByTagName( selector ) );
                        return results;

                    // Class selector
                    } else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
                        context.getElementsByClassName ) {

                        push.apply( results, context.getElementsByClassName( m ) );
                        return results;
                    }
                }

                // Take advantage of querySelectorAll
                if ( support.qsa &&
                    !nonnativeSelectorCache[ selector + " " ] &&
                    ( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

                    // Support: IE 8 only
                    // Exclude object elements
                    ( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

                    newSelector = selector;
                    newContext = context;

                    // qSA considers elements outside a scoping root when evaluating child or
                    // descendant combinators, which is not what we want.
                    // In such cases, we work around the behavior by prefixing every selector in the
                    // list with an ID selector referencing the scope context.
                    // The technique has to be used as well when a leading combinator is used
                    // as such selectors are not recognized by querySelectorAll.
                    // Thanks to Andrew Dupont for this technique.
                    if ( nodeType === 1 &&
                        ( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

                        // Expand context for sibling selectors
                        newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                            context;

                        // We can use :scope instead of the ID hack if the browser
                        // supports it & if we're not changing the context.
                        if ( newContext !== context || !support.scope ) {

                            // Capture the context ID, setting it first if necessary
                            if ( ( nid = context.getAttribute( "id" ) ) ) {
                                nid = nid.replace( rcssescape, fcssescape );
                            } else {
                                context.setAttribute( "id", ( nid = expando ) );
                            }
                        }

                        // Prefix every selector in the list
                        groups = tokenize( selector );
                        i = groups.length;
                        while ( i-- ) {
                            groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
                                toSelector( groups[ i ] );
                        }
                        newSelector = groups.join( "," );
                    }

                    try {
                        push.apply( results,
                            newContext.querySelectorAll( newSelector )
                        );
                        return results;
                    } catch ( qsaError ) {
                        nonnativeSelectorCache( selector, true );
                    } finally {
                        if ( nid === expando ) {
                            context.removeAttribute( "id" );
                        }
                    }
                }
            }
        }

        // All others
        return select( selector.replace( rtrim, "$1" ), context, results, seed );
    }

    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
    *	deleting the oldest entry
    */
    function createCache() {
        var keys = [];

        function cache( key, value ) {

            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
            if ( keys.push( key + " " ) > Expr.cacheLength ) {

                // Only keep the most recent entries
                delete cache[ keys.shift() ];
            }
            return ( cache[ key + " " ] = value );
        }
        return cache;
    }

    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
    function markFunction( fn ) {
        fn[ expando ] = true;
        return fn;
    }

    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
    function assert( fn ) {
        var el = document.createElement( "fieldset" );

        try {
            return !!fn( el );
        } catch ( e ) {
            return false;
        } finally {

            // Remove from its parent by default
            if ( el.parentNode ) {
                el.parentNode.removeChild( el );
            }

            // release memory in IE
            el = null;
        }
    }

    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
    function addHandle( attrs, handler ) {
        var arr = attrs.split( "|" ),
            i = arr.length;

        while ( i-- ) {
            Expr.attrHandle[ arr[ i ] ] = handler;
        }
    }

    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
    function siblingCheck( a, b ) {
        var cur = b && a,
            diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                a.sourceIndex - b.sourceIndex;

        // Use IE sourceIndex if available on both nodes
        if ( diff ) {
            return diff;
        }

        // Check if b follows a
        if ( cur ) {
            while ( ( cur = cur.nextSibling ) ) {
                if ( cur === b ) {
                    return -1;
                }
            }
        }

        return a ? 1 : -1;
    }

    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
    function createInputPseudo( type ) {
        return function( elem ) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
        };
    }

    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
    function createButtonPseudo( type ) {
        return function( elem ) {
            var name = elem.nodeName.toLowerCase();
            return ( name === "input" || name === "button" ) && elem.type === type;
        };
    }

    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
    function createDisabledPseudo( disabled ) {

        // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
        return function( elem ) {

            // Only certain elements can match :enabled or :disabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
            if ( "form" in elem ) {

                // Check for inherited disabledness on relevant non-disabled elements:
                // * listed form-associated elements in a disabled fieldset
                //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                // * option elements in a disabled optgroup
                //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                // All such elements have a "form" property.
                if ( elem.parentNode && elem.disabled === false ) {

                    // Option elements defer to a parent optgroup if present
                    if ( "label" in elem ) {
                        if ( "label" in elem.parentNode ) {
                            return elem.parentNode.disabled === disabled;
                        } else {
                            return elem.disabled === disabled;
                        }
                    }

                    // Support: IE 6 - 11
                    // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                    return elem.isDisabled === disabled ||

                        // Where there is no isDisabled, check manually
                        /* jshint -W018 */
                        elem.isDisabled !== !disabled &&
                        inDisabledFieldset( elem ) === disabled;
                }

                return elem.disabled === disabled;

            // Try to winnow out elements that can't be disabled before trusting the disabled property.
            // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
            // even exist on them, let alone have a boolean value.
            } else if ( "label" in elem ) {
                return elem.disabled === disabled;
            }

            // Remaining elements are neither :enabled nor :disabled
            return false;
        };
    }

    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
    function createPositionalPseudo( fn ) {
        return markFunction( function( argument ) {
            argument = +argument;
            return markFunction( function( seed, matches ) {
                var j,
                    matchIndexes = fn( [], seed.length, argument ),
                    i = matchIndexes.length;

                // Match elements found at the specified indexes
                while ( i-- ) {
                    if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
                        seed[ j ] = !( matches[ j ] = seed[ j ] );
                    }
                }
            } );
        } );
    }

    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
    function testContext( context ) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
    }

    // Expose support vars for convenience
    support = Sizzle.support = {};

    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
    isXML = Sizzle.isXML = function( elem ) {
        var namespace = elem.namespaceURI,
            docElem = ( elem.ownerDocument || elem ).documentElement;

        // Support: IE <=8
        // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
        // https://bugs.jquery.com/ticket/4833
        return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
    };

    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
    setDocument = Sizzle.setDocument = function( node ) {
        var hasCompare, subWindow,
            doc = node ? node.ownerDocument || node : preferredDoc;

        // Return early if doc is invalid or already selected
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
            return document;
        }

        // Update global variables
        document = doc;
        docElem = document.documentElement;
        documentIsHTML = !isXML( document );

        // Support: IE 9 - 11+, Edge 12 - 18+
        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if ( preferredDoc != document &&
            ( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

            // Support: IE 11, Edge
            if ( subWindow.addEventListener ) {
                subWindow.addEventListener( "unload", unloadHandler, false );

            // Support: IE 9 - 10 only
            } else if ( subWindow.attachEvent ) {
                subWindow.attachEvent( "onunload", unloadHandler );
            }
        }

        // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
        // Safari 4 - 5 only, Opera <=11.6 - 12.x only
        // IE/Edge & older browsers don't support the :scope pseudo-class.
        // Support: Safari 6.0 only
        // Safari 6.0 supports :scope but it's an alias of :root there.
        support.scope = assert( function( el ) {
            docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
            return typeof el.querySelectorAll !== "undefined" &&
                !el.querySelectorAll( ":scope fieldset div" ).length;
        } );

        /* Attributes
        ---------------------------------------------------------------------- */

        // Support: IE<8
        // Verify that getAttribute really returns attributes and not properties
        // (excepting IE8 booleans)
        support.attributes = assert( function( el ) {
            el.className = "i";
            return !el.getAttribute( "className" );
        } );

        /* getElement(s)By*
        ---------------------------------------------------------------------- */

        // Check if getElementsByTagName("*") returns only elements
        support.getElementsByTagName = assert( function( el ) {
            el.appendChild( document.createComment( "" ) );
            return !el.getElementsByTagName( "*" ).length;
        } );

        // Support: IE<9
        support.getElementsByClassName = rnative.test( document.getElementsByClassName );

        // Support: IE<10
        // Check if getElementById returns elements by name
        // The broken getElementById methods don't pick up programmatically-set names,
        // so use a roundabout getElementsByName test
        support.getById = assert( function( el ) {
            docElem.appendChild( el ).id = expando;
            return !document.getElementsByName || !document.getElementsByName( expando ).length;
        } );

        // ID filter and find
        if ( support.getById ) {
            Expr.filter[ "ID" ] = function( id ) {
                var attrId = id.replace( runescape, funescape );
                return function( elem ) {
                    return elem.getAttribute( "id" ) === attrId;
                };
            };
            Expr.find[ "ID" ] = function( id, context ) {
                if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                    var elem = context.getElementById( id );
                    return elem ? [ elem ] : [];
                }
            };
        } else {
            Expr.filter[ "ID" ] =  function( id ) {
                var attrId = id.replace( runescape, funescape );
                return function( elem ) {
                    var node = typeof elem.getAttributeNode !== "undefined" &&
                        elem.getAttributeNode( "id" );
                    return node && node.value === attrId;
                };
            };

            // Support: IE 6 - 7 only
            // getElementById is not reliable as a find shortcut
            Expr.find[ "ID" ] = function( id, context ) {
                if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                    var node, i, elems,
                        elem = context.getElementById( id );

                    if ( elem ) {

                        // Verify the id attribute
                        node = elem.getAttributeNode( "id" );
                        if ( node && node.value === id ) {
                            return [ elem ];
                        }

                        // Fall back on getElementsByName
                        elems = context.getElementsByName( id );
                        i = 0;
                        while ( ( elem = elems[ i++ ] ) ) {
                            node = elem.getAttributeNode( "id" );
                            if ( node && node.value === id ) {
                                return [ elem ];
                            }
                        }
                    }

                    return [];
                }
            };
        }

        // Tag
        Expr.find[ "TAG" ] = support.getElementsByTagName ?
            function( tag, context ) {
                if ( typeof context.getElementsByTagName !== "undefined" ) {
                    return context.getElementsByTagName( tag );

                // DocumentFragment nodes don't have gEBTN
                } else if ( support.qsa ) {
                    return context.querySelectorAll( tag );
                }
            } :

            function( tag, context ) {
                var elem,
                    tmp = [],
                    i = 0,

                    // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                    results = context.getElementsByTagName( tag );

                // Filter out possible comments
                if ( tag === "*" ) {
                    while ( ( elem = results[ i++ ] ) ) {
                        if ( elem.nodeType === 1 ) {
                            tmp.push( elem );
                        }
                    }

                    return tmp;
                }
                return results;
            };

        // Class
        Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
            if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
                return context.getElementsByClassName( className );
            }
        };

        /* QSA/matchesSelector
        ---------------------------------------------------------------------- */

        // QSA and matchesSelector support

        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
        rbuggyMatches = [];

        // qSa(:focus) reports false when true (Chrome 21)
        // We allow this because of a bug in IE8/9 that throws an error
        // whenever `document.activeElement` is accessed on an iframe
        // So, we allow :focus to pass through QSA all the time to avoid the IE error
        // See https://bugs.jquery.com/ticket/13378
        rbuggyQSA = [];

        if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert( function( el ) {

                var input;

                // Select is set to empty string on purpose
                // This is to test IE's treatment of not explicitly
                // setting a boolean content attribute,
                // since its presence should be enough
                // https://bugs.jquery.com/ticket/12359
                docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
                    "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                    "<option selected=''></option></select>";

                // Support: IE8, Opera 11-12.16
                // Nothing should be selected when empty strings follow ^= or $= or *=
                // The test attribute must be unknown in Opera but "safe" for WinRT
                // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
                    rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
                }

                // Support: IE8
                // Boolean attributes and "value" are not treated correctly
                if ( !el.querySelectorAll( "[selected]" ).length ) {
                    rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
                }

                // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                    rbuggyQSA.push( "~=" );
                }

                // Support: IE 11+, Edge 15 - 18+
                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                // Adding a temporary attribute to the document before the selection works
                // around the issue.
                // Interestingly, IE 10 & older don't seem to have the issue.
                input = document.createElement( "input" );
                input.setAttribute( "name", "" );
                el.appendChild( input );
                if ( !el.querySelectorAll( "[name='']" ).length ) {
                    rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
                        whitespace + "*(?:''|\"\")" );
                }

                // Webkit/Opera - :checked should return selected option elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                // IE8 throws error here and will not see later tests
                if ( !el.querySelectorAll( ":checked" ).length ) {
                    rbuggyQSA.push( ":checked" );
                }

                // Support: Safari 8+, iOS 8+
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
                    rbuggyQSA.push( ".#.+[+~]" );
                }

                // Support: Firefox <=3.6 - 5 only
                // Old Firefox doesn't throw on a badly-escaped identifier.
                el.querySelectorAll( "\\\f" );
                rbuggyQSA.push( "[\\r\\n\\f]" );
            } );

            assert( function( el ) {
                el.innerHTML = "<a href='' disabled='disabled'></a>" +
                    "<select disabled='disabled'><option/></select>";

                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                var input = document.createElement( "input" );
                input.setAttribute( "type", "hidden" );
                el.appendChild( input ).setAttribute( "name", "D" );

                // Support: IE8
                // Enforce case-sensitivity of name attribute
                if ( el.querySelectorAll( "[name=d]" ).length ) {
                    rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
                }

                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                // IE8 throws error here and will not see later tests
                if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
                    rbuggyQSA.push( ":enabled", ":disabled" );
                }

                // Support: IE9-11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                docElem.appendChild( el ).disabled = true;
                if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
                    rbuggyQSA.push( ":enabled", ":disabled" );
                }

                // Support: Opera 10 - 11 only
                // Opera 10-11 does not throw on post-comma invalid pseudos
                el.querySelectorAll( "*,:x" );
                rbuggyQSA.push( ",.*:" );
            } );
        }

        if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
            docElem.webkitMatchesSelector ||
            docElem.mozMatchesSelector ||
            docElem.oMatchesSelector ||
            docElem.msMatchesSelector ) ) ) ) {

            assert( function( el ) {

                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches.call( el, "*" );

                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call( el, "[s!='']:x" );
                rbuggyMatches.push( "!=", pseudos );
            } );
        }

        rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
        rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

        /* Contains
        ---------------------------------------------------------------------- */
        hasCompare = rnative.test( docElem.compareDocumentPosition );

        // Element contains another
        // Purposefully self-exclusive
        // As in, an element does not contain itself
        contains = hasCompare || rnative.test( docElem.contains ) ?
            function( a, b ) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !!( bup && bup.nodeType === 1 && (
                    adown.contains ?
                        adown.contains( bup ) :
                        a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                ) );
            } :
            function( a, b ) {
                if ( b ) {
                    while ( ( b = b.parentNode ) ) {
                        if ( b === a ) {
                            return true;
                        }
                    }
                }
                return false;
            };

        /* Sorting
        ---------------------------------------------------------------------- */

        // Document order sorting
        sortOrder = hasCompare ?
        function( a, b ) {

            // Flag for duplicate removal
            if ( a === b ) {
                hasDuplicate = true;
                return 0;
            }

            // Sort on method existence if only one input has compareDocumentPosition
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if ( compare ) {
                return compare;
            }

            // Calculate position if both inputs belong to the same document
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
                a.compareDocumentPosition( b ) :

                // Otherwise we know they are disconnected
                1;

            // Disconnected nodes
            if ( compare & 1 ||
                ( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

                // Choose the first element that is related to our preferred document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if ( a == document || a.ownerDocument == preferredDoc &&
                    contains( preferredDoc, a ) ) {
                    return -1;
                }

                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if ( b == document || b.ownerDocument == preferredDoc &&
                    contains( preferredDoc, b ) ) {
                    return 1;
                }

                // Maintain original order
                return sortInput ?
                    ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                    0;
            }

            return compare & 4 ? -1 : 1;
        } :
        function( a, b ) {

            // Exit early if the nodes are identical
            if ( a === b ) {
                hasDuplicate = true;
                return 0;
            }

            var cur,
                i = 0,
                aup = a.parentNode,
                bup = b.parentNode,
                ap = [ a ],
                bp = [ b ];

            // Parentless nodes are either documents or disconnected
            if ( !aup || !bup ) {

                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */
                return a == document ? -1 :
                    b == document ? 1 :
                    /* eslint-enable eqeqeq */
                    aup ? -1 :
                    bup ? 1 :
                    sortInput ?
                    ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                    0;

            // If the nodes are siblings, we can do a quick check
            } else if ( aup === bup ) {
                return siblingCheck( a, b );
            }

            // Otherwise we need full lists of their ancestors for comparison
            cur = a;
            while ( ( cur = cur.parentNode ) ) {
                ap.unshift( cur );
            }
            cur = b;
            while ( ( cur = cur.parentNode ) ) {
                bp.unshift( cur );
            }

            // Walk down the tree looking for a discrepancy
            while ( ap[ i ] === bp[ i ] ) {
                i++;
            }

            return i ?

                // Do a sibling check if the nodes have a common ancestor
                siblingCheck( ap[ i ], bp[ i ] ) :

                // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */
                ap[ i ] == preferredDoc ? -1 :
                bp[ i ] == preferredDoc ? 1 :
                /* eslint-enable eqeqeq */
                0;
        };

        return document;
    };

    Sizzle.matches = function( expr, elements ) {
        return Sizzle( expr, null, null, elements );
    };

    Sizzle.matchesSelector = function( elem, expr ) {
        setDocument( elem );

        if ( support.matchesSelector && documentIsHTML &&
            !nonnativeSelectorCache[ expr + " " ] &&
            ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
            ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

            try {
                var ret = matches.call( elem, expr );

                // IE 9's matchesSelector returns false on disconnected nodes
                if ( ret || support.disconnectedMatch ||

                    // As well, disconnected nodes are said to be in a document
                    // fragment in IE 9
                    elem.document && elem.document.nodeType !== 11 ) {
                    return ret;
                }
            } catch ( e ) {
                nonnativeSelectorCache( expr, true );
            }
        }

        return Sizzle( expr, document, null, [ elem ] ).length > 0;
    };

    Sizzle.contains = function( context, elem ) {

        // Set document vars if needed
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if ( ( context.ownerDocument || context ) != document ) {
            setDocument( context );
        }
        return contains( context, elem );
    };

    Sizzle.attr = function( elem, name ) {

        // Set document vars if needed
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if ( ( elem.ownerDocument || elem ) != document ) {
            setDocument( elem );
        }

        var fn = Expr.attrHandle[ name.toLowerCase() ],

            // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
                fn( elem, name, !documentIsHTML ) :
                undefined;

        return val !== undefined ?
            val :
            support.attributes || !documentIsHTML ?
                elem.getAttribute( name ) :
                ( val = elem.getAttributeNode( name ) ) && val.specified ?
                    val.value :
                    null;
    };

    Sizzle.escape = function( sel ) {
        return ( sel + "" ).replace( rcssescape, fcssescape );
    };

    Sizzle.error = function( msg ) {
        throw new Error( "Syntax error, unrecognized expression: " + msg );
    };

    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
    Sizzle.uniqueSort = function( results ) {
        var elem,
            duplicates = [],
            j = 0,
            i = 0;

        // Unless we *know* we can detect duplicates, assume their presence
        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice( 0 );
        results.sort( sortOrder );

        if ( hasDuplicate ) {
            while ( ( elem = results[ i++ ] ) ) {
                if ( elem === results[ i ] ) {
                    j = duplicates.push( i );
                }
            }
            while ( j-- ) {
                results.splice( duplicates[ j ], 1 );
            }
        }

        // Clear input after sorting to release objects
        // See https://github.com/jquery/sizzle/pull/225
        sortInput = null;

        return results;
    };

    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
    getText = Sizzle.getText = function( elem ) {
        var node,
            ret = "",
            i = 0,
            nodeType = elem.nodeType;

        if ( !nodeType ) {

            // If no nodeType, this is expected to be an array
            while ( ( node = elem[ i++ ] ) ) {

                // Do not traverse comment nodes
                ret += getText( node );
            }
        } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

            // Use textContent for elements
            // innerText usage removed for consistency of new lines (jQuery #11153)
            if ( typeof elem.textContent === "string" ) {
                return elem.textContent;
            } else {

                // Traverse its children
                for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                    ret += getText( elem );
                }
            }
        } else if ( nodeType === 3 || nodeType === 4 ) {
            return elem.nodeValue;
        }

        // Do not include comment or processing instruction nodes

        return ret;
    };

    Expr = Sizzle.selectors = {

        // Can be adjusted by the user
        cacheLength: 50,

        createPseudo: markFunction,

        match: matchExpr,

        attrHandle: {},

        find: {},

        relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
        },

        preFilter: {
            "ATTR": function( match ) {
                match[ 1 ] = match[ 1 ].replace( runescape, funescape );

                // Move the given value to match[3] whether quoted or unquoted
                match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
                    match[ 5 ] || "" ).replace( runescape, funescape );

                if ( match[ 2 ] === "~=" ) {
                    match[ 3 ] = " " + match[ 3 ] + " ";
                }

                return match.slice( 0, 4 );
            },

            "CHILD": function( match ) {

                /* matches from matchExpr["CHILD"]
                    1 type (only|nth|...)
                    2 what (child|of-type)
                    3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                    4 xn-component of xn+y argument ([+-]?\d*n|)
                    5 sign of xn-component
                    6 x of xn-component
                    7 sign of y-component
                    8 y of y-component
                */
                match[ 1 ] = match[ 1 ].toLowerCase();

                if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

                    // nth-* requires argument
                    if ( !match[ 3 ] ) {
                        Sizzle.error( match[ 0 ] );
                    }

                    // numeric x and y parameters for Expr.filter.CHILD
                    // remember that false/true cast respectively to 0/1
                    match[ 4 ] = +( match[ 4 ] ?
                        match[ 5 ] + ( match[ 6 ] || 1 ) :
                        2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
                    match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

                    // other types prohibit arguments
                } else if ( match[ 3 ] ) {
                    Sizzle.error( match[ 0 ] );
                }

                return match;
            },

            "PSEUDO": function( match ) {
                var excess,
                    unquoted = !match[ 6 ] && match[ 2 ];

                if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
                    return null;
                }

                // Accept quoted arguments as-is
                if ( match[ 3 ] ) {
                    match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

                // Strip excess characters from unquoted arguments
                } else if ( unquoted && rpseudo.test( unquoted ) &&

                    // Get excess from tokenize (recursively)
                    ( excess = tokenize( unquoted, true ) ) &&

                    // advance to the next closing parenthesis
                    ( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

                    // excess is a negative index
                    match[ 0 ] = match[ 0 ].slice( 0, excess );
                    match[ 2 ] = unquoted.slice( 0, excess );
                }

                // Return only captures needed by the pseudo filter method (type and argument)
                return match.slice( 0, 3 );
            }
        },

        filter: {

            "TAG": function( nodeNameSelector ) {
                var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
                return nodeNameSelector === "*" ?
                    function() {
                        return true;
                    } :
                    function( elem ) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
            },

            "CLASS": function( className ) {
                var pattern = classCache[ className + " " ];

                return pattern ||
                    ( pattern = new RegExp( "(^|" + whitespace +
                        ")" + className + "(" + whitespace + "|$)" ) ) && classCache(
                            className, function( elem ) {
                                return pattern.test(
                                    typeof elem.className === "string" && elem.className ||
                                    typeof elem.getAttribute !== "undefined" &&
                                        elem.getAttribute( "class" ) ||
                                    ""
                                );
                    } );
            },

            "ATTR": function( name, operator, check ) {
                return function( elem ) {
                    var result = Sizzle.attr( elem, name );

                    if ( result == null ) {
                        return operator === "!=";
                    }
                    if ( !operator ) {
                        return true;
                    }

                    result += "";

                    /* eslint-disable max-len */

                    return operator === "=" ? result === check :
                        operator === "!=" ? result !== check :
                        operator === "^=" ? check && result.indexOf( check ) === 0 :
                        operator === "*=" ? check && result.indexOf( check ) > -1 :
                        operator === "$=" ? check && result.slice( -check.length ) === check :
                        operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                        operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                        false;
                    /* eslint-enable max-len */

                };
            },

            "CHILD": function( type, what, _argument, first, last ) {
                var simple = type.slice( 0, 3 ) !== "nth",
                    forward = type.slice( -4 ) !== "last",
                    ofType = what === "of-type";

                return first === 1 && last === 0 ?

                    // Shortcut for :nth-*(n)
                    function( elem ) {
                        return !!elem.parentNode;
                    } :

                    function( elem, _context, xml ) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start,
                            dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            diff = false;

                        if ( parent ) {

                            // :(first|last|only)-(child|of-type)
                            if ( simple ) {
                                while ( dir ) {
                                    node = elem;
                                    while ( ( node = node[ dir ] ) ) {
                                        if ( ofType ?
                                            node.nodeName.toLowerCase() === name :
                                            node.nodeType === 1 ) {

                                            return false;
                                        }
                                    }

                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }

                            start = [ forward ? parent.firstChild : parent.lastChild ];

                            // non-xml :nth-child(...) stores cache data on `parent`
                            if ( forward && useCache ) {

                                // Seek `elem` from a previously-cached index

                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache = node[ expando ] || ( node[ expando ] = {} );

                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[ node.uniqueID ] ||
                                    ( outerCache[ node.uniqueID ] = {} );

                                cache = uniqueCache[ type ] || [];
                                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                diff = nodeIndex && cache[ 2 ];
                                node = nodeIndex && parent.childNodes[ nodeIndex ];

                                while ( ( node = ++nodeIndex && node && node[ dir ] ||

                                    // Fallback to seeking `elem` from the start
                                    ( diff = nodeIndex = 0 ) || start.pop() ) ) {

                                    // When found, cache indexes on `parent` and break
                                    if ( node.nodeType === 1 && ++diff && node === elem ) {
                                        uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }

                            } else {

                                // Use previously-cached element index if available
                                if ( useCache ) {

                                    // ...in a gzip-friendly way
                                    node = elem;
                                    outerCache = node[ expando ] || ( node[ expando ] = {} );

                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[ node.uniqueID ] ||
                                        ( outerCache[ node.uniqueID ] = {} );

                                    cache = uniqueCache[ type ] || [];
                                    nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                    diff = nodeIndex;
                                }

                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if ( diff === false ) {

                                    // Use the same loop as above to seek `elem` from the start
                                    while ( ( node = ++nodeIndex && node && node[ dir ] ||
                                        ( diff = nodeIndex = 0 ) || start.pop() ) ) {

                                        if ( ( ofType ?
                                            node.nodeName.toLowerCase() === name :
                                            node.nodeType === 1 ) &&
                                            ++diff ) {

                                            // Cache the index of each encountered element
                                            if ( useCache ) {
                                                outerCache = node[ expando ] ||
                                                    ( node[ expando ] = {} );

                                                // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                uniqueCache = outerCache[ node.uniqueID ] ||
                                                    ( outerCache[ node.uniqueID ] = {} );

                                                uniqueCache[ type ] = [ dirruns, diff ];
                                            }

                                            if ( node === elem ) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }

                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || ( diff % first === 0 && diff / first >= 0 );
                        }
                    };
            },

            "PSEUDO": function( pseudo, argument ) {

                // pseudo-class names are case-insensitive
                // http://www.w3.org/TR/selectors/#pseudo-classes
                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                // Remember that setFilters inherits from pseudos
                var args,
                    fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                        Sizzle.error( "unsupported pseudo: " + pseudo );

                // The user may use createPseudo to indicate that
                // arguments are needed to create the filter function
                // just as Sizzle does
                if ( fn[ expando ] ) {
                    return fn( argument );
                }

                // But maintain support for old signatures
                if ( fn.length > 1 ) {
                    args = [ pseudo, pseudo, "", argument ];
                    return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                        markFunction( function( seed, matches ) {
                            var idx,
                                matched = fn( seed, argument ),
                                i = matched.length;
                            while ( i-- ) {
                                idx = indexOf( seed, matched[ i ] );
                                seed[ idx ] = !( matches[ idx ] = matched[ i ] );
                            }
                        } ) :
                        function( elem ) {
                            return fn( elem, 0, args );
                        };
                }

                return fn;
            }
        },

        pseudos: {

            // Potentially complex pseudos
            "not": markFunction( function( selector ) {

                // Trim the selector passed to compile
                // to avoid treating leading and trailing
                // spaces as combinators
                var input = [],
                    results = [],
                    matcher = compile( selector.replace( rtrim, "$1" ) );

                return matcher[ expando ] ?
                    markFunction( function( seed, matches, _context, xml ) {
                        var elem,
                            unmatched = matcher( seed, null, xml, [] ),
                            i = seed.length;

                        // Match elements unmatched by `matcher`
                        while ( i-- ) {
                            if ( ( elem = unmatched[ i ] ) ) {
                                seed[ i ] = !( matches[ i ] = elem );
                            }
                        }
                    } ) :
                    function( elem, _context, xml ) {
                        input[ 0 ] = elem;
                        matcher( input, null, xml, results );

                        // Don't keep the element (issue #299)
                        input[ 0 ] = null;
                        return !results.pop();
                    };
            } ),

            "has": markFunction( function( selector ) {
                return function( elem ) {
                    return Sizzle( selector, elem ).length > 0;
                };
            } ),

            "contains": markFunction( function( text ) {
                text = text.replace( runescape, funescape );
                return function( elem ) {
                    return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
                };
            } ),

            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            "lang": markFunction( function( lang ) {

                // lang value must be a valid identifier
                if ( !ridentifier.test( lang || "" ) ) {
                    Sizzle.error( "unsupported lang: " + lang );
                }
                lang = lang.replace( runescape, funescape ).toLowerCase();
                return function( elem ) {
                    var elemLang;
                    do {
                        if ( ( elemLang = documentIsHTML ?
                            elem.lang :
                            elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                        }
                    } while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
                    return false;
                };
            } ),

            // Miscellaneous
            "target": function( elem ) {
                var hash = window.location && window.location.hash;
                return hash && hash.slice( 1 ) === elem.id;
            },

            "root": function( elem ) {
                return elem === docElem;
            },

            "focus": function( elem ) {
                return elem === document.activeElement &&
                    ( !document.hasFocus || document.hasFocus() ) &&
                    !!( elem.type || elem.href || ~elem.tabIndex );
            },

            // Boolean properties
            "enabled": createDisabledPseudo( false ),
            "disabled": createDisabledPseudo( true ),

            "checked": function( elem ) {

                // In CSS3, :checked should return both checked and selected elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                var nodeName = elem.nodeName.toLowerCase();
                return ( nodeName === "input" && !!elem.checked ) ||
                    ( nodeName === "option" && !!elem.selected );
            },

            "selected": function( elem ) {

                // Accessing this property makes selected-by-default
                // options in Safari work properly
                if ( elem.parentNode ) {
                    // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                }

                return elem.selected === true;
            },

            // Contents
            "empty": function( elem ) {

                // http://www.w3.org/TR/selectors/#empty-pseudo
                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                //   but not by others (comment: 8; processing instruction: 7; etc.)
                // nodeType < 6 works because attributes (2) do not appear as children
                for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                    if ( elem.nodeType < 6 ) {
                        return false;
                    }
                }
                return true;
            },

            "parent": function( elem ) {
                return !Expr.pseudos[ "empty" ]( elem );
            },

            // Element/input types
            "header": function( elem ) {
                return rheader.test( elem.nodeName );
            },

            "input": function( elem ) {
                return rinputs.test( elem.nodeName );
            },

            "button": function( elem ) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
            },

            "text": function( elem ) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" &&
                    elem.type === "text" &&

                    // Support: IE<8
                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                    ( ( attr = elem.getAttribute( "type" ) ) == null ||
                        attr.toLowerCase() === "text" );
            },

            // Position-in-collection
            "first": createPositionalPseudo( function() {
                return [ 0 ];
            } ),

            "last": createPositionalPseudo( function( _matchIndexes, length ) {
                return [ length - 1 ];
            } ),

            "eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
                return [ argument < 0 ? argument + length : argument ];
            } ),

            "even": createPositionalPseudo( function( matchIndexes, length ) {
                var i = 0;
                for ( ; i < length; i += 2 ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            } ),

            "odd": createPositionalPseudo( function( matchIndexes, length ) {
                var i = 1;
                for ( ; i < length; i += 2 ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            } ),

            "lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
                var i = argument < 0 ?
                    argument + length :
                    argument > length ?
                        length :
                        argument;
                for ( ; --i >= 0; ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            } ),

            "gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
                var i = argument < 0 ? argument + length : argument;
                for ( ; ++i < length; ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            } )
        }
    };

    Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

    // Add button/input type pseudos
    for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
        Expr.pseudos[ i ] = createInputPseudo( i );
    }
    for ( i in { submit: true, reset: true } ) {
        Expr.pseudos[ i ] = createButtonPseudo( i );
    }

    // Easy API for creating new setFilters
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
        var matched, match, tokens, type,
            soFar, groups, preFilters,
            cached = tokenCache[ selector + " " ];

        if ( cached ) {
            return parseOnly ? 0 : cached.slice( 0 );
        }

        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;

        while ( soFar ) {

            // Comma and first run
            if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
                if ( match ) {

                    // Don't consume trailing commas as valid
                    soFar = soFar.slice( match[ 0 ].length ) || soFar;
                }
                groups.push( ( tokens = [] ) );
            }

            matched = false;

            // Combinators
            if ( ( match = rcombinators.exec( soFar ) ) ) {
                matched = match.shift();
                tokens.push( {
                    value: matched,

                    // Cast descendant combinators to space
                    type: match[ 0 ].replace( rtrim, " " )
                } );
                soFar = soFar.slice( matched.length );
            }

            // Filters
            for ( type in Expr.filter ) {
                if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
                    ( match = preFilters[ type ]( match ) ) ) ) {
                    matched = match.shift();
                    tokens.push( {
                        value: matched,
                        type: type,
                        matches: match
                    } );
                    soFar = soFar.slice( matched.length );
                }
            }

            if ( !matched ) {
                break;
            }
        }

        // Return the length of the invalid excess
        // if we're just parsing
        // Otherwise, throw an error or return tokens
        return parseOnly ?
            soFar.length :
            soFar ?
                Sizzle.error( selector ) :

                // Cache the tokens
                tokenCache( selector, groups ).slice( 0 );
    };

    function toSelector( tokens ) {
        var i = 0,
            len = tokens.length,
            selector = "";
        for ( ; i < len; i++ ) {
            selector += tokens[ i ].value;
        }
        return selector;
    }

    function addCombinator( matcher, combinator, base ) {
        var dir = combinator.dir,
            skip = combinator.next,
            key = skip || dir,
            checkNonElements = base && key === "parentNode",
            doneName = done++;

        return combinator.first ?

            // Check against closest ancestor/preceding element
            function( elem, context, xml ) {
                while ( ( elem = elem[ dir ] ) ) {
                    if ( elem.nodeType === 1 || checkNonElements ) {
                        return matcher( elem, context, xml );
                    }
                }
                return false;
            } :

            // Check against all ancestor/preceding elements
            function( elem, context, xml ) {
                var oldCache, uniqueCache, outerCache,
                    newCache = [ dirruns, doneName ];

                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if ( xml ) {
                    while ( ( elem = elem[ dir ] ) ) {
                        if ( elem.nodeType === 1 || checkNonElements ) {
                            if ( matcher( elem, context, xml ) ) {
                                return true;
                            }
                        }
                    }
                } else {
                    while ( ( elem = elem[ dir ] ) ) {
                        if ( elem.nodeType === 1 || checkNonElements ) {
                            outerCache = elem[ expando ] || ( elem[ expando ] = {} );

                            // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)
                            uniqueCache = outerCache[ elem.uniqueID ] ||
                                ( outerCache[ elem.uniqueID ] = {} );

                            if ( skip && skip === elem.nodeName.toLowerCase() ) {
                                elem = elem[ dir ] || elem;
                            } else if ( ( oldCache = uniqueCache[ key ] ) &&
                                oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

                                // Assign to newCache so results back-propagate to previous elements
                                return ( newCache[ 2 ] = oldCache[ 2 ] );
                            } else {

                                // Reuse newcache so results back-propagate to previous elements
                                uniqueCache[ key ] = newCache;

                                // A match means we're done; a fail means we have to keep checking
                                if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
    }

    function elementMatcher( matchers ) {
        return matchers.length > 1 ?
            function( elem, context, xml ) {
                var i = matchers.length;
                while ( i-- ) {
                    if ( !matchers[ i ]( elem, context, xml ) ) {
                        return false;
                    }
                }
                return true;
            } :
            matchers[ 0 ];
    }

    function multipleContexts( selector, contexts, results ) {
        var i = 0,
            len = contexts.length;
        for ( ; i < len; i++ ) {
            Sizzle( selector, contexts[ i ], results );
        }
        return results;
    }

    function condense( unmatched, map, filter, context, xml ) {
        var elem,
            newUnmatched = [],
            i = 0,
            len = unmatched.length,
            mapped = map != null;

        for ( ; i < len; i++ ) {
            if ( ( elem = unmatched[ i ] ) ) {
                if ( !filter || filter( elem, context, xml ) ) {
                    newUnmatched.push( elem );
                    if ( mapped ) {
                        map.push( i );
                    }
                }
            }
        }

        return newUnmatched;
    }

    function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
        if ( postFilter && !postFilter[ expando ] ) {
            postFilter = setMatcher( postFilter );
        }
        if ( postFinder && !postFinder[ expando ] ) {
            postFinder = setMatcher( postFinder, postSelector );
        }
        return markFunction( function( seed, results, context, xml ) {
            var temp, i, elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,

                // Get initial elements from seed or context
                elems = seed || multipleContexts(
                    selector || "*",
                    context.nodeType ? [ context ] : context,
                    []
                ),

                // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && ( seed || !selector ) ?
                    condense( elems, preMap, preFilter, context, xml ) :
                    elems,

                matcherOut = matcher ?

                    // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                    postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                        // ...intermediate processing is necessary
                        [] :

                        // ...otherwise use results directly
                        results :
                    matcherIn;

            // Find primary matches
            if ( matcher ) {
                matcher( matcherIn, matcherOut, context, xml );
            }

            // Apply postFilter
            if ( postFilter ) {
                temp = condense( matcherOut, postMap );
                postFilter( temp, [], context, xml );

                // Un-match failing elements by moving them back to matcherIn
                i = temp.length;
                while ( i-- ) {
                    if ( ( elem = temp[ i ] ) ) {
                        matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
                    }
                }
            }

            if ( seed ) {
                if ( postFinder || preFilter ) {
                    if ( postFinder ) {

                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                        temp = [];
                        i = matcherOut.length;
                        while ( i-- ) {
                            if ( ( elem = matcherOut[ i ] ) ) {

                                // Restore matcherIn since elem is not yet a final match
                                temp.push( ( matcherIn[ i ] = elem ) );
                            }
                        }
                        postFinder( null, ( matcherOut = [] ), temp, xml );
                    }

                    // Move matched elements from seed to results to keep them synchronized
                    i = matcherOut.length;
                    while ( i-- ) {
                        if ( ( elem = matcherOut[ i ] ) &&
                            ( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

                            seed[ temp ] = !( results[ temp ] = elem );
                        }
                    }
                }

            // Add elements to results, through postFinder if defined
            } else {
                matcherOut = condense(
                    matcherOut === results ?
                        matcherOut.splice( preexisting, matcherOut.length ) :
                        matcherOut
                );
                if ( postFinder ) {
                    postFinder( null, results, matcherOut, xml );
                } else {
                    push.apply( results, matcherOut );
                }
            }
        } );
    }

    function matcherFromTokens( tokens ) {
        var checkContext, matcher, j,
            len = tokens.length,
            leadingRelative = Expr.relative[ tokens[ 0 ].type ],
            implicitRelative = leadingRelative || Expr.relative[ " " ],
            i = leadingRelative ? 1 : 0,

            // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator( function( elem ) {
                return elem === checkContext;
            }, implicitRelative, true ),
            matchAnyContext = addCombinator( function( elem ) {
                return indexOf( checkContext, elem ) > -1;
            }, implicitRelative, true ),
            matchers = [ function( elem, context, xml ) {
                var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                    ( checkContext = context ).nodeType ?
                        matchContext( elem, context, xml ) :
                        matchAnyContext( elem, context, xml ) );

                // Avoid hanging onto element (issue #299)
                checkContext = null;
                return ret;
            } ];

        for ( ; i < len; i++ ) {
            if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
                matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
            } else {
                matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

                // Return special upon seeing a positional matcher
                if ( matcher[ expando ] ) {

                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for ( ; j < len; j++ ) {
                        if ( Expr.relative[ tokens[ j ].type ] ) {
                            break;
                        }
                    }
                    return setMatcher(
                        i > 1 && elementMatcher( matchers ),
                        i > 1 && toSelector(

                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens
                            .slice( 0, i - 1 )
                            .concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
                        ).replace( rtrim, "$1" ),
                        matcher,
                        i < j && matcherFromTokens( tokens.slice( i, j ) ),
                        j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
                        j < len && toSelector( tokens )
                    );
                }
                matchers.push( matcher );
            }
        }

        return elementMatcher( matchers );
    }

    function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
        var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function( seed, context, xml, results, outermost ) {
                var elem, j, matcher,
                    matchedCount = 0,
                    i = "0",
                    unmatched = seed && [],
                    setMatched = [],
                    contextBackup = outermostContext,

                    // We must always have either seed elements or outermost context
                    elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

                    // Use integer dirruns iff this is the outermost matcher
                    dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
                    len = elems.length;

                if ( outermost ) {

                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    outermostContext = context == document || context || outermost;
                }

                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
                    if ( byElement && elem ) {
                        j = 0;

                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if ( !context && elem.ownerDocument != document ) {
                            setDocument( elem );
                            xml = !documentIsHTML;
                        }
                        while ( ( matcher = elementMatchers[ j++ ] ) ) {
                            if ( matcher( elem, context || document, xml ) ) {
                                results.push( elem );
                                break;
                            }
                        }
                        if ( outermost ) {
                            dirruns = dirrunsUnique;
                        }
                    }

                    // Track unmatched elements for set filters
                    if ( bySet ) {

                        // They will have gone through all possible matchers
                        if ( ( elem = !matcher && elem ) ) {
                            matchedCount--;
                        }

                        // Lengthen the array for every element, matched or not
                        if ( seed ) {
                            unmatched.push( elem );
                        }
                    }
                }

                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;

                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if ( bySet && i !== matchedCount ) {
                    j = 0;
                    while ( ( matcher = setMatchers[ j++ ] ) ) {
                        matcher( unmatched, setMatched, context, xml );
                    }

                    if ( seed ) {

                        // Reintegrate element matches to eliminate the need for sorting
                        if ( matchedCount > 0 ) {
                            while ( i-- ) {
                                if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
                                    setMatched[ i ] = pop.call( results );
                                }
                            }
                        }

                        // Discard index placeholder values to get only actual matches
                        setMatched = condense( setMatched );
                    }

                    // Add matches to results
                    push.apply( results, setMatched );

                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if ( outermost && !seed && setMatched.length > 0 &&
                        ( matchedCount + setMatchers.length ) > 1 ) {

                        Sizzle.uniqueSort( results );
                    }
                }

                // Override manipulation of globals by nested matchers
                if ( outermost ) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }

                return unmatched;
            };

        return bySet ?
            markFunction( superMatcher ) :
            superMatcher;
    }

    compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
        var i,
            setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[ selector + " " ];

        if ( !cached ) {

            // Generate a function of recursive functions that can be used to check each element
            if ( !match ) {
                match = tokenize( selector );
            }
            i = match.length;
            while ( i-- ) {
                cached = matcherFromTokens( match[ i ] );
                if ( cached[ expando ] ) {
                    setMatchers.push( cached );
                } else {
                    elementMatchers.push( cached );
                }
            }

            // Cache the compiled function
            cached = compilerCache(
                selector,
                matcherFromGroupMatchers( elementMatchers, setMatchers )
            );

            // Save selector and tokenization
            cached.selector = selector;
        }
        return cached;
    };

    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
    select = Sizzle.select = function( selector, context, results, seed ) {
        var i, tokens, token, type, find,
            compiled = typeof selector === "function" && selector,
            match = !seed && tokenize( ( selector = compiled.selector || selector ) );

        results = results || [];

        // Try to minimize operations if there is only one selector in the list and no seed
        // (the latter of which guarantees us context)
        if ( match.length === 1 ) {

            // Reduce context if the leading compound selector is an ID
            tokens = match[ 0 ] = match[ 0 ].slice( 0 );
            if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
                context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

                context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
                    .replace( runescape, funescape ), context ) || [] )[ 0 ];
                if ( !context ) {
                    return results;

                // Precompiled matchers will still verify ancestry, so step up a level
                } else if ( compiled ) {
                    context = context.parentNode;
                }

                selector = selector.slice( tokens.shift().value.length );
            }

            // Fetch a seed set for right-to-left matching
            i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
            while ( i-- ) {
                token = tokens[ i ];

                // Abort if we hit a combinator
                if ( Expr.relative[ ( type = token.type ) ] ) {
                    break;
                }
                if ( ( find = Expr.find[ type ] ) ) {

                    // Search, expanding context for leading sibling combinators
                    if ( ( seed = find(
                        token.matches[ 0 ].replace( runescape, funescape ),
                        rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
                            context
                    ) ) ) {

                        // If seed is empty or no tokens remain, we can return early
                        tokens.splice( i, 1 );
                        selector = seed.length && toSelector( tokens );
                        if ( !selector ) {
                            push.apply( results, seed );
                            return results;
                        }

                        break;
                    }
                }
            }
        }

        // Compile and execute a filtering function if one is not provided
        // Provide `match` to avoid retokenization if we modified the selector above
        ( compiled || compile( selector, match ) )(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
        );
        return results;
    };

    // One-time assignments

    // Sort stability
    support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

    // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function
    support.detectDuplicates = !!hasDuplicate;

    // Initialize against the default document
    setDocument();

    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*
    support.sortDetached = assert( function( el ) {

        // Should return 1, but returns 4 (following)
        return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
    } );

    // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if ( !assert( function( el ) {
        el.innerHTML = "<a href='#'></a>";
        return el.firstChild.getAttribute( "href" ) === "#";
    } ) ) {
        addHandle( "type|href|height|width", function( elem, name, isXML ) {
            if ( !isXML ) {
                return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
            }
        } );
    }

    // Support: IE<9
    // Use defaultValue in place of getAttribute("value")
    if ( !support.attributes || !assert( function( el ) {
        el.innerHTML = "<input/>";
        el.firstChild.setAttribute( "value", "" );
        return el.firstChild.getAttribute( "value" ) === "";
    } ) ) {
        addHandle( "value", function( elem, _name, isXML ) {
            if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
                return elem.defaultValue;
            }
        } );
    }

    // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies
    if ( !assert( function( el ) {
        return el.getAttribute( "disabled" ) == null;
    } ) ) {
        addHandle( booleans, function( elem, name, isXML ) {
            var val;
            if ( !isXML ) {
                return elem[ name ] === true ? name.toLowerCase() :
                    ( val = elem.getAttributeNode( name ) ) && val.specified ?
                        val.value :
                        null;
            }
        } );
    }

    return Sizzle;

    } )( window );



    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;

    // Deprecated
    jQuery.expr[ ":" ] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;




    var dir = function( elem, dir, until ) {
        var matched = [],
            truncate = until !== undefined;

        while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
            if ( elem.nodeType === 1 ) {
                if ( truncate && jQuery( elem ).is( until ) ) {
                    break;
                }
                matched.push( elem );
            }
        }
        return matched;
    };


    var siblings = function( n, elem ) {
        var matched = [];

        for ( ; n; n = n.nextSibling ) {
            if ( n.nodeType === 1 && n !== elem ) {
                matched.push( n );
            }
        }

        return matched;
    };


    var rneedsContext = jQuery.expr.match.needsContext;



    function nodeName( elem, name ) {

    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

    };
    var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



    // Implement the identical functionality for filter and not
    function winnow( elements, qualifier, not ) {
        if ( isFunction( qualifier ) ) {
            return jQuery.grep( elements, function( elem, i ) {
                return !!qualifier.call( elem, i, elem ) !== not;
            } );
        }

        // Single element
        if ( qualifier.nodeType ) {
            return jQuery.grep( elements, function( elem ) {
                return ( elem === qualifier ) !== not;
            } );
        }

        // Arraylike of elements (jQuery, arguments, Array)
        if ( typeof qualifier !== "string" ) {
            return jQuery.grep( elements, function( elem ) {
                return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
            } );
        }

        // Filtered directly for both simple and complex selectors
        return jQuery.filter( qualifier, elements, not );
    }

    jQuery.filter = function( expr, elems, not ) {
        var elem = elems[ 0 ];

        if ( not ) {
            expr = ":not(" + expr + ")";
        }

        if ( elems.length === 1 && elem.nodeType === 1 ) {
            return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
        }

        return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
            return elem.nodeType === 1;
        } ) );
    };

    jQuery.fn.extend( {
        find: function( selector ) {
            var i, ret,
                len = this.length,
                self = this;

            if ( typeof selector !== "string" ) {
                return this.pushStack( jQuery( selector ).filter( function() {
                    for ( i = 0; i < len; i++ ) {
                        if ( jQuery.contains( self[ i ], this ) ) {
                            return true;
                        }
                    }
                } ) );
            }

            ret = this.pushStack( [] );

            for ( i = 0; i < len; i++ ) {
                jQuery.find( selector, self[ i ], ret );
            }

            return len > 1 ? jQuery.uniqueSort( ret ) : ret;
        },
        filter: function( selector ) {
            return this.pushStack( winnow( this, selector || [], false ) );
        },
        not: function( selector ) {
            return this.pushStack( winnow( this, selector || [], true ) );
        },
        is: function( selector ) {
            return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test( selector ) ?
                    jQuery( selector ) :
                    selector || [],
                false
            ).length;
        }
    } );


    // Initialize a jQuery object


    // A central reference to the root jQuery(document)
    var rootjQuery,

        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

        init = jQuery.fn.init = function( selector, context, root ) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if ( !selector ) {
                return this;
            }

            // Method init() accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery;

            // Handle HTML strings
            if ( typeof selector === "string" ) {
                if ( selector[ 0 ] === "<" &&
                    selector[ selector.length - 1 ] === ">" &&
                    selector.length >= 3 ) {

                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [ null, selector, null ];

                } else {
                    match = rquickExpr.exec( selector );
                }

                // Match html or make sure no context is specified for #id
                if ( match && ( match[ 1 ] || !context ) ) {

                    // HANDLE: $(html) -> $(array)
                    if ( match[ 1 ] ) {
                        context = context instanceof jQuery ? context[ 0 ] : context;

                        // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge( this, jQuery.parseHTML(
                            match[ 1 ],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ) );

                        // HANDLE: $(html, props)
                        if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
                            for ( match in context ) {

                                // Properties of context are called as methods if possible
                                if ( isFunction( this[ match ] ) ) {
                                    this[ match ]( context[ match ] );

                                // ...and otherwise set as attributes
                                } else {
                                    this.attr( match, context[ match ] );
                                }
                            }
                        }

                        return this;

                    // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById( match[ 2 ] );

                        if ( elem ) {

                            // Inject the element directly into the jQuery object
                            this[ 0 ] = elem;
                            this.length = 1;
                        }
                        return this;
                    }

                // HANDLE: $(expr, $(...))
                } else if ( !context || context.jquery ) {
                    return ( context || root ).find( selector );

                // HANDLE: $(expr, context)
                // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor( context ).find( selector );
                }

            // HANDLE: $(DOMElement)
            } else if ( selector.nodeType ) {
                this[ 0 ] = selector;
                this.length = 1;
                return this;

            // HANDLE: $(function)
            // Shortcut for document ready
            } else if ( isFunction( selector ) ) {
                return root.ready !== undefined ?
                    root.ready( selector ) :

                    // Execute immediately if ready is not present
                    selector( jQuery );
            }

            return jQuery.makeArray( selector, this );
        };

    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

    // Initialize central reference
    rootjQuery = jQuery( document );


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

        // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.fn.extend( {
        has: function( target ) {
            var targets = jQuery( target, this ),
                l = targets.length;

            return this.filter( function() {
                var i = 0;
                for ( ; i < l; i++ ) {
                    if ( jQuery.contains( this, targets[ i ] ) ) {
                        return true;
                    }
                }
            } );
        },

        closest: function( selectors, context ) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                targets = typeof selectors !== "string" && jQuery( selectors );

            // Positional selectors never match, since there's no _selection_ context
            if ( !rneedsContext.test( selectors ) ) {
                for ( ; i < l; i++ ) {
                    for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

                        // Always skip document fragments
                        if ( cur.nodeType < 11 && ( targets ?
                            targets.index( cur ) > -1 :

                            // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 &&
                                jQuery.find.matchesSelector( cur, selectors ) ) ) {

                            matched.push( cur );
                            break;
                        }
                    }
                }
            }

            return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
        },

        // Determine the position of an element within the set
        index: function( elem ) {

            // No argument, return index in parent
            if ( !elem ) {
                return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
            }

            // Index in selector
            if ( typeof elem === "string" ) {
                return indexOf.call( jQuery( elem ), this[ 0 ] );
            }

            // Locate the position of the desired element
            return indexOf.call( this,

                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[ 0 ] : elem
            );
        },

        add: function( selector, context ) {
            return this.pushStack(
                jQuery.uniqueSort(
                    jQuery.merge( this.get(), jQuery( selector, context ) )
                )
            );
        },

        addBack: function( selector ) {
            return this.add( selector == null ?
                this.prevObject : this.prevObject.filter( selector )
            );
        }
    } );

    function sibling( cur, dir ) {
        while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
        return cur;
    }

    jQuery.each( {
        parent: function( elem ) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function( elem ) {
            return dir( elem, "parentNode" );
        },
        parentsUntil: function( elem, _i, until ) {
            return dir( elem, "parentNode", until );
        },
        next: function( elem ) {
            return sibling( elem, "nextSibling" );
        },
        prev: function( elem ) {
            return sibling( elem, "previousSibling" );
        },
        nextAll: function( elem ) {
            return dir( elem, "nextSibling" );
        },
        prevAll: function( elem ) {
            return dir( elem, "previousSibling" );
        },
        nextUntil: function( elem, _i, until ) {
            return dir( elem, "nextSibling", until );
        },
        prevUntil: function( elem, _i, until ) {
            return dir( elem, "previousSibling", until );
        },
        siblings: function( elem ) {
            return siblings( ( elem.parentNode || {} ).firstChild, elem );
        },
        children: function( elem ) {
            return siblings( elem.firstChild );
        },
        contents: function( elem ) {
            if ( elem.contentDocument != null &&

                // Support: IE 11+
                // <object> elements with no `data` attribute has an object
                // `contentDocument` with a `null` prototype.
                getProto( elem.contentDocument ) ) {

                return elem.contentDocument;
            }

            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if ( nodeName( elem, "template" ) ) {
                elem = elem.content || elem;
            }

            return jQuery.merge( [], elem.childNodes );
        }
    }, function( name, fn ) {
        jQuery.fn[ name ] = function( until, selector ) {
            var matched = jQuery.map( this, fn, until );

            if ( name.slice( -5 ) !== "Until" ) {
                selector = until;
            }

            if ( selector && typeof selector === "string" ) {
                matched = jQuery.filter( selector, matched );
            }

            if ( this.length > 1 ) {

                // Remove duplicates
                if ( !guaranteedUnique[ name ] ) {
                    jQuery.uniqueSort( matched );
                }

                // Reverse order for parents* and prev-derivatives
                if ( rparentsprev.test( name ) ) {
                    matched.reverse();
                }
            }

            return this.pushStack( matched );
        };
    } );
    var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



    // Convert String-formatted options into Object-formatted ones
    function createOptions( options ) {
        var object = {};
        jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
            object[ flag ] = true;
        } );
        return object;
    }

    /*
    * Create a callback list using the following parameters:
    *
    *	options: an optional list of space-separated options that will change how
    *			the callback list behaves or a more traditional option object
    *
    * By default a callback list will act like an event callback list and can be
    * "fired" multiple times.
    *
    * Possible options:
    *
    *	once:			will ensure the callback list can only be fired once (like a Deferred)
    *
    *	memory:			will keep track of previous values and will call any callback added
    *					after the list has been fired right away with the latest "memorized"
    *					values (like a Deferred)
    *
    *	unique:			will ensure a callback can only be added once (no duplicate in the list)
    *
    *	stopOnFalse:	interrupt callings when a callback returns false
    *
    */
    jQuery.Callbacks = function( options ) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            createOptions( options ) :
            jQuery.extend( {}, options );

        var // Flag to know if list is currently firing
            firing,

            // Last fire value for non-forgettable lists
            memory,

            // Flag to know if list was already fired
            fired,

            // Flag to prevent firing
            locked,

            // Actual callback list
            list = [],

            // Queue of execution data for repeatable lists
            queue = [],

            // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1,

            // Fire callbacks
            fire = function() {

                // Enforce single-firing
                locked = locked || options.once;

                // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                fired = firing = true;
                for ( ; queue.length; firingIndex = -1 ) {
                    memory = queue.shift();
                    while ( ++firingIndex < list.length ) {

                        // Run callback and check for early termination
                        if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
                            options.stopOnFalse ) {

                            // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }

                // Forget the data if we're done with it
                if ( !options.memory ) {
                    memory = false;
                }

                firing = false;

                // Clean up if we're done firing for good
                if ( locked ) {

                    // Keep an empty list if we have data for future add calls
                    if ( memory ) {
                        list = [];

                    // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            },

            // Actual Callbacks object
            self = {

                // Add a callback or a collection of callbacks to the list
                add: function() {
                    if ( list ) {

                        // If we have memory from a past run, we should fire after adding
                        if ( memory && !firing ) {
                            firingIndex = list.length - 1;
                            queue.push( memory );
                        }

                        ( function add( args ) {
                            jQuery.each( args, function( _, arg ) {
                                if ( isFunction( arg ) ) {
                                    if ( !options.unique || !self.has( arg ) ) {
                                        list.push( arg );
                                    }
                                } else if ( arg && arg.length && toType( arg ) !== "string" ) {

                                    // Inspect recursively
                                    add( arg );
                                }
                            } );
                        } )( arguments );

                        if ( memory && !firing ) {
                            fire();
                        }
                    }
                    return this;
                },

                // Remove a callback from the list
                remove: function() {
                    jQuery.each( arguments, function( _, arg ) {
                        var index;
                        while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                            list.splice( index, 1 );

                            // Handle firing indexes
                            if ( index <= firingIndex ) {
                                firingIndex--;
                            }
                        }
                    } );
                    return this;
                },

                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function( fn ) {
                    return fn ?
                        jQuery.inArray( fn, list ) > -1 :
                        list.length > 0;
                },

                // Remove all callbacks from the list
                empty: function() {
                    if ( list ) {
                        list = [];
                    }
                    return this;
                },

                // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function() {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function() {
                    return !list;
                },

                // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function() {
                    locked = queue = [];
                    if ( !memory && !firing ) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function() {
                    return !!locked;
                },

                // Call all callbacks with the given context and arguments
                fireWith: function( context, args ) {
                    if ( !locked ) {
                        args = args || [];
                        args = [ context, args.slice ? args.slice() : args ];
                        queue.push( args );
                        if ( !firing ) {
                            fire();
                        }
                    }
                    return this;
                },

                // Call all the callbacks with the given arguments
                fire: function() {
                    self.fireWith( this, arguments );
                    return this;
                },

                // To know if the callbacks have already been called at least once
                fired: function() {
                    return !!fired;
                }
            };

        return self;
    };


    function Identity( v ) {
        return v;
    }
    function Thrower( ex ) {
        throw ex;
    }

    function adoptValue( value, resolve, reject, noValue ) {
        var method;

        try {

            // Check for promise aspect first to privilege synchronous behavior
            if ( value && isFunction( ( method = value.promise ) ) ) {
                method.call( value ).done( resolve ).fail( reject );

            // Other thenables
            } else if ( value && isFunction( ( method = value.then ) ) ) {
                method.call( value, resolve, reject );

            // Other non-thenables
            } else {

                // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                // * false: [ value ].slice( 0 ) => resolve( value )
                // * true: [ value ].slice( 1 ) => resolve()
                resolve.apply( undefined, [ value ].slice( noValue ) );
            }

        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch ( value ) {

            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply( undefined, [ value ] );
        }
    }

    jQuery.extend( {

        Deferred: function( func ) {
            var tuples = [

                    // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    [ "notify", "progress", jQuery.Callbacks( "memory" ),
                        jQuery.Callbacks( "memory" ), 2 ],
                    [ "resolve", "done", jQuery.Callbacks( "once memory" ),
                        jQuery.Callbacks( "once memory" ), 0, "resolved" ],
                    [ "reject", "fail", jQuery.Callbacks( "once memory" ),
                        jQuery.Callbacks( "once memory" ), 1, "rejected" ]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done( arguments ).fail( arguments );
                        return this;
                    },
                    "catch": function( fn ) {
                        return promise.then( null, fn );
                    },

                    // Keep pipe for back-compat
                    pipe: function( /* fnDone, fnFail, fnProgress */ ) {
                        var fns = arguments;

                        return jQuery.Deferred( function( newDefer ) {
                            jQuery.each( tuples, function( _i, tuple ) {

                                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

                                // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                deferred[ tuple[ 1 ] ]( function() {
                                    var returned = fn && fn.apply( this, arguments );
                                    if ( returned && isFunction( returned.promise ) ) {
                                        returned.promise()
                                            .progress( newDefer.notify )
                                            .done( newDefer.resolve )
                                            .fail( newDefer.reject );
                                    } else {
                                        newDefer[ tuple[ 0 ] + "With" ](
                                            this,
                                            fn ? [ returned ] : arguments
                                        );
                                    }
                                } );
                            } );
                            fns = null;
                        } ).promise();
                    },
                    then: function( onFulfilled, onRejected, onProgress ) {
                        var maxDepth = 0;
                        function resolve( depth, deferred, handler, special ) {
                            return function() {
                                var that = this,
                                    args = arguments,
                                    mightThrow = function() {
                                        var returned, then;

                                        // Support: Promises/A+ section 2.3.3.3.3
                                        // https://promisesaplus.com/#point-59
                                        // Ignore double-resolution attempts
                                        if ( depth < maxDepth ) {
                                            return;
                                        }

                                        returned = handler.apply( that, args );

                                        // Support: Promises/A+ section 2.3.1
                                        // https://promisesaplus.com/#point-48
                                        if ( returned === deferred.promise() ) {
                                            throw new TypeError( "Thenable self-resolution" );
                                        }

                                        // Support: Promises/A+ sections 2.3.3.1, 3.5
                                        // https://promisesaplus.com/#point-54
                                        // https://promisesaplus.com/#point-75
                                        // Retrieve `then` only once
                                        then = returned &&

                                            // Support: Promises/A+ section 2.3.4
                                            // https://promisesaplus.com/#point-64
                                            // Only check objects and functions for thenability
                                            ( typeof returned === "object" ||
                                                typeof returned === "function" ) &&
                                            returned.then;

                                        // Handle a returned thenable
                                        if ( isFunction( then ) ) {

                                            // Special processors (notify) just wait for resolution
                                            if ( special ) {
                                                then.call(
                                                    returned,
                                                    resolve( maxDepth, deferred, Identity, special ),
                                                    resolve( maxDepth, deferred, Thrower, special )
                                                );

                                            // Normal processors (resolve) also hook into progress
                                            } else {

                                                // ...and disregard older resolution values
                                                maxDepth++;

                                                then.call(
                                                    returned,
                                                    resolve( maxDepth, deferred, Identity, special ),
                                                    resolve( maxDepth, deferred, Thrower, special ),
                                                    resolve( maxDepth, deferred, Identity,
                                                        deferred.notifyWith )
                                                );
                                            }

                                        // Handle all other returned values
                                        } else {

                                            // Only substitute handlers pass on context
                                            // and multiple values (non-spec behavior)
                                            if ( handler !== Identity ) {
                                                that = undefined;
                                                args = [ returned ];
                                            }

                                            // Process the value(s)
                                            // Default process is resolve
                                            ( special || deferred.resolveWith )( that, args );
                                        }
                                    },

                                    // Only normal processors (resolve) catch and reject exceptions
                                    process = special ?
                                        mightThrow :
                                        function() {
                                            try {
                                                mightThrow();
                                            } catch ( e ) {

                                                if ( jQuery.Deferred.exceptionHook ) {
                                                    jQuery.Deferred.exceptionHook( e,
                                                        process.stackTrace );
                                                }

                                                // Support: Promises/A+ section 2.3.3.3.4.1
                                                // https://promisesaplus.com/#point-61
                                                // Ignore post-resolution exceptions
                                                if ( depth + 1 >= maxDepth ) {

                                                    // Only substitute handlers pass on context
                                                    // and multiple values (non-spec behavior)
                                                    if ( handler !== Thrower ) {
                                                        that = undefined;
                                                        args = [ e ];
                                                    }

                                                    deferred.rejectWith( that, args );
                                                }
                                            }
                                        };

                                // Support: Promises/A+ section 2.3.3.3.1
                                // https://promisesaplus.com/#point-57
                                // Re-resolve promises immediately to dodge false rejection from
                                // subsequent errors
                                if ( depth ) {
                                    process();
                                } else {

                                    // Call an optional hook to record the stack, in case of exception
                                    // since it's otherwise lost when execution goes async
                                    if ( jQuery.Deferred.getStackHook ) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout( process );
                                }
                            };
                        }

                        return jQuery.Deferred( function( newDefer ) {

                            // progress_handlers.add( ... )
                            tuples[ 0 ][ 3 ].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction( onProgress ) ?
                                        onProgress :
                                        Identity,
                                    newDefer.notifyWith
                                )
                            );

                            // fulfilled_handlers.add( ... )
                            tuples[ 1 ][ 3 ].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction( onFulfilled ) ?
                                        onFulfilled :
                                        Identity
                                )
                            );

                            // rejected_handlers.add( ... )
                            tuples[ 2 ][ 3 ].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction( onRejected ) ?
                                        onRejected :
                                        Thrower
                                )
                            );
                        } ).promise();
                    },

                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function( obj ) {
                        return obj != null ? jQuery.extend( obj, promise ) : promise;
                    }
                },
                deferred = {};

            // Add list-specific methods
            jQuery.each( tuples, function( i, tuple ) {
                var list = tuple[ 2 ],
                    stateString = tuple[ 5 ];

                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[ tuple[ 1 ] ] = list.add;

                // Handle state
                if ( stateString ) {
                    list.add(
                        function() {

                            // state = "resolved" (i.e., fulfilled)
                            // state = "rejected"
                            state = stateString;
                        },

                        // rejected_callbacks.disable
                        // fulfilled_callbacks.disable
                        tuples[ 3 - i ][ 2 ].disable,

                        // rejected_handlers.disable
                        // fulfilled_handlers.disable
                        tuples[ 3 - i ][ 3 ].disable,

                        // progress_callbacks.lock
                        tuples[ 0 ][ 2 ].lock,

                        // progress_handlers.lock
                        tuples[ 0 ][ 3 ].lock
                    );
                }

                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add( tuple[ 3 ].fire );

                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[ tuple[ 0 ] ] = function() {
                    deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
                    return this;
                };

                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
            } );

            // Make the deferred a promise
            promise.promise( deferred );

            // Call given func if any
            if ( func ) {
                func.call( deferred, deferred );
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function( singleValue ) {
            var

                // count of uncompleted subordinates
                remaining = arguments.length,

                // count of unprocessed arguments
                i = remaining,

                // subordinate fulfillment data
                resolveContexts = Array( i ),
                resolveValues = slice.call( arguments ),

                // the master Deferred
                master = jQuery.Deferred(),

                // subordinate callback factory
                updateFunc = function( i ) {
                    return function( value ) {
                        resolveContexts[ i ] = this;
                        resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                        if ( !( --remaining ) ) {
                            master.resolveWith( resolveContexts, resolveValues );
                        }
                    };
                };

            // Single- and empty arguments are adopted like Promise.resolve
            if ( remaining <= 1 ) {
                adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
                    !remaining );

                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if ( master.state() === "pending" ||
                    isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

                    return master.then();
                }
            }

            // Multiple arguments are aggregated like Promise.all array elements
            while ( i-- ) {
                adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
            }

            return master.promise();
        }
    } );


    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

    jQuery.Deferred.exceptionHook = function( error, stack ) {

        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
            window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
        }
    };




    jQuery.readyException = function( error ) {
        window.setTimeout( function() {
            throw error;
        } );
    };




    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();

    jQuery.fn.ready = function( fn ) {

        readyList
            .then( fn )

            // Wrap jQuery.readyException in a function so that the lookup
            // happens at the time of error handling instead of callback
            // registration.
            .catch( function( error ) {
                jQuery.readyException( error );
            } );

        return this;
    };

    jQuery.extend( {

        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Handle when the DOM is ready
        ready: function( wait ) {

            // Abort if there are pending holds or we're already ready
            if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
                return;
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if ( wait !== true && --jQuery.readyWait > 0 ) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith( document, [ jQuery ] );
        }
    } );

    jQuery.ready.then = readyList.then;

    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener( "DOMContentLoaded", completed );
        window.removeEventListener( "load", completed );
        jQuery.ready();
    }

    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if ( document.readyState === "complete" ||
        ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout( jQuery.ready );

    } else {

        // Use the handy event callback
        document.addEventListener( "DOMContentLoaded", completed );

        // A fallback to window.onload, that will always work
        window.addEventListener( "load", completed );
    }




    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
        var i = 0,
            len = elems.length,
            bulk = key == null;

        // Sets many values
        if ( toType( key ) === "object" ) {
            chainable = true;
            for ( i in key ) {
                access( elems, fn, i, key[ i ], true, emptyGet, raw );
            }

        // Sets one value
        } else if ( value !== undefined ) {
            chainable = true;

            if ( !isFunction( value ) ) {
                raw = true;
            }

            if ( bulk ) {

                // Bulk operations run against the entire set
                if ( raw ) {
                    fn.call( elems, value );
                    fn = null;

                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function( elem, _key, value ) {
                        return bulk.call( jQuery( elem ), value );
                    };
                }
            }

            if ( fn ) {
                for ( ; i < len; i++ ) {
                    fn(
                        elems[ i ], key, raw ?
                        value :
                        value.call( elems[ i ], i, fn( elems[ i ], key ) )
                    );
                }
            }
        }

        if ( chainable ) {
            return elems;
        }

        // Gets
        if ( bulk ) {
            return fn.call( elems );
        }

        return len ? fn( elems[ 0 ], key ) : emptyGet;
    };


    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g;

    // Used by camelCase as callback to replace()
    function fcamelCase( _all, letter ) {
        return letter.toUpperCase();
    }

    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase( string ) {
        return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
    }
    var acceptData = function( owner ) {

        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
    };




    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;

    Data.prototype = {

        cache: function( owner ) {

            // Check if the owner object already has a cache
            var value = owner[ this.expando ];

            // If not, create one
            if ( !value ) {
                value = {};

                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if ( acceptData( owner ) ) {

                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if ( owner.nodeType ) {
                        owner[ this.expando ] = value;

                    // Otherwise secure it in a non-enumerable property
                    // configurable must be true to allow the property to be
                    // deleted when data is removed
                    } else {
                        Object.defineProperty( owner, this.expando, {
                            value: value,
                            configurable: true
                        } );
                    }
                }
            }

            return value;
        },
        set: function( owner, data, value ) {
            var prop,
                cache = this.cache( owner );

            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if ( typeof data === "string" ) {
                cache[ camelCase( data ) ] = value;

            // Handle: [ owner, { properties } ] args
            } else {

                // Copy the properties one-by-one to the cache object
                for ( prop in data ) {
                    cache[ camelCase( prop ) ] = data[ prop ];
                }
            }
            return cache;
        },
        get: function( owner, key ) {
            return key === undefined ?
                this.cache( owner ) :

                // Always use camelCase key (gh-2257)
                owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
        },
        access: function( owner, key, value ) {

            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if ( key === undefined ||
                    ( ( key && typeof key === "string" ) && value === undefined ) ) {

                return this.get( owner, key );
            }

            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set( owner, key, value );

            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function( owner, key ) {
            var i,
                cache = owner[ this.expando ];

            if ( cache === undefined ) {
                return;
            }

            if ( key !== undefined ) {

                // Support array or space separated string of keys
                if ( Array.isArray( key ) ) {

                    // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map( camelCase );
                } else {
                    key = camelCase( key );

                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ?
                        [ key ] :
                        ( key.match( rnothtmlwhite ) || [] );
                }

                i = key.length;

                while ( i-- ) {
                    delete cache[ key[ i ] ];
                }
            }

            // Remove the expando if there's no more data
            if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if ( owner.nodeType ) {
                    owner[ this.expando ] = undefined;
                } else {
                    delete owner[ this.expando ];
                }
            }
        },
        hasData: function( owner ) {
            var cache = owner[ this.expando ];
            return cache !== undefined && !jQuery.isEmptyObject( cache );
        }
    };
    var dataPriv = new Data();

    var dataUser = new Data();



    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function getData( data ) {
        if ( data === "true" ) {
            return true;
        }

        if ( data === "false" ) {
            return false;
        }

        if ( data === "null" ) {
            return null;
        }

        // Only convert to a number if it doesn't change the string
        if ( data === +data + "" ) {
            return +data;
        }

        if ( rbrace.test( data ) ) {
            return JSON.parse( data );
        }

        return data;
    }

    function dataAttr( elem, key, data ) {
        var name;

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if ( data === undefined && elem.nodeType === 1 ) {
            name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
            data = elem.getAttribute( name );

            if ( typeof data === "string" ) {
                try {
                    data = getData( data );
                } catch ( e ) {}

                // Make sure we set the data so it isn't changed later
                dataUser.set( elem, key, data );
            } else {
                data = undefined;
            }
        }
        return data;
    }

    jQuery.extend( {
        hasData: function( elem ) {
            return dataUser.hasData( elem ) || dataPriv.hasData( elem );
        },

        data: function( elem, name, data ) {
            return dataUser.access( elem, name, data );
        },

        removeData: function( elem, name ) {
            dataUser.remove( elem, name );
        },

        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function( elem, name, data ) {
            return dataPriv.access( elem, name, data );
        },

        _removeData: function( elem, name ) {
            dataPriv.remove( elem, name );
        }
    } );

    jQuery.fn.extend( {
        data: function( key, value ) {
            var i, name, data,
                elem = this[ 0 ],
                attrs = elem && elem.attributes;

            // Gets all values
            if ( key === undefined ) {
                if ( this.length ) {
                    data = dataUser.get( elem );

                    if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
                        i = attrs.length;
                        while ( i-- ) {

                            // Support: IE 11 only
                            // The attrs elements can be null (#14894)
                            if ( attrs[ i ] ) {
                                name = attrs[ i ].name;
                                if ( name.indexOf( "data-" ) === 0 ) {
                                    name = camelCase( name.slice( 5 ) );
                                    dataAttr( elem, name, data[ name ] );
                                }
                            }
                        }
                        dataPriv.set( elem, "hasDataAttrs", true );
                    }
                }

                return data;
            }

            // Sets multiple values
            if ( typeof key === "object" ) {
                return this.each( function() {
                    dataUser.set( this, key );
                } );
            }

            return access( this, function( value ) {
                var data;

                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if ( elem && value === undefined ) {

                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get( elem, key );
                    if ( data !== undefined ) {
                        return data;
                    }

                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr( elem, key );
                    if ( data !== undefined ) {
                        return data;
                    }

                    // We tried really hard, but the data doesn't exist.
                    return;
                }

                // Set the data...
                this.each( function() {

                    // We always store the camelCased key
                    dataUser.set( this, key, value );
                } );
            }, null, value, arguments.length > 1, null, true );
        },

        removeData: function( key ) {
            return this.each( function() {
                dataUser.remove( this, key );
            } );
        }
    } );


    jQuery.extend( {
        queue: function( elem, type, data ) {
            var queue;

            if ( elem ) {
                type = ( type || "fx" ) + "queue";
                queue = dataPriv.get( elem, type );

                // Speed up dequeue by getting out quickly if this is just a lookup
                if ( data ) {
                    if ( !queue || Array.isArray( data ) ) {
                        queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
                    } else {
                        queue.push( data );
                    }
                }
                return queue || [];
            }
        },

        dequeue: function( elem, type ) {
            type = type || "fx";

            var queue = jQuery.queue( elem, type ),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks( elem, type ),
                next = function() {
                    jQuery.dequeue( elem, type );
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if ( fn === "inprogress" ) {
                fn = queue.shift();
                startLength--;
            }

            if ( fn ) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if ( type === "fx" ) {
                    queue.unshift( "inprogress" );
                }

                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call( elem, next, hooks );
            }

            if ( !startLength && hooks ) {
                hooks.empty.fire();
            }
        },

        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function( elem, type ) {
            var key = type + "queueHooks";
            return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
                empty: jQuery.Callbacks( "once memory" ).add( function() {
                    dataPriv.remove( elem, [ type + "queue", key ] );
                } )
            } );
        }
    } );

    jQuery.fn.extend( {
        queue: function( type, data ) {
            var setter = 2;

            if ( typeof type !== "string" ) {
                data = type;
                type = "fx";
                setter--;
            }

            if ( arguments.length < setter ) {
                return jQuery.queue( this[ 0 ], type );
            }

            return data === undefined ?
                this :
                this.each( function() {
                    var queue = jQuery.queue( this, type, data );

                    // Ensure a hooks for this queue
                    jQuery._queueHooks( this, type );

                    if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
                        jQuery.dequeue( this, type );
                    }
                } );
        },
        dequeue: function( type ) {
            return this.each( function() {
                jQuery.dequeue( this, type );
            } );
        },
        clearQueue: function( type ) {
            return this.queue( type || "fx", [] );
        },

        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function( type, obj ) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if ( !( --count ) ) {
                        defer.resolveWith( elements, [ elements ] );
                    }
                };

            if ( typeof type !== "string" ) {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while ( i-- ) {
                tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
                if ( tmp && tmp.empty ) {
                    count++;
                    tmp.empty.add( resolve );
                }
            }
            resolve();
            return defer.promise( obj );
        }
    } );
    var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

    var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

    var documentElement = document.documentElement;



        var isAttached = function( elem ) {
                return jQuery.contains( elem.ownerDocument, elem );
            },
            composed = { composed: true };

        // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
        // Check attachment across shadow DOM boundaries when possible (gh-3504)
        // Support: iOS 10.0-10.2 only
        // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
        // leading to errors. We need to check for `getRootNode`.
        if ( documentElement.getRootNode ) {
            isAttached = function( elem ) {
                return jQuery.contains( elem.ownerDocument, elem ) ||
                    elem.getRootNode( composed ) === elem.ownerDocument;
            };
        }
    var isHiddenWithinTree = function( elem, el ) {

            // isHiddenWithinTree might be called from jQuery#filter function;
            // in that case, element will be second argument
            elem = el || elem;

            // Inline style trumps all
            return elem.style.display === "none" ||
                elem.style.display === "" &&

                // Otherwise, check computed style
                // Support: Firefox <=43 - 45
                // Disconnected elements can have computed display: none, so first confirm that elem is
                // in the document.
                isAttached( elem ) &&

                jQuery.css( elem, "display" ) === "none";
        };



    function adjustCSS( elem, prop, valueParts, tween ) {
        var adjusted, scale,
            maxIterations = 20,
            currentValue = tween ?
                function() {
                    return tween.cur();
                } :
                function() {
                    return jQuery.css( elem, prop, "" );
                },
            initial = currentValue(),
            unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

            // Starting value computation is required for potential unit mismatches
            initialInUnit = elem.nodeType &&
                ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
                rcssNum.exec( jQuery.css( elem, prop ) );

        if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;

            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[ 3 ];

            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;

            while ( maxIterations-- ) {

                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style( elem, prop, initialInUnit + unit );
                if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
                    maxIterations = 0;
                }
                initialInUnit = initialInUnit / scale;

            }

            initialInUnit = initialInUnit * 2;
            jQuery.style( elem, prop, initialInUnit + unit );

            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }

        if ( valueParts ) {
            initialInUnit = +initialInUnit || +initial || 0;

            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[ 1 ] ?
                initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
                +valueParts[ 2 ];
            if ( tween ) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }


    var defaultDisplayMap = {};

    function getDefaultDisplay( elem ) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[ nodeName ];

        if ( display ) {
            return display;
        }

        temp = doc.body.appendChild( doc.createElement( nodeName ) );
        display = jQuery.css( temp, "display" );

        temp.parentNode.removeChild( temp );

        if ( display === "none" ) {
            display = "block";
        }
        defaultDisplayMap[ nodeName ] = display;

        return display;
    }

    function showHide( elements, show ) {
        var display, elem,
            values = [],
            index = 0,
            length = elements.length;

        // Determine new display value for elements that need to change
        for ( ; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }

            display = elem.style.display;
            if ( show ) {

                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if ( display === "none" ) {
                    values[ index ] = dataPriv.get( elem, "display" ) || null;
                    if ( !values[ index ] ) {
                        elem.style.display = "";
                    }
                }
                if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
                    values[ index ] = getDefaultDisplay( elem );
                }
            } else {
                if ( display !== "none" ) {
                    values[ index ] = "none";

                    // Remember what we're overwriting
                    dataPriv.set( elem, "display", display );
                }
            }
        }

        // Set the display of the elements in a second loop to avoid constant reflow
        for ( index = 0; index < length; index++ ) {
            if ( values[ index ] != null ) {
                elements[ index ].style.display = values[ index ];
            }
        }

        return elements;
    }

    jQuery.fn.extend( {
        show: function() {
            return showHide( this, true );
        },
        hide: function() {
            return showHide( this );
        },
        toggle: function( state ) {
            if ( typeof state === "boolean" ) {
                return state ? this.show() : this.hide();
            }

            return this.each( function() {
                if ( isHiddenWithinTree( this ) ) {
                    jQuery( this ).show();
                } else {
                    jQuery( this ).hide();
                }
            } );
        }
    } );
    var rcheckableType = ( /^(?:checkbox|radio)$/i );

    var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

    var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



    ( function() {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild( document.createElement( "div" ) ),
            input = document.createElement( "input" );

        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute( "type", "radio" );
        input.setAttribute( "checked", "checked" );
        input.setAttribute( "name", "t" );

        div.appendChild( input );

        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    } )();


    // We have to close these tags to support XHTML (#13200)
    var wrapMap = {

        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

        _default: [ 0, "", "" ]
    };

    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    // Support: IE <=9 only
    if ( !support.option ) {
        wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
    }


    function getAll( context, tag ) {

        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;

        if ( typeof context.getElementsByTagName !== "undefined" ) {
            ret = context.getElementsByTagName( tag || "*" );

        } else if ( typeof context.querySelectorAll !== "undefined" ) {
            ret = context.querySelectorAll( tag || "*" );

        } else {
            ret = [];
        }

        if ( tag === undefined || tag && nodeName( context, tag ) ) {
            return jQuery.merge( [ context ], ret );
        }

        return ret;
    }


    // Mark scripts as having already been evaluated
    function setGlobalEval( elems, refElements ) {
        var i = 0,
            l = elems.length;

        for ( ; i < l; i++ ) {
            dataPriv.set(
                elems[ i ],
                "globalEval",
                !refElements || dataPriv.get( refElements[ i ], "globalEval" )
            );
        }
    }


    var rhtml = /<|&#?\w+;/;

    function buildFragment( elems, context, scripts, selection, ignored ) {
        var elem, tmp, tag, wrap, attached, j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;

        for ( ; i < l; i++ ) {
            elem = elems[ i ];

            if ( elem || elem === 0 ) {

                // Add nodes directly
                if ( toType( elem ) === "object" ) {

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

                // Convert non-html into a text node
                } else if ( !rhtml.test( elem ) ) {
                    nodes.push( context.createTextNode( elem ) );

                // Convert html into DOM nodes
                } else {
                    tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

                    // Deserialize a standard representation
                    tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
                    wrap = wrapMap[ tag ] || wrapMap._default;
                    tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

                    // Descend through wrappers to the right content
                    j = wrap[ 0 ];
                    while ( j-- ) {
                        tmp = tmp.lastChild;
                    }

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge( nodes, tmp.childNodes );

                    // Remember the top-level container
                    tmp = fragment.firstChild;

                    // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        }

        // Remove wrapper from fragment
        fragment.textContent = "";

        i = 0;
        while ( ( elem = nodes[ i++ ] ) ) {

            // Skip elements already in the context collection (trac-4087)
            if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
                if ( ignored ) {
                    ignored.push( elem );
                }
                continue;
            }

            attached = isAttached( elem );

            // Append to fragment
            tmp = getAll( fragment.appendChild( elem ), "script" );

            // Preserve script evaluation history
            if ( attached ) {
                setGlobalEval( tmp );
            }

            // Capture executables
            if ( scripts ) {
                j = 0;
                while ( ( elem = tmp[ j++ ] ) ) {
                    if ( rscriptType.test( elem.type || "" ) ) {
                        scripts.push( elem );
                    }
                }
            }
        }

        return fragment;
    }


    var
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).
    function expectSync( elem, type ) {
        return ( elem === safeActiveElement() ) === ( type === "focus" );
    }

    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch ( err ) { }
    }

    function on( elem, types, selector, data, fn, one ) {
        var origFn, type;

        // Types can be a map of types/handlers
        if ( typeof types === "object" ) {

            // ( types-Object, selector, data )
            if ( typeof selector !== "string" ) {

                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for ( type in types ) {
                on( elem, type, selector, data, types[ type ], one );
            }
            return elem;
        }

        if ( data == null && fn == null ) {

            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if ( fn == null ) {
            if ( typeof selector === "string" ) {

                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {

                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if ( fn === false ) {
            fn = returnFalse;
        } else if ( !fn ) {
            return elem;
        }

        if ( one === 1 ) {
            origFn = fn;
            fn = function( event ) {

                // Can use an empty set, since event contains the info
                jQuery().off( event );
                return origFn.apply( this, arguments );
            };

            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
        }
        return elem.each( function() {
            jQuery.event.add( this, types, fn, data, selector );
        } );
    }

    /*
    * Helper functions for managing events -- not part of the public interface.
    * Props to Dean Edwards' addEvent library for many of the ideas.
    */
    jQuery.event = {

        global: {},

        add: function( elem, types, handler, data, selector ) {

            var handleObjIn, eventHandle, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.get( elem );

            // Only attach events to objects that accept data
            if ( !acceptData( elem ) ) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if ( handler.handler ) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if ( selector ) {
                jQuery.find.matchesSelector( documentElement, selector );
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if ( !handler.guid ) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if ( !( events = elemData.events ) ) {
                events = elemData.events = Object.create( null );
            }
            if ( !( eventHandle = elemData.handle ) ) {
                eventHandle = elemData.handle = function( e ) {

                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                        jQuery.event.dispatch.apply( elem, arguments ) : undefined;
                };
            }

            // Handle multiple events separated by a space
            types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[ t ] ) || [];
                type = origType = tmp[ 1 ];
                namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

                // There *must* be a type, no attaching namespace-only handlers
                if ( !type ) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[ type ] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = ( selector ? special.delegateType : special.bindType ) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[ type ] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend( {
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                    namespace: namespaces.join( "." )
                }, handleObjIn );

                // Init the event handler queue if we're the first
                if ( !( handlers = events[ type ] ) ) {
                    handlers = events[ type ] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener if the special events handler returns false
                    if ( !special.setup ||
                        special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

                        if ( elem.addEventListener ) {
                            elem.addEventListener( type, eventHandle );
                        }
                    }
                }

                if ( special.add ) {
                    special.add.call( elem, handleObj );

                    if ( !handleObj.handler.guid ) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if ( selector ) {
                    handlers.splice( handlers.delegateCount++, 0, handleObj );
                } else {
                    handlers.push( handleObj );
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[ type ] = true;
            }

        },

        // Detach an event or set of events from an element
        remove: function( elem, types, handler, selector, mappedTypes ) {

            var j, origCount, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

            if ( !elemData || !( events = elemData.events ) ) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[ t ] ) || [];
                type = origType = tmp[ 1 ];
                namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

                // Unbind all events (on this namespace, if provided) for the element
                if ( !type ) {
                    for ( type in events ) {
                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                    }
                    continue;
                }

                special = jQuery.event.special[ type ] || {};
                type = ( selector ? special.delegateType : special.bindType ) || type;
                handlers = events[ type ] || [];
                tmp = tmp[ 2 ] &&
                    new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

                // Remove matching events
                origCount = j = handlers.length;
                while ( j-- ) {
                    handleObj = handlers[ j ];

                    if ( ( mappedTypes || origType === handleObj.origType ) &&
                        ( !handler || handler.guid === handleObj.guid ) &&
                        ( !tmp || tmp.test( handleObj.namespace ) ) &&
                        ( !selector || selector === handleObj.selector ||
                            selector === "**" && handleObj.selector ) ) {
                        handlers.splice( j, 1 );

                        if ( handleObj.selector ) {
                            handlers.delegateCount--;
                        }
                        if ( special.remove ) {
                            special.remove.call( elem, handleObj );
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if ( origCount && !handlers.length ) {
                    if ( !special.teardown ||
                        special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

                        jQuery.removeEvent( elem, type, elemData.handle );
                    }

                    delete events[ type ];
                }
            }

            // Remove data and the expando if it's no longer used
            if ( jQuery.isEmptyObject( events ) ) {
                dataPriv.remove( elem, "handle events" );
            }
        },

        dispatch: function( nativeEvent ) {

            var i, j, ret, matched, handleObj, handlerQueue,
                args = new Array( arguments.length ),

                // Make a writable jQuery.Event from the native event object
                event = jQuery.event.fix( nativeEvent ),

                handlers = (
                        dataPriv.get( this, "events" ) || Object.create( null )
                    )[ event.type ] || [],
                special = jQuery.event.special[ event.type ] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[ 0 ] = event;

            for ( i = 1; i < arguments.length; i++ ) {
                args[ i ] = arguments[ i ];
            }

            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call( this, event, handlers );

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
                event.currentTarget = matched.elem;

                j = 0;
                while ( ( handleObj = matched.handlers[ j++ ] ) &&
                    !event.isImmediatePropagationStopped() ) {

                    // If the event is namespaced, then each handler is only invoked if it is
                    // specially universal or its namespaces are a superset of the event's.
                    if ( !event.rnamespace || handleObj.namespace === false ||
                        event.rnamespace.test( handleObj.namespace ) ) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
                            handleObj.handler ).apply( matched.elem, args );

                        if ( ret !== undefined ) {
                            if ( ( event.result = ret ) === false ) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if ( special.postDispatch ) {
                special.postDispatch.call( this, event );
            }

            return event.result;
        },

        handlers: function( event, handlers ) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Find delegate handlers
            if ( delegateCount &&

                // Support: IE <=9
                // Black-hole SVG <use> instance trees (trac-13180)
                cur.nodeType &&

                // Support: Firefox <=42
                // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                // Support: IE 11 only
                // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                !( event.type === "click" && event.button >= 1 ) ) {

                for ( ; cur !== this; cur = cur.parentNode || this ) {

                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
                        matchedHandlers = [];
                        matchedSelectors = {};
                        for ( i = 0; i < delegateCount; i++ ) {
                            handleObj = handlers[ i ];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if ( matchedSelectors[ sel ] === undefined ) {
                                matchedSelectors[ sel ] = handleObj.needsContext ?
                                    jQuery( sel, this ).index( cur ) > -1 :
                                    jQuery.find( sel, this, null, [ cur ] ).length;
                            }
                            if ( matchedSelectors[ sel ] ) {
                                matchedHandlers.push( handleObj );
                            }
                        }
                        if ( matchedHandlers.length ) {
                            handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            cur = this;
            if ( delegateCount < handlers.length ) {
                handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
            }

            return handlerQueue;
        },

        addProp: function( name, hook ) {
            Object.defineProperty( jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,

                get: isFunction( hook ) ?
                    function() {
                        if ( this.originalEvent ) {
                                return hook( this.originalEvent );
                        }
                    } :
                    function() {
                        if ( this.originalEvent ) {
                                return this.originalEvent[ name ];
                        }
                    },

                set: function( value ) {
                    Object.defineProperty( this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    } );
                }
            } );
        },

        fix: function( originalEvent ) {
            return originalEvent[ jQuery.expando ] ?
                originalEvent :
                new jQuery.Event( originalEvent );
        },

        special: {
            load: {

                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {

                // Utilize native event to ensure correct state for checkable inputs
                setup: function( data ) {

                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;

                    // Claim the first handler
                    if ( rcheckableType.test( el.type ) &&
                        el.click && nodeName( el, "input" ) ) {

                        // dataPriv.set( el, "click", ... )
                        leverageNative( el, "click", returnTrue );
                    }

                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function( data ) {

                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;

                    // Force setup before triggering a click
                    if ( rcheckableType.test( el.type ) &&
                        el.click && nodeName( el, "input" ) ) {

                        leverageNative( el, "click" );
                    }

                    // Return non-false to allow normal event-path propagation
                    return true;
                },

                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function( event ) {
                    var target = event.target;
                    return rcheckableType.test( target.type ) &&
                        target.click && nodeName( target, "input" ) &&
                        dataPriv.get( target, "click" ) ||
                        nodeName( target, "a" );
                }
            },

            beforeunload: {
                postDispatch: function( event ) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if ( event.result !== undefined && event.originalEvent ) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };

    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative( el, type, expectSync ) {

        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if ( !expectSync ) {
            if ( dataPriv.get( el, type ) === undefined ) {
                jQuery.event.add( el, type, returnTrue );
            }
            return;
        }

        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set( el, type, false );
        jQuery.event.add( el, type, {
            namespace: false,
            handler: function( event ) {
                var notAsync, result,
                    saved = dataPriv.get( this, type );

                if ( ( event.isTrigger & 1 ) && this[ type ] ) {

                    // Interrupt processing of the outer synthetic .trigger()ed event
                    // Saved data should be false in such cases, but might be a leftover capture object
                    // from an async native handler (gh-4350)
                    if ( !saved.length ) {

                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call( arguments );
                        dataPriv.set( this, type, saved );

                        // Trigger the native event and capture its result
                        // Support: IE <=9 - 11+
                        // focus() and blur() are asynchronous
                        notAsync = expectSync( this, type );
                        this[ type ]();
                        result = dataPriv.get( this, type );
                        if ( saved !== result || notAsync ) {
                            dataPriv.set( this, type, false );
                        } else {
                            result = {};
                        }
                        if ( saved !== result ) {

                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result.value;
                        }

                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering the
                    // native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
                        event.stopPropagation();
                    }

                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if ( saved.length ) {

                    // ...and capture the result
                    dataPriv.set( this, type, {
                        value: jQuery.event.trigger(

                            // Support: IE <=9 - 11+
                            // Extend with the prototype to reset the above stopImmediatePropagation()
                            jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
                            saved.slice( 1 ),
                            this
                        )
                    } );

                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                }
            }
        } );
    }

    jQuery.removeEvent = function( elem, type, handle ) {

        // This "if" is needed for plain objects
        if ( elem.removeEventListener ) {
            elem.removeEventListener( type, handle );
        }
    };

    jQuery.Event = function( src, props ) {

        // Allow instantiation without the 'new' keyword
        if ( !( this instanceof jQuery.Event ) ) {
            return new jQuery.Event( src, props );
        }

        // Event object
        if ( src && src.type ) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
                    src.defaultPrevented === undefined &&

                    // Support: Android <=2.3 only
                    src.returnValue === false ?
                returnTrue :
                returnFalse;

            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = ( src.target && src.target.nodeType === 3 ) ?
                src.target.parentNode :
                src.target;

            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;

        // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if ( props ) {
            jQuery.extend( this, props );
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();

        // Mark it as fixed
        this[ jQuery.expando ] = true;
    };

    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,

        preventDefault: function() {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;

            if ( e && !this.isSimulated ) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;

            if ( e && !this.isSimulated ) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if ( e && !this.isSimulated ) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each( {
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,

        which: function( event ) {
            var button = event.button;

            // Add which for key events
            if ( event.which == null && rkeyEvent.test( event.type ) ) {
                return event.charCode != null ? event.charCode : event.keyCode;
            }

            // Add which for click: 1 === left; 2 === middle; 3 === right
            if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
                if ( button & 1 ) {
                    return 1;
                }

                if ( button & 2 ) {
                    return 3;
                }

                if ( button & 4 ) {
                    return 2;
                }

                return 0;
            }

            return event.which;
        }
    }, jQuery.event.addProp );

    jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
        jQuery.event.special[ type ] = {

            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {

                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative( this, type, expectSync );

                // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {

                // Force setup before trigger
                leverageNative( this, type );

                // Return non-false to allow normal event-path propagation
                return true;
            },

            delegateType: delegateType
        };
    } );

    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each( {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function( orig, fix ) {
        jQuery.event.special[ orig ] = {
            delegateType: fix,
            bindType: fix,

            handle: function( event ) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply( this, arguments );
                    event.type = fix;
                }
                return ret;
            }
        };
    } );

    jQuery.fn.extend( {

        on: function( types, selector, data, fn ) {
            return on( this, types, selector, data, fn );
        },
        one: function( types, selector, data, fn ) {
            return on( this, types, selector, data, fn, 1 );
        },
        off: function( types, selector, fn ) {
            var handleObj, type;
            if ( types && types.preventDefault && types.handleObj ) {

                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery( types.delegateTarget ).off(
                    handleObj.namespace ?
                        handleObj.origType + "." + handleObj.namespace :
                        handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if ( typeof types === "object" ) {

                // ( types-object [, selector] )
                for ( type in types ) {
                    this.off( type, selector, types[ type ] );
                }
                return this;
            }
            if ( selector === false || typeof selector === "function" ) {

                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if ( fn === false ) {
                fn = returnFalse;
            }
            return this.each( function() {
                jQuery.event.remove( this, types, fn, selector );
            } );
        }
    } );


    var

        // Support: IE <=10 - 11, Edge 12 - 13 only
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i,

        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget( elem, content ) {
        if ( nodeName( elem, "table" ) &&
            nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

            return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
        }

        return elem;
    }

    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript( elem ) {
        elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
        return elem;
    }
    function restoreScript( elem ) {
        if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
            elem.type = elem.type.slice( 5 );
        } else {
            elem.removeAttribute( "type" );
        }

        return elem;
    }

    function cloneCopyEvent( src, dest ) {
        var i, l, type, pdataOld, udataOld, udataCur, events;

        if ( dest.nodeType !== 1 ) {
            return;
        }

        // 1. Copy private data: events, handlers, etc.
        if ( dataPriv.hasData( src ) ) {
            pdataOld = dataPriv.get( src );
            events = pdataOld.events;

            if ( events ) {
                dataPriv.remove( dest, "handle events" );

                for ( type in events ) {
                    for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                        jQuery.event.add( dest, type, events[ type ][ i ] );
                    }
                }
            }
        }

        // 2. Copy user data
        if ( dataUser.hasData( src ) ) {
            udataOld = dataUser.access( src );
            udataCur = jQuery.extend( {}, udataOld );

            dataUser.set( dest, udataCur );
        }
    }

    // Fix IE bugs, see support tests
    function fixInput( src, dest ) {
        var nodeName = dest.nodeName.toLowerCase();

        // Fails to persist the checked state of a cloned checkbox or radio button.
        if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
            dest.checked = src.checked;

        // Fails to return the selected option to the default selected state when cloning options
        } else if ( nodeName === "input" || nodeName === "textarea" ) {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip( collection, args, callback, ignored ) {

        // Flatten any nested arrays
        args = flat( args );

        var fragment, first, scripts, hasScripts, node, doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[ 0 ],
            valueIsFunction = isFunction( value );

        // We can't cloneNode fragments that contain checked, in WebKit
        if ( valueIsFunction ||
                ( l > 1 && typeof value === "string" &&
                    !support.checkClone && rchecked.test( value ) ) ) {
            return collection.each( function( index ) {
                var self = collection.eq( index );
                if ( valueIsFunction ) {
                    args[ 0 ] = value.call( this, index, self.html() );
                }
                domManip( self, args, callback, ignored );
            } );
        }

        if ( l ) {
            fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
            first = fragment.firstChild;

            if ( fragment.childNodes.length === 1 ) {
                fragment = first;
            }

            // Require either new content or an interest in ignored elements to invoke the callback
            if ( first || ignored ) {
                scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
                hasScripts = scripts.length;

                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for ( ; i < l; i++ ) {
                    node = fragment;

                    if ( i !== iNoClone ) {
                        node = jQuery.clone( node, true, true );

                        // Keep references to cloned scripts for later restoration
                        if ( hasScripts ) {

                            // Support: Android <=4.0 only, PhantomJS 1 only
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge( scripts, getAll( node, "script" ) );
                        }
                    }

                    callback.call( collection[ i ], node, i );
                }

                if ( hasScripts ) {
                    doc = scripts[ scripts.length - 1 ].ownerDocument;

                    // Reenable scripts
                    jQuery.map( scripts, restoreScript );

                    // Evaluate executable scripts on first document insertion
                    for ( i = 0; i < hasScripts; i++ ) {
                        node = scripts[ i ];
                        if ( rscriptType.test( node.type || "" ) &&
                            !dataPriv.access( node, "globalEval" ) &&
                            jQuery.contains( doc, node ) ) {

                            if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

                                // Optional AJAX dependency, but won't run scripts if not present
                                if ( jQuery._evalUrl && !node.noModule ) {
                                    jQuery._evalUrl( node.src, {
                                        nonce: node.nonce || node.getAttribute( "nonce" )
                                    }, doc );
                                }
                            } else {
                                DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
                            }
                        }
                    }
                }
            }
        }

        return collection;
    }

    function remove( elem, selector, keepData ) {
        var node,
            nodes = selector ? jQuery.filter( selector, elem ) : elem,
            i = 0;

        for ( ; ( node = nodes[ i ] ) != null; i++ ) {
            if ( !keepData && node.nodeType === 1 ) {
                jQuery.cleanData( getAll( node ) );
            }

            if ( node.parentNode ) {
                if ( keepData && isAttached( node ) ) {
                    setGlobalEval( getAll( node, "script" ) );
                }
                node.parentNode.removeChild( node );
            }
        }

        return elem;
    }

    jQuery.extend( {
        htmlPrefilter: function( html ) {
            return html;
        },

        clone: function( elem, dataAndEvents, deepDataAndEvents ) {
            var i, l, srcElements, destElements,
                clone = elem.cloneNode( true ),
                inPage = isAttached( elem );

            // Fix IE cloning issues
            if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
                    !jQuery.isXMLDoc( elem ) ) {

                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll( clone );
                srcElements = getAll( elem );

                for ( i = 0, l = srcElements.length; i < l; i++ ) {
                    fixInput( srcElements[ i ], destElements[ i ] );
                }
            }

            // Copy the events from the original to the clone
            if ( dataAndEvents ) {
                if ( deepDataAndEvents ) {
                    srcElements = srcElements || getAll( elem );
                    destElements = destElements || getAll( clone );

                    for ( i = 0, l = srcElements.length; i < l; i++ ) {
                        cloneCopyEvent( srcElements[ i ], destElements[ i ] );
                    }
                } else {
                    cloneCopyEvent( elem, clone );
                }
            }

            // Preserve script evaluation history
            destElements = getAll( clone, "script" );
            if ( destElements.length > 0 ) {
                setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
            }

            // Return the cloned set
            return clone;
        },

        cleanData: function( elems ) {
            var data, elem, type,
                special = jQuery.event.special,
                i = 0;

            for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
                if ( acceptData( elem ) ) {
                    if ( ( data = elem[ dataPriv.expando ] ) ) {
                        if ( data.events ) {
                            for ( type in data.events ) {
                                if ( special[ type ] ) {
                                    jQuery.event.remove( elem, type );

                                // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent( elem, type, data.handle );
                                }
                            }
                        }

                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[ dataPriv.expando ] = undefined;
                    }
                    if ( elem[ dataUser.expando ] ) {

                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[ dataUser.expando ] = undefined;
                    }
                }
            }
        }
    } );

    jQuery.fn.extend( {
        detach: function( selector ) {
            return remove( this, selector, true );
        },

        remove: function( selector ) {
            return remove( this, selector );
        },

        text: function( value ) {
            return access( this, function( value ) {
                return value === undefined ?
                    jQuery.text( this ) :
                    this.empty().each( function() {
                        if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                            this.textContent = value;
                        }
                    } );
            }, null, value, arguments.length );
        },

        append: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.appendChild( elem );
                }
            } );
        },

        prepend: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.insertBefore( elem, target.firstChild );
                }
            } );
        },

        before: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this );
                }
            } );
        },

        after: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this.nextSibling );
                }
            } );
        },

        empty: function() {
            var elem,
                i = 0;

            for ( ; ( elem = this[ i ] ) != null; i++ ) {
                if ( elem.nodeType === 1 ) {

                    // Prevent memory leaks
                    jQuery.cleanData( getAll( elem, false ) );

                    // Remove any remaining nodes
                    elem.textContent = "";
                }
            }

            return this;
        },

        clone: function( dataAndEvents, deepDataAndEvents ) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map( function() {
                return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
            } );
        },

        html: function( value ) {
            return access( this, function( value ) {
                var elem = this[ 0 ] || {},
                    i = 0,
                    l = this.length;

                if ( value === undefined && elem.nodeType === 1 ) {
                    return elem.innerHTML;
                }

                // See if we can take a shortcut and just use innerHTML
                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                    !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

                    value = jQuery.htmlPrefilter( value );

                    try {
                        for ( ; i < l; i++ ) {
                            elem = this[ i ] || {};

                            // Remove element nodes and prevent memory leaks
                            if ( elem.nodeType === 1 ) {
                                jQuery.cleanData( getAll( elem, false ) );
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                    // If using innerHTML throws an exception, use the fallback method
                    } catch ( e ) {}
                }

                if ( elem ) {
                    this.empty().append( value );
                }
            }, null, value, arguments.length );
        },

        replaceWith: function() {
            var ignored = [];

            // Make the changes, replacing each non-ignored context element with the new content
            return domManip( this, arguments, function( elem ) {
                var parent = this.parentNode;

                if ( jQuery.inArray( this, ignored ) < 0 ) {
                    jQuery.cleanData( getAll( this ) );
                    if ( parent ) {
                        parent.replaceChild( elem, this );
                    }
                }

            // Force callback invocation
            }, ignored );
        }
    } );

    jQuery.each( {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var elems,
                ret = [],
                insert = jQuery( selector ),
                last = insert.length - 1,
                i = 0;

            for ( ; i <= last; i++ ) {
                elems = i === last ? this : this.clone( true );
                jQuery( insert[ i ] )[ original ]( elems );

                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply( ret, elems.get() );
            }

            return this.pushStack( ret );
        };
    } );
    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

    var getStyles = function( elem ) {

            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            var view = elem.ownerDocument.defaultView;

            if ( !view || !view.opener ) {
                view = window;
            }

            return view.getComputedStyle( elem );
        };

    var swap = function( elem, options, callback ) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for ( name in options ) {
            old[ name ] = elem.style[ name ];
            elem.style[ name ] = options[ name ];
        }

        ret = callback.call( elem );

        // Revert the old values
        for ( name in options ) {
            elem.style[ name ] = old[ name ];
        }

        return ret;
    };


    var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



    ( function() {

        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {

            // This is a singleton, we need to execute it only once
            if ( !div ) {
                return;
            }

            container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
                "margin-top:1px;padding:0;border:0";
            div.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                "margin:auto;border:1px;padding:1px;" +
                "width:60%;top:1%";
            documentElement.appendChild( container ).appendChild( div );

            var divStyle = window.getComputedStyle( div );
            pixelPositionVal = divStyle.top !== "1%";

            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

            documentElement.removeChild( container );

            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }

        function roundPixelMeasures( measure ) {
            return Math.round( parseFloat( measure ) );
        }

        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
            reliableTrDimensionsVal, reliableMarginLeftVal,
            container = document.createElement( "div" ),
            div = document.createElement( "div" );

        // Finish early in limited (non-browser) environments
        if ( !div.style ) {
            return;
        }

        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode( true ).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        jQuery.extend( support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },

            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if ( reliableTrDimensionsVal == null ) {
                    table = document.createElement( "table" );
                    tr = document.createElement( "tr" );
                    trChild = document.createElement( "div" );

                    table.style.cssText = "position:absolute;left:-11111px";
                    tr.style.height = "1px";
                    trChild.style.height = "9px";

                    documentElement
                        .appendChild( table )
                        .appendChild( tr )
                        .appendChild( trChild );

                    trStyle = window.getComputedStyle( tr );
                    reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

                    documentElement.removeChild( table );
                }
                return reliableTrDimensionsVal;
            }
        } );
    } )();


    function curCSS( elem, name, computed ) {
        var width, minWidth, maxWidth, ret,

            // Support: Firefox 51+
            // Retrieving style before computed somehow
            // fixes an issue with getting wrong values
            // on detached elements
            style = elem.style;

        computed = computed || getStyles( elem );

        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if ( computed ) {
            ret = computed.getPropertyValue( name ) || computed[ name ];

            if ( ret === "" && !isAttached( elem ) ) {
                ret = jQuery.style( elem, name );
            }

            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;

                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;

                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }

        return ret !== undefined ?

            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + "" :
            ret;
    }


    function addGetHookIf( conditionFn, hookFn ) {

        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if ( conditionFn() ) {

                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.
                return ( this.get = hookFn ).apply( this, arguments );
            }
        };
    }


    var cssPrefixes = [ "Webkit", "Moz", "ms" ],
        emptyStyle = document.createElement( "div" ).style,
        vendorProps = {};

    // Return a vendor-prefixed property or undefined
    function vendorPropName( name ) {

        // Check for vendor prefixed names
        var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
            i = cssPrefixes.length;

        while ( i-- ) {
            name = cssPrefixes[ i ] + capName;
            if ( name in emptyStyle ) {
                return name;
            }
        }
    }

    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName( name ) {
        var final = jQuery.cssProps[ name ] || vendorProps[ name ];

        if ( final ) {
            return final;
        }
        if ( name in emptyStyle ) {
            return name;
        }
        return vendorProps[ name ] = vendorPropName( name ) || name;
    }


    var

        // Swappable if display is none or starts with table
        // except "table", "table-cell", or "table-caption"
        // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function setPositiveNumber( _elem, value, subtract ) {

        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec( value );
        return matches ?

            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
            value;
    }

    function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
        var i = dimension === "width" ? 1 : 0,
            extra = 0,
            delta = 0;

        // Adjustment may not be necessary
        if ( box === ( isBorderBox ? "border" : "content" ) ) {
            return 0;
        }

        for ( ; i < 4; i += 2 ) {

            // Both box models exclude margin
            if ( box === "margin" ) {
                delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
            }

            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if ( !isBorderBox ) {

                // Add padding
                delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

                // For "border" or "margin", add border
                if ( box !== "padding" ) {
                    delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

                // But still keep track of it otherwise
                } else {
                    extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }

            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {

                // For "content", subtract padding
                if ( box === "content" ) {
                    delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
                }

                // For "content" or "padding", subtract border
                if ( box !== "margin" ) {
                    delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            }
        }

        // Account for positive content-box scroll gutter when requested by providing computedVal
        if ( !isBorderBox && computedVal >= 0 ) {

            // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
            // Assuming integer scroll gutter, subtract the rest and round down
            delta += Math.max( 0, Math.ceil(
                elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
                computedVal -
                delta -
                extra -
                0.5

            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
            ) ) || 0;
        }

        return delta;
    }

    function getWidthOrHeight( elem, dimension, extra ) {

        // Start with computed style
        var styles = getStyles( elem ),

            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
            // Fake content-box until we know it's needed to know the true value.
            boxSizingNeeded = !support.boxSizingReliable() || extra,
            isBorderBox = boxSizingNeeded &&
                jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
            valueIsBorderBox = isBorderBox,

            val = curCSS( elem, dimension, styles ),
            offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if ( rnumnonpx.test( val ) ) {
            if ( !extra ) {
                return val;
            }
            val = "auto";
        }


        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ( ( !support.boxSizingReliable() && isBorderBox ||

            // Support: IE 10 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Interestingly, in some cases IE 9 doesn't suffer from this issue.
            !support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

            // Fall back to offsetWidth/offsetHeight when value is "auto"
            // This happens for inline elements with no explicit setting (gh-3571)
            val === "auto" ||

            // Support: Android <=4.1 - 4.3 only
            // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
            !parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

            // Make sure the element is visible & connected
            elem.getClientRects().length ) {

            isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if ( valueIsBorderBox ) {
                val = elem[ offsetProp ];
            }
        }

        // Normalize "" and auto
        val = parseFloat( val ) || 0;

        // Adjust for the element's box model
        return ( val +
            boxModelAdjustment(
                elem,
                dimension,
                extra || ( isBorderBox ? "border" : "content" ),
                valueIsBorderBox,
                styles,

                // Provide the current computed size to request scroll gutter calculation (gh-3589)
                val
            )
        ) + "px";
    }

    jQuery.extend( {

        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function( elem, computed ) {
                    if ( computed ) {

                        // We should always get a number back from opacity
                        var ret = curCSS( elem, "opacity" );
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},

        // Get and set the style property on a DOM Node
        style: function( elem, name, value, extra ) {

            // Don't set styles on text and comment nodes
            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = camelCase( name ),
                isCustomProp = rcustomProp.test( name ),
                style = elem.style;

            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if ( !isCustomProp ) {
                name = finalPropName( origName );
            }

            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // Check if we're setting a value
            if ( value !== undefined ) {
                type = typeof value;

                // Convert "+=" or "-=" to relative numbers (#7345)
                if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
                    value = adjustCSS( elem, name, ret );

                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set (#7116)
                if ( value == null || value !== value ) {
                    return;
                }

                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if ( type === "number" && !isCustomProp ) {
                    value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
                }

                // background-* props affect original clone's values
                if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
                    style[ name ] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if ( !hooks || !( "set" in hooks ) ||
                    ( value = hooks.set( elem, value, extra ) ) !== undefined ) {

                    if ( isCustomProp ) {
                        style.setProperty( name, value );
                    } else {
                        style[ name ] = value;
                    }
                }

            } else {

                // If a hook was provided get the non-computed value from there
                if ( hooks && "get" in hooks &&
                    ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[ name ];
            }
        },

        css: function( elem, name, extra, styles ) {
            var val, num, hooks,
                origName = camelCase( name ),
                isCustomProp = rcustomProp.test( name );

            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if ( !isCustomProp ) {
                name = finalPropName( origName );
            }

            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // If a hook was provided get the computed value from there
            if ( hooks && "get" in hooks ) {
                val = hooks.get( elem, true, extra );
            }

            // Otherwise, if a way to get the computed value exists, use that
            if ( val === undefined ) {
                val = curCSS( elem, name, styles );
            }

            // Convert "normal" to computed value
            if ( val === "normal" && name in cssNormalTransform ) {
                val = cssNormalTransform[ name ];
            }

            // Make numeric if forced or a qualifier was provided and val looks numeric
            if ( extra === "" || extra ) {
                num = parseFloat( val );
                return extra === true || isFinite( num ) ? num || 0 : val;
            }

            return val;
        }
    } );

    jQuery.each( [ "height", "width" ], function( _i, dimension ) {
        jQuery.cssHooks[ dimension ] = {
            get: function( elem, computed, extra ) {
                if ( computed ) {

                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

                        // Support: Safari 8+
                        // Table columns in Safari have non-zero offsetWidth & zero
                        // getBoundingClientRect().width unless display is changed.
                        // Support: IE <=11 only
                        // Running getBoundingClientRect on a disconnected node
                        // in IE throws an error.
                        ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
                            swap( elem, cssShow, function() {
                                return getWidthOrHeight( elem, dimension, extra );
                            } ) :
                            getWidthOrHeight( elem, dimension, extra );
                }
            },

            set: function( elem, value, extra ) {
                var matches,
                    styles = getStyles( elem ),

                    // Only read styles.position if the test has a chance to fail
                    // to avoid forcing a reflow.
                    scrollboxSizeBuggy = !support.scrollboxSize() &&
                        styles.position === "absolute",

                    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                    boxSizingNeeded = scrollboxSizeBuggy || extra,
                    isBorderBox = boxSizingNeeded &&
                        jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                    subtract = extra ?
                        boxModelAdjustment(
                            elem,
                            dimension,
                            extra,
                            isBorderBox,
                            styles
                        ) :
                        0;

                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if ( isBorderBox && scrollboxSizeBuggy ) {
                    subtract -= Math.ceil(
                        elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
                        parseFloat( styles[ dimension ] ) -
                        boxModelAdjustment( elem, dimension, "border", false, styles ) -
                        0.5
                    );
                }

                // Convert to pixels if value adjustment is needed
                if ( subtract && ( matches = rcssNum.exec( value ) ) &&
                    ( matches[ 3 ] || "px" ) !== "px" ) {

                    elem.style[ dimension ] = value;
                    value = jQuery.css( elem, dimension );
                }

                return setPositiveNumber( elem, value, subtract );
            }
        };
    } );

    jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
        function( elem, computed ) {
            if ( computed ) {
                return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
                    elem.getBoundingClientRect().left -
                        swap( elem, { marginLeft: 0 }, function() {
                            return elem.getBoundingClientRect().left;
                        } )
                    ) + "px";
            }
        }
    );

    // These hooks are used by animate to expand properties
    jQuery.each( {
        margin: "",
        padding: "",
        border: "Width"
    }, function( prefix, suffix ) {
        jQuery.cssHooks[ prefix + suffix ] = {
            expand: function( value ) {
                var i = 0,
                    expanded = {},

                    // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split( " " ) : [ value ];

                for ( ; i < 4; i++ ) {
                    expanded[ prefix + cssExpand[ i ] + suffix ] =
                        parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                }

                return expanded;
            }
        };

        if ( prefix !== "margin" ) {
            jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
        }
    } );

    jQuery.fn.extend( {
        css: function( name, value ) {
            return access( this, function( elem, name, value ) {
                var styles, len,
                    map = {},
                    i = 0;

                if ( Array.isArray( name ) ) {
                    styles = getStyles( elem );
                    len = name.length;

                    for ( ; i < len; i++ ) {
                        map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                    }

                    return map;
                }

                return value !== undefined ?
                    jQuery.style( elem, name, value ) :
                    jQuery.css( elem, name );
            }, name, value, arguments.length > 1 );
        }
    } );


    function Tween( elem, options, prop, end, easing ) {
        return new Tween.prototype.init( elem, options, prop, end, easing );
    }
    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function( elem, options, prop, end, easing, unit ) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
        },
        cur: function() {
            var hooks = Tween.propHooks[ this.prop ];

            return hooks && hooks.get ?
                hooks.get( this ) :
                Tween.propHooks._default.get( this );
        },
        run: function( percent ) {
            var eased,
                hooks = Tween.propHooks[ this.prop ];

            if ( this.options.duration ) {
                this.pos = eased = jQuery.easing[ this.easing ](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = ( this.end - this.start ) * eased + this.start;

            if ( this.options.step ) {
                this.options.step.call( this.elem, this.now, this );
            }

            if ( hooks && hooks.set ) {
                hooks.set( this );
            } else {
                Tween.propHooks._default.set( this );
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function( tween ) {
                var result;

                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if ( tween.elem.nodeType !== 1 ||
                    tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
                    return tween.elem[ tween.prop ];
                }

                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css( tween.elem, tween.prop, "" );

                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function( tween ) {

                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if ( jQuery.fx.step[ tween.prop ] ) {
                    jQuery.fx.step[ tween.prop ]( tween );
                } else if ( tween.elem.nodeType === 1 && (
                        jQuery.cssHooks[ tween.prop ] ||
                        tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
                    jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                } else {
                    tween.elem[ tween.prop ] = tween.now;
                }
            }
        }
    };

    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function( tween ) {
            if ( tween.elem.nodeType && tween.elem.parentNode ) {
                tween.elem[ tween.prop ] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function( p ) {
            return p;
        },
        swing: function( p ) {
            return 0.5 - Math.cos( p * Math.PI ) / 2;
        },
        _default: "swing"
    };

    jQuery.fx = Tween.prototype.init;

    // Back compat <1.8 extension point
    jQuery.fx.step = {};




    var
        fxNow, inProgress,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function schedule() {
        if ( inProgress ) {
            if ( document.hidden === false && window.requestAnimationFrame ) {
                window.requestAnimationFrame( schedule );
            } else {
                window.setTimeout( schedule, jQuery.fx.interval );
            }

            jQuery.fx.tick();
        }
    }

    // Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout( function() {
            fxNow = undefined;
        } );
        return ( fxNow = Date.now() );
    }

    // Generate parameters to create a standard animation
    function genFx( type, includeWidth ) {
        var which,
            i = 0,
            attrs = { height: type };

        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for ( ; i < 4; i += 2 - includeWidth ) {
            which = cssExpand[ i ];
            attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
        }

        if ( includeWidth ) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween( value, prop, animation ) {
        var tween,
            collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
            index = 0,
            length = collection.length;
        for ( ; index < length; index++ ) {
            if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

                // We're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter( elem, props, opts ) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree( elem ),
            dataShow = dataPriv.get( elem, "fxshow" );

        // Queue-skipping animations hijack the fx hooks
        if ( !opts.queue ) {
            hooks = jQuery._queueHooks( elem, "fx" );
            if ( hooks.unqueued == null ) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if ( !hooks.unqueued ) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always( function() {

                // Ensure the complete handler is called before this completes
                anim.always( function() {
                    hooks.unqueued--;
                    if ( !jQuery.queue( elem, "fx" ).length ) {
                        hooks.empty.fire();
                    }
                } );
            } );
        }

        // Detect show/hide animations
        for ( prop in props ) {
            value = props[ prop ];
            if ( rfxtypes.test( value ) ) {
                delete props[ prop ];
                toggle = toggle || value === "toggle";
                if ( value === ( hidden ? "hide" : "show" ) ) {

                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                        hidden = true;

                    // Ignore all other no-op show/hide data
                    } else {
                        continue;
                    }
                }
                orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
            }
        }

        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject( props );
        if ( !propTween && jQuery.isEmptyObject( orig ) ) {
            return;
        }

        // Restrict "overflow" and "display" styles during box animations
        if ( isBox && elem.nodeType === 1 ) {

            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if ( restoreDisplay == null ) {
                restoreDisplay = dataPriv.get( elem, "display" );
            }
            display = jQuery.css( elem, "display" );
            if ( display === "none" ) {
                if ( restoreDisplay ) {
                    display = restoreDisplay;
                } else {

                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide( [ elem ], true );
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css( elem, "display" );
                    showHide( [ elem ] );
                }
            }

            // Animate inline elements as inline-block
            if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
                if ( jQuery.css( elem, "float" ) === "none" ) {

                    // Restore the original display value at the end of pure show/hide animations
                    if ( !propTween ) {
                        anim.done( function() {
                            style.display = restoreDisplay;
                        } );
                        if ( restoreDisplay == null ) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }

        if ( opts.overflow ) {
            style.overflow = "hidden";
            anim.always( function() {
                style.overflow = opts.overflow[ 0 ];
                style.overflowX = opts.overflow[ 1 ];
                style.overflowY = opts.overflow[ 2 ];
            } );
        }

        // Implement show/hide animations
        propTween = false;
        for ( prop in orig ) {

            // General show/hide setup for this element animation
            if ( !propTween ) {
                if ( dataShow ) {
                    if ( "hidden" in dataShow ) {
                        hidden = dataShow.hidden;
                    }
                } else {
                    dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
                }

                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if ( toggle ) {
                    dataShow.hidden = !hidden;
                }

                // Show elements before animating them
                if ( hidden ) {
                    showHide( [ elem ], true );
                }

                /* eslint-disable no-loop-func */

                anim.done( function() {

                /* eslint-enable no-loop-func */

                    // The final step of a "hide" animation is actually hiding the element
                    if ( !hidden ) {
                        showHide( [ elem ] );
                    }
                    dataPriv.remove( elem, "fxshow" );
                    for ( prop in orig ) {
                        jQuery.style( elem, prop, orig[ prop ] );
                    }
                } );
            }

            // Per-property setup
            propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
            if ( !( prop in dataShow ) ) {
                dataShow[ prop ] = propTween.start;
                if ( hidden ) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }

    function propFilter( props, specialEasing ) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for ( index in props ) {
            name = camelCase( index );
            easing = specialEasing[ name ];
            value = props[ index ];
            if ( Array.isArray( value ) ) {
                easing = value[ 1 ];
                value = props[ index ] = value[ 0 ];
            }

            if ( index !== name ) {
                props[ name ] = value;
                delete props[ index ];
            }

            hooks = jQuery.cssHooks[ name ];
            if ( hooks && "expand" in hooks ) {
                value = hooks.expand( value );
                delete props[ name ];

                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for ( index in value ) {
                    if ( !( index in props ) ) {
                        props[ index ] = value[ index ];
                        specialEasing[ index ] = easing;
                    }
                }
            } else {
                specialEasing[ name ] = easing;
            }
        }
    }

    function Animation( elem, properties, options ) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always( function() {

                // Don't match elem in the :animated selector
                delete tick.elem;
            } ),
            tick = function() {
                if ( stopped ) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

                    // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for ( ; index < length; index++ ) {
                    animation.tweens[ index ].run( percent );
                }

                deferred.notifyWith( elem, [ animation, percent, remaining ] );

                // If there's more to do, yield
                if ( percent < 1 && length ) {
                    return remaining;
                }

                // If this was an empty animation, synthesize a final progress notification
                if ( !length ) {
                    deferred.notifyWith( elem, [ animation, 1, 0 ] );
                }

                // Resolve the animation and report its conclusion
                deferred.resolveWith( elem, [ animation ] );
                return false;
            },
            animation = deferred.promise( {
                elem: elem,
                props: jQuery.extend( {}, properties ),
                opts: jQuery.extend( true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options ),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function( prop, end ) {
                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
                            animation.opts.specialEasing[ prop ] || animation.opts.easing );
                    animation.tweens.push( tween );
                    return tween;
                },
                stop: function( gotoEnd ) {
                    var index = 0,

                        // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if ( stopped ) {
                        return this;
                    }
                    stopped = true;
                    for ( ; index < length; index++ ) {
                        animation.tweens[ index ].run( 1 );
                    }

                    // Resolve when we played the last frame; otherwise, reject
                    if ( gotoEnd ) {
                        deferred.notifyWith( elem, [ animation, 1, 0 ] );
                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
                    } else {
                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
                    }
                    return this;
                }
            } ),
            props = animation.props;

        propFilter( props, animation.opts.specialEasing );

        for ( ; index < length; index++ ) {
            result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
            if ( result ) {
                if ( isFunction( result.stop ) ) {
                    jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
                        result.stop.bind( result );
                }
                return result;
            }
        }

        jQuery.map( props, createTween, animation );

        if ( isFunction( animation.opts.start ) ) {
            animation.opts.start.call( elem, animation );
        }

        // Attach callbacks from options
        animation
            .progress( animation.opts.progress )
            .done( animation.opts.done, animation.opts.complete )
            .fail( animation.opts.fail )
            .always( animation.opts.always );

        jQuery.fx.timer(
            jQuery.extend( tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            } )
        );

        return animation;
    }

    jQuery.Animation = jQuery.extend( Animation, {

        tweeners: {
            "*": [ function( prop, value ) {
                var tween = this.createTween( prop, value );
                adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
                return tween;
            } ]
        },

        tweener: function( props, callback ) {
            if ( isFunction( props ) ) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.match( rnothtmlwhite );
            }

            var prop,
                index = 0,
                length = props.length;

            for ( ; index < length; index++ ) {
                prop = props[ index ];
                Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
                Animation.tweeners[ prop ].unshift( callback );
            }
        },

        prefilters: [ defaultPrefilter ],

        prefilter: function( callback, prepend ) {
            if ( prepend ) {
                Animation.prefilters.unshift( callback );
            } else {
                Animation.prefilters.push( callback );
            }
        }
    } );

    jQuery.speed = function( speed, easing, fn ) {
        var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
            complete: fn || !fn && easing ||
                isFunction( speed ) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction( easing ) && easing
        };

        // Go to the end state if fx are off
        if ( jQuery.fx.off ) {
            opt.duration = 0;

        } else {
            if ( typeof opt.duration !== "number" ) {
                if ( opt.duration in jQuery.fx.speeds ) {
                    opt.duration = jQuery.fx.speeds[ opt.duration ];

                } else {
                    opt.duration = jQuery.fx.speeds._default;
                }
            }
        }

        // Normalize opt.queue - true/undefined/null -> "fx"
        if ( opt.queue == null || opt.queue === true ) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function() {
            if ( isFunction( opt.old ) ) {
                opt.old.call( this );
            }

            if ( opt.queue ) {
                jQuery.dequeue( this, opt.queue );
            }
        };

        return opt;
    };

    jQuery.fn.extend( {
        fadeTo: function( speed, to, easing, callback ) {

            // Show any hidden elements after setting opacity to 0
            return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

                // Animate to the value specified
                .end().animate( { opacity: to }, speed, easing, callback );
        },
        animate: function( prop, speed, easing, callback ) {
            var empty = jQuery.isEmptyObject( prop ),
                optall = jQuery.speed( speed, easing, callback ),
                doAnimation = function() {

                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation( this, jQuery.extend( {}, prop ), optall );

                    // Empty animations, or finishing resolves immediately
                    if ( empty || dataPriv.get( this, "finish" ) ) {
                        anim.stop( true );
                    }
                };
                doAnimation.finish = doAnimation;

            return empty || optall.queue === false ?
                this.each( doAnimation ) :
                this.queue( optall.queue, doAnimation );
        },
        stop: function( type, clearQueue, gotoEnd ) {
            var stopQueue = function( hooks ) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop( gotoEnd );
            };

            if ( typeof type !== "string" ) {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if ( clearQueue ) {
                this.queue( type || "fx", [] );
            }

            return this.each( function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get( this );

                if ( index ) {
                    if ( data[ index ] && data[ index ].stop ) {
                        stopQueue( data[ index ] );
                    }
                } else {
                    for ( index in data ) {
                        if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                            stopQueue( data[ index ] );
                        }
                    }
                }

                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this &&
                        ( type == null || timers[ index ].queue === type ) ) {

                        timers[ index ].anim.stop( gotoEnd );
                        dequeue = false;
                        timers.splice( index, 1 );
                    }
                }

                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if ( dequeue || !gotoEnd ) {
                    jQuery.dequeue( this, type );
                }
            } );
        },
        finish: function( type ) {
            if ( type !== false ) {
                type = type || "fx";
            }
            return this.each( function() {
                var index,
                    data = dataPriv.get( this ),
                    queue = data[ type + "queue" ],
                    hooks = data[ type + "queueHooks" ],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // Enable finishing flag on private data
                data.finish = true;

                // Empty the queue first
                jQuery.queue( this, type, [] );

                if ( hooks && hooks.stop ) {
                    hooks.stop.call( this, true );
                }

                // Look for any active animations, and finish them
                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                        timers[ index ].anim.stop( true );
                        timers.splice( index, 1 );
                    }
                }

                // Look for any animations in the old queue and finish them
                for ( index = 0; index < length; index++ ) {
                    if ( queue[ index ] && queue[ index ].finish ) {
                        queue[ index ].finish.call( this );
                    }
                }

                // Turn off finishing flag
                delete data.finish;
            } );
        }
    } );

    jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
        var cssFn = jQuery.fn[ name ];
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply( this, arguments ) :
                this.animate( genFx( name, true ), speed, easing, callback );
        };
    } );

    // Generate shortcuts for custom animations
    jQuery.each( {
        slideDown: genFx( "show" ),
        slideUp: genFx( "hide" ),
        slideToggle: genFx( "toggle" ),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return this.animate( props, speed, easing, callback );
        };
    } );

    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer,
            i = 0,
            timers = jQuery.timers;

        fxNow = Date.now();

        for ( ; i < timers.length; i++ ) {
            timer = timers[ i ];

            // Run the timer and safely remove it when done (allowing for external removal)
            if ( !timer() && timers[ i ] === timer ) {
                timers.splice( i--, 1 );
            }
        }

        if ( !timers.length ) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function( timer ) {
        jQuery.timers.push( timer );
        jQuery.fx.start();
    };

    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if ( inProgress ) {
            return;
        }

        inProgress = true;
        schedule();
    };

    jQuery.fx.stop = function() {
        inProgress = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,

        // Default speed
        _default: 400
    };


    // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function( time, type ) {
        time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
        type = type || "fx";

        return this.queue( type, function( next, hooks ) {
            var timeout = window.setTimeout( next, time );
            hooks.stop = function() {
                window.clearTimeout( timeout );
            };
        } );
    };


    ( function() {
        var input = document.createElement( "input" ),
            select = document.createElement( "select" ),
            opt = select.appendChild( document.createElement( "option" ) );

        input.type = "checkbox";

        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";

        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;

        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement( "input" );
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    } )();


    var boolHook,
        attrHandle = jQuery.expr.attrHandle;

    jQuery.fn.extend( {
        attr: function( name, value ) {
            return access( this, jQuery.attr, name, value, arguments.length > 1 );
        },

        removeAttr: function( name ) {
            return this.each( function() {
                jQuery.removeAttr( this, name );
            } );
        }
    } );

    jQuery.extend( {
        attr: function( elem, name, value ) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set attributes on text, comment and attribute nodes
            if ( nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if ( typeof elem.getAttribute === "undefined" ) {
                return jQuery.prop( elem, name, value );
            }

            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
                hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
                    ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
            }

            if ( value !== undefined ) {
                if ( value === null ) {
                    jQuery.removeAttr( elem, name );
                    return;
                }

                if ( hooks && "set" in hooks &&
                    ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                    return ret;
                }

                elem.setAttribute( name, value + "" );
                return value;
            }

            if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
                return ret;
            }

            ret = jQuery.find.attr( elem, name );

            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },

        attrHooks: {
            type: {
                set: function( elem, value ) {
                    if ( !support.radioValue && value === "radio" &&
                        nodeName( elem, "input" ) ) {
                        var val = elem.value;
                        elem.setAttribute( "type", value );
                        if ( val ) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },

        removeAttr: function( elem, value ) {
            var name,
                i = 0,

                // Attribute names can contain non-HTML whitespace characters
                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                attrNames = value && value.match( rnothtmlwhite );

            if ( attrNames && elem.nodeType === 1 ) {
                while ( ( name = attrNames[ i++ ] ) ) {
                    elem.removeAttribute( name );
                }
            }
        }
    } );

    // Hooks for boolean attributes
    boolHook = {
        set: function( elem, value, name ) {
            if ( value === false ) {

                // Remove boolean attributes when set to false
                jQuery.removeAttr( elem, name );
            } else {
                elem.setAttribute( name, name );
            }
            return name;
        }
    };

    jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
        var getter = attrHandle[ name ] || jQuery.find.attr;

        attrHandle[ name ] = function( elem, name, isXML ) {
            var ret, handle,
                lowercaseName = name.toLowerCase();

            if ( !isXML ) {

                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[ lowercaseName ];
                attrHandle[ lowercaseName ] = ret;
                ret = getter( elem, name, isXML ) != null ?
                    lowercaseName :
                    null;
                attrHandle[ lowercaseName ] = handle;
            }
            return ret;
        };
    } );




    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend( {
        prop: function( name, value ) {
            return access( this, jQuery.prop, name, value, arguments.length > 1 );
        },

        removeProp: function( name ) {
            return this.each( function() {
                delete this[ jQuery.propFix[ name ] || name ];
            } );
        }
    } );

    jQuery.extend( {
        prop: function( elem, name, value ) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set properties on text, comment and attribute nodes
            if ( nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

                // Fix name and attach hooks
                name = jQuery.propFix[ name ] || name;
                hooks = jQuery.propHooks[ name ];
            }

            if ( value !== undefined ) {
                if ( hooks && "set" in hooks &&
                    ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                    return ret;
                }

                return ( elem[ name ] = value );
            }

            if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
                return ret;
            }

            return elem[ name ];
        },

        propHooks: {
            tabIndex: {
                get: function( elem ) {

                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr( elem, "tabindex" );

                    if ( tabindex ) {
                        return parseInt( tabindex, 10 );
                    }

                    if (
                        rfocusable.test( elem.nodeName ) ||
                        rclickable.test( elem.nodeName ) &&
                        elem.href
                    ) {
                        return 0;
                    }

                    return -1;
                }
            }
        },

        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    } );

    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if ( !support.optSelected ) {
        jQuery.propHooks.selected = {
            get: function( elem ) {

                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if ( parent && parent.parentNode ) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function( elem ) {

                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if ( parent ) {
                    parent.selectedIndex;

                    if ( parent.parentNode ) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }

    jQuery.each( [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[ this.toLowerCase() ] = this;
    } );




        // Strip and collapse whitespace according to HTML spec
        // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
        function stripAndCollapse( value ) {
            var tokens = value.match( rnothtmlwhite ) || [];
            return tokens.join( " " );
        }


    function getClass( elem ) {
        return elem.getAttribute && elem.getAttribute( "class" ) || "";
    }

    function classesToArray( value ) {
        if ( Array.isArray( value ) ) {
            return value;
        }
        if ( typeof value === "string" ) {
            return value.match( rnothtmlwhite ) || [];
        }
        return [];
    }

    jQuery.fn.extend( {
        addClass: function( value ) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if ( isFunction( value ) ) {
                return this.each( function( j ) {
                    jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
                } );
            }

            classes = classesToArray( value );

            if ( classes.length ) {
                while ( ( elem = this[ i++ ] ) ) {
                    curValue = getClass( elem );
                    cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

                    if ( cur ) {
                        j = 0;
                        while ( ( clazz = classes[ j++ ] ) ) {
                            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                                cur += clazz + " ";
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse( cur );
                        if ( curValue !== finalValue ) {
                            elem.setAttribute( "class", finalValue );
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function( value ) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if ( isFunction( value ) ) {
                return this.each( function( j ) {
                    jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
                } );
            }

            if ( !arguments.length ) {
                return this.attr( "class", "" );
            }

            classes = classesToArray( value );

            if ( classes.length ) {
                while ( ( elem = this[ i++ ] ) ) {
                    curValue = getClass( elem );

                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

                    if ( cur ) {
                        j = 0;
                        while ( ( clazz = classes[ j++ ] ) ) {

                            // Remove *all* instances
                            while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                                cur = cur.replace( " " + clazz + " ", " " );
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse( cur );
                        if ( curValue !== finalValue ) {
                            elem.setAttribute( "class", finalValue );
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function( value, stateVal ) {
            var type = typeof value,
                isValidValue = type === "string" || Array.isArray( value );

            if ( typeof stateVal === "boolean" && isValidValue ) {
                return stateVal ? this.addClass( value ) : this.removeClass( value );
            }

            if ( isFunction( value ) ) {
                return this.each( function( i ) {
                    jQuery( this ).toggleClass(
                        value.call( this, i, getClass( this ), stateVal ),
                        stateVal
                    );
                } );
            }

            return this.each( function() {
                var className, i, self, classNames;

                if ( isValidValue ) {

                    // Toggle individual class names
                    i = 0;
                    self = jQuery( this );
                    classNames = classesToArray( value );

                    while ( ( className = classNames[ i++ ] ) ) {

                        // Check each className given, space separated list
                        if ( self.hasClass( className ) ) {
                            self.removeClass( className );
                        } else {
                            self.addClass( className );
                        }
                    }

                // Toggle whole class name
                } else if ( value === undefined || type === "boolean" ) {
                    className = getClass( this );
                    if ( className ) {

                        // Store className if set
                        dataPriv.set( this, "__className__", className );
                    }

                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if ( this.setAttribute ) {
                        this.setAttribute( "class",
                            className || value === false ?
                            "" :
                            dataPriv.get( this, "__className__" ) || ""
                        );
                    }
                }
            } );
        },

        hasClass: function( selector ) {
            var className, elem,
                i = 0;

            className = " " + selector + " ";
            while ( ( elem = this[ i++ ] ) ) {
                if ( elem.nodeType === 1 &&
                    ( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
                        return true;
                }
            }

            return false;
        }
    } );




    var rreturn = /\r/g;

    jQuery.fn.extend( {
        val: function( value ) {
            var hooks, ret, valueIsFunction,
                elem = this[ 0 ];

            if ( !arguments.length ) {
                if ( elem ) {
                    hooks = jQuery.valHooks[ elem.type ] ||
                        jQuery.valHooks[ elem.nodeName.toLowerCase() ];

                    if ( hooks &&
                        "get" in hooks &&
                        ( ret = hooks.get( elem, "value" ) ) !== undefined
                    ) {
                        return ret;
                    }

                    ret = elem.value;

                    // Handle most common string cases
                    if ( typeof ret === "string" ) {
                        return ret.replace( rreturn, "" );
                    }

                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }

                return;
            }

            valueIsFunction = isFunction( value );

            return this.each( function( i ) {
                var val;

                if ( this.nodeType !== 1 ) {
                    return;
                }

                if ( valueIsFunction ) {
                    val = value.call( this, i, jQuery( this ).val() );
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if ( val == null ) {
                    val = "";

                } else if ( typeof val === "number" ) {
                    val += "";

                } else if ( Array.isArray( val ) ) {
                    val = jQuery.map( val, function( value ) {
                        return value == null ? "" : value + "";
                    } );
                }

                hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

                // If set returns undefined, fall back to normal setting
                if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
                    this.value = val;
                }
            } );
        }
    } );

    jQuery.extend( {
        valHooks: {
            option: {
                get: function( elem ) {

                    var val = jQuery.find.attr( elem, "value" );
                    return val != null ?
                        val :

                        // Support: IE <=10 - 11 only
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        stripAndCollapse( jQuery.text( elem ) );
                }
            },
            select: {
                get: function( elem ) {
                    var value, option, i,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one",
                        values = one ? null : [],
                        max = one ? index + 1 : options.length;

                    if ( index < 0 ) {
                        i = max;

                    } else {
                        i = one ? index : 0;
                    }

                    // Loop through all the selected options
                    for ( ; i < max; i++ ) {
                        option = options[ i ];

                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ( ( option.selected || i === index ) &&

                                // Don't return options that are disabled or in a disabled optgroup
                                !option.disabled &&
                                ( !option.parentNode.disabled ||
                                    !nodeName( option.parentNode, "optgroup" ) ) ) {

                            // Get the specific value for the option
                            value = jQuery( option ).val();

                            // We don't need an array for one selects
                            if ( one ) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push( value );
                        }
                    }

                    return values;
                },

                set: function( elem, value ) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray( value ),
                        i = options.length;

                    while ( i-- ) {
                        option = options[ i ];

                        /* eslint-disable no-cond-assign */

                        if ( option.selected =
                            jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
                        ) {
                            optionSet = true;
                        }

                        /* eslint-enable no-cond-assign */
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if ( !optionSet ) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    } );

    // Radios and checkboxes getter/setter
    jQuery.each( [ "radio", "checkbox" ], function() {
        jQuery.valHooks[ this ] = {
            set: function( elem, value ) {
                if ( Array.isArray( value ) ) {
                    return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
                }
            }
        };
        if ( !support.checkOn ) {
            jQuery.valHooks[ this ].get = function( elem ) {
                return elem.getAttribute( "value" ) === null ? "on" : elem.value;
            };
        }
    } );




    // Return jQuery for attributes-only inclusion


    support.focusin = "onfocusin" in window;


    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function( e ) {
            e.stopPropagation();
        };

    jQuery.extend( jQuery.event, {

        trigger: function( event, data, elem, onlyHandlers ) {

            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
                eventPath = [ elem || document ],
                type = hasOwn.call( event, "type" ) ? event.type : event,
                namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

            cur = lastElement = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
                return;
            }

            if ( type.indexOf( "." ) > -1 ) {

                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split( "." );
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf( ":" ) < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[ jQuery.expando ] ?
                event :
                new jQuery.Event( type, typeof event === "object" && event );

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join( "." );
            event.rnamespace = event.namespace ?
                new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
                null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if ( !event.target ) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [ event ] :
                jQuery.makeArray( data, [ event ] );

            // Allow special events to draw outside the lines
            special = jQuery.event.special[ type ] || {};
            if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

                bubbleType = special.delegateType || type;
                if ( !rfocusMorph.test( bubbleType + type ) ) {
                    cur = cur.parentNode;
                }
                for ( ; cur; cur = cur.parentNode ) {
                    eventPath.push( cur );
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if ( tmp === ( elem.ownerDocument || document ) ) {
                    eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
                lastElement = cur;
                event.type = i > 1 ?
                    bubbleType :
                    special.bindType || type;

                // jQuery handler
                handle = (
                        dataPriv.get( cur, "events" ) || Object.create( null )
                    )[ event.type ] &&
                    dataPriv.get( cur, "handle" );
                if ( handle ) {
                    handle.apply( cur, data );
                }

                // Native handler
                handle = ontype && cur[ ontype ];
                if ( handle && handle.apply && acceptData( cur ) ) {
                    event.result = handle.apply( cur, data );
                    if ( event.result === false ) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if ( !onlyHandlers && !event.isDefaultPrevented() ) {

                if ( ( !special._default ||
                    special._default.apply( eventPath.pop(), data ) === false ) &&
                    acceptData( elem ) ) {

                    // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ ontype ];

                        if ( tmp ) {
                            elem[ ontype ] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;

                        if ( event.isPropagationStopped() ) {
                            lastElement.addEventListener( type, stopPropagationCallback );
                        }

                        elem[ type ]();

                        if ( event.isPropagationStopped() ) {
                            lastElement.removeEventListener( type, stopPropagationCallback );
                        }

                        jQuery.event.triggered = undefined;

                        if ( tmp ) {
                            elem[ ontype ] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function( type, elem, event ) {
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true
                }
            );

            jQuery.event.trigger( e, null, elem );
        }

    } );

    jQuery.fn.extend( {

        trigger: function( type, data ) {
            return this.each( function() {
                jQuery.event.trigger( type, data, this );
            } );
        },
        triggerHandler: function( type, data ) {
            var elem = this[ 0 ];
            if ( elem ) {
                return jQuery.event.trigger( type, data, elem, true );
            }
        }
    } );


    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if ( !support.focusin ) {
        jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function( event ) {
                jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
            };

            jQuery.event.special[ fix ] = {
                setup: function() {

                    // Handle: regular nodes (via `this.ownerDocument`), window
                    // (via `this.document`) & document (via `this`).
                    var doc = this.ownerDocument || this.document || this,
                        attaches = dataPriv.access( doc, fix );

                    if ( !attaches ) {
                        doc.addEventListener( orig, handler, true );
                    }
                    dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
                },
                teardown: function() {
                    var doc = this.ownerDocument || this.document || this,
                        attaches = dataPriv.access( doc, fix ) - 1;

                    if ( !attaches ) {
                        doc.removeEventListener( orig, handler, true );
                        dataPriv.remove( doc, fix );

                    } else {
                        dataPriv.access( doc, fix, attaches );
                    }
                }
            };
        } );
    }
    var location = window.location;

    var nonce = { guid: Date.now() };

    var rquery = ( /\?/ );



    // Cross-browser xml parsing
    jQuery.parseXML = function( data ) {
        var xml;
        if ( !data || typeof data !== "string" ) {
            return null;
        }

        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
        } catch ( e ) {
            xml = undefined;
        }

        if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
            jQuery.error( "Invalid XML: " + data );
        }
        return xml;
    };


    var
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams( prefix, obj, traditional, add ) {
        var name;

        if ( Array.isArray( obj ) ) {

            // Serialize array item.
            jQuery.each( obj, function( i, v ) {
                if ( traditional || rbracket.test( prefix ) ) {

                    // Treat each array item as a scalar.
                    add( prefix, v );

                } else {

                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                        prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                        v,
                        traditional,
                        add
                    );
                }
            } );

        } else if ( !traditional && toType( obj ) === "object" ) {

            // Serialize object item.
            for ( name in obj ) {
                buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
            }

        } else {

            // Serialize scalar item.
            add( prefix, obj );
        }
    }

    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function( a, traditional ) {
        var prefix,
            s = [],
            add = function( key, valueOrFunction ) {

                // If value is a function, invoke it and use its return value
                var value = isFunction( valueOrFunction ) ?
                    valueOrFunction() :
                    valueOrFunction;

                s[ s.length ] = encodeURIComponent( key ) + "=" +
                    encodeURIComponent( value == null ? "" : value );
            };

        if ( a == null ) {
            return "";
        }

        // If an array was passed in, assume that it is an array of form elements.
        if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

            // Serialize the form elements
            jQuery.each( a, function() {
                add( this.name, this.value );
            } );

        } else {

            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for ( prefix in a ) {
                buildParams( prefix, a[ prefix ], traditional, add );
            }
        }

        // Return the resulting serialization
        return s.join( "&" );
    };

    jQuery.fn.extend( {
        serialize: function() {
            return jQuery.param( this.serializeArray() );
        },
        serializeArray: function() {
            return this.map( function() {

                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop( this, "elements" );
                return elements ? jQuery.makeArray( elements ) : this;
            } )
            .filter( function() {
                var type = this.type;

                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery( this ).is( ":disabled" ) &&
                    rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                    ( this.checked || !rcheckableType.test( type ) );
            } )
            .map( function( _i, elem ) {
                var val = jQuery( this ).val();

                if ( val == null ) {
                    return null;
                }

                if ( Array.isArray( val ) ) {
                    return jQuery.map( val, function( val ) {
                        return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                    } );
                }

                return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
            } ).get();
        }
    } );


    var
        r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,

        /* Prefilters
        * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
        * 2) These are called:
        *    - BEFORE asking for a transport
        *    - AFTER param serialization (s.data is a string if s.processData is true)
        * 3) key is the dataType
        * 4) the catchall symbol "*" can be used
        * 5) execution will start with transport dataType and THEN continue down to "*" if needed
        */
        prefilters = {},

        /* Transports bindings
        * 1) key is the dataType
        * 2) the catchall symbol "*" can be used
        * 3) selection will start with transport dataType and THEN go to "*" if needed
        */
        transports = {},

        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat( "*" ),

        // Anchor tag for parsing the document origin
        originAnchor = document.createElement( "a" );
        originAnchor.href = location.href;

    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports( structure ) {

        // dataTypeExpression is optional and defaults to "*"
        return function( dataTypeExpression, func ) {

            if ( typeof dataTypeExpression !== "string" ) {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

            if ( isFunction( func ) ) {

                // For each dataType in the dataTypeExpression
                while ( ( dataType = dataTypes[ i++ ] ) ) {

                    // Prepend if requested
                    if ( dataType[ 0 ] === "+" ) {
                        dataType = dataType.slice( 1 ) || "*";
                        ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

                    // Otherwise append
                    } else {
                        ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
                    }
                }
            }
        };
    }

    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

        var inspected = {},
            seekingTransport = ( structure === transports );

        function inspect( dataType ) {
            var selected;
            inspected[ dataType ] = true;
            jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
                var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
                if ( typeof dataTypeOrTransport === "string" &&
                    !seekingTransport && !inspected[ dataTypeOrTransport ] ) {

                    options.dataTypes.unshift( dataTypeOrTransport );
                    inspect( dataTypeOrTransport );
                    return false;
                } else if ( seekingTransport ) {
                    return !( selected = dataTypeOrTransport );
                }
            } );
            return selected;
        }

        return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
    }

    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend( target, src ) {
        var key, deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for ( key in src ) {
            if ( src[ key ] !== undefined ) {
                ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
            }
        }
        if ( deep ) {
            jQuery.extend( true, target, deep );
        }

        return target;
    }

    /* Handles responses to an ajax request:
    * - finds the right dataType (mediates between content-type and expected dataType)
    * - returns the corresponding response
    */
    function ajaxHandleResponses( s, jqXHR, responses ) {

        var ct, type, finalDataType, firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while ( dataTypes[ 0 ] === "*" ) {
            dataTypes.shift();
            if ( ct === undefined ) {
                ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
            }
        }

        // Check if we're dealing with a known content-type
        if ( ct ) {
            for ( type in contents ) {
                if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    dataTypes.unshift( type );
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if ( dataTypes[ 0 ] in responses ) {
            finalDataType = dataTypes[ 0 ];
        } else {

            // Try convertible dataTypes
            for ( type in responses ) {
                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
                    finalDataType = type;
                    break;
                }
                if ( !firstDataType ) {
                    firstDataType = type;
                }
            }

            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if ( finalDataType ) {
            if ( finalDataType !== dataTypes[ 0 ] ) {
                dataTypes.unshift( finalDataType );
            }
            return responses[ finalDataType ];
        }
    }

    /* Chain conversions given the request and the original response
    * Also sets the responseXXX fields on the jqXHR instance
    */
    function ajaxConvert( s, response, jqXHR, isSuccess ) {
        var conv2, current, conv, tmp, prev,
            converters = {},

            // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if ( dataTypes[ 1 ] ) {
            for ( conv in s.converters ) {
                converters[ conv.toLowerCase() ] = s.converters[ conv ];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while ( current ) {

            if ( s.responseFields[ current ] ) {
                jqXHR[ s.responseFields[ current ] ] = response;
            }

            // Apply the dataFilter if provided
            if ( !prev && isSuccess && s.dataFilter ) {
                response = s.dataFilter( response, s.dataType );
            }

            prev = current;
            current = dataTypes.shift();

            if ( current ) {

                // There's only work to do if current dataType is non-auto
                if ( current === "*" ) {

                    current = prev;

                // Convert response if prev dataType is non-auto and differs from current
                } else if ( prev !== "*" && prev !== current ) {

                    // Seek a direct converter
                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];

                    // If none found, seek a pair
                    if ( !conv ) {
                        for ( conv2 in converters ) {

                            // If conv2 outputs current
                            tmp = conv2.split( " " );
                            if ( tmp[ 1 ] === current ) {

                                // If prev can be converted to accepted input
                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                    converters[ "* " + tmp[ 0 ] ];
                                if ( conv ) {

                                    // Condense equivalence converters
                                    if ( conv === true ) {
                                        conv = converters[ conv2 ];

                                    // Otherwise, insert the intermediate dataType
                                    } else if ( converters[ conv2 ] !== true ) {
                                        current = tmp[ 0 ];
                                        dataTypes.unshift( tmp[ 1 ] );
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if ( conv !== true ) {

                        // Unless errors are allowed to bubble, catch and return them
                        if ( conv && s.throws ) {
                            response = conv( response );
                        } else {
                            try {
                                response = conv( response );
                            } catch ( e ) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }

        return { state: "success", data: response };
    }

    jQuery.extend( {

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test( location.protocol ),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": JSON.parse,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function( target, settings ) {
            return settings ?

                // Building a settings object
                ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

                // Extending ajaxSettings
                ajaxExtend( jQuery.ajaxSettings, target );
        },

        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
        ajaxTransport: addToPrefiltersOrTransports( transports ),

        // Main method
        ajax: function( url, options ) {

            // If url is an object, simulate pre-1.5 signature
            if ( typeof url === "object" ) {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var transport,

                // URL without anti-cache param
                cacheURL,

                // Response headers
                responseHeadersString,
                responseHeaders,

                // timeout handle
                timeoutTimer,

                // Url cleanup var
                urlAnchor,

                // Request state (becomes false upon send and true upon completion)
                completed,

                // To know if global events are to be dispatched
                fireGlobals,

                // Loop variable
                i,

                // uncached part of the url
                uncached,

                // Create the final options object
                s = jQuery.ajaxSetup( {}, options ),

                // Callbacks context
                callbackContext = s.context || s,

                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context &&
                    ( callbackContext.nodeType || callbackContext.jquery ) ?
                        jQuery( callbackContext ) :
                        jQuery.event,

                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks( "once memory" ),

                // Status-dependent callbacks
                statusCode = s.statusCode || {},

                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},

                // Default abort message
                strAbort = "canceled",

                // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function( key ) {
                        var match;
                        if ( completed ) {
                            if ( !responseHeaders ) {
                                responseHeaders = {};
                                while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                                    responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
                                        ( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
                                            .concat( match[ 2 ] );
                                }
                            }
                            match = responseHeaders[ key.toLowerCase() + " " ];
                        }
                        return match == null ? null : match.join( ", " );
                    },

                    // Raw string
                    getAllResponseHeaders: function() {
                        return completed ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function( name, value ) {
                        if ( completed == null ) {
                            name = requestHeadersNames[ name.toLowerCase() ] =
                                requestHeadersNames[ name.toLowerCase() ] || name;
                            requestHeaders[ name ] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function( type ) {
                        if ( completed == null ) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function( map ) {
                        var code;
                        if ( map ) {
                            if ( completed ) {

                                // Execute the appropriate callbacks
                                jqXHR.always( map[ jqXHR.status ] );
                            } else {

                                // Lazy-add the new callbacks in a way that preserves old ones
                                for ( code in map ) {
                                    statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                }
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function( statusText ) {
                        var finalText = statusText || strAbort;
                        if ( transport ) {
                            transport.abort( finalText );
                        }
                        done( 0, finalText );
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise( jqXHR );

            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ( ( url || s.url || location.href ) + "" )
                .replace( rprotocol, location.protocol + "//" );

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

            // A cross-domain request is in order when the origin doesn't match the current origin.
            if ( s.crossDomain == null ) {
                urlAnchor = document.createElement( "a" );

                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;

                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                        urlAnchor.protocol + "//" + urlAnchor.host;
                } catch ( e ) {

                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }

            // Convert data if not already a string
            if ( s.data && s.processData && typeof s.data !== "string" ) {
                s.data = jQuery.param( s.data, s.traditional );
            }

            // Apply prefilters
            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

            // If request was aborted inside a prefilter, stop there
            if ( completed ) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;

            // Watch for a new set of requests
            if ( fireGlobals && jQuery.active++ === 0 ) {
                jQuery.event.trigger( "ajaxStart" );
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test( s.type );

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace( rhash, "" );

            // More options handling for requests with no content
            if ( !s.hasContent ) {

                // Remember the hash so we can put it back
                uncached = s.url.slice( cacheURL.length );

                // If data is available and should be processed, append data to url
                if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
                    cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add or update anti-cache param if needed
                if ( s.cache === false ) {
                    cacheURL = cacheURL.replace( rantiCache, "$1" );
                    uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
                        uncached;
                }

                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;

            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if ( s.data && s.processData &&
                ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
                s.data = s.data.replace( r20, "+" );
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if ( s.ifModified ) {
                if ( jQuery.lastModified[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                }
                if ( jQuery.etag[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                }
            }

            // Set the correct header, if data is being sent
            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                jqXHR.setRequestHeader( "Content-Type", s.contentType );
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
                    s.accepts[ s.dataTypes[ 0 ] ] +
                        ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    s.accepts[ "*" ]
            );

            // Check for headers option
            for ( i in s.headers ) {
                jqXHR.setRequestHeader( i, s.headers[ i ] );
            }

            // Allow custom headers/mimetypes and early abort
            if ( s.beforeSend &&
                ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

                // Abort if not done already and return
                return jqXHR.abort();
            }

            // Aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            completeDeferred.add( s.complete );
            jqXHR.done( s.success );
            jqXHR.fail( s.error );

            // Get transport
            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

            // If no transport, we auto-abort
            if ( !transport ) {
                done( -1, "No Transport" );
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                }

                // If request was aborted inside ajaxSend, stop there
                if ( completed ) {
                    return jqXHR;
                }

                // Timeout
                if ( s.async && s.timeout > 0 ) {
                    timeoutTimer = window.setTimeout( function() {
                        jqXHR.abort( "timeout" );
                    }, s.timeout );
                }

                try {
                    completed = false;
                    transport.send( requestHeaders, done );
                } catch ( e ) {

                    // Rethrow post-completion exceptions
                    if ( completed ) {
                        throw e;
                    }

                    // Propagate others as results
                    done( -1, e );
                }
            }

            // Callback for when everything is done
            function done( status, nativeStatusText, responses, headers ) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Ignore repeat invocations
                if ( completed ) {
                    return;
                }

                completed = true;

                // Clear timeout if it exists
                if ( timeoutTimer ) {
                    window.clearTimeout( timeoutTimer );
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if ( responses ) {
                    response = ajaxHandleResponses( s, jqXHR, responses );
                }

                // Use a noop converter for missing script
                if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
                    s.converters[ "text script" ] = function() {};
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert( s, response, jqXHR, isSuccess );

                // If successful, handle type chaining
                if ( isSuccess ) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if ( s.ifModified ) {
                        modified = jqXHR.getResponseHeader( "Last-Modified" );
                        if ( modified ) {
                            jQuery.lastModified[ cacheURL ] = modified;
                        }
                        modified = jqXHR.getResponseHeader( "etag" );
                        if ( modified ) {
                            jQuery.etag[ cacheURL ] = modified;
                        }
                    }

                    // if no content
                    if ( status === 204 || s.type === "HEAD" ) {
                        statusText = "nocontent";

                    // if not modified
                    } else if ( status === 304 ) {
                        statusText = "notmodified";

                    // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {

                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if ( status || !statusText ) {
                        statusText = "error";
                        if ( status < 0 ) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                // Success/Error
                if ( isSuccess ) {
                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                } else {
                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                }

                // Status-dependent callbacks
                jqXHR.statusCode( statusCode );
                statusCode = undefined;

                if ( fireGlobals ) {
                    globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                        [ jqXHR, s, isSuccess ? success : error ] );
                }

                // Complete
                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

                    // Handle the global AJAX counter
                    if ( !( --jQuery.active ) ) {
                        jQuery.event.trigger( "ajaxStop" );
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function( url, data, callback ) {
            return jQuery.get( url, data, callback, "json" );
        },

        getScript: function( url, callback ) {
            return jQuery.get( url, undefined, callback, "script" );
        }
    } );

    jQuery.each( [ "get", "post" ], function( _i, method ) {
        jQuery[ method ] = function( url, data, callback, type ) {

            // Shift arguments if data argument was omitted
            if ( isFunction( data ) ) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            // The url can be an options object (which then must have .url)
            return jQuery.ajax( jQuery.extend( {
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject( url ) && url ) );
        };
    } );

    jQuery.ajaxPrefilter( function( s ) {
        var i;
        for ( i in s.headers ) {
            if ( i.toLowerCase() === "content-type" ) {
                s.contentType = s.headers[ i ] || "";
            }
        }
    } );


    jQuery._evalUrl = function( url, options, doc ) {
        return jQuery.ajax( {
            url: url,

            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,

            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function( response ) {
                jQuery.globalEval( response, options, doc );
            }
        } );
    };


    jQuery.fn.extend( {
        wrapAll: function( html ) {
            var wrap;

            if ( this[ 0 ] ) {
                if ( isFunction( html ) ) {
                    html = html.call( this[ 0 ] );
                }

                // The elements to wrap the target around
                wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

                if ( this[ 0 ].parentNode ) {
                    wrap.insertBefore( this[ 0 ] );
                }

                wrap.map( function() {
                    var elem = this;

                    while ( elem.firstElementChild ) {
                        elem = elem.firstElementChild;
                    }

                    return elem;
                } ).append( this );
            }

            return this;
        },

        wrapInner: function( html ) {
            if ( isFunction( html ) ) {
                return this.each( function( i ) {
                    jQuery( this ).wrapInner( html.call( this, i ) );
                } );
            }

            return this.each( function() {
                var self = jQuery( this ),
                    contents = self.contents();

                if ( contents.length ) {
                    contents.wrapAll( html );

                } else {
                    self.append( html );
                }
            } );
        },

        wrap: function( html ) {
            var htmlIsFunction = isFunction( html );

            return this.each( function( i ) {
                jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
            } );
        },

        unwrap: function( selector ) {
            this.parent( selector ).not( "body" ).each( function() {
                jQuery( this ).replaceWith( this.childNodes );
            } );
            return this;
        }
    } );


    jQuery.expr.pseudos.hidden = function( elem ) {
        return !jQuery.expr.pseudos.visible( elem );
    };
    jQuery.expr.pseudos.visible = function( elem ) {
        return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
    };




    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch ( e ) {}
    };

    var xhrSuccessStatus = {

            // File protocol always yields status code 0, assume 200
            0: 200,

            // Support: IE <=9 only
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();

    support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
    support.ajax = xhrSupported = !!xhrSupported;

    jQuery.ajaxTransport( function( options ) {
        var callback, errorCallback;

        // Cross domain only allowed if supported through XMLHttpRequest
        if ( support.cors || xhrSupported && !options.crossDomain ) {
            return {
                send: function( headers, complete ) {
                    var i,
                        xhr = options.xhr();

                    xhr.open(
                        options.type,
                        options.url,
                        options.async,
                        options.username,
                        options.password
                    );

                    // Apply custom fields if provided
                    if ( options.xhrFields ) {
                        for ( i in options.xhrFields ) {
                            xhr[ i ] = options.xhrFields[ i ];
                        }
                    }

                    // Override mime type if needed
                    if ( options.mimeType && xhr.overrideMimeType ) {
                        xhr.overrideMimeType( options.mimeType );
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
                        headers[ "X-Requested-With" ] = "XMLHttpRequest";
                    }

                    // Set headers
                    for ( i in headers ) {
                        xhr.setRequestHeader( i, headers[ i ] );
                    }

                    // Callback
                    callback = function( type ) {
                        return function() {
                            if ( callback ) {
                                callback = errorCallback = xhr.onload =
                                    xhr.onerror = xhr.onabort = xhr.ontimeout =
                                        xhr.onreadystatechange = null;

                                if ( type === "abort" ) {
                                    xhr.abort();
                                } else if ( type === "error" ) {

                                    // Support: IE <=9 only
                                    // On a manual native abort, IE9 throws
                                    // errors on any property access that is not readyState
                                    if ( typeof xhr.status !== "number" ) {
                                        complete( 0, "error" );
                                    } else {
                                        complete(

                                            // File: protocol always yields status 0; see #8605, #14207
                                            xhr.status,
                                            xhr.statusText
                                        );
                                    }
                                } else {
                                    complete(
                                        xhrSuccessStatus[ xhr.status ] || xhr.status,
                                        xhr.statusText,

                                        // Support: IE <=9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        ( xhr.responseType || "text" ) !== "text"  ||
                                        typeof xhr.responseText !== "string" ?
                                            { binary: xhr.response } :
                                            { text: xhr.responseText },
                                        xhr.getAllResponseHeaders()
                                    );
                                }
                            }
                        };
                    };

                    // Listen to events
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

                    // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if ( xhr.onabort !== undefined ) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function() {

                            // Check readyState before timeout as it changes
                            if ( xhr.readyState === 4 ) {

                                // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window.setTimeout( function() {
                                    if ( callback ) {
                                        errorCallback();
                                    }
                                } );
                            }
                        };
                    }

                    // Create the abort callback
                    callback = callback( "abort" );

                    try {

                        // Do send the request (this may raise an exception)
                        xhr.send( options.hasContent && options.data || null );
                    } catch ( e ) {

                        // #14683: Only rethrow if this hasn't been notified as an error yet
                        if ( callback ) {
                            throw e;
                        }
                    }
                },

                abort: function() {
                    if ( callback ) {
                        callback();
                    }
                }
            };
        }
    } );




    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter( function( s ) {
        if ( s.crossDomain ) {
            s.contents.script = false;
        }
    } );

    // Install script dataType
    jQuery.ajaxSetup( {
        accepts: {
            script: "text/javascript, application/javascript, " +
                "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function( text ) {
                jQuery.globalEval( text );
                return text;
            }
        }
    } );

    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter( "script", function( s ) {
        if ( s.cache === undefined ) {
            s.cache = false;
        }
        if ( s.crossDomain ) {
            s.type = "GET";
        }
    } );

    // Bind script tag hack transport
    jQuery.ajaxTransport( "script", function( s ) {

        // This transport only deals with cross domain or forced-by-attrs requests
        if ( s.crossDomain || s.scriptAttrs ) {
            var script, callback;
            return {
                send: function( _, complete ) {
                    script = jQuery( "<script>" )
                        .attr( s.scriptAttrs || {} )
                        .prop( { charset: s.scriptCharset, src: s.url } )
                        .on( "load error", callback = function( evt ) {
                            script.remove();
                            callback = null;
                            if ( evt ) {
                                complete( evt.type === "error" ? 404 : 200, evt.type );
                            }
                        } );

                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild( script[ 0 ] );
                },
                abort: function() {
                    if ( callback ) {
                        callback();
                    }
                }
            };
        }
    } );




    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

    // Default jsonp settings
    jQuery.ajaxSetup( {
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
            this[ callback ] = true;
            return callback;
        }
    } );

    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
                "url" :
                typeof s.data === "string" &&
                    ( s.contentType || "" )
                        .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
                    rjsonp.test( s.data ) && "data"
            );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
                s.jsonpCallback() :
                s.jsonpCallback;

            // Insert callback into url or form data
            if ( jsonProp ) {
                s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
            } else if ( s.jsonp !== false ) {
                s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters[ "script json" ] = function() {
                if ( !responseContainer ) {
                    jQuery.error( callbackName + " was not called" );
                }
                return responseContainer[ 0 ];
            };

            // Force json dataType
            s.dataTypes[ 0 ] = "json";

            // Install callback
            overwritten = window[ callbackName ];
            window[ callbackName ] = function() {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always( function() {

                // If previous value didn't exist - remove it
                if ( overwritten === undefined ) {
                    jQuery( window ).removeProp( callbackName );

                // Otherwise restore preexisting value
                } else {
                    window[ callbackName ] = overwritten;
                }

                // Save back as free
                if ( s[ callbackName ] ) {

                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // Save the callback name for future use
                    oldCallbacks.push( callbackName );
                }

                // Call if it was a function and we have a response
                if ( responseContainer && isFunction( overwritten ) ) {
                    overwritten( responseContainer[ 0 ] );
                }

                responseContainer = overwritten = undefined;
            } );

            // Delegate to script
            return "script";
        }
    } );




    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = ( function() {
        var body = document.implementation.createHTMLDocument( "" ).body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    } )();


    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function( data, context, keepScripts ) {
        if ( typeof data !== "string" ) {
            return [];
        }
        if ( typeof context === "boolean" ) {
            keepScripts = context;
            context = false;
        }

        var base, parsed, scripts;

        if ( !context ) {

            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if ( support.createHTMLDocument ) {
                context = document.implementation.createHTMLDocument( "" );

                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement( "base" );
                base.href = document.location.href;
                context.head.appendChild( base );
            } else {
                context = document;
            }
        }

        parsed = rsingleTag.exec( data );
        scripts = !keepScripts && [];

        // Single tag
        if ( parsed ) {
            return [ context.createElement( parsed[ 1 ] ) ];
        }

        parsed = buildFragment( [ data ], context, scripts );

        if ( scripts && scripts.length ) {
            jQuery( scripts ).remove();
        }

        return jQuery.merge( [], parsed.childNodes );
    };


    /**
     * Load a url into a page
     */
    jQuery.fn.load = function( url, params, callback ) {
        var selector, type, response,
            self = this,
            off = url.indexOf( " " );

        if ( off > -1 ) {
            selector = stripAndCollapse( url.slice( off ) );
            url = url.slice( 0, off );
        }

        // If it's a function
        if ( isFunction( params ) ) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

        // Otherwise, build a param string
        } else if ( params && typeof params === "object" ) {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if ( self.length > 0 ) {
            jQuery.ajax( {
                url: url,

                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            } ).done( function( responseText ) {

                // Save response for use in complete callback
                response = arguments;

                self.html( selector ?

                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

                    // Otherwise use the full result
                    responseText );

            // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
            } ).always( callback && function( jqXHR, status ) {
                self.each( function() {
                    callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
                } );
            } );
        }

        return this;
    };




    jQuery.expr.pseudos.animated = function( elem ) {
        return jQuery.grep( jQuery.timers, function( fn ) {
            return elem === fn.elem;
        } ).length;
    };




    jQuery.offset = {
        setOffset: function( elem, options, i ) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css( elem, "position" ),
                curElem = jQuery( elem ),
                props = {};

            // Set position first, in-case top/left are set even on static elem
            if ( position === "static" ) {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css( elem, "top" );
            curCSSLeft = jQuery.css( elem, "left" );
            calculatePosition = ( position === "absolute" || position === "fixed" ) &&
                ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if ( calculatePosition ) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;

            } else {
                curTop = parseFloat( curCSSTop ) || 0;
                curLeft = parseFloat( curCSSLeft ) || 0;
            }

            if ( isFunction( options ) ) {

                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
            }

            if ( options.top != null ) {
                props.top = ( options.top - curOffset.top ) + curTop;
            }
            if ( options.left != null ) {
                props.left = ( options.left - curOffset.left ) + curLeft;
            }

            if ( "using" in options ) {
                options.using.call( elem, props );

            } else {
                if ( typeof props.top === "number" ) {
                    props.top += "px";
                }
                if ( typeof props.left === "number" ) {
                    props.left += "px";
                }
                curElem.css( props );
            }
        }
    };

    jQuery.fn.extend( {

        // offset() relates an element's border box to the document origin
        offset: function( options ) {

            // Preserve chaining for setter
            if ( arguments.length ) {
                return options === undefined ?
                    this :
                    this.each( function( i ) {
                        jQuery.offset.setOffset( this, options, i );
                    } );
            }

            var rect, win,
                elem = this[ 0 ];

            if ( !elem ) {
                return;
            }

            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if ( !elem.getClientRects().length ) {
                return { top: 0, left: 0 };
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },

        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if ( !this[ 0 ] ) {
                return;
            }

            var offsetParent, offset, doc,
                elem = this[ 0 ],
                parentOffset = { top: 0, left: 0 };

            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if ( jQuery.css( elem, "position" ) === "fixed" ) {

                // Assume position:fixed implies availability of getBoundingClientRect
                offset = elem.getBoundingClientRect();

            } else {
                offset = this.offset();

                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while ( offsetParent &&
                    ( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
                    jQuery.css( offsetParent, "position" ) === "static" ) {

                    offsetParent = offsetParent.parentNode;
                }
                if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery( offsetParent ).offset();
                    parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
                    parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
                }
            }

            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
                left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
            };
        },

        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map( function() {
                var offsetParent = this.offsetParent;

                while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
                    offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || documentElement;
            } );
        }
    } );

    // Create scrollLeft and scrollTop methods
    jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
        var top = "pageYOffset" === prop;

        jQuery.fn[ method ] = function( val ) {
            return access( this, function( elem, method, val ) {

                // Coalesce documents and windows
                var win;
                if ( isWindow( elem ) ) {
                    win = elem;
                } else if ( elem.nodeType === 9 ) {
                    win = elem.defaultView;
                }

                if ( val === undefined ) {
                    return win ? win[ prop ] : elem[ method ];
                }

                if ( win ) {
                    win.scrollTo(
                        !top ? val : win.pageXOffset,
                        top ? val : win.pageYOffset
                    );

                } else {
                    elem[ method ] = val;
                }
            }, method, val, arguments.length );
        };
    } );

    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each( [ "top", "left" ], function( _i, prop ) {
        jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
            function( elem, computed ) {
                if ( computed ) {
                    computed = curCSS( elem, prop );

                    // If curCSS returns percentage, fallback to offset
                    return rnumnonpx.test( computed ) ?
                        jQuery( elem ).position()[ prop ] + "px" :
                        computed;
                }
            }
        );
    } );


    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
        jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
            function( defaultExtra, funcName ) {

            // Margin is only for outerHeight, outerWidth
            jQuery.fn[ funcName ] = function( margin, value ) {
                var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                    extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

                return access( this, function( elem, type, value ) {
                    var doc;

                    if ( isWindow( elem ) ) {

                        // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                        return funcName.indexOf( "outer" ) === 0 ?
                            elem[ "inner" + name ] :
                            elem.document.documentElement[ "client" + name ];
                    }

                    // Get document width or height
                    if ( elem.nodeType === 9 ) {
                        doc = elem.documentElement;

                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(
                            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                            elem.body[ "offset" + name ], doc[ "offset" + name ],
                            doc[ "client" + name ]
                        );
                    }

                    return value === undefined ?

                        // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css( elem, type, extra ) :

                        // Set width or height on the element
                        jQuery.style( elem, type, value, extra );
                }, type, chainable ? margin : undefined, chainable );
            };
        } );
    } );


    jQuery.each( [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function( _i, type ) {
        jQuery.fn[ type ] = function( fn ) {
            return this.on( type, fn );
        };
    } );




    jQuery.fn.extend( {

        bind: function( types, data, fn ) {
            return this.on( types, null, data, fn );
        },
        unbind: function( types, fn ) {
            return this.off( types, null, fn );
        },

        delegate: function( selector, types, data, fn ) {
            return this.on( types, selector, data, fn );
        },
        undelegate: function( selector, types, fn ) {

            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ?
                this.off( selector, "**" ) :
                this.off( types, selector || "**", fn );
        },

        hover: function( fnOver, fnOut ) {
            return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
        }
    } );

    jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup contextmenu" ).split( " " ),
        function( _i, name ) {

            // Handle event binding
            jQuery.fn[ name ] = function( data, fn ) {
                return arguments.length > 0 ?
                    this.on( name, null, data, fn ) :
                    this.trigger( name );
            };
        } );




    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function( fn, context ) {
        var tmp, args, proxy;

        if ( typeof context === "string" ) {
            tmp = fn[ context ];
            context = fn;
            fn = tmp;
        }

        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if ( !isFunction( fn ) ) {
            return undefined;
        }

        // Simulated bind
        args = slice.call( arguments, 2 );
        proxy = function() {
            return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
        };

        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

        return proxy;
    };

    jQuery.holdReady = function( hold ) {
        if ( hold ) {
            jQuery.readyWait++;
        } else {
            jQuery.ready( true );
        }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;

    jQuery.now = Date.now;

    jQuery.isNumeric = function( obj ) {

        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type( obj );
        return ( type === "number" || type === "string" ) &&

            // parseFloat NaNs numeric-cast false positives ("")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            !isNaN( obj - parseFloat( obj ) );
    };

    jQuery.trim = function( text ) {
        return text == null ?
            "" :
            ( text + "" ).replace( rtrim, "" );
    };



    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.

    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if ( typeof define === "function" && define.amd ) {
        define( "jquery", [], function() {
            return jQuery;
        } );
    }




    var

        // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

        // Map over the $ in case of overwrite
        _$ = window.$;

    jQuery.noConflict = function( deep ) {
        if ( window.$ === jQuery ) {
            window.$ = _$;
        }

        if ( deep && window.jQuery === jQuery ) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if ( typeof noGlobal === "undefined" ) {
        window.jQuery = window.$ = jQuery;
    }




    return jQuery;
    } );



    window.linerJQuery = window.$;
    if (window.isLinerBrowser) {
        window.$ = originalDollar;
        window.jQuery = originalJQuery;
    }
}

// Luke - liner-core css
if ((window.injectLinerCoreCSS || (window.injectLinerCoreScript || window.top === window)) && !window.isLinerCoreCSSInjected) {
    window.isLinerCoreCSSInjected = true;
    const $ = window.linerJQuery;
    
    $(document).ready(function() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
            :root {
                --primary-900: #004c4a;
                --primary-300: #4cd0cd;
                --primary-400: #33cac6;
                --primary-600: #00a7a0;
                --primary-200: #7fdedb;
                --primary-500: #00bdb8;
                --primary-700: #008683;
                --primary-800: #006a67;
                --primary-100: #b2ebe9;
                --primary-50: #e5f8f7;
                --secondary-900: #9d1300;
                --secondary-800: #cb240d;
                --secondary-600: #f85842;
                --secondary-700: #f3442c;
                --secondary-500: #ff7b69;
                --secondary-400: #ff9587;
                --secondary-300: #ffa296;
                --secondary-200: #ffbdb4;
                --secondary-50: #fff1f0;
                --secondary-100: #ffd7d2;
                --grayscale1-700: #52565d;
                --grayscale1-800: #33373d;
                --grayscale1-900: #272b31;
                --grayscale1-400: #b0b4bd;
                --grayscale-600: #787d86;
                --grayscale1-500: #969aa2;
                --grayscale1-300: #c6cbd3;
                --grayscale1-200: #dde1e7;
                --grayscale1-100: #eef1f4;
                --grayscale2-900: #222222;
                --grayscale1-50: #f6f8fa;
                --grayscale2-800: #333333;
                --grayscale2-700: #555555;
                --grayscale2-600: #777777;
                --grayscale2-500: #999999;
                --grayscale2-400: #acacac;
                --grayscale2-300: #bfbfbf;
                --grayscale2-100: #e7e7e7;
                --grayscale2-200: #d9d9d9;
                --grayscale2-50: #f1f1f1;
                --negative: #f35750;
                --success: #31cb84;
                --disabled: #bababa;
                --white: #ffffff;
                --darkprimary-900: #21c9c5;
                --darkprimary-800: #02d5d0;
                --darkprimary-700: #0de4e0;
                --darkprimary-600: #15f4ef;
                --darkprimary-500: #40fffb;
                --darkprimary-400: #6ffffc;
                --darkprimary-300: #92fffd;
                --darkprimary-200: #a8fffd;
                --darkprimary-100: #b8fffe;
            }

            a { 
                -webkit-touch-callout: none;
                -webkit-user-select: none;
            }

            html body p,span {
                -webkit-user-select: text !important;
                -khtml-user-select: text !important;
                -moz-user-select: text !important;
                -ms-user-select: text !important;
                user-select: text !important;
            }
            
            lighter {
                font-family: inherit !important;
                font-size: inherit !important;
                color: inherit !important;
                font-weight: inherit !important;
                cursor: pointer !important;
            }
            
            .ab-iam-root {
                position: relative !important;
                z-index: 9999999999999999999 !important;
            }
    
            .PSPDFKit-Popover-Text-Markup-Toolbar {
                display: none;
            }
            
            .liner-mini-button {
                display: none;
                position: absolute !important;
                width: auto !important;
                height: 30px !important;
                z-index: 9999999999999999999 !important;
            }
            
            .liner-mini-button .liner-mb {
                display: inline-block !important;
                cursor: pointer !important;
                width: 30px !important;
                height: 30px !important;
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                opacity: 1 !important;
                border: none !important;
                -webkit-box-shadow: 0px 2px 7px 0px rgba(39,43,49,0.2) !important;
                -moz-box-shadow: 0px 2px 7px 0px rgba(39,43,49,0.2) !important;
                box-shadow: 0px 2px 7px 0px rgba(39,43,49,0.2) !important;
                background-color: transparent;
                border-radius: 40px !important;
                background-size: cover !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-mini-button .liner-mb.liner-mobile {
                width: 40px !important;
                height: 40px !important;
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-mini-tooltip {
                display: none;
                position: absolute !important;
                width: 186px !important;
                height: 30px !important;
                padding: 6px 2px 6px 35px !important;
                box-sizing: border-box !important;
                border-radius: 30px !important;
                box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2) !important;
                background-color: var(--white) !important;
                z-index: 9999999999999999999 !important;
            }
            
            .liner-mini-color-circle {
                width: 18px !important;
                height: 18px !important;
                margin: 0 3px !important;
                float: left !important;
                border-radius: 50% !important;
                cursor: pointer !important;
            }
            
            .liner-tooltip-wrap {
                display: none;
                position: absolute !important;
                width: 160px !important;
                height: 30px !important;
                z-index: 9999999999999999999 !important;
            }
            
            .liner-tooltip-wrap.liner-mobile {
                width: 240px !important;
                height: 40px !important;
            }
            
            .liner-tooltip-wrap .liner-tooltip-menu {
                position: relative;
                display: block;
                width: 100% !important;
                height: 30px !important;
                box-sizing: border-box !important;
                border-radius: 15px !important;
                -webkit-backdrop-filter: blur(10.5px) !important;
                backdrop-filter: blur(10.5px) !important;
                -webkit-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                -moz-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                background-color: var(--white) !important;
            }
            
            .liner-tooltip-wrap .liner-tooltip-menu.liner-mobile {
                border-radius: 20px !important;
                height: 40px !important;
                -webkit-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.2) !important;
                -moz-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.2) !important;
                box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.2) !important;
            }
            
            .liner-tooltip-icon, .liner-color-circle {
                cursor: pointer;
            }

            .liner-tooltip-icon:hover {
                background-color: #f6f8fa !important;
                border-radius: 30px !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color {
                position: absolute !important;
                top: 3px !important;
                left: 14px !important;
                display: inline-block !important;
                width: 24px !important;
                height: 24px !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 24px 24px !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color {
                top: 0px !important;
                left: 18px !important;
                width: 40px !important;
                height: 40px !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 40px 40px !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color.yellow {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.yellow {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color.green {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.green {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color.orange {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.orange {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color.violet {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.violet {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color.blue {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABzNJREFUeAHtm01sFVUUx8+dea/fLW0BLaRowTa0gY0RTURDICYmmOCqYUkkYlhUAjGGHSt3xhiIIYaIwXRJigtJJDExNEZZKMYNpJAiVG1oBdrSD0rfezNzPWdgyv16r9P2Qd8871303Tn3Y+759dx75+M/ADZZApaAJWAJWAKWgCVgCVgCBgLMYCuKiXPOvrkJWwMW7OQctgDnmzljLzIODZhvAGAsBYGXxor1vgeNnseaspn0+myW13oZb84FPuFyGE0HbKQiSA1WB/x2BZ8CDlOMwV/Yx3VgzlV0oP/z1s4rjGHPTyEVFRBBOTMEO4Ig2IeO7OHA1y5lzFV+AC9kHkLH7ANoyczNd/EAgV2p9uG3eh/+rArm7cj6LjpyngHrRVg/FRNWUQARmNND/l4WsE8w3/Fk5MvPNWB0vTJ1HzbNzkqd3UsF8H2TB3/U+ZIdYQ2CA8eOr+86WwxQywb09RDfxX3/U5xG2+SRFvdoTS4Lr03eh3VCRNEZ/qkM4LvmHNwQIwrtGE2XHcc5ihF1cTkjWTKg3iG+Mev7JxHM7uUMYLFtW3HqvXF/Auo8T2o6gFOvb3UOxtPyUoRRdCGVdno+a+m8JTWIebAkQF/d4juZH/ThGrM65nmKWq0yCOCt8XtaNM06HM48n9WiCafdGEZU9/ENXf2LHciiAZ2+4R/E/9EXADy92JMVsz7tWdsnx6HzwYzUbYAenWvOwqUGZW0CyIHjHDrR2nVKarDAQWxAZzl3J28GJ3B77Vmgz2da3DUzA68jKNWRnxs8+BannDzh6OKCndze2nV4L2MaQdPAUyajyVaKcGicA3V14XApmsT05tQj184hJDHhLttzaXiATB+K9nx5J1+BaKdpVWqRI46PIF2rfQRKtBOk7VOuaArzBOnw8MBBrcBgUCNTq0ILMvjBDyu95mgDUwy0Ju0eu6Mt3LQmfdmS0RduXJMYc95eaOEuGEG0ldNuVepwiBVHED82r4GZlLxq4MYG+/+tgOacFgt4QcD7Ph69tlFhLR0WBBRe56zQVi6NMuZBxnHgl8YmrXYNhlH3mGHT5Xy1lwtOag0EQ15A4RXyM74IFMa15OxwZTWMVFZp7bseutA+p7uL69Huj4av7dIaPDboLbAAGzG6fcjXqNTtv65qNA7x3XFDFGFNvLnGWyWapHoyAqIbz6d9b6UPpXiWe+kKuFlTo3W4IePAyzOGXQ34tiO3B/ZqDdCgASKSdFduqpwk2+8N5ih6Z0JexOd9CoCeRGhRpAGi5zlYsaiPLOYH8QwzU24KRg1r0RrPgZcMaxGuKx24Fu1Qh6gBCh92qbUSejxYU2sc+avT+jSjirjt71MbSIDCEMMngWqlpB7/jTuaKW3FHc2U8JJpjzrNJED0DHmpj0lNJ1xp25zrwERK37lqfQbrcpLrj4bK+VqcZlvFcUu16AG7WFgO+ZEq/ZqI/Gp/qK3HobsYRTvDzOM/EqDw7YNYWgZ5UwSRWy058zQDHmwR3ZYA4Uq+WSwsh/ykcm8W+fRc1hxB+MBIYiADYqwt6qBcfqfzAGr28gDiIDGQAXGoLxcwkR85JrsY2ZWXIJGZngpIDNTWUuF8qwRn8gGq1C+aQy8ZvugV3VUBiWU2jwRUQNPlRiXNhVfUgnOZPK/y8U5UYiADYiAVCv0lNpvGd2imhOIIc0JxhFggA+J8SCwshzwpR0xpHIUQphQqR4QCGRBj14WyssiuUl5RR07dqTADwmtBiYEECOldjTool98mT34vFvk1ms7z3hA1R1Ed+pUAOdzpFwvLIb9u7om+SPTnRrU5gvDyUWIgAXpvE1zBl/x3xY6SnCchlimCSIg1kjYs3ijEIrWa6LMEKBQcMTgvVkhynlRqpkQqNVPC6Dmviq4kQNQIRUe9psZJtJGEz5RIwmdKJOFT7Rqg/W1AGr9BtWLSjkm6J+obo/GTdE/SN0YF6DPpG6PD6FcDRCHGHX4sqpDUX9I1mhLpGo0JdY3q9KJ6GiAyHmhzUQAJlymfxER6RlX0SX6QnlETfaKd9Iwk+jT5agREJJnrHjU1SIKNxJ6mRGJPUyKxpyl6qK4REBW838YuYhRdoHySEok8VSUsjZ9EnqoSluwI5kIhJWxeQNS4wnV7MPzGKJ+EROJOUsCqicSdpIDVEoo7SQGr2QVDQUD72tgt7jrdyNnQu9BLCWTp6QUpX1V5MAmoSPmqyoNxyKgYYt0LyYMLAiK/P9jI+vEch0qAQcEhkEbRNLVI8WqaWqR4XUhdRidcEBBVOtDunsLJWlBoRPVWKpHSVZUD01hI6WqQA4dK17hy4FiA6GTtm5wjpQgpkgHTGMUUyYBFG+VxUQ5lwKo93zHOnsUlKySPwct+ihADkv2YJQYkqmI/h4oBijQ19oO6mKBIwmc/yYwJS/2oF/fYNtS51eObg8R81BvDVVvFErAELAFLwBKwBCwBS+D/SOA//Foqn+NqoWoAAAAASUVORK5CYII=) !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.blue {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-color.pink {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.pink {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-comment {
                display: inline-block !important;
                position: absolute !important;
                top: 3px !important;
                left: 53px !important;
                width: 24px !important;
                height: 24px !important;
                cursor: pointer !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 24px 24px !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-comment {
                top: 0px !important;
                left: 74px !important;
                width: 40px !important;
                height: 40px !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 40px 40px !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-share {
                display: inline-block !important;
                position: absolute !important;
                top: 3px !important;
                right: 47px !important;
                width: 24px !important;
                height: 24px !important;
                cursor: pointer;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 24px 24px !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-share {
                top: 0px !important;
                right: 70px !important;
                width: 40px !important;
                height: 40px !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 40px 40px !important;
            }
            
            .liner-tooltip-menu .liner-tooltip-undo {
                display: inline-block !important;
                position: absolute !important;
                top: 3px !important;
                right: 13px !important;
                width: 24px !important;
                height: 24px !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 24px 24px !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            }
            
            .liner-tooltip-menu.liner-mobile .liner-tooltip-undo {
                top: 0px !important;
                right: 16px !important;
                width: 40px !important;
                height: 40px !important;
                background-image: url(data:image/png;base64,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) !important;
                background-size: 40px 40px !important;
            }
            
            .liner-tooltip-wrap .liner-color-picker {
                display: none;
                width: 100% !important;
                height: 30px !important;
                box-sizing: border-box !important;
                padding: 6px 0px !important;
                border-radius: 15px !important;
                -webkit-backdrop-filter: blur(10.5px) !important;
                backdrop-filter: blur(10.5px) !important;
                -webkit-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                -moz-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                background-color: var(--white) !important;
            }
            
            .liner-tooltip-wrap .liner-color-picker.liner-mobile {
                width: 100% !important;
                height: 40px !important;
                padding: 7px 0px !important;
                border-radius: 20px !important;
                -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;
                -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;
            }
            
            .liner-color-picker .liner-color-circle {
                float: left !important;
                width: 18px !important;
                height: 18px !important;
                margin: 0 3px !important;
                border-radius: 50% !important;
            }
            
            .liner-color-picker.liner-mobile .liner-color-circle {
                width: 26px !important;
                height: 26px !important;
                margin: 0 6px !important;
                border-radius: 50% !important;
            }
            
            .liner-color-lock {
                background-size: 6px 8px !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAAXNSR0IArs4c6QAAAkpJREFUSA3tVj1oFEEUft/sXm6FIJgItgFjbMQiloIihqDYJAgHSrSLWJ0KEe9Wz4yR7F4lBEsrxVpBEFEIIikigo2VPym08Qd/GpFL8Paeby7Zu93lNneRNAeZ5v1973s7b5aZB1pnaf3cXqFXYxQEJwkYJuIBZvwF8VcmLBLo0fC+3Q9yuVyQRoO0QEH7o6jRbWYeSsMYP4AlkDrvzVyZb4WzWjnd6/4lYr7HTDtbxRO+PgJPHDo88nvhxfzLRIxU0uHq8uka8y0hX4uhogBfwRpxrMyu/u2ZXtvCUSjy5Pv/mHyDNTkmN8kXa1HR8/q5gg+SssMAZfuLqidzavba1KdkorG19gdWanxfChw0NkC/yKEh33V/Gtus2A54GedCckF/RnbbeBq5Sda6+JGc3nH5yi/GlkJ9VFGTRg9XrID8HWONgMJl7+rFb6GdJn03/51glRpxNDmML1ZA7MEQ2EP2s1BvK1Ww0MTwnqaeKFDf4lpU66kfUeB6uq/d92E8ymF8yR2EuE2T3V8AhZLHm9aPFkTd3yI7uqvyTTd2dURjG9Gjbe/+Fm3toO3Zb7WofYvkHV0OUeZNDvX/lVEOw61kkHrXIEu8pw3/RpQ4x1sUS15ertO5VQ4EUJgj2HeydGBJ6yPVTrhXJ8DXg8TVSa7xBXn+6/OWgspDJjcUp8uPZSQ43glZxxjgiX+jcEJmKjAcPiNjysOOk9sBhctR2Yk6dxQr8+gxmUfPysO9X+ruFRm7baPYqC6HWTVnKfINCHe9mcLTMP4PC7C4CQYvfhkAAAAASUVORK5CYII=) !important;
            }
            
            .liner-color-yellow {
                background-color: #ffe47c !important;
            }
            
            .liner-color-picker .liner-color-circle.liner-color-yellow {
                margin-left: 12px !important;
            }
            
            .liner-color-picker.liner-mobile .liner-color-circle.liner-color-yellow {
                margin-left: 12px !important;
            }
            
            .liner-color-green {
                background-color: #6fe2d5 !important;
            }
            
            .liner-color-orange {
                background-color: #ffbea9 !important;
            }
            
            .liner-color-violet {
                background-color: #c8a6ff !important;
            }
            
            .liner-color-blue {
                background-color: #9bdcfc !important;
            }
            
            .liner-color-pink {
                background-color: #fec1de !important;
            }
            
            .liner-tooltip-wrap .liner-tooltip-arrow {
                position: relative !important;
                width: 100% !important;
                height: 6px !important;
                top: -1px !important;
            }
    
            .liner-tooltip-wrap.liner-mobile .liner-tooltip-arrow {
                height: 9px !important;
            }
            
            .liner-tooltip-arrow.liner-share-opened {
                top: 30px !important;
                position: relative !important;
            }
            
            .liner-tooltip-arrow .liner-arrow-down {
                display: block !important;
                margin: 0 auto !important;
                position: relative !important;
                width: 16px !important;
                height: 6px !important;
                background-size: contain !important;
                background-position: center !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAbCAYAAAA0wHIdAAAAAXNSR0IArs4c6QAAAY5JREFUWAnlmbtKxEAUhjNgqeI2gjZiIbb2iyAiiIWgT+Az6Kv4EpbbqI03sNEXsFAQxCuCrYqI8TtFQLIu7GROsnNmD3w7ZEhm8n/kMmRdnuejWZZNwxTMwCqsQQuGtV4Jvg9HcA9P8Oz46SoEjtC5CNuw3rVDmh05sfZgFy6dcz/eMRHXhnNIuQ4Jt+Atp9cBDLYD34kZ+yTPVq/M5f5/b8PyTsU2A8vzTC7ViaLPcPvCuW9yu130m8FLlgyKsHmaE5CXgtW64cSXEfXgE8BblgyOsDmaM7AoTEQtIUrecF5VSZbMYFRYZVGSubIsg8KCRAXLMiQsWJSKLAPCVESpyYpYmJooVVkRClMVpS4rImHqoiRbLSXLCniEQdQ1k9pa/3HCgxBmT1RxuTYszK6ohoXZF9WQsHRE1SwsPVE1CUtXlLKw9EUpCRseUSVhd56r1itzC84icGhL8Ek4hX6qw07joXOaPx4JG3AMX/C3Ptg4gJUYQgZ9KdUOgJQxxpwF+Tf8DW75Vv5OG0X9AqxYEeJqEucsAAAAAElFTkSuQmCC) !important;
            }
            
            .liner-tooltip-arrow.liner-mobile .liner-arrow-down {
                width: 25px !important;
                height: 9px !important;
            }
            
            .liner-share-menu {
                display: none;
                position: absolute !important;
                bottom: 0 !important;
                width: 150px !important;
                height: auto !important;
                padding: 4px 0px !important;
                -webkit-backdrop-filter: blur(10.5px) !important;
                backdrop-filter: blur(10.5px) !important;
                box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3) !important;
                background-color: var(--white) !important;
                border-radius: 8px !important;
                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;                
            }
            
            .liner-share-menu .liner-share-method {
                position: relative !important;
                display: block;
                cursor: pointer !important;
                background-color: var(--white) !important;
                width: 100% !important;
                height: 30px !important;
            }
            
            .liner-share-menu .liner-share-method:hover {
                background-color: #f6f8fa !important;
            }
            
            .liner-share-menu .liner-share-method-icon {
                position: absolute !important;
                top: 4px !important;
                left: 16px !important;
                width: 22px !important;
                height: 22px !important;
                background-size: contain !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            }
            
            .liner-share-menu .liner-share-method-label {
                position: absolute !important;
                top: 10px !important;
                left: 54px !important;
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 11px !important;
                font-weight: 400 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 100% !important;
                letter-spacing: -0.25px !important;
                color: #52565d !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-facebook .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-twitter .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-linkedin .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-messenger .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-line .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-kakaotalk .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-mail .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-copy .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-copied .liner-share-method-icon {
                background-image: url(data:image/png;base64,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) !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-copied {
                display: none;
                cursor: auto !important;
            }
            
            .liner-share-menu .liner-share-method.liner-share-copied .liner-share-method-label {
                font-weight: bold !important;
            }
            
            .liner-comment-box {
                display: none;
                position: absolute !important;
                width: 220px !important;
                height: 140px !important;
                padding: 0 !important;
                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;
                background-color: var(--white) !important;
                z-index: 9999999999999999999 !important;
                border-radius: 4px !important;
            }
            
            .liner-comment-box .liner-comment-line {
                display: block !important;
                width: 100% !important;
                height: 8px !important;
                background-color: var(--primary-500) !important;
                border-top-left-radius: 4px !important;
                border-top-right-radius: 4px !important;
            }
            
            .liner-comment-box .liner-comment-area {
                display: block;
                width: 100% !important;
                height: 132px !important;
                background-color: var(--white) !important;
                border-radius: 4px !important;
            }
            
            .liner-comment-area .liner-comment-input {
                display: block;
                width: 100% !important;
                height: 132px !important;
                max-height: 132px !important;
                min-height: 132px !important;
                padding: 12px 16px !important;
                outline: none !important;
                border: none !important;
                resize: none !important;
                box-sizing: border-box !important;
                font-family: 'Roboto', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 12px !important;
                font-weight: normal !important;
                font-style: normal !important;
                font-stretch: normal !important;
                line-height: 1.5 !important;
                letter-spacing: normal !important;
                color: var(--grayscale2-800) !important;
                -moz-user-select: auto !important;
                -khtml-user-select: auto !important;
                -webkit-user-select: auto !important;
                user-select: auto !important;
                background-color: var(--white) !important;
                margin: 0 !important;
                box-shadow: none !important;
                border-bottom-right-radius: 4px !important;
                border-bottom-left-radius: 4px !important;
            }
            
            .liner-comment-area .liner-comment-input:focus {
                outline: none !important;
            }
            
            .liner-comment-icon {
                vertical-align: middle !important;
                cursor: initial !important;
                display: inline-block;
                width: 23px !important;
                height: 23px !important;
                margin: 0 !important;
                padding: 0 !important;
                background-size: contain !important;
                line-height: 0 !important;
            }
            
            .liner-comment-icon .liner-comment-bubble {
                display: inline-block !important;
                width: 23px !important;
                height: 23px !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                cursor: pointer !important;
                box-shadow: none !important;
                pointer-events: auto !important;
            }
    
            .liner-upgrade-highlight-box {
                display: none;
                position: absolute !important;
                width: 230px !important;
                height: auto !important;
                padding: 0 !important;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;
                background-color: var(--white) !important;
                z-index: 9999999999999999999 !important;
                text-align: center !important;
                user-select: none !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-header-border {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 6px !important;
                background-color: var(--primary-500) !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-title-label {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 18px !important;
                font-weight: bold !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 1.22 !important;
                letter-spacing: -0.42px !important;
                color: var(--grayscale2-800) !important;
                margin-left: 16px !important;
                margin-top: 23px !important;
                margin-bottom: 24px !important;
                text-align: left !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-desc-label {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 12px !important;
                font-weight: 400 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 150% !important;
                letter-spacing: -0.28px !important;
                color: var(--grayscale2-700) !important;
                margin-left: 16px !important;
                margin-bottom: 23px !important;
                margin-right: 16px !important;
                text-align: left !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-upgrade {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 12px !important;
                font-weight: 700 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 100% !important;
                letter-spacing: normal !important;
                color: var(--white) !important;
                border-radius: 30px !important;
                background-color: var(--primary-500) !important;
                opacity: 1.0 !important;
                text-decoration: none !important;
                padding: 7px 16px !important;
                display: inline-block !important;
                margin-bottom: 16px !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-upgrade:hover {
                opacity: 0.8 !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-close {
                position: absolute !important;
                top: 7px !important;
                right: 5px !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAnhJREFUeAHt2r1uE0EQB/BZm6A8QAokKtLwCqSjiKBEqQhljEFK2lDYDnLOUYhd5QXyQW2qUPIIvARK0kSioQ0SuWHH8ensyHC2s7Nzxf8Ke2Xrdmd/t7uaXZsIFwQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAqUQcFpRtJJuLb2hle5e471zjrXaaSTdF5TS1mLl0XqSbFyHbqcSukKpb4hzTMT1Zrt3zMwqD0JwXMpfifnV7/TqLEk+L4bujwoQp/zM4wxRuKaBlOEw0wCFyT0l+rkUGkjlycqIae12j3zwb/OA3amfbvUQ0+0uDjl3Xn248PzTxw8XeXthSipAEpoWUkwc6YcakAZSbBx1oJBIFjhRgEIgWeFEA7oPkiVOVKB5kKxxogPNglQGHBOgaZDKgmMG9D8kqlJftg9ZhqyZBEocRZdqHlTU+KRk0jn643EeDO5VzJCLYsu+NwWSICYhDYIrAY7EobJZHXRwyhfZm3HFfZGRM3qLf3Lf93e2L0c/syibA7XavZfDNed2Wg0V/Mh6rXEKMCuyKZDgMKVnowuyH1H9vBM6RyV5/cUlM6BJOHJkcdBpvPHT7SQP3RbJZJH+F052njN54Q53npTjF5eiAxXhZCGXBSkq0LQ4ZUKKBjQrTlmQogDNi1MGJHWg++JYI6kChcKxRFIDCo1jhaQCpIVjgaSSSafEm6Pbh9A/6skG96DTfDeecdNas9N7kiGGelcBkj8S+OC/aR52jSO5X5VqdbWXNH+EglGvR/5IsLN/+Fi7Icm4/RHtsnY7qB8CEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgoC3wFysUMYDmkPbCAAAAAElFTkSuQmCC) !important;
                opacity: 1.0 !important;
                width: 35px !important;
                height: 35px !important;
                background-size: 24px 24px !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                cursor: pointer !important;
            }
            
            .liner-upgrade-highlight-box .liner-upgrade-highlight-close:hover {
                opacity: 0.8 !important;
            }
            
            .liner-upgrade-comment-box {
                display: none;
                position: absolute !important;
                width: 230px !important;
                height: auto !important;
                padding: 0 !important;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;
                background-color: var(--white) !important;
                z-index: 9999999999999999999 !important;
                text-align: center !important;
                user-select: none !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-header-border {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 6px !important;
                background-color: var(--primary-500) !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-title-label {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 18px !important;
                font-weight: bold !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 1.22 !important;
                letter-spacing: -0.42px !important;
                color: var(--grayscale2-800) !important;
                margin-left: 16px !important;
                margin-top: 23px !important;
                margin-bottom: 24px !important;
                text-align: left !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-desc-label {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 12px !important;
                font-weight: 400 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 150% !important;
                letter-spacing: -0.28px !important;
                color: var(--grayscale2-700) !important;
                margin-left: 16px !important;
                margin-bottom: 23px !important;
                margin-right: 16px !important;
                text-align: left !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-upgrade {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;
                font-size: 12px !important;
                font-weight: 700 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 100% !important;
                letter-spacing: normal !important;
                color: var(--white) !important;
                border-radius: 30px !important;
                background-color: var(--primary-500) !important;
                opacity: 1.0 !important;
                text-decoration: none !important;
                padding: 7px 16px !important;
                display: inline-block !important;
                margin-bottom: 16px !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-upgrade:hover {
                opacity: 0.8 !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-close {
                position: absolute !important;
                top: 7px !important;
                right: 5px !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAnhJREFUeAHt2r1uE0EQB/BZm6A8QAokKtLwCqSjiKBEqQhljEFK2lDYDnLOUYhd5QXyQW2qUPIIvARK0kSioQ0SuWHH8ensyHC2s7Nzxf8Ke2Xrdmd/t7uaXZsIFwQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAqUQcFpRtJJuLb2hle5e471zjrXaaSTdF5TS1mLl0XqSbFyHbqcSukKpb4hzTMT1Zrt3zMwqD0JwXMpfifnV7/TqLEk+L4bujwoQp/zM4wxRuKaBlOEw0wCFyT0l+rkUGkjlycqIae12j3zwb/OA3amfbvUQ0+0uDjl3Xn248PzTxw8XeXthSipAEpoWUkwc6YcakAZSbBx1oJBIFjhRgEIgWeFEA7oPkiVOVKB5kKxxogPNglQGHBOgaZDKgmMG9D8kqlJftg9ZhqyZBEocRZdqHlTU+KRk0jn643EeDO5VzJCLYsu+NwWSICYhDYIrAY7EobJZHXRwyhfZm3HFfZGRM3qLf3Lf93e2L0c/syibA7XavZfDNed2Wg0V/Mh6rXEKMCuyKZDgMKVnowuyH1H9vBM6RyV5/cUlM6BJOHJkcdBpvPHT7SQP3RbJZJH+F052njN54Q53npTjF5eiAxXhZCGXBSkq0LQ4ZUKKBjQrTlmQogDNi1MGJHWg++JYI6kChcKxRFIDCo1jhaQCpIVjgaSSSafEm6Pbh9A/6skG96DTfDeecdNas9N7kiGGelcBkj8S+OC/aR52jSO5X5VqdbWXNH+EglGvR/5IsLN/+Fi7Icm4/RHtsnY7qB8CEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgoC3wFysUMYDmkPbCAAAAAElFTkSuQmCC) !important;
                opacity: 1.0 !important;
                width: 35px !important;
                height: 35px !important;
                background-size: 24px 24px !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                cursor: pointer !important;
            }
            
            .liner-upgrade-comment-box .liner-upgrade-comment-close:hover {
                opacity: 0.8 !important;
            }
            
            .liner-mobile-comment-box {
                display: none !important;
                position: fixed !important;
                top: 110%;
                left: 0 !important;
                right: 0 !important;
                flex-flow: column !important;
                width: 100% !important;
                height: 100% !important;
                background-color: var(--white) !important;
                z-index: 9999999999999999999 !important;
                -webkit-transition: top 0.2s, -webkit-transform 0.2s;
                transition: top 0.2s, transform 0.2s;
            }
            
            .liner-mobile-comment-box.liner-show-comment-box {
                display: flex !important;
            }
            
            .liner-mobile-comment-box .liner-comment-header {
                flex: 0 1 78px !important;
                width: 100% !important;
                height: 78px !important;
                display: flex !important;
                align-items: center !important;
            }
            
            .liner-mobile-comment-box .liner-comment-header > .liner-comment-header-label {
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 32px !important;
                letter-spacing: 0.35px !important;
                font-weight: bold !important;
                margin-left: 20px !important;
                color: rgba(34, 34, 34) !important;
            }
            
            .liner-mobile-comment-box .liner-comment-header > .liner-comment-save {
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                color: rgb(0, 189, 184) !important;
                float: right !important;
                position: absolute !important;
                right: 15px !important;
                align-items: center !important;
                font-weight: 500 !important;
                text-decoration: none !important;
                cursor: pointer !important;
                padding: 5px !important;
            }
            
            .liner-mobile-comment-box .liner-comment-highlight-container {
                margin: 12px 20px 0 20px !important;
                flex: 0 1 auto !important;
            }
            
            .liner-mobile-comment-box .liner-comment-highlight-container> .liner-comment-highlight {
                display: flex !important;
                margin-bottom: 16px !important;
            }
            
            .liner-mobile-comment-box .liner-comment-highlight-container > .liner-comment-highlight > .liner-comment-highlight-index {
                min-width: 4px !important;
                background-color: rgb(255, 255, 131);
                margin-right: 16px !important;
            }
            
            .liner-mobile-comment-box .liner-comment-highlight-container > .liner-comment-highlight > .liner-comment-highlight-content {
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                letter-spacing: -0.32px !important;
                line-height: 24px !important;
                font-weight: 400 !important;
                color: rgb(51, 51, 51) !important;
                display: flex !important;
                align-items: center !important;
                font-style: normal !important;
                word-wrap: break-word !important;
            }
            
            .liner-mobile-comment-box .liner-comment-highlight-container > .liner-comment-line {
                border-bottom: solid 1px #eef1f4 !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container {
                margin: 15px 20px 15px 32px !important;
                display: flex !important;
                flex: 1 1 auto !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea {
                outline: none !important;
                resize: none !important;
                overflow: auto !important;
                border: none !important;
                width: 100% !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                color: rgb(85, 85, 85) !important;
                font-style: italic !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                padding: 0 !important;
                background-color: var(--white) !important;
                box-shadow: none !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                color: rgba(85, 85, 85, 0.3) !important;
                font-style: italic !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                color: rgba(85, 85, 85, 0.3) !important;
                font-style: italic !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                color: rgba(85, 85, 85, 0.3) !important;
                font-style: italic !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                color: rgba(85, 85, 85, 0.3) !important;
                font-style: italic !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::-ms-input-placeholder { /* Microsoft Edge */
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                color: rgba(85, 85, 85, 0.3) !important;
                font-style: italic !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::placeholder { /* Most modern browsers support this now. */
                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 16px !important;
                line-height: 24px !important;
                letter-spacing: -0.3px !important;
                color: rgba(85, 85, 85, 0.3) !important;
                font-style: italic !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea,
            [contenteditable] {
                caret-color: rgb(0, 189, 184) !important;
            }
            
            .liner-mobile-comment-box .liner-comment-comment-container > .liner-comment-comment-icon {
                width: 16px !important;
                height: 16px !important;
                margin-right: 8px !important;
                margin-top: 1px !important;
                background-size: contain !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAspJREFUaAXtWL+LE0EUfrNJyAkKis2BniAipLJR5MQj4o8il+QMVtddcVhY2VjYXOH9A7Y2YmNnobn1skHQzCFWcpWNhShoY6soh2Jun28WNszORm+y2eeusNvsvLdv3nzfezNvZlZ0N18gaI8QsN5pXb6jqXLddHKNzgJcQcAiSKwmRQZYw2vhvMiARZBYTYoMsIbXwnmRAYsgsZoUGWANr4XzIgMWQWI1KTLAGl4L55lmoNeTs643WEdEYYF1rEl5rPYfKBX4IaIk8DW3J4/S+7oQInK9tYERzwCKuM7G0wQ2I/CANdUNAVeJxP0kmSCw4os+NiXzsC5ztIeAawQ6AB/6T0rCEYAfQifqTfJxXeZoV8TcLfr70Td9JyGhpkuEAKBYkFKyro1m8+TPijh2LQ0SDjgw0CNBUTjwbQdbuo6jnRYJp+pUuubq9xFvJ1lQkxJNg4TTaNQ/Ux14bgx+zu0Pbhg6FnFaEkHJdEqVtRg6FHe7m/JKTM+gmIZEQGCpUX9N0+iRjo2m0Axlxt3oyVxnYrSFU+U5+HUHtwHxhE5EtYncNtXXe2WsvGo2F96TvGvapCV73rvqL/z0BBEWTZ8CxIOrrYuRHXtEQBlv9F+egt3hFlWiQ2bnvMgmiWAKheA6i/U3JSidp5B/DHV5e5ubXYSAAttuX3i7r1w9SyQemuU1N2QErLje1mmFJzKFTICuJ+dpMd+k+bhEC3q/+T0LmYJKRylY7rQvPVbj/5VACJAW+Mz3HzCPvj/nAxyhTlSh+B4EUaNismyOYIJX360ImI445afPZM0fBveEWX2cceDV91wRmBR8rggkAZ8bAknB54LANOAzJzAt+EwJpAE+MwJpgVcEYkcJpeR+qM6v0g5vVef3wpLJPqCuq8F/IPofpAD+aZPaC3zQ18aIwyYkQVvpin624RiLzaciQTe+M2wD/A+OfwNHZpAwrXjSIgAAAABJRU5ErkJggg==) !important;
            }
            
            .liner-banner {
                width: 270px !important;
                box-shadow: 0 8px 20px 0 rgba(39, 43, 49, 0.2) !important;
                background-color: #00bdb8 !important;
                border-radius: 16px 16px 4px 16px;
                position: fixed !important;
                bottom: 40px;
                right: 40px;
                z-index: 9999999999999999999 !important;
            }

            .liner-banner.liner-banner-folder {
                border-radius: 4px 16px 16px 16px;
                left: 55px;
                top: 100%;
                bottom: auto;
                right: auto;
            }
            
            .liner-banner > .liner-banner-title {
                margin-left: 24px !important;
                display: flex !important;
                align-items: center !important;
                margin: 16px 20px !important; 
            }
            
            .liner-banner > .liner-banner-title > .liner-logo {
                background: url(data:image/png;base64,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) !important;
                background-size: 20px !important;
                width: 20px !important;
                height: 20px !important;
                margin-right: 16px !important;
            }
            
            .liner-banner > .liner-banner-contents {
                margin: 0 20px !important;
            }

            .liner-banner.liner-banner-folder > .liner-banner-contents {
                margin-bottom: 16px !important;
            }

            .liner-banner > .liner-banner-contents strong {
                font-weight: bold;
            }
            
            .liner-banner > .liner-banner-contents > .liner-banner-steps {
                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 1.71 !important;
                letter-spacing: -0.35px !important;
                color: white !important;
            }
            
            .liner-banner > .liner-banner-contents > .liner-banner-steps > .liner-banner-step {
                font-weight: bold !important;
                margin-right: 10px !important;
            }

            .liner-banner > .liner-banner-close {
                float: right !important;
                right: 24px !important;
                position: relative !important;
                margin: 20px 0 16px 0 !important;
            }
            
            .liner-banner > .liner-banner-close > .liner-banner-close-btn {
                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 12px !important;
                font-weight: 500 !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: normal !important;
                letter-spacing: normal !important;
                color: white !important;
                background-color: transparent;
                border: none;
                cursor: pointer;
                margin-top: 8px;
                margin-right: 16px;
            }
        
            .liner-banner > .liner-banner-close > .liner-banner-close-btn:hover {
                opacity: 0.9;
            }

            .liner-banner > .liner-banner-title > .liner-text {
                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;
                font-size: 18px !important;
                font-weight: bold !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: normal !important;
                letter-spacing: -0.45px !important;
                color: white !important;
            }
            
            .liner-banner > .liner-banner-button-box {
                float: right !important;
                right: 24px !important;
                position: relative !important;
                margin: 20px 0 16px 0 !important;
            }
            
            .liner-banner > .liner-banner-button-box > .liner-learn-more-btn {
                padding-left: 8px !important;
                padding-right: 8px !important;
                height: 32px !important;
                border: none !important;
                border-radius: 30px !important;
                background-color: #ffffff !important;
                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',  sans-serif !important;
                font-size: 12px !important;
                font-weight: bold !important;
                letter-spacing: -0.3px !important;
                color: #00bdb8 !important;
                cursor: pointer !important;
                text-decoration: none !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                line-height: 1.1em !important;
            }

            .liner-banner > .liner-banner-button-box > .liner-learn-more-btn:hover {
                opacity: 0.9;
            }

            .liner-upload-pdf-btn {
                position: fixed;
                right: 17px;
                top: 61px;
                width: 40px;
                height: 40px;
                background-image: url(data:image/png;base64,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);
                background-size: contain;
                border-radius: 20px;
                cursor: pointer;
                -webkit-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);
                -moz-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);
                box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);
                z-index: 9999999999999999999 !important;
            }

            .liner-upload-pdf-btn.disabled {
                opacity: 0.5;
                cursor: auto;
                -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
                cursor: progress;
            }

            .liner-upload-pdf-tooltip {
                position: fixed;
                display: none;
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;
                right: 10px;
                top: 105px;
                padding: 4px;
                border-radius: 3px;
                background-color: #323639;
                font-size: 10px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: var(--white);
                z-index: 9999999999999999999 !important;
            }

            .liner-upload-pdf-banner {
                display: none;
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;
                position: fixed;
                top: 117px;
                right: 16px;
                background-color: var(--primary-500);
                color: var(--white);
                -webkit-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);
                -moz-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);
                box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);
                padding: 14px 12px;
                font-size: 16px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: -0.4px;
                border-radius: 16px 4px 16px 16px;
                z-index: 9999999999999999999 !important;
            }

            .liner-upload-pdf-progress-bar {
                background-color: var(--primary-500) !important;
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 4px;
                z-index: 9999999999999999999 !important;
            }

            .liner-picked-search-result-bar {
                position: absolute !important;
                left: -20px !important;
                background-color: #7fdedb !important;
                width: 4px !important;
            }

            .liner-picked-search-result-link {
                display: none !important;
                /* display: inline-block !important; */
                color: #00bdb8 !important;
                margin-top: 4px !important;
                text-decoration: none !important;       
            }

            .liner-picked-search-result-link.liner-picked-search-result-link-scholar {
                margin-top: 8px !important;
            }

            .liner-picked-search-result-link:hover {
                color: #00a7a0 !important;
            }

            .liner-picked-search-result-link .liner-picked-search-result-arrow {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAGAAAAADV9pCbAAAAt0lEQVQ4Ec2UzQ3CMAxGHdQ1OgwXBqm6Bx0E2KNIwDAM4uZrRKLI+bE5IHxp6vq9xI0Sov+Ix7rQc70Ss9MsaIhFAInPxD7zuvshz+Qc3qpxiF8cjXHMPHnBpbeCBB9PmOlmEeS9odcw4xQlEAaxaCGHQRgEEjYIyrBSUIcVgjbcEaStQqEx2jN3/nwd7oBYZBlWgGVYCUrYAOawEUzwFyDgsM849ExvJPZonKRPiXwaryEp+FVmA0eInXoUq2t+AAAAAElFTkSuQmCC) !important;
                width: 5px !important;
                height: 8px !important;
                display: inline-block !important;
                background-size: contain !important;
                vertical-align: text-top !important;
                margin-left: 4px !important;
                margin-top: 4px !important;
            }

            .liner-picked-search-result-description {
                display: none;
                z-index: 9999999999999999999 !important;
                width: 247px !important;
                padding: 16px 20px !important;
                position: absolute !important;
                left: initial !important;
                border-radius: 8px !important;
                box-shadow: 0 10px 20px 0 rgba(39, 43, 49, 0.15) !important;
                border: solid 1px #eef1f4 !important;
                background-color: #ffffff !important;
            }

            .liner-picked-search-result-description .liner-picked-search-result-description-title {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;
                font-size: 14px !important;
                font-weight: bold !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: normal !important;
                color: #969aa2 !important;
                margin: 0 !important;
                margin-bottom: 8px !important;
            }

            .liner-picked-search-result-description .liner-picked-search-result-description-content {
                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;
                font-size: 14px !important;
                font-weight: normal !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: 1.43 !important;
                color: #52565d !important;
                margin: 0 !important;
            }

            .liner-picked-search-result-information {
                display: inline-block !important;
                margin-top: 4px !important;
                font-size: 12px !important;
                font-weight: normal !important;
                font-stretch: normal !important;
                font-style: normal !important;
                line-height: normal !important;
                color: #969aa2 !important;
                cursor: pointer !important;
            }

            .liner-picked-search-result-information.liner-picked-search-result-information-scholar {
                margin-top: 6px !important;
                position: relative !important;
            }

            .liner-picked-search-result-information .liner-picked-search-result-information-icon {
                position: relative !important;
                top: 3px !important;
                display: inline-block !important;
                margin-right: 8px !important;
                width: 14px !important;
                height: 14px !important;
                background-size: contain !important;
                background-repeat: no-repeat !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAFMklEQVRYCdWZT4hbRRzHfzNJmhxEdqEKDbKioLCCevLSrYdF60VZ0UMU2S24GrcetIJgvajVnhQ8LB7sGl2hu4jmYOniH7DKHmx78aSCBQWlq0TwDw22YLKb98bfd978Xt57m6xJttnXPkjm//w+mZk385tvFG3jWXh/+Xa/RVNE/m1EqmjIFMmoou1SmZoiVSMy/NE/6CytzD0+/f2g5lS/DQFnWv6sT+pBMuamvtor9Ysmc1Jl9WK/0D2DLhyvjnnN5lGGm2Y43Rfg5sr8O9VyJp9/ae5AaW1z8eac/wWtVqu7/vqn+Rr55jluno93oS6Qok+Z+pQhWsuYXG1kRNcuXswrz/t3j6c2imxgzCfaT4bu52UwGm2vFDWMUvO7r82/XCqV1qNlyfiWoIuL1esarcbH3GhftKFS6oTW+q1bby5+PTk52YqWdYuvrq5mf/y5drfv+88YYx5K1DtdyBYenp0t/ZnID5NdQSuVD+7YIG+Fp/pGqc2AZzIZeuGp2ZmzkjdI+M7i0l7PozcYeCJsr9T5HGWmyuXHvgvzIpGOoBbSeGd4qq5BXQb0eJqeP/jkzHyk7bajx95dOmQMvcnAmaAzdSmnMhOdYDeB2un2mt+EI6morkmVDpZnTm2brEMHC+8t3+f5/ke8hkdsMY9sIZO/K7kMYm8vXhy7JmW6GTJHu/YOCxJgc09MfwEb/FLWLSjbBgNYbNp9ZaOJv+vrRzltXxw73USlcvnRc9E63eKyOyifDqCO0XS8l7cZdWGDR/YR3zefuWWwz+40RC+iHE84otgnSfnPBtlYl7wm+5hut4Ud5tNpDz68nR12xqTLLUOMLGxKJWXMIcvkMkJQbOa8sAvIx9vd74sjIymGbD9udKN5W8VhE7ZRByz2gHENLCiORXfi2GxsQa58x4OYbT4FLRtTWFCc3RLnX3RikH0SazL5qzrlJesk07ANBpevHVsAah0MKeETJ9m4lzReHNLqdfaYfscHcZvXS+NEHZx6kiVsKtjcW98GBerC+C03XN/rsSidXe4Qx+25n377Q3yDnMreqTdMi/3J4FFkPkkbEiRgAIvDIjBq3hLGJYN0ZiinT9h/HxFep19KdTDyhg+PnJ00PMb/NYgM9v12ZekV3rCPoDUbOvJ0eebVwXqyRGvttqqo7fXB5cCfbBemG4uygJFvBu6Ow1xwetPFa1uPsTCj3UelGJ65xNMOkyzsweGWGDy4Pkg87TDGwow6uNI6UL7jpA0o9nHfkjgYeerbI8rzPiaFaYdxFh5R9lJCf5O3lnvTBhT79uYqCQgYmZw+KWlD6gEcX5JOK7QM9nodEEBl0VaxYAUjyDKjuNKmBSh2AwanATAbGO32BJlFKuHeLfG0wiiDsFlQaEEMxcuCXy0WB3DvTgsStsHg7PuOLfBH3fQvCxzEAYnvdBizzfqUiGnhyQTBiqGaAONfNAFxYKchA0EiUE/YY2o4JosRgkJVU6TnBQ4KxrHK0n5JDzuELdgUOxDPokpf7Gy3d/N64yuuHIhiToDo9W4vRvoNK5UPxzdo/WyolhCd3j1SuCeq8IUjis5RAFWNncnz1hjLLOhgmCOLvmOQkHSYIQoJlhgoMqD5QFVj1/cS0viV7FZ/Pow1a9ck990eSRbJ2HZSdwJGbOqRIc9VITsK7FUh5AqsiF/dpHF7W8SlkO9bIo2jbb3uF0Uah7MDP4LX0aj0ixBb0GWRxqOdXvF/NkRhEb/i/75JAiPtVJapQBvo/ocYfF5WO1Y6Sd6d+u2U9x+vMIlu8mXhagAAAABJRU5ErkJggg==) !important;
            }

            .liner-pdf-highlight-badge {
                cursor: pointer !important;
                background-color: #ffffff !important;
                border: 1px solid #ebebeb !important;
                border-radius: 2px !important;
                padding: 0 11px 0 20px !important;
                display: inline-block !important;
                height: 14px !important;
                line-height: 16px !important;
                text-align: center !important;
                font-weight: normal !important;
                color: #4d5156 !important;
                font-size: 10px !important;
                letter-spacing: 0.75px !important;
                position: relative !important;
                top: -1px !important;
                margin-left: 5px !important;
            }

            .liner-pdf-highlight-badge.liner-pdf-highlight-badge-scholoar {
                position: absolute !important;
                top: 3px !important;
            }

            .liner-pdf-highlight-badge .liner-pdf-highlight-badge-icon {
                display: inline-block !important;
                background-image: url(data:image/png;base64,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) !important;
                background-repeat: no-repeat !important;
                background-size: contain !important;
                width: 14px !important;
                height: 14px !important;
                position: absolute !important;
                left: 0 !important;
            }

            .liner-pdf-highlight-badge .liner-pdf-highlight-badge-arrow {
                display: inline-block !important;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAYAAACZm7S3AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAFQAAAAAtZlQqAAAA8klEQVQ4EWNgGBTALyiiwS8ofM7///8ZiXEQC0wRSOP////qQXz/4AgGoAGpjIyM/2Hy2GgmuOD/f7IwNlBjsj8RLoBr3rhuZQrQrfPgBjAwJBEyAMVvIL+CNQA1wgwBGQg2GIsXUDSDNJBiAIZmUgzAqplYA+ABBtKADEDRxM4SksbIyHAHJg6MtyT/kKg4GB+nZpDff/5ZM+v/fwYVmGJw4K1ZtgiJD2MiaGIDDcPPxGoEWYWimRSNKJpJ1QjXTI5GkGZwaINzDyPTY5AACIBDFZTWsSRJiAoIyQzj3Lx+5YCGli4wWv/fw5WWYWoHngYAORedhCuO5fQAAAAASUVORK5CYII=) !important;
                background-repeat: no-repeat !important;
                background-size: 5px 7px !important;
                background-position: center;
                width: 11px !important;
                height: 14px !important;
                position: absolute !important;
                right: 0 !important;
            }

            #liner-google-search-info .liner-search-info:hover {
                box-shadow: 0 4px 16px rgba(39, 43, 49, 0.1) !important;
            }

            #snippet-pdf-button, #snippet_popover_container, #snippet_screenshot_edit, #snippet_screenshot, #snippet_sidebar_container, .snippet-img-button, 
            #diigo-video-capture, #diigo-video-capture-wrapper, #diigolet-notice, #diigolet-dlg-sticky, #diigolet-csm, #diigo-chrome-installed, #diigo-pdf, #diigolet-chrome-css {
                display: none !important;
            }
        `;
    
        (document.head||document.documentElement).appendChild(style);
    });
}

// Luke - long-press-event.js
if ((window.injectLinerLongPressEventJS || (window.injectLinerCoreScript || window.top === window)) && !window.isLongPressEventJSInjected) {
    window.isLongPressEventJSInjected = true;
    const $ = window.linerJQuery;

    (function (window, document) {

        'use strict';
    
        // local timer object based on rAF
        var timer = null;
    
        // check if we're using a touch screen
        var isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    
        // switch to touch events if using a touch screen
        var mouseDown = isTouch ? 'touchstart' : 'mousedown';
        var mouseUp = isTouch ? 'touchend' : 'mouseup';
        var mouseMove = isTouch ? 'touchmove' : 'mousemove';
    
        // track number of pixels the mouse moves during long press
        var startX = 0; // mouse x position when timer started
        var startY = 0; // mouse y position when timer started
        var maxDiffX = 10; // max number of X pixels the mouse can move during long press before it is canceled
        var maxDiffY = 10; // max number of Y pixels the mouse can move during long press before it is canceled
    
        // patch CustomEvent to allow constructor creation (IE/Chrome)
        if (typeof window.CustomEvent !== 'function') {
    
            window.CustomEvent = function(event, params) {
    
                params = params || { bubbles: false, cancelable: false, detail: undefined };
    
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };
    
            window.CustomEvent.prototype = window.Event.prototype;
        }
    
        // requestAnimationFrame() shim by Paul Irish
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame || function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    
        /**
         * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
         * @param {function} fn The callback function
         * @param {int} delay The delay in milliseconds
         * @returns {object} handle to the timeout object
         */
        function requestTimeout(fn, delay) {
    
            if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame &&
                !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
                !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setTimeout(fn, delay);
    
            var start = new Date().getTime();
            var handle = {};
    
            var loop = function() {
                var current = new Date().getTime();
                var delta = current - start;
    
                if (delta >= delay) {
                    fn.call();
                }
                else {
                    handle.value = requestAnimFrame(loop);
                }
            };
    
            handle.value = requestAnimFrame(loop);
    
            return handle;
        }
    
        /**
         * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
         * @param {object} handle The callback function
         * @returns {void}
         */
        function clearRequestTimeout(handle) {
            if (handle) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
                window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
                window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
                window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
                window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
                window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
                clearTimeout(handle);
            }
        }
    
        /**
         * Fires the 'long-press' event on element
         * @param {MouseEvent|TouchEvent} originalEvent The original event being fired
         * @returns {void}
         */
        function fireLongPressEvent(originalEvent) {
    
            clearLongPressTimer();
    
            const clientX = isTouch ? originalEvent.touches[0].clientX : originalEvent.clientX;
            const clientY = isTouch ? originalEvent.touches[0].clientY : originalEvent.clientY;
    
            if (window.didMouseUp == true) {
                return;
            }

            // fire the long-press event
            var suppressClickEvent = this.dispatchEvent(new CustomEvent('long-press', { bubbles: true, cancelable: true, detail: { clientX: clientX, clientY: clientY } }));
    
            if (suppressClickEvent) {
    
                // temporarily intercept and clear the next click
                document.addEventListener(mouseUp, function clearMouseUp(e) {
                    document.removeEventListener(mouseUp, clearMouseUp, true);
                    cancelEvent(e);
                }, true);
            }
        }
    
        /**
         * method responsible for starting the long press timer
         * @param {event} e - event object
         * @returns {void}
         */
        function startLongPressTimer(e) {
    
            clearLongPressTimer(e);
    
            var el = e.target;
    
            // get delay from html attribute if it exists, otherwise default to 1500
            var longPressDelayInMs = parseInt(el.getAttribute('data-long-press-delay') || '800', 10);
    
            // start the timer
            timer = requestTimeout(fireLongPressEvent.bind(el, e), longPressDelayInMs);
        }
    
        /**
         * method responsible for clearing a pending long press timer
         * @param {event} e - event object
         * @returns {void}
         */
        function clearLongPressTimer(e) {
            clearRequestTimeout(timer);
            timer = null;
        }
    
        /**
        * Cancels the current event
        * @param {object} e - browser event object
        * @returns {void}
        */
        function cancelEvent(e) {
            try {
                e.stopImmediatePropagation();
                e.preventDefault();
                e.stopPropagation();    
            } catch(error) {}
        }
    
        /**
         * Starts the timer on mouse down and logs current position
         * @param {object} e - browser event object
         * @returns {void}
         */
        function mouseDownHandler(e) {
            const clientX = isTouch ? e.touches[0].clientX : e.clientX;
            const clientY = isTouch ? e.touches[0].clientY : e.clientY;

            startX = clientX;
            startY = clientY;

            startLongPressTimer(e);
        }
    
        /**
         * If the mouse moves n pixels during long-press, cancel the timer
         * @param {object} e - browser event object
         * @returns {void}
         */
        function mouseMoveHandler(e) {
            const clientX = isTouch ? e.touches[0].clientX : e.clientX;
            const clientY = isTouch ? e.touches[0].clientY : e.clientY;

            // calculate total number of pixels the pointer has moved
            var diffX = Math.abs(startX - clientX);
            var diffY = Math.abs(startY - clientY);

            // if pointer has moved more than allowed, cancel the long-press timer and therefore the event
            if (diffX >= maxDiffX || diffY >= maxDiffY) {
                clearLongPressTimer(e);
            }
        }
    
        // hook events that clear a pending long press event
        document.addEventListener(mouseUp, clearLongPressTimer, true);
        document.addEventListener(mouseMove, mouseMoveHandler, true);
        document.addEventListener('wheel', clearLongPressTimer, true);
        document.addEventListener('scroll', clearLongPressTimer, true);
    
        // hook events that can trigger a long press event
        document.addEventListener(mouseDown, mouseDownHandler, true); // <- start
    }(window, document));    
}

// Luke - braze.js
if ((window.injectLinerBrazeJS || (window.injectLinerCoreScript || window.top === window)) && !window.isLinerBrazeJSInjected) {
    window.isLinerBrazeJSInjected = true;
    var brazeJS = 
        `/*
        * Braze Web SDK v2.2.7
        * (c) Braze, Inc. 2019 - http://braze.com
        * License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
        * Compiled on 2019-01-17
        */
        (function() {function M(k){function W(a,c,d,e,f,h){if(0<a.buttons.length){var q=document.createElement("div");q.className="ab-message-buttons";if(a.imageStyle!==b.h.Vd.GRAPHIC){var g;a.ib()||(g=a.backgroundColor);X(q,g)}e.insertBefore(q,e.firstChild);g=function(p){return function(n){n=n||window.event;a.ha(h||e,function(){c.Ie(p,a);p.clickAction===b.h.Eb.URI?b.pa.openUri(p.uri,n,f||a.openTarget===b.h.md.BLANK):p.clickAction===b.h.Eb.NEWS_FEED&&d()});n.stopPropagation();return!1}};for(var p=0;p<a.buttons.length;p++){var n=
            a.buttons[p],k=document.createElement("button");k.className="ab-message-button";k.setAttribute("type","button");var r=n.text;""===n.text&&(r="\\u00a0");k.appendChild(document.createTextNode(r));a.ib()||(k.style.backgroundColor=b.$a.zb(n.backgroundColor),k.style.color=b.$a.zb(n.textColor));k.onclick=g(n);q.appendChild(k)}}}function Y(a){a=a.querySelectorAll(".ab-close-button, .ab-message-button");if(0<a.length){var c=a[0],d=a[a.length-1];d.addEventListener("keydown",function(a){a=a||window.event;a.keyCode!==
            b.Na.Ng||a.shiftKey||(a.preventDefault(),c.focus())});c.addEventListener("keydown",function(a){a=a||window.event;a.keyCode===b.Na.Ng&&a.shiftKey&&(a.preventDefault(),d.focus())})}}function X(a,c){var d=document.createElement("div");d.className="ab-mask";a.appendChild(d);d=document.createElement("div");d.className="ab-background";null!=c&&(d.style.backgroundColor=b.$a.zb(c));a.appendChild(d)}function V(a,c){b.Kg=".ab-feed,.ab-feed .ab-card .ab-title,.ab-feed .ab-card .ab-url-area,.ab-in-app-message{font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.ab-centering-div:focus,.ab-feed .ab-feed-buttons-wrapper:focus,.ab-in-app-message:focus{outline:0}@-webkit-keyframes animSlideIn{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1)}1.3%{-webkit-transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1);transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1)}2.55%{-webkit-transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1);transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1)}4.1%{-webkit-transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1);transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1)}5.71%{-webkit-transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1);transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1)}8.11%{-webkit-transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1);transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1)}8.81%{-webkit-transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1);transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1)}11.96%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1)}12.11%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1)}15.07%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1)}16.12%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1)}27.23%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1)}27.58%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1)}38.34%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1)}40.09%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1)}50%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1)}60.56%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1)}100%,82.78%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes animSlideIn{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1)}1.3%{-webkit-transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1);transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1)}2.55%{-webkit-transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1);transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1)}4.1%{-webkit-transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1);transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1)}5.71%{-webkit-transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1);transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1)}8.11%{-webkit-transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1);transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1)}8.81%{-webkit-transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1);transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1)}11.96%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1)}12.11%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1)}15.07%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1)}16.12%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1)}27.23%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1)}27.58%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1)}38.34%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1)}40.09%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1)}50%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1)}60.56%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1)}100%,82.78%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@-webkit-keyframes animSlideOut{0%{-webkit-transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(300px,0,0) translate3d(100%,0,0)}}@keyframes animSlideOut{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(300px,0,0) translate3d(100%,0,0);transform:translate3d(300px,0,0) translate3d(100%,0,0)}}@-webkit-keyframes animSlideLeft{0%{-webkit-transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-300px,0,0) translate3d(-100%,0,0)}}@keyframes animSlideLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-300px,0,0) translate3d(-100%,0,0);transform:translate3d(-300px,0,0) translate3d(-100%,0,0)}}@-webkit-keyframes animScale{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animScale{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animJelly{0%{-webkit-transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1)}4.5%{-webkit-transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1)}5.51%{-webkit-transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1)}9.01%{-webkit-transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1)}11.01%{-webkit-transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}13.51%{-webkit-transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1)}16.52%{-webkit-transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1)}17.92%{-webkit-transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1)}21.92%{-webkit-transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1)}29.03%{-webkit-transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1)}34.63%{-webkit-transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1)}36.24%{-webkit-transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1)}40.14%{-webkit-transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1)}50.55%{-webkit-transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}62.36%{-webkit-transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1)}100%,79.08%,84.68%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes animJelly{0%{-webkit-transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1)}4.5%{-webkit-transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1)}5.51%{-webkit-transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1)}9.01%{-webkit-transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1)}11.01%{-webkit-transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}13.51%{-webkit-transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1)}16.52%{-webkit-transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1)}17.92%{-webkit-transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1)}21.92%{-webkit-transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1)}29.03%{-webkit-transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1)}34.63%{-webkit-transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1)}36.24%{-webkit-transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1)}40.14%{-webkit-transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1)}50.55%{-webkit-transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}62.36%{-webkit-transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1)}100%,79.08%,84.68%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@-webkit-keyframes animJellyThreeQuarterScale{0%{-webkit-transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1)}2.4%{-webkit-transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1);transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1)}3.28%{-webkit-transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1);transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1)}4.3%{-webkit-transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1);transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1)}4.8%{-webkit-transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1);transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1)}6.49%{-webkit-transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1);transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1)}7.21%{-webkit-transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1);transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1)}8.61%{-webkit-transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1);transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1)}9.61%{-webkit-transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1);transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1)}9.69%{-webkit-transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1);transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1)}12.89%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1)}12.91%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1)}15.78%{-webkit-transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1);transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1)}17.22%{-webkit-transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1);transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1)}21.78%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1)}21.94%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1)}28.33%{-webkit-transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1);transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1)}30.67%{-webkit-transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1);transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1)}34.27%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1)}39.44%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1)}46.61%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1)}48.45%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1)}58.94%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1)}61.66%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1)}66.23%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1)}71.19%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1)}80%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1)}83.98%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1)}100%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1)}}@keyframes animJellyThreeQuarterScale{0%{-webkit-transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1)}2.4%{-webkit-transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1);transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1)}3.28%{-webkit-transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1);transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1)}4.3%{-webkit-transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1);transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1)}4.8%{-webkit-transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1);transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1)}6.49%{-webkit-transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1);transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1)}7.21%{-webkit-transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1);transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1)}8.61%{-webkit-transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1);transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1)}9.61%{-webkit-transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1);transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1)}9.69%{-webkit-transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1);transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1)}12.89%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1)}12.91%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1)}15.78%{-webkit-transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1);transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1)}17.22%{-webkit-transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1);transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1)}21.78%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1)}21.94%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1)}28.33%{-webkit-transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1);transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1)}30.67%{-webkit-transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1);transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1)}34.27%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1)}39.44%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1)}46.61%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1)}48.45%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1)}58.94%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1)}61.66%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1)}66.23%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1)}71.19%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1)}80%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1)}83.98%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1)}100%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1)}}@-webkit-keyframes fadeToThreeQuarters{0%{opacity:0}100%{opacity:.75}}@keyframes fadeToThreeQuarters{0%{opacity:0}100%{opacity:.75}}@-webkit-keyframes fadeFromThreeQuarters{0%{opacity:.75}100%{opacity:0}}@keyframes fadeFromThreeQuarters{0%{opacity:.75}100%{opacity:0}}@-webkit-keyframes slideUp{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1)}2.1%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1)}4.2%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1)}8.41%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1)}12.61%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1)}16.72%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1)}25.03%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1)}33.33%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}39.14%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1)}100%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes slideUp{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1)}2.1%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1)}4.2%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1)}8.41%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1)}12.61%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1)}16.72%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1)}25.03%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1)}33.33%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}39.14%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1)}100%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}.ab-in-app-message{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:fixed;text-align:center;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);-moz-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:normal;letter-spacing:normal;z-index:1050}.ab-in-app-message.ab-clickable{cursor:pointer}.ab-in-app-message .ab-background,.ab-in-app-message .ab-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1}.ab-in-app-message .ab-mask{background-color:#cfcfcf}.ab-in-app-message .ab-background{background-color:#fff}.ab-in-app-message .ab-close-button{display:block;cursor:pointer;position:absolute;z-index:1060}.ab-in-app-message .ab-message-text{margin:20px;overflow:hidden;vertical-align:text-bottom;word-wrap:break-word;white-space:pre-wrap;max-width:100%}.ab-in-app-message .ab-message-text.start-aligned{text-align:left;text-align:start}.ab-in-app-message .ab-message-text.end-aligned{text-align:right;text-align:end}.ab-in-app-message .ab-message-text.center-aligned{text-align:center}.ab-in-app-message .ab-message-text::-webkit-scrollbar{-webkit-appearance:none;width:9px}.ab-in-app-message .ab-message-text::-webkit-scrollbar-thumb{-webkit-appearance:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background-color:rgba(0,0,0,.4)}.ab-in-app-message .ab-message-header{display:block;font-weight:700;font-size:19px;margin-bottom:14px;line-height:23px}.ab-in-app-message .ab-message-header.start-aligned{text-align:left;text-align:start}.ab-in-app-message .ab-message-header.end-aligned{text-align:right;text-align:end}.ab-in-app-message .ab-message-header.center-aligned{text-align:center}.ab-in-app-message.ab-slideup{cursor:pointer;margin:20px;padding:10px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;right:0;font-size:13px}.ab-in-app-message.ab-slideup .ab-close-button{right:8px;top:8px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-in-app-message.ab-slideup .ab-close-button:hover{font-size:18px;right:6px;top:6px}.ab-in-app-message.ab-slideup .ab-message-text{display:inline-block;margin:5px 15px 5px 10px;max-height:200px;max-width:440px}.ab-in-app-message.ab-slideup .ab-image-area{display:inline-block;width:60px;vertical-align:top;margin:5px 0 5px 5px}.ab-in-app-message.ab-slideup .ab-image-area.ab-icon-area{width:auto}.ab-in-app-message.ab-slideup .ab-image-area~.ab-message-text{max-height:60px}.ab-in-app-message.ab-slideup .ab-image-area img{width:100%}.ab-in-app-message.ab-fullscreen,.ab-in-app-message.ab-modal{right:0;left:0;margin-right:auto;margin-left:auto;font-size:14px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ab-in-app-message.ab-fullscreen .ab-background,.ab-in-app-message.ab-fullscreen .ab-mask,.ab-in-app-message.ab-modal .ab-background,.ab-in-app-message.ab-modal .ab-mask{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.ab-in-app-message.ab-fullscreen .ab-message-text,.ab-in-app-message.ab-modal .ab-message-text{overflow-y:auto;line-height:normal}.ab-in-app-message.ab-fullscreen .ab-close-button,.ab-in-app-message.ab-modal .ab-close-button{right:10px;top:10px;font-size:20px;width:20px;height:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;text-align:center}.ab-in-app-message.ab-fullscreen .ab-close-button .fa,.ab-in-app-message.ab-modal .ab-close-button .fa{line-height:20px}.ab-in-app-message.ab-fullscreen .ab-image-area,.ab-in-app-message.ab-modal .ab-image-area{position:relative;display:block;-webkit-border-radius:10px 10px 0 0;-moz-border-radius:10px 10px 0 0;border-radius:10px 10px 0 0;overflow:hidden}.ab-in-app-message.ab-fullscreen .ab-image-area img,.ab-in-app-message.ab-modal .ab-image-area img{position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.ab-in-app-message.ab-fullscreen .ab-image-area .ab-center-cropped-img,.ab-in-app-message.ab-modal .ab-image-area .ab-center-cropped-img{background-size:cover;background-repeat:no-repeat;background-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0}.ab-in-app-message.ab-fullscreen .ab-icon,.ab-in-app-message.ab-modal .ab-icon{margin-top:20px}.ab-in-app-message.ab-fullscreen.graphic,.ab-in-app-message.ab-modal.graphic{padding:0}.ab-in-app-message.ab-fullscreen.graphic .ab-message-text,.ab-in-app-message.ab-modal.graphic .ab-message-text{display:none}.ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons,.ab-in-app-message.ab-modal.graphic .ab-message-buttons{bottom:0;left:0}.ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons .ab-background,.ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons .ab-mask,.ab-in-app-message.ab-modal.graphic .ab-message-buttons .ab-background,.ab-in-app-message.ab-modal.graphic .ab-message-buttons .ab-mask{background-color:transparent}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-in-app-message.ab-modal.graphic .ab-image-area{height:auto;margin:0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ab-in-app-message.ab-fullscreen .ab-message-buttons~.ab-message-text,.ab-in-app-message.ab-modal .ab-message-buttons~.ab-message-text{margin-bottom:80px}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area img,.ab-in-app-message.ab-modal.graphic .ab-image-area img{display:block;top:0;-webkit-transform:none;-ms-transform:none;transform:none}.ab-in-app-message.ab-modal{padding-top:20px;top:20%;width:290px;max-width:290px;max-height:320px}.ab-in-app-message.ab-modal .ab-message-text{max-height:121px}.ab-in-app-message.ab-modal .ab-image-area{margin-top:-20px;height:100px}.ab-in-app-message.ab-modal .ab-image-area img{max-width:100%;max-height:100%}.ab-in-app-message.ab-modal .ab-image-area.ab-icon-area{height:auto}.ab-in-app-message.ab-modal.graphic{width:auto;overflow:hidden}.ab-in-app-message.ab-modal.graphic .ab-image-area{display:inline}.ab-in-app-message.ab-modal.graphic .ab-image-area img{max-height:320px;max-width:290px}.ab-in-app-message.ab-fullscreen{top:8%;-webkit-transition:top .4s;-moz-transition:top .4s;-o-transition:top .4s;transition:top .4s;width:400px;max-height:640px}.ab-in-app-message.ab-fullscreen.landscape{width:640px;max-height:400px}.ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:200px}.ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:400px}.ab-in-app-message.ab-fullscreen.landscape .ab-message-text{max-height:100px}.ab-in-app-message.ab-fullscreen .ab-message-text{max-height:220px}.ab-in-app-message.ab-fullscreen .ab-image-area{height:320px}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area{height:640px}.ab-in-app-message.ab-html-message{background-color:transparent;border:none;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.ab-in-app-message.ab-html-message.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-html-message.ab-hide{-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s;-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message .ab-message-buttons{position:absolute;bottom:0;width:100%;padding:15px 20px 20px;z-index:inherit;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ab-in-app-message .ab-message-button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border:none;display:inline-block;font-size:12px;font-weight:700;height:auto;line-height:normal;letter-spacing:normal;padding:14px 10px;text-transform:none;margin:0;width:48%;cursor:pointer;overflow:hidden;text-overflow:ellipsis;word-wrap:normal;white-space:nowrap}.ab-feed,.ab-feed .ab-feed-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.ab-in-app-message .ab-message-button:first-of-type{float:left}.ab-in-app-message .ab-message-button:last-of-type{float:right}.ab-in-app-message .ab-message-button:first-of-type:last-of-type{width:100%}.ab-in-app-message .ab-message-button a{color:inherit;text-decoration:inherit}.ab-in-app-message img{display:inline-block}.ab-in-app-message .ab-icon{display:inline-block;padding:10px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ab-in-app-message .ab-icon .fa{font-size:30px;width:30px}.ab-start-hidden{visibility:hidden}.ab-effect-slide.ab-show{-webkit-animation-name:animSlideIn;animation-name:animSlideIn;-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-effect-slide.ab-hide{-webkit-animation-name:animSlideOut;animation-name:animSlideOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-effect-fullscreen.ab-show,.ab-effect-modal.ab-show{-webkit-animation-name:animJelly;animation-name:animJelly;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-effect-fullscreen.ab-hide,.ab-effect-modal.ab-hide{-webkit-animation-name:animScale;animation-name:animScale;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-direction:reverse;animation-direction:reverse;animation-fill-mode:forwards;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}.ab-centering-div{position:fixed;text-align:center;z-index:1050;top:0;right:0;bottom:0;left:0;pointer-events:none}.ab-centering-div .ab-in-app-message{display:inline-block;pointer-events:all}@media (max-width:750px){.ab-in-app-message.ab-slideup{width:90%;margin:5%}.ab-in-app-message.ab-slideup .ab-message-text{margin:2%;max-width:100%}.ab-in-app-message.ab-slideup .ab-image-area{width:20%;margin:2%}.ab-in-app-message.ab-slideup .ab-image-area~.ab-message-text{max-width:72%}.ab-in-app-message.ab-slideup .ab-image-area img{width:100%}.ab-in-app-message.ab-fullscreen,.ab-in-app-message.ab-fullscreen.landscape{top:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen .ab-background,.ab-in-app-message.ab-fullscreen .ab-mask,.ab-in-app-message.ab-fullscreen.landscape .ab-background,.ab-in-app-message.ab-fullscreen.landscape .ab-mask{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.ab-effect-fullscreen.ab-show,.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-fullscreen.ab-effect-fullscreen.ab-hide,.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message.ab-fullscreen .ab-image-area,.ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:50%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen .ab-message-text,.ab-in-app-message.ab-fullscreen.landscape .ab-message-text{top:50%;right:0;bottom:0;left:0;position:absolute;height:auto;max-height:none}.ab-in-app-message.ab-fullscreen.graphic,.ab-in-app-message.ab-fullscreen.landscape.graphic{display:block}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen .ab-close-button,.ab-in-app-message.ab-fullscreen.landscape .ab-close-button{font-size:6vw;width:6vw;height:6vw;-webkit-border-radius:3vw;-moz-border-radius:3vw;border-radius:3vw;right:3vw;top:3vw}}@media (max-device-width:750px) and (orientation:landscape){.ab-in-app-message.ab-modal{top:0;margin:0}.ab-in-app-message.ab-fullscreen .ab-close-button,.ab-in-app-message.ab-fullscreen.landscape .ab-close-button{font-size:6vh;width:6vh;height:6vh;-webkit-border-radius:3vh;-moz-border-radius:3vh;border-radius:3vh;right:3vh;top:3vh}}@media (min-device-width:321px) and (max-device-width:750px) and (orientation:landscape){.ab-in-app-message.ab-modal{margin-top:20px}}@media (min-device-width:751px) and (max-device-width:1024px) and (orientation:landscape){.ab-in-app-message.ab-fullscreen:not(.landscape){top:0;margin-top:20px}}@media (min-width:751px){.ab-in-app-message.ab-fullscreen .ab-image-area img{max-height:100%;max-width:100%}}@media (max-height:790px) and (min-width:751px){.ab-in-app-message.ab-fullscreen:not(.landscape){margin-top:2%;top:0}}@media (max-height:650px) and (min-width:751px){.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-show{-webkit-animation-name:animJellyThreeQuarterScale;animation-name:animJellyThreeQuarterScale;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-timing-function:linear;animation-timing-function:linear;animation-fill-mode:both}.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-hide{-webkit-animation-name:animJellyThreeQuarterScale;animation-name:animJellyThreeQuarterScale;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-direction:reverse;animation-direction:reverse;animation-fill-mode:forwards;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}}@media (max-height:500px) and (min-width:751px){.ab-in-app-message.ab-fullscreen:not(.landscape){top:0;height:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;width:400px}.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-background,.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-mask{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-image-area{height:50%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-message-text{top:50%;right:0;bottom:0;left:0;position:absolute;height:auto;max-height:none}.ab-in-app-message.ab-fullscreen:not(.landscape).graphic{display:block}.ab-in-app-message.ab-fullscreen:not(.landscape).graphic .ab-image-area{height:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}}@media (max-height:430px){.ab-in-app-message.ab-fullscreen.landscape{top:0}}@media (max-height:400px){.ab-in-app-message.ab-fullscreen.landscape{top:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.landscape .ab-background,.ab-in-app-message.ab-fullscreen.landscape .ab-mask{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:50%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.landscape .ab-message-text{top:50%;right:0;bottom:0;left:0;position:absolute;height:auto;max-height:none}.ab-in-app-message.ab-fullscreen.landscape.graphic{display:block}.ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}}.ab-page-blocker{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1040}.ab-page-blocker.ab-show{-webkit-animation-name:fadeToThreeQuarters;animation-name:fadeToThreeQuarters;-webkit-animation-duration:.16666667s;animation-duration:.16666667s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-page-blocker.ab-hide{-webkit-animation-name:fadeFromThreeQuarters;animation-name:fadeFromThreeQuarters;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-feed.ab-hide,.ab-feed.ab-show{-webkit-animation-timing-function:linear}body>.ab-feed{position:fixed;top:0;right:0;bottom:0;width:421px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}body>.ab-feed .ab-feed-body{position:absolute;top:0;left:0;right:0;border:none;border-left:1px solid #d0d0d0;padding-top:58px;min-height:100%}body>.ab-feed .ab-no-cards-message{position:absolute;width:100%;margin-left:-20px;top:40%}.ab-feed{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;box-sizing:border-box;-webkit-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);-moz-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);box-shadow:0 1px 7px 1px rgba(66,82,113,.15);width:402px;background-color:#eee;font-size:13px;line-height:130%;letter-spacing:normal;overflow-y:auto;overflow-x:visible;-webkit-overflow-scrolling:touch;-webkit-transition:opacity .25s;-moz-transition:opacity .25s;-o-transition:opacity .25s;transition:opacity .25s}.ab-feed .ab-feed-body{box-sizing:border-box;border:1px solid #d0d0d0;border-top:none;padding:20px 20px 0}.ab-feed.ab-show{-webkit-animation-name:animSlideIn;animation-name:animSlideIn;-webkit-animation-duration:1s;animation-duration:1s;animation-timing-function:linear}.ab-feed.ab-hide{opacity:0;-webkit-animation-name:animSlideOut;animation-name:animSlideOut;-webkit-animation-duration:.25s;animation-duration:.25s;animation-timing-function:linear}.ab-feed .ab-card{position:relative;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:100%;border:1px solid #d0d0d0;margin-bottom:20px;overflow:hidden;background-color:#fff}.ab-feed .ab-card .ab-pinned-indicator{position:absolute;right:0;top:0;margin-right:-1px;width:0;height:0;border-style:solid;border-width:0 24px 24px 0;border-color:transparent #1676d0 transparent transparent}.ab-feed .ab-card .ab-pinned-indicator .fa-star{position:absolute;right:-21px;top:2px;font-size:9px;color:#fff}.ab-feed .ab-card.ab-hide{-webkit-animation-name:animSlideLeft;animation-name:animSlideLeft;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-feed .ab-card .ab-close-button{display:block;cursor:pointer;position:absolute;z-index:1060;right:10px;top:10px;font-size:20px;width:20px;height:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;text-align:center;visibility:hidden;opacity:0;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;transition:.5s}.ab-feed .ab-card .ab-close-button .fa{line-height:20px}.ab-feed .ab-card:hover .ab-close-button{visibility:visible;opacity:1}.ab-feed .ab-card a{color:inherit;text-decoration:none}.ab-feed .ab-card a:hover{text-decoration:underline}.ab-feed .ab-card .ab-image-area{display:inline-block;vertical-align:top;line-height:0;overflow:hidden;width:100%;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial}.ab-feed .ab-card .ab-image-area img{height:auto;width:100%}.ab-feed .ab-card.ab-banner .ab-card-body{display:none}.ab-feed .ab-card .ab-card-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%;position:relative}.ab-feed .ab-card .ab-unread-indicator{position:absolute;bottom:0;margin-right:-1px;width:100%;height:5px;background-color:#1676d0}.ab-feed .ab-card .ab-unread-indicator.read{background-color:transparent}.ab-feed .ab-card .ab-title{overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:18px;line-height:130%;font-weight:700;padding:20px 25px 0}.ab-feed .ab-card .ab-description{color:#545454;padding:15px 25px 20px;word-wrap:break-word;white-space:pre-wrap}.ab-feed .ab-card .ab-url-area{color:#1676d0;margin-top:12px}.ab-feed .ab-card.ab-classic-card .ab-card-body{min-height:95px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body{min-height:100px;padding-left:72px}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area{width:60px;height:60px;padding:25px 0 25px 25px;position:absolute}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area img{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:60px;height:60px}.ab-feed .ab-card.ab-classic-card.with-image .ab-title{background-color:transparent;font-size:16px}.ab-feed .ab-card.ab-classic-card.with-image .ab-description{padding-top:10px}.ab-feed .ab-card.ab-control-card{height:0;width:0;margin:0;border:0}.ab-feed .ab-feed-buttons-wrapper{position:relative;background-color:#282828;height:38px;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);z-index:1}.ab-feed .ab-feed-buttons-wrapper .ab-close-button,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{cursor:pointer;color:#fff;font-size:18px;margin:10px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{font-size:22px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button{float:right;margin-top:9px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover{margin-top:6px;margin-right:9px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{margin-left:12px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{margin-top:8px;margin-left:10px}.ab-feed .ab-no-cards-message{text-align:center;margin-bottom:20px}@media (max-width:750px){body>.ab-feed{width:100%;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}body>.ab-feed.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}body>.ab-feed.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%;opacity:.5}}";
            var d=!1,e=!1,f=!1,h=!1,q=null;a.ii(function(a){d=a.openInAppMessagesInNewTab||!1;e=a.openCardsInNewTab||a.openNewsFeedCardsInNewTab||!1;f=a.requireExplicitInAppMessageDismissal||!1;h=a.enableHtmlInAppMessages||!1;q=null;a.doNotLoadFontAwesome||null!==document.querySelector('link[rel=stylesheet][href="https://use.fontawesome.com/7f85a56ba4.css"]')||(a=document.createElement("link"),a.setAttribute("rel","stylesheet"),a.setAttribute("href","https://use.fontawesome.com/7f85a56ba4.css"),document.getElementsByTagName("head")[0].appendChild(a));
            null==document.getElementById("ab-css-definitions")&&(a=document.createElement("style"),a.innerHTML=b.Kg,a.id="ab-css-definitions",document.getElementsByTagName("head")[0].appendChild(a));f||document.addEventListener("keydown",function(a){a=a||window.event;if(a.keyCode===b.Na.Si&&0<document.querySelectorAll(".ab-modal-interactions").length){a=document.getElementsByClassName("ab-html-message");for(var c=!1,d=0;d<a.length;d++){var e=a[d].contentWindow.document.getElementsByClassName("ab-programmatic-close-button")[0];
            null!=e&&(b.la.Ch(e),c=!0)}c||(a=document.querySelectorAll(".ab-page-blocker")[0],null!=a&&b.la.Ch(a))}},!1)});var l={gk:function(){null==q&&(q=a.ji(function(a){l.showInAppMessage(a[0]);return a.slice(1)}));return q},Al:function(e,n,q){if(null==e)return!1;if(e instanceof b.cc)return g.f.info("User received control for a multivariate test, logging to Braze servers."),a.Id(e),!0;if(!(e instanceof b.h))return!1;if(e instanceof b.Ua&&!h)return g.f.error('For security reasons, HTML in-app messages are disabled by default. Use the "enableHtmlInAppMessages" configuration option for appboy.initialize to enable these messages.'),
            a.sa(e,b.h.wa.Zi),!1;null==n&&(n=document.getElementsByTagName("body")[0]);if(e.Tc()&&0<n.querySelectorAll(".ab-modal-interactions").length)return g.f.info("Cannot show in-app message '"+e.message+"' because another message is being shown."),a.sa(e,b.h.wa.wi),!1;if(b.pa.Vk()){var l=b.pa.Kk();if(l===b.pa.Ia.$d&&e.orientation===b.h.Ia.LANDSCAPE||l===b.pa.Ia.ff&&e.orientation===b.h.Ia.PORTRAIT)return g.f.info("Not showing "+(e.orientation===b.h.Ia.PORTRAIT?"portrait":"landscape")+" in-app message '"+
            e.message+"' because the screen is currently "+(l===b.pa.Ia.$d?"portrait":"landscape")),a.sa(e,b.h.wa.xj),!1}var p=document.createElement("div");p.className="ab-iam-root";e.Ue()&&(p.id=e.htmlId);n.appendChild(p);e.ib()&&(n=document.createElement("style"),n.innerHTML=e.css,n.id=e.Re(),document.getElementsByTagName("head")[0].appendChild(n));var k=this;n=e.Qa(a,c,function(){k.ci()},function(c){if(e.Tc()&&e.oi()){var d=document.createElement("div");d.className="ab-page-blocker";d.className+=e.Ad();e.ib()||
            (d.style.backgroundColor=b.$a.zb(e.frameColor));p.appendChild(d);if(!f){var h=Date.now();d.onclick=function(a){Date.now()-h>b.h.pj&&(a=a||window.event,e.ha(c),e.Uc(),a.stopPropagation())}}}else if(e instanceof b.sb){for(var n=document.querySelectorAll(".ab-slideup"),d=null,g=n.length-1;0<=g;g--)if(n[g]!==c){d=n[g];break}e.slideFrom===b.h.ce.TOP?(n=0,null!=d&&(n=d.offsetTop+d.offsetHeight),c.style.top=Math.max(n,0)+"px"):(n=0,null!=d&&(n=(window.innerHeight||document.documentElement.clientHeight)-
            d.offsetTop),c.style.bottom=Math.max(n,0)+"px")}a.Id(e);e.dismissType===b.h.Dc.AUTO_DISMISS&&setTimeout(function(){p.contains(c)&&(e.ha(c),e.Uc())},e.duration);"function"===typeof q&&q()},d);p.appendChild(n);e.Tc()&&n.focus();e.Vh(n);return!0},ci:function(c,d,f){function h(c){for(var d=c.querySelectorAll(".ab-feed"),e=null,f=0;f<d.length;f++)d[f].parentNode===c&&(e=d[f]);null!=e?(b.J.ha(a,e),e.parentNode.replaceChild(p,e)):c.appendChild(p);p.getElementsByClassName("ab-feed-buttons-wrapper")[0].focus();
            a.Qh();l.Ae(a,p)}function n(a,c){if(null==c)return a;var d,e=[];for(d=0;d<c.length;d++)e.push(c[d].toLowerCase());c=[];for(var f=0;f<a.length;f++){var h=[];for(d=0;d<a[f].categories.length;d++)h.push(a[f].categories[d].toLowerCase());0<b.F.Sk(h,e).length&&c.push(a[f])}return c}null==c&&(c=document.getElementsByTagName("body")[0]);var q=!1,l=null;null==d?(l=a.Ce(),l.Te(n(l.cards,f),l.lastUpdated,null,a,e),q=!0):l=new b.J(n(d,f),new Date);var p=l.Qa(a,e);if(q){if(null==l.lastUpdated||Date.now()-l.lastUpdated.valueOf()>
            b.J.hd)g.f.info("Cached feed was older than max TTL of "+b.J.hd+" ms, requesting an update from the server."),l.cg(a,p);var k=Date.now();d=a.gi(function(c){var d=p.querySelectorAll(".ab-refresh-button")[0];if(null!=d){var h=500,q=parseInt(p.getAttribute(b.J.Xd)),h=isNaN(q)?h-(Date.now()-k):h-(Date.now()-q);setTimeout(function(){d.className=d.className.replace(/fa-spin/g,"")},Math.max(h,0))}l.Te(n(c.cards,f),c.lastUpdated,p,a,e)});l.Zh(d,p)}null!=c?h(c):window.onload=function(a){return function(){"function"===
            typeof a&&a();h(document.getElementsByTagName("body")[0])}}(window.onload)},vk:function(){for(var c=document.querySelectorAll(".ab-feed"),d=0;d<c.length;d++)b.J.ha(a,c[d])},Gl:function(a,b,c){0<document.querySelectorAll(".ab-feed").length?l.destroyFeed():l.showFeed(a,b,c)},zl:function(c,d){function f(c){for(var d=c.querySelectorAll(".ab-feed"),e=null,f=0;f<d.length;f++)d[f].parentNode===c&&(e=d[f]);null!=e?(b.va.ha(a,e),e.parentNode.replaceChild(q,e)):c.appendChild(q);a.Ph();h.Ae(a,q)}null==c&&(c=
            document.getElementsByTagName("body")[0]);var h=null,h=a.Rc();"function"===typeof d&&h.Te(d(h.cards.slice()),h.lastUpdated,null,a,e);var q=h.Qa(a,e);if(null==h.lastUpdated||Date.now()-h.lastUpdated.valueOf()>b.va.hd)g.f.info("Cached content cards were older than max TTL of "+b.va.hd+" ms, requesting a sync from the server."),h.cg(a,q);var l=Date.now(),n=a.di(function(c){var f=q.querySelectorAll(".ab-refresh-button")[0];if(null!=f){var n=500,g=parseInt(q.getAttribute(b.J.Xd)),n=isNaN(g)?n-(Date.now()-
            l):n-(Date.now()-g);setTimeout(function(){f.className=f.className.replace(/fa-spin/g,"")},Math.max(n,0))}n=c.cards;"function"===typeof d&&(n=d(n.slice()));h.Te(n,c.lastUpdated,q,a,e)});h.Zh(n,q);null!=c?f(c):window.onload=function(a){return function(){"function"===typeof a&&a();f(document.getElementsByTagName("body")[0])}}(window.onload)},Nk:function(){for(var c=document.querySelectorAll(".ab-feed"),d=0;d<c.length;d++)b.va.ha(a,c[d])},Fl:function(a,b){0<document.querySelectorAll(".ab-feed").length?
            l.hideContentCards():l.showContentCards(a,b)}};return l}function da(a,c){var d,e=[a];b.F.isArray(a)&&(e=a);if(null===c)return null;if(null==c)return c={},c[b.w.Ma]=e,c;if(!S(c)||null==c[b.w.La]&&null==c[b.w.Ma]){if(!b.F.isArray(c))return g.f.error("Attempted to remove from custom attribute array but it is not an array."),!1;for(d=0;d<e.length;d++)for(;-1!==(a=c.indexOf(e[d]));)c.splice(a,1)}else if(c[b.w.Ma]=(c[b.w.Ma]||[]).concat(e),null!=c[b.w.La]){for(d=0;d<e.length;d++)for(;-1!==(a=c[b.w.La].indexOf(e[d]));)c[b.w.La].splice(a,
            1);0===c[b.w.La].length&&(c[b.w.La]=void 0)}return c}function ea(a,c){var d=[a];b.F.isArray(a)&&(d=a);if(null===c)return d;if(null==c)return c={},c[b.w.La]=d,c;if(!S(c)||null==c[b.w.La]&&null==c[b.w.Ma]){if(!b.F.isArray(c))return g.f.error("Attempted to add to custom attribute array but it is not an array."),!1;c=c.concat(d)}else if(c[b.w.La]=(c[b.w.La]||[]).concat(d),null!=c[b.w.Ma]){for(a=0;a<d.length;a++)for(var e;-1!==(e=c[b.w.Ma].indexOf(d[a]));)c[b.w.Ma].splice(e,1);0===c[b.w.Ma].length&&(c[b.w.Ma]=
            void 0)}return c}function fa(a,c){return null===c?a:null==c?(c={},c[b.w.ac]=a,c):S(c)&&null!=c[b.w.ac]?(c[b.w.ac]+=a,c):isNaN(parseInt(c))?(g.f.error("Attempted to increment attribute but it is not an integer."),!1):c+a}function S(a){return null!=a&&"object"===typeof a&&!b.F.isArray(a)}function Z(a){function c(a){var c={},d;for(d in a){var e=a[d];null==e?delete a[d]:c[d]=b.F.yb(e)?b.N.mi(e):e}return c}function d(a,c,d,e,f){null==a&&(a={});if("object"!==typeof a||b.F.isArray(a))return g.f.error(c+
            " requires that "+d+" be an object. Ignoring "+f+"."),!1;for(var h in a){if(!b.T.Za(h,e,"the "+f+" property name"))return!1;c=a[h];if(null!=c&&!b.T.Nl(c,e,"the "+f+' property "'+h+'"'))return!1}return!0}function e(){g.f.Ed();D&&(v.clearData(!1),v=null,x.clearData(!1),x=null,t.ya(),t=null,A.ya(),A=null,w.ya(),w=null,r.Ed(),z=r=null,C.fg(),l=n=C=null,B=[],k=null);H=D=!1}function f(){if(H)return!1;if(!D)throw Error("Appboy must be initialized before calling methods.");return!0}var h={kk:function(a,c){return new b.Td(b.Oc,
            a,c)},pk:function(a,c,d,e,f,h,l,n,g){null==f&&(f={});var p=new b.nc(g,l),r=new b.kc(l,p,g,f[q.Gj]);return new b.M(a,d,e,f[q.xi],c,r,n,p,g,l,h)},Kf:function(){return new b.Va},lk:function(a,c){return new b.ec(a,c)},jk:function(a,c,d){return new b.Sa(a,c,d)},qk:function(a,c,d,e){return new b.eb(a,c,d,e)},nk:function(a,c,d,e,f,h,q){return new b.PushManager(a,c,d,e+"/safari/"+c,f,h,q)},mk:function(a){return new b.Mb(a)}};null==a&&(a=h);var q={ui:"allowCrawlerActivity",Nd:"baseUrl",vj:"noCookies",Mi:"devicePropertyWhitelist",
            Qi:"enableLogging",$i:"minimumIntervalBetweenTriggerActionsInSeconds",Gj:"sessionTimeoutInSeconds",xi:"appVersion",Fj:"serviceWorkerLocation",Dj:"safariWebsitePushId",Cg:"localization",Ig:"sdkFlavor",zg:"language"},l,p,n,k,r,m,t,v,w,y,x,A,z,C,F=new b.Va,B=[],D=!1,H=!1;b.Ra={};b.Ra.Dg=100;b.Ra.Yd="inAppMessage must be an ab.InAppMessage object";b.Ra.jf="must be an ab.Card object";return{ii:function(a){return F.kb(a)},Pf:function(c,d){if(D)return g.f.info("Braze has already been initialized with an API key."),
            !0;g.f.wc(null!=d&&d[q.Qi]);if(null==c||""===c||"string"!==typeof c)return g.f.error("Braze requires a valid API key to be initialized."),!1;l=c;n=d||{};b.Oc.wc();if(b.Oc.Tk&&!n[q.ui])return g.f.info("Ignoring activity from crawler bot "+navigator.userAgent),H=!0,!1;p=d=b.ee.tk(c,n[q.vj]||!1);if((new b.j.Ta(null,!0)).Pa(b.j.B.mf))return g.f.info("Ignoring all activity due to previous opt out"),H=!0,!1;var e=["mparticle","wordpress"];if(null!=n[q.Ig]){var f=n[q.Ig];-1!==e.indexOf(f)?k=f:g.f.error("Invalid sdk flavor passed: "+
            f)}var h=[];t=a.Kf();B.push(t);v=a.lk(t,d);h.push(v);A=a.Kf();B.push(A);e=null!=n[q.Nd]?n[q.Nd]:"https://dev.appboy.com/api/v3";f=n[q.Mi];if(null!=f)if(b.F.isArray(f)){for(var u=[],G=0;G<f.length;G++)b.F.mb(b.aa,f[G],"devicePropertyWhitelist contained an invalid value.","ab.DeviceProperties")&&u.push(f[G]);f=u}else g.f.error("devicePropertyWhitelist must be an array. Defaulting to all properties."),f=null;m=a.kk(d,f);f=new b.rb(d);r=a.pk(l,e,"2.2.7",k,n,function(a){if(D)for(var b=0;b<h.length;b++)h[b].Gd(a)},
            d,m,f);u=n[q.$i];null==u&&(u=30);x=a.qk(u,A,d,r);h.push(x);w=a.Kf();B.push(w);y=a.jk(w,r,d);h.push(y);r.Cl(function(){y.Bc()});r.Pf();z=a.nk(r.Sc(),l,m,e,n[q.Fj],n[q.Dj],f);C=a.mk(r.Sc());d="Initialized ";n&&n[q.Nd]&&(d+='for the Braze backend at "'+n[q.Nd]+'" ');g.f.info(d+('with API key "'+c+'".'));c=b.Oc.language;d=!1;n&&(n[q.zg]&&(c=n[q.zg],d=!0),n[q.Cg]&&(c=n[q.Cg],d=!0));b.Sf.wc(c,d);F.Ea(n);return D=!0},Ed:function(){g.f.info("Destroying appboy instance");p=null;e()},Gk:function(a){f()&&(null==
            a&&g.f.error("getDeviceId must be supplied with a callback. e.g., appboy.getDeviceId(function(deviceId) {console.log('the device id is ' + deviceId)})"),"function"===typeof a&&a(m.Fd().id))},hg:function(){g.f.hg()},dg:function(a){g.f.dg(a)},Le:function(a){if(f()){r.Le(z,a);var c=g.Z.ob.ic,d=new g.Z(c,g.f);d.Hh(c.oa.Gg,function(a,e){function f(){x.Sb(b.ma.Gc,[q],l)}var h=e.lastClick,q=e.trackingString;g.f.info("Firing push click trigger from "+q+" push click at "+h);var l=r.sk(h,q);r.hl(f,f);d.Dh(c.oa.Gg,
            a)});d.Ck(c.oa.zi,function(a){y.Mk(a)})}},tc:function(a,b){f()&&(null==a||0===a.length?(g.f.error("changeUser requires a non-empty userId."),"function"===typeof b&&(g.f.info("messagingReadyCallback provided with an empty userId. Firing immediately."),b())):r.tc(a.toString(),[v,y,x],b,z))},Sc:function(){if(f())return r.Sc()},Kd:function(){f()&&r.Kd()},Oe:function(){f()&&r.Oe()},gi:function(a){if(f())return t.kb(a)},Ce:function(){if(f())return v.Ce()},Bc:function(){if(f())return y.Bc()},di:function(a){if(f())return w.kb(a)},
            Rc:function(){if(f())return y.Rc()},ji:function(a){if(f())return A.kb(a)},Id:function(a){if(f())return a instanceof b.h||a instanceof b.cc?r.Id(a).L:(g.f.error(b.Ra.Yd),!1)},Je:function(a){if(f()){if(!(a instanceof b.h))return g.f.error(b.Ra.Yd),!1;var c=r.Je(a);if(c.L)for(var d=0;d<c.K.length;d++)x.Sb(b.ma.Jb,[a.triggerId],c.K[d]);return c.L}},Ie:function(a,c){if(f()){if(!(a instanceof b.h.Da))return g.f.error("button must be an ab.InAppMessage.Button object"),!1;if(!(c instanceof b.h))return g.f.error(b.Ra.Yd),
            !1;var d=r.Ie(a,c);if(d.L)for(var e=0;e<d.K.length;e++)x.Sb(b.ma.Jb,[c.triggerId,a.id],d.K[e]);return d.L}},Hd:function(a,c,d){if(f()){if(!(a instanceof b.Ua))return g.f.error("inAppMessage argument to logInAppMessageHtmlClick must be an ab.HtmlMessage object."),!1;d=r.Hd(a,c,d);if(d.L)for(var e=0;e<d.K.length;e++)x.Sb(b.ma.Jb,[a.triggerId,c],d.K[e]);return d.L}},sa:function(a,c){if(f())return a instanceof b.h||a instanceof b.cc?b.F.mb(b.h.wa,c,c+" is not a valid in-app message display failure","ab.InAppMessage.DisplayFailures")?
            r.sa(a.triggerId,c).L:!1:(g.f.error(b.Ra.Yd),!1)},Vb:function(a,c){if(f()){if(!b.F.isArray(a))return g.f.error("cards must be an array"),!1;for(var d=0;d<a.length;d++)if(!(a[d]instanceof b.b))return g.f.error("Each card in cards "+b.Ra.jf),!1;return r.Vb(a,c).L}},Ub:function(a,c){if(f())return a instanceof b.b?r.Ub(a,c).L:(g.f.error("card "+b.Ra.jf),!1)},He:function(a){if(f())return a instanceof b.b?r.He(a).L:(g.f.error("card "+b.Ra.jf),!1)},Qh:function(){if(f())return r.Rh(g.yg.Wi).L},Ph:function(){if(f())return r.Rh(g.yg.Hi).L},
            Fa:function(a){if(f()){for(var b=0;b<B.length;b++)B[b].Fa(a);F.Fa(a)}},ya:function(){if(f())for(var a=0;a<B.length;a++)B[a].ya()},Uf:function(a,e){if(f()){if(null==a||0>=a.length)return g.f.error('logCustomEvent requires a non-empty eventName, got "'+a+'". Ignoring event.'),!1;if(!b.T.Za(a,"log custom event","the event name")||!d(e,"logCustomEvent","eventProperties",'log custom event "'+a+'"',"event"))return!1;var h=r.Uf(a,c(e));if(h.L){g.f.info('Logged custom event "'+a+'".');for(var q=0;q<h.K.length;q++)x.Sb(b.ma.bc,
            [a,e],h.K[q])}return h.L}},Vf:function(a,e,h,q,l){if(f()){null==h&&(h="USD");null==q&&(q=1);if(null==a||0>=a.length)return g.f.error('logPurchase requires a non-empty productId, got "'+a+'", ignoring.'),!1;if(!b.T.Za(a,"log purchase","the purchase name"))return!1;var n=parseFloat(e);if(isNaN(n))return g.f.error("logPurchase requires a numeric price, got "+e+", ignoring."),!1;n=n.toFixed(2);e=parseInt(q);if(isNaN(e))return g.f.error("logPurchase requires an integer quantity, got "+q+", ignoring."),
            !1;if(1>e||e>b.Ra.Dg)return g.f.error("logPurchase requires a quantity >1 and <"+b.Ra.Dg+", got "+e+", ignoring."),!1;h=h.toUpperCase();if(-1==="AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYR BZD CAD CDF CHF CLF CLP CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EEK EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LTL LVL LYD MAD MDL MGA MKD MMK MNT MOP MRO MTL MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD STD SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMK ZMW ZWL".split(" ").indexOf(h))return g.f.error("logPurchase requires a valid currencyCode, got "+
            h+", ignoring."),!1;if(!d(l,"logPurchase","purchaseProperties",'log purchase "'+a+'"',"purchase"))return!1;q=r.Vf(a,n,h,e,c(l));if(q.L)for(g.f.info("Logged "+e+" purchase"+(1<e?"s":"")+' of "'+a+'" for '+h+" "+n+"."),h=0;h<q.K.length;h++)x.Sb(b.ma.hc,[a,l],q.K[h]);return q.L}},Tb:function(){if(f())return z.Tb()},xc:function(){if(f())return z.xc()},Rf:function(a,b,c){f()&&z.Rf(a,b,c)},Fe:function(){if(f())return z.Fe()},dl:function(a,b,c){if(f())return z.subscribe(c,function(b,c,d){r.Kd();"function"===
            typeof a&&a(b,c,d)},b)},Kl:function(a,b){if(f())return z.unsubscribe(a,b)},gg:function(a,c,d,e,h){if(f()){if(!b.Ud.Ml(a,c))return!1;r.gg(a,c,d,e,h);return!0}},Jl:function(){f()&&C.watchPosition()},Bl:function(){null!=r&&r.Kd();var a=new b.j.Ta(null,!0);a.lb(b.j.B.mf,"This-cookie-will-expire-in-"+a.Hk());a=g.Z.ob.ic;(new g.Z(a,g.f)).setItem(a.oa.lf,a.be,!0);e();H=!0},il:function(){(new b.j.Ta(null,!0)).remove(b.j.B.mf);var a=g.Z.ob.ic;(new g.Z(a,g.f)).Dh(a.oa.lf,a.be);e()},Ol:function(){if(null==p)throw Error("Appboy must be initialized before calling methods.");
            p.clearData();for(var a=b.F.keys(g.Z.ob),c=0;c<a.length;c++)(new g.Z(g.Z.ob[a[c]],g.f)).clearData();D&&(v.clearData(!0),x.clearData(!0))}}}var g={qg:{}};g.qg.Ll=function(a){var b="=".repeat((4-a.length%4)%4);a=(a+b).replace(/\\-/g,"+").replace(/_/g,"/");a=atob(a);for(var b=new Uint8Array(a.length),d=0;d<a.length;++d)b[d]=a.charCodeAt(d);return b};g.$={CustomEvent:"ce",dj:"p",Aj:"pc",Xl:"ca",Yl:"pd",fj:"i",ej:"ie",Gi:"cci",Ii:"ccic",Ei:"ccc",Fi:"ccd",Mg:"ss",Ij:"se",cj:"si",xg:"sc",wg:"sbc",bj:"sfe",
            Ji:"iec",nj:"lr",yi:"uae",Di:"ci",Ci:"cc",lj:"lcaa",mj:"lcar"};g.yg={Wi:"feed_displayed",Hi:"content_cards_displayed"};g.fd=function(){};g.fd.De=function(){function a(a){var b=(Math.random().toString(16)+"000000000").substr(2,8);return a?"-"+b.substr(0,4)+"-"+b.substr(4,4):b}return a()+a(!0)+a(!0)+a()};g.Z=function(a,b){this.eh="undefined"===typeof window?self:window;this.O=a;this.P=b};g.Z.ob={ic:{ba:"AppboyServiceWorkerAsyncStorage",VERSION:5,oa:{Ki:"data",Gg:"pushClicks",qf:"pushSubscribed",Tl:"fallbackDevice",
            zi:"cardUpdates",lf:"optOut"},be:1}};g.Z.prototype.Ef=function(){if("indexedDB"in this.eh)return this.eh.indexedDB};g.Z.prototype.Mc=function(){try{if(null==this.Ef())return!1;this.Ef().open("Braze IndexedDB Support Test");return!0}catch(a){return this.P.info("Not using IndexedDB for storage due to following error: "+a),!1}};g.Z.prototype.Nc=function(a,b){var c=this.Ef().open(this.O.ba,this.O.VERSION);if(null==c)return"function"===typeof b&&b(),!1;var e=this;c.onupgradeneeded=function(a){e.P.info("Upgrading indexedDB "+
            e.O.ba+" to v"+e.O.VERSION+"...");a=a.target.result;for(var b in e.O.oa)e.O.oa.hasOwnProperty(b)&&!a.objectStoreNames.contains(e.O.oa[b])&&a.createObjectStore(e.O.oa[b])};c.onsuccess=function(c){e.P.debug("Opened indexedDB "+e.O.ba+" v"+e.O.VERSION);var d=c.target.result;d.onversionchange=function(){d.close();"function"===typeof b&&b();e.P.error("Needed to close the database unexpectedly because of an upgrade in another tab")};a(d)};c.onerror=function(a){e.P.info("Could not open indexedDB "+e.O.ba+
            " v"+e.O.VERSION+": "+a.target.errorCode);"function"===typeof b&&b();return!0};return!0};g.Z.prototype.setItem=function(a,b,d,e,f){if(!this.Mc())return"function"===typeof f&&f(),!1;var c=this;return this.Nc(function(h){h.objectStoreNames.contains(a)?(h=h.transaction([a],"readwrite").objectStore(a).put(d,b),h.onerror=function(){c.P.error("Could not store object "+b+" in "+a+" on indexedDB "+c.O.ba);"function"===typeof f&&f()},h.onsuccess=function(){c.P.debug("Stored object "+b+" in "+a+" on indexedDB "+
            c.O.ba);"function"===typeof e&&e()}):(c.P.error("Could not store object "+b+" in "+a+" on indexedDB "+c.O.ba+" - "+a+" is not a valid objectStore"),"function"===typeof f&&f())},f)};g.Z.prototype.getItem=function(a,b,d){if(!this.Mc())return!1;var c=this;return this.Nc(function(e){e.objectStoreNames.contains(a)?(e=e.transaction([a],"readonly").objectStore(a).get(b),e.onerror=function(){c.P.error("Could not retrieve object "+b+" in "+a+" on indexedDB "+c.O.ba)},e.onsuccess=function(e){c.P.debug("Retrieved object "+
            b+" in "+a+" on indexedDB "+c.O.ba);e=e.target.result;null!=e&&d(e)}):c.P.error("Could not retrieve object "+b+" in "+a+" on indexedDB "+c.O.ba+" - "+a+" is not a valid objectStore")})};g.Z.prototype.Hh=function(a,b,d){if(this.Mc()){var c=this;this.Nc(function(e){e.objectStoreNames.contains(a)?(e=e.transaction([a],"readonly").objectStore(a).openCursor(null,"prev"),e.onerror=function(){c.P.error("Could not open cursor for "+a+" on indexedDB "+c.O.ba);"function"===typeof d&&d()},e.onsuccess=function(e){e=
            e.target.result;null!=e&&null!=e.value&&null!=e.key?(c.P.debug("Retrieved last record "+e.key+" in "+a+" on indexedDB "+c.O.ba),b(e.key,e.value)):"function"===typeof d&&d()}):(c.P.error("Could not retrieve last record from "+a+" on indexedDB "+c.O.ba+" - "+a+" is not a valid objectStore"),"function"===typeof d&&d())},d)}else"function"===typeof d&&d()};g.Z.prototype.Dh=function(a,b){if(this.Mc()){var c=this;this.Nc(function(d){d.objectStoreNames.contains(a)?(d=d.transaction([a],"readwrite").objectStore(a)["delete"](b),
            d.onerror=function(){c.P.error("Could not delete record "+b+" from "+a+" on indexedDB "+c.O.ba)},d.onsuccess=function(){c.P.debug("Deleted record "+b+" from "+a+" on indexedDB "+c.O.ba)}):c.P.error("Could not delete record "+b+" from "+a+" on indexedDB "+c.O.ba+" - "+a+" is not a valid objectStore")})}};g.Z.prototype.Ck=function(a,b){if(this.Mc()){var c=this;this.Nc(function(d){if(d.objectStoreNames.contains(a)){var e=d.transaction([a],"readwrite").objectStore(a);d=e.openCursor();var h=[];d.onerror=
            function(){0<h.length?(c.P.info("Cursor closed midway through for "+a+" on indexedDB "+c.O.ba),b(h)):c.P.error("Could not open cursor for "+a+" on indexedDB "+c.O.ba)};d.onsuccess=function(a){var c=a.target.result;null!=c?(null!=c.value&&null!=c.key&&(e["delete"](c.key).onsuccess=function(){h.push(c.value)}),c.continue()):0<h.length&&b(h)}}else c.P.error("Could not retrieve objects from "+a+" on indexedDB "+c.O.ba+" - "+a+" is not a valid objectStore")})}};g.Z.prototype.clearData=function(){if(!this.Mc())return!1;
            var a=[],b;for(b in this.O.oa)this.O.oa.hasOwnProperty(b)&&this.O.oa[b]!==this.O.oa.lf&&a.push(this.O.oa[b]);var d=this;return this.Nc(function(b){b=b.transaction(a,"readwrite");for(var c=0;c<a.length;c++){var e=b.objectStore(a[c]).clear();e.onsuccess=function(){d.P.debug("Cleared "+this.source.name+" on indexedDB "+d.O.ba)};e.onerror=function(){d.P.error("Could not clear "+this.source.name+" on indexedDB "+d.O.ba)}}b.oncomplete=function(){d.P.debug("Cleared all object stores on indexedDB "+d.O.ba)};
            b.onerror=function(){d.P.error("Could not clear object stores on indexedDB "+d.O.ba)}})};g.f={wc:function(a){if(void 0!==a||void 0===g.f.Pb)g.f.Pb=!!a;g.f.ah||(g.f.ah=!0)},Ed:function(){g.f.ah=!1;g.f.Pb=void 0;g.f.P=void 0},dg:function(a){"function"!==typeof a?g.f.info("Ignoring setLogger call since logger is not a function"):(g.f.wc(),g.f.P=a)},hg:function(){g.f.wc();g.f.Pb?(console.log("Disabling Appboy logging"),g.f.Pb=!1):(console.log("Enabled Appboy logging"),g.f.Pb=!0)},debug:function(a){g.f.Pb&&
            null!=g.f.P&&g.f.P("Appboy: "+a)},info:function(a){g.f.Pb&&(null!=g.f.P?g.f.P("Appboy: "+a):console.log("Appboy: "+a))},error:function(a){g.f.Pb&&(null!=g.f.P?g.f.P("Appboy SDK Error: "+a):console.error("Appboy SDK Error: "+a))}};var b={Ya:function(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}};"undefined"===typeof console&&(window.console={log:function(){}});Function.prototype.bind||(Function.prototype.bind=function(a){function b(){return f.apply(this.prototype&&this instanceof
            d?this:a,e.concat(Array.prototype.slice.call(arguments)))}function d(){}if("function"!==typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),f=this;d.prototype=this.prototype;b.prototype=new d;return b});Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(a){var b=
            this;if(!document.documentElement.contains(b))return null;do{if(b.matches(a))return b;b=b.parentElement||b.parentNode}while(null!==b&&1===b.nodeType);return null});void 0===Object.create&&(Object.create=function(a){function b(){}b.prototype=a;return new b});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c=this.length>>>0;b=Number(b)||0;b=0>b?Math.ceil(b):Math.floor(b);for(0>b&&(b+=c);b<c;b++)if(b in this&&this[b]===a)return b;return-1});Event.prototype.stopPropagation||(Event.prototype.stopPropagation=
            function(){this.cancelBubble=!0});window.atob||(window.atob=function(a){var b={},d,e=[],f="",h=String.fromCharCode,q=[[65,91],[97,123],[48,58],[43,44],[47,48]],g;for(g in q)for(d=q[g][0];d<q[g][1];d++)e.push(h(d));for(d=0;64>d;d++)b[e[d]]=d;for(d=0;d<a.length;d+=72){var p=e=0,n=a.substring(d,d+72);for(g=0;g<n.length;g++)for(q=b[n.charAt(g)],e=(e<<6)+q,p+=6;8<=p;)f+=h((e>>>(p-=8))%256)}return f});b.Td=function(a,c,d){this.ud=a;this.A=c;null==d&&(d=b.F.values(b.aa));this.Xg=d};b.Td.prototype.Fd=function(){var a=
            this.A.Wc(b.j.B.Ha.og);null==a&&(a=new b.Kb(g.fd.De()),this.A.Qe(b.j.B.Ha.og,a));for(var a=new b.pg(a.xb),c=0;c<this.Xg.length;c++){var d=this.Xg[c];switch(d){case b.aa.BROWSER:a[d]=this.ud.Jf;break;case b.aa.BROWSER_VERSION:a[d]=this.ud.version;break;case b.aa.OS:a[d]=this.ud.yj;break;case b.aa.RESOLUTION:a[d]=screen.width+"x"+screen.height;break;case b.aa.LANGUAGE:a[d]=this.ud.language;break;case b.aa.TIME_ZONE:a[d]=this.Uj();break;case b.aa.USER_AGENT:a[d]=this.ud.userAgent}}return a};b.Td.prototype.Uj=
            function(){var a=new Date;if("undefined"!==typeof Intl&&"function"===typeof Intl.DateTimeFormat)try{if("function"===typeof Intl.DateTimeFormat().resolvedOptions){var b=Intl.DateTimeFormat().resolvedOptions().timeZone;if(null!=b&&""!==b)return b}}catch(d){g.f.info("Intl.DateTimeFormat threw an error, probably https://bugs.chromium.org/p/chromium/issues/detail?id=811403, falling back to GTM offset: "+d.message)}return this.Sj(a.getTimezoneOffset())};b.Td.prototype.Sj=function(a){var b=parseInt(a/60),
            d=parseInt(a%60),e="GMT";0!==a&&(e=e+(0>a?"+":"-")+(("00"+Math.abs(b)).slice(-2)+":"+("00"+Math.abs(d)).slice(-2)));return e};b.Mb=function(a){this.Qb=a;this.pe=null;this.jh="geolocation"in navigator};b.Mb.jd="Location tracking is not supported in this browser.";b.Mb.prototype.Yj=function(a){if(document.hidden){this.fg();var b=this,d=function(){document.hidden||(document.removeEventListener("visibilitychange",d,!1),b.watchPosition())};document.addEventListener("visibilitychange",d,!1)}this.Qb.Pe(a.coords.latitude,
            a.coords.longitude,a.coords.accuracy,a.coords.altitude,a.coords.altitudeAccuracy)};b.Mb.prototype.Xj=function(a){a.code===a.PERMISSION_DENIED?g.f.info(a.message):g.f.error("Could not detect user location: "+a.code+" - "+a.message)};b.Mb.prototype.watchPosition=function(){this.jh?(this.fg(),this.pe=navigator.geolocation.watchPosition(this.Yj.bind(this),this.Xj.bind(this)),g.f.info("Requested Geolocation")):g.f.info(b.Mb.jd)};b.Mb.prototype.fg=function(){this.jh?null!=this.pe&&(navigator.geolocation.clearWatch(this.pe),
            this.pe=null,g.f.info("Stopped watching Geolocation")):g.f.info(b.Mb.jd)};b.PushManager=function(a,b,d,e,f,h,q){this.Qb=a;this.Wa=b;this.vd=d;this.Oj=e;this.xd=f||"/service-worker.js";this.gh=h;this.Oa=q;this.oe="serviceWorker"in navigator&&"undefined"!==typeof ServiceWorkerRegistration&&"showNotification"in ServiceWorkerRegistration.prototype&&"PushManager"in window;this.Bf="safari"in window&&"pushNotification"in window.safari};b.PushManager.jd="Push notifications are not supported in this browser.";
            b.PushManager.Bb="catch";b.PushManager.prototype.Tb=function(){return this.oe||this.Bf};b.PushManager.prototype.xc=function(){return this.Tb()&&null!=Notification&&null!=Notification.permission&&"denied"===Notification.permission};b.PushManager.prototype.Fe=function(){return this.Tb()&&null!=Notification&&null!=Notification.permission&&"granted"===Notification.permission};b.PushManager.prototype.Rf=function(a,c,d){d=this.gh||d;if(this.Tb())if(this.oe){var e=this;navigator.serviceWorker.register(this.xd).then(function(){e.xc()?
            c():navigator.serviceWorker.ready.then(function(d){d.pushManager.getSubscription().then(function(b){b?a():c()})[b.PushManager.Bb](function(){c()})})})[b.PushManager.Bb](function(){c()})}else null==d||""===d?g.f.error("You must supply the safariWebsitePushId argument in order to use isPushGranted on Safari"):"granted"===window.safari.pushNotification.permission(d).permission?a():c();else c()};b.PushManager.prototype.Gf=function(a,b){var c;"string"===typeof a?c=a:0!==a.endpoint.indexOf("https://android.googleapis.com/gcm/send")?
            c=a.endpoint:(c=a.endpoint,a.subscriptionId&&-1===a.endpoint.indexOf(a.subscriptionId)&&(c=a.endpoint+"/"+a.subscriptionId));var e=null,f=null;if(null!=a.getKey)try{e=btoa(String.fromCharCode.apply(null,new Uint8Array(a.getKey("p256dh")))),f=btoa(String.fromCharCode.apply(null,new Uint8Array(a.getKey("auth"))))}catch(q){if("invalid arguments"!==q.message)throw q;}var h;a=a.options&&(h=a.options.applicationServerKey)&&h.byteLength&&0<h.byteLength?btoa(String.fromCharCode.apply(null,new Uint8Array(h))).replace(/\\+/g,
            "-").replace(/\\//g,"_"):null;this.Qb.bg(c,e,f,a);c&&"function"===typeof b&&b(c,e,f)};b.PushManager.prototype.wh=function(){this.Qb.Jd(!0)};b.PushManager.prototype.vh=function(a,c,d,e){if("default"===c.permission){var f=this;window.safari.pushNotification.requestPermission(this.Oj,a,{api_key:this.Wa,device_id:this.vd.Fd().id},function(c){"granted"===c.permission&&f.Qb.eg(b.w.kd.OPTED_IN);f.vh(a,c,d,e)})}else"denied"===c.permission?(this.Qb.Jd(!1),g.f.info("The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard."),
            "function"===typeof e&&e(!1)):"granted"===c.permission&&(g.f.info("Device successfully subscribed to push."),this.Gf(c.deviceToken,d))};b.PushManager.prototype.mh=function(a,c,d,e){function f(c){switch(c){case "denied":g.f.info("Permission for push notifications was denied.");"function"===typeof e&&e(!1);break;case "default":c="Permission for push notifications was ignored.";h.xc()&&(c+=" The browser has automatically blocked further permission requests for a period (probably 1 week).");g.f.info(c);
            "function"===typeof e&&e(!0);break;case "granted":a.pushManager.subscribe(q).then(function(a){g.f.info("Device successfully subscribed to push.");l||h.Qb.eg(b.w.kd.OPTED_IN);h.Gf(a,d)})[b.PushManager.Bb](function(a){h.xc()?(g.f.info("Permission for push notifications was denied."),"function"===typeof e&&e(!1)):g.f.error("Push subscription failed. Be sure that your site is https and that your manifest file is correctly configured:"+a)});break;default:g.f.error("Received unexpected permission result "+
            c)}}var h=this,q={userVisibleOnly:!0};null!=c&&(q.applicationServerKey=c);var l=this.Fe(),p=!1;(c=Notification.requestPermission(function(a){p&&f(a)}))?c.then(function(a){f(a)}):p=!0};b.PushManager.prototype.subscribe=function(a,c,d){a=this.gh||a;if(!this.Tb())g.f.info(b.PushManager.jd);else if(this.oe)if(null!=window.location&&null!=window.location.pathname&&0!==window.location.pathname.indexOf(this.xd.substr(0,this.xd.lastIndexOf("/")+1)))g.f.error("Cannot subscribe to push from a path higher than the service worker location (tried to subscribe from "+
            window.location.pathname+" but service worker is at "+this.xd+")");else{var e=this;navigator.serviceWorker.register(this.xd).then(function(){e.xc()?(g.f.info("Notifications from this site are blocked. This may be a temporary embargo or a permanent denial."),e.Qb.Jd(!1),"function"===typeof d&&d()):navigator.serviceWorker.ready.then(function(a){a&&"function"===typeof a.update&&a.update();a.pushManager.getSubscription().then(function(f){var h=null;e.Oa&&null!=e.Oa.Jh()&&(h=g.qg.Ll(e.Oa.Jh()));f?null!=
            h&&f.options&&f.options.applicationServerKey&&f.options.applicationServerKey.byteLength&&0<f.options.applicationServerKey.byteLength&&!b.F.isEqual(h,new Uint8Array(f.options.applicationServerKey))?(12<f.options.applicationServerKey.byteLength?g.f.info("Device was already subscribed to push using a different VAPID provider, creating new subscription."):g.f.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."),
            f.unsubscribe().then(function(b){b?e.mh(a,h,c,d):(g.f.error("Failed to unsubscribe device from push while unsubscribing token from different VAPID provider."),"function"===typeof d&&d(!1))})[b.PushManager.Bb](function(a){g.f.error("Push unsubscription error while unsubscribing token from different VAPID provider: "+a);"function"===typeof d&&d(!1)})):(g.f.info("Device already subscribed to push, sending existing subscription to backend."),e.Gf(f,c)):e.mh(a,h,c,d)})[b.PushManager.Bb](function(a){g.f.error("Error checking current push subscriptions: "+
            a)})})})[b.PushManager.Bb](function(a){g.f.error("ServiceWorker registration failed: "+a)})}else if(this.Bf)if(null==a||""===a)g.f.error("You must supply the safariWebsitePushId argument in order to use registerAppboyPushMessages on Safari");else{var f=window.safari.pushNotification.permission(a);this.vh(a,f,c,d)}};b.PushManager.prototype.unsubscribe=function(a,c){if(this.Tb())if(this.oe){var d=this;navigator.serviceWorker.getRegistration().then(function(e){if(e)e.pushManager.getSubscription().then(function(f){f&&
            (d.wh(),f.unsubscribe().then(function(b){b?(g.f.info("Device successfully unsubscribed from push."),"function"===typeof a&&a()):(g.f.error("Failed to unsubscribe device from push."),"function"===typeof c&&c());e.unregister();g.f.info("Service worker successfully unregistered.")})[b.PushManager.Bb](function(a){g.f.error("Push unsubscription error: "+a);"function"===typeof c&&c()}))})[b.PushManager.Bb](function(a){g.f.error("Error unsubscribing from push: "+a);"function"===typeof c&&c()})})}else this.Bf&&
            (this.wh(),g.f.info("Device unsubscribed from push."),"function"===typeof a&&a());else g.f.info(b.PushManager.jd)};b.rb=function(a){this.A=a;this.ne=null};b.rb.prototype.pc=function(){if(null==this.ne){var a=this.A.na(b.j.B.C.Jg);this.ne=null!=a?b.Hc.ra(a):new b.Hc}return this.ne};b.rb.prototype.Ik=function(){return this.pc().Tf};b.rb.prototype.cl=function(a){null!=a&&null!=a.config&&(a=a.config,a.time>this.pc().Tf&&(this.ne=a=new b.Hc(a.time,a.events_blacklist,a.attributes_blacklist,a.purchases_blacklist,
            a.messaging_session_timeout,a.vapid_public_key),this.A.ga(b.j.B.C.Jg,a.X())))};b.rb.prototype.Ak=function(a){return-1!==this.pc().Fh.indexOf(a)};b.rb.prototype.Ah=function(a){return-1!==this.pc().Bh.indexOf(a)};b.rb.prototype.bl=function(a){return-1!==this.pc().Xh.indexOf(a)};b.rb.prototype.Jk=function(){return this.pc().Wf};b.rb.prototype.Jh=function(){return this.pc().pi};b.kc=function(a,b,d,e){this.A=a;this.H=b;this.Oa=d;this.wd=1E3;e=parseFloat(e);isNaN(e)&&(e=1800);e<this.wd/1E3&&(g.f.info("Specified session timeout of "+
            e+"s is too small, using the minimum session timeout of "+this.wd/1E3+"s instead."),e=this.wd/1E3);this.Qj=e};b.kc.prototype.nh=function(a,c){return new b.Event(this.H.U(),g.$.Ij,a,c.xb,{d:b.N.Cd(a-c.Dd)})};b.kc.prototype.Fk=function(){var a=this.A.Wc(b.j.B.Ha.jc);return null==a?null:a.xb};b.kc.prototype.Zk=function(){var a=(new Date).valueOf(),c=this.Oa.Jk();if(null==c)return!1;var d=this.A.na(b.j.B.C.Eg);(c=null==d||a-d>1E3*c)&&this.A.ga(b.j.B.C.Eg,a);return c};b.kc.prototype.Vj=function(a,b){return null==
            b?!0:a-b.Dd<this.wd?!1:b.Mf<a};b.kc.prototype.ka=function(){var a=(new Date).valueOf(),c=a+1E3*this.Qj,d=this.A.Wc(b.j.B.Ha.jc);if(this.Vj(a,d)){var e="Generating session start event with time "+a;if(null!=d){var f=d.Ge;f-d.Dd<this.wd&&(f=d.Dd+this.am);this.A.Ne(this.nh(f,d));e+=" (old session ended "+f+")"}e+=". Will expire "+c.valueOf();g.f.info(e);c=new b.Kb(g.fd.De(),c);this.A.Ne(new b.Event(this.H.U(),g.$.Mg,a,c.xb));this.A.Qe(b.j.B.Ha.jc,c);return c.xb}d.Ge=a;d.Mf=c;this.A.Qe(b.j.B.Ha.jc,d);
            return d.xb};b.kc.prototype.rk=function(){var a=this.A.Wc(b.j.B.Ha.jc);null!=a&&(this.A.fl(b.j.B.Ha.jc),this.A.Ne(this.nh((new Date).valueOf(),a)))};b.ee=function(){};b.j=function(a,b){this.le=a;this.Aa=b};b.ee.tk=function(a,c){var d=!1;try{if(localStorage&&localStorage.getItem)try{localStorage.setItem(b.j.B.C.uf,!0),localStorage.getItem(b.j.B.C.uf)&&(localStorage.removeItem(b.j.B.C.uf),d=!0)}catch(f){if(("QuotaExceededError"===f.name||"NS_ERROR_DOM_QUOTA_REACHED"===f.name)&&0<localStorage.length)d=
            !0;else throw f;}}catch(f){g.f.info("Local Storage not supported!")}var e=b.ee.Rj();c=new b.j.Sd(a,e&&!c,d);return new b.j(c,d?new b.j.Fc(a):new b.j.Ec)};b.ee.Rj=function(){return navigator.cookieEnabled||"cookie"in document&&(0<document.cookie.length||-1<(document.cookie="test").indexOf.call(document.cookie,"test"))};b.j.B={Ha:{Tg:"ab.storage.userId",og:"ab.storage.deviceId",jc:"ab.storage.sessionId"},C:{uf:"ab.test",Ld:"ab.storage.events",$b:"ab.storage.attributes",cf:"ab.storage.device",rf:"ab.storage.pushToken",
            kf:"ab.storage.newsFeed",hf:"ab.storage.lastNewsFeedRefresh",Yc:"ab.storage.cardImpressions",gj:"ab.storage.lastInAppMessageRefresh",Jg:"ab.storage.serverConfig",vf:"ab.storage.triggers",ij:"ab.storage.lastTriggeredTime",hj:"ab.storage.lastTriggeredTimesById",jj:"ab.storage.lastTriggerEventDataById",Eg:"ab.storage.messagingSessionStart",Ze:"ab.storage.cc",Ye:"ab.storage.ccLastFullSync",Xe:"ab.storage.ccLastCardUpdated",$c:"ab.storage.ccImpressions",Zc:"ab.storage.ccDismissals",Wd:"ab.storage.lastDisplayedTriggerTimesById",
            gf:"ab.storage.lastDisplayedTriggerTime",rd:"ab.storage.triggerFireInstancesById"},mf:"ab.optOut"};b.j.prototype.Qe=function(a,c){var d=c;null!=c&&c instanceof b.Kb&&(d=c.X());this.le.lb(a,d)};b.j.prototype.Wc=function(a){return b.Kb.ra(this.le.Pa(a))};b.j.prototype.fl=function(a){this.le.remove(a)};b.j.prototype.Ca=function(a){if(null==a||0===a.length)return!1;b.F.isArray(a)||(a=[a]);var c=this.Aa.Pa(b.j.B.C.Ld);null!=c&&b.F.isArray(c)||(c=[]);for(var d=0;d<a.length;d++)c.push(a[d].X());return this.Aa.lb(b.j.B.C.Ld,
            c)};b.j.prototype.Ne=function(a){null==a||this.Ca([a])};b.j.prototype.Eh=function(){var a=this.Aa.Pa(b.j.B.C.Ld);this.Aa.remove(b.j.B.C.Ld);null==a&&(a=[]);var c=[],d=!1,e=null;if(b.F.isArray(a))for(var f=0;f<a.length;f++)b.Event.Oh(a[f])?c.push(b.Event.ra(a[f])):e=f;else d=!0;if(d||null!=e)f="Stored events could not be deserialized as ab.Events",d&&(f+=", was "+Object.prototype.toString.call(a)+" not an array"),null!=e&&(f+=", value at index "+e+" does not look like an event"),f+=", serialized values were of type "+
            typeof a+": "+JSON.stringify(a),c.push(new b.Event(null,g.$.ej,(new Date).valueOf(),null,{e:f}));return c};b.j.prototype.ga=function(a,c){b.F.mb(b.j.B.C,a,"StorageManager cannot store object.","ab.StorageManager.KEYS.OBJECTS")&&this.Aa.lb(a,c)};b.j.prototype.na=function(a){return b.F.mb(b.j.B.C,a,"StorageManager cannot retrieve object.","ab.StorageManager.KEYS.OBJECTS")?this.Aa.Pa(a):!1};b.j.prototype.ta=function(a){b.F.mb(b.j.B.C,a,"StorageManager cannot remove object.","ab.StorageManager.KEYS.OBJECTS")&&
            this.Aa.remove(a)};b.j.prototype.clearData=function(){for(var a=b.F.keys(b.j.B.Ha),c=b.F.keys(b.j.B.C),d=0;d<a.length;d++)this.le.remove(b.j.B.Ha[a[d]]);for(a=0;a<c.length;a++)this.Aa.remove(b.j.B.C[c[a]])};b.j.prototype.Df=function(a){return a||"ab.storage.attributes.anonymous_user"};b.j.prototype.Th=function(a){var c=this.Aa.Pa(b.j.B.C.$b);null==c&&(c={});var d=this.Df(a[b.w.td]),e;for(e in a)e===b.w.td||null!=c[d]&&null!=c[d][e]||this.bi(a[b.w.td],e,a[e])};b.j.prototype.bi=function(a,c,d){var e=
            this.Aa.Pa(b.j.B.C.$b);null==e&&(e={});var f=this.Df(a),h=e[f];null==h&&(h={},null!=a&&(h[b.w.td]=a));if(c===b.w.kg){null==h[c]&&(h[c]={});for(var g in d){a=d[g];var l=h[c][g],p=null;if(S(a)){if(void 0!==a[b.w.ac]){p=fa(a[b.w.ac],l);if(!p&&null!==p)return!1;l=p}if(void 0!==a[b.w.La]){p=ea(a[b.w.La],l);if(!p&&null!==p)return!1;l=p}if(void 0!==a[b.w.Ma]&&(p=da(a[b.w.Ma],l),!p&&null!==p))return!1}else p=d[g];h[c][g]=p}}else h[c]=d;e[f]=h;return this.Aa.lb(b.j.B.C.$b,e)};b.j.prototype.zk=function(){var a=
            this.Aa.Pa(b.j.B.C.$b);this.Aa.remove(b.j.B.C.$b);var c=[],d;for(d in a)null!=a[d]&&c.push(a[d]);return c};b.j.prototype.fk=function(a){var c=this.Aa.Pa(b.j.B.C.$b);if(null!=c){var d=this.Df(null),e=c[d];null!=e&&(c[d]=void 0,this.Aa.lb(b.j.B.C.$b,c),e[b.w.td]=a,this.Th(e))}d=this.Wc(b.j.B.Ha.jc);c=null;null!=d&&(c=d.xb);d=this.Eh();if(null!=d)for(e=0;e<d.length;e++){var f=d[e];null==f.Yb&&f.sessionId==c&&(f.Yb=a);this.Ne(f)}};b.j.Fc=function(a){this.Wa=a;this.Gh=10};b.j.Fc.prototype.qc=function(a){return a+
            "."+this.Wa};b.j.Fc.prototype.lb=function(a,b){b={v:b};try{return localStorage.setItem(this.qc(a),JSON.stringify(b)),!0}catch(d){return g.f.info("Storage failure: "+d.message),!1}};b.j.Fc.prototype.Pa=function(a){try{var b=JSON.parse(localStorage.getItem(this.qc(a)));return null==b?null:b.v}catch(d){return g.f.info("Storage retrieval failure: "+d.message),null}};b.j.Fc.prototype.remove=function(a){try{localStorage.removeItem(this.qc(a))}catch(c){return g.f.info("Storage removal failure: "+c.message),
            !1}};b.j.Ta=function(a,b){this.Wa=a;this.fh=this.Tj();this.Yg=10518980;this.ih=!!b};b.j.Ta.prototype.qc=function(a){return null!=this.Wa?a+"."+this.Wa:a};b.j.Ta.prototype.Tj=function(){for(var a=0,b=document.domain,d=b.split("."),e="ab._gd"+(new Date).valueOf();a<d.length-1&&-1===document.cookie.indexOf(e+"="+e);)a++,b="."+d.slice(-1-a).join("."),document.cookie=e+"="+e+";domain="+b+";";document.cookie=e+"=;expires="+(new Date(0)).toGMTString()+";domain="+b+";";return b};b.j.Ta.prototype.Hk=function(){var a=
            new Date;a.setTime(a.getTime()+6E4*this.Yg);return a.getFullYear()};b.j.Ta.prototype.ak=function(){for(var a=b.F.values(b.j.B.Ha),c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1);for(var f=!1,h=0;h<a.length;h++)if(0===e.indexOf(a[h])){f=!0;break}f&&(e=e.split("=")[0],-1===e.indexOf("."+this.Wa)&&this.uh(e))}};b.j.Ta.prototype.lb=function(a,b){this.ak();var c=new Date;c.setTime(c.getTime()+6E4*this.Yg);var c="expires="+c.toUTCString(),e="domain="+
            this.fh;b=this.ih?b:encodeURIComponent(JSON.stringify(b));a=this.qc(a)+"="+b+";"+c+";"+e+";path=/";if(4093<=a.length)return g.f.info("Storage failure: string is "+a.length+" chars which is too large to store as a cookie."),!1;document.cookie=a;return!0};b.j.Ta.prototype.Pa=function(a){for(var b=[],d=this.qc(a)+"=",e=document.cookie.split(";"),f=0;f<e.length;f++){for(var h=e[f];" "===h.charAt(0);)h=h.substring(1);if(0===h.indexOf(d))try{var q;q=this.ih?h.substring(d.length,h.length):JSON.parse(decodeURIComponent(h.substring(d.length,
            h.length)));b.push(q)}catch(l){return g.f.info("Storage retrieval failure: "+l.message),this.remove(a),null}}return 0<b.length?b[b.length-1]:null};b.j.Ta.prototype.remove=function(a){this.uh(this.qc(a))};b.j.Ta.prototype.uh=function(a){a=a+"=;expires="+(new Date(0)).toGMTString();document.cookie=a;document.cookie=a+";path=/";document.cookie=a+";path="+document.location.pathname;a=a+";domain="+this.fh;document.cookie=a;document.cookie=a+";path=/";document.cookie=a+";path="+document.location.pathname};
            b.j.Ec=function(){this.Af={};this.dh=5242880;this.Gh=3};b.j.Ec.prototype.lb=function(a,b){var c={value:b};b=this.bk(b);if(b>this.dh)return g.f.info("Storage failure: object is \\u2248"+b+" bytes which is greater than the max of "+this.dh),!1;this.Af[a]=c;return!0};b.j.Ec.prototype.bk=function(a){var b=[];a=[a];for(var d=0;a.length;){var e=a.pop();if("boolean"===typeof e)d+=4;else if("string"===typeof e)d+=2*e.length;else if("number"===typeof e)d+=8;else if("object"===typeof e&&-1===b.indexOf(e)){b.push(e);
            for(var f in e)a.push(e[f])}}return d};b.j.Ec.prototype.Pa=function(a){a=this.Af[a];return null==a?null:a.value};b.j.Ec.prototype.remove=function(a){this.Af[a]=null};b.j.Sd=function(a,c,d){this.ub=[];c&&this.ub.push(new b.j.Ta(a));d&&this.ub.push(new b.j.Fc(a));this.ub.push(new b.j.Ec)};b.j.Sd.prototype.lb=function(a,b){for(var c=!0,e=0;e<this.ub.length;e++)c=this.ub[e].lb(a,b)&&c;return c};b.j.Sd.prototype.Pa=function(a){for(var b=0;b<this.ub.length;b++){var d=this.ub[b].Pa(a);if(null!=d)return d}return null};
            b.j.Sd.prototype.remove=function(a){for(var b=0;b<this.ub.length;b++)this.ub[b].remove(a)};b.Va=function(){this.yd={}};b.Va.prototype.kb=function(a){if("function"!==typeof a)return null;var b=g.fd.De();this.yd[b]=a;return b};b.Va.prototype.Fa=function(a){delete this.yd[a]};b.Va.prototype.ya=function(){this.yd={}};b.Va.prototype.Ea=function(a){var b=[],d;for(d in this.yd)b.push(this.yd[d](a))};b.nc=function(a,b){this.Oa=a;this.A=b};b.nc.prototype.U=function(){var a=this.A.Wc(b.j.B.Ha.Tg);return null!=
            a?a.xb:null};b.nc.prototype.Ok=function(a){var c=null==this.U();this.A.Qe(b.j.B.Ha.Tg,new b.Kb(a));c&&this.A.fk(a)};b.nc.prototype.Xc=function(a,c){if(this.Oa.Ah(a))return g.f.info('Custom Attribute "'+a+'" is blacklisted, ignoring.'),!1;var d={};d[a]=c;return this.ea(b.w.kg,d)};b.nc.prototype.ea=function(a,b){return this.A.bi(this.U(),a,b)};b.nc.prototype.bg=function(a,c,d,e){this.ea("push_token",a);this.ea("custom_push_public_key",c);this.ea("custom_push_user_auth",d);this.ea("custom_push_vapid_public_key",
            e);var f=g.Z.ob.ic,h=new g.Z(f,g.f);this.A.ga(b.j.B.C.rf,[a,c,d,e]);h.setItem(f.oa.qf,f.be,!0)};b.nc.prototype.Jd=function(a){this.ea("push_token",null);this.ea("custom_push_public_key",null);this.ea("custom_push_user_auth",null);this.ea("custom_push_vapid_public_key",null);if(a){a=g.Z.ob.ic;var c=new g.Z(a,g.f);this.A.ta(b.j.B.C.rf);c.setItem(a.oa.qf,a.be,!1)}};b.We={aj:"invalid_api_key",Ai:"blacklisted",wj:"no_device_identifier"};b.b=function(a,b,d,e,f,h,g,l,p,n,k,r,m,t,v,w){this.id=a;this.viewed=
            b||!1;this.title=d||"";this.imageUrl=e;this.description=f||"";this.created=h||null;this.updated=g||null;this.categories=l||[];this.expiresAt=p||null;this.url=n;this.linkText=k;r=parseFloat(r);this.aspectRatio=isNaN(r)?null:r;this.extras=m;this.pinned=t||!1;this.dismissible=v||!1;this.dismissed=!1;this.clicked=w||!1;this.xf=this.Ka=null};b.b.Fg=-1;b.b.prototype.te=function(){null==this.Ka&&(this.Ka=new b.Va);return this.Ka};b.b.prototype.ue=function(){null==this.xf&&(this.xf=new b.Va);return this.xf};
            b.b.prototype.Se=function(a){return this.te().kb(a)};b.b.prototype.ei=function(a){return this.ue().kb(a)};b.b.prototype.Fa=function(a){this.te().Fa(a);this.ue().Fa(a)};b.b.prototype.ya=function(){this.te().ya();this.ue().ya()};b.b.prototype.ag=function(){this.viewed=!0};b.b.prototype.Ac=function(){this.clicked=this.viewed=!0;this.te().Ea()};b.b.prototype.Uc=function(){return this.dismissible&&!this.dismissed?(this.dismissed=!0,this.ue().Ea(),!0):!1};b.b.R={Od:"captioned_image",Pg:"text_announcement",
            Zd:"short_news",Md:"banner_image",$e:"control"};b.b.I={Hb:"id",Ob:"v",Fb:"db",Hg:"r",fb:"ca",qb:"p",cb:"ea",pb:"e",mc:"tp",Ib:"i",lc:"tt",dc:"ds",URL:"u",Lb:"dm",Ab:"ar"};b.b.D={Hb:"id",Ob:"v",Fb:"db",Rd:"cr",fb:"ca",qb:"p",Pd:"t",cb:"ea",pb:"e",mc:"tp",Ib:"i",lc:"tt",dc:"ds",URL:"u",Lb:"dm",Ab:"ar",Qd:"cl"};b.b.Sl={Pl:"ADVERTISING",Ql:"ANNOUNCEMENTS",Vl:"NEWS",Zl:"SOCIAL"};b.Cb=function(a,c,d,e,f,h,g,l,p,n,k,r,m,t,v,w){b.b.call(this,a,c,d,e,f,h,g,l,p,n,k,r,m,t,v,w)};b.Ya(b.Cb,b.b);b.Cb.prototype.X=
            function(){var a={};a[b.b.D.mc]=b.b.R.Od;a[b.b.D.Hb]=this.id;a[b.b.D.Ob]=this.viewed;a[b.b.D.lc]=this.title;a[b.b.D.Ib]=this.imageUrl;a[b.b.D.dc]=this.description;a[b.b.D.fb]=this.updated;a[b.b.D.Rd]=this.created;a[b.b.D.Pd]=this.categories;a[b.b.D.cb]=this.expiresAt;a[b.b.D.URL]=this.url;a[b.b.D.Lb]=this.linkText;a[b.b.D.Ab]=this.aspectRatio;a[b.b.D.pb]=this.extras;a[b.b.D.qb]=this.pinned;a[b.b.D.Fb]=this.dismissible;a[b.b.D.Qd]=this.clicked;return a};b.Db=function(a,c,d,e,f,h,g,l,p,n,k,r,m,t,v,
            w){b.b.call(this,a,c,d,e,f,h,g,l,p,n,k,r,m,t,v,w)};b.Ya(b.Db,b.b);b.Db.prototype.X=function(){var a={};a[b.b.D.mc]=b.b.R.Zd;a[b.b.D.Hb]=this.id;a[b.b.D.Ob]=this.viewed;a[b.b.D.lc]=this.title;a[b.b.D.Ib]=this.imageUrl;a[b.b.D.dc]=this.description;a[b.b.D.fb]=this.updated;a[b.b.D.Rd]=this.created;a[b.b.D.Pd]=this.categories;a[b.b.D.cb]=this.expiresAt;a[b.b.D.URL]=this.url;a[b.b.D.Lb]=this.linkText;a[b.b.D.Ab]=this.aspectRatio;a[b.b.D.pb]=this.extras;a[b.b.D.qb]=this.pinned;a[b.b.D.Fb]=this.dismissible;
            a[b.b.D.Qd]=this.clicked;return a};b.Banner=function(a,c,d,e,f,h,g,l,p,n,k,r,m,t){b.b.call(this,a,c,null,d,null,e,f,h,g,l,p,n,k,r,m,t)};b.Ya(b.Banner,b.b);b.Banner.prototype.X=function(){var a={};a[b.b.D.mc]=b.b.R.Md;a[b.b.D.Hb]=this.id;a[b.b.D.Ob]=this.viewed;a[b.b.D.Ib]=this.imageUrl;a[b.b.D.fb]=this.updated;a[b.b.D.Rd]=this.created;a[b.b.D.Pd]=this.categories;a[b.b.D.cb]=this.expiresAt;a[b.b.D.URL]=this.url;a[b.b.D.Lb]=this.linkText;a[b.b.D.Ab]=this.aspectRatio;a[b.b.D.pb]=this.extras;a[b.b.D.qb]=
            this.pinned;a[b.b.D.Fb]=this.dismissible;a[b.b.D.Qd]=this.clicked;return a};b.nb=function(a,c,d,e,f,h){b.b.call(this,a,c,null,null,null,null,d,null,e,null,null,null,f,h,null)};b.Ya(b.nb,b.b);b.nb.prototype.X=function(){var a={};a[b.b.D.mc]=b.b.R.$e;a[b.b.D.Hb]=this.id;a[b.b.D.Ob]=this.viewed;a[b.b.D.fb]=this.updated;a[b.b.D.cb]=this.expiresAt;a[b.b.D.pb]=this.extras;a[b.b.D.qb]=this.pinned;return a};b.b.prototype.Kh=function(a){if(null==a||a[b.b.I.Hb]!==this.id)return!0;if(a[b.b.I.Hg])return!1;if(null!=
            a[b.b.I.fb]&&null!=this.updated&&a[b.b.I.fb]<b.N.Cd(this.updated.valueOf()))return!0;a[b.b.I.Ob]&&!this.viewed&&(this.viewed=!0);null!=a[b.b.I.lc]&&(this.title=a[b.b.I.lc]);null!=a[b.b.I.Ib]&&(this.imageUrl=a[b.b.I.Ib]);null!=a[b.b.I.dc]&&(this.description=a[b.b.I.dc]);if(null!=a[b.b.I.fb]){var c=b.N.gb(a[b.b.I.fb]);null!=c&&(this.updated=c)}null!=a[b.b.I.cb]&&(this.expiresAt=a[b.b.I.cb]===b.b.Fg?null:b.N.gb(a[b.b.I.cb]));null!=a[b.b.I.URL]&&(this.url=a[b.b.I.URL]);null!=a[b.b.I.Lb]&&(this.linkText=
            a[b.b.I.Lb]);null!=a[b.b.I.Ab]&&(c=parseFloat(a[b.b.I.Ab]),this.aspectRatio=isNaN(c)?null:c);null!=a[b.b.I.pb]&&(this.extras=a[b.b.I.pb]);null!=a[b.b.I.qb]&&(this.pinned=a[b.b.I.qb]);null!=a[b.b.I.Fb]&&(this.dismissible=a[b.b.I.Fb]);return!0};b.b.Of=function(a){if(a[b.b.I.Hg])return null;var c=a[b.b.I.Hb],d=a[b.b.I.mc],e=a[b.b.I.Ob],f=a[b.b.I.lc],h=a[b.b.I.Ib],g=a[b.b.I.dc],l=b.N.gb(a[b.b.I.fb]),p;p=a[b.b.I.cb]===b.b.Fg?null:b.N.gb(a[b.b.I.cb]);var n=a[b.b.I.URL],k=a[b.b.I.Lb],r=a[b.b.I.Ab],m=a[b.b.I.pb],
            t=a[b.b.I.qb];a=a[b.b.I.Fb];return d===b.b.R.Pg||d===b.b.R.Zd?new b.Db(c,e,f,h,g,null,l,null,p,n,k,r,m,t,a):d===b.b.R.Od?new b.Cb(c,e,f,h,g,null,l,null,p,n,k,r,m,t,a):d===b.b.R.Md?new b.Banner(c,e,h,null,l,null,p,n,k,r,m,t,a):d===b.b.R.$e?new b.nb(c,e,l,p,m,t):null};b.b.Bk=function(a){var c=a.id,d=a.type,e=a.viewed,f=a.title,h=a.image,g=a.description,l=b.N.gb(a.created),p=b.N.gb(a.updated),n=a.categories,k=b.N.gb(a.expires_at),r=a.url,m=a.domain,t=a.aspect_ratio;a=a.extras;return d===b.b.R.Pg||d===
            b.b.R.Zd?new b.Db(c,e,f,h,g,l,p,n,k,r,m,t,a,!1,!1):d===b.b.R.Od?new b.Cb(c,e,f,h,g,l,p,n,k,r,m,t,a,!1,!1):d===b.b.R.Md?new b.Banner(c,e,h,l,p,n,k,r,m,t,a,!1,!1):null};b.b.ra=function(a){var c=a[b.b.D.Hb],d=a[b.b.D.mc],e=a[b.b.D.Ob],f=a[b.b.D.lc],h=a[b.b.D.Ib],g=a[b.b.D.dc],l=b.N.Vc(a[b.b.D.Rd]),p=b.N.Vc(a[b.b.D.fb]),n=a[b.b.D.Pd],k=b.N.Vc(a[b.b.D.cb]),r=a[b.b.D.URL],m=a[b.b.D.Lb],t=a[b.b.D.Ab],v=a[b.b.D.pb],w=a[b.b.D.qb],y=a[b.b.D.Fb];a=a[b.b.D.Qd];if(d===b.b.R.Zd)return new b.Db(c,e,f,h,g,l,p,n,
            k,r,m,t,v,w,y,a);if(d===b.b.R.Od)return new b.Cb(c,e,f,h,g,l,p,n,k,r,m,t,v,w,y,a);if(d===b.b.R.Md)return new b.Banner(c,e,h,l,p,n,k,r,m,t,v,w,y,a);if(d===b.b.R.$e)return new b.nb(c,e,p,k,v,w)};b.cc=function(a){this.triggerId=a};b.cc.V=function(a){return new this(a.trigger_id)};b.aa={BROWSER:"browser",BROWSER_VERSION:"browserVersion",OS:"os",RESOLUTION:"resolution",LANGUAGE:"language",TIME_ZONE:"timeZone",USER_AGENT:"userAgent"};b.pg=function(a){this.id=a};b.pg.prototype.rc=function(){var a={};null!=
            this[b.aa.BROWSER]&&(a.browser=this[b.aa.BROWSER]);null!=this[b.aa.BROWSER_VERSION]&&(a.browser_version=this[b.aa.BROWSER_VERSION]);null!=this[b.aa.OS]&&(a.os_version=this[b.aa.OS]);null!=this[b.aa.RESOLUTION]&&(a.resolution=this[b.aa.RESOLUTION]);null!=this[b.aa.LANGUAGE]&&(a.locale=this[b.aa.LANGUAGE]);null!=this[b.aa.TIME_ZONE]&&(a.time_zone=this[b.aa.TIME_ZONE]);null!=this[b.aa.USER_AGENT]&&(a.user_agent=this[b.aa.USER_AGENT]);return a};b.Event=function(a,c,d,e,f){this.Yb=a;this.type=c;this.time=
            b.N.El(d);this.sessionId=e;this.data=f};b.Event.prototype.rc=function(){var a={name:this.type,time:b.N.Cd(this.time),data:this.data||{},session_id:this.sessionId};null!=this.Yb&&(a.user_id=this.Yb);return a};b.Event.prototype.X=function(){return{u:this.Yb,t:this.type,ts:this.time,s:this.sessionId,d:this.data}};b.Event.Oh=function(a){return null!=a&&b.F.Uk(a)&&null!=a.t&&""!==a.t};b.Event.ra=function(a){return new b.Event(a.u,a.t,a.ts,a.s,a.d)};b.J=function(a,b){this.cards=a;this.lastUpdated=b};b.J.prototype.Ih=
            function(){for(var a=0,b=0;b<this.cards.length;b++)this.cards[b].viewed||a++;return a};b.va=function(a,c){b.J.call(this,a,c)};b.Ya(b.va,b.J);b.va.prototype.Lk=b.J.prototype.Ih;b.Ud=function(a,b,d,e,f,h){this.Yb=a;this.gl=b;this.message=d;this.Wk=e;this.yk=f;this.appVersion=h};b.Ud.prototype.rc=function(){var a={message:this.message,is_bug:!!this.Wk,reply_to:this.gl,device:this.yk,app_version:this.appVersion};null!=this.Yb&&(a.user_id=this.Yb);return a};b.Ud.Ml=function(a,c){return b.T.Nh(a)?null==
            c||""===c.trim()?(g.f.error("Feedback requires a non-empty message."),!1):!0:(g.f.error('Feedback requires a valid RFC-5322 email address - "'+a+'" is not valid.'),!1)};b.Kb=function(a,b,d){null==a&&(a=g.fd.De());d=parseInt(d);if(isNaN(d)||0===d)d=(new Date).valueOf();this.xb=a;this.Dd=d;this.Ge=(new Date).valueOf();this.Mf=b};b.Kb.prototype.X=function(){return{g:this.xb,e:this.Mf,c:this.Dd,l:this.Ge}};b.Kb.ra=function(a){if(null==a||null==a.g)return null;var c=new b.Kb(a.g,a.e,a.c);c.Ge=a.l;return c};
            b.h=function(a,c,d,e,f,h,g,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,B,D,H,G,I,E,J,K,N){this.message=a;this.messageAlignment=c||b.h.wf.CENTER;this.duration=m||5E3;this.slideFrom=d||b.h.ce.BOTTOM;this.extras=e||[];this.campaignId=f;this.cardId=h;this.triggerId=g;this.clickAction=l||b.h.Eb.NONE;this.uri=p;this.openTarget=n||b.h.md.NONE;this.dismissType=k||b.h.Dc.AUTO_DISMISS;this.icon=u;this.imageUrl=t;this.imageStyle=v||b.h.Vd.TOP;this.iconColor=w||b.h.bb.fe;this.iconBackgroundColor=y||b.h.bb.ig;this.backgroundColor=
            x||b.h.bb.fe;this.textColor=A||b.h.bb.Ve;this.closeButtonColor=z||b.h.bb.Ve;this.animateIn=C;null==this.animateIn&&(this.animateIn=!0);this.animateOut=F;null==this.animateOut&&(this.animateOut=!0);this.header=B;this.headerAlignment=D||b.h.wf.CENTER;this.headerTextColor=H||b.h.bb.Ve;this.frameColor=G||b.h.bb.Ej;this.buttons=I||[];this.cropType=E||b.h.bd.Ul;this.orientation=J;this.htmlId=K;this.css=N;this.Zg=this.oc=this.$g=!1;this.Ka=new b.Va;this.ie=new b.Va};b.h.prototype.Tc=function(){return!0};
            b.h.prototype.oi=function(){return this.Tc()};b.h.prototype.Ue=function(){return null!=this.htmlId&&4<this.htmlId.length};b.h.prototype.ib=function(){return this.Ue()&&null!=this.css&&0<this.css.length};b.h.prototype.Re=function(){if(this.Ue()&&this.ib())return this.htmlId+"-css"};b.h.prototype.Se=function(a){return this.Ka.kb(a)};b.h.prototype.ei=function(a){return this.ie.kb(a)};b.h.prototype.Fa=function(a){this.Ka.Fa(a);this.ie.Fa(a)};b.h.prototype.ya=function(){this.Ka.ya();this.ie.ya()};b.h.prototype.ag=
            function(){return this.$g?!1:this.$g=!0};b.h.prototype.Ac=function(){return this.oc?!1:(this.oc=!0,this.Ka.Ea(),!0)};b.h.prototype.Uc=function(){return this.Zg?!1:(this.Zg=!0,this.ie.Ea(),!0)};b.h.bb={Ve:4278190080,fe:4294967295,ig:4278219733,sj:3858759680,Ej:3224580915};b.h.wa={Zi:"hd",wi:"ias",xj:"of",Li:"do",sd:"umt",qd:"tf",vg:"te"};b.h.Da=function(a,c,d,e,f,h){this.text=a||"";this.backgroundColor=c||b.h.bb.ig;this.textColor=d||b.h.bb.fe;this.clickAction=e||b.h.Eb.NEWS_FEED;this.uri=f;null==h&&
            (h=b.h.Da.ng);this.id=h;this.oc=!1;this.Ka=new b.Va};b.h.Da.ng=-1;b.h.Da.prototype.Se=function(a){return this.Ka.kb(a)};b.h.Da.prototype.Fa=function(a){this.Ka.Fa(a)};b.h.Da.prototype.ya=function(){this.Ka.ya()};b.h.Da.prototype.Ac=function(){return this.oc?!1:(this.oc=!0,this.Ka.Ea(),!0)};b.h.Da.V=function(a){return new b.h.Da(a.text,a.bg_color,a.text_color,a.click_action,a.uri,a.id)};b.h.ce={TOP:"TOP",BOTTOM:"BOTTOM"};b.h.Eb={NEWS_FEED:"NEWS_FEED",URI:"URI",NONE:"NONE"};b.h.Dc={AUTO_DISMISS:"AUTO_DISMISS",
            MANUAL:"SWIPE"};b.h.md={NONE:"NONE",BLANK:"BLANK"};b.h.Vd={TOP:"TOP",GRAPHIC:"GRAPHIC"};b.h.Ia={PORTRAIT:"PORTRAIT",LANDSCAPE:"LANDSCAPE"};b.h.wf={START:"START",CENTER:"CENTER",END:"END"};b.h.bd={CENTER_CROP:"CENTER_CROP",FIT_CENTER:"FIT_CENTER"};b.h.R={Hj:"SLIDEUP",qj:"MODAL",rj:"MODAL_STYLED",Vi:"FULL",Yi:"WEB_HTML"};b.sb=function(a,c,d,e,f,h,g,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F){x=x||b.h.bb.fe;y=y||b.h.bb.sj;b.h.call(this,a,c,d,e,f,h,g,l,p,n,k,m,u,t,null,v,w,y,x,x,A,z,void 0,void 0,void 0,void 0,void 0,
            void 0,void 0,C,F)};b.Ya(b.sb,b.h);b.sb.prototype.R=b.h.R.Hj;b.sb.prototype.Tc=function(){return!1};b.gc=function(a,c,d,e,f,h,g,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,B,D,H,G,I,E,J){n=n||b.h.Dc.MANUAL;I=I||b.h.bd.FIT_CENTER;b.h.call(this,a,c,null,d,e,f,h,g,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,B,D,H,G,I,void 0,E,J)};b.Ya(b.gc,b.h);b.gc.prototype.R=b.h.R.qj;b.fc=function(a,c,d,e,f,h,g,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,B,D,H,G,I,E,J,K){n=n||b.h.Dc.MANUAL;E=E||b.h.Ia.PORTRAIT;I=I||b.h.bd.CENTER_CROP;b.h.call(this,a,c,null,
            d,e,f,h,g,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,B,D,H,G,I,E,J,K)};b.Ya(b.fc,b.h);b.fc.prototype.R=b.h.R.Vi;b.Ua=function(a,c,d,e,f,h,g,l,p,n,k,m){h=h||b.h.Dc.MANUAL;b.h.call(this,a,null,null,c,d,e,f,null,null,null,h,g,null,null,null,null,null,null,null,null,l,p,null,null,null,n,void 0,void 0,void 0,k,m)};b.Ya(b.Ua,b.h);b.Ua.prototype.R=b.h.R.Yi;b.Ua.prototype.oi=function(){return!1};b.Ua.prototype.Ac=function(a){return this.oc?!1:(this.oc=!0,this.Ka.Ea(a),!0)};b.h.V=function(a){if(a.is_control)return b.cc.V(a);
            var c=a.type;null!=c&&(c=c.toUpperCase());var d=a.message,e=a.text_align_message,f=a.slide_from,h=a.extras,q=a.campaign_id,l=a.card_id,p=a.trigger_id,n=a.click_action,k=a.uri,m=a.open_target,u=a.message_close,t=a.duration,v=a.icon,w=a.image_url,y=a.image_style,x=a.icon_color,A=a.icon_bg_color,z=a.bg_color,C=a.text_color,F=a.close_btn_color,B=a.header,D=a.text_align_header,H=a.header_text_color,G=a.frame_color,I=[],E=a.btns;null==E&&(E=[]);for(var J=0;J<E.length;J++)I.push(b.h.Da.V(E[J]));var E=a.crop_type,
            J=a.orientation,K=a.animate_in,N=a.animate_out,L=a.html_id;a=a.css;if(null==L||""===L||null==a||""===a)a=L=void 0;if(c===b.gc.prototype.R||c===b.h.R.rj)return new b.gc(d,e,h,q,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,K,N,B,D,H,G,I,E,L,a);if(c===b.fc.prototype.R)return new b.fc(d,e,h,q,l,p,n,k,m,u,t,v,w,y,x,A,z,C,F,K,N,B,D,H,G,I,E,J,L,a);if(c===b.sb.prototype.R)return new b.sb(d,e,f,h,q,l,p,n,k,m,u,t,v,w,x,A,z,C,K,N,L,a);if(c===b.Ua.prototype.R)return new b.Ua(d,h,q,l,p,u,t,K,N,G,L,a);g.f.error("Ignoring message with unknown type "+
            c)};b.Ja=function(){this.L=!1;this.K=[]};b.Hc=function(a,b,d,e,f,h){this.Tf=a||0;this.Fh=b||[];this.Bh=d||[];this.Xh=e||[];this.Wf=f;if(null==f||""===f)this.Wf=null;this.pi=h||null};b.Hc.prototype.X=function(){return{s:"2.2.7",l:this.Tf,e:this.Fh,a:this.Bh,p:this.Xh,m:this.Wf,v:this.pi}};b.Hc.ra=function(a){var c=a.l;"2.2.7"!==a.s&&(c=0);return new b.Hc(c,a.e,a.a,a.p,a.m,a.v)};b.Sg=function(a,b,d,e,f){this.Xb=a;this.si=b;this.ri=d;this.Be=e;this.Wb=f};b.Sg.V=function(a,b,d,e,f){return null==
            a||null==a.trigger_id?null:new this(a.trigger_id,b,d,e,f)};b.o=function(a,b){this.type=a;this.data=b};b.o.prototype.Mh=function(a,c){return b.tb[this.type]===a&&(null==this.data||this.data.hb(c))};b.o.xh=function(a,b){var c=null;try{c=window.atob(a)}catch(e){return g.f.info("Failed to unencode analytics id "+a+": "+e.message),!1}return b===c.split("_")[0]};b.o.V=function(a){var c=a.type,d;switch(c){case b.o.S.OPEN:d=null;break;case b.o.S.hc:d=b.o.nd.V(a.data);break;case b.o.S.nf:d=b.o.od.V(a.data);
            break;case b.o.S.Gc:d=b.o.pd.V(a.data);break;case b.o.S.bc:d=b.o.cd.V(a.data);break;case b.o.S.af:d=b.o.dd.V(a.data);break;case b.o.S.Jb:d=b.o.gd.V(a.data);break;case b.o.S.Nb:d=null}return new this(c,d)};b.o.S={OPEN:"open",hc:"purchase",nf:"purchase_property",Gc:"push_click",bc:"custom_event",af:"custom_event_property",Jb:"iam_click",Nb:"test"};b.ma={OPEN:"open",hc:"purchase",Gc:"push_click",bc:"custom_event",Jb:"iam_click",Nb:"test"};b.tb={};b.tb[b.o.S.OPEN]=b.ma.OPEN;b.tb[b.o.S.hc]=b.ma.hc;b.tb[b.o.S.nf]=
            b.ma.hc;b.tb[b.o.S.Gc]=b.ma.Gc;b.tb[b.o.S.bc]=b.ma.bc;b.tb[b.o.S.af]=b.ma.bc;b.tb[b.o.S.Jb]=b.ma.Jb;b.tb[b.o.S.Nb]=b.ma.Nb;b.o.Y=function(a,c,d,e){this.Wh=a;this.Me=c;this.Pc=d;this.fa=e;this.Me===b.o.Y.sf.bf&&this.Pc!==b.o.Y.za.tg&&this.Pc!==b.o.Y.za.Bg&&this.Pc!==b.o.Y.za.lg&&this.Pc!==b.o.Y.za.mg&&(this.fa=b.N.gb(this.fa))};b.o.Y.V=function(a){return new this(a.property_key,a.property_type,a.comparator,a.property_value)};b.o.Y.prototype.hb=function(a){var c=null;null!=a&&(c=a[this.Wh]);switch(this.Pc){case b.o.Y.za.Ri:return null!=
            c&&c.valueOf()===this.fa.valueOf();case b.o.Y.za.tj:return null==c||c.valueOf()!==this.fa.valueOf();case b.o.Y.za.Xi:return typeof c===typeof this.fa&&c>this.fa;case b.o.Y.za.tg:return this.Me===b.o.Y.sf.bf?null!=c&&b.F.yb(c)&&b.N.$h(c)<=this.fa:typeof c===typeof this.fa&&c>=this.fa;case b.o.Y.za.kj:return typeof c===typeof this.fa&&c<this.fa;case b.o.Y.za.Bg:return this.Me===b.o.Y.sf.bf?null!=c&&b.F.yb(c)&&b.N.$h(c)>=this.fa:typeof c===typeof this.fa&&c<=this.fa;case b.o.Y.za.oj:return null!=c&&
            "string"===typeof c&&typeof c===typeof this.fa&&null!=c.match(this.fa);case b.o.Y.za.Ti:return null!=c;case b.o.Y.za.Ni:return null==c;case b.o.Y.za.lg:return null!=c&&b.F.yb(c)&&b.N.ai(c)<this.fa;case b.o.Y.za.mg:return null!=c&&b.F.yb(c)&&b.N.ai(c)>this.fa;case b.o.Y.za.uj:return null==c||typeof c!==typeof this.fa||"string"!==typeof c||null==c.match(this.fa)}return!1};b.o.Y.prototype.X=function(){var a=this.fa;b.F.yb(this.fa)&&(a=b.N.Cd(a.valueOf()));return{k:this.Wh,t:this.Me,c:this.Pc,v:a}};b.o.Y.ra=
            function(a){return new this(a.k,a.t,a.c,a.v)};b.o.Y.za={Ri:1,tj:2,Xi:3,tg:4,kj:5,Bg:6,oj:10,Ti:11,Ni:12,lg:15,mg:16,uj:17};b.o.Y.sf={Rl:"boolean",Wl:"number",$l:"string",bf:"date"};b.o.Gb=function(a){this.filters=a};b.o.Gb.V=function(a){if(null==a||!b.F.isArray(a))return null;for(var c=[],d=0;d<a.length;d++){for(var e=[],f=a[d],h=0;h<f.length;h++)e.push(b.o.Y.V(f[h]));c.push(e)}return new this(c)};b.o.Gb.prototype.hb=function(a){for(var b=!0,d=0;d<this.filters.length;d++){for(var e=this.filters[d],
            f=!1,h=0;h<e.length;h++)if(e[h].hb(a)){f=!0;break}if(!f){b=!1;break}}return b};b.o.Gb.prototype.X=function(){for(var a=[],b=0;b<this.filters.length;b++){for(var d=this.filters[b],e=[],f=0;f<d.length;f++)e.push(d[f].X());a.push(e)}return a};b.o.Gb.ra=function(a){for(var c=[],d=0;d<a.length;d++){for(var e=[],f=a[d],h=0;h<f.length;h++)e.push(b.o.Y.ra(f[h]));c.push(e)}return new this(c)};b.o.nd=function(a){this.yc=a};b.o.nd.prototype.hb=function(a){return null==this.yc||a[0]===this.yc};b.o.nd.V=function(a){return new this(a?
            a.product_id:null)};b.o.od=function(a,b){this.yc=a;this.zc=b};b.o.od.prototype.hb=function(a){if(null==this.yc||null==this.zc)return!1;var b=a[1];return a[0]===this.yc&&this.zc.hb(b)};b.o.od.V=function(a){return new this(a?a.product_id:null,a?b.o.Gb.V(a.property_filters):null)};b.o.pd=function(a){this.sc=a};b.o.pd.prototype.hb=function(a){return null==this.sc?!0:b.o.xh(a[0],this.sc)};b.o.pd.V=function(a){return new this(a?a.campaign_id:null)};b.o.cd=function(a){this.vc=a};b.o.cd.prototype.hb=function(a){return null==
            this.vc||this.vc===a[0]};b.o.cd.V=function(a){return new this(a?a.event_name:null)};b.o.dd=function(a,b){this.vc=a;this.zc=b};b.o.dd.prototype.hb=function(a){if(null==this.vc||null==this.zc)return!1;var b=a[1];return a[0]===this.vc&&this.zc.hb(b)};b.o.dd.V=function(a){return new this(a?a.event_name:null,a?b.o.Gb.V(a.property_filters):null)};b.o.gd=function(a,b){this.sc=a;this.Bd=b};b.o.gd.prototype.hb=function(a){if(null==this.sc)return!1;var c=b.o.xh(a[0],this.sc);if(!c)return!1;var d=null==this.Bd||
            0===this.Bd.length;if(null!=this.Bd)for(var e=0;e<this.Bd.length;e++)if(this.Bd[e]===a[1]){d=!0;break}return c&&d};b.o.gd.V=function(a){return new this(a?a.id:null,a?a.buttons:null)};b.o.prototype.X=function(){return{t:this.type,d:this.data?this.data.X():null}};b.o.nd.prototype.X=function(){return this.yc};b.o.od.prototype.X=function(){return{id:this.yc,pf:this.zc.X()}};b.o.pd.prototype.X=function(){return this.sc};b.o.cd.prototype.X=function(){return this.vc};b.o.dd.prototype.X=function(){return{e:this.vc,
            pf:this.zc.X()}};b.o.gd.prototype.X=function(){return this.sc};b.o.ra=function(a){var c;switch(a.t){case b.o.S.OPEN:c=null;break;case b.o.S.hc:c=new b.o.nd(a.d);break;case b.o.S.nf:c=a.d||{};c=new b.o.od(c.id,b.o.Gb.ra(c.pf||[]));break;case b.o.S.Gc:c=new b.o.pd(a.d);break;case b.o.S.bc:c=new b.o.cd(a.d);break;case b.o.S.af:c=a.d||{};c=new b.o.dd(c.e,b.o.Gb.ra(c.pf||[]));break;case b.o.S.Jb:c=new b.o.gd(a.d);break;case b.o.S.Nb:c=null}return new this(a.t,c)};b.ia=function(a,c,d,e,f,h,g,l,p,n,k,m){this.id=
            a;this.Qc=c||[];void 0===d&&(d=null);this.startTime=d;void 0===e&&(e=null);this.endTime=e;this.Yf=f||0;this.type=h;this.uc=l||0;null==n&&(n=1E3*(this.uc+30));this.Wb=n;this.data=g;null==p&&(p=b.ia.Rg);this.$f=p;this.Uh=k;this.me=m||null};b.ia.prototype.Lh=function(a){return null==this.me||this.$f!==b.ia.Rg&&a-this.me>=1E3*this.$f};b.ia.prototype.Zf=function(a){this.me=a};b.ia.prototype.$k=function(a){return Math.max(a+1E3*this.uc-(new Date).valueOf(),0)};b.ia.prototype.li=function(a){var b=(new Date).valueOf()-
            a;(a=null==a||isNaN(b)||null==this.Wb||b<this.Wb)||g.f.info("Trigger action "+this.type+" is no longer eligible for display - fired "+b+"ms ago and has a timeout of "+this.Wb+"ms");return!a};b.ia.Rg=-1;b.ia.S={ef:"inapp",Og:"templated_iam"};b.ia.V=function(a){for(var c=a.id,d=[],e=0;e<a.trigger_condition.length;e++)d.push(b.o.V(a.trigger_condition[e]));var e=b.N.gb(a.start_time),f=b.N.gb(a.end_time),h=a.priority,g=a.type,l=a.delay,p=a.re_eligibility,n=a.timeout,k=a.data;a=a.min_seconds_since_last_trigger;
            return b.F.mb(b.ia.S,g,"Could not construct Trigger from server data","ab.Trigger.Types")?new this(c,d,e,f,h,g,k,l,p,n,a):null};b.ia.prototype.X=function(){for(var a=[],b=0;b<this.Qc.length;b++)a.push(this.Qc[b].X());return{i:this.id,c:a,s:this.startTime,e:this.endTime,p:this.Yf,t:this.type,da:this.data,d:this.uc,r:this.$f,tm:this.Wb,ss:this.Uh,ld:this.me}};b.ia.ra=function(a){for(var c=[],d=0;d<a.c.length;d++)c.push(b.o.ra(a.c[d]));return new b.ia(a.i,c,b.N.Vc(a.s),b.N.Vc(a.e),a.p,a.t,a.da,a.d,a.r,
            a.tm,a.ss,a.ld)};b.w=function(a,b){this.H=a;this.Ba=b};b.w.zj=/^[0-9 .\\\\(\\\\)\\\\+\\\\-]+$/;b.w.ug={MALE:"m",FEMALE:"f",OTHER:"o",UNKNOWN:"u",NOT_APPLICABLE:"n",PREFER_NOT_TO_SAY:"p"};b.w.kd={OPTED_IN:"opted_in",SUBSCRIBED:"subscribed",UNSUBSCRIBED:"unsubscribed"};b.w.td="user_id";b.w.kg="custom";b.w.ac="inc";b.w.La="add";b.w.Ma="remove";b.w.prototype.U=function(a){null==a&&g.f.error("getUserId must be supplied with a callback. e.g., appboy.getUser().getUserId(function(userId) {console.log('the user id is ' + userId)})");
            "function"===typeof a&&a(this.H.U())};b.w.prototype.dk=function(a,c){return!b.T.Zb(a,"add alias","the alias",!1)||0>=a.length?(g.f.error("addAlias requires a non-empty alias"),!1):!b.T.Zb(c,"add alias","the label",!1)||0>=c.length?(g.f.error("addAlias requires a non-empty label"),!1):this.Ba.Xk(a,c).L};b.w.prototype.sl=function(a){return b.T.Zb(a,"set first name","the firstName",!0)?this.H.ea("first_name",a):!1};b.w.prototype.wl=function(a){return b.T.Zb(a,"set last name","the lastName",!0)?this.H.ea("last_name",
            a):!1};b.w.prototype.ql=function(a){return null===a||b.T.Nh(a)?this.H.ea("email",a):(g.f.error('Cannot set email address - "'+a+'" did not pass RFC-5322 validation.'),!1)};b.w.prototype.tl=function(a){"string"===typeof a&&(a=a.toLowerCase());return null===a||b.F.mb(b.w.ug,a,'Gender "'+a+'" is not a valid gender.',"ab.User.Genders")?this.H.ea("gender",a):!1};b.w.prototype.ol=function(a,b,d){if(null===a&&null===b&&null===d)return this.H.ea("dob",null);a=parseInt(a);b=parseInt(b);d=parseInt(d);return isNaN(a)||
            isNaN(b)||isNaN(d)||12<b||1>b||31<d||1>d?(g.f.error("Cannot set date of birth - parameters should comprise a valid date e.g. setDateOfBirth(1776, 7, 4);"),!1):this.H.ea("dob",""+a+"-"+b+"-"+d)};b.w.prototype.ll=function(a){return b.T.Zb(a,"set country","the country",!0)?this.H.ea("country",a):!1};b.w.prototype.ul=function(a){return b.T.Zb(a,"set home city","the homeCity",!0)?this.H.ea("home_city",a):!1};b.w.prototype.vl=function(a){return b.T.Zb(a,"set language","the language",!0)?this.H.ea("language",
            a):!1};b.w.prototype.rl=function(a){return b.F.mb(b.w.kd,a,'Email notification setting "'+a+'" is not a valid subscription type.',"ab.User.NotificationSubscriptionTypes")?this.H.ea("email_subscribe",a):!1};b.w.prototype.eg=function(a){return b.F.mb(b.w.kd,a,'Push notification setting "'+a+'" is not a valid subscription type.',"ab.User.NotificationSubscriptionTypes")?this.H.ea("push_subscribe",a):!1};b.w.prototype.xl=function(a){return b.T.Zb(a,"set phone number","the phoneNumber",!0)?null===a||a.match(b.w.zj)?
            this.H.ea("phone",a):(g.f.error('Cannot set phone number - "'+a+'" did not pass validation.'),!1):!1};b.w.prototype.kl=function(a){return this.H.ea("image_url",a)};b.w.prototype.Pe=function(a,b,d,e,f){if(null==a||null==b)return g.f.error("Cannot set last-known location - latitude and longitude are required."),!1;a=parseFloat(a);b=parseFloat(b);null!=d&&(d=parseFloat(d));null!=e&&(e=parseFloat(e));null!=f&&(f=parseFloat(f));return isNaN(a)||isNaN(b)||null!=d&&isNaN(d)||null!=e&&isNaN(e)||null!=f&&
            isNaN(f)?(g.f.error("Cannot set last-known location - all supplied parameters must be numeric."),!1):90<a||-90>a||180<b||-180>b?(g.f.error("Cannot set last-known location - latitude and longitude are bounded by \\u00b190 and \\u00b1180 respectively."),!1):null!=d&&0>d||null!=f&&0>f?(g.f.error("Cannot set last-known location - accuracy and altitudeAccuracy may not be negative."),!1):this.Ba.Pe(this.H.U(),a,b,e,d,f).L};b.w.prototype.Xc=function(a,c){if(!b.T.Za(a,"set custom user attribute","the given key"))return!1;
            var d=typeof c,e=b.F.yb(c),f=b.F.isArray(c);if("number"!==d&&"boolean"!==d&&!e&&!f&&null!==c&&!b.T.Za(c,'set custom user attribute "'+a+'"',"the given value"))return!1;e&&(c=b.N.mi(c));if(f)for(d=0;d<c.length;d++)if(!b.T.Za(c[d],'set custom user attribute "'+a+'"',"the element in the given array"))return!1;return this.H.Xc(a,c)};b.w.prototype.ek=function(a,c){if(!b.T.Za(a,"add to custom user attribute array","the given key")||null!=c&&!b.T.Za(c,"add to custom user attribute array","the given value"))return!1;
            var d={};d[b.w.La]=c;return this.H.Xc(a,d)};b.w.prototype.el=function(a,c){if(!b.T.Za(a,"remove from custom user attribute array","the given key")||null!=c&&!b.T.Za(c,"remove from custom user attribute array","the given value"))return!1;var d={};d[b.w.Ma]=c;return this.H.Xc(a,d)};b.w.prototype.Rk=function(a,c){if(!b.T.Za(a,"increment custom user attribute","the given key"))return!1;null==c&&(c=1);var d=parseInt(c);if(isNaN(d)||d!==parseFloat(c))return g.f.error('Cannot increment custom user attribute because the given incrementValue "'+
            c+'" is not an integer.'),!1;c={};c[b.w.ac]=d;return this.H.Xc(a,c)};b.w.prototype.bg=function(a,b,d,e){this.H.bg(a,b,d,e);this.Ba.ti()};b.w.prototype.Jd=function(a){this.H.Jd(a)};b.w.prototype.ml=function(a,c,d){if(!b.T.Za(a,"set custom location attribute","the given key"))return!1;if(null!==c||null!==d)if(c=parseFloat(c),d=parseFloat(d),isNaN(c)||90<c||-90>c||isNaN(d)||180<d||-180>d)return g.f.error("Received invalid values for latitude and/or longitude. Latitude and longitude are bounded by \\u00b190 and \\u00b1180 respectively, or must both be null for removal."),
            !1;return this.Ba.Yk(a,c,d).L};b.Cc=function(){};b.Cc.prototype.Gd=function(){};b.Cc.prototype.tc=function(){};b.Cc.prototype.clearData=function(){};b.Sa=function(a,c,d){this.vb=a;this.Ba=c;this.A=d;a=this.A.na(b.j.B.C.Ze)||[];c=[];for(d=0;d<a.length;d++){var e=b.b.ra(a[d]);null!=e&&c.push(e)}this.W=this.ve(this.Ff(c));this.Kc=this.A.na(b.j.B.C.Ye)||0;this.Ic=this.A.na(b.j.B.C.Xe)||0};b.Ya(b.Sa,b.Cc);b.Sa.prototype.Wj=function(a,c,d,e){var f;f=c?[]:this.W.slice();for(var h=0;h<a.length;h++){for(var g=
            a[h],l=null,p=0;p<this.W.length;p++)if(g.id===this.W[p].id){l=this.W[p];break}if(c)g=b.b.Of(g),null!=l&&l.viewed&&(g.viewed=!0),null!=g&&f.push(g);else if(null==l)l=b.b.Of(g),null!=l&&f.push(l);else if(!l.Kh(g))for(p=0;p<f.length;p++)if(g.id===f[p].id){f.splice(p,1);break}}this.W=this.ve(this.Ff(f));this.xe();this.Kc=d||0;this.A.ga(b.j.B.C.Ye,this.Kc);this.Ic=e||0;this.A.ga(b.j.B.C.Xe,this.Ic)};b.Sa.prototype.Gd=function(a){null!=a&&a.cards&&(this.Wj(a.cards,a.full_sync,a.last_full_sync_at,a.last_card_updated_at),
            this.vb.Ea(this.Rc()))};b.Sa.prototype.Mk=function(a){var c=this.W.slice();this.Ba.Sc().U(function(d){for(var e=0;e<a.length;e++)if(d===a[e].userId||null==d&&null==a[e].userId){for(var f=a[e].card,h=null,g=0;g<this.W.length;g++)if(f.id===this.W[g].id){h=this.W[g];break}if(null==h)f=b.b.Of(f),null!=f&&c.push(f);else if(!h.Kh(f))for(g=0;g<c.length;g++)if(f.id===c[g].id){c.splice(g,1);break}}this.W=this.ve(this.Ff(c));this.xe();this.vb.Ea(this.Rc())}.bind(this))};b.Sa.prototype.Ff=function(a){for(var c=
            this.A.na(b.j.B.C.$c)||{},d=this.A.na(b.j.B.C.Zc)||{},e={},f={},h=0;h<a.length;h++)c[a[h].id]&&(a[h].viewed=!0,e[a[h].id]=!0),d[a[h].id]&&(a[h].dismissed=!0,f[a[h].id]=!0);this.A.ga(b.j.B.C.$c,e);this.A.ga(b.j.B.C.Zc,f);return a};b.Sa.prototype.ve=function(a){for(var b=[],d=new Date,e=0;e<a.length;e++)(null==a[e].expiresAt||a[e].expiresAt>=d)&&!a[e].dismissed&&b.push(a[e]);return b};b.Sa.prototype.xe=function(){for(var a=[],c=0;c<this.W.length;c++)a.push(this.W[c].X());this.A.ga(b.j.B.C.Ze,a)};b.Sa.prototype.Bc=
            function(){return this.Ba.Bc(this.Kc,this.Ic,this.Gd.bind(this))};b.Sa.prototype.Rc=function(){var a=this.ve(this.W);a.sort(function(a,b){return a.pinned&&!b.pinned?-1:b.pinned&&!a.pinned?1:a.updated>b.updated?-1:b.updated>a.updated?1:0});var c=Math.max(this.Ic||0,this.Kc||0);0===c&&(c=void 0);return new b.va(a,b.N.gb(c))};b.Sa.prototype.tc=function(a){a||(this.W=[],this.vb.Ea(new b.va(this.W.slice(),null)),this.A.ta(b.j.B.C.Ze),this.A.ta(b.j.B.C.$c),this.A.ta(b.j.B.C.Zc));this.Ic=this.Kc=0;this.A.ta(b.j.B.C.Ye);
            this.A.ta(b.j.B.C.Xe)};b.Sa.prototype.clearData=function(){this.Ic=this.Kc=0;this.W=[];this.vb.Ea(new b.va(this.W.slice(),null))};b.ec=function(a,c){this.vb=a;this.A=c;a=this.A.na(b.j.B.C.kf)||[];c=[];for(var d=0;d<a.length;d++){var e=b.b.ra(a[d]);null!=e&&c.push(e)}this.W=c;this.Lc=b.N.Vc(this.A.na(b.j.B.C.hf))};b.Ya(b.ec,b.Cc);b.ec.prototype.Zj=function(a){for(var c=[],d,e=this.A.na(b.j.B.C.Yc)||{},f={},h=0;h<a.length;h++)d=a[h],d=b.b.Bk(d),null!=d&&(e[d.id]&&(d.viewed=!0,f[d.id]=!0),c.push(d));
            this.A.ga(b.j.B.C.Yc,f);this.W=c;this.xe();this.Lc=new Date;this.A.ga(b.j.B.C.hf,this.Lc)};b.ec.prototype.xe=function(){for(var a=[],c=0;c<this.W.length;c++)a.push(this.W[c].X());this.A.ga(b.j.B.C.kf,a)};b.ec.prototype.Gd=function(a){null!=a&&a.feed&&(this.Zj(a.feed),this.vb.Ea(new b.J(this.W.slice(),this.Lc)))};b.ec.prototype.Ce=function(){for(var a=[],c=new Date,d=0;d<this.W.length;d++)(null==this.W[d].expiresAt||this.W[d].expiresAt>=c)&&a.push(this.W[d]);return new b.J(a,this.Lc)};b.ec.prototype.clearData=
            function(a){null==a&&(a=!1);this.W=[];this.Lc=null;a&&(this.A.ta(b.j.B.C.kf),this.A.ta(b.j.B.C.hf));this.vb.Ea(new b.J(this.W.slice(),this.Lc))};b.eb=function(a,c,d,e){function f(a,b,c,d,e){return function(){g.zd(a,b,c,d,e)}}this.Nj=a;this.vb=c;this.A=d;this.Ba=e;this.Jc=this.A.na(b.j.B.C.gf)||null;this.qa=this.A.na(b.j.B.C.rd)||{};this.Xa=this.A.na(b.j.B.C.Wd)||{};this.wb=[];e=this.A.na(b.j.B.C.vf)||[];var h=[],g=this;c={};for(d=0;d<e.length;d++)a=b.ia.ra(e[d]),null!=this.Xa[a.id]&&a.Zf(this.Xa[a.id]),
            h.push(a),c[a.id]=a;this.jb=h;e=!1;for(d=0;d<this.jb.length;d++)if(a=this.jb[d],null!=this.qa[a.id]){for(var h=this.qa[a.id],l=[],p=0;p<h.length;p++){var n=h[p],k=a.$k(n.Be);if(0<k){l.push(n);var m,u;null!=n.ni&&(m=n.ni);null!=n.If&&b.Event.Oh(n.If)&&(u=b.Event.ra(n.If));var t=[];if(b.F.isArray(n.Nf))for(var v=0;v<n.Nf.length;v++){var w=c[n.Nf[v]];null!=w&&t.push(w)}this.wb.push(setTimeout(f(a,n.Be,m,u,t),k))}}this.qa[a.id].length>l.length&&(this.qa[a.id]=l,e=!0,0===this.qa[a.id].length&&delete this.qa[a.id])}e&&
            this.A.ga(b.j.B.C.rd,this.qa)};b.Ya(b.eb,b.Cc);b.eb.prototype.ck=function(){for(var a=[],c=0;c<this.jb.length;c++)a.push(this.jb[c].X());this.A.ga(b.j.B.C.vf,a)};b.eb.prototype.Gd=function(a){var c=!1;if(null!=a&&a.triggers){var d={},e={};this.jb=[];for(var f=0;f<a.triggers.length;f++){var h=b.ia.V(a.triggers[f]);null!=this.Xa[h.id]&&(h.Zf(this.Xa[h.id]),d[h.id]=this.Xa[h.id]);null!=this.qa[h.id]&&(e[h.id]=this.qa[h.id]);for(var q=0;q<h.Qc.length;q++)if(h.Qc[q].Mh(b.ma.Nb,null)){c=!0;break}null!=
            h&&this.jb.push(h)}b.F.isEqual(this.Xa,d)||(this.Xa=d,this.A.ga(b.j.B.C.Wd,this.Xa));b.F.isEqual(this.qa,e)||(this.qa=e,this.A.ga(b.j.B.C.rd,this.qa));this.ck();c&&(g.f.info("Trigger with test condition found, firing test."),this.Sb(b.ma.Nb));this.Sb(b.ma.OPEN)}};b.eb.prototype.zd=function(a,c,d,e,f){function h(){var a=f.pop();if(null!=a)if(l.sh(a,c,d,e,f),a.li(c)){var q="Server aborted in-app message display, but the timeout on fallback trigger "+a.id+"has already elapsed.";0<f.length&&(q+=" Continuing to fall back.");
            g.f.info(q);l.Ba.sa(a.id,b.h.wa.vg);h()}else g.f.info("Server aborted in-app message display. Falling back to lower priority "+a.type+" trigger action "+a.id),q=1E3*a.uc-((new Date).valueOf()-c),0<q?l.wb.push(setTimeout(function(){l.zd(a,c,d,e,f)},q)):l.zd(a,c,d,e,f)}function q(e){var f=(new Date).valueOf();a.li(c)?a.type===b.ia.S.Og?l.Ba.sa(a.id,b.h.wa.qd):l.Ba.sa(a.id,b.h.wa.vg):!1===navigator.onLine&&a.type===b.ia.S.ef&&e.imageUrl?(g.f.info("Not showing "+a.type+" trigger action "+a.id+" due to offline state."),
            l.Ba.sa(a.id,b.h.wa.Li)):a.Lh(f)&&l.oh(a,f,d)?(l.vb.Ea([e]),l.$j(a,f)):g.f.info("Not displaying trigger "+a.id+" because display time fell outside of the acceptable time window.")}var l=this;switch(a.type){case b.ia.S.ef:var p=b.h.V(a.data);if(null==p){g.f.error("Could not parse trigger data for trigger "+a.id+", ignoring.");this.Ba.sa(a.id,b.h.wa.sd);break}q(p);break;case b.ia.S.Og:p=b.Sg.V(a.data,q,h,c,a.Wb);if(null==p){g.f.error("Could not parse trigger data for trigger "+a.id+", ignoring.");this.Ba.sa(a.id,
            b.h.wa.sd);break}this.Ba.ki(p,d,e);break;default:g.f.error("Trigger "+a.id+" was of unexpected type "+a.type+", ignoring."),this.Ba.sa(a.id,b.h.wa.sd)}};b.eb.prototype.Sb=function(a,c,d){if(b.F.mb(b.ma,a,"Cannot fire trigger action.","ab.TriggerEvents")){for(var e=(new Date).valueOf(),f=e-this.Jc,h=!0,q=!0,l=[],p=0;p<this.jb.length;p++){var n=this.jb[p],k=e+1E3*n.uc;if(n.Lh(k)&&(null==n.startTime||n.startTime<=e)&&(null==n.endTime||n.endTime>=e)){for(var m=!1,u=0;u<n.Qc.length;u++)if(n.Qc[u].Mh(a,
            c)){m=!0;break}m&&(h=!1,this.oh(n,k,a)&&(q=!1,l.push(n)))}}if(h)g.f.info("Trigger event "+a+" did not match any trigger conditions.");else if(q)g.f.info("Ignoring "+a+" trigger event because a trigger was displayed "+f/1E3+"s ago.");else{l.sort(function(a,b){return a.Yf-b.Yf});var t=l.pop();if(null!=t){g.f.info("Firing "+t.type+" trigger action "+t.id);this.sh(t,e,a,d,l);var v=this;0===t.uc?v.zd(t,e,a,d,l):this.wb.push(setTimeout(function(){v.zd(t,e,a,d,l)},1E3*t.uc))}}}};b.eb.prototype.tc=function(a){this.jb=
            [];this.A.ta(b.j.B.C.vf);if(!a){this.Jc=null;this.Xa={};this.qa={};for(a=0;a<this.wb.length;a++)clearTimeout(this.wb[a]);this.wb=[];this.A.ta(b.j.B.C.gf);this.A.ta(b.j.B.C.Wd);this.A.ta(b.j.B.C.rd);this.A.ta(b.j.B.C.ij);this.A.ta(b.j.B.C.hj);this.A.ta(b.j.B.C.jj)}};b.eb.prototype.clearData=function(){this.jb=[];this.Jc=null;this.Xa={};this.qa={};for(var a=0;a<this.wb.length;a++)clearTimeout(this.wb[a]);this.wb=[]};b.eb.prototype.oh=function(a,c,d){if(null==this.Jc)return!0;if(d===b.ma.Nb)return g.f.info("Ignoring minimum interval between trigger because it is a test type."),
            !0;a=a.Uh;null==a&&(a=this.Nj);return c-this.Jc>=1E3*a};b.eb.prototype.sh=function(a,c,d,e,f){this.qa[a.id]=this.qa[a.id]||[];var h={};h.Be=c;h.ni=d;var g;null!=e&&(g=e.X());h.If=g;c=[];for(d=0;d<f.length;d++)c.push(f[d].id);h.Nf=c;this.qa[a.id].push(h);this.A.ga(b.j.B.C.rd,this.qa)};b.eb.prototype.$j=function(a,c){a.Zf(c);this.Jc=c;this.A.ga(b.j.B.C.gf,c);this.Xa[a.id]=c;this.A.ga(b.j.B.C.Wd,this.Xa)};b.M=function(a,c,d,e,f,h,g,l,p,n,k){this.Wa=a;this.Pj=c;this.hh=d;this.Vg=e;this.ge=f;this.je=n.Aa.Gh;
            this.bh=null;this.ca=h;this.vd=g;this.H=l;this.Oa=p;this.A=n;this.Mj=k;this.yf=new b.Va;this.zf=[];this.Lj=1E3;this.Kj=6E4};b.M.prototype.Cf=function(a){var c=this.vd.Fd(),d=c.rc(),e=this.A.na(b.j.B.C.cf);b.F.isEqual(e,d)||(a.device=d);a.api_key=this.Wa;a.time=b.N.Cd((new Date).valueOf(),!0);a.sdk_version=this.Pj;this.hh&&(a.sdk_flavor=this.hh);a.app_version=this.Vg;a.device_id=c.id;return a};b.M.prototype.Hf=function(a,c){if(c.error){var d=c.error;c.error===b.We.aj?d='The API key "'+a.api_key+'" is invalid.':
            c.error===b.We.Ai?d="Sorry, we are not currently accepting your requests. If you think this is in error, please contact us.":c.error===b.We.wj&&(d="No device identifier. Please contact support@braze.com");g.f.error("Backend error: "+d);return!1}return!0};b.M.prototype.Rb=function(a,c,d,e,f,h){null==d&&(d=!0);d&&this.se();var q,l=this.A.Eh(),p=this.A.zk(),n=this.zf;this.zf=[];var k=this.ca.Zk();if(0<l.length)for(q=0;q<l.length;q++)l[q].type===g.$.Mg&&(k=!0);var m=c||k;"function"!==typeof h||m||h();
            if(!d||0!==l.length||0!==p.length||0!==n.length||a||m){var u=this.lh(a,m);if(0<l.length){a=[];for(q=0;q<l.length;q++)a.push(l[q].rc());u.events=a}0<p.length&&(u.attributes=p);if(0<n.length){a=[];for(q=0;q<n.length;q++)a.push(n[q].rc());u.feedback=a}u=this.Cf(u);q=this.kh(u);var t=this;b.Ke.Xf({url:""+this.ge+"/data/",data:u,headers:q,L:function(a){t.Hf(u,a)&&(t.Oa.cl(a),null==u.respond_with||u.respond_with.user_id==t.H.U())&&(null!=u.device&&t.A.ga(b.j.B.C.cf,u.device),t.Mj(a),"function"===typeof e&&
            e())},error:function(){t.A.Ca(l);for(var a=0;a<p.length;a++)t.A.Th(p[a]);"function"===typeof f&&f()},ye:function(a){"function"===typeof h&&m&&h();if(d)if(a)t.we();else{a=t.bh;if(null==a||a<1E3*t.je)a=1E3*t.je;t.we(Math.min(3E5,b.Math.Yh(1E3*t.je,3*a)))}}});k&&this.yf.Ea()}else this.we()};b.M.prototype.rh=function(a,b){var c="HTTP error ";null!=a&&(c+=a+" ");g.f.error(c+b)};b.M.prototype.ki=function(a,c,d,e){var f=this.lh(!1,!1),f=this.Cf(f);f.template={trigger_id:a.Xb,trigger_event_type:c};null!=
            d&&(f.template.data=d.rc());var h=this.kh(f),g=this;b.Ke.Xf({url:""+this.ge+"/template/",data:f,headers:h,L:function(c){g.Hf(f,c)?null==c||null==c.templated_message?g.sa(a.Xb,b.h.wa.qd):(c=c.templated_message,c.type!==b.ia.S.ef?g.sa(a.Xb,b.h.wa.sd):(c=b.h.V(c.data),null==c?g.sa(a.Xb,b.h.wa.sd):"function"===typeof a.si?a.si(c):g.sa(a.Xb,b.h.wa.qd))):(g.sa(a.Xb,b.h.wa.qd),"function"===typeof a.ri&&a.ri())},error:function(f){var h="getting user personalization for message "+a.Xb;if((new Date).valueOf()-
            a.Be>a.Wb)g.sa(a.Xb,b.h.wa.qd);else{var n=Math.min(a.Wb,g.Kj),l=g.Lj;null==e&&(e=l);var q=Math.min(n,b.Math.Yh(l,3*e)),h=h+(". Retrying in "+q+"ms");setTimeout(function(){g.ki(a,c,d,q)},q)}g.rh(f,h)}})};b.M.prototype.Bc=function(a,c,d){var e=this.Cf({});e.last_full_sync_at=a;e.last_card_updated_at=c;a=this.H.U();null!=a&&(e.user_id=a);var f=this;b.Ke.Xf({url:""+this.ge+"/content_cards/sync",data:e,headers:[["X-Braze-Api-Key",this.Wa],["X-Braze-DataRequest",!0],["X-Braze-ContentCardsRequest",!0]],
            L:function(a){f.Hf(e,a)&&d(a)},error:function(a){f.rh(a,"retrieving content cards")}})};b.M.prototype.lh=function(a,b){var c={};a&&(c.feed=!0);b&&(c.triggers=!0);a=this.H.U();null!=a&&(c.user_id=a);c.config={config_time:this.Oa.Ik()};return{respond_with:c}};b.M.prototype.kh=function(a){var b=[["X-Braze-Api-Key",this.Wa]],d=!1;null!=a.respond_with&&a.respond_with.triggers&&(b.push(["X-Braze-TriggersRequest",!0]),d=!0);null!=a.respond_with&&a.respond_with.feed&&(b.push(["X-Braze-FeedRequest",!0]),d=
            !0);d&&b.push(["X-Braze-DataRequest",!0]);return b};b.M.prototype.re=function(a){if(null==a.campaignId&&null==a.cardId&&null==a.triggerId)return g.f.info("The in-app message has no analytics id. Not logging event to Braze servers."),null;var b={};null!=a.cardId&&(b.card_ids=[a.cardId]);null!=a.campaignId&&(b.campaign_ids=[a.campaignId]);null!=a.triggerId&&(b.trigger_ids=[a.triggerId]);return b};b.M.prototype.qe=function(a){for(var b=null,d=0;d<a.length;d++)null!=a[d].id&&""!==a[d].id&&(b=b||{},b.ids=
            b.ids||[],b.ids.push(a[d].id));return b};b.M.prototype.we=function(a){if(!this.Wg){null==a&&(a=1E3*this.je);this.se();var b=this;this.ke=setTimeout(function(){if(document.hidden){var a=function(){document.hidden||(document.removeEventListener("visibilitychange",a,!1),b.Rb())};document.addEventListener("visibilitychange",a,!1)}else b.Rb()},a);this.bh=a}};b.M.prototype.se=function(){null!=this.ke&&(clearTimeout(this.ke),this.ke=null)};b.M.prototype.Pf=function(){this.Wg=!1;this.we()};b.M.prototype.Ed=
            function(){this.yf.ya();this.se();this.Wg=!0;this.Rb(null,null,!1);this.ke=null};b.M.prototype.Cl=function(a){this.yf.kb(a)};b.M.prototype.Le=function(a,c){var d=this.ca.Fk(),e=this.ca.ka();this.A.ta(b.j.B.C.gj);var f=this;this.ti();var h=d!==e;f.Rb(null,!1,null,null,null,c);c=g.Z.ob.ic;(new g.Z(c,g.f)).Hh(c.oa.qf,function(b,c){h&&null!=a&&c&&a.subscribe()},function(){var c=f.A.na(b.j.B.C.rf);h&&null!=a&&null!=c&&a.subscribe()})};b.M.prototype.tc=function(a,c,d,e){var f=this.H.U();if(f!==a){this.ca.rk();
            this.H.Ok(a);for(var h=0;h<c.length;h++)c[h].tc(null==f);null!=f&&this.A.ta(b.j.B.C.Yc);this.A.ta(b.j.B.C.cf);this.Le(e,d);g.f.info('Changed user to "'+a+'".')}else"function"===typeof d?(g.f.info('Current user is already "'+a+'". Executing networkCallCompleteCallback.'),d()):g.f.info('Current user is already "'+a+'". Doing nothing.')};b.M.prototype.Sc=function(){return new b.w(this.H,this)};b.M.prototype.Kd=function(){this.se();this.ca.ka();this.Rb()};b.M.prototype.Oe=function(){this.ca.ka();this.Rb(!0)};
            b.M.prototype.hl=function(a,b){this.ca.ka();g.f.info("Requesting explicit trigger refresh.");this.Rb(null,!0,null,a,b)};b.M.prototype.Xk=function(a,c){var d=new b.Ja,e=this.ca.ka(),f=g.$.yi;d.K.push(new b.Event(this.H.U(),f,(new Date).valueOf(),e,{a:a,l:c}));d.L=this.A.Ca(d.K);return d};b.M.prototype.Uf=function(a,c){var d=new b.Ja,e=this.ca.ka();if(this.Oa.Ak(a))return g.f.info('Custom Event "'+a+'" is blacklisted, ignoring.'),d;d.K.push(new b.Event(this.H.U(),g.$.CustomEvent,(new Date).valueOf(),
            e,{n:a,p:c}));d.L=this.A.Ca(d.K);return d};b.M.prototype.Vf=function(a,c,d,e,f){var h=new b.Ja,q=this.ca.ka();if(this.Oa.bl(a))return g.f.info('Purchase "'+a+'" is blacklisted, ignoring.'),h;h.K.push(new b.Event(this.H.U(),g.$.dj,(new Date).valueOf(),q,{pid:a,c:d,p:c,q:e,pr:f}));h.L=this.A.Ca(h.K);return h};b.M.prototype.Pe=function(a,c,d,e,f,h){var q=new b.Ja,l=this.ca.ka();c={latitude:c,longitude:d};null!=e&&(c.altitude=e);null!=f&&(c.ll_accuracy=f);null!=h&&(c.alt_accuracy=h);q.K.push(new b.Event(a,
            g.$.nj,(new Date).valueOf(),l,c));q.L=this.A.Ca(q.K);return q};b.M.prototype.Id=function(a){var c=new b.Ja,d=this.ca.ka();if(a instanceof b.cc)c.K.push(new b.Event(this.H.U(),g.$.Ji,(new Date).valueOf(),d,{trigger_ids:[a.triggerId]}));else{if(!a.ag())return g.f.info("This in-app message has already received an impression. Ignoring analytics event."),c;a=this.re(a);if(null==a)return c;c.K.push(new b.Event(this.H.U(),g.$.cj,(new Date).valueOf(),d,a))}c.L=this.A.Ca(c.K);return c};b.M.prototype.Je=function(a){var c=
            new b.Ja,d=this.ca.ka();if(!a.Ac())return g.f.info("This in-app message has already received a click. Ignoring analytics event."),c;a=this.re(a);if(null==a)return c;c.K.push(new b.Event(this.H.U(),g.$.xg,(new Date).valueOf(),d,a));c.L=this.A.Ca(c.K);return c};b.M.prototype.Ie=function(a,c){var d=new b.Ja,e=this.ca.ka();if(!a.Ac())return g.f.info("This in-app message button has already received a click. Ignoring analytics event."),d;c=this.re(c);if(null==c)return d;if(a.id===b.h.Da.ng)return g.f.info("This in-app message button does not have a tracking id. Not logging event to Braze servers."),
            d;null!=a.id&&(c.bid=a.id);d.K.push(new b.Event(this.H.U(),g.$.wg,(new Date).valueOf(),e,c));d.L=this.A.Ca(d.K);return d};b.M.prototype.Hd=function(a,c,d){var e=new b.Ja,f=this.ca.ka();if(!a.Ac(d))return g.f.info("This in-app message has already received a click. Ignoring analytics event."),e;a=this.re(a);if(null==a)return e;d=g.$.xg;null!=c&&(a.bid=c,d=g.$.wg);e.K.push(new b.Event(this.H.U(),d,(new Date).valueOf(),f,a));e.L=this.A.Ca(e.K);return e};b.M.prototype.sa=function(a,c){var d=new b.Ja,e=
            this.ca.ka();a={trigger_ids:[a],error_code:c};d.K.push(new b.Event(this.H.U(),g.$.bj,(new Date).valueOf(),e,a));d.L=this.A.Ca(d.K);return d};b.M.prototype.Vb=function(a,c){var d=new b.Ja,e=this.ca.ka(),f=[],h=[],q;q=c?this.A.na(b.j.B.C.$c)||{}:this.A.na(b.j.B.C.Yc)||{};for(var l=0;l<a.length;l++)a[l].ag(),a[l]instanceof b.nb?h.push(a[l]):f.push(a[l]),q[a[l].id]=!0;a=this.qe(f);h=this.qe(h);if(null==a&&null==h)return d;c?this.A.ga(b.j.B.C.$c,q):this.A.ga(b.j.B.C.Yc,q);null!=a&&d.K.push(new b.Event(this.H.U(),
            c?g.$.Gi:g.$.Di,(new Date).valueOf(),e,a));null!=h&&c&&d.K.push(new b.Event(this.H.U(),g.$.Ii,(new Date).valueOf(),e,h));d.L=this.A.Ca(d.K);return d};b.M.prototype.Ub=function(a,c){var d=new b.Ja,e=this.ca.ka();a.Ac();if(null==a.url||""===a.url)return g.f.info("Card "+a.id+" has no url. Not logging click to Braze servers."),d;a=this.qe([a]);if(null==a)return d;d.K.push(new b.Event(this.H.U(),c?g.$.Ei:g.$.Ci,(new Date).valueOf(),e,a));d.L=this.A.Ca(d.K);return d};b.M.prototype.He=function(a){var c=
            new b.Ja,d=this.ca.ka();if(!a.Uc())return g.f.info("Card "+a.id+" refused this dismissal. Ignoring analytics event."),c;var e=this.A.na(b.j.B.C.Zc)||{};e[a.id]=!0;this.A.ga(b.j.B.C.Zc,e);a=this.qe([a]);if(null==a)return c;c.K.push(new b.Event(this.H.U(),g.$.Fi,(new Date).valueOf(),d,a));c.L=this.A.Ca(c.K);return c};b.M.prototype.Rh=function(a){var c=new b.Ja,d=this.ca.ka();c.K.push(new b.Event(this.H.U(),g.$.fj,(new Date).valueOf(),d,{n:a}));c.L=this.A.Ca(c.K);return c};b.M.prototype.sk=function(a,
            c){var d=this.ca.ka();return new b.Event(this.H.U(),g.$.Aj,a,d,{cid:c})};b.M.prototype.ti=function(){var a=g.Z.ob.ic;(new g.Z(a,g.f)).setItem(a.oa.Ki,1,{baseUrl:this.ge,data:{api_key:this.Wa,device_id:this.vd.Fd().id},userId:this.H.U()})};b.M.prototype.gg=function(a,c,d,e,f){this.ca.ka();var h=new b.Ud(this.H.U(),a,c,d,this.vd.Fd().rc(),this.Vg);this.zf.push(h);this.Rb(null,null,null,function(){"function"===typeof e&&e(a,c,d)},function(){"function"===typeof f&&f(a,c,d)})};b.M.prototype.Yk=function(a,
            c,d){var e=new b.Ja;if(this.Oa.Ah(a))return g.f.info('Custom Attribute "'+a+'" is blacklisted, ignoring.'),e.L=!1,e;var f=this.ca.ka(),h;null===c&&null===d?(h=g.$.mj,a={key:a}):(h=g.$.lj,a={key:a,latitude:c,longitude:d});e.K.push(new b.Event(this.H.U(),h,(new Date).valueOf(),f,a));e.L=this.A.Ca(e.K);return e};b.Oc={wc:function(){var a=this.Dk(navigator.userAgent||"");this.Jf=a[0]||"Unknown Browser";this.version=a[1]||"Unknown Version";this.yj=this.jl(this.uk)||navigator.platform;this.language=(navigator.gm||
            navigator.language||navigator.browserLanguage||navigator.em||"").toLowerCase();this.Tk=this.wk(navigator.userAgent);this.userAgent=navigator.userAgent},jl:function(a){for(var c=0;c<a.length;c++){var d=a[c].Ga,e=a[c].dm;if(d)if(d=d.toLowerCase(),b.F.isArray(a[c].ua))for(e=0;e<a[c].ua.length;e++){if(-1!==d.indexOf(a[c].ua[e].toLowerCase()))return a[c].xa}else{if(-1!==d.indexOf(a[c].ua.toLowerCase()))return a[c].xa}else if(e)return a[c].xa}},Dk:function(a){var b,d=a.match(/(konqueror|icab|crios|opera|chrome|safari|firefox|camino|msie|trident(?=\\/))\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i)||
            [];if(/trident/i.test(d[1]))return b=/\\brv[ :]+(\\.?\\d+(\\.\\d+)*)/g.exec(a)||[],["Internet Explorer",b[1]||""];if("Chrome"===d[1]&&(b=a.match(/\\b(OPR|Edge|EdgA)\\/(\\.?\\d+(\\.\\d+)*)/),null!=b))return b=b.slice(1),b[0]=b[0].replace("OPR","Opera"),b[0]=b[0].replace("EdgA","Edge"),[b[0],b[1]];if("Safari"===d[1]&&(b=a.match(/\\b(EdgiOS)\\/(\\.?\\d+(\\.\\d+)*)/),null!=b))return b=b.slice(1),b[0]=b[0].replace("EdgiOS","Edge"),[b[0],b[1]];d=d[2]?[d[1],d[2]]:[null,null];null!=(b=a.match(/version\\/(\\.?\\d+(\\.\\d+)*)/i))&&
            d.splice(1,1,b[1]);if("Opera"===d[0]&&null!=(b=a.match(/mini\\/(\\.?\\d+(\\.\\d+)*)/i)))return["Opera Mini",b[1]||""];"MSIE"===d[0]&&(d[0]="Internet Explorer");"CriOS"===d[0]&&(d[0]="Chrome");return d},Dl:function(){return"Internet Explorer"===this.Jf?8<this.version:!0},wk:function(a){a=a.toLowerCase();return-1!==a.indexOf("googlebot")||-1!==a.indexOf("bingbot")||-1!==a.indexOf("slurp")||-1!==a.indexOf("duckduckbot")||-1!==a.indexOf("baiduspider")||-1!==a.indexOf("yandexbot")||-1!==a.indexOf("facebookexternalhit")||
            -1!==a.indexOf("sogou")||-1!==a.indexOf("ia_archiver")||-1!==a.indexOf("+https://github.com/prerender/prerender")},uk:[{Ga:navigator.platform,ua:"Win",xa:"Windows"},{Ga:navigator.platform,ua:"Mac",xa:"Mac"},{Ga:navigator.platform,ua:"BlackBerry",xa:"BlackBerry"},{Ga:navigator.platform,ua:"FreeBSD",xa:"FreeBSD"},{Ga:navigator.platform,ua:"OpenBSD",xa:"OpenBSD"},{Ga:navigator.platform,ua:"Nintendo",xa:"Nintendo"},{Ga:navigator.platform,ua:"SunOS",xa:"SunOS"},{Ga:navigator.platform,ua:"PlayStation",
            xa:"PlayStation"},{Ga:navigator.platform,ua:"X11",xa:"X11"},{Ga:navigator.userAgent,ua:"iPhone",xa:"iOS"},{Ga:navigator.userAgent,ua:"iPad",xa:"iOS"},{Ga:navigator.platform,ua:"Pike v",xa:"iOS"},{Ga:navigator.platform,ua:["Linux armv7l","Android"],xa:"Android"},{Ga:navigator.userAgent,ua:["Android"],xa:"Android"},{Ga:navigator.platform,ua:"Linux",xa:"Linux"}]};b.F={};b.F.mb=function(a,c,d,e){a=b.F.values(a);return-1===a.indexOf(c)?(g.f.error(d+" Valid values from "+e+' are "'+a.join('"/"')+'".'),
            !1):!0};b.F.isArray=function(a){return Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a)};b.F.yb=function(a){return"[object Date]"===Object.prototype.toString.call(a)};b.F.Uk=function(a){return"[object Object]"===Object.prototype.toString.call(a)};b.F.Sk=function(a){null==a&&(a=[]);for(var b=[],d=arguments.length,e=0,f=a.length;e<f;e++){var h=a[e];if(-1===b.indexOf(h)){for(var g=1;g<d&&-1!==arguments[g].indexOf(h);g++);g===d&&b.push(h)}}return b};b.F.keys=function(a){var b=
            [],d;for(d in a)a.hasOwnProperty(d)&&b.push(d);return b};b.F.values=function(a){var b=[],d;for(d in a)a.hasOwnProperty(d)&&void 0!==a[d]&&b.push(a[d]);return b};b.F.isEqual=function(a,c){if(a===c)return 0!==a||1/a===1/c;if(null==a||null==c)return a===c;var d=a.toString();if(d!==c.toString())return!1;switch(d){case "[object RegExp]":case "[object String]":return""+a===""+c;case "[object Number]":return+a!==+a?+c!==+c:0===+a?1/+a===1/c:+a===+c;case "[object Date]":case "[object Boolean]":return+a===
            +c}d="[object Array]"===d;if(!d){if("object"!==typeof a||"object"!==typeof c)return!1;var e=a.constructor,f=c.constructor;if(e!==f&&!("function"===typeof e&&e instanceof e&&"function"===typeof f&&f instanceof f)&&"constructor"in a&&"constructor"in c)return!1}for(var e=[],f=[],h=e.length;h--;)if(e[h]===a)return f[h]===c;e.push(a);f.push(c);if(d){h=a.length;if(h!==c.length)return!1;for(;h--;)if(!b.F.isEqual(a[h],c[h],e,f))return!1}else{var d=b.F.keys(a),g,h=d.length;if(b.F.keys(c).length!==h)return!1;
            for(;h--;)if(g=d[h],!c.hasOwnProperty(g)||!b.F.isEqual(a[g],c[g],e,f))return!1}e.pop();f.pop();return!0};b.N={};b.N.Cd=function(a,b){a/=1E3;b&&(a=Math.floor(a));return a};b.N.gb=function(a){var b=parseInt(a);return null==a||isNaN(b)?null:new Date(1E3*b)};b.N.mi=function(a){return null!=a&&b.F.yb(a)?a.toISOString().replace(/\\.[0-9]{3}Z$/,""):a};b.N.Vc=function(a){return null==a||""===a?null:new Date(a)};b.N.El=function(a){return null==a||""===a?(new Date).valueOf():a};b.N.$h=function(a){return((new Date).valueOf()-
            a.valueOf())/1E3};b.N.ai=function(a){return(a.valueOf()-(new Date).valueOf())/1E3};b.Na={};b.Na.tf=32;b.Na.Ng=9;b.Na.df=13;b.Na.Si=27;b.Sf={wc:function(a,b){this.data={en:{NO_CARDS_MESSAGE:"We have no updates for you at this time.<br/>Please check again later.",FEED_TIMEOUT_MESSAGE:"Sorry, this refresh timed out.<br/>Please try again later."},ar:{NO_CARDS_MESSAGE:"\\u0644\\u064a\\u0633 \\u0644\\u062f\\u064a\\u0646\\u0627 \\u0623\\u064a \\u062a\\u062d\\u062f\\u064a\\u062b. \\u064a\\u0631\\u062c\\u0649 \\u0627\\u0644\\u062a\\u062d\\u0642\\u0642 \\u0645\\u0631\\u0629 \\u0623\\u062e\\u0631\\u0649 \\u0644\\u0627\\u062d\\u0642\\u0627\\u064b",
            FEED_TIMEOUT_MESSAGE:"\\u064a\\u0631\\u062c\\u0649 \\u062a\\u0643\\u0631\\u0627\\u0631 \\u0627\\u0644\\u0645\\u062d\\u0627\\u0648\\u0644\\u0629 \\u0644\\u0627\\u062d\\u0642\\u0627"},da:{NO_CARDS_MESSAGE:"Vi har ingen updates.<br/>Pr\\u00f8v venligst senere.",FEED_TIMEOUT_MESSAGE:"Pr\\u00f8v venligst senere."},de:{NO_CARDS_MESSAGE:"Derzeit sind keine Updates verf\\u00fcgbar.<br/>Bitte sp\\u00e4ter noch einmal versuchen.",FEED_TIMEOUT_MESSAGE:"Bitte sp\\u00e4ter noch einmal versuchen."},es:{NO_CARDS_MESSAGE:"No tenemos actualizaciones.<br/>Por favor compru\\u00e9belo m\\u00e1s tarde.",
            FEED_TIMEOUT_MESSAGE:"Por favor int\\u00e9ntelo m\\u00e1s tarde."},"es-mx":{NO_CARDS_MESSAGE:"No tenemos ninguna actualizaci\\u00f3n.<br/>Vuelva a verificar m\\u00e1s tarde.",FEED_TIMEOUT_MESSAGE:"Por favor, vuelva a intentarlo m\\u00e1s tarde."},et:{NO_CARDS_MESSAGE:"Uuendusi pole praegu saadaval.<br/>Proovige hiljem uuesti.",FEED_TIMEOUT_MESSAGE:"Palun proovige hiljem uuesti."},fi:{NO_CARDS_MESSAGE:"P\\u00e4ivityksi\\u00e4 ei ole saatavilla.<br/>Tarkista my\\u00f6hemmin uudelleen.",FEED_TIMEOUT_MESSAGE:"Yrit\\u00e4 my\\u00f6hemmin uudelleen."},
            fr:{NO_CARDS_MESSAGE:"Aucune mise \\u00e0 jour disponible.<br/>Veuillez v\\u00e9rifier ult\\u00e9rieurement.",FEED_TIMEOUT_MESSAGE:"Veuillez r\\u00e9essayer ult\\u00e9rieurement."},he:{NO_CARDS_MESSAGE:".\\u05d0\\u05d9\\u05df \\u05dc\\u05e0\\u05d5 \\u05e2\\u05d3\\u05db\\u05d5\\u05e0\\u05d9\\u05dd. \\u05d1\\u05d1\\u05e7\\u05e9\\u05d4 \\u05d1\\u05d3\\u05d5\\u05e7 \\u05e9\\u05d5\\u05d1 \\u05d1\\u05e7\\u05e8\\u05d5\\u05d1",FEED_TIMEOUT_MESSAGE:".\\u05d1\\u05d1\\u05e7\\u05e9\\u05d4 \\u05e0\\u05e1\\u05d4 \\u05e9\\u05d5\\u05d1 \\u05d1\\u05e7\\u05e8\\u05d5\\u05d1"},
            hi:{NO_CARDS_MESSAGE:"\\u0939\\u092e\\u093e\\u0930\\u0947 \\u092a\\u093e\\u0938 \\u0915\\u094b\\u0908 \\u0905\\u092a\\u0921\\u0947\\u091f \\u0928\\u0939\\u0940\\u0902 \\u0939\\u0948\\u0902\\u0964 \\u0915\\u0943\\u092a\\u092f\\u093e \\u092c\\u093e\\u0926 \\u092e\\u0947\\u0902 \\u092b\\u093f\\u0930 \\u0938\\u0947 \\u091c\\u093e\\u0901\\u091a \\u0915\\u0930\\u0947\\u0902.\\u0964",FEED_TIMEOUT_MESSAGE:"\\u0915\\u0943\\u092a\\u092f\\u093e \\u092c\\u093e\\u0926 \\u092e\\u0947\\u0902 \\u0926\\u094b\\u092c\\u093e\\u0930\\u093e \\u092a\\u094d\\u0930\\u092f\\u093e\\u0938 \\u0915\\u0930\\u0947\\u0902\\u0964."},
            id:{NO_CARDS_MESSAGE:"Kami tidak memiliki pembaruan. Coba lagi nanti.",FEED_TIMEOUT_MESSAGE:"Coba lagi nanti."},it:{NO_CARDS_MESSAGE:"Non ci sono aggiornamenti.<br/>Ricontrollare pi\\u00f9 tardi.",FEED_TIMEOUT_MESSAGE:"Riprovare pi\\u00f9 tardi."},ja:{NO_CARDS_MESSAGE:"\\u30a2\\u30c3\\u30d7\\u30c7\\u30fc\\u30c8\\u306f\\u3042\\u308a\\u307e\\u305b\\u3093\\u3002<br/>\\u5f8c\\u3067\\u3082\\u3046\\u4e00\\u5ea6\\u78ba\\u8a8d\\u3057\\u3066\\u304f\\u3060\\u3055\\u3044\\u3002",FEED_TIMEOUT_MESSAGE:"\\u5f8c\\u3067\\u3082\\u3046\\u4e00\\u5ea6\\u8a66\\u3057\\u3066\\u304f\\u3060\\u3055\\u3044\\u3002"},
            ko:{NO_CARDS_MESSAGE:"\\uc5c5\\ub370\\uc774\\ud2b8\\uac00 \\uc5c6\\uc2b5\\ub2c8\\ub2e4. \\ub2e4\\uc74c\\uc5d0 \\ub2e4\\uc2dc \\ud655\\uc778\\ud574 \\uc8fc\\uc2ed\\uc2dc\\uc624.",FEED_TIMEOUT_MESSAGE:"\\ub098\\uc911\\uc5d0 \\ub2e4\\uc2dc \\uc2dc\\ub3c4\\ud574 \\uc8fc\\uc2ed\\uc2dc\\uc624."},ms:{NO_CARDS_MESSAGE:"Tiada kemas kini. Sila periksa kemudian.",FEED_TIMEOUT_MESSAGE:"Sila cuba kemudian."},nl:{NO_CARDS_MESSAGE:"Er zijn geen updates.<br/>Probeer het later opnieuw.",FEED_TIMEOUT_MESSAGE:"Probeer het later opnieuw."},no:{NO_CARDS_MESSAGE:"Vi har ingen oppdateringer.<br/>Vennligst sjekk igjen senere.",
            FEED_TIMEOUT_MESSAGE:"Vennligst pr\\u00f8v igjen senere."},pl:{NO_CARDS_MESSAGE:"Brak aktualizacji.<br/>Prosz\\u0119 sprawdzi\\u0107 ponownie p\\u00f3\\u017aniej.",FEED_TIMEOUT_MESSAGE:"Prosz\\u0119 spr\\u00f3bowa\\u0107 ponownie p\\u00f3\\u017aniej."},pt:{NO_CARDS_MESSAGE:"N\\u00e3o temos atualiza\\u00e7\\u00f5es.<br/>Por favor, verifique mais tarde.",FEED_TIMEOUT_MESSAGE:"Por favor, tente mais tarde."},"pt-br":{NO_CARDS_MESSAGE:"N\\u00e3o temos nenhuma atualiza\\u00e7\\u00e3o.<br/>Verifique novamente mais tarde.",
            FEED_TIMEOUT_MESSAGE:"Tente novamente mais tarde."},ru:{NO_CARDS_MESSAGE:"\\u041e\\u0431\\u043d\\u043e\\u0432\\u043b\\u0435\\u043d\\u0438\\u044f \\u043d\\u0435\\u0434\\u043e\\u0441\\u0442\\u0443\\u043f\\u043d\\u044b.<br/>\\u041f\\u043e\\u0436\\u0430\\u043b\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043f\\u0440\\u043e\\u0432\\u0435\\u0440\\u044c\\u0442\\u0435 \\u0441\\u043d\\u043e\\u0432\\u0430 \\u043f\\u043e\\u0437\\u0436\\u0435.",FEED_TIMEOUT_MESSAGE:"\\u041f\\u043e\\u0436\\u0430\\u043b\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043f\\u043e\\u0432\\u0442\\u043e\\u0440\\u0438\\u0442\\u0435 \\u043f\\u043e\\u043f\\u044b\\u0442\\u043a\\u0443 \\u043f\\u043e\\u0437\\u0436\\u0435."},
            sv:{NO_CARDS_MESSAGE:"Det finns inga uppdateringar.<br/>F\\u00f6rs\\u00f6k igen senare.",FEED_TIMEOUT_MESSAGE:"F\\u00f6rs\\u00f6k igen senare."},th:{NO_CARDS_MESSAGE:"\\u0e40\\u0e23\\u0e32\\u0e44\\u0e21\\u0e48\\u0e21\\u0e35\\u0e01\\u0e32\\u0e23\\u0e2d\\u0e31\\u0e1e\\u0e40\\u0e14\\u0e15 \\u0e01\\u0e23\\u0e38\\u0e13\\u0e32\\u0e15\\u0e23\\u0e27\\u0e08\\u0e2a\\u0e2d\\u0e1a\\u0e20\\u0e32\\u0e22\\u0e2b\\u0e25\\u0e31\\u0e07.",FEED_TIMEOUT_MESSAGE:"\\u0e01\\u0e23\\u0e38\\u0e13\\u0e32\\u0e25\\u0e2d\\u0e07\\u0e43\\u0e2b\\u0e21\\u0e48\\u0e20\\u0e32\\u0e22\\u0e2b\\u0e25\\u0e31\\u0e07."},
            vi:{NO_CARDS_MESSAGE:"Ch\\u00fang t\\u00f4i kh\\u00f4ng c\\u00f3 c\\u1eadp nh\\u1eadt n\\u00e0o.<br/>Vui l\\u00f2ng ki\\u1ec3m tra l\\u1ea1i sau.",FEED_TIMEOUT_MESSAGE:"Vui l\\u00f2ng th\\u1eed l\\u1ea1i sau."},"zh-hk":{NO_CARDS_MESSAGE:"\\u66ab\\u6642\\u6c92\\u6709\\u66f4\\u65b0.<br/>\\u8acb\\u7a0d\\u5019\\u518d\\u8a66.",FEED_TIMEOUT_MESSAGE:"\\u8acb\\u7a0d\\u5019\\u518d\\u8a66."},"zh-hans":{NO_CARDS_MESSAGE:"\\u6682\\u65f6\\u6ca1\\u6709\\u66f4\\u65b0.<br/>\\u8bf7\\u7a0d\\u540e\\u518d\\u8bd5.",FEED_TIMEOUT_MESSAGE:"\\u8bf7\\u7a0d\\u5019\\u518d\\u8bd5."},
            "zh-hant":{NO_CARDS_MESSAGE:"\\u66ab\\u6642\\u6c92\\u6709\\u66f4\\u65b0.<br/>\\u8acb\\u7a0d\\u5019\\u518d\\u8a66.",FEED_TIMEOUT_MESSAGE:"\\u8acb\\u7a0d\\u5019\\u518d\\u8a66."},"zh-tw":{NO_CARDS_MESSAGE:"\\u66ab\\u6642\\u6c92\\u6709\\u66f4\\u65b0.<br/>\\u8acb\\u7a0d\\u5019\\u518d\\u8a66.",FEED_TIMEOUT_MESSAGE:"\\u8acb\\u7a0d\\u5019\\u518d\\u8a66."},zh:{NO_CARDS_MESSAGE:"\\u6682\\u65f6\\u6ca1\\u6709\\u66f4\\u65b0.<br/>\\u8bf7\\u7a0d\\u540e\\u518d\\u8bd5.",FEED_TIMEOUT_MESSAGE:"\\u8bf7\\u7a0d\\u5019\\u518d\\u8bd5."}};null!=a&&(a=a.toLowerCase());
            if(null!=a&&null==this.data[a]){var c=a.indexOf("-");0<c&&(a=a.substring(0,c))}null==this.data[a]&&(a="Braze does not yet have a localization for language "+a+", defaulting to English. Please contact us if you are willing and able to help us translate our SDK into this language.",b?g.f.error(a):g.f.info(a),a="en");this.language=a},get:function(a){return this.data[this.language][a]}};b.Math={};b.Math.Yh=function(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(Math.random()*(b-a+1))+a};b.Ke=function(){};
            b.Ke.Xf=function(a){var b,d,e=!1;try{if(window.XMLHttpRequest&&(b=new XMLHttpRequest)&&"undefined"!==typeof b.withCredentials||("undefined"!==typeof XDomainRequest?(b=new XDomainRequest,e=b.async=!0):g.f.error("This browser does not have any supported ajax options!")),null!=b){var f=function(){"function"===typeof a.error&&a.error(b.status);"function"===typeof a.ye&&a.ye(!1)};b.onload=function(){var c;if(e)c=!0;else{if(4!==b.readyState)return;c=200<=b.status&&300>b.status||304===b.status}c?("function"===
            typeof a.L&&a.L(JSON.parse(b.responseText)),"function"===typeof a.ye&&a.ye(!0)):f()};b.onerror=function(){f()};b.ontimeout=function(){f()};d=JSON.stringify(a.data);if(e)b.onprogress=function(){},b.open("post",a.url);else{b.open("POST",a.url,!0);b.setRequestHeader("Content-type","application/json");b.setRequestHeader("X-Requested-With","XMLHttpRequest");for(var h=a.headers||[],q=0;q<h.length;q++)b.setRequestHeader(h[q][0],h[q][1])}b.send(d)}}catch(l){g.f.error("Network request error: "+l.message)}};
            b.T=function(){};b.T.Bi=/^[^\\x00-\\x1F\\x22]+$/;b.T.Pi=/(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/;b.T.Zb=function(a,b,
            d,e){(e="string"===typeof a||null===a&&e)||g.f.error("Cannot "+b+" because "+d+' "'+a+'" is invalid.');return e};b.T.Za=function(a,c,d){var e=null!=a&&"string"===typeof a&&(""===a||a.match(b.T.Bi));e||g.f.error("Cannot "+c+" because "+d+' "'+a+'" is invalid.');return e};b.T.Nl=function(a,c,d){var e=typeof a,f=b.F.yb(a);(e=null!=a&&("number"===e||"boolean"===e||f||"string"===e))||g.f.error("Cannot "+c+" because "+d+' "'+a+'" is invalid.');return e};b.T.Nh=function(a){return"string"===typeof a&&null!=
            a.match(b.T.Pi)};b.$a={};b.$a.zb=function(a){a=parseInt(a);if(isNaN(a))return"";a>>>=0;var c=a&255,d=(a&65280)>>>8,e=(a&16711680)>>>16;return b.Oc.Dl()?"rgba("+[e,d,c,((a&4278190080)>>>24)/255].join()+")":"rgb("+[e,d,c].join()+")"};b.$a.fm=function(a){a=parseInt(a);if(isNaN(a))return"";a>>>=0;return"rgb("+[(a&16711680)>>>16,(a&65280)>>>8,a&255].join()+")"};b.la={};b.la.ed={Jj:"up",Oi:"down",Ag:"left",Cj:"right"};b.la.Qf=function(a,b,d,e){if(null==a)return!1;b=b||!1;d=d||!1;a=a.getBoundingClientRect();
            return null==a?!1:(0<=a.top&&a.top<=(window.innerHeight||document.documentElement.clientHeight)||!b)&&(0<=a.left||!e)&&(0<=a.bottom&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)||!d)&&(a.right<=(window.innerWidth||document.documentElement.clientWidth)||!e)};b.la.Il=function(a){return b.la.Qf(a,!0,!1,!1)};b.la.ik=function(a){return b.la.Qf(a,!1,!0,!1)};b.la.Ch=function(a){if(a.onclick){var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0);a.onclick.apply(a,[b])}};
            b.la.xk=function(a,c,d){var e=null,f=null;a.addEventListener("touchstart",function(a){e=a.touches[0].clientX;f=a.touches[0].clientY},!1);a.addEventListener("touchmove",function(a){if(null!=e&&null!=f){var g=e-a.touches[0].clientX,h=f-a.touches[0].clientY;Math.abs(g)>Math.abs(h)&&25<=Math.abs(g)?(0<g&&c===b.la.ed.Ag?d(a):c===b.la.ed.Cj&&d(a),f=e=null):25<=Math.abs(h)&&(0<h&&c===b.la.ed.Jj?d(a):c===b.la.ed.Oi&&d(a),f=e=null)}},!1)};b.Db.prototype.ze="ab-classic-card";b.Cb.prototype.ze="ab-captioned-image";
            b.Banner.prototype.ze="ab-banner";b.nb.prototype.ze="ab-control-card";b.Db.prototype.Ee=!0;b.Cb.prototype.Ee=!0;b.Banner.prototype.Ee=!1;b.nb.prototype.Ee=!1;b.b.Qg="data-ab-had-top-impression";b.b.jg="data-ab-had-bottom-impression";b.b.Hl=function(a){return null!=a&&!!a.getAttribute(b.b.Qg)};b.b.Qk=function(a){null!=a&&a.setAttribute(b.b.Qg,!0)};b.b.hk=function(a){return null!=a&&!!a.getAttribute(b.b.jg)};b.b.Pk=function(a){null!=a&&a.setAttribute(b.b.jg,!0)};b.b.Sh=function(a){null!=a&&(a=a.querySelectorAll(".ab-unread-indicator")[0],
            null!=a&&(a.className+=" read"))};b.b.Ek=function(a){return a.getAttribute("data-ab-card-id")};b.b.prototype.Qa=function(a,c,d){function e(c){c=c||window.event;b.b.Sh(f);g&&(a(q),b.pa.openUri(q.url,c,d));return!1}var f=document.createElement("div");f.className="ab-card "+this.constructor.prototype.ze;f.setAttribute("data-ab-card-id",this.id);var g=this.url&&""!==this.url,q=this;if(this.pinned){var l=document.createElement("div");l.className="ab-pinned-indicator";var p=document.createElement("i");
            p.className="fa fa-star";l.appendChild(p);f.appendChild(l)}this.imageUrl&&""!==this.imageUrl&&(l=document.createElement("div"),l.className="ab-image-area",p=document.createElement("img"),p.setAttribute("src",this.imageUrl),l.appendChild(p),f.className+=" with-image",g&&!this.constructor.prototype.Ee?(p=document.createElement("a"),p.setAttribute("href",this.url),p.onclick=e,p.appendChild(l),f.appendChild(p)):f.appendChild(l));l=document.createElement("div");l.className="ab-card-body";if(this.dismissible){p=
            document.createElement("i");p.className="fa fa-times ab-close-button fa-times-circle";var n=function(a){a=a||window.event;c(q);f.className+=" ab-hide";setTimeout(function(){f&&f.parentNode&&f.parentNode.removeChild(f)},b.J.ae);a.stopPropagation()};p.onclick=n;f.appendChild(p);b.la.xk(l,b.la.ed.Ag,n)}p=document.createElement("div");p.className="ab-title";g?(n=document.createElement("a"),n.setAttribute("href",this.url),n.onclick=e,n.appendChild(document.createTextNode(this.title)),p.appendChild(n)):
            p.appendChild(document.createTextNode(this.title));l.appendChild(p);p=document.createElement("div");p.className="ab-description";p.appendChild(document.createTextNode(this.description));if(g){n=document.createElement("div");n.className="ab-url-area";var k=document.createElement("a");k.setAttribute("href",this.url);k.appendChild(document.createTextNode(this.linkText));k.onclick=e;n.appendChild(k);p.appendChild(n)}l.appendChild(p);f.appendChild(l);l=document.createElement("div");l.className="ab-unread-indicator";
            this.viewed&&(l.className+=" read");f.appendChild(l);return f};b.J.ae=240;b.J.hd=6E4;b.va.hd=6E4;b.J.Lg="data-update-subscription-id";b.J.Xd="data-last-requested-refresh";b.J.Bj=1E4;b.J.ha=function(a,c){c&&(c.className=c.className.replace("ab-show","ab-hide"),setTimeout(function(){c&&c.parentNode&&c.parentNode.removeChild(c)},b.J.ae));var d=c.getAttribute(b.J.Lg);null!=d&&a.Fa(d)};b.J.prototype.Vb=function(a,b){a.Vb(b)};b.J.prototype.Ub=function(a,b){a.Ub(b)};b.J.prototype.qh=function(a,c){var d=
            document.createElement("div");d.className="ab-feed-body";if(null==this.lastUpdated){c=document.createElement("div");c.className="ab-no-cards-message";var e=document.createElement("i");e.className="fa fa-spinner fa-spin fa-4x ab-initial-spinner";c.appendChild(e);d.appendChild(c)}else{for(var e=!1,f=this,h=function(b){f.Ub(a,b)},k=function(b){a.He(b)},l=0;l<this.cards.length;l++){var p=this.cards[l]instanceof b.nb;!p||this instanceof b.va?(d.appendChild(this.cards[l].Qa(h,k,c)),e=e||!p):g.f.error("Received a control card for a legacy news feed. Control cards are only supported with content cards.")}e||
            (c=document.createElement("div"),c.className="ab-no-cards-message",c.innerHTML=b.Sf.get("NO_CARDS_MESSAGE"),d.appendChild(c))}return d};b.J.prototype.Ae=function(a,c){if(null!=c){var d=[];c=c.querySelectorAll(".ab-card");for(var e=0;e<c.length;e++){var f=b.b.Hl(c[e]),g=b.b.hk(c[e]),k=f,l=g,p=b.la.Il(c[e]),n=b.la.ik(c[e]);!f&&p&&(f=!0,b.b.Qk(c[e]));!g&&n&&(g=!0,b.b.Pk(c[e]));if(f&&g&&(p||n||b.b.Sh(c[e]),!k||!l))for(f=b.b.Ek(c[e]),g=0;g<this.cards.length;g++)if(this.cards[e].id===f){d.push(this.cards[e]);
            break}}0<d.length&&this.Vb(a,d)}};b.J.prototype.ph=function(a){a.Oe()};b.J.prototype.cg=function(a,c){var d=c.querySelectorAll(".ab-refresh-button")[0];null!=d&&(d.className+=" fa-spin");var e=Date.now().toString();c.setAttribute(b.J.Xd,e);setTimeout(function(){if(c.getAttribute(b.J.Xd)===e){for(var a=c.querySelectorAll(".fa-spin"),d=0;d<a.length;d++)a[d].className=a[d].className.replace(/fa-spin/g,"");a=c.querySelectorAll(".ab-initial-spinner")[0];null!=a&&(d=document.createElement("span"),d.innerHTML=
            b.Sf.get("FEED_TIMEOUT_MESSAGE"),a.parentNode.appendChild(d),a.parentNode.removeChild(a))}},b.J.Bj);this.ph(a)};b.J.prototype.Qa=function(a,c){function d(b){b=b||window.event;f.cg(a,g);b.stopPropagation()}function e(c){c=c||window.event;b.J.ha(a,g);c.stopPropagation()}var f=this,g=document.createElement("div");g.className="ab-feed ab-show";var k=document.createElement("div");k.className="ab-feed-buttons-wrapper";k.setAttribute("tabindex","-1");g.appendChild(k);var l=document.createElement("i");l.className=
            "fa fa-times ab-close-button";l.setAttribute("aria-label","Close Feed");l.setAttribute("tabindex","0");l.setAttribute("role","button");l.addEventListener("keydown",function(a){a=a||window.event;a.keyCode!==b.Na.tf&&a.keyCode!==b.Na.df||e(a)});l.onclick=e;var p=document.createElement("i");p.className="fa fa-refresh ab-refresh-button";null==this.lastUpdated&&(p.className+=" fa-spin");p.setAttribute("aria-label","Refresh Feed");p.setAttribute("tabindex","0");p.setAttribute("role","button");p.addEventListener("keydown",
            function(a){a=a||window.event;a.keyCode!==b.Na.tf&&a.keyCode!==b.Na.df||d(a)});p.onclick=d;k.appendChild(p);k.appendChild(l);g.appendChild(this.qh(a,c));g.onscroll=function(){f.Ae(a,g)};return g};b.J.prototype.Zh=function(a,c){c.setAttribute(b.J.Lg,a)};b.J.prototype.Te=function(a,c,d,e,f){if(b.F.isArray(a)){for(var g=[],k=0;k<a.length;k++)a[k]instanceof b.b&&g.push(a[k]);this.cards=g;this.lastUpdated=c;null!=d&&(null==this.lastUpdated?b.J.ha(e,d):(a=d.querySelectorAll(".ab-feed-body")[0],null!=a&&
            (f=this.qh(e,f),a.parentNode.replaceChild(f,a),this.Ae(e,f.parentNode))))}};b.va.ha=b.J.ha;b.va.prototype.Vb=function(a,b){a.Vb(b,!0)};b.va.prototype.Ub=function(a,b){a.Ub(b,!0)};b.va.prototype.ph=function(a){a.Bc()};b.h.ae=240;b.h.Ui=480;b.h.pj=200;b.h.ad={NONE:0,rg:1,sg:2};b.h.prototype.Ad=function(){return this.animateIn?" ab-show ":" "};b.h.prototype.yh=function(){return this.animateOut?" ab-hide ":" "};b.h.prototype.Lf=function(a){a.className=a.className.replace(this.Ad(),this.yh());return this.animateOut};
            b.h.prototype.ha=function(a,c){if(a){var d;d=-1===a.className.indexOf("ab-in-app-message")?a.getElementsByClassName("ab-in-app-message")[0]:a;var e=!1;d&&(e=this.Lf(d));var f=document.getElementsByTagName("body")[0];if(null!=f)var g=f.scrollTop;var k=this;d=function(){if(a&&a.parentNode){var d=a.closest(".ab-iam-root");null==d&&(d=a);d.parentNode&&d.parentNode.removeChild(d)}null!=k.Re()&&(d=document.getElementById(k.Re()))&&d.parentNode&&d.parentNode.removeChild(d);null!=f&&"Safari"===b.Oc.Jf&&(f.scrollTop=
            g);c&&c()};e?setTimeout(d,b.h.ae):d()}};b.h.prototype.Qa=function(a,c,d,e,f,g){function h(){-1!==k.className.indexOf("ab-start-hidden")&&(k.className=k.className.replace("ab-start-hidden",l.Ad()),d(g))}var l=this,k=document.createElement("div");k.className="ab-in-app-message ab-start-hidden";this.Tc()&&(k.className+=" ab-modal-interactions");this.ib()||(k.style.color=b.$a.zb(this.textColor));null!=g?g.appendChild(k):g=k;this.imageStyle===b.h.Vd.GRAPHIC&&(k.className+=" graphic");this.orientation===
            b.h.Ia.LANDSCAPE&&(k.className+=" landscape");0===this.buttons.length&&(l.clickAction!==b.h.Eb.NONE&&(k.className+=" ab-clickable"),k.onclick=function(d){d=d||window.event;l.ha(g,function(){a.Je(l);l.clickAction===b.h.Eb.URI?b.pa.openUri(l.uri,d,e||l.openTarget===b.h.md.BLANK):l.clickAction===b.h.Eb.NEWS_FEED&&c()});d.stopPropagation();return!1});var n;this.ib()||(n=this.backgroundColor);X(k,n);if(f!==b.h.ad.NONE){n=document.createElement("i");n.setAttribute("aria-label","Close Message");n.setAttribute("tabindex",
            "0");n.setAttribute("role","button");n.className="fa fa-times ab-close-button";n.className=f===b.h.ad.rg?n.className+" fa-times":n.className+" fa-times-circle";var m=function(a){a=a||window.event;l.ha(g);l.Uc();a.stopPropagation()};n.addEventListener("keydown",function(a){a=a||window.event;a.keyCode!==b.Na.tf&&a.keyCode!==b.Na.df||m(a)});n.onclick=m;l.ib()||(n.style.color=b.$a.zb(this.closeButtonColor));k.appendChild(n)}f=!1;n=document.createElement("div");n.className="ab-image-area";if(this.imageUrl){if(this.cropType===
            b.h.bd.CENTER_CROP){var r=document.createElement("span");r.className="ab-center-cropped-img";r.style.backgroundImage="url("+this.imageUrl+")"}else r=document.createElement("img"),r.setAttribute("src",this.imageUrl),f=!0,r.onload=h,setTimeout(h,1E3);n.appendChild(r);k.appendChild(n)}else if(this.icon){n.className+=" ab-icon-area";r=document.createElement("span");r.className="ab-icon";this.ib()||(r.style.backgroundColor=b.$a.zb(this.iconBackgroundColor),r.style.color=b.$a.zb(this.iconColor));var u=
            document.createElement("i");u.className="fa";u.appendChild(document.createTextNode(this.icon));r.appendChild(u);n.appendChild(r);k.appendChild(n)}n=document.createElement("div");n.className="ab-message-text";n.className+=" "+this.messageAlignment.toLowerCase()+"-aligned";n.addEventListener("touchstart",function(){},{passive:!0});this.header&&0<this.header.length&&(r=document.createElement("span"),r.className="ab-message-header",r.className+=" "+this.headerAlignment.toLowerCase()+"-aligned",this.ib()||
            (r.style.color=b.$a.zb(this.headerTextColor)),r.appendChild(document.createTextNode(this.header)),n.appendChild(r));n.appendChild(document.createTextNode(this.message));k.appendChild(n);f||h();return k};b.h.prototype.Vh=function(){};b.sb.prototype.Qa=function(a,c,d,e,f){a=b.h.prototype.Qa.call(this,a,d,e,f,b.h.ad.rg);a.className+=" ab-slideup ab-effect-slide";return a};b.sb.prototype.Vh=function(a){b.la.Qf(a,!0,!0)||(this.slideFrom===b.h.ce.TOP?a.style.top="0px":a.style.bottom="0px")};b.gc.prototype.Qa=
            function(a,c,d,e,f){c=document.createElement("div");c.className="ab-centering-div ab-modal ab-modal-interactions";e=b.h.prototype.Qa.call(this,a,d,e,f,b.h.ad.sg,c);e.className+=" ab-modal ab-effect-modal";c.setAttribute("tabindex","-1");W(this,a,d,e,f,c);Y(e);return c};b.fc.prototype.Qa=function(a,c,d,e,f){c=b.h.prototype.Qa.call(this,a,d,e,f,b.h.ad.sg);c.className+=" ab-fullscreen ab-effect-fullscreen";c.setAttribute("tabindex","-1");W(this,a,d,c,f);Y(c);return c};b.Ua.prototype.Qa=function(a,c,
            d,e,f){function g(c){var d=c.getAttribute("href"),e=c.onclick;return function(g){g=g||window.event;if(null==e||"function"!==typeof e||!1!==e()){var h=b.Ug.al(d).abButtonId;if(null==h||""===h)h=c.getAttribute("id");if(null!=d&&""!==d&&0!==d.indexOf("#")){var n="blank"===(c.getAttribute("target")||"").toLowerCase().replace("_",""),p=f||k.openTarget===b.h.md.BLANK||n,n=function(){a.Hd(k,h,d);b.pa.openUri(d,g,p)};p?n():k.ha(l,n)}else a.Hd(k,h,d);g.stopPropagation();return!1}}}var k=this,l=document.createElement("iframe");
            l.onload=function(){function a(a){return function(){k.ha(l);c.display[a].apply(c.display,Array.prototype.slice.call(arguments))}}function d(a){return function(){var b=c.getUser();b[a].apply(b,Array.prototype.slice.call(arguments))}}function f(a){return function(){c[a].apply(c,Array.prototype.slice.call(arguments))}}l.contentWindow.document.write(k.message);var h=l.contentWindow.document.getElementsByTagName("head")[0];if(null!=h){var m=document.createElement("style");m.innerHTML=b.Kg;h.appendChild(m);
            k.ib()&&(m=document.createElement("style"),m.innerHTML=k.css,m.id=k.Re(),h.appendChild(m));m=l.contentWindow.document.createElement("base");m.setAttribute("target","_parent");h.appendChild(m)}for(var h={closeMessage:function(){k.ha(l);k.Uc()},display:{},web:{}},q=["requestImmediateDataFlush","logCustomEvent","logPurchase","unregisterAppboyPushMessages"],m=0;m<q.length;m++)h[q[m]]=f(q[m]);for(var q="setFirstName setLastName setEmail setGender setDateOfBirth setCountry setHomeCity setEmailNotificationSubscriptionType setPushNotificationSubscriptionType setPhoneNumber setCustomUserAttribute addToCustomAttributeArray removeFromCustomAttributeArray incrementCustomUserAttribute setCustomLocationAttribute".split(" "),
            v={},m=0;m<q.length;m++)v[q[m]]=d(q[m]);h.getUser=function(){return v};q=["showFeed"];for(m=0;m<q.length;m++)h.display[q[m]]=a(q[m]);q=["registerAppboyPushMessages","trackLocation"];for(m=0;m<q.length;m++)h.web[q[m]]=f(q[m]);l.contentWindow.appboyBridge=h;q=l.contentWindow.document.getElementsByTagName("a");for(m=0;m<q.length;m++)q[m].onclick=g(q[m]);q=l.contentWindow.document.getElementsByTagName("button");for(m=0;m<q.length;m++)q[m].onclick=g(q[m]);m=l.contentWindow.document.body;null!=m&&(k.Ue()&&
            (m.id=k.htmlId),q=document.createElement("hidden"),q.onclick=h.closeMessage,q.className="ab-programmatic-close-button",m.appendChild(q));l.contentWindow.dispatchEvent(new Event("ab.BridgeReady"));-1!==l.className.indexOf("ab-start-hidden")&&(l.className=l.className.replace("ab-start-hidden",k.Ad()),e(l))};l.className="ab-in-app-message ab-start-hidden ab-html-message ab-modal-interactions";return l};b.Ua.prototype.Lf=function(a){var c=b.h.prototype.Lf.call(this,a);if(!this.animateIn&&!this.animateOut){a=
            Array.prototype.slice.call(a.contentWindow.document.body.getElementsByClassName("ab-show"));for(var d=0;d<a.length;d++)c=!0,a[d].className=a[d].className.replace("ab-show","ab-hide")}return c};b.gc.prototype.ha=b.fc.prototype.ha=b.Ua.prototype.ha=function(a,c){for(var d=(a?a.parentNode:document).querySelectorAll(".ab-page-blocker"),e=null,f=0;f<d.length;f++)-1===d[f].className.indexOf("ab-hide")&&(e=d[f]);e&&(e.className=e.className.replace(this.Ad(),this.yh()),d=function(){e.parentNode&&e.parentNode.removeChild(e)},
            this.animateOut?setTimeout(d,b.h.Ui):d());b.h.prototype.ha.call(this,a,c)};b.Ug={};b.Ug.al=function(a){null==a&&(a="");var b=a.split("?").slice(1).join("?");a={};if(null!=b)for(var b=b.split("&"),d=0;d<b.length;d++){var e=b[d].split("=");""!==e[0]&&(a[e[0]]=e[1])}return a};b.pa={};b.pa.openUri=function(a,b,d){d||null!=b&&b.metaKey?window.open(a):window.location=a};b.pa.Vk=function(){return 750>=screen.width};b.pa.Ia={$d:0,ff:1};b.pa.Kk=function(){if("orientation"in window)return 90===Math.abs(window.orientation)||
            270===window.orientation?b.pa.Ia.ff:b.pa.Ia.$d;if("screen"in window){var a=window.screen.orientation||screen.bm||screen.cm;null!=a&&"object"===typeof a&&(a=a.type);if("landscape-primary"===a||"landscape-secondary"===a)return b.pa.Ia.ff}return b.pa.Ia.$d};var m=new Z;m.G=b;m.yl=g;k.AF=Z;k.initialize=m.Pf;k.destroy=m.Ed;k.getDeviceId=m.Gk;k.toggleAppboyLogging=m.hg;k.setLogger=m.dg;k.openSession=m.Le;k.changeUser=m.tc;k.getUser=m.Sc;k.requestImmediateDataFlush=m.Kd;k.requestFeedRefresh=m.Oe;k.getCachedFeed=
            m.Ce;k.subscribeToFeedUpdates=m.gi;k.requestContentCardsRefresh=m.Bc;k.getCachedContentCards=m.Rc;k.subscribeToContentCardsUpdates=m.di;k.logCardImpressions=m.Vb;k.logCardClick=m.Ub;k.logCardDismissal=m.He;k.logFeedDisplayed=m.Qh;k.logContentCardsDisplayed=m.Ph;k.logInAppMessageImpression=m.Id;k.logInAppMessageClick=m.Je;k.logInAppMessageButtonClick=m.Ie;k.logInAppMessageHtmlClick=m.Hd;k.subscribeToNewInAppMessages=m.ji;k.removeSubscription=m.Fa;k.removeAllSubscriptions=m.ya;k.logCustomEvent=m.Uf;
            k.logPurchase=m.Vf;k.isPushSupported=m.Tb;k.isPushBlocked=m.xc;k.isPushGranted=m.Rf;k.isPushPermissionGranted=m.Fe;k.registerAppboyPushMessages=m.dl;k.unregisterAppboyPushMessages=m.Kl;k.submitFeedback=m.gg;k.trackLocation=m.Jl;k.stopWebTracking=m.Bl;k.resumeWebTracking=m.il;k.wipeData=m.Ol;k.ab=m.G;k.ab.DeviceProperties=m.G.aa;k.ab.User=m.G.w;k.ab.User.Genders=m.G.w.ug;k.ab.User.NotificationSubscriptionTypes=m.G.w.kd;k.ab.User.prototype.getUserId=m.G.w.prototype.U;k.ab.User.prototype.setFirstName=
            m.G.w.prototype.sl;k.ab.User.prototype.setLastName=m.G.w.prototype.wl;k.ab.User.prototype.setEmail=m.G.w.prototype.ql;k.ab.User.prototype.setGender=m.G.w.prototype.tl;k.ab.User.prototype.setDateOfBirth=m.G.w.prototype.ol;k.ab.User.prototype.setCountry=m.G.w.prototype.ll;k.ab.User.prototype.setHomeCity=m.G.w.prototype.ul;k.ab.User.prototype.setLanguage=m.G.w.prototype.vl;k.ab.User.prototype.setEmailNotificationSubscriptionType=m.G.w.prototype.rl;k.ab.User.prototype.setPushNotificationSubscriptionType=
            m.G.w.prototype.eg;k.ab.User.prototype.setPhoneNumber=m.G.w.prototype.xl;k.ab.User.prototype.setAvatarImageUrl=m.G.w.prototype.kl;k.ab.User.prototype.setLastKnownLocation=m.G.w.prototype.Pe;k.ab.User.prototype.setUserAttribute=m.G.w.prototype.ea;k.ab.User.prototype.setCustomUserAttribute=m.G.w.prototype.Xc;k.ab.User.prototype.addToCustomAttributeArray=m.G.w.prototype.ek;k.ab.User.prototype.removeFromCustomAttributeArray=m.G.w.prototype.el;k.ab.User.prototype.incrementCustomUserAttribute=m.G.w.prototype.Rk;
            k.ab.User.prototype.addAlias=m.G.w.prototype.dk;k.ab.User.prototype.setCustomLocationAttribute=m.G.w.prototype.ml;k.ab.InAppMessage=m.G.h;k.ab.InAppMessage.SlideFrom=m.G.h.ce;k.ab.InAppMessage.ClickAction=m.G.h.Eb;k.ab.InAppMessage.DismissType=m.G.h.Dc;k.ab.InAppMessage.OpenTarget=m.G.h.md;k.ab.InAppMessage.ImageStyle=m.G.h.Vd;k.ab.InAppMessage.TextAlignment=m.G.h.wf;k.ab.InAppMessage.Orientation=m.G.h.Ia;k.ab.InAppMessage.CropType=m.G.h.bd;k.ab.InAppMessage.prototype.subscribeToClickedEvent=m.G.h.prototype.Se;
            k.ab.InAppMessage.prototype.subscribeToDismissedEvent=m.G.h.prototype.ei;k.ab.InAppMessage.prototype.removeSubscription=m.G.h.prototype.Fa;k.ab.InAppMessage.prototype.removeAllSubscriptions=m.G.h.prototype.ya;k.ab.InAppMessage.Button=m.G.h.Da;k.ab.InAppMessage.Button.prototype.subscribeToClickedEvent=m.G.h.Da.prototype.Se;k.ab.InAppMessage.Button.prototype.removeSubscription=m.G.h.Da.prototype.Fa;k.ab.InAppMessage.Button.prototype.removeAllSubscriptions=m.G.h.Da.prototype.ya;k.ab.SlideUpMessage=m.G.sb;
            k.ab.ModalMessage=m.G.gc;k.ab.FullScreenMessage=m.G.fc;k.ab.HtmlMessage=m.G.Ua;k.ab.ControlMessage=m.G.cc;k.ab.Feed=m.G.J;k.ab.Feed.prototype.getUnreadCardCount=m.G.J.prototype.Ih;k.ab.ContentCards=m.G.va;k.ab.ContentCards.prototype.getUnviewedCardCount=m.G.va.prototype.Lk;k.ab.Card=m.G.b;k.ab.ClassicCard=m.G.Db;k.ab.CaptionedImage=m.G.Cb;k.ab.Banner=m.G.Banner;k.ab.ControlCard=m.G.nb;k.ab.WindowUtils=m.G.pa;"undefined"!==typeof V&&(k.ADF=V,m.display=new V(m,k),k.display=m.display,k.display.automaticallyShowNewInAppMessages=
            m.display.gk,k.display.showInAppMessage=m.display.Al,k.display.showFeed=m.display.ci,k.display.destroyFeed=m.display.vk,k.display.toggleFeed=m.display.Gl,k.display.showContentCards=m.display.zl,k.display.hideContentCards=m.display.Nk,k.display.toggleContentCards=m.display.Fl);k.sharedLib=m.yl;k.subscribeToInit=m.ii;return k}
            "function"===typeof define&&define.amd?define(["exports","require"],M):"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?M(module.exports||exports):M(window.linerAppboy={});
            if("undefined"!==typeof appboyQueue&&appboyQueue&&appboyQueue.length&&0<appboyQueue.length){var O=appboyQueue;appboyQueue=null;for(var P=0;P<O.length;P++)if(O[P].callee){var Q=O[P].callee.name;if(null==Q||""===Q)Q=/^function ([\\w]*)\\(/g.exec(O[P].callee.toString())[1];if(null!=Q&&""!==Q){for(var R=Q.split("_"),T=appboy,aa=this,ba="appboy",U=0;U<R.length;U++){if("prototype"===R[U])var ca=eval({"appboy.ab.User":"appboy.getUser","appboy.ab.Feed":"appboy.getCachedFeed","appboy.ab.ContentCards":"appboy.getCachedContentCards"}[ba]),
            aa=T=null!=ca?ca.apply():new T.constructor;else T=T[R[U]];ba+="."+R[U]}null!=T&&"function"===typeof T&&T.apply(aa,O[P])}}};}).call(window);`;
}

// Luke - localize.js
if ((window.injectLinerLocalizeJS || (window.injectLinerCoreScript || window.top === window)) && !window.isLocalizeJSInjected) {
    window.isLocalizeJSInjected = true;
    const $ = window.linerJQuery;

    function getLanguage() {
        var language = "en";
        try {
            var language = navigator.language.split('-')[0].toLowerCase().trim();
            if (navigator.language.indexOf('zh') != -1) {
                // Luke - 중국어
                language = 'zhs';
                if (navigator.language.split('-').length > 1) {
                    var countryCode = navigator.language.split('-')[1].toLowerCase();
                    if (countryCode.indexOf('tw') != -1 || countryCode.indexOf('hk') != -1) {
                        language = 'zht';
                    }
                } 
            }
    
            if (!language || language === "") {
                language = "en";
            }

            if (isGoogleSERP()) {
                language = $('.gLFyf').attr('language');
            }    
        } catch(e) {}

        return language;
    }
    
    function localize(content) {
        try {
            var language = getLanguage();
            if (localizable[language][content]) {
                return localizable[language][content].replace(/\n/gi, "<br />").trim();
            }
        } catch(e) {}
        return content;
    }
    
    var localizable = {
        'en': {
            "Manage Highlights" : "Manage Highlights",
            "Share Highlighted Page" : "Share Highlighted Page",
            "Share" : "Share",
            "Facebook" : "Facebook",
            "Twitter" : "Twitter",
            "LinkedIn" : "LinkedIn",
            "Messenger" : "Messenger",
            "LINE" : "LINE",
            "KakaoTalk" : "KakaoTalk",
            "Mail" : "Mail",
            "Copy" : "Copy",
            "Copied" : "Copied",
            "Copy Link" : "Copy Link",
            "Delete All Highlights" : "Delete All Highlights",
            "Link copied to clipboard" : "Link copied to clipboard",
            "Delete" : "Delete",
            "Cancel" : "Cancel",
            "Delete all highlights?" : "Delete all highlights?",
            "LINER" : "LINER",
            "LINER for Safari" : "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it." : "Drag any sentence and click\nLINER icon to highlight it.",
            "Sign Up" : "Sign Up",
            "Sign up to save highlights" : "Sign up to save highlights",
            "Sign up to save comments" : "Sign up to save comments",
            "Log In" : "Log In",
            "Log in to save highlights" : "Log in to save highlights",
            "Log in to save comments" : "Log in to save comments",
            "LINER is blocked on this website" : "LINER is blocked on this website",
            "No network connection. Changes were not saved." : "No network connection. Changes were not saved.",
            "Write a comment" : "Write a comment",
            "Upgrade" : "Upgrade",
            "You've reached<br>the limit - comment" : "You've reached<br>the limit",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments." : "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.",
            "UPGRADE" : "UPGRADE",
            "You've reached<br>the limit - highlight" : "You've reached<br>the limit",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights." : "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.",
            "Step Requirements" : "Step Requirements",
            "Step 3.": "Step 3.",
            "Create a folder" : "Create a folder",
            "Comment" : "Comment",
            "Done" : "Done",
            "Welcome Package" : "Welcome Package",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s)." : "Your <strong>72% Discount</strong> offer<br>ends in N day(s).",
            "Redeem Offer" : "Redeem Offer",
            "Close" : "Close",
            "Start highlighting on this PDF 👆" : "Start highlighting on this PDF 👆",
            "Highlight on this PDF" : "Highlight on this PDF",
            "Upgrade to LINER Premium to unlock this feature." : "Upgrade to LINER Premium to unlock this feature.",
            "Basic Plan: 3MB file upload limit" : "Basic Plan: 3MB file upload limit",
            "Can't open LINER pop-up on the PDF file." : "Can't open LINER pop-up on the PDF file.",
            "My Tags" : "My Tags",
            "Suggestions" : "Suggestions",
            "Create #tagname" : "Create #tagname",
            "Search tags" : "Search tags",
            "+ Add tags" : "+ Add tags",
            "n tag" : "n tag",
            "n tags" : "n tags",
            "Already tagged" : "Already tagged",
            "Relevant Pages": "Relevant Pages",
            "View in LINER": "View in LINER",
            "Picked by LINER": "Picked by LINER",
            "Advanced Google Search by LINER": "Advanced Google Search by LINER",
            "Based on your recent highlights, this page is likely to have what you need.": "Based on your recent highlights, this page is likely to have what you need.",
            "Premium Feature": "Premium Feature",
            "Get recommendations based on your last highlight.": "Get recommendations based on your last highlight.",
            "Highlight": "Highlight",
            "Can't find what you need on Google?": "Can't find what you need on Google?",
            "LINER found @Count+ qualified results on @SearchQuery for you.": "LINER found @Count+ qualified results on @SearchQuery for you.",
            "Save to LINER": "Save to LINER",
            "Saved": "Saved",
            "More Like This": "More Like This",
        },
        'ja': {
            "Manage Highlights" : "ハイライトを管理",
            "Share Highlighted Page" : "ハイライトされたページを共有",
            "Share" : "共有",
            "Facebook" : "フェイスブック",
            "Twitter" : "ツイッター",
            "LinkedIn" : "リンクドイン",
            "Messenger" : "メッセンジャー",
            "LINE" : "LINE",
            "KakaoTalk" : "カカオトーク",
            "Mail" : "メール",
            "Copy" : "コピー",
            "Copied" : "コピーされまし",
            "Copy Link" : "リンクをコピー",
            "Delete All Highlights" : "すべてのハイライトを削除",
            "Link copied to clipboard" : "リンクがコピーされました",
            "Delete" : "削除",
            "Cancel" : "取消",
            "Delete all highlights?" : "すべてのハイライトを削除しますか？",
            "LINER" : "LINER",
            "LINER for Safari" : "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it." : "文章をドラッグした後、LINERボタンを\nクリックして強調表示します。",
            "Sign Up" : "サインアップ",
            "Sign up to save highlights" : "保存するには、会員登録してください",
            "Sign up to save comments" : "保存するには、会員登録してください",
            "Log In" : "ログイン",
            "Log in to save highlights" : "ハイライトを保存するにはログインしてください",
            "Log in to save comments" : "コメントを保存するにはログインしてください",
            "LINER is blocked on this website" : "LINERがこのウェブサイトでブロックされて",
            "No network connection. Changes were not saved." : "ネットワークに接続していないため、変更は保存されませんでした。",
            "Write a comment" : "コメントを書く",
            "Upgrade" : "アップグレード",
            "You've reached<br>the limit - comment" : "コメント数の制限に<br>達しました",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments." : "ベーシックユーザーは、文書ごとに3つのコメントを書くことができます。<br>ライナープレミアムにアップグレードして、無制限のコメントを書いてください。",
            "UPGRADE" : "アップグレード",
            "You've reached<br>the limit - highlight" : "ハイライト数の制限に<br>達しました",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights." : "ベーシックユーザーは、文書あたり<span class='liner-upgrade-highlight-limit'>7</span>個のハイライトに制限されています。<br>ライナープレミアムにアップグレードしてハイライトを無制限に残してください。",            
            "Step Requirements" : "ステップ要件",
            "Step 3." : "ステップ3。",
            "Create a folder" : "フォルダーを作成する",
            "Comment" : "コメント",
            "Done" : "完了",
            "Welcome Package" : "ウェルカムパッケージ",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s)." : "お客様の<strong>72％割引</strong>特典が<br>N日後終了します。",
            "Redeem Offer" : "割引を受ける",
            "Close" : "閉じる",
            "Start highlighting on this PDF 👆" : "このPDFにハイライトを開始してください 👆",
            "Highlight on this PDF" : "このPDFにハイライトする",
            "Upgrade to LINER Premium to unlock this feature." : "この機能のロックを解除するには、ライナープレミアムにアップグレードしてください。",
            "Basic Plan: 3MB file upload limit" : "Basic Plan：3MBのファイルアップロード制限",
            "Can't open LINER pop-up on the PDF file." : "PDFファイルでは、ライナーのポップアップが開きません。",
            "My Tags" : "私のタグ",
            "Suggestions" : "提案",
            "Create #tagname" : "#tagname を作成",
            "Search tags" : "タグの検索",
            "+ Add tags" : "+ タグの追加",
            "n tag" : "n タグ",
            "n tags" : "n タグ",
            "Already tagged" : "既に存在しているタグ",
            "Relevant Pages": "関連ページ",
            "View in LINER": "ライナーで見る",
            "Picked by LINER": "ライナーの推奨",
            "Advanced Google Search by LINER": "ライナーのGoogle検索結果の改善機能",
            "Based on your recent highlights, this page is likely to have what you need.": "最近のハイライトの分析によると、このページには、必要な情報がある可能性があります。",
            "Premium Feature": "プレミアム機能",
            "Get recommendations based on your last highlight.": "ハイライトをベースにした推薦コンテンツを受けてください。",
            "Highlight": "ハイライトする",
            "Can't find what you need on Google?": "Googleで目的の結果が見つかりませんか？",
            "LINER found @Count+ qualified results on @SearchQuery for you.": "ライナーが@SearchQueryの@Countつ以上の検証された結果が見つかりました。",
            "Save to LINER": "ライナーに保存する",
            "Saved": "保存済み",
            "More Like This": "似たようなページ",
        },
        'ko': {
            "Manage Highlights" : "하이라이트 관리",
            "Share Highlighted Page" : "하이라이팅된 페이지 공유하기",
            "Share" : "공유",
            "Facebook" : "페이스북",
            "Twitter" : "트위터",
            "LinkedIn" : "링크드인",
            "Messenger" : "페이스북 메신저",
            "LINE" : "라인",
            "KakaoTalk" : "카카오톡",
            "Mail" : "메일",
            "Copy" : "복사",
            "Copied" : "복사됨",
            "Copy Link" : "링크 복사",
            "Delete All Highlights" : "모든 하이라이트 삭제",
            "Link copied to clipboard" : "링크를 클립보드에 복사했습니다",
            "Delete" : "삭제",
            "Cancel" : "취소",
            "Delete all highlights?" : "모든 하이라이트가 삭제됩니다",
            "LINER" : "LINER",
            "LINER for Safari" : "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it." : "문장을 마우스로 드래그하고\n라이너 아이콘을 눌러 하이라이팅하세요.",
            "Sign Up" : "회원가입",
            "Sign up to save highlights" : "하이라이트를 저장하려면 회원가입하세요",
            "Sign up to save comments" : "코멘트를 저장하려면 회원가입하세요",
            "Log In" : "로그인",
            "Log in to save highlights" : "하이라이팅을 저장하려면 로그인하세요",
            "Log in to save comments" : "코멘트를 저장하려면 로그인하세요",
            "LINER is blocked on this website" : "라이너가 이 웹사이트에서 차단되었습니다",
            "No network connection. Changes were not saved." : "네트워크에 연결되어있지 않아 변경사항이 저장되지 않았습니다.",
            "Write a comment" : "코멘트를 작성하세요",
            "Upgrade" : "업그레이드",
            "You've reached<br>the limit - comment" : "코멘트 개수 제한에<br>도달하였습니다",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments." : "베이직 유저는 문서 당 코멘트 개수가<br>3개로 제한됩니다.<br>라이너 프리미엄으로 업그레이드하고<br>코멘트를 무제한으로 달아보세요.",
            "UPGRADE" : "업그레이드",
            "You've reached<br>the limit - highlight" : "하이라이트 개수 제한에<br>도달하였습니다",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights." : "베이직 유저는 문서 당 하이라이트 개수가 <span class='liner-upgrade-highlight-limit'>7</span>개로 제한됩니다.<br>라이너 프리미엄으로 업그레이드하고 하이라이트를 무제한으로 남겨보세요.",            
            "Step Requirements" : "진행 요구 조건",
            "Step 3.": "3단계.",
            "Create a folder" : "폴더 만들기",
            "Comment" : "코멘트",
            "Done" : "완료",
            "Welcome Package" : "웰컴 패키지",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s)." : "고객님의 <strong>72% 할인</strong> 혜택이<br>N일 뒤에 만료됩니다.",
            "Redeem Offer" : "할인 받기",
            "Close" : "닫기",
            "Start highlighting on this PDF 👆" : "이 PDF에 하이라이팅을 시작하세요 👆",
            "Highlight on this PDF" : "이 PDF에 하이라이팅하기",
            "Upgrade to LINER Premium to unlock this feature." : "프리미엄 업그레이드가 필요한 기능입니다.",
            "Basic Plan: 3MB file upload limit" : "베이직 플랜: 3MB 이상 PDF 파일 업로드 제한",
            "Can't open LINER pop-up on the PDF file." : "PDF 파일에서는 라이너 팝업을 열 수 없습니다.",
            "My Tags" : "내 태그",
            "Suggestions" : "추천",
            "Create #tagname" : "#tagname 생성",
            "Search tags" : "태그 검색",
            "+ Add tags" : "+ 태그 추가",
            "n tag" : "n 태그",
            "n tags" : "n 태그",
            "Already tagged" : "이미 태그되었습니다",
            "Relevant Pages": "연관 페이지",
            "View in LINER": "라이너에서 보기",
            "Picked by LINER": "라이너의 추천",
            "Advanced Google Search by LINER": "라이너의 구글 검색결과 개선 기능",
            "Based on your recent highlights, this page is likely to have what you need.": "최근 하이라이트 분석에 따르면 이 페이지에 당신이 원하는 정보가 있을 확률이 높습니다.",              
            "Premium Feature": "프리미엄 기능",
            "Get recommendations based on your last highlight.": "하이라이트를 기반으로 한 추천 콘텐츠를 받아보세요.",
            "Highlight": "하이라이팅하기",
            "Can't find what you need on Google?": "구글에서 원하는 결과를 찾지 못하셨나요?",
            "LINER found @Count+ qualified results on @SearchQuery for you.": "라이너가 @SearchQuery에 대한 @Count개 이상의 검증된 결과를 찾았습니다.",
            "Save to LINER": "라이너에 저장하기",
            "Saved": "저장됨",
            "More Like This": "비슷한 페이지",
        },
        'zhs': {
            "Manage Highlights" : "管理Highlights",
            "Share Highlighted Page" : "分享突出显示的页面",
            "Share" : "分享",
            "Facebook" : "脸谱网",
            "Twitter" : "推特",
            "LinkedIn" : "领英",
            "Messenger" : "Messenger",
            "LINE" : "LINE",
            "KakaoTalk" : "KakaoTalk",
            "Mail" : "邮件",
            "Copy" : "复制",
            "Copied" : "复制的",
            "Copy Link" : "复制链接",
            "Delete All Highlights" : "删除所有亮点",
            "Link copied to clipboard" : "链接已复制到剪贴板",
            "Delete" : "删除",
            "Cancel" : "取消",
            "Delete all highlights?" : "删除所有亮点？",
            "LINER" : "LINER",
            "LINER for Safari" : "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it." : "拖动任何句子，然后单击\nLINER图标以突出显示。",
            "Sign Up" : "注册",
            "Sign up to save highlights" : "注册以储存Highlight",
            "Sign up to save comments" : "注册以储存注释",
            "Log In" : "登录",
            "Log in to save highlights" : "登录以保存亮点",
            "Log in to save comments" : "登录以保存评论",
            "LINER is blocked on this website" : "LINER在本网站被封锁",
            "No network connection. Changes were not saved." : "由于您未连接到网络，因此未保存更改。",
            "Write a comment" : "写评论",
            "Upgrade" : "升级",
            "You've reached<br>the limit - comment" : "您已达到评论上限",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments." : "基本用户只能在每文件上写3条评论。<br>升级至LINER Premium，并撰写无限数量的评论。",
            "UPGRADE" : "升级",
            "You've reached<br>the limit - highlight" : "您已达到亮点上限",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights." : "基本用户每文件最多只能有<span class='liner-upgrade-highlight-limit'>7</span>个亮点。<br>升级到LINER Premium，并留下无限亮点。",
            "Step Requirements" : "步骤要求",
            "Step 3." : "步骤3。",
            "Create a folder" : "建立资料夹",
            "Comment" : "注释",
            "Done" : "完成",
            "Welcome Package" : "欢迎礼物",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s)." : "您的<strong>72％折扣</strong>优惠将<br>在N天内结束。",
            "Redeem Offer" : "兑换优惠",
            "Close" : "关闭",
            "Start highlighting on this PDF 👆" : "开始在此PDF上突出显示 👆",
            "Highlight on this PDF" : "在此PDF上突出显示",
            "Upgrade to LINER Premium to unlock this feature." : "升级到LINER Premium即可解锁此功能。",
            "Basic Plan: 3MB file upload limit" : "Basic Plan：文件上传上限为3MB",
            "Can't open LINER pop-up on the PDF file." : "无法打开PDF文件上的LINER弹出窗口。",
            "My Tags" : "我的标签",
            "Suggestions" : "提案",
            "Create #tagname" : "创建 #tagname",
            "Search tags" : "搜索标签",
            "+ Add tags" : "+ 添加标签",
            "n tag" : "n 标签",
            "n tags" : "n 标签",
            "Already tagged" : "该标签已经存在",
            "Relevant Pages": "相关页面",
            "View in LINER": "在LINER中查看",
            "Picked by LINER": "LINER精选",
            "Advanced Google Search by LINER": "LINER进阶搜索",
            "Based on your recent highlights, this page is likely to have what you need.": "基于您最近新增的Highlight，此页将显示您可能需要的内容。",
            "Premium Feature": "高级功能",
            "Get recommendations based on your last highlight.": "基于您最近的Highlight推荐您可能感兴趣的内容。",
            "Highlight": "Highlight",
            "Can't find what you need on Google?": "Google上找不到您正在寻找的东西吗？",
            "LINER found @Count+ qualified results on @SearchQuery for you.": "LINER帮您找到了@Count个以上和@SearchQuery相关的搜索结果。",
            "Save to LINER": "储存到LINER",
            "Saved": "储存完毕",
            "More Like This": "更多相关网页",
        },
        'zht': {
            "Manage Highlights" : "管理Highlights",
            "Share Highlighted Page" : "分享突出顯示的頁面",
            "Share" : "分享",
            "Facebook" : "臉譜網",
            "Twitter" : "推特",
            "LinkedIn" : "領英",
            "Messenger" : "Messenger",
            "LINE" : "LINE",
            "KakaoTalk" : "KakaoTalk",
            "Mail" : "郵件",
            "Copy" : "複製",
            "Copied" : "複製的",
            "Copy Link" : "複製鏈接",
            "Delete All Highlights" : "刪除所有亮點",
            "Link copied to clipboard" : "鏈接已複製到剪貼板",
            "Delete" : "删除",
            "Cancel" : "取消",
            "Delete all highlights?" : "刪除所有亮點？",
            "LINER" : "LINER",
            "LINER for Safari" : "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it." : "拖動任何句子，然後單擊\nLINER圖標以突出顯示。",
            "Sign Up" : "註冊",
            "Sign up to save highlights" : "註冊以儲存Highlight",
            "Sign up to save comments" : "註冊以儲存註釋",
            "Log In" : "登入",
            "Log in to save highlights" : "登入以保存亮點",
            "Log in to save comments" : "登入以保存評論",
            "LINER is blocked on this website" : "LINER在本網站被封鎖",
            "No network connection. Changes were not saved." : "由於您未連接到網絡，因此未保存更改。",
            "Write a comment" : "寫評論",
            "Upgrade" : "升級",
            "You've reached<br>the limit - comment" : "您已達到評論上限",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments." : "基本用戶只能在每文件上寫3條評論。<br>升級至LINER Premium，並撰寫無限數量的評論。",
            "UPGRADE" : "升級",
            "You've reached<br>the limit - highlight" : "您已達到亮點上限",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights." : "基本用戶每文件最多只能有<span class='liner-upgrade-highlight-limit'>7</span>個亮點。<br>升級到LINER Premium，並留下無限亮點。",
            "Step Requirements" : "步驟要求",
            "Step 3." : "步驟3。",
            "Create a folder" : "建立資料夾",
            "Comment" : "註解",
            "Done" : "完成",
            "Welcome Package" : "歡迎禮物",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s)." : "您的<strong>72％折扣</strong>優惠將<br>在N天內結束。",
            "Redeem Offer" : "兌換優惠",
            "Close" : "關閉",
            "Start highlighting on this PDF 👆" : "開始在此PDF上突出顯示 👆",
            "Highlight on this PDF" : "在此PDF上突出顯示",
            "Upgrade to LINER Premium to unlock this feature." : "升級到LINER Premium即可解鎖此功能。",
            "Basic Plan: 3MB file upload limit" : "Basic Plan：文件上傳上限為3MB",
            "Can't open LINER pop-up on the PDF file." : "無法打開PDF文件上的LINER彈出窗口。",
            "My Tags" : "我的標籤",
            "Suggestions" : "建議",
            "Create #tagname" : "創建 #tagname",
            "Search tags" : "搜索標籤",
            "+ Add tags" : "+ 新增標籤",
            "n tag" : "n 標籤​​",
            "n tags" : "n 標籤​​",
            "Already tagged" : "該標籤已經存在",
            "Relevant Pages": "相關頁面",
            "View in LINER": "在LINER中查看",
            "Picked by LINER": "LINER精選",
            "Advanced Google Search by LINER": "LINER進階搜索",
            "Based on your recent highlights, this page is likely to have what you need.": "基於您最近新增的Highlight，此頁將顯示您可能需要的內容。",
            "Premium Feature": "高級功能",
            "Get recommendations based on your last highlight.": "基於您最近的Highlight推薦您可能感興趣的內容。",
            "Highlight": "Highlight",
            "Can't find what you need on Google?": "Google上找不到您正在尋找的東西嗎？",
            "LINER found @Count+ qualified results on @SearchQuery for you.": "LINER幫您找到了@Count個以上和@SearchQuery相關的搜尋結果。",
            "Save to LINER": "儲存到LINER",
            "Saved": "儲存完畢",
            "More Like This": "更多相關網頁",
        }
    }
}

// Luke - etc.js
// Luke - etc.js는 Selection&우클릭 방지 해제, Ongoing Onboarding 등 라이너의 메인 기능와 상관 없는 기능들을 담당
if ((window.injectLinerEtcJS || (window.injectLinerCoreScript || window.top === window)) && !window.isEtcJSInjected) {
    window.isEtcJSInjected = true;
    const $ = window.linerJQuery;

    function isLinerPSPDFKit() {
        if ((window.location.host.indexOf("getliner.com") != -1 || window.location.host === "localhost:3000") && $('#pdfViewer .PSPDFKit-Container').length > 0) {
            return true;
        }
        return false;
    }

    function getBrowserName() {
        // Luke - Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15
        // Luke - Chrome: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36
        // Luke - Firefox: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0
        // Luke - Whale: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.6 Safari/537.36
        // Luke - Opera: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.168 Safari/537.36 OPR/51.0.2830.40
        // Luke - Edge: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931
        // Luke - Edge 2: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43
      
        try {
            if (navigator.userAgent.indexOf('Firefox') != -1) {
                // Luke - this is firfox browser
                return 'firefox';
            } else if (navigator.userAgent.indexOf('Chrome') != -1) {
                if (navigator.userAgent.indexOf('Whale') != -1) {
                    // Luke - this is whale browser
                    return 'whale';
                } else if (navigator.userAgent.indexOf('OPR') != -1) {
                    // Luke - this is opera browser
                    return 'opera';
                } else if (navigator.userAgent.indexOf('Edge') != -1 || navigator.userAgent.indexOf('Edg') != -1) {
                    // Luke - this is edge browser
                    return 'edge';
                } else {
                    // Luke - this is chrome browser
                    return 'chrome';
                }
            } else if (navigator.userAgent.indexOf('Safari') != -1) {
                // Luke - this is safari browser
                return 'safari';
            }
        } catch(e) {}
        return "unknown";
    }

    function isGoogleScholarSERP() {
        if (window.location.host.indexOf('scholar.google.') !== -1 && window.location.pathname === '/scholar') {
            return true;
        }
        return false;
    }

    function isGoogleSERP() {
        if (window.location.host.indexOf('google.') !== -1 && window.location.pathname === '/search') {
            return true;
        }
        return false;
    }

    function showPickedByLINERInSERP() {
        const language = navigator.language;

        const isArabLanguage = language.indexOf('ar') !== -1;
        if (isArabLanguage === false) {
            return true;
        }
        const googleArabDomains = ['ae', 'jo', 'com.my', 'my', 'com.tn', 'tn', 'com.eg', 'com.qa', 'qa', 'com.ps', 'ps', 'com.sa', 'iq', 'com.iq', 'com.kw', 'com.om', 'com.bh', 'com.lb', 'dz', 'com.ly', 'co.ma', 'dj', 'rw', 'td', 'ml', 'sn', 'cm'];
        for (let i=0; i<googleArabDomains.length; i++) {
            if (window.location.host.indexOf(`google.${googleArabDomains[i]}`) !== -1) {
                return false;
            }
        }
        
        return true;
    }

    function isWebPDFFile() {
        if (window.location.protocol === "file:") {
            return false;
        }

        try {
            if ($('body').children().length > 0) {
                if (window.PDFViewerApplication) {
                    // Luke - Firefox PDF Viewer
                    return true;
                }

                if ($('body').children()[0].tagName.toLowerCase() === "embed" && $('body').children()[0].type.toLowerCase() === "application/pdf" && $('body').children()[0].width === "100%" && $('body').children()[0].height === "100%") {
                    return true;
                }
            }
        } catch(e) {}
        return false;
    }

    function enableSelection() {
        try {
            // Luke - JIRA에서 코멘트 다려고 할 때 문장 Selection이 안되는 버그가 있었음.
            if (window.location.host.indexOf('atlassian.net') === -1 || (window.location.host.indexOf('atlassian.net') != -1 && window.location.host.split('.')[0] === "www")) {
                var code =  `if (document.oncontextmenu != null && !document.oncontextmenu()) {
                    document.onmousedown = function () {
                        javascript:void(document.oncontextmenu=null);
                        javascript:void(document.onmousedown=null);
                        javascript:void(document.onselectstart=null);
                        javascript:void(document.body.onselectstart=null);
                    }
                }`;
                evaluateScript(code);
                $('body *').css('-webkit-user-select', 'auto');
            }
        } catch (e) {}
    };

    function evaluateScript(code) {
        try {
            var script = document.createElement('script');
            script.textContent = code;
            (document.head||document.documentElement).appendChild(script);
            script.remove();
        } catch (e) {}
    }

    function initOngoingOnboarding() {
        evaluateScript(`
            function linerBrazeChangeUser() {
                if (window.appboy && window.userId) {
                    window.appboy.changeUser(window.userId);
                    return;
                }    
                setTimeout(function() {
                    linerBrazeChangeUser();
                }, 50);
            }

            function linerOnboardingEvent(name) {
                if (window.appboy) {
                    window.appboy.logCustomEvent(name);
                    return;
                }          
                setTimeout(function() {
                    linerOnboardingEvent(name);
                }, 50);      
            }

            linerBrazeChangeUser();
        `)
        // Luke - web_init_guide_highlight, web_init_guide_comment(1)는 Braze에서 다룸
        // Luke - web_finish_guide_highlight, web_init_guide_comment(2), web_finish_guide_comment는 main.js에서 다룸
        if (isLINERGuidePage()) {
            // Luke - 하이라이트, 코멘트 알려주는 샘플 페이지 진입 루트
            evaluateScript(`linerOnboardingEvent('web_init_guide_welcome');`);
            try {
                // Luke - Safari의 경우 로그인을 확실하게 해주기 위해 아래 분기를 추가함
                if (window.safari && !window.safari.id) {
                    $.get("https://getliner.com/auth/cookie", function(data) {
                        messageToNative("LOGIN", {
                            cookie: data.cookie
                        })
                    }).fail(function() {
    
                    });    
                }
            } catch(e) {}
        }
        // Luke - 최종 단계는 서버에서 컨트롤하게 수정함 - web_finish_guide_onboarding 이벤트
    }

    function isLINERGuidePage() {
        try {
            if (window.location.pathname.indexOf('/guide/browser-extension') != -1) {
                return true;
            }
        } catch(e) {}
        return false;
    }

    function isLINERMobileGuidePage() {
        try {
            if (window.location.pathname.indexOf('/guide/mobile') != -1) {
                return true;
            }
        } catch(e) {}
        return false;
    }

    function saveFinishedOngoingOnboardings(brazeEventName) {
        var finishedOngoingOnboardings = getFinishedOngoingOnboardings();
        if (finishedOngoingOnboardings.indexOf(brazeEventName) === -1) {
            finishedOngoingOnboardings.push(brazeEventName);
            localStorage.setItem("finished_ongoing_onboardings", JSON.stringify(finishedOngoingOnboardings));    
        }
        if (getFinishedOngoingOnboardings().length >= 2) {
            messageToNative("SET_ELIGIBLE_FOR_ONBOARDING_EC", {});
            localStorage.setItem('onboarding_finish_time', (new Date()).getTime());
        }
    }
    
    function getFinishedOngoingOnboardings() {
        let finishedOngoingOnboardings = [];
        try {
            finishedOngoingOnboardings = JSON.parse(localStorage.getItem("finished_ongoing_onboardings")) ?? [];
        } catch(e) {}
        return finishedOngoingOnboardings;
    }

    window.disableSecondTargetBlank = false;
    function disableTargetBlank() {
        $('a').click(function(e){
            try {
                if ($(this).attr("target") && $(this).attr("target").toLowerCase().indexOf("blank") != -1) {
                    e.preventDefault();

                    if (window.disableSecondTargetBlank === true) {
                        return;
                    }
                    window.disableSecondTargetBlank = true;

                    messageToNative("NEW_TAB", {
                        url: $(this).prop("href").trim()
                    });

                    setTimeout(function() {
                        window.disableSecondTargetBlank = false;
                    }, 100);
                }
            } catch(error) {}
        });
    }

    function initMobileOngoingOnboarding() {
        evaluateScript(`
            function linerBrazeChangeUser() {
                if (window.appboy && window.userId) {
                    window.appboy.changeUser(window.userId);

                    setTimeout(function() {
                        linerOnboardingEvent('mob_onb_welcome');
                    }, 1500);
                    return;
                }    
                setTimeout(function() {
                    linerBrazeChangeUser();
                }, 50);
            }

            function linerOnboardingEvent(name) {
                if (window.appboy) {
                    window.appboy.logCustomEvent(name);
                    return;
                }          
                setTimeout(function() {
                    linerOnboardingEvent(name);
                }, 50);      
            }

            linerBrazeChangeUser();
        `)
    }

    $(document).ready(function () {
        if (!window.isLinerBrowser) {
            initOngoingOnboarding();
        } else if (isLINERMobileGuidePage()) {
            initMobileOngoingOnboarding();
        }

        document.addEventListener('scroll', function(scrollEvent) {
            window.didMouseUp = true;
        }, false);

        window.addEventListener("touchstart", function(touchEvent) {
            window.didMouseUp = false;
            if (!isDisabledSite()) {
                enableSelection();
            }
            if (window.isLinerBrowser) {         
                disableTargetBlank();
            }
        });

        window.addEventListener("touchend",function(touchEvent){ 
            window.didMouseUp = true;
            if (!isDisabledSite()) {
                enableSelection();
            }
        });

        window.addEventListener("mousedown", function(mouseEvent) {
            window.didMouseUp = false;
            if (!isDisabledSite()) {
                enableSelection();
            }
            if (window.isLinerBrowser) {
                disableTargetBlank();
            }
        });

        window.addEventListener("mouseup", function(mouseEvent) {
            window.didMouseUp = true;
            if (!isDisabledSite()) {
                enableSelection();
            }
        });
    });
}


// Luke - lighter.js
if ((window.injectLinerLighterJS || (window.injectLinerCoreScript || window.top === window)) && !window.isLighterJSInjected) {
    window.isLighterJSInjected = true;
    const $ = window.linerJQuery;

    /*! Lighter v0.3.0 | (c) Made by Jin Woo Kim, CEO at LINER Inc. | (License) Not allowed to be used by anyone, except the maker(Jin Woo Kim, CEO at LINER Inc.) */
    (function(global) {

        var PROJECT_NAME = 'Lighter';
        
        if (typeof global[PROJECT_NAME] === "undefined")
        {
            
            /*************************************************
                Private section
            *************************************************/
            
            var STYLE_ELEMENT_NAME = 'lighter';
            var ELEMENT_ID_PREFIX = 'lgt';
            var DEFAULT_LENGTH_OF_CHARACTERS_SURROUNDING_CORE = 5;
            var STATUS = {
                OK: 0,
                REMOVED: 1
            };
            
            var selection = global.getSelection();
            var selectedStyleElement;
            
            
            /**
             * [convertUtf8toBase64 convert UTF-8 string to Base64-encoded string]
             * @param  {[type]} str [description]
             * @return {[type]}     [description]
             */
            function convertUtf8toBase64(str) {
                return window.btoa(unescape(encodeURIComponent(str)));
            }
            
            /**
             * [convertBase64toUtf8 convert Base64-encoded string to UTF-8 string]
             * @param  {[type]} str [description]
             * @return {[type]}     [description]
             */
            function convertBase64toUtf8(str) {
                return decodeURIComponent(escape(window.atob(str)));
            }
            
            
            /* Managing the list for style item data */
            var StyleList = (function() {
                var items = [];
                return {
                    items: items
                }
            })();
            
            StyleList.getUniqueId = function() {
                var id;
                do {
                    id = Math.random().toString().split('.')[1];
                } while (this.items.map(function(item) { return item.id; }).indexOf(id) >= 0);
                return id;
            };
            
            StyleList.generateStatusItem = function(statusCode) {
                return {
                    code: statusCode,
                    regTime: new Date()
                }
            };
            
            StyleList.addItem = function(item, withApplying) {
                if (withApplying)
                    item['isApplied'] = applyStyleItem(item);
                this.items.push(item);
            };
            
            StyleList.updateItem = function(targetItemId, item) {
                for (var i = this.items.length - 1; i >= 0; i--)
                {
                    if (this.items[i].id === targetItemId)
                    {
                        this.items[i] = item;
                        applyStyleItem(item);
                        break;
                    }
                }
            };
            
            StyleList.reset = function() {
                this.items = [];
            };
            
            StyleList.import = function(data, withApplying) {
                var items = JSON.parse(convertBase64toUtf8(data));
                for (var i in items)
                    this.addItem(items[i], withApplying);
            };
            
            StyleList.export = function() {
                var targetItems = this.items.map(function(item) {
                    return {
                        id: item.id,
                        core: item.core,
                        prev: item.prev,
                        next: item.next,
                        styleOptions: item.styleOptions,
                        status: item.status
                    };
                });
                return convertUtf8toBase64(JSON.stringify(targetItems));
            };
            
            
            function getLastFromArray(arr) {
                return arr[arr.length - 1];
            }
            
            /**
             * [getStringWithoutSpaces description]
             * @param  {String} str [description]
             * @return {String}     [description]
             */
            function getStringWithoutSpaces(str) {
                return str.replace(/\s/g, '');
            }
            
            /**
             * [getStringWithoutLineBreaks description]
             * @param  {String} str [description]
             * @return {String}     [description]
             */
            function getStringWithoutLineBreaks(str) {
                return str.replace(/(\r\n|\n|\r)/gm, '');
            };
            
            /**
             * [getBodyTextWithoutSpaces description]
             * @return {String} [description]
             */
            function getBodyTextWithoutSpaces() {
                return getStringWithoutSpaces(document.body.textContent);
            }
            
            /**
             * [isSentenceInBodyText description]
             * @param  {String}  sentence [description]
             * @return {Boolean}          [description]
             */
            function isSentenceInBodyText(sentence) {
                return getBodyTextWithoutSpaces().indexOf(getStringWithoutSpaces(sentence)) >= 0;
            }
            
            /**
             * [getNumberOfSentenceInBodyText description]
             * @param  {String} sentence [description]
             * @return {Number}          [description]
             */
            function getNumberOfSentenceInBodyText(sentence) {
                var number = 0;
                var nextIndex = 0;
                while ((nextIndex = getBodyTextWithoutSpaces().indexOf(getStringWithoutSpaces(sentence), nextIndex)) >= 0)
                {
                    number++;
                    nextIndex++;
                }
                return number;
            }
            
            /**
             * [getAllTextNodes returns all text nodes in the current page's document.body]
             * @return {Array}
             */
            function getAllTextNodes() {
                // if (!document.body) return null;
                var textNodeList = [];
                var textList = [];
                var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                while (walker.nextNode()) { textNodeList.push(walker.currentNode); textList.push(walker.currentNode.textContent); }
                return { textNodeList: textNodeList, textList: textList };
            }
            
            /**
             * [getNearestStyleElement returns the nearest style element generated by lighter from a target node]
             * @param  {Object} targetNode
             * @return {Object}
             */
            function getNearestLighterElement(targetNode) {
                return null;
            }
            
            /**
             * [getSurroundFromSelection description]
             * @param  {Number} length [description]
             * @return {Object}        [description]
             */
            function getSurroundFromSelection(length) {
                var result = { prev: "", next: "" };
                var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                var targetRange = selection.getRangeAt(0);
                var startOffset = targetRange.startOffset;
                var endOffset = targetRange.endOffset;
            
                if ((walker.currentNode = targetRange.startContainer).nodeType != Node.TEXT_NODE) {
                    // TEXT_NODE가 아니면 보정
                    walker.currentNode = targetRange.startContainer.childNodes[startOffset] || targetRange.endContainer.childNodes[0];
                    walker.previousNode();
                    startOffset = walker.currentNode.textContent.length;
                }
                result['prev'] = walker.currentNode.textContent.substring(0, startOffset); //getStringWithoutLineBreaks(walker.currentNode.textContent.substring(0, startOffset));
                while (getStringWithoutSpaces(result['prev']).length < length && walker.currentNode != null) {
                    result['prev'] = walker.previousNode().textContent + result['prev']; //getStringWithoutLineBreaks(walker.previousNode().textContent) + result['prev'];
                }
            
                if ((walker.currentNode = targetRange.endContainer).nodeType != Node.TEXT_NODE) {
                    walker.currentNode = targetRange.endContainer.childNodes[endOffset] || targetRange.endContainer.childNodes[0];
                    walker.previousNode();
                    walker.nextNode();
                    endOffset = 0;
                }
                result['next'] = walker.currentNode.textContent.substring(endOffset, walker.currentNode.textContent.length); //getStringWithoutLineBreaks(walker.currentNode.textContent.substring(endOffset, walker.currentNode.textContent.length));
                while (getStringWithoutSpaces(result['next']).length < length && walker.currentNode != null) {
                    result['next'] = result['next'] + walker.nextNode().textContent; //getStringWithoutLineBreaks(walker.nextNode().textContent);
                }
            
                result['prev'] = result['prev'].trimLeft();
                result['next'] = result['next'].trimRight();
                if (result['prev'].length >= length)
                    result['prev'] = result['prev'].substring(result['prev'].length - length, result['prev'].length);
                if (result['next'].length >= length)
                    result['next'] = result['next'].substring(0, length);
                return result;
            }
            
            /**
             * [getUniqueCoreFromSelection description]
             * @return {Object} [description]
             */
            function getUniqueCoreFromSelection() {
                var LOOP_COUNT_LIMIT = 200; // This value is determined by an experimental test deriving [347, 117, 3, 3, 3, 121, 3, 594, 3, 5, 126, 18, 11, 5, 4, 5, 8, 12, 77, 13, 8, 15, 2, 2, 4, 5, 1, 4, 3, 4, 5, 128, 120, 130, 3, 5, 5, 154, 54, 5, 4, 3, 125, 132, 3, 3, 3, 6, 5, 142, 5, 32, 419, 4, 4, 168, 6, 5, 5, 5, 5, 3, 6, 3, 3, 3, 5, 6, 6, 11, 7, 4, 5, 4, 5, 3, 11, 10, 6, 5, 3, 11, 10, 5, 3, 10, 4, 7, 3, 3, 3, 7, 5, 195, 194, 24, 11, 3, 4, 8, 30]
                var surround;
                var prev = '', next = '', core = selection.getRangeAt(0).toString();
                var lengthOfCharactersSurroundingCore = DEFAULT_LENGTH_OF_CHARACTERS_SURROUNDING_CORE;
                var loopCount = 0;
            
                do {		
                    if (prev === '' && next === '')
                    {
                        surround = getSurroundFromSelection(lengthOfCharactersSurroundingCore);
                        prev = surround.prev;
                        next = surround.next;
                    }
                    else
                    {
                        if (prev.length <= next.length)
                        {
                            lengthOfCharactersSurroundingCore++;
                            surround = getSurroundFromSelection(lengthOfCharactersSurroundingCore);
                            prev = surround.prev;
                        }
                        else
                        {
                            surround = getSurroundFromSelection(lengthOfCharactersSurroundingCore);
                            next = surround.next;
                        }
                    }
            
                    loopCount++;        
                } while (getNumberOfSentenceInBodyText(prev + core + next) != 1 ||
                            getStringWithoutSpaces(prev).length < DEFAULT_LENGTH_OF_CHARACTERS_SURROUNDING_CORE ||
                            getStringWithoutSpaces(next).length < DEFAULT_LENGTH_OF_CHARACTERS_SURROUNDING_CORE ||
                            (getStringWithoutSpaces(prev[0]).length <= 0 && loopCount < LOOP_COUNT_LIMIT) ||
                            (getStringWithoutSpaces(getLastFromArray(next)).length <= 0 && loopCount < LOOP_COUNT_LIMIT)); 
                return {
                    core: core,
                    prev: prev.trimLeft(),
                    next: next.trimRight()
                };
            }
            
            function getOffsetInStringifiedTextListForSentence(textList, sentence) {
                return textList.join("").indexOf(sentence);
            }
            
            function getIndexWithOffsetInTextList(textList, startOffset) {
                var index = 0;
                var offset = 0;
                var counter = 0;
            
                while (index < textList.length && counter + textList[index].length < startOffset)
                {
                    counter += textList[index++].length;
                }
                offset = startOffset - counter;
            
                return {
                    index: index,
                    offset: offset
                };
            }
            
            /**
             * [replaceTextNodeWithStyle description]
             * @param  {Object} targetNode
             * @param  {Object} styleOptions
             * @return {Object} Reference of the styled node.
             */
            function replaceTextNodeWithStyle(targetNode, startOffset, endOffset, styleOptions, elementID) {
                if (targetNode === null || typeof(targetNode) != 'object' ||
                    !targetNode.nodeType || targetNode.nodeType != Node.TEXT_NODE ||
                    styleOptions === null || typeof(styleOptions) != 'object')
                    return null;
            
                /*
                    offset >= 0이면 offset 길이만큼 앞 부분은 제외하고 뒷 부분만 스타일 먹이고,
                    offset < 0이면 |offset| 길이만큼 앞 부분에만 스타일 먹이고 뒷 부분은 제외
                */
                
                var fragment = document.createDocumentFragment();
            
                var styledNode = document.createElement(STYLE_ELEMENT_NAME);
                styledNode.dataset.id = ELEMENT_ID_PREFIX + elementID;
                for (var key in styleOptions)
                    styledNode.style[key] = styleOptions[key];
            
                if (startOffset > 0)
                {
                    fragment.appendChild(document.createTextNode(targetNode.textContent.substring(0, startOffset)));
                }
            
                styledNode.innerText = targetNode.textContent.substring(startOffset, endOffset);
                //styledNode.innerText = targetNode.textContent.substring(startOffset, targetNode.textContent.length - endOffset);
                fragment.appendChild(styledNode);
            
                if (endOffset > 0)
                {
                    fragment.appendChild(document.createTextNode(targetNode.textContent.substring(endOffset, targetNode.textContent.length)));
                }
            
                if (getStringWithoutSpaces(styledNode.textContent).length > 0 && styledNode.textContent.trim() != '')
                {
                    targetNode.parentNode.replaceChild(fragment, targetNode);
                }
            
                return styledNode.textContent.length;
            }
            
            function applyStyleItem(item) {
                try {
                    var lastStatusCode = getLastFromArray(item['status']).code;
                    if (lastStatusCode === STATUS.OK && isSentenceInBodyText(item.prev + item.core + item.next))
                    {
                        // 이제 선택한 영역의 스타일을 바꿔버리면 된다.
                        // bodyText에서 index를 알아낸다 ->
                        // textNode마다 길이를 아니깐 순차적으로 그 길이정도까지 더해가면서 맨 앞 글자가 포함된 위치까지 이동해버린다. ->
                        // 텍스트 노드들을 순차적으로 하이라이팅 한다. (맨 앞과 맨 뒤는 스타일을 적용시킨다.)
                        var sentenceWithWraps = item.prev + item.core + item.next;
                        var totalTextList = getAllTextNodes();
                        var startOffset = getBodyTextWithoutSpaces().indexOf(getStringWithoutSpaces(sentenceWithWraps));
                        var startIndexOfTextList = -1;
                        var accumulatedLength = 0;
            
                        while (accumulatedLength <= startOffset)
                        {
                            startIndexOfTextList++;
                            accumulatedLength += getStringWithoutSpaces(totalTextList.textList[startIndexOfTextList]).length;
                        }
                        global.totalTextList = totalTextList;
                        var targetTextNodeList = [];
                        var targetTextList = [];
                        var sentenceWithWrapsWithoutSpaces = getStringWithoutSpaces(sentenceWithWraps);
            
                        do {
                            targetTextNodeList.push(totalTextList.textNodeList[startIndexOfTextList]);
                            targetTextList.push(totalTextList.textList[startIndexOfTextList]);
                            startIndexOfTextList++;
                        } while (getStringWithoutSpaces(targetTextList.join("")).indexOf(sentenceWithWrapsWithoutSpaces) < 0);
            
                        global.item = item;
                        global.targetTextNodeList = targetTextNodeList;
                        global.targetTextList = targetTextList;
            
                        var leftLengthForApplying = item.core.length;

                        var sentenceWithTargetTextList = "";
                        targetTextList.forEach(text => {
                            sentenceWithTargetTextList += text;
                        })
                        
                        var startOffsetInTextNodeListForSentence = sentenceWithTargetTextList.indexOf(item.core);
                        var targetIndexWithOffsetInTextNode = getIndexWithOffsetInTextList(targetTextList, startOffsetInTextNodeListForSentence);
            
                        while (leftLengthForApplying > 0 && targetIndexWithOffsetInTextNode.index < targetTextNodeList.length)
                        {
                            var tempLength = 0;
                            var startOffset = targetIndexWithOffsetInTextNode.offset;
                            var endOffset = 0;
            
                            if (startOffset + leftLengthForApplying < targetTextNodeList[targetIndexWithOffsetInTextNode.index].length)
                            {
                                endOffset = startOffset + leftLengthForApplying; //targetTextNodeList[targetIndexWithOffsetInTextNode.index].length - leftLengthForApplying;
                                tempLength = leftLengthForApplying;
                            }
                            else
                            {
                                tempLength = targetTextNodeList[targetIndexWithOffsetInTextNode.index].length - startOffset;
                                endOffset = targetTextNodeList[targetIndexWithOffsetInTextNode.index].length;
                            }
            
                            replaceTextNodeWithStyle(targetTextNodeList[targetIndexWithOffsetInTextNode.index], startOffset, endOffset, item.styleOptions, item.id);
            
                            targetIndexWithOffsetInTextNode.index++;
                            leftLengthForApplying -= tempLength;
                            targetIndexWithOffsetInTextNode.offset = 0;
                        }        
                        return true;
                    }
                    else if (lastStatusCode === STATUS.REMOVED)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                } catch (e) {
                }
            
                return false;
            }
            
            
            
            /*************************************************
                 Public section
            *************************************************/
            
            var public = (function() { return {
                StyleList: {
                    items: StyleList.items
                }
            }; })();
            
            public.doHighlight = function(color, isForUpdatingLast, idToRemove) {
                var itemToApply = getUniqueCoreFromSelection();
                var newUniqueId = StyleList.getUniqueId();
            
                if (idToRemove != undefined)
                {
                    selectedStyleElement = document.body.querySelector(STYLE_ELEMENT_NAME +'[data-id*="'+ ELEMENT_ID_PREFIX + idToRemove +'"]');
                    public.doRemoveStyle();
                }
            
                itemToApply['id'] = newUniqueId; // to be used as data-id
                itemToApply['styleOptions'] = { backgroundColor: color };
                itemToApply['status'] = [StyleList.generateStatusItem(STATUS.OK)];
                itemToApply['isApplied'] = false;
                if (isForUpdatingLast === true)
                    StyleList.updateItem(idToRemove, itemToApply);
                else
                    StyleList.addItem(itemToApply, true);
                selection.removeAllRanges();
                return newUniqueId;
            };
            
            public.detectSpanColor = // Legacy code comparable with versions under 0.1.0
            public.detectStyleElementColor = function(event) {
                var targetElement = event.target || event.srcElement;
            
                selectedStyleElement = null;
            
                while (targetElement != null)
                {
                    if (targetElement.tagName.toLowerCase() === STYLE_ELEMENT_NAME.toLowerCase())
                    {
                        selectedStyleElement = targetElement;
                        return targetElement.style.backgroundColor;
                    }
                    targetElement = targetElement.parentElement;
                }
            
                return false;
            };
            
            public.doRemoveStyle = function() {
                // 1) 선택한 lighter element의 data-id를 통해 해당하는 것들의 태그를 다 벗겨서 textNode로 만든다.
                // 2) status에 STATUS.REMOVED를 추가한다.
                var selectedStyleElementId = selectedStyleElement.dataset.id;
                var targetElementList = document.body.querySelectorAll(STYLE_ELEMENT_NAME +'[data-id*="'+ selectedStyleElementId +'"]')
            
                for (var i = 0; i < targetElementList.length; i++)
                {
                    targetElementList[i].parentNode.replaceChild(document.createTextNode(targetElementList[i].textContent), targetElementList[i]);
                }
            
                var targetId = selectedStyleElementId.split(ELEMENT_ID_PREFIX)[1];
                for (var i in StyleList.items)
                {
                    if (StyleList.items[i].id === targetId)
                    {
                        StyleList.items[i]['status'].push(StyleList.generateStatusItem(STATUS.REMOVED));
                        return;
                    }
                }
            };
            
            public.doChangeStyle = function(styleOptions, styleItemId) {
                var selectedStyleElementId;
                if (styleItemId) selectedStyleElementId = ELEMENT_ID_PREFIX + styleItemId;
                else selectedStyleElementId = selectedStyleElement.dataset.id;
                var targetElementList = document.body.querySelectorAll(STYLE_ELEMENT_NAME +'[data-id="'+ selectedStyleElementId + '"]');
            
                for (var i = 0; i < targetElementList.length; i++)
                {
                    // targetElementList[i].style.backgroundColor='cyan';
                    for (var key in styleOptions)
                        targetElementList[i].style[key] = styleOptions[key];
                }
            
                var targetId = selectedStyleElementId.split(ELEMENT_ID_PREFIX)[1];
                for (var i in StyleList.items)
                {
                    if (StyleList.items[i].id === targetId)
                    {
                        StyleList.items[i]['styleOptions'] = styleOptions;
                        return;
                    }
                }
            };
            
            public.import = function(data) {
                StyleList.reset();
                StyleList.import(data, true);
            };
            
            public.export = function() {
                return StyleList.export();
            };
            
            public.getStyleList = function() {
                return StyleList.items;
            };
            
            // public.styleList = items;
            
            global[PROJECT_NAME] = public;
        
        }
    })(window);
}


// Luke - disable.js
if ((window.injectLinerDisableJS || (window.injectLinerCoreScript || window.top === window)) && !window.isDisableJSInjected) {
    window.isDisableJSInjected = true;
    const $ = window.linerJQuery;

    function isDisabledSite() {            
        if (window.injectLinerCoreScript) {
            return false;
        }
        
        if (window.location.protocol === "file:") {
            return true;
        }

        if (isWebPDFFile()) {
            return true;
        }

        if (isLINERMobileGuidePage()) {
            return false;
        }

        var exactHost = ['m.map.naver.com', 'm.map.kakao.com', 'app.redash.io', 'reportingitc2.apple.com', 'console.cloud.google.com', 'console.aws.amazon.com', 'console.firebase.google.com', 'bitbucket.org', 'dashboard.stripe.com', 'app.zeplin.io', 'www.naver.com', 'www.nate.com', 'www.daum.net', 'www.baidu.com', 'www.bing.com', 'www.yahoo.com', 'duckduckgo.com', 'zum.com', 'www.msn.com', 'm.naver.com', 'm.daum.net', 'm.nate.com', 'm.daidu.com', 'm.zum.com', 'appstoreconnect.apple.com', 'www.notion.so', 'store.whale.naver.com', 'twitter.com', 'www.linkedin.com', 'map.naver.com', 'vidiq.com', 'app.baremetrics.com', 'app.chartmogul.com', 'www.paypal.com'];
        for (var i=0; i<exactHost.length; i++) {
            if (window.location.host === exactHost[i]) {
                return true;
            }
        }

        var likeHost = ['www.facebook.com', 'scholar.google.', 'chrome.google.com', 'addons.mozilla.org', 'partner.microsoft.com', 'atlassian.net', 'accounts.google', 'mail.', 'outlook.live.com', 'search.', 'translate.google.', 'feedly.com', 'highly.co', 'dropbox.com', 'cloud.naver.com', 'classroom.google.com', 'drive.google.com', 'inbox.google.com', 'classroom.google.com', 'analytics.google.com', 'docs.google.com', 'myaccount.google.com', 'trello.com', 'agit.io', 'slack.com', 'notion.so', 'onedrive.live.com', 'localhost', ':', 'liner.link', 'getliner.com', 'lnr.li', 'cafe.naver.com', 'cafe.daum.net', 'blog.daum.net', 'blog.naver.com', 'blog.me', 'braze.com', 'www.pinterest'];
        for (var i=0; i<likeHost.length; i++) {
            if (window.location.host.indexOf(likeHost[i]) != -1) {
                if (window.location.href.indexOf('/guide/browser-extension') != -1 || window.location.href.indexOf('getliner.com/webpdf') != -1 || window.location.href.indexOf('getliner.com/sample') != -1) {
                    // Luke - 가이드 페이지 혹은 PDF 파일임.
                    return false;
                } else if (window.location.host.indexOf('atlassian.net') != -1) {
                    if (window.location.host.split('.')[0] === "www") {
                        // Luke - Confluence 페이지가 아님
                        // Luke - 임시 방편임. 서버에 호스팅되는 Confluence는 이 방법으로 대응되지 않음
                        return false;
                    }
                } else if (likeHost[i] === 'braze.com' && window.location.host.indexOf('dashboard') === -1) {
                    // Luke - Braze Dashboard 페이지만 막으려고 하는 거기 때문에 host에 dashboard가 없으면 disable 시키지 말아야 함
                    return false;
                } else if (likeHost[i] === 'partner.microsoft.com' && window.location.href.indexOf('/dashboard/') === -1) {
                    // Luke - MS 개발자 대시보드만 막으면 됨
                    return  false;
                } else if (likeHost[i] === 'addons.mozilla.org' && window.location.href.indexOf('/developers/addons') === -1) {
                    // Luke - Firefox Addon 개발자 대시보드만 막으면 됨
                    return false;
                } else if (likeHost[i] === 'chrome.google.com' && window.location.href.indexOf('/webstore') === -1) {
                    // Luke - Chrome Web Store 관련 url들만 막으면 됨
                    return false;
                } else if (likeHost[i] === 'www.facebook.com') {
                    if (window.location.pathname.indexOf('/facebookmedia') != -1 || window.location.pathname.indexOf('/business') != -1) {
                    // Luke - Facebook의 미디어, 비즈니스 솔루션 정리 문서는 열어줌
                    return false;
                    }
                }
                return true;
            }
        }

        var likeUrl = ['play.google.com/apps/publish', 'facebook.com/dialog', 'facebook.com/sharer/sharer.php', 'api.twitter.com/oauth', 'twitter.com/intent/tweet', 'www.evernote.com/client', 'www.evernote.com/shard', 'www.onenote.com/authredir', 'wanted.co.kr/dashboard'];
        for (var i=0; i<likeUrl.length; i++) {
            if (window.location.href.indexOf(likeUrl[i]) != -1) {
                return true;
            }
        }

        // Luke - google search result page or google maps page
        if (window.location.host.indexOf('www.google') != -1) {
            if (window.location.href.indexOf('/search') != -1 || window.location.href.indexOf('/maps') != -1) {
                return true;
            }
        }

        if (isIP(window.location.host)) {
            return true;
        }

        function isIP(address){
            r = RegExp('^http[s]?:\/\/((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])');
            return r.test( address )
        }

        return false;
    }
}

// Luke - resource.js
if ((window.injectLinerResourceJS || (window.injectLinerCoreScript || window.top === window)) && !window.isResourceJSInjected) {
    window.isResourceJSInjected = true;
    const $ = window.linerJQuery;

    function getLinerMiniBtn() {
        return `
        <div class="liner-mini-tooltip liner-maintain-selection ${window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop'}">
            <span class="liner-color-yellow liner-mini-color-circle liner-save-button"></span>
            <span class="liner-color-green liner-mini-color-circle liner-save-button"></span>
            <span class="liner-color-orange liner-mini-color-circle liner-save-button"></span>
            <span class="liner-color-violet liner-mini-color-circle liner-save-button"></span>
            <span class="liner-color-blue liner-mini-color-circle liner-save-button"></span>
            <span class="liner-color-pink liner-mini-color-circle liner-save-button"></span>
        </div>        
        <div class="liner-mini-button">
            <a class="liner-mb liner-save-button ${window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop'} ${window.isWhaleBrowser ? 'liner-whale' : ''}"></a>
        </div>`;
    }

    function getLinerTooltip() {
        return `
        <div class="liner-tooltip-wrap ${window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop'}">
            <div class="liner-tooltip-menu ${(window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop')}">
                <span class="liner-tooltip-color liner-tooltip-icon"></span>
                <span class="liner-tooltip-comment liner-tooltip-icon"></span>
                <span class="liner-tooltip-share liner-tooltip-icon"></span>
                <span class="liner-tooltip-undo liner-tooltip-icon"></span>
            </div>
            <div class="liner-color-picker ${window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop'}">
                <span class="liner-color-yellow liner-color-circle"></span>
                <span class="liner-color-green liner-color-circle"></span>
                <span class="liner-color-orange liner-color-circle"></span>
                <span class="liner-color-violet liner-color-circle"></span>
                <span class="liner-color-blue liner-color-circle"></span>
                <span class="liner-color-pink liner-color-circle"></span>
            </div>
            ${getShareMethodHtml()}
            <div class="liner-tooltip-arrow ${window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop'}">
                <span class="liner-arrow-down"></span>
            </div>
        </div>`;
    }

    function getShareMethodHtml() {
        return `
        <div class="liner-share-menu '${window.isLinerBrowser ? 'liner-mobile' : 'liner-desktop'}">
            <a class="liner-share-method liner-share-facebook" target="_blank">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('Facebook')}</span>
            </a>
            <a class="liner-share-method liner-share-twitter" target="_blank">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('Twitter')}</span>
            </a>
            <a class="liner-share-method liner-share-linkedin" target="_blank">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('LinkedIn')}</span>
            </a>
            <a class="liner-share-method liner-share-messenger" target="_blank">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('Messenger')}</span>
            </a>
            <a class="liner-share-method liner-share-line" target="_blank">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('LINE')}</span>
            </a>
            <a class="liner-share-method liner-share-kakaotalk">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('KakaoTalk')}</span>
            </a>
            <a class="liner-share-method liner-share-mail" target="_blank">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('Mail')}</span>
            </a>
            <a class="liner-share-method liner-share-copy">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('Copy')}</span>
            </a>
            <div class="liner-share-method liner-share-copied">
                <div class="liner-share-method-icon"></div>
                <span class="liner-share-method-label">${localize('Copied')}</span>
            </div>
        </div>`;
    }

    function getCommentBoxHtml() {
        return `
        <div class="liner-comment-box">
            <div class="liner-comment-line"></div>
            <div class="liner-comment-area">
                <textarea class="liner-comment-input" placeholder="${localize('Write a comment')}"></textarea>
            </div>
        </div>`;
    }

    function getMobileCommentBoxHtml() {
        return `
        <div class="liner-mobile-comment-box">
            <div class="liner-comment-header">
                <div class="liner-comment-header-label">${localize('Comment')}</div>
                <a class="liner-comment-save">${localize('Done')}</a>
            </div>
            <div class="liner-comment-highlight-container">
                <div class="liner-comment-highlight">
                    <div class="liner-comment-highlight-index"></div>
                        <div class="liner-comment-highlight-content"></div>
                    </div>
                <div class="liner-comment-line"></div>
            </div>
            <div class="liner-comment-comment-container">
                <div class="liner-comment-comment-icon"></div>
                <textarea class="liner-comment-textarea" placeholder="${localize('Write a comment')}"></textarea>
            </div>
        </div>`;
    }

    function getCommentIconHTMLWithDataId(dataId) {
        const commentIconSRC = 'data:image/png;base64,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';
        return `
        <div class="liner-comment-icon" data-id="${dataId}" id="lgt${dataId}">
            <img class="liner-comment-bubble" data-id="${dataId}" src="${commentIconSRC}"/>
        </div>`;
    }

    function getUpgradeToHighlightHTML() {
        return `
        <div class="liner-upgrade-highlight-box liner-maintain-selection">
            <div class="liner-upgrade-highlight-header-border liner-maintain-selection"></div>
            <div class="liner-upgrade-highlight-close"></div>
            <div class="liner-upgrade-highlight-title-label liner-maintain-selection">${localize("You've reached<br>the limit - highlight")}</div>
            <div class="liner-upgrade-highlight-desc-label liner-maintain-selection">${localize("Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.")}</div>
            <a class="liner-upgrade-highlight-upgrade liner-maintain-selection" href="https://getliner.com/upgrade" target="_blank">${localize("UPGRADE")}</a>
        </div>`;
    }

    function getUpgradeToCommentHTML() {
        return `
        <div class="liner-upgrade-comment-box">
            <div class="liner-upgrade-comment-header-border"></div>
            <div class="liner-upgrade-comment-close"></div>
            <div class="liner-upgrade-comment-title-label">${localize("You've reached<br>the limit - comment")}</div>
            <div class="liner-upgrade-comment-desc-label">${localize("Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.")}</div>
            <a class="liner-upgrade-comment-upgrade liner-maintain-selection" href="https://getliner.com/upgrade" target="_blank">${localize("UPGRADE")}</a>
        </div>`;
    }

    function getUploadPDFBtn() {
        return `
        <div class="liner-upload-pdf-btn"></div>
        <div class="liner-upload-pdf-tooltip">${localize("Highlight on this PDF")}</div>
        <div class="liner-upload-pdf-banner">${localize("Start highlighting on this PDF 👆")}</div>
        <div class="liner-upload-pdf-progress-bar"></div>
        `
    }
}  

// Luke - api.js
if ((window.injectLinerAPIJS || (window.injectLinerCoreScript || window.top === window)) && !window.isAPIJSInjected) {
    window.isAPIJSInjected = true;
    const $ = window.linerJQuery;

    function saveHighlightVarToStorage() {
        highlightVar.style_items = Lighter.export();
        localStorage.setItem("liner_highlight_var", JSON.stringify(highlightVar));
    }

    function getHighlightVarFromStorage() {
        try {
            return JSON.parse(localStorage.getItem("liner_highlight_var") ?? null);
        } catch(e) {}
        return null;
    }
}

// Luke - message-receiver.js
if ((window.injectLinerMessageReceiverJS || (window.injectLinerCoreScript || window.top === window)) && !window.isMessageReceiverJSInjected) {
    window.isMessageReceiverJSInjected = true;
    const $ = window.linerJQuery;

    // Luke - message-receiver.js가 main.js보다 먼저 삽입되기 때문에 여기에서 변수를 선언해야 함
    var browser = getBrowser();
    function getBrowser() {
        try {
            if (window.safari && !window.safari.id) {
                return window.safari;
            }

            if (window.whale) {
                return window.whale;
            }

            return chrome;
        } catch(e) {};
        return null;
    }

    var browserPort = getBrowserPort();
    function getBrowserPort() {
        try {
            return browser.runtime.connect();
        } catch(e) {};
        return null;
    }

    try {
        if (window.isLinerBrowser) {
            if (window.isLinerBrowserDesktopDebugMode) {
                if (window.safari && !window.safari.id) {
                    safari.self.addEventListener("message", function(event) {
                        logger("message from safari native");
                        logger(event);
                        handleMessage(event);
                    });        
                } else {
                    browser.runtime.onMessage.addListener(function(event, sender, sendResponse) {
                        logger("message from react native");
                        logger(event);
                        handleMessage(event);
                    });      
                }
            } else {
                document.addEventListener("message", function(event) {
                    logger("message from react native");
                    logger(JSON.parse(event.data));
                    handleMessage(JSON.parse(event.data));
                });
            }
        } else if (window.safari && !window.safari.id) {
            safari.self.addEventListener("message", function(event) {
                logger("message from safari native");
                logger(event);
                handleMessage(event);

                $('iframe.liner-popover').length > 0 ? $('iframe.liner-popover')[0].contentWindow.postMessage(JSON.stringify(event), '*') : null;
                $('iframe.liner-popover-tag').length > 0 ? $('iframe.liner-popover-tag')[0].contentWindow.postMessage(JSON.stringify(event), '*') : null;
                $('iframe.liner-popover-recommendation').length > 0 ? $('iframe.liner-popover-recommendation')[0].contentWindow.postMessage(JSON.stringify(event), '*') : null;
                $('iframe.liner-iam').length > 0 ? $('iframe.liner-iam')[0].contentWindow.postMessage(JSON.stringify(event), '*') : null;
            });

            window.addEventListener("message", function(event) {
                if (event.origin !== "https://gcpstorage.getliner.com") {
                    return;
                }
                logger("message from iframe, relaying it to native");
                logger(JSON.parse(event.data));
                messageToNative(JSON.parse(event.data).name, JSON.parse(event.data).message);
            }, false);
        } else {
            browser.runtime.onMessage.addListener(function(event, sender, sendResponse) {
                logger("message from extension background");
                logger(event);
                handleMessage(event);
            });
        }
    } catch(e) {}

    // Luke - Common message handler for all browsers
    // Luke - event는 name과 message로 구성됨
    // Luke - Safari와 그 외 Extension에서 사용하는 이벤트가 서로 살짝 달라서 한 곳엔 있고 한 곳엔 없을 수 있는데, 하나의 파일을 함께 사용할 것이기 때문에 한 쪽의 Extension에 이벤트가 없다고 하여 삭제하면 안됨.
    // Luke - 양쪽에서 모두 사용하지 않는 것을 반드시 확인해야함
    // Luke - ex) name: USER_INFO, message: { key : value }
    function handleMessage(event) {
        if (event.name === "GET_FAVICON") {
            messageToNative("FAVICON", {
                url: getFavicon()
            });
            return;    
        }

        if (isWebPDFFile()) {
            if (event.name === "INIT_PDF_UPLOAD_BTN") {
                window.didSeePDFBanner = event.message.did_see_pdf_banner;
                initPDFUploadBtn();
                return;
            } else if (event.name === "UPLOAD_PDF_COMPLETE") {
                $('.liner-upload-pdf-progress-bar').animate({
                    width: "100%"                        
                }, 200, function() {
                    $('.liner-upload-pdf-progress-bar').css('width', '0%');
                })

                if (event.message.pdf_url) {
                    window.location.replace(event.message.pdf_url);
                } else if (event.message.show_upgrade) {
                    window.alert("Upgrade to Highlight");
                }
                setTimeout(function() {
                    $('.liner-upload-pdf-btn').removeClass('disabled');
                }, 600);
            }
        }

        if (event.name === "LKS_GET_SEARCH_RESULT") {
            const query = event.message.query;
            const lksSearchResult = event.message.items;
            const lksMethod = event.message.method;

            if (lksSearchResult.length < 5) {
                return;
            }

            const searchCnt = 5*(parseInt(lksSearchResult.length/5));
            const html = 
                        `<div id="liner-google-search-info" style="width: 652px; padding:0; margin:0;">
                            <div id="liner-search" style= "width: 100%; height: 24px; padding: 0; padding-bottom: 16px; margin:0;">
                                <h3 style="display: block; width: 100%; font-size: 20px; font-stretch: normal; font-style: normal; letter-spacing: -.5px; color: #202124; padding:0; margin:0;">
                                    ${localize("Can't find what you need on Google?")}
                                </h3>
                            </div>
                            <a class="liner-search-info" href="https://getliner.com/home/search/tab=relevant?q=${query}" target="_blank" style="display: block; width: 100%; height: 80px; line-height: 80px; position: relative; box-shadow: 0 2px 10px 0 rgba(39, 43, 49, 0.05); background-color: #fff; padding-right: 0; margin:0; border-radius: 8px; outline: none;">
                                <p style="width: 40px; height: 100%; padding: 0; padding-right: 16px; margin:0; float:left;">
                                    <span style="display: block; width: 20px; height: 20px; padding: 30px 0 0 20px; margin: 0;">
                                        <img src="data:image/png;base64,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" style= "display: block; width: 100%; padding: 0; margin: 0;">
                                    </span>
                                </p>
                                <p style="height: 100%; padding:0; margin:0; float: left;">
                                    <span style="display: block; height: 20px; line-height: 80px; font-size: 14px; font-weight: 400; font-stretch: normal; font-style: normal; letter-spacing: -.35px; color: #52565d; margin: 0; padding: 0;">
                                        ${localize("LINER found @Count+ qualified results on @SearchQuery for you.").replace("@Count", `<em style="font-style: normal;">${searchCnt}</em>`).replace("@SearchQuery", `<strong>${query}</strong>`)}
                                    </span>
                                </p>
                                <p style="width: 32px; height: 100%; padding:0; margin:0; float: right;">
                                    <span style="display: block; width: 16px; height: 16px; padding: 32px 16px 32px 0; margin: 0;">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAABYklEQVRoBe3ZO27CQBAGYC9ECkciTWSkXIDCTbhIlIJs55tQkCInQIBIwQk4CwXyZEeRtrHkkNl5uJgtwAK8/r/ZLcamqnx4BbwCXgGvgGUF3tZtE+P+wSrDpOTC7+s2VgDba3feWCECFYDhO4CPfH4In7PJ/DXGxS1/pnBAAuC2wcr38hkgSFsoVfqrSmF7AIBGezuRVgCD457HsGklmh5EcSXIgLEgigBjQBQDrBEsAEsEG8AKwQqwQLADtBEiAE2EGEALIQrQQIgDpBGkZg5DcY0AACVzia/AUNOXLr59nD6tSu4hRAFD4bEd57gBEgNohMetJwLQCi8C0AzPDtAOzwqwCM8GsArPArAMXwywDl8EGEN4MmAs4RFAaubSA62l9QMtDI9j+vv2v9fv4+7yXL+E1EbW+Uym3ibPd+cBCYBzn467Q0YYhb/TOPwz6z84htP5t14Br4BXwCvwRwV+AO4DUFe7k+zgAAAAAElFTkSuQmCC" style="display: block; width: 100%; padding:0; margin:0;">
                                    </span>
                                </p>
                            </a>
                        </div>`;
            $('#botstuff').after(html);
            
            $('.liner-search-info').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {}
                
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_be_liner_google_search_info_button",
                    properties: {
                        url_domain_source: window.location.host,
                        algorithm_id: lksMethod,
                        search_keyword: window.googleSearchQuery,
                    },
                });
            });

            $(window).on('resize scroll', function() {
                if (window.didViewLinerSearchResult !== true) {
                    if ($('.liner-search-info').isInViewport() === true) {
                        window.didViewLinerSearchResult = true;                    

                        messageToNative("AMPLITUDE_EVENT", {
                            event_name: "view_be_liner_google_search_info",
                            properties: {
                                url_domain_source: window.location.host,
                                algorithm_id: lksMethod,
                                search_keyword: window.googleSearchQuery,
                            },
                        });
                    }
                }
            });
        } else if (event.name === "LKS_GET_DOCUMENTS") {
            const lksDocs = event.message.documents;

            lksDocs.forEach(lksDoc => {
                const { document_id: lksDocId, req_url: lksDocUrl } = lksDoc;
                const lksPickedSearchResultElement = window.searchResultElements[lksDocUrl];
                if (isGoogleSERP()) {
                    if (lksPickedSearchResultElement !== undefined) {
                        const searchResultDescriptionElement = $(lksPickedSearchResultElement).children('div')[1];
                        $(searchResultDescriptionElement).after(`
                            <a class="liner-picked-search-result-link" href="https://getliner.com/home/pages/${lksDocId}" target="_blank">${localize("View in LINER")}<span class="liner-picked-search-result-arrow"></span></a>
                            <div class="liner-picked-search-result-description">
                                <p class="liner-picked-search-result-description-title">${localize("Advanced Google Search by LINER")}</p>
                                <p class="liner-picked-search-result-description-content">${localize("Based on your recent highlights, this page is likely to have what you need.")}</p>
                            </div>
                            <div class="liner-picked-search-result-information"><span class="liner-picked-search-result-information-icon"></span>${localize("Picked by LINER")}</div>
                        `);
                        const srElHeight = $(lksPickedSearchResultElement).height();
                        $(lksPickedSearchResultElement).css('position', 'relative !important');
                        $(lksPickedSearchResultElement).prepend(`
                            <div class="liner-picked-search-result-bar" style="height: ${srElHeight}px !important;"></div>
                        `);    
                        $(lksPickedSearchResultElement).children('.liner-picked-search-result-description').css('top', `${srElHeight + 9}px`);
                    }
                } else if (isGoogleScholarSERP()) {
                    $(lksPickedSearchResultElement).append(`
                        <a class="liner-picked-search-result-link liner-picked-search-result-link-scholar" href="https://getliner.com/home/pages/${lksDocId}" target="_blank">${localize("View in LINER")}<span class="liner-picked-search-result-arrow"></span></a>
                        <div class="liner-picked-search-result-description liner-picked-search-result-description-scholar">
                            <p class="liner-picked-search-result-description-title">${localize("Advanced Google Search by LINER")}</p>
                            <p class="liner-picked-search-result-description-content">${localize("Based on your recent highlights, this page is likely to have what you need.")}</p>
                        </div>
                        <div class="liner-picked-search-result-information liner-picked-search-result-information-scholar"><span class="liner-picked-search-result-information-icon"></span>${localize("Picked by LINER")}</div>
                    `);

                    const srElHeight = $(lksPickedSearchResultElement).height();
                    $(lksPickedSearchResultElement).css('position', 'relative !important');
                    $(lksPickedSearchResultElement).prepend(`
                        <div class="liner-picked-search-result-bar" style="height: ${srElHeight}px !important;"></div>
                    `);

                    $(lksPickedSearchResultElement).children('.liner-picked-search-result-description').css('top', `${srElHeight + 20}px`);                    
                }
            });

            if ($('.liner-picked-search-result-bar').length > 0) {
                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "view_be_picked_by_liner_under_search_keyword",
                    properties: {
                        url_domain_source: urlDomain,
                        content_type: contentType,
                        search_keyword: window.googleSearchQuery,
                    },
                });
            }

            $('.liner-picked-search-result-link').off().click(function(e) {
                messageToNative("GA_EVENT_RECOMMENDATION", {
                    category : 'extension',
                    action : 'click_recommendation_by_picked_by_liner',
                    label: ''
                });

                messageToNative("LKS_EVENT", {
                    type: "click_recommendation_by_picked_by_liner",
                    url: window.location.href,
                });
            });

            $('.liner-picked-search-result-information').off().click(function(e) {
                e.stopPropagation();

                if ($(this).hasClass('isOpened') === true) {
                    $(this).removeClass('isOpened');
                    $(this).prev().hide();
                } else {
                    $(this).addClass('isOpened');
                    $(this).prev().show();
                }
            });

            $('.liner-picked-search-result-bar').next().find('>a').click(function(e) {
                const originalUrl = $(this).attr('data-original-url');
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_be_picked_by_liner_original_link",
                    properties: {
                        url_domain_source: window.location.host,
                        url_domain_destination: urlDomain,
                        content_type: contentType,
                        search_keyword: window.googleSearchQuery,
                    },
                });        
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_liner_page",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,
                        source_type: 'picked_by_liner',
                    },
                });
            });
            
            $('body').click(function(e) {
                $('.liner-picked-search-result-information').removeClass('isOpened');
                $('.liner-picked-search-result-description').hide();
            });
        }

        if (isDisabledSite()) {
            // Luke - CHECK_DISABLED 등 event.name으로 따로 구분하지 않아도 모두 이 분기로 떨어뜨려서 Over check하게 함
            messageToNative("CHANGE_TOOLBAR_ITEM", {
                'type' : 'disabled',
                'is_web_pdf' : isWebPDFFile() || isLinerPSPDFKit()
            });

            // Luke - Share Dialog와 Web PDF들은 뒤에 메세지가 이어져야함
            if (!isLinerShareDialog()) {
                return;
            }
        }

        // Luke - PDF는 DIsabled site의 일부이므로 앞에서 체크해야함
        if (event.name === "SET_IS_LINER_PAGE") {
            recommendedByLinerInfo = {
                source_type: event.message.source_type,
                algorithm_id: event.message.algorithm_id,
            }
        } else if (event.name === "PAGE_SAVED") {
            messageToNative("LKS_GET_RECOMMENDATIONS_BY_HIGHLIGHT", {
                url: window.location.href,
                title: $('title').text().trim().substring(0, 100),
                phrase: $('title').text().trim().substring(0, 1000),
                is_recommendations_showing: window.isRecommendationShowing ?? false,
            });
        } else if (event.name === "SHOW_TAG") {
            $(`iframe.liner-popover.liner-popover-tag`).css('top', `${event.message.top}px`);
            setTimeout(function() {
                $(`iframe.liner-popover.liner-popover-tag`).show();            
            }, 100);
        } else if (event.name === "HIDE_TAG") {
            setTimeout(function() {
                $(`iframe.liner-popover.liner-popover-tag`).hide();
            }, 100);
        } else if (event.name === "LKS_READ") {
            lksReadEvent();
        } else if (event.name === "LKS_UPDATE_DURATION") {
            lksReadDuration = new Date();
        } else if (event.name === "SHOW_RECOMMENDATION_POPOVER_SPINNER") {
            window.isRecommendationShowing = true;
        } else if (event.name === "CHECK_DISABLED") {
            if (window.isLinerBrowser && window.location.href.indexOf('/amp/') != -1) {
                if ($('link[rel="canonical"]').length > 0 && $('link[rel="canonical"]')[0].href && window.isRelocatingToCanonicalUrl != true) {
                    window.isRelocatingToCanonicalUrl = true
                    window.location.replace($('link[rel="canonical"]')[0].href);
                    return;
                }
            }

            // Luke - SPA에서 페이지 로딩 대응
            const isSPAReload = linerVar.lastUrl != window.location.href;
            if (isSPAReload) {
                linerVar.lastUrl = window.location.href;
                linerVar.highlightIDs = [];

                linerVar.selectedHighlight = null;
                highlightVar = {
                    comments: [],
                    new_highlights: []
                };    
                Lighter.import("W10=");
                messageToNative("CLOSE_POPOVER", {});
                messageToNative("DOCUMENT_READY", {});

                if (window.isLinerBrowser) {
                    $('video').attr("webkit-playsinline", "");
                    $('video').attr("playsinline", "");
                }
            }
        } else if (event.name === "INJECT_POPOVER") {
            $(`.${event.message.class.replace(' ', '.')}`).remove();
            $('body').append(`<iframe class="${event.message.class}" src="${event.message.src}" style="${event.message.style}"></iframe>`);

            if (window.doNotShowPopover === true) {
                $('.liner-popover.liner-popover-recommendation').hide();
            }

            const mainPopoverHeight = $('.liner-popover.liner-popover-main').height();
            let recommendationPopoverHeight = $('.liner-popover.liner-popover-recommendation').height() + 2;
            const isRPHidden = !$('.liner-popover.liner-popover-recommendation').is(':visible');
            if (isRPHidden) {
                recommendationPopoverHeight = 0;
            }
            const marginBetweenPopover = 8;
            $('iframe.liner-iam').css('top', `${20 + mainPopoverHeight + marginBetweenPopover*2 + recommendationPopoverHeight}px`);
        } else if (event.name === "ANIMATE_POPOVER_SHOW") {
            var linerPopoverType = '.liner-popover-' + event.message.type;
            if (!event.message.type) {
                linerPopoverType = "";
            }
            $(`iframe.liner-popover${linerPopoverType}`).animate({
                opacity: 1,
                top: '22px'
            }, 200, function() {
                $(`iframe.liner-popover${linerPopoverType}`).animate({
                    top: '20px'
                }, 50, function() {})
            });
            window.isPopoverOpened = true;
        } else if (event.name === "ANIMATE_POPOVER_REMOVE") {
            $('iframe.liner-popover').animate({
                opacity: 0,
                top: '-20px'
            }, 200, function() {
                window.isPopoverOpened = false;
                $('iframe.liner-popover').remove();
                window.isRecommendationShowing = false;
            });
        } else if (event.name === "TOGGLE_RELEVANT_PAGES") {
            $('iframe.liner-popover-recommendation')[0].style = event.message.style;

            const mainPopoverHeight = $('.liner-popover.liner-popover-main').height();
            let recommendationPopoverHeight = $('.liner-popover.liner-popover-recommendation').height() + 2;
            const isRPHidden = !$('.liner-popover.liner-popover-recommendation').is(':visible');
            if (isRPHidden) {
                recommendationPopoverHeight = 0;
            }
            const marginBetweenPopover = 8;

            $('.liner-popover.liner-popover-recommendation').css('top', 20 + mainPopoverHeight + marginBetweenPopover);
            $('iframe.liner-iam').css('top', `${20 + mainPopoverHeight + marginBetweenPopover*2 + recommendationPopoverHeight}px`);
        } else if (event.name === "RELOAD_RECOMMENDATION_POPOVER") {
            if (window.doNotShowPopover === true) {
                return;
            }

            $('iframe.liner-popover-recommendation')[0].style = event.message.style;
            $('iframe.liner-popover-recommendation').show();

            //celina popup
            const mainPopoverHeight = $('.liner-popover.liner-popover-main').height();
            let recommendationPopoverHeight = $('.liner-popover.liner-popover-recommendation').height() + 2;
            const isRPHidden = !$('.liner-popover.liner-popover-recommendation').is(':visible');
            if (isRPHidden) {
                recommendationPopoverHeight = 0;
            }
            const marginBetweenPopover = 8;

            $('.liner-popover.liner-popover-recommendation').css('top', 20 + mainPopoverHeight + marginBetweenPopover);
            $('iframe.liner-iam').css('top', `${20 + mainPopoverHeight + marginBetweenPopover*2 + recommendationPopoverHeight}px`);
        } else if (event.name === "HIDE_RECOMMENDATIONS_BY_HIGHLIGHT") {
            $('iframe.liner-popover-recommendation').hide();
            window.isRecommendationShowing = false;
        } else if (event.name === "SHOW_IAM") {
            $('iframe.liner-iam').css('display', 'block');
            $('iframe.liner-iam').animate({
                opacity: 1,
            }, 200, function() {});
        } else if (event.name === "HIDE_IAM") {
            $('iframe.liner-iam').animate({
                opacity: 0,
            }, 200, function() {
                $('iframe.liner-iam').css('display', 'none');
            });
        } else if (event.name === "REMOVE_IAM") {
            $('iframe.liner-iam').remove();
        } else if (event.name === "REMOVE_ALL_POPOVERS") {
            $('iframe.liner-popover').remove(); 
            $('iframe.liner-iam').remove();
        } else if (event.name === "DO_NOT_SHOW_POPOVER") {
            window.doNotShowPopover = true;
        } else if (event.name === "TOGGLE_POPOVER") {
            window.doNotShowPopover = false;
            
            if (window.isPopoverOpened) {
                messageToNative("CLOSE_POPOVER", {});
            } else {
                messageToNative("SHOW_POPOVER", {
                    is_triggered_by_highlight: event.message.is_triggered_by_highlight,
                });

                messageToNative("LKS_GET_RECOMMENDATIONS_BY_HIGHLIGHT", {
                    url: window.location.href,
                    title: $('title').text().trim().substring(0, 100),
                    phrase: $('title').text().trim().substring(0, 1000),
                    is_recommendations_showing: window.isRecommendationShowing ?? false,
                });
            }
        } else if (event.name === "CHANGE_POPOVER_HEIGHT") {
            const popoverClass = event.message.popover_class ? `.${event.message.popover_class}` : "";
            $(`.liner-popover${popoverClass}`).css('height', `${event.message.height}px`);

            const mainPopoverHeight = $('.liner-popover.liner-popover-main').height();
            let recommendationPopoverHeight = $('.liner-popover.liner-popover-recommendation').height() + 2;
            const isRPHidden = !$('.liner-popover.liner-popover-recommendation').is(':visible');
            if (isRPHidden) {
                recommendationPopoverHeight = 0;
            }
            const marginBetweenPopover = 8;

            $('.liner-popover.liner-popover-recommendation').css('top', 20 + mainPopoverHeight + marginBetweenPopover);
            $('iframe.liner-iam').css('top', `${20 + mainPopoverHeight + marginBetweenPopover*2 + recommendationPopoverHeight}px`);
        } else if (event.name === "USER_INFO") {
            linerVar.user = event.message;

            if (!isNaN(parseInt(linerVar.user.highlight_limit))) {
                $('.liner-upgrade-highlight-limit').text(parseInt(linerVar.user.highlight_limit));
            }

            if (isLINERMobileGuidePage() || isLINERGuidePage()) {
                evaluateScript(`
                    window.userEmail = '${linerVar.user.email}';
                    window.userId = ${linerVar.user.id};
                `);
            }

            evaluateScript(
                `
                ${brazeJS}
                linerAppboy.initialize('7af503ae-0c84-478f-98b0-ecfff5d67750', {
                    baseUrl: 'https://customer.iad-03.braze.com/api/v3',
                    openCardsInNewTab: true,
                    enableHtmlInAppMessages: true,
                    minimumIntervalBetweenTriggerActionsInSeconds: 1,
                });
                linerAppboy.display.automaticallyShowNewInAppMessages();
                linerAppboy.changeUser(${linerVar.user.id});
                linerAppboy.openSession();
                `
            );
        } else if (event.name === "PAGE_INFO_WITHOUT_HIGHLIGHT_IMPORT") {
            var comments = highlightVar.comments;
            var newHighlights = highlightVar.new_highlights;

            highlightVar = event.message;
            highlightVar.comments = comments;
            highlightVar.new_highlights = newHighlights;      

            messageToNative("CACHE_SHARE_PAGE", {
                share_id: highlightVar.share_id
            });
        } else if (event.name === "PAGE_INFO") {
            highlightVar = event.message;
            lksReadStatus = 2;

            if (!highlightVar.new_highlights) {
                highlightVar.new_highlights = [];
            }

            messageToNative("CACHE_SHARE_PAGE", {
                share_id: highlightVar.share_id
            });
            Lighter.import(highlightVar.style_items);
            setLighterEvents();
            resetAllComments();

            if (window.location.href.indexOf('getliner.com/webpdf') != -1) {
                try {
                    setInterval(function () {
                        if (highlightVar.pdfPageNumber != $('#pageNumber').val()) {
                            highlightVar.pdfPageNumber = $('#pageNumber').val();

                            var pdfHighlightImportTryCnt = 0;
                            var pdfHighlightInterval = setInterval(function () {
                                Lighter.import(Lighter.export());
                                setLighterEvents();
                                resetAllComments();
                                pdfHighlightImportTryCnt += 1;
                                if (pdfHighlightImportTryCnt >= 5) {
                                    clearInterval(pdfHighlightInterval);
                                }
                            }, 300);
                        }
                    }, 1000);
                } catch(e) {}
            }
        } else if (event.name === "SAVE_PAGE") {
            if (highlightVar.page_id === undefined) {
                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: recommendedByLinerInfo["source_type"] !== undefined ? "save_liner_page" : "save_web_page",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,        
                        source_type: recommendedByLinerInfo["source_type"],
                        algorithm_id: recommendedByLinerInfo["algorithm_id"],                
                    },
                });

                messageToNative("UPDATE_STYLE", {
                    style_items: Lighter.export(),
                    image_url: getPageImage(),
                    doc,
                });
            } else {
                logger("this page is already saved");
            }

            if (lksReadStatus !== 2) {
                lksReadStatus = 1;
                for (var i=0; i<lksCopyEvents.length; i++) {
                    messageToNative("LKS_EVENT", lksCopyEvents[i]);                    
                }
                lksCopyEvents = [];
            }
        } else if (event.name === "DELETE_ALL_HIGHLIGHTS") {
            var highlights = JSON.parse(window.atob(Lighter.export()));

            for (var i=0; i<highlights.length; i++) {
                var highlightId = highlights[i].id;
                var oneHighlight = $('lighter[data-id="lgt' + highlightId + '"]');
                oneHighlight.target = oneHighlight[0];
                if (oneHighlight.target) {
                    Lighter.detectSpanColor(oneHighlight);
                    Lighter.doRemoveStyle();
                }
            }

            setLighterEvents();
            resetAllComments();
            $('.liner-comment-icon').remove();

            linerVar.highlightIDs = [];
            linerVar.selectedHighlight = null;
            highlightVar = {
                comments: [],
                new_highlights: []
            };

            if (window.isLinerAPIMode) {
                saveHighlightVarToStorage();
            }
        } else if (event.name === "LOGIN") {
            if (window.location.host === "getliner.com") {
                // Luke - getliner.com
                $.get("https://getliner.com/auth/cookie", function(data) {
                    messageToNative("LOGIN", {
                        cookie: data.cookie
                    })
                }).fail(function() {

                });
            } else {
                // Luke - not getliner.com
                // Luke - type: highlight, comment, save
                if (linerVar.didSeeLoginMessage[event.message.type]) {
                    return;
                }
                linerVar.didSeeLoginMessage[event.message.type] = true;
                messageToNative("LOGIN", {
                    type: event.message.type
                });
            }
        } else if (event.name === "ALERT") {
            alert(event.message.message);
        } else if (event.name === "GUIDE_STEP_3") {
            window.location.hash = "#step3";
            messageToNative("NEW_TAB", {
                url: "https://getliner.com/guide/browser-extension"
            });
        } else if (event.name === "GET_SHARING_CONTENT") {
            var autoCompleteInterval = setInterval(function () {
                if (isLinerFBDialog()) {
                    if ($('.mentionsTextarea').length > 0 || $('#feedform_user_message').length > 0) {
                        clearInterval(autoCompleteInterval);

                        // Luke - FB Share Dialog
                        $('.mentionsTextarea').val(event.message.content);
                        // Luke - FB Send Dialog
                        $('#feedform_user_message').val(event.message.content);
                    }
                } else if (isLinerLinkedInDialog()) {
                    if ($('.mentions-texteditor__content').length > 0 || $('#msg-inshare-textarea').length > 0) {
                        clearInterval(autoCompleteInterval);

                        // Luke - LinkedIn Share Dialog(Post)
                        $('.mentions-texteditor__content').text(event.message.content);
                        // Luke - LinkedIn Share Dialog(Private Message)
                        $('#msg-inshare-textarea').val(event.message.content);
                        if (isLinerLinkedInDialog()) {
                            var reAutoCompleteInterval = setInterval(function () {
                                if ($('.inshare-content__list').length > 0) {
                                clearInterval(reAutoCompleteInterval);
                                messageToNative("GET_SHARING_CONTENT", {});
                                }
                            }, 1000);
                        }
                    }
                } else if (isLinerLineDialog()) {
                    for (var i=0; i<$('textarea').length; i++) {
                        if (!$($('textarea')[i]).hasClass('liner-comment-input')) {
                        // Luke - Line Share Dialog
                        clearInterval(autoCompleteInterval);
                        setTimeout(function () {
                            $($('textarea')[i]).val(event.message.content);

                            var sharingContent = event.message.content;
                            var keydownInterval = setInterval(function () {
                                if (sharingContent != $($('textarea')[i]).val()) {
                                    $($('textarea')[i]).val(event.message.content);
                                }
                                $($('textarea')[i]).keydown(function (e) {
                                    try { e.stopPropagation(); } catch(e) {};
                                    clearInterval(keydownInterval);
                                });
                            }, 50);
                        }, 300);
                        break;
                        }
                    }
                } else {
                    clearInterval(autoCompleteInterval);
                }
            }, 300);
        } else if (event.name === "SET_DO_SHOW_KAKAOTALK") {
            doShowKakaoTalk = event.message.do_show_kakaotalk;
        } else if (event.name === "EXECUTE_SCRIPT") {
            try {
                var script = document.createElement('script');
                script.textContent = event.message.code;
                (document.head||document.documentElement).appendChild(script);
                script.remove();
            } catch (e) {}      
        }
    }

    $(document).ready(function() {
        window.handleMessage = handleMessage;
    })
}  



// Luke - lks.js
if ((window.injectLinerLksJS || (window.injectLinerCoreScript || window.top === window)) && !window.isLksJSInjected) {
    window.isLksJSInjected = true;
    const $ = window.linerJQuery;

    function getSimplifiedDocument() {
        try {
            return document.documentElement.outerHTML.replace(/<body\b[^<]*(?:(?!<\/body>)<[^<]*)*<\/body>/gi, '<body></body>').replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        } catch(e) {}
        return "";
    }

    function getPhrase() {
        if (document.getSelection().toString().trim() === "") {
            return "";
        }
        const paragraph = document.getSelection().anchorNode.parentElement.textContent.trim();
        return paragraph;
    }

    function getLighterPhrase(dataId) {
        try {
            return $(`lighter[data-id="lgt${dataId}"]`)[0].parentElement.textContent.trim();
        } catch(e) {}
        return "";
    }

    function lksReadEvent() {
        if ((new Date()) - lksReadDuration < 6000) {
            return;
        }
        let keywords = [];
        for (var i=0; i<$('meta[name="keywords"]').text().split(",").length; i++) {
            try {
                const keyword = $('meta[name="keywords"]').text().split(",")[i].trim();
                if (keyword.trim() != "") {
                    keywords.push(keyword);
                }
            } catch(e) {}
        }
        if (lksReadStatus === 1) {
            messageToNative("LKS_EVENT", {
                type: "read_doc",
                url: window.location.href,
                keywords: keywords,
                scroll_down_ratio: document.body.scrollHeight > 0 ? window.scrollY/document.body.scrollHeight : 0,
                read_duration: (new Date()) - lksReadDuration
            });
            lksReadStatus = 2;
        } else if (lksReadStatus === 2) {
            messageToNative("LKS_EVENT", {
                type: "re_read_doc",
                url: window.location.href,
                keywords: keywords,
                scroll_down_ratio: document.body.scrollHeight > 0 ? window.scrollY/document.body.scrollHeight : 0,
                read_duration: (new Date()) - lksReadDuration
            });
        }        
    }

    window.addEventListener("pagehide", function(event) {
        lksReadEvent();        
    });

    var lksCopiedText = "";
    document.addEventListener("copy", (event) => {
        var tempSelected = document.getSelection().getRangeAt(0).toString().trim();
        if (tempSelected === "") {
            return;
        }
        if (lksCopiedText === tempSelected) {
            return;
        }

        lksCopiedText = tempSelected;

        try {
            const phrase = getPhrase();
            const sel = document.getSelection();
            const selectionRects = sel.getRangeAt(0).getClientRects();
            const firstSelectionRect = selectionRects[0];
            const fontSize = parseInt(window.getComputedStyle(sel.anchorNode.parentElement).fontSize);
            const fontWeight = window.getComputedStyle(sel.anchorNode.parentElement).fontWeight;
            const fontStyle = window.getComputedStyle(sel.anchorNode.parentElement).fontStyle;

            let relHeight = -1;
            if (document.body.scrollHeight > 0) {
                relHeight = (window.scrollY + firstSelectionRect.top)/document.body.scrollHeight;
            }

            if (lksReadStatus === 0) {
                // Luke - 아직 저장 안 한 페이지
                lksCopyEvents.push({
                    type: "copy_phrase",
                    url: window.location.href,
                    title: $('title').text().trim(),
                    phrase: phrase,
                    copied_text: tempSelected,
                    rel_height: relHeight ?? -1,
                    font_size: fontSize,
                    font_weight: fontWeight,
                    font_style: fontStyle
                });
            } else {
                // Luke - 저장했거나 재방문한 페이지
                messageToNative("LKS_EVENT", {
                    type: "copy_phrase",
                    url: window.location.href,
                    title: $('title').text().trim(),
                    phrase: phrase,
                    copied_text: tempSelected,
                    rel_height: relHeight ?? -1,
                    font_size: fontSize,
                    font_weight: fontWeight,
                    font_style: fontStyle
                });                
            }
        } catch(e) {}
    })
}


// Luke - share.js
if ((window.injectLinerShareJS || (window.injectLinerCoreScript || window.top === window)) && !window.isShareJSInjected) {
    window.isShareJSInjected = true;
    const $ = window.linerJQuery;

    var shareHost = "https://share.getliner.com";
    var linerFBAppId = 808110669244168;
    var linerKakaoKey = "254ec0f46cb79078e6a18e674220f0bd";
    var doShowKakaoTalk = false;

    function fbShareDialogUrl(url) {
        return "https://www.facebook.com/dialog/share?app_id=" + linerFBAppId + "&display=popup&href=" + encodeURIComponent(url) + "&redirect_uri=" + encodeURIComponent(url);
    }

    function fbSendDialogUrl(url) {
        return "https://www.facebook.com/dialog/send?app_id=" + linerFBAppId + "&link=" + encodeURIComponent(url) + "&redirect_uri=" + encodeURIComponent(url);
    }

    function twitterShareDialogUrl(url, highlight) {
        return "https://twitter.com/share?text=" + encodeURIComponent(highlight.substring(0, 1000)) + "&url=" + encodeURIComponent(url);
    }

    function linkedInShareDialogUrl(url) {
        return "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
    }

    function lineShareDialogUrl(url) {
        return "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(url)
    }

    function kakaoShareDialogUrl(url, highlight) {
        return "https://sharer.kakao.com/talk/friends/picker/easylink?app_key=" + linerKakaoKey + "&ka=sdk%2F1.35.2%20os%2Fjavascript%20lang%2F" + navigator.language + "%20device%2F" + navigator.platform + "%20origin%2Fhttps%253A%252F%252Fshare.getliner.com&validation_action=default&validation_params=%7B%22link_ver%22%3A%224.0%22%2C%22template_object%22%3A%7B%22object_type%22%3A%22text%22%2C%22button_title%22%3A%22%EC%A0%84%EC%B2%B4%20%EA%B8%80%20%EB%B3%B4%EA%B8%B0%22%2C%22text%22%3A%22%5B%EB%9D%BC%EC%9D%B4%EB%84%88%20%ED%95%98%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8%5D%5Cn%5Cn" + encodeURIComponent(highlight) + "%5Cn%22%2C%22link%22%3A%7B%22web_url%22%3A%22" + url + "%22%2C%22mobile_web_url%22%3A%22" + url + "%22%7D%7D%7D"
    }

    function getDoShowKakaoTalk() {
        messageToNative("GET_DO_SHOW_KAKAOTALK", {});
    }

    function mailDialogUrl(url, highlight, comment) {
        var cmt = comment.substring(0, 1000);
        if (cmt != "") {
            cmt += "\n\n"
        }

        return "mailto:?body=" + encodeURIComponent(highlight.substring(0, 600) + "\n\n" + cmt + "\n" + url);
    }
}

// Luke - endpoint.js
if ((window.injectLinerEndpointJS || (window.injectLinerCoreScript || window.top === window)) && !window.isEndpointJSInjected) {
    window.isEndpointJSInjected = true;
    const $ = window.linerJQuery;

    var server = "https://getliner.com";

    function http(server, endpoint, proto, params, callback) {
        $.ajax({
            type: proto.toUpperCase(),
            url: server + endpoint,
            data: params,
            success: function(json){
                callback(json);
            }, 
            error: function(xhr, status, error) {
                callback(xhr.responseJSON);
            }
        });
    }

    // user endpoints
    function getUsersMe(callback) {
        http(server, "/users/me", "GET", {}, function(json) {
            callback(json);
        });
    }
}

// Luke - main.js
if ((window.injectLinerMainJS || (window.injectLinerCoreScript || window.top === window)) && !window.isMainJSInjected) {
    window.isMainJSInjected = true;
    const $ = window.linerJQuery;

    function messageToNative(name, json) {
        if (window.isLinerBrowser) { // Luke - React Native Browser
            logger("message to react native - " + name);
            logger(json);
            try {
                if (window.isLinerBrowserDesktopDebugMode) {
                    if (window.safari && !window.safari.id) {
                        logger("message to safari native - " + name);
                        logger(json);
                    } else {
                        browserPort.postMessage({name: name, message: json});
                    }
                } else {
                    window.ReactNativeWebView.postMessage(JSON.stringify({name: name, message: json}));
                }
            } catch(e) {
                logger(e);
            }
            return;
        }

        if (window.safari && !window.safari.id) {
            logger("message to safari native - " + name);
            logger(json);
            try {
                safari.extension.dispatchMessage(name,  json);
            } catch(e) {
                logger(e);
            }
        } else {
            try {
                if (window.location.origin === "https://gcpstorage.getliner.com") {
                    logger("message to content script for relaying - " + name);
                    logger(json);
                    parent.postMessage(JSON.stringify({name: name, message: json}), '*');
                } else {
                    logger("message to extension background - " + name);
                    logger(json);
                    browserPort.postMessage({name: name, message: json});
                }
            } catch(e) {
                logger(e);
            }
        }
    }

    function getFavicon() {
        var links = document.getElementsByTagName('link');        
        var icons = [];        
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            var rel = link.getAttribute('rel');
            var sizes = link.getAttribute('sizes');
            if (rel) {
                if (rel.toLowerCase().indexOf('icon') > -1) {
                    var href = link.getAttribute('href');
                    if (href) {
                        if (href.toLowerCase().indexOf('https:') === -1 && href.toLowerCase().indexOf('http:') === -1 && href.indexOf('//') != 0) {                            
                            var absoluteHref = window.location.protocol + '//' + window.location.host;
                            
                            if (window.location.port) {
                                absoluteHref += ':' + window.location.port;
                            }
                    
                            if (href.indexOf('/') === 0) {
                                absoluteHref += href;
                            } else {
                                var path = window.location.pathname.split('/');
                                path.pop();
                                var finalPath = path.join('/');
                                absoluteHref += finalPath + '/' + href;
                            }                    
                            icons.push({
                                rel,
                                sizes,
                                href: absoluteHref
                            });
                        } else if(href.indexOf('//') === 0) {
                            var absoluteUrl = window.location.protocol + href;
                            icons.push({
                                rel,
                                sizes,
                                href: absoluteUrl
                            });
                        } else {
                            icons.push({
                                rel,
                                sizes,
                                href: href
                            });
                        }
                    }
                }
            }
        }

        if (icons.length === 0) {
            return "";
        }

        var largestAppleTouchIcon = {};
        for (var i=0; i<icons.length; i++) {
            if (icons[i].rel.toLowerCase().indexOf("apple-touch-icon") != -1 && !isNaN(parseInt(icons[i].sizes))) {
                if (!largestAppleTouchIcon.sizes) {
                    largestAppleTouchIcon = icons[i];
                } else {
                    if (parseInt(largestAppleTouchIcon.sizes) < parseInt(icons[i].sizes)) {
                        largestAppleTouchIcon = icons[i];                    
                    }
                }
            }
        }

        if (largestAppleTouchIcon.href) {
            return largestAppleTouchIcon.href;
        }

        for (var i=0; i<icons.length; i++) {
            if (icons[i].rel.toLowerCase().indexOf("apple-touch-icon") != -1) {
                largestAppleTouchIcon = icons[i];
            }
        }

        if (largestAppleTouchIcon.href) {
            return largestAppleTouchIcon.href;
        }

        var largestIcon = {};
        for (var i=0; i<icons.length; i++) {
            if (!isNaN(parseInt(icons[i].sizes))) {
                if (!largestIcon.sizes) {
                    largestIcon = icons[i];
                } else {
                    if (parseInt(largestIcon.sizes) < parseInt(icons[i].sizes)) {
                        largestIcon = icons[i];                    
                    }
                }
            }
        }

        if (largestIcon.href) {
            return largestIcon.href;
        }
        return icons[0].href;
    }

    function getUid() {
        var uid = localStorage.getItem("uid") ?? createDeviceID();
        localStorage.setItem('uid', uid);
        return uid;
    }
    
    function createDeviceID() {
        var d = new Date().getTime();
        var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uid;
    }

    function logger(msg) {
        if (!window.isProductionMode) {
            console.log("LINER - ", msg);
        }
    };

    function setExtensionInstalledFlag() {
        $(document).ready(function() {
            if (window.location.host.indexOf('getliner.com') != -1 || window.location.host === "localhost:3000") {
                var code = `var installedExtension = true;`;
                var node = document.createElement('script');
                node.textContent = code;
                (document.head||document.documentElement).appendChild(node);
                node.parentNode.removeChild(node);
            }
        })
    }

    function isLinerFBDialog() {
        if (window.location.host === "www.facebook.com" && window.location.href.indexOf('app_id=' + linerFBAppId) != -1) {
            return true;
        }
        return false;
    }

    function isLinerLinkedInDialog() {
        if (window.location.host === "www.linkedin.com" && window.location.href.indexOf("share.getliner.com") != -1) {
            return true;
        }
        return false;
    }

    function isLinerLineDialog() {
        if (window.location.host === "social-plugins.line.me" && window.location.href.indexOf("share.getliner.com") != -1) {
            return true;
        }
        return false;
    }

    function isLinerShareDialog() {
        if (isLinerFBDialog() || isLinerLinkedInDialog() || isLinerLineDialog()) {
            return true;
        }
        return false;
    }

    if (isLinerShareDialog()) {
        messageToNative("GET_SHARING_CONTENT", {});
    }

    function removeConflictingElements() {
        const conflictingExtensionElements = [
            'snippet-pdf-button', 'snippet_popover_container', 'snippet_screenshot_edit', 'snippet_screenshot', 'snippet_sidebar_container', 
            'diigo-video-capture', 'diigo-video-capture-wrapper', 'diigolet-notice', 'diigolet-dlg-sticky', 'diigolet-csm', 'diigo-chrome-installed', 'diigo-pdf', 'diigolet-chrome-css'
        ]

        conflictingExtensionElements.forEach(item => {
            const idElement = document.getElementById(item);
            const classElements = document.getElementsByClassName(item);
            if (idElement) {
                idElement.remove();
            }
            for (var i=0; i<classElements.length; i++) {
                classElements[i].remove();
            }
        })        
    }
    removeConflictingElements();
    $(document).ready(function() {
        removeConflictingElements();
    });
    window.addEventListener("load", function(event) {
        removeConflictingElements();
        setTimeout(function() {
            removeConflictingElements();
        }, 300);
    });

    $(document).ready(function () {
        messageToNative("LINER_CORE_VERSION", {
            version: window.linerCoreScriptVersion
        });

        messageToNative("TAB_INFO", {
            title: $('title').text().trim(),
            url: window.location.href,
            favicon: getFavicon()
        });

        if (window.isLinerBrowser) {
            $('video').attr("webkit-playsinline", "");
            $('video').attr("playsinline", "");
        }

        getDoShowKakaoTalk();

        window.addEventListener('long-press', function(longPressEvent) {
            logger("long press");
            logger(longPressEvent);
            try {
                function isATagWithHref(target) {
                    if (target.tagName.toLowerCase() === 'a' && $(target).prop("href") && $(target).prop("href").trim().indexOf('http') === 0) {
                        return true;
                    }
                    return false;
                }
                function isImgTag(target) {
                    if (target.tagName.toLowerCase() === 'img' && target.src && target.src.trim() != "" && target.src.indexOf('http') === 0) {
                        return true;
                    }
                    return false;
                }
                function getBackgroundImageUrl(target) {
                    if ($(target).css('background-image').indexOf(`("`) != -1) {
                        return $(target).css('background-image').split(`("`)[1].split(`")`)[0].trim();
                    } else {
                        return "";
                    }
                }

                let imageUrl = null;
                
                if (isATagWithHref(longPressEvent.target)) {
                    messageToNative("LONG_PRESS_LINK", {
                        url: $(longPressEvent.target).prop("href").trim()
                    });
                    return;
                } else if (isImgTag(longPressEvent.target)) {
                    imageUrl = longPressEvent.target.src.trim();
                } else if (getBackgroundImageUrl(longPressEvent.target).indexOf('http') === 0) {
                    imageUrl = getBackgroundImageUrl(longPressEvent.target).trim();
                }


                const parents = $(longPressEvent.target).parents();
                for (var i=0; i<parents.length; i++) {
                    if (isATagWithHref(parents[i])) {
                        messageToNative("LONG_PRESS_LINK", {
                            url: $(parents[i]).prop("href").trim(),
                            image_url: imageUrl
                        });
                        return;
                    }
                }

                // Luke - Disable Image Long Press
                var exactHost = ['m.map.naver.com', 'm.map.kakao.com'];
                for (var i=0; i<exactHost.length; i++) {
                    if (window.location.host === exactHost[i]) {
                        return;
                    }
                }    

                if (isImgTag(longPressEvent.target)) {
                    messageToNative("LONG_PRESS_IMAGE", {
                        image_url: longPressEvent.target.src.trim()
                    });
                    return;                
                }

                if (getBackgroundImageUrl(longPressEvent.target).indexOf('http') === 0) {
                    messageToNative("LONG_PRESS_IMAGE", {
                        image_url: imageUrl
                    });    
                    return;
                }
            } catch(e) {}
        });    

        if (isWebPDFFile()) {
            messageToNative("UPDATE_USER_INFO_IN_BACKGROUND", {});            
            messageToNative("INIT_PDF_UPLOAD_BTN", {});
        }

        window.searchResultElements = {};
        window.searchResultLinks = [];

        if (isGoogleSERP()) {
            evaluateScript(`document.getElementsByClassName("gLFyf")[0].setAttribute("language", google.kHL);`);
            window.googleSearchQuery = document.getElementsByClassName("gLFyf")[0].value;

            const urlBreadcrumbs = $('.g>div div>div>div>span');
            try {
                if (getBrowserName() !== 'firefox') {
                    for (let i=0; i<urlBreadcrumbs.length; i++) {
                        const el = $(urlBreadcrumbs[i]);
                        if (el.text().toLowerCase() === 'pdf') {
                            let href = el.parent().parent().parent().children('a')[0].href;
                            if (href !== undefined && href.indexOf('arxiv.org') !== -1 && href.indexOf('.pdf') === -1) {
                                href = href + '.pdf';
                            }
        
                            if (href !== undefined && href.indexOf('.pdf') !== -1) {
                                el.after(`
                                    <a class="liner-pdf-highlight-badge" data-url="${href}" href="${href}?uploadToLiner=true" target="_blank">
                                        <div class="liner-pdf-highlight-badge-icon"></div>
                                        <span>${localize("Highlight")}<span>
                                        <div class="liner-pdf-highlight-badge-arrow"></div>
                                    </a>`
                                );
                            }
                        }
                    }
    
                    $('.liner-pdf-highlight-badge').off().click(function(e) {
                        e.stopPropagation();
                        const pdfUrl = $(this)[0].dataset.url;
                        const urlDomain = new URL(pdfUrl).hostname;
                        messageToNative("AMPLITUDE_EVENT", {
                            event_name: "click_highlight_at_liner_button_to_add_pdf_page",
                            properties: {
                                url_domain_source: window.location.host,
                                url_domain_pdf_source: urlDomain,
                            },
                        });
                    });
                }
            } catch(e) {}

            if (showPickedByLINERInSERP()) {
                const searchResultDescriptions = $('.g>div div>div>span');
                try {
                    for (let i=0; i<searchResultDescriptions.length; i++) {
                        const el = $(searchResultDescriptions[i]);
                        if (el.height() > 0) {
                            const srEl = el.parent().parent().parent();
                            const srElATag = srEl.children('div').children('a')[0];
                            if (srElATag !== undefined) {
                                const srLink = srElATag.href;
                                if (srLink !== undefined) {
                                    window.searchResultElements[srLink] = srEl;
                                    window.searchResultLinks.push(srLink);    

                                    srElATag.target = "_blank";
                                    $(srElATag).attr('data-original-url', srLink);
                                }
                            }
                        }
                    }    
                } catch(e) {};
                
                if (window.searchResultLinks.length > 0) {
                    messageToNative("LKS_GET_DOCUMENTS", {
                        urls: window.searchResultLinks,
                        scrap_cnt: 4,
                    });    
                }
            }
            
            messageToNative("LKS_GET_SEARCH_RESULT", {
                query: window.googleSearchQuery,
            });
        } else if (isGoogleScholarSERP()) {
            const pdfATags = $('.gs_or>div>div>div>a');
            
            try {
                for (let i=0; i<pdfATags.length; i++) {
                    const el = $(pdfATags[i]);                        
                    let href = $(pdfATags[i])[0].href;
                    if (href !== undefined && href.indexOf('arxiv.org') !== -1 && href.indexOf('.pdf') === -1) {
                        href = href + '.pdf';
                    }

                    el.css('display', 'inline');
                    const elLeft = el.width() + 5;
                    el.css('display', 'block');

                    if (href !== undefined && href.indexOf('.pdf') !== -1) {
                        if (getBrowserName() !== 'firefox') {
                            el.after(`
                                <a class="liner-pdf-highlight-badge liner-pdf-highlight-badge-scholoar" data-url="${href}" style="left: ${elLeft}px;" href="${href}?uploadToLiner=true" target="_blank">
                                    <div class="liner-pdf-highlight-badge-icon"></div>
                                    <span>${localize("Highlight")}<span>
                                    <div class="liner-pdf-highlight-badge-arrow"></div>
                                </a>`
                            );
                        }

                        if (showPickedByLINERInSERP()) {
                            const srEl = el.parent().parent().parent().parent().children('.gs_ri');

                            window.searchResultElements[href] = srEl;
                            window.searchResultLinks.push(href);    
                        }
                    }
                }

                $('.liner-pdf-highlight-badge').off().click(function(e) {
                    e.stopPropagation();
                    const pdfUrl = $(this)[0].dataset.url;
                    const urlDomain = new URL(pdfUrl).hostname;
                    messageToNative("AMPLITUDE_EVENT", {
                        event_name: "click_highlight_at_liner_button_to_add_pdf_page",
                        properties: {
                            url_domain_source: window.location.host,
                            url_domain_pdf_source: urlDomain,
                        },
                    });                    
                });

                if (window.searchResultLinks.length > 0) {
                    messageToNative("LKS_GET_DOCUMENTS", {
                        urls: window.searchResultLinks,
                        scrap_cnt: 1,
                    });    
                }                
            } catch(e) {}
        }
    });

    function initPDFUploadBtn() {
        if ($('body .liner-upload-pdf-btn').length === 0) {
            messageToNative("GA_EVENT", {
                category : 'extension',
                action : 'upload_pdf_btn_shown',
                label: window.location.href
            });
        }
        
        $('.liner-upload-pdf-btn').remove();
        $('.liner-upload-pdf-tooltip').remove();
        $('.liner-upload-pdf-banner').remove();
        $('.liner-upload-pdf-progress-bar').remove();

        $('body').append(getUploadPDFBtn());

        $('.liner-upload-pdf-btn').off().hover(function() {
            if (window.didSeePDFBanner) {
                $('.liner-upload-pdf-tooltip').show();
            }

            messageToNative("GA_EVENT", {
                category : 'extension',
                action : 'upload_pdf_btn_hover',
                label: window.location.href
            });

        }, function() {
            if (window.didSeePDFBanner) {
                $('.liner-upload-pdf-tooltip').hide();
            }
        }).click(function() {
            // Luke - PDF 저장하려는데 라이너에 로그인되어있지 않은 경우 대응해야함            
            if ($(this).hasClass('disabled')) {
                return;
            }
            $(this).addClass('disabled');

            $('.liner-upload-pdf-progress-bar').animate({
                width: "80%"                        
            }, 3000, function() {});

            let fileUrl = window.location.href;
            if (fileUrl !== undefined && fileUrl.indexOf('arxiv.org') !== -1 && fileUrl.indexOf('.pdf') === -1) {
                fileUrl = fileUrl + '.pdf';
            }

            fetch(fileUrl).then(resp => resp.blob()).then(pdfBlob => {
                const pdfBlobUrl = window.URL.createObjectURL(pdfBlob);
                messageToNative("UPLOAD_PDF", {
                    pdf_blob_url: pdfBlobUrl,
                    url: fileUrl,
                });
            }).catch(() => {
                messageToNative("UPLOAD_PDF_WITH_URL", {
                    url: fileUrl
                });
            });

            messageToNative("GA_EVENT", {
                category : 'extension',
                action : 'upload_pdf_btn_click',
                label: window.location.href
            });
            
            messageToNative("AMPLITUDE_EVENT", {
                event_name: "click_liner_logo_button_to_add_pdf_page",
                properties: {
                    url_domain_pdf_source: window.location.host,
                },
            });
        });

        if (!window.didSeePDFBanner) {
            $('.liner-upload-pdf-banner').show();
        }

        const urlParams = new URLSearchParams(window.location.search);
        const uploadToLiner =  JSON.parse(urlParams.get('uploadToLiner')) === true;
        if (uploadToLiner === true) {
            $('.liner-upload-pdf-btn').hide();
            $('embed').hide();

            $('.liner-upload-pdf-progress-bar').animate({
                width: "80%"                        
            }, 3000, function() {});

            let fileUrl = window.location.href;
            if (fileUrl !== undefined && fileUrl.indexOf('arxiv.org') !== -1 && fileUrl.indexOf('.pdf') === -1) {
                fileUrl = fileUrl + '.pdf';
            }

            fetch(fileUrl).then(resp => resp.blob()).then(pdfBlob => {
                const pdfBlobUrl = window.URL.createObjectURL(pdfBlob);
                messageToNative("UPLOAD_PDF", {
                    pdf_blob_url: pdfBlobUrl,
                    url: fileUrl,
                });
            }).catch(() => {
                messageToNative("UPLOAD_PDF_WITH_URL", {
                    url: fileUrl
                });
            });
        }
    }

    setExtensionInstalledFlag();
    messageToNative("GA_PAGEVIEW", {});

    if (!isDisabledSite()) {
        // Luke - show normal toolbar item
        messageToNative("CHANGE_TOOLBAR_ITEM", {
            'type' : 'enabled'
        });

        var linerVar = {
            user: {},
            colors: [
                {
                    "name" : "yellow",
                    "rgb" : "rgb(255, 255, 141)",
                    "rgb2" : "rgb(255, 238, 141)",
                    "rgb3" : "rgb(255,253,131)",
                    "hex" : "#ffff8d",
                    "hex2" : "#ffe78d"
                },
                {
                    "name" : "green",
                    "rgb" : "rgb(165, 242, 233)",
                    "rgb2" : "rgb(127, 230, 218)",
                    "rgb3" : "rgb(166,255,234)",
                    "hex" : "#a5f2e9",
                    "hex2" : "#7fe5da"
                },
                {
                    "name" : "orange",
                    "rgb" : "rgb(255, 213, 200)",
                    "rgb2" : "rgb(255, 198, 180)",
                    "rgb3" : "rgb(255,199,186)",
                    "hex" : "#ffd5c8",
                    "hex2" : "#ffc6b4"
                },
                {
                    "name" : "violet",
                    "rgb" : "rgb(217, 195, 255)",
                    "rgb2" : "rgb(206, 177, 255)",
                    "rgb3" : "rgb(217,195,255)",
                    "hex" : "#d9c3ff",
                    "hex2" : "#ceb1ff"
                },
                {
                    "name" : "blue",
                    "rgb" : "rgb(167, 225, 251)",
                    "rgb2" : "rgb(141, 213, 247)",
                    "rgb3" : "rgb(184,220,255)",
                    "hex" : "#a7e1fb",
                    "hex2" : "#8bd5f6"
                },
                {
                    "name" : "pink",
                    "rgb" : "rgb(254, 202, 227)",
                    "rgb2" : "rgb(255, 183, 218)",
                    "rgb3" : "rgb(255,208,239)",
                    "hex" : "#fecae3",
                    "hex2" : "#ffb7da"
                }
            ],
            colorIndex: 0,
            highlightIDs: [],  // Luke - 페이지 삭제하면서 하이라이트들 날리기 위해서 필요함
            showMiniTooltip: null,
            hideMiniTooltip: null,
            selectedHighlight: null,
            tooltipTimer: null,
            commentTimer: null,
            commentingHighlightId: null,
            didSeeLoginMessage: {},
            selectionChangeTimer: null,
            lastUrl: null,
        };

        var doc;
        var initialComment = "";
        var lksReadStatus = 0;    // Luke - 0: not saved, 1: first saved, 2: revisited saved page
        var lksReadDuration = new Date();
        var lksCopyEvents = [];

        var recommendedByLinerInfo = {};

        var highlightVar = {
            comments: [],
            new_highlights: []
        };

        logger("injected main.js");

        $(window).resize(function() {
            $('.liner-mini-button').hide();
            $('.liner-mini-tooltip').hide();
        });

        $(document).ready(function() {
            logger("document ready");

            // Luke - inject ui components
            injectUIComponents();
            setLinerUIEvents();
            
            linerVar.lastUrl = window.location.href;
            
            if (window.isLinerAPIMode) {
                // Luke - local storage에서 가져와서 사용
                if (getHighlightVarFromStorage()) {
                    highlightVar = getHighlightVarFromStorage();
                    highlightVar.new_highlights = [];
                    Lighter.import(highlightVar.style_items ?? "W10=");
                    setLighterEvents();
                    
                    setTimeout(function() {
                        resetAllComments();
                    }, 100);
                }
            } else {
                messageToNative("DOCUMENT_READY", {});
            }

            window.isWhaleBrowser = browser && browser === window.whale;

            window.addEventListener("touchstart", function(touchEvent) {
                logger("touch start");
                touchStartAction(touchEvent.touches[0]);

                // Luke - 아래 document는 body element 등으로 대체하면 작동하지 않음
                document.addEventListener('selectionchange', () => {
                    clearTimeout(linerVar.selectionChangeTimer);
                    linerVar.selectionChangeTimer = setTimeout(function () {
                        selectionChangeAction(touchEvent.touches[0]);
                    }, 300);
                });
            }, false);

            window.addEventListener("mousedown", function(mouseEvent) {
                logger("mouse down");
                if ($(mouseEvent.target).hasClass('liner-maintain-selection')) {
                    // Luke - mini button 여백 클릭
                    logger('mouse down at liner mini tooltip');
                    mouseEvent.preventDefault();
                    return;
                }

                mouseDownAction(mouseEvent);
            }, false);
            
            // Luke - Safari의 go back, forward caching 문제를 해결하기 위함
            window.onpageshow = function (event) {
                if (event.persisted) {
                    window.location.reload();
                }
            };
        });

        function injectUIComponents() {
            var font = document.createElement('link');
            font.href = "https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Noto+Sans+JP:400,500,700|Noto+Sans+KR:400,500,700|Roboto:400,500,700&display=swap";
            font.rel = 'stylesheet';
            (document.body||document.documentElement).appendChild(font);

            $('.liner-mini-button').remove();
            $('.liner-mini-tooltip').remove();
            $('.liner-tooltip-wrap').remove();
            $('.liner-comment-box').remove();
            $('.liner-comment-icon').remove();
            $('.liner-upgrade-comment-box').remove();
            $('.liner-upgrade-highlight-box').remove();
            $('.liner-mobile-comment-box').remove();

            doc = getSimplifiedDocument();

            $('html').append(getLinerMiniBtn());
            $('html').append(getLinerTooltip());
            $('html').append(getCommentBoxHtml());
            $('html').append(getUpgradeToCommentHTML());
            $('html').append(getUpgradeToHighlightHTML());
            $('html').append(getMobileCommentBoxHtml());

            if (window.isLinerAPIMode) {
                $('.liner-tooltip-share').css('opacity', '0.4').css('cursor', 'auto');
            }
        }

        function getPageImage() {
            if ($("meta[property='og:image']").length > 0 && $("meta[property='og:image']")[0].content) {
                return $("meta[property='og:image']")[0].content;
            }
            if ($("meta[property='twitter:image']").length > 0 && $("meta[property='twitter:image']")[0].content) {
                return $("meta[property='twitter:image']")[0].content;
            }
            return "";
        }

        function touchStartAction(event) {
            mouseDownAction(event);
        }

        function mouseDownAction(event) {
            const target = event.target;

            if ($('.liner-comment-box').is(':visible') && !$(target).hasClass('liner-comment-input') && !$(target).hasClass('liner-comment-icon') && !$(target).hasClass('liner-comment-bubble')) {
                // Luke - Comment 수정창이 아닌 곳을 클릭한 경우
                hideCommentBox();
                $('.liner-upgrade-comment-box').fadeOut(100);
            }

            if ($('.liner-upgrade-highlight-box').is(':visible')) {
                if (!$(target).hasClass('liner-upgrade-highlight-box') && !$(target).hasClass('liner-upgrade-highlight-header-border') && !$(target).hasClass('liner-upgrade-highlight-title-label') && !$(target).hasClass('liner-upgrade-highlight-desc-label')) {
                    $('.liner-upgrade-highlight-box').fadeOut(100);
                }
            }

            if ($('.liner-upgrade-comment-box').is(':visible')) {
                if (!$(target).hasClass('liner-upgrade-comment-box') && !$(target).hasClass('liner-upgrade-comment-header-border') && !$(target).hasClass('liner-upgrade-comment-title-label') && !$(target).hasClass('liner-upgrade-comment-desc-label')) {
                    $('.liner-upgrade-comment-box').fadeOut(100);
                }
            }
            
            if ($(target).hasClass('liner-save-button')) {
                const isPaletteOpened = $('.liner-mini-tooltip').is(':visible');

                // Luke - 라이너 미니 버튼 혹은 미니 버튼 hover시 나오는 팔레트에서 색상 클릭, 페이지 저장 진행
                $('.liner-mini-button').hide();
                $('.liner-mini-tooltip').hide();

                if (!isNetworkConnected()) {
                    logger("network is not connected");
                    showNetworkErrorAlert();
                }

                if ($(target).hasClass('liner-mini-color-circle')) {
                    // Luke - 미니 버튼 hover시 나오는 팔레트에서 색상 클릭

                    if ($(target).hasClass('liner-color-lock')) {
                        if (window.isLinerBrowser) {
                            messageToNative("SHOW_UPGRADE", {
                                type: "color_limit"
                            });
                        } else {
                            messageToNative("NEW_TAB", {
                                url: "https://getliner.com/upgrade"
                            });
                        }

                        var colorClass = $(target).attr('class').toString();
                        for (i=0; i<linerVar.colors.length; i++) {
                            if (colorClass.indexOf(linerVar.colors[i].name) != -1) {
                                messageToNative("GA_EVENT", {
                                    category : window.isLinerBrowser ? 'browser' : 'extension',
                                    action : 'upgrade_to_change_color_shown',
                                    label: ''
                                });
                                messageToNative("BRAZE_EVENT", {
                                    name : 'upgrade_to_change_color_shown'
                                });
                                break;
                            }
                        }

                        messageToNative("AMPLITUDE_EVENT", {
                            event_name: "trigger_basic_plan_limit",
                            properties: {
                                context: "highlight_color",
                            },
                        });

                        return;
                    }

                    var colorClass = $(target).attr('class').toString();
                    for (i=0; i<linerVar.colors.length; i++) {
                        if (colorClass.indexOf(linerVar.colors[i].name) != -1) {
                            linerVar.colorIndex = i;
                            break;
                        }
                    }
                } else if ($(target).hasClass('liner-mb')) {
                    // Luke - 기본 색상을 노란 색으로 설정
                    linerVar.colorIndex = 0;
                }

                clearTimeout(linerVar.showMiniTooltip);

                if (linerVar.user.premium === 0 && !isNaN(parseInt(linerVar.user.highlight_limit)) && getDistinctLighterIds().length >= parseInt(linerVar.user.highlight_limit)) {
                    if (window.isLinerBrowser) {
                        messageToNative("SHOW_UPGRADE", {
                            type: "highlight_count_limit"
                        });
                    } else {
                        showUpgradeToHighlight(event);
                    }
                    return;
                }

                processHighlight(isPaletteOpened);

                // Luke - LINER Guide Page의 경우, 집중이 분산 될 수 있으므로 표시하지 않음
                if ($('.liner-popover').length === 0 && !isLINERGuidePage() && window.doNotShowPopover !== true) {
                    messageToNative("SHOW_POPOVER", {
                        is_triggered_by_highlight: true,
                    });
                }
            }

            // Luke - UX 테스트 위해 배경 터치 시 CLOSE_POPOVER 없애봄
            // if ($('.liner-popover').length > 0) {
            //     messageToNative('CLOSE_POPOVER', {});
            // }

            if ($('.liner-mini-button').is(':visible')) {
                $('.liner-mini-button').hide();
                $('.liner-mini-tooltip').hide();
                return;
            }
        }

        function selectionChangeAction(event) {
            if ($('.liner-upgrade-highlight-box').is(':visible')) {
                return;
            }

            setTimeout(function() {
                if (document.getSelection().rangeCount > 0 && isTextSelected() && !isEditableElement(event.target)) {
                    try {
                        var anchorNode = document.getSelection().anchorNode;
                        if (anchorNode != null && anchorNode.className === 'liner-comment-area') {
                            // Luke - 현재 selection을 만들어낸 곳이 라이너의 코멘트 박스. 이 때에는 미니 버튼을 보이지 않아야함
                            return;
                        }
                    } catch(e) {}

                    showMiniButton();
                }
            }, 5);
        }

        function setLinerUIEvents() {
            $('#component-wrapper').click(function (e) {
                logger("document click for Twitter");
                selectionChangeAction(e);
                documentClickHandler(e);
            })

            $(document).click(function(e) {
                logger("document click");
                selectionChangeAction(e);
                documentClickHandler(e);
            });

            function documentClickHandler(e) {       
                if (window.ignoreClickEvent === true) {
                    window.ignoreClickEvent = false;
                    return;
                }

                if ($('.liner-tooltip-wrap').is(':visible')) {
                    // Luke - tooltip이 아닌 곳을 클릭함
                    $('.liner-tooltip-wrap').hide();
                    $('.liner-tooltip-menu').show();
                    $('.liner-tooltip-arrow').removeClass('liner-share-opened');
                    $('.liner-share-menu').hide();
                }

                $(`iframe.liner-popover.liner-popover-tag`).hide();
            }

            $('.liner-tooltip-color').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {};

                $('.liner-tooltip-menu').hide();
                $('.liner-color-picker').show();

                messageToNative("GA_EVENT", {
                    'category' : window.isLinerBrowser ? 'browser' : 'extension',
                    'action' : 'edit_tooltip_change_color',
                    'label' : ''
                });

                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_color_icon_in_highlight_tool_tip",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,
                    },
                });
            });

            $('.liner-color-circle').off().click(function(e) {
                e.preventDefault();

                if (!isNetworkConnected()) {
                    showNetworkErrorAlert();
                }

                var colorClass = $(e.target).attr('class').toString();

                for (i=0; i<linerVar.colors.length; i++) {
                    if (colorClass.indexOf(linerVar.colors[i].name) != -1) {
                        var colorName = linerVar.colors[i].name;
                        if ($(e.target).hasClass('liner-color-lock')) {
                            if (window.isLinerBrowser) {
                                messageToNative("SHOW_UPGRADE", {
                                    type: "color_limit"
                                });
                            } else {
                                messageToNative("NEW_TAB", {
                                    url: "https://getliner.com/upgrade"
                                });
                            }
    
                            messageToNative("GA_EVENT", {
                                category : window.isLinerBrowser ? 'browser' : 'extension',
                                action : 'highlight_' + colorName + '_locked',
                                label: ''
                            });
                            return;
                        }

                        linerVar.colorIndex = i;
                        removeColorClassFromTooltipBtn();
                        $('.liner-tooltip-color').addClass(colorName);
                        break;
                    }
                }

                Lighter.detectSpanColor(linerVar.selectedHighlight);
                Lighter.doChangeStyle({
                    backgroundColor : linerVar.colors[linerVar.colorIndex].hex
                });

                evaluateScript(`linerAppboy.logCustomEvent('web_switch_highlight_color');`);

                for (var i=0; i<highlightVar.comments.length; i++) {
                    if (highlightVar.comments[i].styleItemId === getDataIdFromSelectedHighlight()) {
                        highlightVar.comments[i].styleItemColor = linerVar.colors[linerVar.colorIndex].hex;
                        break;
                    }          
                }

                messageToNative("UPDATE_HIGHLIGHT", {
                    highlight_id: getDataIdFromSelectedHighlight(),
                    color: linerVar.colors[linerVar.colorIndex].hex
                });

                messageToNative("GA_EVENT", {
                    'category' : window.isLinerBrowser ? 'browser' : 'extension',
                    'action' : 'highlight_' + linerVar.colors[linerVar.colorIndex].name,
                    'label' : ''
                });

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: 'change_color_of_highlight',
                    properties: {
                        theme_type: 'basic',
                        color: linerVar.colors[linerVar.colorIndex].hex,
                        label: '',
                        text_length: currentHighlightString().length,
                    }
                });

                hideTooltip(e);

                if (window.isLinerAPIMode) {
                    saveHighlightVarToStorage();
                }
            });

            $('.liner-tooltip-comment').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {};

                if ($('.liner-tooltip-wrap').is(':visible')) {
                    $('.liner-tooltip-wrap').hide();
                }

                var doShowCommentBox = linerVar.user.premium === 1;
                if (!doShowCommentBox) {
                    // Luke - 차있는 코멘트의 갯수가 3개 이하면 true
                    var usedCommentCnt = 0;
                    for (var i=0; i<highlightVar.comments.length; i++) {
                        if (highlightVar.comments[i].annotation.content != "") {
                            usedCommentCnt += 1;
                        }

                        // Luke - 또는 지금 수정하려 하는 Comment가 이미 사용자가 남긴 Comment일 경우, 수정 할 수 있게 해줌
                        if (getDataIdFromSelectedHighlight() === highlightVar.comments[i].styleItemId && highlightVar.comments[i].annotation.content != "") {
                            doShowCommentBox = true;
                            break;
                        }
                    }

                    if (usedCommentCnt < 3) {
                        doShowCommentBox = true;
                    }
                }

                if (doShowCommentBox) {
                    showCommentBox(e);
                } else {
                    if (window.isLinerBrowser) {
                        messageToNative("SHOW_UPGRADE", {
                            type: "comment_count_limit"
                        });
                    } else {
                        showUpgradeToCommentBox(e);
                    }
                }

                messageToNative("GA_EVENT", {
                    'category' : window.isLinerBrowser ? 'browser' : 'extension',
                    'action' : 'edit_tooltip_comment',
                    'label' : ''
                });

                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_comment_icon_in_highlight_tool_tip",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,
                    },
                });
            });

            $('.liner-tooltip-share').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                if (window.isLinerAPIMode) {
                    return;
                }

                if (window.isLinerBrowser) {
                    if ($('.liner-tooltip-wrap').is(':visible')) {
                        $('.liner-tooltip-wrap').hide();
                    }
            
                    messageToNative("SHARE_HIGHLIGHT", {
                        highlight: currentHighlightString(),
                        url: shareHost + '/' + highlightVar.share_id
                    });
                } else {
                    $('.liner-tooltip-menu').hide();
                    $('.liner-tooltip-arrow').addClass('liner-share-opened');
                    $('.liner-share-menu').show();
            
                    setShareMethods();  
                }

                messageToNative("GA_EVENT", {
                    'category' : window.isLinerBrowser ? 'browser' : 'extension',
                    'action' : 'share_highlight_open',
                    'label' : ''
                });

                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_open'
                });

                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_icon_in_highlight_tool_tip",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,
                    },
                });                
            });

            $('.liner-tooltip-undo').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {};

                if (!isNetworkConnected()) {
                    showNetworkErrorAlert();
                }

                Lighter.detectSpanColor(linerVar.selectedHighlight);
                Lighter.doRemoveStyle();
                $('#lgt' + getDataIdFromSelectedHighlight()).remove();

                messageToNative("UPDATE_STYLE", {
                    style_items: Lighter.export(),
                    image_url: getPageImage(),
                    doc,
                });

                messageToNative("GA_EVENT", {
                    'category' : window.isLinerBrowser ? 'browser' : 'extension',
                    'action' : 'edit_tooltip_delete_highlight',
                    'label' : ''
                });

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "delete_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                    }
                });

                var newHighlightIDs = [];
                for (var i=0; i<linerVar.highlightIDs.length; i++) {
                    if (getDataIdFromSelectedHighlight() != linerVar.highlightIDs[i]) {
                        newHighlightIDs.push(linerVar.highlightIDs[i]);
                    }
                }
                linerVar.highlightIDs = newHighlightIDs;

                hideTooltip(e);
                resetAllComments();

                for (var i=0; i<highlightVar.comments.length; i++) {
                    if (highlightVar.comments[i].styleItemId === getDataIdFromSelectedHighlight()) {
                        highlightVar.comments.splice(i, 1);
                        break;
                    }
                }

                if (window.isLinerAPIMode) {
                    saveHighlightVarToStorage();
                }

                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_trash_icon_in_highlight_tool_tip",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,
                    },
                });                
            });

            $('.liner-comment-input').on('input', function(e) {
                // Luke - comment input이 input될 때 comment 저장하는 곳
                try { e.stopPropagation(); } catch(e) {};
                updateCommentByDataId(linerVar.commentingHighlightId, $('.liner-comment-input').val().trim());
                resetAllComments();

                clearTimeout(linerVar.commentTimer);
                linerVar.commentTimer = setTimeout(function () {
                    updateComment('desktop');
                }, 3000);
                
                if (window.isLinerAPIMode) {
                    saveHighlightVarToStorage();
                }
            });

            $('.liner-mobile-comment-box .liner-comment-save').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {};
                
                updateCommentByDataId(linerVar.commentingHighlightId, $('.liner-mobile-comment-box .liner-comment-textarea').val().trim());
                resetAllComments();
                updateComment('mobile');

                $('.liner-mobile-comment-box').css('top', '110%');
                $('.liner-comment-textarea').css('max-height', '');

                setTimeout(function() {
                    $('.liner-mobile-comment-box').removeClass('liner-show-comment-box');
                    $('.liner-comment-textarea').height($('.liner-comment-textarea').attr('full-height'));
                    $('.liner-comment-textarea').removeAttr('full-height');
                }, 210);

                if (window.isLinerAPIMode) {
                    saveHighlightVarToStorage();
                }
            });

            $('.liner-comment-comment-container').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {}
                $('.liner-comment-textarea').focus();
            });

            $('.liner-upgrade-comment-box .liner-upgrade-comment-close').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {}
                $('.liner-upgrade-comment-box').fadeOut(100);
            });

            $('.liner-upgrade-comment-box .liner-upgrade-comment-upgrade').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {}
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_upgrade_flow_entry",
                    properties: {
                        wording: "Upgrade",
                        entry: "be",
                    },
                });
            });

            $('.liner-upgrade-highlight-box .liner-upgrade-highlight-close').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {}
                $('.liner-upgrade-highlight-box').fadeOut(100);
            });

            $('.liner-upgrade-highlight-box .liner-upgrade-highlight-upgrade').off().click(function(e) {
                try { e.stopPropagation(); } catch(e) {}
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_upgrade_flow_entry",
                    properties: {
                        wording: "Upgrade",
                        entry: "be",
                    },
                });
            });
        }

        function setShareMethods() {
            messageToNative("SAVE_SHARING_CONTENT", {
                content: currentHighlightString()
            });

            $('.liner-share-facebook').attr('href', fbShareDialogUrl(shareHost + "/" + highlightVar.share_id));
            $('.liner-share-messenger').attr('href', fbSendDialogUrl(shareHost + "/" + highlightVar.share_id));
            $('.liner-share-twitter').attr('href', twitterShareDialogUrl(shareHost + "/" + highlightVar.share_id, currentHighlightString()));
            $('.liner-share-linkedin').attr('href', linkedInShareDialogUrl(shareHost + "/" + highlightVar.share_id));
            $('.liner-share-line').attr('href', lineShareDialogUrl(shareHost + "/" + highlightVar.share_id));
            $('.liner-share-mail').attr('href', mailDialogUrl(shareHost + "/" + highlightVar.share_id, currentHighlightString(), getCommentByDataId(getDataIdFromSelectedHighlight())));

            $('.liner-share-facebook').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_facebook',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_facebook'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "facebook"
                });
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "facebook",
                    },
                });
            });

            $('.liner-share-messenger').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_messenger',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_messenger'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "messenger"
                });    
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "facebook_messenger",
                    },
                });         
            });

            $('.liner-share-twitter').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_twitter',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_twitter'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "twitter"
                });     
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });  
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "twitter",
                    },
                });         
            });

            $('.liner-share-linkedin').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_linkedin',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_linkedin'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "linkedin"
                });
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "linkedin",
                    },
                }); 
            });

            $('.liner-share-line').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_line',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_line'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "line"
                });      
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });       
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "line",
                    },
                });            
            });

            $('.liner-share-kakaotalk').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                window.open(kakaoShareDialogUrl(shareHost + "/" + highlightVar.share_id, currentHighlightString()), "PopupWin", "width=460,height=660");

                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_kakaotalk',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_kakaotalk'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "kakaotalk"
                });     
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });  
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "kakaotalk",
                    },
                });                  
            });

            $('.liner-share-mail').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};
                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_mail',
                    'label' : ''
                });

                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_mail'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "mail"
                });    
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });       
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "mail",
                    },
                });              
            });

            if (!doShowKakaoTalk) {
                $('.liner-share-kakaotalk').remove();
            }

            $('.liner-share-menu .liner-share-method.liner-share-copy').off().click(function (e) {
                try { e.stopPropagation(); } catch(e) {};

                messageToNative("COPY_TO_CLIPBOARD", {
                    content: currentHighlightString() + "\n\n" + shareHost + "/" + highlightVar.share_id
                })

                $('.liner-share-menu .liner-share-method.liner-share-copy').fadeOut(200, function () {
                    $('.liner-share-menu .liner-share-method.liner-share-copied').fadeIn(200, function () {
                        setTimeout(function () {
                            $('.liner-share-menu .liner-share-method.liner-share-copied').fadeOut(200, function () {
                            $('.liner-share-menu .liner-share-method.liner-share-copy').fadeIn(200);
                            });
                        }, 3000);
                    });
                });

                messageToNative("GA_EVENT", {
                    'category' : 'extension',
                    'action' : 'share_highlight_copy',
                    'label' : ''
                });
                messageToNative("BRAZE_EVENT", {
                    name : 'share_highlight_copy'
                });
                messageToNative("LKS_EVENT", {
                    "type": "highlight_share",
                    "url": window.location.href,
                    "phrase": getLighterPhrase(getDataIdFromSelectedHighlight()),
                    "share_type": "copy"
                });  
                messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1,
                });  
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "copy",
                    },
                });             
            });
        }

        function getHighlightColorByName(name, type) {
            for (var i=0; i<linerVar.colors.length; i++) {
                if (linerVar.colors[i].name === name) {
                    return linerVar.colors[i][type] ?? linerVar.colors[i].hex;
                }
            }
            return linerVar.colors[linerVar.colorIndex].hex;
        }

        function getSelectedHighlightColorName() {
            for (var i=0; i<highlightVar.comments.length; i++) {
                if (getDataIdFromSelectedHighlight() === highlightVar.comments[i].styleItemId) {
                    for (var j=0; j<linerVar.colors.length; j++) {
                        if (highlightVar.comments[i].styleItemColor === linerVar.colors[j].hex) {
                            return linerVar.colors[j].name;
                        }
                    }
                }
            }
            return linerVar.colors[linerVar.colorIndex].name;      
        }

        function currentHighlightObject(dataId) {
            for (var i=0; i<highlightVar.comments.length; i++) {
                if (dataId !== undefined) {
                    if (dataId === highlightVar.comments[i].styleItemId) {
                        return highlightVar.comments[i];
                    }
                } else if (getDataIdFromSelectedHighlight() === highlightVar.comments[i].styleItemId) {
                    return highlightVar.comments[i];
                }
            }
            return {};
        }

        function currentHighlightColor(dataId) {
            const hexColor = currentHighlightObject(dataId).styleItemColor;
            return hexColor ?? "#ffff8d";
        }

        function currentHighlightString(dataId) {
            const highlightString = currentHighlightObject(dataId).content;
            return highlightString ?? "";
        }

        function getLighterElement(target) {
            var obj = target;
            try {
                if ($(target).parent().context.tagName === 'SPAN') {
                    obj = $(target).parent()[0];
                }
            } catch (e) {
                obj = target;
            }
            return obj;
        }

        function getDistinctLighterIds() {
            let highlightIds = [];
            for (var i=0; i<$('lighter').length; i++) {
                try {
                    const id = $($('lighter')[i]).attr('data-id').split('lgt')[1];
                    if (highlightIds.indexOf(id) === -1) {
                        highlightIds.push(id);
                    }                    
                } catch(e) {}
            }
            return highlightIds;
        }

        function setLighterEvents() {
            if ($('lighter').length > 0) {
                logger("lighter exists");

                $('lighter').off();

                $('lighter').mouseenter(function(e) {
                    linerVar.selectedHighlight = e;
                    changeSelectedHighlightColorToHoverColor();
                }).mouseleave(function(e) {
                    changeAllHighlightsToNormalHighlightColor();
                });

                $('lighter').click(function(e) {
                    try { e.stopPropagation(); } catch(e) {};
                    
                    if ($('.liner-comment-box').is(':visible')) {
                        hideCommentBox();
                    } else if ($('.liner-mini-tooltip').is(':visible') || $('.liner-mini-button').is(':visible')) {
                        logger("hide mini tooltip and mini button");
                        $('.liner-mini-tooltip').hide();
                        $('.liner-mini-button').hide();
                    } else if ($('.liner-color-picker').is(':visible')) {
                        logger("hide color change tooltip");
                        $('.liner-color-picker').hide();
                        $('.liner-tootip-arrow').hide();
                    } else if ($('.liner-upgrade-comment-box').is(':visible')) {
                        logger("hide upgrade to comment box");
                        $('.liner-upgrade-comment-box').fadeOut(100);
                    } else if ($('.liner-upgrade-highlight-box').is(':visible')) {
                        logger("hide upgrade to highlight box");
                        $('.liner-upgrade-highlight-box').fadeOut(100);
                    }

                    setTooltipColor($(getLighterElement(e.target)).css('background-color').toString());
                    showTooltip(e.pageX - ($('.liner-tooltip-wrap').width()/2), e.pageY - ($('.liner-tooltip-wrap').height() + 8));

                    messageToNative("GA_EVENT", {
                        'category' : window.isLinerBrowser ? 'browser' : 'extension',
                        'action' : 'click_highlight',
                        'label' : ''
                    });

                    const originalUrl = window.location.href;
                    const urlDomain = new URL(originalUrl).hostname;
                    const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';
    
                    messageToNative("AMPLITUDE_EVENT", {
                        event_name: "click_my_highlight_in_web_page",
                        properties: {
                            url_domain: urlDomain,
                            content_type: contentType,
                        },
                    });                    
                });
            }
        }

        function showTooltip(left, top) {
            clearTimeout(linerVar.tooltipTimer);

            if (left < 10) {
                left = 10;
            } else if (left + $('.liner-tooltip-wrap').width() > window.innerWidth - 10) {
                left = window.innerWidth - 10 - $('.liner-tooltip-wrap').width();
            }

            $('.liner-tooltip-wrap').css('left', left);
            $('.liner-tooltip-wrap').css('top', top);

            if (linerVar.user.premium === 0) {
                for (var i=linerVar.user.color_limit; i<linerVar.colors.length; i++) {
                    var name = linerVar.colors[i].name;
                    $('.liner-color-' + name).addClass('liner-color-lock');
                }
            }

            if (!$('.liner-tooltip-menu').is(':visible')) {
                $('.liner-tooltip-menu').show();
            }

            $('.liner-tooltip-arrow').removeClass('liner-share-opened');
            $('.liner-share-menu').hide();

            $('.liner-tooltip-wrap').fadeIn(100);
            if ($('.liner-color-picker').is(':visible')) {
                $('.liner-color-picker').hide();
                $('.liner-tootip-arrow').hide();
            }

            messageToNative("GA_EVENT", {
                'category' : window.isLinerBrowser ? 'browser' : 'extension',
                'action' : 'edit_tooltip_shown',
                'label' : ''
            });
        }

        function processHighlight(isPaletteOpened) {
            // Luke - Safari Extension이 아닌 상황에서, main.js가 여러번 inject되면 기존 context가 끊기면서 버그가 생김
            // Luke - 이에 따라 아래 분기에 해당하면 그 뒤를 실행시키지 않도록 하여 새롭게 생긴 context 하나만 사용하도록 한다.
            if (!window.isLinerBrowser && !window.isLinerAPIMode && ((!window.safari || (window.safari && window.safari.id)) && (browser && !browser.runtime.id))) {
                return;
            }

            // Luke - Lighter.doHighlight를 하면 Selection이 풀리기 때문에 미리 저장해두어야함
            var tempSelected = document.getSelection().getRangeAt(0).toString().trim();

            try {
                const phrase = getPhrase();
                const sel = document.getSelection();
                const selectionRects = sel.getRangeAt(0).getClientRects();
                const firstSelectionRect = selectionRects[0];
                const fontSize = parseInt(window.getComputedStyle(sel.anchorNode.parentElement).fontSize);
                const fontWeight = window.getComputedStyle(sel.anchorNode.parentElement).fontWeight;
                const fontStyle = window.getComputedStyle(sel.anchorNode.parentElement).fontStyle;

                let relHeight = -1;
                if (document.body.scrollHeight > 0) {
                    relHeight = (window.scrollY + firstSelectionRect.top)/document.body.scrollHeight;
                }

                messageToNative("LKS_EVENT", {
                    type: "highlight_create",
                    url: window.location.href,
                    title: $('title').text().trim(),
                    phrase: phrase,
                    highlight: tempSelected,
                    color: linerVar.colors[linerVar.colorIndex].hex,
                    rel_height: relHeight ?? -1,
                    font_size: fontSize,
                    font_weight: fontWeight,
                    font_style: fontStyle
                });

                if (!window.isLinerBrowser && !isLINERGuidePage()) {
                    messageToNative("LKS_GET_RECOMMENDATIONS_BY_HIGHLIGHT", {
                        url: window.location.href,
                        title: $('title').text().trim().substring(0, 100),
                        phrase: tempSelected.substring(0, 1000),
                        is_recommendations_showing: window.isRecommendationShowing ?? false,
                    });
                }
            } catch(e) {}

            // Luke - 실제로 하이라이트가 붙는 부분
            var dataId = Lighter.doHighlight(linerVar.colors[linerVar.colorIndex].hex);
            linerVar.highlightIDs.push(dataId);

            messageToNative("UPDATE_STYLE", {
                style_items: Lighter.export(),
                image_url: getPageImage(),
                doc,
            });
            
            if (lksReadStatus != 2) {
                lksReadStatus = 1;
                for (var i=0; i<lksCopyEvents.length; i++) {
                    messageToNative("LKS_EVENT", lksCopyEvents[i]);                    
                }
                lksCopyEvents = [];
            }

            var newHighlight = {
                styleItemId: dataId,
                styleItemColor: linerVar.colors[linerVar.colorIndex].hex,
                content: tempSelected,
                annotation: {
                    content: '',
                    lastUpdatedTime: null
                },
                name: linerVar.user.name,
                photo_url: linerVar.user.image
            };

            highlightVar.comments.push(newHighlight);
            highlightVar.new_highlights.push(newHighlight);

            setLighterEvents();

            messageToNative("BRAZE_EVENT", {
                name : window.isLinerBrowser ? 'lb_highlight' : 'web_highlight'
            });

            messageToNative("GA_EVENT", {
                category : window.isLinerBrowser ? 'browser' : 'extension',
                action : 'highlight_' + linerVar.colors[linerVar.colorIndex].name,
                label: ''
            });

            if (highlightVar.page_id === undefined) {
                const originalUrl = window.location.href;
                const urlDomain = new URL(originalUrl).hostname;
                const contentType = (originalUrl.split('.pdf').length > 1 && originalUrl.split('.pdf')[1] === "") ? 'pdf' : 'web_page';

                messageToNative("AMPLITUDE_EVENT", {
                    event_name: recommendedByLinerInfo["source_type"] !== undefined ? "save_liner_page" : "save_web_page",
                    properties: {
                        url_domain: urlDomain,
                        content_type: contentType,        
                        source_type: recommendedByLinerInfo["source_type"],
                        algorithm_id: recommendedByLinerInfo["algorithm_id"],                
                    },
                });                
            }

            messageToNative("AMPLITUDE_USER_PROPERTY", {
                type: 'add',
                property: 'highlight_count',
                value: 1,
            });

            messageToNative("AMPLITUDE_EVENT", {
                event_name: "make_highlight",
                properties: {
                    theme_type: "basic",
                    color: linerVar.colors[linerVar.colorIndex].hex,
                    label: "",
                    text_length: tempSelected.length,
                }
            });

            if (!window.isLinerBrowser) {
                if (highlightVar.new_highlights.length === 1) {
                    if (isLINERGuidePage()) {
                        evaluateScript("linerOnboardingEvent('web_finish_guide_highlight');");
                        evaluateScript("linerOnboardingEvent('web_init_guide_comment');");
                    } else {
                        messageToNative("BRAZE_EVENT", {
                            name : 'web_finish_guide_highlight'
                        });      
                    }
                    saveFinishedOngoingOnboardings('web_finish_guide_highlight');
                }
            } else {
                if (highlightVar.new_highlights.length === 1) {
                    if (isLINERMobileGuidePage()) {
                        evaluateScript("linerOnboardingEvent('mob_finish_onb_highlight');");
                        evaluateScript("linerOnboardingEvent('mob_onb_comment');");
                        $('.liner-mobile.liner-highlight-guide').remove();
                        $('.liner-mobile.liner-comment-guide').show();
                    }
                }
            }

            if (window.isLinerAPIMode) {
                saveHighlightVarToStorage();
            }

            if (isLINERGuidePage() !== true) {
                evaluateScript(`linerAppboy.logCustomEvent('web_highlight_${highlightVar.comments.length}_per_page');`);

                if (isPaletteOpened === true) {
                    evaluateScript(`linerAppboy.logCustomEvent('web_highlight_palette');`);
                    if (linerVar.colors[linerVar.colorIndex].hex !== '#ffff8d') {
                        evaluateScript(`linerAppboy.logCustomEvent('web_highlight_non_yellow');`);
                    }
                } else {
                    evaluateScript(`linerAppboy.logCustomEvent('web_highlight_icon');`);
                }
            }
        }

        function updateCommentByDataId(dataId, newComment) {
            logger('update ' + dataId + ' comment with new comment "' + newComment + '"');
            for (var i=0; i<highlightVar.comments.length; i++) {
                if (highlightVar.comments[i].styleItemId === dataId) {
                    highlightVar.comments[i].annotation.content = newComment;
                    break;
                }
            }
        }

        // Luke - UI 관련 함수들
        function hideTooltip(e) {
            logger('hide tool tip');
            clearTimeout(linerVar.tooltipTimer);

            if ($('.liner-tooltip-wrap').is(':visible')) {
                linerVar.tooltipTimer = setTimeout(function() {
                    $('.liner-tooltip-wrap').fadeOut(100);
                    if ($('.liner-color-picker').is(':visible')) {
                        $('.liner-color-picker').hide();
                        $('.liner-tootip-arrow').hide();
                    }
                }, 100);
            }
        }

        function changeSelectedHighlightColorToHoverColor() {
            logger("change selected highlight color to hover color");
            // Luke - hover했을 때 하이라이트 색상 진하게 하는 부분
            var lighters = $('lighter');
            for (var i=0; i<lighters.length; i++) {
                if ($(lighters[i]).attr('data-id') === 'lgt' + getDataIdFromSelectedHighlight()) {
                    for (var j=0; j<linerVar.colors.length; j++) {
                        if ($(lighters[i]).css('background-color') === linerVar.colors[j].rgb) {
                            $(lighters[i]).css('background-color', linerVar.colors[j].rgb2);
                        }
                    }
                }
            }
        }
        function changeAllHighlightsToNormalHighlightColor() {
            logger("change all highlight colors to normal color")
            var lighters = $('lighter');
            for (var i=0; i<lighters.length; i++) {
                for (var j=0; j<linerVar.colors.length; j++) {
                    if ($(lighters[i]).css('background-color') === linerVar.colors[j].rgb2) {
                        $(lighters[i]).css('background-color', linerVar.colors[j].rgb);
                    }
                }
            }
        }

        function setTooltipColor(color) {
            for (i=0; i<linerVar.colors.length; i++) {
                if (color.indexOf(linerVar.colors[i].rgb2) != -1 || color.indexOf(linerVar.colors[i].rgb) != -1) {
                    removeColorClassFromTooltipBtn();
                    $('.liner-tooltip-color').addClass(linerVar.colors[i].name);
                    break;
                }
            }
        }

        function removeColorClassFromTooltipBtn() {
            for (var i=0; i<linerVar.colors.length; i++) {
                $('.liner-tooltip-color').removeClass(linerVar.colors[i].name);
            }
        }

        function getDataIdFromSelectedHighlight() {
            try {
                return $(linerVar.selectedHighlight.target).attr('data-id').split('lgt')[1];
            } catch(e) {
                logger(e);
            }
            return "";
        }

        function showMiniButton() {
            logger('show mini button');
            var sel = document.getSelection();
            var selectionRects = sel.getRangeAt(0).getClientRects();
            var firstSelectionRect = selectionRects[0];
            var lastSelectionRect = selectionRects[selectionRects.length - 1];
            var positionX = lastSelectionRect.x + lastSelectionRect.width + 5;
            var positionY = parseInt(window.scrollY + lastSelectionRect.y + 21.5);    // Luke - 21.5는 Whale Quick Search 버튼의 포지셔닝 로직을 리버스 엔지니어링해서 얻은 숫자

            if (window.isLinerBrowser) {
                positionX = lastSelectionRect.x + lastSelectionRect.width + 15;
                positionY = window.scrollY + lastSelectionRect.y + lastSelectionRect.height + 15;
                if (positionX + $('.liner-mini-button .liner-save-button').width() > window.innerWidth - 10) {
                    positionX = window.innerWidth - 10 - $('.liner-mini-button .liner-save-button').width();
                    positionY += 15;
                }
            } else if (window.isWhaleBrowser) {
                positionX += 35;
            }

            try {
                var position = sel.anchorNode.compareDocumentPosition(sel.focusNode);
                if (!position && sel.anchorOffset > sel.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
                    // Luke - Dragging Backwards
                    // Luke - Android에서 OS 기본 툴팁과 위치 충돌이 발생해서 아래처럼 분기 처리 함
                    if (!window.isLinerBrowser) {
                        positionX = firstSelectionRect.x - $('.liner-mini-button .liner-mb').width() - 5;
                        positionY = window.scrollY + firstSelectionRect.y - $('.liner-mini-button .liner-mb').height() - 5;
                    }

                    if (window.isLinerBrowser) {
                        // positionX = firstSelectionRect.x - $('.liner-mini-button .liner-mb').width() - 15;
                        // positionY = window.scrollY + firstSelectionRect.y - $('.liner-mini-button .liner-mb').height() - 15;
                        // if (positionX + $('.liner-mini-button .liner-save-button').width() > window.innerWidth - 10) {
                        //     positionX = window.innerWidth - 10 - $('.liner-mini-button .liner-save-button').width();
                        //     positionY -= 15;
                        // }
                    } else if (window.isWhaleBrowser) {
                        positionX += 45;
                        positionY -= 2;
                    }
                }
            } catch(e) {}

            logger("position x - " + positionX);
            logger("position y - " + positionY);
        
            $('.liner-mini-button').css('left', positionX);
            $('.liner-mini-button').css('top', positionY);  
            $('.liner-mini-button').show();  

            // Luke - unbind는 jquery 1.7부터 deprecated되었음. off를 사용할 것
            // https://share.getliner.com/KOWV7
            $('.liner-mini-button').off().hover(function(e) {
                try { e.stopPropagation(); } catch(e) {};

                $('.liner-mini-tooltip').css('left', positionX);
                $('.liner-mini-tooltip').css('top', positionY);

                if (linerVar.hideMiniTooltip) {
                    clearTimeout(linerVar.hideMiniTooltip);
                }

                if ($('.liner-mini-tooltp').is(':visible')) {
                    clearTimeout(linerVar.hideMiniTooltip);
                } else {
                    linerVar.showMiniTooltip = setTimeout(function() {
                        if (linerVar.user.premium === 0) {
                            for (var i=linerVar.user.color_limit; i<linerVar.colors.length; i++) {
                                var name = linerVar.colors[i].name;
                                $('.liner-color-' + name).addClass('liner-color-lock');
                            }
                        }

                        messageToNative("GA_EVENT", {
                            'category' : window.isLinerBrowser ? 'browser' : 'extension',
                            'action' : 'highlight_tooltip_shown',
                            'label' : ''
                        })

                        $('.liner-mini-tooltip.liner-desktop').fadeIn(100);
                    }, 300);
                }
            }, function(e) {
                try { e.stopPropagation(); } catch(e) {};

                $('.liner-mini-tooltip').off().hover(function(e) {
                    try { e.stopPropagation(); } catch(e) {};

                    if (linerVar.hideMiniTooltip) {
                        clearTimeout(linerVar.hideMiniTooltip);
                    }
                }, function(e) {
                    try { e.stopPropagation(); } catch(e) {};

                    if ($('.liner-mini-tooltp').is(':visible')) {
                        clearTimeout(linerVar.hideMiniTooltip);
                    } else {
                        linerVar.hideMiniTooltip = setTimeout(function() {
                            $('.liner-mini-tooltip').fadeOut(100);
                        }, 100);
                    }
                });
                linerVar.hideMiniTooltip = setTimeout(function() {
                    $('.liner-mini-tooltip').fadeOut(100);
                }, 300);
            });
        }

        function appendCommentIconToLighterTag(lighterTag, dataId, isHidden) {
            if (isHidden === 0) {
                if ($('#lgt' + dataId).length === 0) {
                    $(lighterTag).after(getCommentIconHTMLWithDataId(dataId));
                    try {
                        var targetLighterHTML = $(lighterTag).html();
                        if (targetLighterHTML.split('<br')[targetLighterHTML.split('<br').length - 1].split('>')[1].trim() === "") {
                            // Luke - 마지막 <br로 html을 나눈 String을 그 뒤에 나오는 첫 번째 닫는 태그(>)로 다시 나누어서 닫는 태그의 뒤쪽에 내용이 없으면 lighter 태그가 닫히기 바로 직전에 <br> 태그가 있는 것.
                            // Luke - 이런 경우 Comment Icon이 <br> 뒤에 달리게 되어서 줄바꿈이 생기게 되므로 <br> 태그를 삭제한 뒤에 Comment Icon 뒤에 추가해줘야 함
                            var newLighterHTML = "";
                            for (var i=0; i<targetLighterHTML.split('<br').length - 1; i++) {
                                newLighterHTML += targetLighterHTML.split('<br')[i];
                            }
                            $(lighterTag).html(newLighterHTML);
                            $('#lgt' + dataId).after('<br>');
                        }
                    } catch(e) {logger(e);}
                }
                $('#lgt' + dataId).show();

                $('#lgt' + dataId).off().click(function(e) {
                    // Luke - 사용자가 comment 버블을 클릭함
                    try { e.stopPropagation(); } catch(e) {};

                    if ($('.liner-tooltip-wrap').is(':visible')) {
                        logger("hide tooltip")
                        $('.liner-tooltip-wrap').hide();
                    }
                    showCommentBox(e);
                });
            } else {
                $('#lgt' + dataId).hide();
            }
        }

        function resetAllComments() {
            logger('reset all comments');

            for (var i=0; i<highlightVar.comments.length; i++) {
                var lightersWithSameDataId = $('lighter[data-id="lgt' + highlightVar.comments[i].styleItemId + '"]');
                var targetLighter = lightersWithSameDataId[0];
                try {
                    for (var j=0; j<lightersWithSameDataId.length; j++) {
                        if (lightersWithSameDataId[j].parentNode.tagName.toLowerCase() != "lighter") {
                            targetLighter = lightersWithSameDataId[j];
                        }
                    }
                } catch(e) {}

                if (highlightVar.comments[i].annotation.content != "") {
                    // Luke - Comment가 존재함
                    appendCommentIconToLighterTag(targetLighter, highlightVar.comments[i].styleItemId, 0);
                } else {
                    // Luke - Comment가 존재하지 않음
                    appendCommentIconToLighterTag(targetLighter, highlightVar.comments[i].styleItemId, 1);
                }
            }
        }

        function getCommentByDataId(dataId) {
            for (var i=0; i<highlightVar.comments.length; i++) {
                if (highlightVar.comments[i].styleItemId === dataId) {
                    return unescape(highlightVar.comments[i].annotation.content).trim();
                }
            }
            return "";
        }

        function showUpgradeToHighlight(e) {
            var posX = e.pageX;
            var posY = e.pageY;

            $('.liner-upgrade-highlight-box').css('left', posX);
            $('.liner-upgrade-highlight-box').css('top', posY);
            $('.liner-upgrade-highlight-box').show();

            messageToNative("GA_EVENT", {
                'category' : window.isLinerBrowser ? 'browser' : 'extension',
                'action' : 'upgrade_to_highlight_box_shown',
                'label' : ''
            });
            messageToNative("BRAZE_EVENT", {
                name : 'upgrade_to_highlight_box_shown'
            });
            messageToNative("AMPLITUDE_EVENT", {
                event_name: "trigger_basic_plan_limit",
                properties: {
                    context: "highlight_count",
                },
            });
        }

        function showUpgradeToCommentBox(e) {
            var posX = e.pageX;
            var posY = e.pageY;

            $('.liner-upgrade-comment-box').css('left', posX);
            $('.liner-upgrade-comment-box').css('top', posY);
            $('.liner-upgrade-comment-box').show();

            messageToNative("GA_EVENT", {
                'category' : window.isLinerBrowser ? 'browser' : 'extension',
                'action' : 'upgrade_to_comment_box_shown',
                'label' : ''
            });
            messageToNative("BRAZE_EVENT", {
                name : 'upgrade_to_comment_box_shown'
            });
            messageToNative("AMPLITUDE_EVENT", {
                event_name: "trigger_basic_plan_limit",
                properties: {
                    context: "comment_count",
                },
            });
        }

        function showCommentBox(e) {
            try { e.stopPropagation(); } catch(e) {};

            messageToNative("SHOW_COMMENT_BOX", {});

            var targetDataID = null;
            if (e.target.className === "liner-comment-bubble") {
                targetDataID = $(e.target).attr('data-id');
            } else {
                targetDataID = getDataIdFromSelectedHighlight();
            }
            if (targetDataID === null) {
                logger('target data id is null');
                return;
            }

            logger('show comment box for data id - ' + targetDataID);
            linerVar.commentingHighlightId = targetDataID;
            var comment = getCommentByDataId(targetDataID);
            initialComment = comment;

            if (window.isLinerBrowser && window.innerWidth < 600) {
                $('body').append($('.liner-mobile-comment-box'));
                $('.liner-mobile-comment-box .liner-comment-highlight-content').text(currentHighlightString(targetDataID));
                $('.liner-mobile-comment-box .liner-comment-textarea').val(getCommentByDataId(targetDataID));
                $('.liner-mobile-comment-box .liner-comment-highlight-index').css('background-color', getHighlightColorByName(getSelectedHighlightColorName(), 'rgb3'));
                $('.liner-mobile-comment-box').addClass('liner-show-comment-box');
                setTimeout(function() {
                    // Luke - setTimeout으로 시간 차를 두지 않으면 transition이 작동하지 않음
                    $('.liner-mobile-comment-box').css('top', '0');
                    setTimeout(function() {
                        $('.liner-comment-textarea').focus();
                    }, 210);
                }, 10);
            } else {
                var posX = e.pageX;
                var posY = e.pageY;
            
                $('.liner-comment-box').css('left', posX);
                $('.liner-comment-box').css('top', posY);
                $('.liner-comment-box').show();
            
                $('.liner-comment-input').val(comment).putCursorAtEnd();
                $('.liner-comment-input').focus(); 
            }

            messageToNative("GA_EVENT", {
                'category' : window.isLinerBrowser ? 'browser' : 'extension',
                'action' : 'comment_box_shown',
                'label' : ''
            });
        }

        function updateComment(type) {
            var comment = $('.liner-comment-input').val().trim();
            if (type === 'mobile')  {
                comment = $('.liner-mobile-comment-box .liner-comment-textarea').val().trim();
            }

            messageToNative("UPDATE_COMMENT", {
                highlight_id: linerVar.commentingHighlightId,
                comment: comment
            });

            let lksEventType = "comment_create";
            if (initialComment.trim() != "") {
                lksEventType = "comment_modify";
            }
            if (initialComment != comment) {
                messageToNative("LKS_EVENT", {
                    "type": lksEventType,
                    "url": window.location.href,
                    "phrase": getLighterPhrase(linerVar.commentingHighlightId),
                    "highlight": currentHighlightString(linerVar.commentingHighlightId),
                    "comment": comment
                });
            }
            initialComment = comment;

            if (comment != '') {
                if (!window.isLinerBrowser) {
                    // Luke - Ongoing Onboarding
                    if (isLINERGuidePage()) {
                        setTimeout(function() {
                            evaluateScript("linerOnboardingEvent('web_finish_guide_comment');");
                            evaluateScript("linerOnboardingEvent('web_init_guide_share');");      
                        }, 300);
                    } else {
                        messageToNative("BRAZE_EVENT", {
                            name : 'web_finish_guide_comment'
                        });
                    }
                    saveFinishedOngoingOnboardings('web_finish_guide_comment');  
                } else {
                    if (isLINERMobileGuidePage()) {
                        evaluateScript("linerOnboardingEvent('mob_finish_onb_comment');");
                        evaluateScript("linerOnboardingEvent('mob_onb_others');");
                    }
                }
            }
            
            messageToNative("GA_EVENT", {
                'category' : window.isLinerBrowser ? 'browser' : 'extension',
                'action' : 'comment',
                'label' : ''
            });

            messageToNative("AMPLITUDE_USER_PROPERTY", {
                type: 'add',
                property: 'annotation_count',
                value: 1,
            });

            messageToNative("AMPLITUDE_EVENT", {
                event_name: "write_comment",
                properties: {
                    length: comment.length,
                },
            });
        }

        function hideCommentBox() {
            logger("hide comment box");
            $('.liner-comment-box').fadeOut(100);
            
            clearTimeout(linerVar.commentTimer);
            updateComment('desktop');
        }

        // Luke - Utility Functions
        function showNetworkErrorAlert() {
            messageToNative("ALERT_NETWORK_ERROR", {});
        }

        function isNetworkConnected() {
            return true;
            // Luke - 왜인지 모르겠지만 광인회관에서 계속 false 나서 삭제함
            // return window.navigator.onLine;
        }

        function isEditableElement(target) {
            if ($(target)[0].tagName === 'INPUT' || $(target)[0].tagName === 'TEXTAREA' || $(target).get(0).isContentEditable || $(target)[0].tagName === 'WHALE-QUICKSEARCH') {
                logger("is editable element");
                return true;
            }
            logger("is not editable element - " + $(target)[0].tagName);
            return false;
        }

        function isTextSelected() {
            if (document.getSelection().toString().trim() != '') {
                logger("is text selected");
                return true;
            }
            logger("is not text selected");
            return false;
        }
    } else {
        // Luke - show blocked toolbar item
        messageToNative("CHANGE_TOOLBAR_ITEM", {
            'type' : 'disabled',
            'is_web_pdf' : isWebPDFFile() || isLinerPSPDFKit()
        });

        // Luke - login
        if (window.location.host === "getliner.com") {
            // Luke - getliner.com
            $.get("https://getliner.com/auth/cookie", function(data) {
                messageToNative("LOGIN", {
                    cookie: data.cookie
                })
            }).fail(function() {

            });
        }

        if (window.location.href.indexOf('/guide/safari') != -1) {
            // Luke - go to step 3
            $(document).ready(function() {
                window.location.hash = "#step3";
                messageToNative("NEW_TAB", {
                    url: "https://getliner.com/guide/browser-extension"
                });
            });
        }
    }

    $.fn.putCursorAtEnd = function() {
        return this.each(function() {
            var $el = $(this),
            el = this;

            if (!$el.is(":focus")) {
                $el.focus();
            }

            if (el.setSelectionRange) {
                var len = $el.val().length * 2;
                setTimeout(function() {
                    el.setSelectionRange(len, len);
                }, 1);
            } else {
                $el.val($el.val());
            }
            this.scrollTop = 999999;
        });
    };

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
};