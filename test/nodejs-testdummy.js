(function(){
	var fruits = ["apple", "orange", "lemon", "peach", "mandarin orange", "lime", "grapes"],
		citrus = ["orange", "lemon", "mandarin orange", "lime"],
		parameter = [fruits, citrus],
		node_test = require("../src/cs_nodejs-speedtest.js");

	var NBP = function(params){
		var count = 0;
		for(var i = 0; i < params[0].length; i++){
			for(var j=0; j < params[1].length; j++){
				if(params[0][i].indexOf(params[1][j]) >= 0){
					count++;
					break;
				}
			}
		}
	};

	var test = new node_test.nodeSpeedTest(NBP, parameter, 20000);
	test.startTest();
})();

