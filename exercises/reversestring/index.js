// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// My original solution
	// return str.split('').reverse().join('');

	//// Stephen's Solution #1
	// const arr = str.split('');
	// arr.reverse();
	// return arr.join('');

	//// Solution #1 - Cleaned Up
	// return str.split('').reverse().join('');

	// // Solution #2 => WITHOUT Reverse Helper
	// let reversed = '';

	// for(let character of str) {
	// 	reversed = character + reversed;
	// }

	// return reversed;


	//// Solution #3
	// return str.split('').reduce((reversed, character) => {
	// 	return character + reversed;
	// }, '');

	//// Solution #3 - Cleaned Up
	
	return str.split('').reduce((rev, char) => char + rev, '');


}

module.exports = reverse;
