var file_input = [];
var file_output = [];
function coding() {
	var i, s = document.getElementById("code").value;
	for (i = 0; i < 100; i++) {
		var a = Math.floor(Math.random() * 100), b = Math.floor(Math.random() * 100); 
		s = "var a = " + a + ", b = " + b + ";" + s;
		s += "foo(a, b);";
		console.log(s);
		if (eval(s) != (a + b)) break;
	}
	if (i != 100) console.log("Fail");
	else console.log("Win");
}