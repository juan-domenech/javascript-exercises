function multiply(){
	var numElements = arguments.length;
	console.log("Number of arguments:",numElements);
	for (i=0; i<numElements; i++){
		var valueElement = arguments[i];
		console.log("value:",valueElement)
		for (y=1; y<=10; y++){
			console.log(valueElement+" x "+y+" = "+valueElement*y);
		}
	}
}