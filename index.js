

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const namedFunction = function() {};
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}
