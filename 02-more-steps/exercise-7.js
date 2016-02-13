//charFreq()
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq( string ){

	var obj={};

	for (i=0; i < string.length; i++ ){

		if ( ! obj[ string[i] ] ){

			obj[ string[i] ] = 1;

		}else{

		obj[ string[i] ] += 1;

		}

	}
	if ( Object.keys(obj).length != 0 ){
		return obj;
	}

}