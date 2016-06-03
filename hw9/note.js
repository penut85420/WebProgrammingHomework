var nZ = 3;
var CMC = [];
function addNote() {
	var mX = document.getElementById('x').value,
		mY = document.getElementById('y').value,
		mStr = document.getElementById('notetext').value;
	var IMG = newIMG(mX, mY); 
	var tt = newTXT(mStr, mX, mY)
	CMC.push(IMG); CMC.push(tt);
	document.body.appendChild(tt);
	document.body.appendChild(IMG);
	localStorage.setItem(mX + ' ' + mY + ' ' + mStr, mStr);
}

function newIMG(x, y) {
	var IMG = document.createElement('img');
	IMG.setAttribute("height", "150");
	IMG.setAttribute("width", "120");
	IMG.setAttribute("class", "note");
	IMG.setAttribute("style", PinkiePie(y, x, nZ++));
	IMG.setAttribute("src", "postIt.png");
	return IMG;
}

function newTXT(str, x, y) {
	tt = document.createElement('p');
	tt.setAttribute("style", PinkiePie(y, x, nZ++));
	tt.setAttribute("class", "notetext");
	tt.innerHTML = str;
	return tt;
}

function clearNote() {
	for (var i in CMC)
		document.body.removeChild(CMC[i]);
	CMC = [];
	for (var key in localStorage)
		localStorage.removeItem(key);	
}

function loadLocal() {
	for (var key in localStorage) {
		var m = key.split(" ");
		var IMG = newIMG(m[0], m[1]);
		var TXT = newTXT(m[2], m[0], m[1]);
		CMC.push(IMG); CMC.push(tt);
		document.body.appendChild(tt);
		document.body.appendChild(IMG);
	}
}

function PinkiePie(Top, Left, Z) {
	return "top: " + Top + "px; left: " + Left + "px; z-index: " + Z + ";";
}