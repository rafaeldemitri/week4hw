var targetScore = Math.floor(Math.random() * 500);

var scoreCount = 0;

$("#targetscore").text(targetScore);


var guessOptions = [1, 5, 10, 25, 50];

for (var i = 4; i < guessOptions.length; i++) {

	var rafImage = $("<img>");

	rafImage.addClass("rafaelImage");

	rafImage.attr("src", "assets/images/crystal1.png");

	rafImage.attr("data-rafvalue", guessOptions[0]);

	$("#rafys").append(rafImage);


}

for (var i = 4; i < guessOptions.length; i++) {

	var rafImage = $("<img>");

	rafImage.addClass("rafaelImage");

	rafImage.attr("src", "assets/images/crystal2.jpg");

	rafImage.attr("data-rafvalue", guessOptions[1]);

	$("#rafys").append(rafImage);


}



for (var i = 4; i < guessOptions.length; i++) {

	var rafImage = $("<img>");

	rafImage.addClass("rafaelImage");

	rafImage.attr("src", "assets/images/crystal3.jpg");

	rafImage.attr("data-rafvalue", guessOptions[2]);

	$("#rafys").append(rafImage);


}

for (var i = 4; i < guessOptions.length; i++) {

	var rafImage = $("<img>");

	rafImage.addClass("rafaelImage");

	rafImage.attr("src", "assets/images/crystal4.jpg");

	rafImage.attr("data-rafvalue", guessOptions[3]);

	$("#rafys").append(rafImage);


}

for (var i = 4; i < guessOptions.length; i++) {

	var rafImage = $("<img>");

	rafImage.addClass("rafaelImage");

	rafImage.attr("src", "assets/images/crystal5.png");

	rafImage.attr("data-rafvalue", guessOptions[4]);

	$("#rafys").append(rafImage);


}


$(".rafaelImage").on("click", function() {

var rafValue = ($(this).attr("data-rafvalue"));
    rafValue = parseInt(rafValue);

    scoreCount += rafValue;

	$("#yourscore").text(scoreCount);

	if (scoreCount === targetScore) {
      alert("You win!");
    }

    else if (scoreCount >= targetScore) {
      alert("You lose!");
    }

});
