//isVowel() function
//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel( character){

	var vowels="aeiou";

	if (character.length != 1){
		alert("Character lenght incorrect!");
		return -1;

	} else if ( vowels.indexOf( character ) >= 0 ){
			return true;

		} else {
			return false
		}

	}
