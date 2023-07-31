function sign(){
		var screen = Number(document.getElementById('screen').value);

		if (screen > 0) {
			Calc.Input.value = -Math.abs(screen);
		}
		else if (screen < 0){
			Calc.Input.value = Math.abs(screen);;
		}
	}

	var values = [];
	var valuesMemory ;
	
	//Takes the input value, and converter into a strign
	function arrayMaker(){

		var screen = document.getElementById('screen').value;
		valuesMemory = screen.charAt(0);
		// console.log(valuesMemory);
		//Checks if each character is a number, if it is, it's saved on a temporary
		//variable for later use
		for (var i = 1; i < screen.length; i++) {
			if (!isNaN(screen.charAt(i)) && screen.charAt(i)!==" ") {
				valuesMemory += screen.charAt(i);
				// console.log('my valuesMemory '+valuesMemory);
			}
		//It push the value of the temporary variable into an array
			else if (isNaN(screen.charAt(i))){
				values.push(valuesMemory);
				console.log(values)
				valuesMemory = screen.charAt(i+1);
				console.log(values)
			}
		}
		values.push(valuesMemory);
		console.log(values);
	}

	//It calculates the average of the input, by calling the arrayMaker function first
	function avg(){
		arrayMaker();
		var avg = 0;
		for (var i = 0; i < values.length; i++) {
			avg += Number(values[i]);
			console.log(avg);
		}
		avg = avg/values.length;
		avg = avg.toFixed(2);
		console.log('the average is ' + avg);
		Calc.Input.value = avg;
		values = [];
	}

	function findPercentage(){
		Calc.Input.value='('+Calc.Input.value+'/100)*';
	}

	function sqr() {
		var screen = document.getElementById('screen').value;
		screen = Math.pow(screen, 2);
		Calc.Input.value = screen;
	}
	// function cub() {
	// 	var screen = document.getElementById('screen').value;
	// 	screen = Math.pow(screen, 3);
	// 	Calc.Input.value = screen;
	// }
	function findSin() {
		var screen = document.getElementById('screen').value;
		screen = Math.sin(screen);
		Calc.Input.value = screen;
	}
	function findCos() {
		var screen = document.getElementById('screen').value;
		screen = Math.cos(screen);
		Calc.Input.value = screen;
	}
	function findTan() {
		var screen = document.getElementById('screen').value;
		screen = Math.tan(screen);
		Calc.Input.value = screen;
	}
	function findLn() {
		var screen = document.getElementById('screen').value;
		screen = Math.log(screen);
		Calc.Input.value = screen;
	}
	function findLog() {
		var screen = document.getElementById('screen').value;
		screen = Math.log10(screen);
		Calc.Input.value = screen;
	}
	function factorial(num) {
		var screen = document.getElementById('screen').value;
  		if (num < 0) 
        	return -1;
  		else if (num == 0) 
      		return 1;
 		 else {
      		return (num * factorial(num - 1));
 		 }
	}
	function findSqrt() {
		var screen = document.getElementById('screen').value;
		screen = Math.sqrt(screen);
		Calc.Input.value = screen;
	}

	var memory;

	function memorySR(mem){
		if (mem === 'save') {
			memory = document.getElementById('screen').value;
		}
		else if (mem === "read") {
			Calc.Input.value += memory;
		}
	}