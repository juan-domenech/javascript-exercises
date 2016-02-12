//reverse()
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse( text ){

	var reversedText = '';

	for (i = 0; i < text.length; i++ ){

		reversedText += text [ (text.length - 1) - i ];
	}
	return reversedText;

}

