//sum() & multiply()
//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(){

	var totalSum=0;
	var numArguments=arguments.length

	for (i = 0; i < numArguments; i++ ){

		totalSum += arguments[i];
	}
	return totalSum;

}

//
//

function multiply(){

	var numArguments=arguments.length

	if ( numArguments < 2 ){
		alert("Sorry: 2 or more values are required!")
		return -1

	} else {

		var totalProduct = 1;

    for (i = 0; i < numArguments; i++ ){
			totalProduct = totalProduct * arguments[i];

		}
		return totalProduct;

	}

}
