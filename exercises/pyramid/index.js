// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// 1 => 1 
// 2 => 1-3
// 3 => 1-3-5
// 4 => 1-3-5-7
// 5 => 1-3-5-7-9
// Top layer is always 1; Bottom layer is always n*2-1
// Number of #'s in a row is always (2 * row) - 1
// Number of spaces is determined by width of bottom layer and current row
// The spaces on each side are equal
// Number of #'s = 





//// Colin's Solution
// function pyramid(n) {
// 	var baseWidth = n*2 - 1;

// 	for(let i = 1; i <= n; i++) {
		
// 		var pounds = (i*2)-1;
// 		var halfSpaces = (baseWidth - pounds)/2;
// 		var string = buildString(halfSpaces, " ") + buildString(pounds, "#") + buildString(halfSpaces, " ");
// 		console.log(string);
// 	}
// }

// function buildString(num, char) {
// 	var str = '';
// 	for(let i = 0; i < num; i++) {
// 		str += char;
// 	}
// 	return str;
// }

//// Solution #1
// function pyramid(n) {
// 	const midpoint = Math.floor((2*n - 1)/2);
// 	for(let row = 0; row < n; row++) {
// 		let level = '';

// 		for(let column = 0; column < 2 * n -1; column++) {
// 			if(midpoint - row <= column && midpoint + row >= column) {
// 				level += "#";
// 			}else {
// 				level += " ";
// 			}
// 		}
// 		console.log(level);
// 	}
// }

//// Solution #2 - Recursive
function pyramid(n, row = 0, level = '') {
	
	// set up our base case
	if(row === n) {
		return;
	}

	// we know the max length of a level (they are all equal to 2*n-1)
	if(level.length === 2*n-1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midpoint = Math.floor((2*n-1) / 2);

	let add;
	if(midpoint - row <= level.length && midpoint + row >= level.length) {
		add = '#';
	} else {
		add = " ";
	}

	pyramid(n, row, level + add);

	
}


module.exports = pyramid;
