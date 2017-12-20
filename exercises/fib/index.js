// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// CM Solution
// function fib(n) {

// 	var series = [0,1]
// 	for(let i = 2; i < n+1; i++) {
// 		if(i == 2) {
// 			series.push(1)
// 		} else {
// 			series.push(series[i-2] + series[i-1]);
// 		}
// 	}
// 	return series[n];
// }

//// Solution #1
// function fib(n) {
// 	const result = [0,1];

// 	for(let i = 2; i<=n; i++) {
// 		const a = result[i -1];
// 		const b = result[i - 2];
// 		result.push(a+b);
// 	}

// 	return result[n];
// }


//// Solution #2 With Recursion
// This is an exponential time algorithm
// Can we improve our fibonacci recursive function? Our big problem, we are calling the function
// multiple times with the same argument .... the solution is memoization
// Slow Fib Function => Memoizer => Fast, Memoized Fib Function
function memoize(fn) {
	const cache = {};

	// ... implies that you don't know how many arguments it will receive
	return function(...args) {
		if(cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	}
}


function fib(n) {
	if(n < 2) {
		return n;
	}

	// we want to make sure that we are calling the memoized function, not the slowFib version
	return fib(n-1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
