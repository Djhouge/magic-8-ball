$(document).ready(function() {
//Object
magic8Ball = {};
//Property
magic8Ball.listOfAnswers = ["When you're ready", "Next year", "Three months", "Indubitably", "Tomorrow", "If you believe", "Aim for the stars", "Probably not", "You can do it", "You are amazing", "Don't think so", "Yes", "No"];
	$("#answer").hide();
	var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		//wait a half second before showing prompt
		setTimeout(
			function() {
				//show prompt
		var question = prompt("Ask a Yes/No question!");
		magic8Ball.askQuestion(question);
			}, 500);
		$("#answer").fadeIn(4000);
	};
	$("#questionButton").click(onClick);
	
//Define method
magic8Ball.askQuestion = function(question) {
	//create random number between 0 and 1
	var randomNumber = Math.random();
	//change random number to range from 0 to number of items in array
	var randomNumberAnswer = randomNumber * this.listOfAnswers.length;
	//round down the number to whole number
	var randomIndex = Math.floor(randomNumberAnswer);
	//use that number to index an answer from the array
	var answer = this.listOfAnswers[randomIndex];
$("#8ball").effect("shake");	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").text(answer);
	
	console.log(question);
	console.log(answer);
};
});