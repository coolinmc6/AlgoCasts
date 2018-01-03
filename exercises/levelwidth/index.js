// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// CM Solution #1 => passes tests
// function levelWidth(root) {
// 	let counter = [];
// 	let working = [];
// 	working.push(root);		// I can just do => let working = [root, 's']; I don't have to push elements
// 	counter.push(0);
// 	working.push('s');
// 	while(working.length > 1) {
// 		let node = working.shift();
		
// 		if(node.children) {
// 			working.push(...node.children);
// 			counter[counter.length-1]++
// 		} else if(node == 's' && working.length == 0) {
// 			return;
// 		} else if(node == 's' && working.length > 0) {
// 			working.push('s');
// 			counter.push(0);
// 		}
// 	}
// 	return counter;

// }


function levelWidth(root) {
	const arr = [root, 's'];
	const counters = [0];

	while(arr.length > 1) {
		const node = arr.shift();

		if(node === 's') {
			counters.push(0);
			arr.push('s')
		} else {
			arr.push(...node.children);
			counters[counters.length-1]++;
		}
	}

	return counters;

}
module.exports = levelWidth;
