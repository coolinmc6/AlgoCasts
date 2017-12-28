// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// const node = new Node(data, this.head);
		// this.head = node;
		this.head = new Node(data, this.head);
	}

	// I originally tried to do a recursive solution, it didn't work
	// don't be afraid to initialize variables with a starting point; i.e. node = this.head
	// I can then do my check, increment my counter variable, and then set my node variable to the next node
	size() {
		let counter = 0;
		let node = this.head;

		while(node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		let last = null;

		while(node) {
			if(node.next == null) { last = node };
			node = node.next;
		}
		return last;
	}

	clear() {
		delete this.head;
		// this.head = null; // Stephen's Solution
	}

	removeFirst() {
		// my code worked without this check
		if(!this.head) {
			return;
		}

		this.head = this.head.next
	}

	removeLast() {
		// It's not working for some reason...it doesn't appear to be catching
		// - I forgot to "return" after finding this.head.next == null.

		// if(!this.head) {
		// 	return;
		// }
		// if(this.head.next == null) {
		// 	this.head = null;
		// 	return;
		// }
		// let previous = this.head;
		// let node = this.head.next;

		// while(node) {

		// 	if(node.next == null) { 
		// 		previous.next == null;
		// 		return;	
		// 	} else {
				
		// 		previous = node;
		// 		node = node.next;
		// 	}
			
		// }



		if(!this.head) {
			return;
		}

		if(!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;

		while(node.next) {
			previous = node;
			node = node.next;
		}

		previous.next = null;
	}

	insertLast(data) {
		//// CM Solution
		if(!this.head) {
			this.head = new Node(data);
			return;
		}

		let last = this.getLast();
		if(last) {
			last.next = new Node(data);
		}


		//// Stephen's Solution
		// const last = this.getLast();
		// if(last) {
		// 	// there are some existing nodes in our chain
		// 	last.next = new Node(data);
		// } else {
		// 	// the chain is empty
		// 	this.head = new Node(data);
		// }
	}

	getAt(index) {
		//// CM Solution
		// let counter = 0;
		// let node = this.head;
		// if(node == null) {
		// 	return node;
		// }

		// while(node) {
		// 	if(counter == index) {
		// 		return node;
		// 	}
		// 	node = node.next;
		// 	counter++;
		// }

		//// Stephen's Solution
		let counter = 0;
		let node = this.head;

		while(node) {
			if(counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		// // CM Solution
		// if(index+1 > this.size()) {
		// 	return null;
		// }

		// if(index == 0) {
		// 	this.head = this.getAt(1)
		// 	return;
		// }
		// let node = this.getAt(index-1);
		// let next = this.getAt(index+1);
		// node.next = next;

		//// Stephen's Solution
		if(!this.head) {
			return;
		}

		if(index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if(!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;

	}

	insertAt(data, index) {
		//// CM Solution
		// if(!this.head) {
		// 	this.head = new Node(data);
		// 	return;
		// }
		// if(index === 0) {
		// 	let chain = this.head;
		// 	this.head = new Node(data);
		// 	this.head.next = chain;
		// 	return;
		// }
		// if(index+1 > this.size()) {
		// 	this.insertLast(data);
		// 	return;
		// }

		// let chain = this.getAt(index);
		// let previous = this.getAt(index-1);
		// previous.next = new Node(data);
		// previous.next.next = chain;

		//// Stephen's Solution
		if(!this.head) {
			this.head = new Node(data);
			return;
		}

		if(index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		previous.next = new Node(data, previous.next);

	}






}

module.exports = { Node, LinkedList };
