var answer = new Array(4);
var score = 0;

answer[0] = "Thirty-five years after the initial appearance of The ThreeMusketeers."
answer[1] = "Bastille."
answer[2] = "Being the twin brother of the king."
answer[3] = "Only at first."

function test(form) {
	for (j = 0; j < 4; j++) {
		currQuestion = j * 3;
		for (i = 0; i < 3; i++) {
			if (form.elements[i+currQuestion].checked) {
				if (form.elements[i+currQuestion].value == answer[j]) {
					alert("Your answer for question " +  (j+1) + " is correct");
					score +=1;
					break;
				}
				else {
					alert("Your answer for question " + (j+1) + " is incorrect, the correct answer is '" + answer[j] + "'");
				}
			}
		}
	}
	alert("You got " + score + " answers correct out of 4")
}