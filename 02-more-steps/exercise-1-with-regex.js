//translate()
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate( text ){
	var translation = '';
	var currentChar;

	for ( var i=0; i<text.length; i++ ){

		currentChar = text[i];

		if ( /[aeiou ]/i.test( currentChar ) ) {
			translation += text[i];
		}
		else {
			translation += text[i] + 'o' + text[i];
		}

	}

	return translation;
}
