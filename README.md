# README

## Setup

- To get started, go to the directory `/AlgoCasts/exercises`
- From there, I can run whatever tests I want. For example: `jest reversestring/test.js --watch`

- **Debugger**
	+ add the word `debugger` to where in your code you want to stop it
	+ call the function below your implementation of the solution
	+ navigate in the Command Line to the directory of the problem you're working on
	+ run `node inspect index.js`
	+ press `c` to continue execution of the file
	+ use `repl` in the command line to look at particular variables
	+ CRTL + C to exit repl and again to exit debugger

# Patterns, Methods, or Other Items That Stood Out

- MaxChar

```js
chars[char] = chars[char] + 1 || 1;
```


# Getting Started
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

# String Reversal (8-12)
- There isn't a string method that just reverses the string but there is a reverse method for Arrays.
- So we can have to turn it into an array, reverse the order, and then re-combine them using join
- **Solution #2**
	+ creaty an empty string called 'reversed' for each character in the provided string
	+ take the character and add it to the start of 'reversed'
	+ return that variable
	+ The solution we come up with uses the new ES6 syntax of `for..of` loops
- **Solution #3**
	+ uses reduce

# Palindromes (13-15)

# Integer Reversal (16-17)

# MaxChars

# The Classic FizzBuzz!

# Array Chunking
- Two interesting solutions
- The second one involves slicing big chunks of the array and putting into a new array
	+ if you give a value that is above the number of elements, slice will just give you the rest of the array

```js
var array = [1,2,3,4,5,6,7,8]

var newArray = array.slice(0,100)

console.log(newArray)		// [1, 2, 3, 4, 5, 6, 7, 8]
```


# Sentence Capitalization

# Printing Steps (35 - 39)
- with Recursion:
	+ Figure out the bare minimum pieces of info to represent your problem
	+ Give reasonable defaults to the bare minimum pieces of info
	+ Check the base case. Is there any work left to do? If not, return
	+ Do some work. Call your functionagain, making sure the arguments have changed
	in some way

# Two Sided Steps - Pyramids

# Find the Vowels
- use of `includes()` to decide whether to add to the counter or not
- use of match and then some regex

# Enter the Matrix Spiral


# Runtime Complexity

# Runtime Complexity in Practice - Fibonacci

# The Queue

# Underwater Queue Weaving

# Stack'Em Up with Stacks

# Two Become One

# Linked Lists

# Find the Midpoint

# Circular Lists?

# Step Back from the Tail

# Building a Tree

# Tree Width with Level Widdth

# My Best Friend, Binary Search Trees










