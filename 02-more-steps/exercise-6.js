//filterLongWords()
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords( array, i ){

	var x = 0;
	var result = [];

	for ( x in array){

		if ( array[x].length > i ){

			result.push(array[x]);

		}

	}

	if ( result.length ){
		return result;
	}

}