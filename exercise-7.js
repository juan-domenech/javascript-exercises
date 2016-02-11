var color="";
function getRGB(arg){
	var r=parseInt("0x"+arg.slice(1,3));
	var g=parseInt("0x"+arg.slice(3,5));
	var b=parseInt("0x"+arg.slice(5,7));

	switch(arg){
		case "#000000":
			color="black";
			break;
		case "#FFFFFF":
			color="white";
			break;
		case "#FF0000":
			color="red";
			break;
		case "#00FF00":
			color="green";
			break;
		case "#0000FF":
			color="blue";
			break;
		default:
			color="Unknown color"
	}

	return ("rgb("+r+","+g+","+b+") "+color)
}