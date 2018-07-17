(function(){
	this.createNumbers = function(){
		var numbers = document.getElementById("numbers");

		for(var i=9; i>=0; i--){
			var oneNum = document.createElement("button");
			oneNum.innerHTML = i;
			oneNum.addEventListener("click", this.clickNum.bind(this, i));
			numbers.appendChild(oneNum);
		}
	}

	this.createOperators = function(){
		var op = document.getElementById("operators"),
			operators = ['+', '-', '*', '/', '√', 'log', '='];

		for(var i in operators){
			var oneOp = document.createElement("button");
			oneOp.innerHTML = operators[i];
			oneOp.addEventListener("click", this.clickOp.bind(this, operators[i]));
			op.appendChild(oneOp);
		}
	}

	var resultDOM = document.getElementById("result");

	this.clickNum = function(num){
		resultDOM.value += num;
	}

	this.clickOp = function(op){
		if(op == '='){
			this.printResult();
		} else {
			resultDOM.value += " "+ op +" ";
		}
	}

	this.printResult = function(){
		var splittedArgs = resultDOM.value.split(" "),
			actualResult = parseFloat(splittedArgs[0]);

		for(var i=1; i<splittedArgs.length; i+=2){
			var num = parseFloat(splittedArgs[i+1]);

			switch(splittedArgs[i]){
				case '+':   actualResult += num; break;
				case '-':   actualResult -= num; break;
				case '*':   actualResult *= num; break;
				case '/':   actualResult /= num; break;
				case '√':   actualResult = Math.pow(num, 1/actualResult); break;
				case 'log': actualResult = Math.log(num)/Math.log(actualResult); break;
			}
		}

		resultDOM.value = actualResult;

		//resultDOM.value = eval(resultDOM.value);
	}

	this.init = function(){
		this.createNumbers();
		this.createOperators();
	}

	this.init();
})();