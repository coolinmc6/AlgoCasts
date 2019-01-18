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

console.log(newArray);		// [1, 2, 3, 4, 5, 6, 7, 8]
```


# Sentence Capitalization

# Printing Steps (L35 - L39)
- with Recursion:
	+ Figure out the bare minimum pieces of info to represent your problem
	+ Give reasonable defaults to the bare minimum pieces of info
	+ Check the base case. Is there any work left to do? If not, return
	+ Do some work. Call your function again, making sure the arguments have changed
	in some way

# Two Sided Steps - Pyramids

# Find the Vowels
- use of `includes()` to decide whether to add to the counter or not
- use of match and then some regex

# Enter the Matrix Spiral (L46 - L48)


# Runtime Complexity (L49 - L51)
- describes the performance of an algorithm
- How much more processing power/time is required to run your algorithm if we double the inputs?
- n * n things or n^2 items (Steps Algorithm)

## Runtime Complexity Types
- **Constant Time:** [1] no matter how many elements we're working with, the algorithm/operation will always
take the same amount of time
- **Logarithmic Time:** [log(n)] You have this if doubling the number of elements you are iterating 
over doesn't double the amount of work. Always assume that searching operations are log(n)
- **Linear Time:** [n] Iterating through all elements in a collection of data. If you see a for 
loop spanning from '0' to 'array.length', you probably 'n', or linear runtime
- **Quasilinear Time:** [n * log(n)] You have this if doubling the number of element you are iterating over
doesn't double the amount of work. Always assume that any sorting operation is n * log(n)
- **Quadratic Time:** [ n ^ 2] Every element in a collection to be compared to every other element. The 
'handshake problem'
- **Exponential Time:** [2 ^ n] If you add a "single" element to a collection, the processing power required
doubles

## Big 'O'
- Big 'O' Notation
	+ O(n) => Linear
	+ O(1) => Constant
	+ O(n^2) => Quadratic
- Referring to Big O people are asking about the runtime complexity of your algorithm

## Identifying RunTime Complexity
- Iterating with a simple for loop through a single collection -> probably O(n)
- Iterating through half a collection -> still O(n) => there are no constants in runtime
- Iterating through two different collections with separate for-loops -> O(n + m)
- Two nested for-loops iterating over the same collection -> O(n^2)
- Two nested for-loops iterating over different collections -> O(n * m)
- Sorting -> O(n * log(n))
- Searching a sorted array -> O(log(n))

## Space Complexity
- similar to runtime but is how much memory the algorithm requires

# Runtime Complexity in Practice - Fibonacci (L52 - L56)
- given that we have a loop that begins at a set number and continually adds one to i AND no additional
work (i.e. secondary loops), we can say it is linear
- Our second solution with recursion is an exponential time algorithm
- Can we improve our fibonacci recursive function? 
	- Our big problem, we are calling the function multiple times with the same argument 
	- The solution? Memoization
		+ Memoization => store the arguments of each function call along with the result. If the function
		is called again with the same arguments, return the precomputed result, rather than running the
		function again
	- "memo" + "ize" => when we "memo-ize" a function...
* 

# The Queue (L57 - L59)

## What's a Data Structure?
- a data structure is some way of organizing information with optimal 'runtime complexity' for adding 
or removing records
- JavaScript natively implements several data structures => you will still be asked about "inferior"
data structures

## The Queue Data Structure
- A queue can be seen as a container of records; the data enters in one part and then exits another part
- adding a record = enqueuing
- removing a record = dequeuing
- Queues follow FIFO => First In, First Out

| Queue 	  | Array Equivalent |
| ------------|:-----------------:|
| Add to Queue| `array.unshift()`  |
| Remove from queue| `array.pop()` |

- whenever we make a Queue class, we essentially initialize an array and block the other methods besides
unshift ("add") and pop ("remove");


## Implementing a Queue

# Underwater Queue Weaving (L60 - L61)



# Stack'Em Up with Stacks (L62 - L63)
- with a Stack, it is FILO => First In, Last Out
- Stack Methods:

| Method | Action|
|:---:|:---:|
| push 	  | Add a record to the stack |
| pop | Remove the "top" record in the stack |
| peek | Return the "top" record without popping it |


# Two Become One (L64 - L66)


# Linked Lists (L67 - L97)
- A linked list is an ordered collection of data, with each element containing a link to its successor
- **Node:** an element in the linked list which contains the data and the reference node
- **Head:** The first node
- **Tail:** the last node
- **Data:** the data that we want to save
- **Reference:** the reference to the next node
- 


# Find the Midpoint

# Circular Lists?

# Step Back from the Tail

# Building a Tree
- For a tree, each box is a node
- a child is any node below any other node
- the upper box is a parent
- nodes at a given level from the SAME PARENT are siblings
- iterating through a tree = traversal
- there are different orders of traversals through a tree
- Breadth-First Traversal => iterate at each level
- Depth-First Traversal => we try to get to the bottom of the tree as soon as possible
- 

# Tree Width with Level Width (L112 - L113)

# My Best Friend, Binary Search Trees

# Validating a Binary Search Tree
- I'm not actually "setting" max or min; I am simply calling the validate function with a max value 
and min value as arguments that I choose

# Back to JavaScript - Events

# Sorting With BubbleSort


# Sort By Selection

# MergeSort (L129 - L132)









