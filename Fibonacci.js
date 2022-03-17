const { performance } = require('perf_hooks');

// recursive
const startr = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
console.log(`Fibonacci Recursive took ${performance.now() - startr} milliseconds to run`);

// iterative
const starti = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);
console.log(`Fibonacci Iterative took ${performance.now() - starti} milliseconds to run`);
