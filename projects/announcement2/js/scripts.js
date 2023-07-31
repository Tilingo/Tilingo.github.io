var images=['gal1.jpg', 'gal2.jpg', 'gal3.jpg','gal4.jpg','gal5.jpg',];
var imagesLength = images.length - 1;
var currentPic = 0;


function	changePic(x){
	currentPic+=x;
	//If current picture is the last one on the array,
	//Next picture will be the first picture on the array.
	if (currentPic>imagesLength) {
		currentPic=0;
	}
	//If current picture is the first one on the array,
	//Next picture will be the last picture on the array.
	if (currentPic<0){
		currentPic=imagesLength;
	}
	document.getElementById('img').src=images[currentPic];
}

var slideIndex = 1;
showDivs(slideIndex);

//It's called on click, it's job it's to call the function
//that allows the picture to be changed, each time with a different
//index.
function plusDivs(n){
	showDivs(slideIndex+=n);
}

//Show the pictures on the document and hides the other ones
function showDivs(n){
	var i;
	var x=document.getElementsByClassName('mySlides');
	if (n>x.length) {
		slideIndex=1;
	}
	if (n<1) {
		slideIndex=x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}