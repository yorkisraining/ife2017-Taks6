//create by rain 2017.3.3

window.onload = function() {
	var cxt1 = document.getElementById("canvas1").getContext('2d');
	var cxt2 = document.getElementById("canvas2").getContext('2d');
	
	Rightcolor(cxt1);
	leftColor(cxt2);
}

function Rightcolor(cxt) {
	
	var grd = cxt.createLinearGradient(0, 0, 400, 400);
	grd.addColorStop(0, 'rgb(255,255,255)');
	grd.addColorStop(0.5, 'rgb(0,0,255)');
	grd.addColorStop(1, 'rgb(0,0,0)');
	cxt.fillStyle = grd;
	cxt.fillRect(0, 0, 400, 400);
	
	
}
function leftColor(cxt) {
	
	var grd = cxt.createLinearGradient(0, 0, 50, 400);
	grd.addColorStop(0, 'rgb(255,0,0)');
	grd.addColorStop(0.33, 'rgb(0,255,0)');
	grd.addColorStop(0.67, 'rgb(0,0,255)');
	grd.addColorStop(1, 'rgb(255,0,0)');
	cxt.fillStyle = grd;
	cxt.fillRect(0, 0, 50, 400);
}
