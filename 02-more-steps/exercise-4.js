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

	//Let's make sure we have that word
	if ( dictionary[text[i]] ){

	// Translate
	translatedText += dictionary[text[i]] +' ';
	}else{

	translatedText += '***'+text[i]+'*** ';

	}

}

// Delete last space and return
translatedText = translatedText.slice( 0, -1 );
return translatedText;


}