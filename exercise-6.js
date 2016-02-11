function getRGB(arg){
	var r=parseInt("0x"+arg.slice(1,3));
	var g=parseInt("0x"+arg.slice(3,5));
	var b=parseInt("0x"+arg.slice(5,7));

return ("rgb("+r+","+g+","+b+")")
}