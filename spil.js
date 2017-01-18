var canvas;
var ctx;
var xgl;
var ygl;

var watchID = 0;
//I onLoad tilføjes eventlistener
function onLoad(){
document.addEventListener("deviceready", onDeviceReady, false);
var accel = document.getElementById("mycanvas");
	accel.addEventListener(opdaterCanvas, false);
	accel.addEventListener(end,false);
	ctx = accel.getContext("2d");
	mycanvas.width = mycanvas.width;
	ctx.fillStyle="yellow";
	ctx.fillRect(0,0,mycanvas.width,mycanvas.height);
}
//kalder startfunktionen når enheden er klar
function onDeviceReady() {
startWatch();
}
//måler acceleration i bestemte intervaller
function startTegn() {
var options = { frequency: 5 };//vis værdi hvert sekund
watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options); //
}
function stopTegn() {
if (watchID) {
navigator.accelerometer.clearWatch(watchID);
watchID = 0;
}
}
function onSuccess(acceleration) {
//Gem sensorværdier
var accX = acceleration.x ;
var accY = acceleration.y;
var accZ = acceleration.z;
var timestamp = acceleration.timestamp;
//Udskriv værdier i div med navnet accelerometer
document.getElementById('accelerometer').innerHTML = 'Acceleration X: ' + accX + '<br/>' +
'Acceleration Y: ' + accY + '<br />' +
'Acceleration Z: ' + accZ + '<br />' +
'Timestamp: ' + timestamp + '<br />';
}
function onError() {
alert('onError!');
}



function opdaterCanvas(){
	var accel = document.getElementById("mycanvas");
	var ctx = accel.getContext("2d");
	var accelx =event.touches[0].pageX;
	var accely = event.touches[0].pageY
	ctx.lineTo(accelx,accely);
	ctx.stroke();
}



function end(e) {
	e.preventDefault();
}