function receivesAFunction(spy) {
    let call;
    spy(call);
}

function returnsANamedFunction() {
   console.log (``)
   return returnsANamedFunction 
   
}

// (function() {
//     let returnsAnAnonymousFunction = 'yay'
// return returnsAnAnonymousFunction
// })();

let returnsAnAnonymousFunction = function() {
    return function() {
        console.log('hi')
    }

};

