function multiply(){

	var numElements = arguments.length;
	//console.log("Number of arguments:",numElements);

	//Loop the 10 rows of the multiplication table
	for (x=1; x<=10; x++){
		var result="";
		//Loop as many arguments
		for (y=0; y<numElements; y++){

				//Get the current argument
				var valueElement = arguments[y];
				result = result+valueElement+" x "+x+" = "+x*valueElement+"\t";
		}
		//Print row
		console.log(result);
		result="";
	}
}

