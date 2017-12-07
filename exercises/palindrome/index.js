// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	//// CM Solution #1
	// return str.split('').reverse().join('') == str ? true : false;

	//// CM Solution #2: I can just return the conditional; the ternary above is excess logic
	// return str.split('').reverse().join('') === str;

	//// Solution #1
	// const reversed = str.split('').reverse().join('');
	// return str === reversed;

	//// Solution #2
	// one problem it has is that it compares the same two elements twice; the double comparison problem
	// NOTICE: I don't have to set str.split('') to an array. I can just call str
	return str.split('').every((char, i) => {
		return char === str[str.length -i - 1];
	});

}

module.exports = palindrome;
