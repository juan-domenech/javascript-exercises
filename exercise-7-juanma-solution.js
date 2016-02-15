// JuanMa's solution


function getRGB(colorHex) {
​
	var aliases = {
		"#000000" : "Black",
		"#FFFFFF" : "White",
		"#FF0000" : "Red",
		"#00FF00" : "Green",
		"#0000FF" : "Blue"
	};
​
	var splitted = ( colorHex.toUpperCase() ).match(/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/);
​
	var red = parseInt( splitted[1],16 );
	var green = parseInt( splitted[2],16 )
	var blue = parseInt( splitted[3],16 )
​
	var RGBcolors = [red,green,blue]
​
	var result = "RGB("+ RGBcolors.join(",") + ")";
​
	if (aliases[colorHex]) {
		result += " | " + aliases[colorHex];
	}
​
	return result;
}