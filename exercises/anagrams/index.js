// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//// Colin's Solution
// function anagrams(stringA, stringB) {

// 	var strA = stringA.replace(/[^\w]/g,"").toLowerCase();
// 	var strB = stringB.replace(/[^\w]/g,"").toLowerCase();

// 	var objA = {};
// 	strA.split('').map((char) => {
// 		objA[char] ? objA[char]++ : objA[char] = 1;
// 	})

// 	var objB = {};
// 	strB.split('').map((char) => {
// 		objB[char] ? objB[char]++ : objB[char] = 1;
// 	})

// 	var countA = Object.keys(objA).length;
// 	var countB = Object.keys(objB).length;
// 	var anagram = false;
// 	if(countA >= countB) {
// 		for(var prop in objA) {
// 			if(!objB[prop]) {

// 				anagram = false;
// 				return;
// 			} else {
// 				if(objA[prop] == objB[prop]) {
// 					anagram = true;
// 				} else {
// 					anagram = false;
// 					return;
// 				}
// 			}
// 		}
// 	} else {
// 		for(var prop in objB) {
// 			if(!objA[prop]) {
// 				anagram = false;
// 				return;
// 			} else {
// 				if(objB[prop] == objA[prop]) {
// 					anagram = true;
// 				} else {
// 					anagram = false;
// 					return;
// 				}
// 			}
// 		}
// 	}

// 	return anagram;
// }

//// Colins's Solution #2
// function anagrams(stringA, stringB) {
	
// 	var strA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// 	var strB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// 	return strA == strB;
// }


//// Solution #1
// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);

// 	if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}

// 	for(let char in aCharMap) {
// 		if(aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function buildCharMap(str) {
// 	const charMap = {};

// 	for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	return charMap;
// }

// Solution #2
function anagrams(stringA, stringB) {
	
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}





module.exports = anagrams;
