// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	//// CM Solution
	// var arr = str.split('')
	// var obj = {};
	// arr.map((char) => {
	// 	return obj[char] ? obj[char]++ : obj[char] = 1;
	// })
	// var maxValue = 0;
	// for(var prop in obj) {
	// 	if(maxValue < obj[prop]) {
	// 		maxValue = obj[prop];
	// 		var high = prop;
	// 	}
	// }
	// return high;

	// Incomplete - pre-Solution play-around
	// var chars = {};
	// for(let char of string) {
	// 	// if(!chars[char]) {
	// 	// 	chars[char] = 1;
	// 	// } else {
	// 	// 	chars[char]++
	// 	// }
	// 	// I like this! ** #cool #RememberThis
	// 	chars[char] = chars[char] + 1 || 1;
	// }

	// Solution #1
	const charMap = {};
	let max = 0;
	let maxChar = '';

	for(let char of str) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for(let char in charMap) {
		if(charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;

}

module.exports = maxChar;
