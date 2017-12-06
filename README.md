# README

## Setup
- To get started, go to the directory `/AlgoCasts/exercises`
- From there, I can run whatever tests I want. For example: `jest reversestring/test.js --watch`


### Lecture 2

- **Contact Phase:** work experience, side projects, social contacts
- **Interview Phase:** culture fit? can you code?

### Lecture 3: Getting Better at Coding Questions
- Evaluating Coding Ability:
	+ Take-home Assignment
	+ Pair programming at a computer
	+ Whiteboarding
- How do we get really good at whiteboarding questions?  **PRACTICE**
- FizzBuss
	+ Write a program that prints numbers from 1 to 100. Multiples of three print "Fizz", 
	multiples of five print "Buzz", multiples of both print "FizzBuzz"
- Fibonacci Series
	+ Print out a specific number from the Fibonacci series

```js
function fib(n) {
	if(n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
```

# String Reversal
- Lectures 8 - 12
- There isn't a string method that just reverses the string but there is a reverse method for Arrays.
- So we can have to turn it into an array, reverse the order, and then re-combine them using join
- **Solution #2**
	+ creaty an empty string called 'reversed' for each character in the provided string
	+ take the character and add it to the start of 'reversed'
	+ return that variable
	+ The solution we come up with uses the new ES6 syntax of `for..of` loops
- **Solution #3**
	+ uses reduce

