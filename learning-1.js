// Named Function Expressions
//
//You can give names to functions defined in function expressions, with syntax like a function declaration. This does not make it a function declaration, and the name is not brought into scope, nor is the body hoisted
// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
//
function f(){
	function a(){
		alert("I'm function A");
	}
	var x = function b(){
		alert("I'm function B");
	}
	a(); // Work
	b(); // Won't work
}
f();

//
//I find that this technique helps avoid hoisting problems because all of your declarations are part of your signature. It also helps with memory management as garbage collection works exceptionally well with function arguments and you won't run into memory leak problems (ahem... IE variables). The beauty of it all is that it is also unobtrusive thanks to the fact that JavaScript does not enforce signatures. That being said, I highly solicit learning the way the JavaScript engine works because little tricks like this one are no substitute for a concrete understanding of the language parser.
//
function addAll(arr)

//Then I would implement it as such:

function addAll(arr, i, sum) {
sum = 0;
for (i in arr) {
sum += arr[i];
}
return sum;
}

//Ben Cherry
//Well that's an interesting approach to local variables. Not sure I'm on board with using that pattern, I'd need more concrete information about how garbage collection works.
//Regardless, I'd think it would be much cleaner and safer to do something like this:
var addAll = (function(i, sum) {
	return function (arr) {
		sum = 0;
		for (i in arr) {
		sum += arr[i];
		}
	};
}());
//But that approach is probably not great for memory if the function is not used very often, because the execution context of the anonymous function has to be kept around so the inner function still has access to those variables in its closure. If it were executed a lot, though, it might actually be better since each time addAll() is invoked, you only need to put one variable in the new execution context, while the other "local" variables are continually reused from the old one.

