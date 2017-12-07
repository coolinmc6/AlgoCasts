// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

	//// CM Solution #1
	// if(Math.sign(n) > 0) {
	// 	return parseInt(n.toString().split('').reverse().join(''));	
	// } else {
	// 	return parseInt(Math.abs(n).toString().split('').reverse().join('')*-1);	
	// }

	//// CM Solution #2
	// There is a lot going on here...I'd probably go with Stephen's solution below
	return (parseInt(n.toString().split('').reverse().join(''))*Math.sign(n));	

	//// Solution #1
	// Instead of the extra logic, I can just multiply the result by Math.sign(n) which returns 1 if
	// positive, -1 if negative, 0 if 0, and NaN if not a number
	// const reversed =  n.toString().split('').reverse().join('');
	// return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
