//findLongestWord()
//Write a function findLongestWord() that takes an input of words and returns the length of the longest one.

function findLongestWord( input ){

	var longest=0;
	var value=0;

		for ( i in input ){

			value = input[i].length;

			if ( value > longest ){

				longest = value;

		}

}
return longest;

}