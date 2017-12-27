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
		let last;

		while(node) {
			if(node.next == null) { last = node };
			node = node.next;
		}
		return last;
	}


}

module.exports = { Node, LinkedList };
