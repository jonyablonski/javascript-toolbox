// Shallow extend
// If a key has another object as its value, the first object's value will be overridden by the second one during the merge.
var extend = function ( objects ) {
    var extended = {};
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                extended[prop] = obj[prop];
            }
        }
    };
    merge(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        merge(obj);
    }
    return extended;
};

// Deep extend
// If a key has another object as its value, the first object's value will be combined with the second one during the merge.
var deepExtend = function ( objects ) {
    var extended = {};
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if ( Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                    extended[prop] = deepExtend(extended[prop], obj[prop]);
                }
                else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };
    merge(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        merge(obj);
    }
    return extended;
};

// Example objects
var object1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97
};
var object2 = {
    banana: { price: 200 },
    durian: 100
};
var object3 = {
    apple: 'yum',
    pie: 3.214,
    applePie: true
}

// Create a new object by combining two or more objects
var newObject = extend(object1, object2, object3);
var newObjectDeep = deepExtend(object1, object2);