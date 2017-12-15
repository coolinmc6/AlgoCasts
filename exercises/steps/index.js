// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Colin's Solution #1 => I didn't do spaces -= 1, just 'spaces - 1', so the 'spaces' variable never changed
// function steps(n) {
// 	var spaces = n-1;
// 	for(var i = 1; i <= n; i++) {
// 		var str = printXTimes(i, '#') + printXTimes(spaces, ' ');
// 		console.log(str);
// 		spaces -= 1;
// 		debugger;
// 	}
// }

// function printXTimes(n, char) {
// 	let str = ''
// 	for(var i = 0; i < n; i++) {
// 		str += char;
// 	}
// 	return str;
// }



//// Solution #1
// function steps(n) {
	
// 	for(let row = 0; row < n; row++) {
// 		let stair = '';

// 		for(let column = 0; column < n; column++) {
// 			if(column <= row) {
// 				stair += '#';
// 			} else {
// 				stair += ' ';
// 			}
// 		}
// 		console.log(stair);
// 	}


// }

//// Solution #2
function steps(n, row = 0, stair = '') {
	
	if(n === row) {
		return;
	}

	if(n === stair.length) {
		console.log(stair);
		return steps(n, row + 1)
	}

	// if(stair.length <= row) {
	// 	stair += "#";
	// } else {
	// 	stair += ' ';
	// }
	const add = stair.length <= row ? '#' : ' ';
	steps(n,row, stair + add);


}


module.exports = steps;
