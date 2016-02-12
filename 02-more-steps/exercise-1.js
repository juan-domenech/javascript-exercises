//translate()
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate( text ){
	var translation = '';
	var currentChar;

	for ( var i=0; i<text.length; i++ ){

		currentChar = text[i];

		switch( text[i] ){
			case('a'):
				translation += text[i];
				break;
			case('e'):
				translation += text[i];
				break;
			case('i'):
				translation += text[i];
				break;
			case('o'):
				translation += text[i];
				break;
			case('u'):
				translation += text[i];
				break;
			case(' '):
				translation += ' ';
				break;
			default:
				translation += text[i] + 'o' + text[i];
		}

	}
	return translation;
}

