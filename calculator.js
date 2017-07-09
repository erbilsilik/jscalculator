function Calculator(){
	this.screenElement = document.getElementById("display");
	this.screen = [];

	this.update = function(){
		var output = '';

		for(digit in this.screen){
			output+= this.screen[digit];
		}

		this.screenElement.value = output;

	}

	this.addToScreen = function(value){
		if (parseInt(value) && parseInt(this.screen[this.screen.length-1])){
			this.screen[this.screen.length-1]+= value;
		}

		else{
			this.screen.push(value);
		}

		this.update();

	}
}