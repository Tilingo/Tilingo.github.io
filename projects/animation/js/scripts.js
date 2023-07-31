function play() {

var ball= document.getElementById('ball');

var x = 0;
var y = 0;

// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var id1 = setInterval(start1,5);
var id2 = setInterval(down2, 5);
var id3 = setInterval(left3, 5);
var id4 = setInterval(down4, 5);
var id5 = setInterval(left5, 5);
var id6 = setInterval(down6, 5);
var id7 = setInterval(left7, 5);
var id8 = setInterval(down8, 5);
var id9 = setInterval(left9, 5);
var id10 = setInterval(down10, 5);
var id11 = setInterval(left11, 5);
var id12 = setInterval(down12, 5);
var id13 = setInterval(left13, 5);

function start1(){
	if (x == 1300) {
		clearInterval(id1);
	}
	else{
		x++;
		ball.style.left = x + 'px';
		// console.log(y);
	}
}

function down2(){
	if (x == 1300 && y < 100) {
		if (y == 100) {
			clearInterval(id2);
		}
		else {
			y++;



			ball.style.top = y + 'px';
			console.log('second'+y)
		}
	}
	
}
function left3(){
	if(y == 100){
		if (x == 0) {
		clearInterval(id3);
		}
		else{
			x-=2;



			ball.style.left = x + 'px';
			console.log('three '+x);
		}
	}
	
}

function down4(){
	if (x == 0 && y < 200 && y>99) {
		if (y == 200) {
		clearInterval(id4);
		}
		else {
			y++;



			ball.style.top = y + 'px';
			// console.log('fourth'+y)
		}
	}
	
}
function left5(){
	if(y == 200){
		if (x == 1300) {
		clearInterval(id5);
		}
		else{
			x+=2;
			ball.style.left = x + 'px';
			console.log('five '+x);
		}
	}
	
}
function down6(){
	if (x == 1300 && y > 199 && y < 300) {
		if (y == 300) {
		clearInterval(id6);
		}
		else {
			y++;



			ball.style.top = y + 'px';
			// console.log('sixth'+y)
		}
	}
	
}

function left7(){
	if(y == 300){
		if (x < 4) {
		clearInterval(id7);
		}
		else{
			x-=3;



			ball.style.left = x + 'px';
			console.log('seven '+x);
		}
	}
	
}

function down8(){
	if (x == 1 && y > 299 && y < 400) {
		if (y == 400) {
		clearInterval(id7);
		}
		else {
			y++;



			ball.style.top = y + 'px';
			// console.log('sixth'+y)
		}
	}
	
}

function left9(){
	if(y == 400){
		if (x == 1300) {
		clearInterval(id8);
		}
		else{
			x+=3;
			ball.style.left = x + 'px';
			console.log('0 '+x);
		}
	}
}

function down10(){
	if (x == 1300 && y > 399 && y < 500) {
		if (y == 500) {
		clearInterval(id10);
		}
		else {
			y++;



			ball.style.top = y + 'px';
			// console.log(y)
		}
	}
	
}
function left11(){
	if(y == 500){
		if (x == 0) {
		clearInterval(id8);
		}
		else{
			x-=4;



			ball.style.left = x + 'px';
			console.log('11 '+x);
		}
	}
}
function down12(){
	if (x == 0 && y > 499 && y < 600) {
		if (y == 600) {
		clearInterval(id12);
		}
		else {
			y++;



			ball.style.top = y + 'px';
			// console.log(y)
		}
	}
	
}
function left13(){
	if(y == 600){
		if (x == 1300) {
		clearInterval(id13);
		ball.style = 'pointer-events: none;';
		}
		else{
			x+=4;
			ball.style.left = x + 'px';
			console.log('13 '+x);
		}
	}
}


}

var score = 0;

function scoreBoard() {
	score++;
	document.getElementById('board').innerHTML = 'SCORE: '+ score;
}
function startScore(){
	document.getElementById('ball').style = 'pointer-events: auto;'
}
function reset() {
	score = 0;
	document.getElementById('board').innerHTML = 'SCORE: '+ 0;
}

