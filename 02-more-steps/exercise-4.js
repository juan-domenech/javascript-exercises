//translate()
//Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.


function translate( text ){

	var translatedText='';

// Create our little dictionary
var dictionary = {
	"merry" : "god",
	"christmas" : "jul",
	"and" : "och",
	"happy" : "gott",
	"new" : "nytt",
	"year" : "år"
}

// Convert string into array
text = text.split(" ");

for ( i in text ){

	var wordToTranslate = text[i];

	//Let's make sure we have that word
	if ( dictionary[wordToTranslate] ){

	// Translate
	translatedText += dictionary[wordToTranslate] +' ';

	// Leave numbers intact
	}else if ( ! isNaN(wordToTranslate ) ) {
		translatedText += wordToTranslate +' ';

	// Unknown word
	}else{
	translatedText += '***'+wordToTranslate+'*** ';

	}

}

// Delete last space and return
return translatedText.slice( 0, -1 );


}