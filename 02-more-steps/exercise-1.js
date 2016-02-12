//translate()
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(arg){
	var result="";
	//console.log(arg.length);
	for ( var i=0; i<arg.length; i++){

		switch(arg[i]){
			case("a"):
				result=result+arg[i];
				break;
			case("e"):
				result=result+arg[i];
				break;
			case("i"):
				result=result+arg[i];
				break;
			case("o"):
				result=result+arg[i];
				break;
			case("u"):
				result=result+arg[i];
				break;
			case(" "):
				result=result+" ";
				break;
			default:
				result=result+arg[i]+"o"+arg[i];
		}

	}
	return result;

}